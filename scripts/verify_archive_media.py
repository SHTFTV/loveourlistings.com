"""Verify existing-page repairs without creating new publication events or dates."""
import json,urllib.request,time,io
from pathlib import Path
from PIL import Image
root=Path(__file__).resolve().parents[1];report=json.loads((root/'operations/latest-run.json').read_text());origin='https://www.loveourlistings.com'
for repair in report.get('mediaRepairs',[]):
 for attempt in range(16):
  try:
   with urllib.request.urlopen(origin+'/journal/'+repair['slug']+'/',timeout=20) as r:page=r.read().decode()
   with urllib.request.urlopen(origin+repair['image'],timeout=20) as r:image=Image.open(io.BytesIO(r.read()));size=image.size
   if repair['image'] not in page or repair['publishedAt'] not in page or size!=(1600,900):raise ValueError('Actual archive repair/image/date mismatch')
   print(json.dumps({'slug':repair['slug'],'verified':True,'nativeOutput':size,'publishedAtPreserved':repair['publishedAt']}));break
  except Exception:
   if attempt==15:raise
   time.sleep(10)
