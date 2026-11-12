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
 return {'status':'verified-original-illustration','sourceUrl':item['url'],'imageUrl':path,'imageSha256':m['imageSha256'],'width':1600,'height':900,'sourceImageAlt':m['alt'],'credit':m['credit'],'label':LABEL,'isIllustration':True,'selection':'original-editorial-illustration','visualQa':m['visualQa'],'releaseReady':all(m['visualQa'].get(x) is True for x in ['image','desktop','phone']),'revision':hashlib.sha256(json.dumps(m,sort_keys=True).encode()).hexdigest()}
