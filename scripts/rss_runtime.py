import json,re,hashlib,os,ssl,socket,ipaddress,http.client,xml.etree.ElementTree as ET
from pathlib import Path
from datetime import datetime,timedelta,timezone
from zoneinfo import ZoneInfo
from email.utils import parsedate_to_datetime
from html.parser import HTMLParser
from urllib.parse import urlsplit,urlunsplit,urljoin
UTC=timezone.utc
class Text(HTMLParser):
 def __init__(self):super().__init__();self.text=[];self.title=[];self.heading=False;self.skip=0
 def handle_starttag(self,t,a):
  if t in ['script','style']:self.skip+=1
  if t=='h1':self.heading=True
 def handle_endtag(self,t):
  if t in ['script','style']:self.skip=max(0,self.skip-1)
  if t=='h1':self.heading=False
  if t in ['p','div','br']:self.text.append(' ')
 def handle_data(self,d):
  if not self.skip:self.text.append(d)
  if self.heading:self.title.append(d)
def plain(raw):
 p=Text();p.feed(raw);return ' '.join(' '.join(p.text).split()),' '.join(' '.join(p.title).split())
def canonical(url):
 p=urlsplit(url)
 if p.scheme!='https' or p.username or p.password or p.port:raise ValueError('Unsafe source URL')
 return urlunsplit((p.scheme,p.netloc.lower(),p.path.rstrip('/'),p.query,''))
FETCHED_URLS={}
def get(url,redirects=0):
 canonical(url)  # Validate identity, but preserve the actual request path/trailing slash.
 p=urlsplit(url);addresses=socket.getaddrinfo(p.hostname,443,type=socket.SOCK_STREAM)
 if not addresses or any(not ipaddress.ip_address(a[4][0]).is_global for a in addresses):raise ValueError('Non-public destination blocked')
 class Pinned(http.client.HTTPSConnection):
  def connect(self):
   raw=socket.create_connection(addresses[0][4][:2],timeout=20)
   self.sock=ssl.create_default_context().wrap_socket(raw,server_hostname=p.hostname)
 c=Pinned(p.hostname,timeout=20)
 try:
  c.request('GET',p.path+('?' +p.query if p.query else ''),headers={'User-Agent':'LoveOurListings-SourceDesk/1.0 (+https://www.loveourlistings.com/journal/)','Accept':'application/rss+xml, application/xml, text/xml','Accept-Encoding':'identity'})
  r=c.getresponse()
  if r.status in [301,302,303,307,308]:
   target=urljoin(url,r.getheader('Location',''));next_url=urlsplit(canonical(target))
   if redirects>=3 or next_url.hostname.removeprefix('www.')!=p.hostname.removeprefix('www.'):raise ValueError('Redirect outside the configured source or over limit')
   data=get(target,redirects+1);FETCHED_URLS[url]=FETCHED_URLS.get(target,target);return data
  if r.status!=200:raise ValueError('HTTP '+str(r.status))
  data=r.read(8388609)
  if len(data)>8388608:raise ValueError('Feed exceeds 8 MiB')
  FETCHED_URLS[url]=url
  if re.search(br'<!DOCTYPE|<!ENTITY',data,re.I):raise ValueError('DTD/entity declarations rejected')
  return data
 finally:c.close()
def parse_feed(data,source,now):
 root=ET.fromstring(data)
 if root.tag not in ['rss','{http://www.w3.org/2005/Atom}feed']:raise ValueError('Not an RSS/Atom feed')
 result=[];errors=[]
 nodes=root.findall('./channel/item') or root.findall('{http://www.w3.org/2005/Atom}entry')
 if not nodes:raise ValueError('Feed has no entries')
 for node in nodes[:30]:
  try:
   title=node.findtext('title') or node.findtext('{http://www.w3.org/2005/Atom}title') or ''
   link=node.findtext('link')
   if not link:
    atom=node.find('{http://www.w3.org/2005/Atom}link');link=atom.get('href') if atom is not None else ''
   url=canonical(link)
   if urlsplit(url).hostname not in source['articleHosts']:raise ValueError('Article host outside source allowlist')
   date=node.findtext('pubDate') or node.findtext('{http://www.w3.org/2005/Atom}published') or node.findtext('{http://www.w3.org/2005/Atom}updated')
   try:published=parsedate_to_datetime(date)
   except Exception:published=datetime.fromisoformat(date.replace('Z','+00:00'))
   if published.tzinfo is None:raise ValueError('Source date has no timezone')
   if published>now+timedelta(minutes=5):raise ValueError('Future-dated source')
   desc=node.findtext('description') or node.findtext('{http://www.w3.org/2005/Atom}summary') or ''
   text,heading=plain(desc)
   if heading and re.sub(r'\W','',heading).lower()!=re.sub(r'\W','',title).lower():raise ValueError('Feed title/body mismatch')
   if not title.strip() or len(text)<35:raise ValueError('Missing substantive source summary')
   original_date=published.date().isoformat()
   if datetime.fromisoformat(original_date).replace(tzinfo=UTC)>now+timedelta(days=1):raise ValueError('Future source dateline')
   result.append({'title':title.strip(),'url':url,'sourceId':source['id'],'publisher':source['name'],'feedUrl':source['url'],'feedPublishedAt':published.isoformat(),'sourceDate':original_date,'summary':text,'summaryHash':hashlib.sha256(text.encode()).hexdigest()})
  except Exception as e:errors.append({'title':node.findtext('title','')[:150],'reason':str(e)})
 return result,errors

