"""Reviewed, fingerprint-bound property copy and exact-property media exceptions."""
import hashlib,html,json,re
from datetime import datetime,timedelta
from urllib.parse import urlsplit
from property_media import resolve,get,MediaUnavailable

def load(root):
 p=root/'operations/reviewed-properties.json'
 return json.loads(p.read_text()).get('items',{}) if p.exists() else {}

def record_for(item,records):
 r=records.get(item['url'])
 if r and r['summaryHash']!=item['summaryHash']:raise ValueError('Reviewed property source changed; fresh factual review required')
 return r

def reviewed_media(item,root,record,fetch=get):
 m=record['media'];raw=fetch(m['sourceUrl']);text=raw.decode('utf8','replace')
 if re.search(r'no (?:part|portion) .{0,100}(?:reproduc|republish)|reproduction (?:is )?(?:strictly )?prohibited',re.sub('<[^>]+>',' ',text),re.I):raise MediaUnavailable('Source expressly restricts reproduction; review required')
 for evidence in m['requiredPageEvidence']:
  if evidence not in text:raise MediaUnavailable('Reviewed exact-property media evidence changed')
 # This one reviewed URL requests source-declared dimensions with enlarging disabled.
 metadata='<meta property="og:image" content="'+html.escape(m['originalImageUrl'],quote=True)+'"><meta property="og:image:alt" content="'+html.escape(m['alt'],quote=True)+'">'
 result=resolve(m['sourceUrl'],root,fetch=fetch,raw=metadata,publisher=m['credit'])
 if result['originalWidth']!=m['nativeWidth'] or result['originalHeight']!=m['nativeHeight']:raise MediaUnavailable('Reviewed native source dimensions changed')
 result.update(sourcePageSha256=hashlib.sha256(raw).hexdigest(),selection='reviewed-same-property-original-declared-dimensions-no-enlargement',pairedNewsSource=item['url'],reviewedAt=record['reviewedAt'])
 return result

def manual_candidates(root,sop,now,fetch=get):
 """Only reviewed manifest records with current original-page evidence enter intake."""
 candidates=[];blocks=[]
 for url,r in load(root).items():
  if 'item' not in r:continue
  try:
   item=dict(r['item'])
   if item['url']!=url or r['collection'] not in sop['collections']:raise ValueError('Reviewed property identity/category mismatch')
   if urlsplit(url).scheme!='https':raise ValueError('Original public HTTPS source required')
   record_for(item,{url:r})
   if hashlib.sha256(item['summary'].encode()).hexdigest()!=item['summaryHash']:raise ValueError('Reviewed factual source fingerprint mismatch')
   date=datetime.fromisoformat(item['feedPublishedAt'])
   if date.tzinfo is None or date>now+timedelta(minutes=5):raise ValueError('Reviewed source date invalid or future')
   if now.date()-date.date()>timedelta(days=sop['lookbackDays']):raise ValueError('Reviewed property source outside current lookback')
   page=fetch(url).decode('utf8','replace');text=html.unescape(re.sub('<[^>]+>',' ',page));text=' '.join(text.split())
   for excerpt in r['requiredSourceEvidence']:
    if excerpt not in page and excerpt not in text:raise ValueError('Reviewed original property facts changed; fresh review required')
   item.update(collection=r['collection'],priority=0,sourcePageSha256=hashlib.sha256(page.encode()).hexdigest(),intake='reviewed-original-property-source')
   candidates.append(item)
  except Exception as e:blocks.append({'sourceUrl':url,'title':r.get('title',url),'reason':str(e)})
 return candidates,blocks
