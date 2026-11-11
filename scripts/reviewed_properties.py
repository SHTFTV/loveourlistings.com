"""Reviewed, fingerprint-bound property copy and exact-property media exceptions."""
import hashlib,html,json,re
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
