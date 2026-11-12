"""Exact-property public-source media; provenance is not a claim of a licence."""
import base64,hashlib,html,io,ipaddress,json,re,socket,urllib.request
from html.parser import HTMLParser
from urllib.parse import urlsplit,urljoin,quote
from datetime import datetime,timezone
from PIL import Image,ImageOps
GENERIC=re.compile(r'logo|favicon|placeholder|pixel|default[-_]social|footer|shutterstock|adobestock|istock',re.I)
class MediaUnavailable(ValueError):pass
def safe(url):
 p=urlsplit(url)
 if p.scheme!='https' or not p.hostname or p.username or p.password or p.port not in [None,443]:raise ValueError('Public HTTPS media required')
 for a in socket.getaddrinfo(p.hostname,443,type=socket.SOCK_STREAM):
  if not ipaddress.ip_address(a[4][0]).is_global:raise ValueError('Non-public media host')
 return url
class Redirect(urllib.request.HTTPRedirectHandler):
 def redirect_request(self,req,fp,code,msg,headers,newurl):safe(newurl);return super().redirect_request(req,fp,code,msg,headers,newurl)
def get(url):
 safe(url);opener=urllib.request.build_opener(Redirect())
 with opener.open(urllib.request.Request(url,headers={'User-Agent':'LoveOurListings-SourceMedia/1.0'}),timeout=30) as r:
  b=r.read(16*1024*1024+1)
  if len(b)>16*1024*1024:raise ValueError('Media too large')
  return b
class Page(HTMLParser):
 def __init__(self):super().__init__();self.candidates=[];self.author=None;self.description=None;self.title=None
 def handle_starttag(self,t,a):
  d=dict(a);key=d.get('property',d.get('name','')).lower()
  if t=='meta':
   if key in ['og:image','twitter:image','twitter:image:src']:self.candidates.append((0 if key=='og:image' else 2,d.get('content',''),'source-featured-meta',''))
   if key in ['author','article:author']:self.author=d.get('content')
  if t=='img':
   src=d.get('data-src') or d.get('src','');alt=d.get('alt','');cl=d.get('class','')
   if 'wp-post-image' in cl:
    # First featured image belongs to the source article; later ones may be related posts.
    if not any(x[2]=='source-featured-image' for x in self.candidates):
     self.candidates.insert(0,(1,d.get('data-orig-file') or src,'source-featured-image',alt))
   elif ('property picture 1 of' in alt.lower() or 'picture island location' in alt.lower()):self.candidates.insert(0,(0,src,'exact-listing-first-property-photo',alt))
def resolve(source_url,root,fetch=get,raw=None,publisher=None,allow_youtube=False,crop_box=None):
 checked=datetime.now(timezone.utc).isoformat();b=raw if raw is not None else fetch(source_url);b=b.encode() if isinstance(b,str) else b
 if allow_youtube:
  data=json.loads(b);thumb=data['thumbnail_url'];maximum=re.sub(r'/[^/]+\.jpg$', '/maxresdefault.jpg',thumb);candidates=[(0,maximum,'original-tour-host-preview',data.get('title','')),(1,thumb,'original-tour-host-preview',data.get('title',''))];publisher=data.get('author_name','Original tour publisher')+' / YouTube'
 else:
  text=b.decode('utf8','replace');p=Page();p.feed(text);candidates=sorted(p.candidates,key=lambda x:x[0]);publisher=publisher or urlsplit(source_url).hostname
  if urlsplit(source_url).hostname=='www.countrylife.co.uk':
   hero=re.search(r'<figure[^>]*>[\s\S]*?image--hero__caption[\s\S]*?</figure>',text)
   if hero:
    caption=re.search(r'\(Image credit:\s*([^<]+?)\)',html.unescape(re.sub('<[^>]+>',' ',hero[0])))
    if caption:publisher=publisher+' · '+caption[1].strip()
  # Explicit in-page copy restrictions are a review exception, not a fabricated permission grant.
  if re.search(r'no (?:part|portion) .{0,100}(?:reproduc|republish)|reproduction (?:is )?(?:strictly )?prohibited',re.sub('<[^>]+>',' ',text),re.I):raise MediaUnavailable('Source expressly restricts reproduction; original embed/source link requires review')
 # A WordPress featured class can belong to a related article. Never fall back
 # to its different property when the actual article metadata photo is too small.
 meta_assets={urlsplit(html.unescape(u)).path for _,u,kind,_ in candidates if kind=='source-featured-meta'}
 if meta_assets:candidates=[c for c in candidates if c[2]!='source-featured-image' or urlsplit(html.unescape(c[1])).path in meta_assets]
 # Recover original bytes only from the same observed derivative URL; never invent another property.
 expanded=[]
 for rank,url,selection,alt in candidates:
  u=html.unescape(url);original=None
  if '/https://' in u:original='https://'+u.split('/https://',1)[1]
  elif 'image.hestia.immo/' in u:
   token=u.rsplit('/',1)[-1].rsplit('.',1)[0]
   try:original=base64.urlsafe_b64decode(token+'='*((-len(token))%4)).decode()
   except Exception:pass
  elif '?' in u and any(x in u for x in ['robbreport.com/wp-content','resources.pamgolding.co.za/content/properties','images.nzsothebysrealty.com/property/']):original=u.split('?',1)[0]
  if original:expanded.append((rank,original,selection+'-original-from-observed-derivative',alt))
  expanded.append((rank,u,selection,alt))
 # Prefer a larger variant only when that exact asset variant occurs in the retrieved source HTML.
 source_text=html.unescape(b.decode('utf8','replace'))
 all_observed=re.findall(r'https://[^\s<>"\']+',source_text)
 high=[]
 for candidate in expanded:
  rank,u,selection,alt=candidate
  token=u.rsplit('/',1)[-1]
  token=re.sub(r'_\d+\.jpg$','_',token)
  variants=[]
  for observed in all_observed:
   if token not in observed or observed==u:continue
   width=re.search(r'(?:width=|_)(\d{3,4})(?:[/.]|,|%)',observed)
   if width and int(width[1])>=1600:variants.append((int(width[1]),observed))
  for width,variant in sorted(set(variants))[:2]:high.append((rank,variant,selection+'-larger-variant-observed-in-source',alt))
  high.append(candidate)
 candidates=high
 errors=[]
 for rank,url,selection,alt in candidates:
  url=urljoin(source_url,html.unescape(url))
  if GENERIC.search(url+' '+alt) or not url.startswith('https://'):continue
  try:
   img=fetch(url);im=Image.open(io.BytesIO(img));im.verify();im=Image.open(io.BytesIO(img));w,h=im.size
   im=ImageOps.exif_transpose(im);original_w,original_h=im.size
   if crop_box is not None:
    if len(crop_box)!=4 or any(type(x) is not int for x in crop_box):raise ValueError('Reviewed crop bounds invalid')
    left,top,right,bottom=crop_box
    if not (0<=left<right<=original_w and 0<=top<bottom<=original_h):raise ValueError('Reviewed crop outside native source')
    im=im.crop(tuple(crop_box))
   w,h=im.size
   if w<1600 or h<900:raise ValueError('Native source image must support1600x900 without upscaling')
   original_digest=hashlib.sha256(img).hexdigest();original_bytes=len(img)
   im=ImageOps.fit(im.convert('RGB'),(1600,900),Image.Resampling.LANCZOS)
   output=io.BytesIO();im.save(output,format='JPEG',quality=90,optimize=True,progressive=True);img=output.getvalue();w,h=im.size
   digest=hashlib.sha256(img).hexdigest();local='/images/source-properties/'+digest[:20]+'.jpg'
   if root is not None:
    dest=root/'public'/local.lstrip('/');dest.parent.mkdir(parents=True,exist_ok=True);dest.write_bytes(img)
   return {'status':'verified-public-source','sourceUrl':source_url,'originalImageUrl':url,'imageUrl':local,'credit':publisher,'sourceImageAlt':alt,'selection':selection,'imageSha256':digest,'imageBytes':len(img),'originalImageSha256':original_digest,'originalImageBytes':original_bytes,'originalWidth':original_w,'originalHeight':original_h,'cropBox':crop_box,'optimization':'EXIF orientation, center16:9crop and downsample to1600x900, JPEG90 progressive; no upscaling','width':w,'height':h,'displayWidth':min(1600,w),'checkedAt':checked,'sourcePageSha256':hashlib.sha256(b).hexdigest(),'usageBasis':'Public exact-property source image displayed with source attribution and link at user request; no licence, ownership or photographer permission is claimed.','isTourPreview':allow_youtube}
  except Exception as ex:errors.append(str(ex))
 raise MediaUnavailable('No usable exact-source featured photo: '+'; '.join(errors[:3]))
