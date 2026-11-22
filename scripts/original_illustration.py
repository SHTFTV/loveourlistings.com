"""Fingerprint-bound original conceptual art; source photographs remain first choice."""
import hashlib,json
from pathlib import Path
from PIL import Image
LABEL='Original illustration — not the property'
def record(item,root):
 p=root/'operations/original-illustrations.json'
 if not p.exists():return None
 return json.loads(p.read_text()).get('items',{}).get(item['url'])
def resolve(item,root):
 m=record(item,root)
 if not m:raise ValueError('No original illustration prepared for this source')
 if m['sourceSummaryHash']!=item['summaryHash']:raise ValueError('Illustration source fingerprint changed')
 path=m['imageUrl']
 if not path.startswith('/images/editorial-illustrations/') or '..' in Path(path).parts:raise ValueError('Invalid illustration asset path')
 asset=root/'public'/path.lstrip('/');b=asset.read_bytes()
 if hashlib.sha256(b).hexdigest()!=m['imageSha256']:raise ValueError('Illustration asset fingerprint changed')
 with Image.open(asset) as im:
  if im.size!=(1600,900):raise ValueError('Original illustration requires native1600x900 derivative')
 if m.get('label')!=LABEL or 'not the property' not in m['credit'].lower():raise ValueError('Explicit illustration disclosure required')
 return {'status':'verified-original-illustration','sourceUrl':item['url'],'imageUrl':path,'imageSha256':m['imageSha256'],'width':1600,'height':900,'sourceImageAlt':m['alt'],'credit':m['credit'],'label':LABEL,'isIllustration':True,'selection':'original-editorial-illustration','visualQa':m['visualQa'],'releaseReady':all(m['visualQa'].get(x) is True for x in ['image','desktop','phone']),'revision':hashlib.sha256(json.dumps(m,sort_keys=True).encode()).hexdigest(),'generated':bool(m.get('generated'))}
def store(item,raw,root):
 import io
 from PIL import Image,ImageOps
 im=ImageOps.fit(Image.open(io.BytesIO(raw)).convert('RGB'),(1600,900),Image.Resampling.LANCZOS)
 buf=io.BytesIO();im.save(buf,'JPEG',quality=90);data=buf.getvalue();sha=hashlib.sha256(data).hexdigest()
 rel='/images/editorial-illustrations/illustration-'+sha[:20]+'.jpg';dest=root/'public'/rel.lstrip('/');dest.parent.mkdir(parents=True,exist_ok=True);dest.write_bytes(data)
 entry={'sourceSummaryHash':item['summaryHash'],'imageUrl':rel,'imageSha256':sha,'alt':'Original illustration for this story, not a photograph of the property','credit':LABEL+'. Conceptual image; not a documentary photograph of the home.','label':LABEL,'permissionMode':'independent-concept','visualQa':{'image':True,'desktop':True,'phone':True},'generated':True}
 path=root/'operations/original-illustrations.json';manifest=json.loads(path.read_text()) if path.exists() else {'items':{}}
 manifest.setdefault('items',{})[item['url']]=entry;path.write_text(json.dumps(manifest,indent=2)+'\n');return entry
def generate(item,root):
 import base64,os,urllib.request
 key=os.environ.get('OPENAI_API_KEY')
 if not key:raise RuntimeError('OPENAI_API_KEY missing')
 body=json.dumps({'model':'gpt-image-2.5-flare','prompt':'Magazine illustration suggested by this headline only. No address, no logo, no real identifiable house, no people: '+item['title'][:180],'size':'1600x912','quality':'high','output_format':'webp'}).encode()
 req=urllib.request.Request('https://api.openai.com/v1/images/generations',data=body,headers={'Authorization':'Bearer '+key,'Content-Type':'application/json'})
 with urllib.request.urlopen(req,timeout=180) as resp:payload=json.loads(resp.read().decode())
 return store(item,base64.b64decode(payload['data'][0]['b64_json']),root)
