"""Bounded publisher-body recovery; source HTML is data, never operating rules."""
import hashlib,html,re
from datetime import datetime,timezone
from html.parser import HTMLParser
from urllib.parse import urlsplit
from property_media import get
from rss_runtime import canonical
VOID={'area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'}
EXCLUDED=re.compile(r'c-author|post-meta|article-author|related|advert|newsletter|social|share-|admz|adw-',re.I)
class Article(HTMLParser):
 def __init__(self,post_id):
  super().__init__();self.post_id=post_id;self.stack=[];self.meta={};self.paragraphs=[];self.buffer=None;self.found=False;self.h1=[];self.in_h1=False
 def handle_starttag(self,tag,attrs):
  d=dict(attrs)
  if tag=='h1':self.in_h1=True
  if tag=='meta':self.meta[(d.get('property')or d.get('name')or'').lower()]=d.get('content','')
  if tag in VOID:return
  target=(tag=='article'and d.get('id')=='post-'+self.post_id) if self.post_id else (tag=='div'and d.get('id')=='article-body')
  if target:self.found=True
  excluded=tag in {'script','style','svg','noscript','form','button','nav','aside','figure','figcaption'}or bool(EXCLUDED.search(d.get('class','')+' '+d.get('id','')))
  self.stack.append((tag,target,excluded))
  if tag=='p'and self.active()and not self.skipped():self.buffer=[]
 def active(self):return any(x[1]for x in self.stack)
 def skipped(self):return any(x[2]for x in self.stack)
 def handle_data(self,data):
  if self.in_h1:self.h1.append(data)
  if self.buffer is not None and self.active()and not self.skipped():self.buffer.append(data)
 def handle_endtag(self,tag):
  if tag=='h1':self.in_h1=False
  if tag=='p'and self.buffer is not None:
   text=' '.join(' '.join(self.buffer).split());self.buffer=None
   if len(text.split())>=8 and not re.match(r'^(?:more:|read more|subscribe|related\s*:|related stories|click here to see)',text,re.I):self.paragraphs.append(text)
  for i in range(len(self.stack)-1,-1,-1):
   if self.stack[i][0]==tag:del self.stack[i:];break

def recover(item,sop,fetch=get):
 host=urlsplit(item['url']).hostname
 allowed={h for s in sop['sources']if not s.get('discoveryOnly')for h in s['articleHosts']}
 if host not in allowed:raise ValueError('LOL_SOURCE_BODY_HOST_NOT_APPROVED')
 if host not in ['robbreport.com','www.countrylife.co.uk']:raise ValueError('LOL_SOURCE_BODY_SELECTOR_NOT_ESTABLISHED: retain source until its exact article body is verified')
 post_id=re.search(r'(\d{7,})/?$',urlsplit(item['url']).path) if host=='robbreport.com' else None
 if host=='robbreport.com' and not post_id:raise ValueError('LOL_SOURCE_PROPERTY_ID_MISSING')
 raw=fetch(item['url'])
 if len(raw)>4*1024*1024:raise ValueError('LOL_SOURCE_BODY_TOO_LARGE')
 parser=Article(post_id[1] if post_id else None);parser.feed(raw.decode('utf8','replace'))
 if not parser.found:raise ValueError('LOL_SOURCE_BODY_NOT_FOUND')
 key=lambda t:re.sub(r'\W+','',html.unescape(t)).casefold()
 if key(parser.meta.get('og:title',''))!=key(item['title']) and not (host=='www.countrylife.co.uk' and key(' '.join(parser.h1))==key(item['title'])):raise ValueError('LOL_SOURCE_BODY_TITLE_MISMATCH')
 if canonical(parser.meta.get('og:url',''))!=canonical(item['url']):raise ValueError('LOL_SOURCE_BODY_CANONICAL_MISMATCH')
 published=datetime.fromisoformat(parser.meta.get('article:published_time','').replace('Z','+00:00'))
 if published.tzinfo is None or published.astimezone(timezone.utc).date().isoformat()!=item['sourceDate']:raise ValueError('LOL_SOURCE_BODY_DATE_MISMATCH')
 text='\n\n'.join(parser.paragraphs[:25]);words=len(text.split())
 if not 55<=words<=1200:raise ValueError('LOL_SOURCE_BODY_SUBSTANCE_INVALID')
 return {**item,'sourceEvidence':{'text':text,'sourceUrl':item['url'],'sourcePublishedAt':published.isoformat(),'sourcePageSha256':hashlib.sha256(raw).hexdigest(),'sourceTextSha256':hashlib.sha256(text.encode()).hexdigest(),'wordCount':words,'method':'Exact publisher primary article paragraphs; related stories, author biography and advertisements excluded'}}
