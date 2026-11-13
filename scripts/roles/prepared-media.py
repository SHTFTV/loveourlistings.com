"""Render exact prepared editorial drafts for isolated cloud layout QA; no approvals."""
import json,sys,hashlib,shutil
from pathlib import Path
sys.path.insert(0,str(Path(__file__).resolve().parents[1]))
from publish_properties import render
root=Path.cwd();out=root/'work/prepared-media';out.mkdir(parents=True,exist_ok=True);site=out/'site';shutil.copytree(root/'public',site,dirs_exist_ok=True)
state=json.loads((root/'operations/publisher-state.json').read_text());manifest=json.loads((root/'operations/original-illustrations.json').read_text());rows=[]
for row in state.get('candidateQueue',{}).values():
 a=row.get('illustrationDraft');m=manifest['items'].get(row.get('item',{}).get('url'))
 if not a or not m:continue
 actual=hashlib.sha256(json.dumps({k:a[k] for k in ['title','deck','paragraphs','image','source']},sort_keys=True).encode()).hexdigest()
 if actual!=row.get('previewContentSha256') and actual!=m.get('qaContentHash'):raise ValueError('Frozen content mismatch')
 revision_path=root/'operations/illustration-editorial-revisions.json'
 revision=json.loads(revision_path.read_text()).get('items',{}).get(a['source']['url']) if revision_path.exists() else None
 if revision:
  from editorial_revision import apply as apply_editorial_revision,content_hash
  a,_=apply_editorial_revision(a,row['item'],revision);actual=content_hash(a)
 name=a['slug'];(site/(name+'.html')).write_text(render(a,'https://www.loveourlistings.com'));rows.append({'slug':name,'contentSha256':actual,'image':a['image'],'imageSha256':m['imageSha256'],'sourceUrl':a['source']['url']})
# Isolated archive replacement preview; original dates/source/editorial copy retained.
for old in state['articles']:
 if old['slug']!='we-love-mansions-2026-11-10-c92607805f':continue
 a=json.loads(json.dumps(old));a.update(image='/images/editorial-illustrations/townhouse-recreation-v1.jpg',imageAlt='AI watercolor recreation of the townhouse reference; not listing photography',imageCredit='AI-generated recreation by Love Our Listings; not the original listing photograph')
 a['sourceImage']={**a['sourceImage'],'isIllustration':True,'label':'AI recreation — not listing photography'};name='archive-townhouse-repair';(site/(name+'.html')).write_text(render(a,'https://www.loveourlistings.com'));rows.append({'slug':name,'publishedAtPreserved':a['publishedAt'],'contentSha256':hashlib.sha256(json.dumps({k:a[k] for k in ['title','deck','paragraphs','image','source']},sort_keys=True).encode()).hexdigest(),'image':a['image'],'imageSha256':hashlib.sha256((root/'public'/a['image'].lstrip('/')).read_bytes()).hexdigest()})
(out/'manifest.json').write_text(json.dumps(rows,indent=2)+'\n')
