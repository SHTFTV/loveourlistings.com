import json,time,sys,hashlib,urllib.request,xml.etree.ElementTree as ET
from pathlib import Path
from datetime import datetime,timezone
from publish_properties import write_status
from reviewed_properties import load as load_reviewed,record_for
ROOT=Path(__file__).resolve().parents[1]
def built(root=ROOT):
 r=json.loads((root/'operations/latest-run.json').read_text());state=json.loads((root/'operations/publisher-state.json').read_text());prior=json.loads((root/'operations/prior-posts.json').read_text());manifest=json.loads((root/'public/journal/published.json').read_text());index=(root/'public/journal/index.html').read_text();sitemap=(root/'public/sitemap.xml').read_text();ET.fromstring(sitemap);ET.parse(root/'public/journal/feed.xml')
 for p in prior:
  # Existing pages stay untouched. They need not all be present in an isolated test fixture.
  file=root/'public/journal'/p['slug']/'index.html'
  if file.exists():assert p['datePublished'] in file.read_text(),'Original publication timestamp changed'
 for item in r['articles']:
  a=next(a for a in state['articles'] if a['slug']==item['slug']);h=(root/'public/journal'/a['slug']/'index.html').read_text()
  assert item['publishedAt'] in h and item['sourceUrl'] in h,'New time/source missing from initial HTML'
  assert 'We Love This Listing' in h and 'Want to see your property here?' in h,'Required brand/CTA missing'
  assert 'love-logo-clean-v6.webp' in h and a['image'] in h,'Existing logo and exact source property image missing'
  assert (root/'public'/a['image'].lstrip('/')).is_file(),'Exact source photo asset absent'
  media=a.get('sourceImage',{});paired=media.get('sourceUrl')==a['source']['url']
  if not paired:
   reviewed=record_for({'url':a['source']['url'],'summaryHash':a['source']['summaryHash'],'propertyId':a['source'].get('propertyId')},load_reviewed(root))
   paired=bool(reviewed and media.get('pairedNewsSource')==a['source']['url'] and media.get('sourceUrl')==reviewed['media']['sourceUrl'] and media.get('originalImageUrl')==reviewed['media']['originalImageUrl'] and media.get('originalWidth')==reviewed['media']['nativeWidth'] and media.get('originalHeight')==reviewed['media']['nativeHeight'] and media.get('cropBox')==reviewed['media'].get('cropBox'))
  assert (media.get('status')=='verified-public-source' or (media.get('status')=='verified-original-illustration' and media.get('releaseReady') is True and all(media.get('visualQa',{}).get(k) is True for k in ['image','desktop','phone']))) and paired,'Exact source/image pairing lost'
  assert not a['image'].endswith('.svg'),'Generated SVG fallback is forbidden'
  assert item['slug'] in index and item['url'] in sitemap and any(x['slug']==item['slug'] for x in manifest),'New article undiscoverable'
 print('Built article/date/source/brand/CTA/exact-source-photo/manifest/sitemap checks passed:',len(r['articles']))
 return r

def record_results(root,report,status):
 path=root/'public/publication-results.json';data=json.loads(path.read_text()) if path.exists() else {'events':[]}
 for a in report['articles']:
  id='loveourlistings.com:'+a['slug'] if status=='done' else 'failed:'+str(report['runUrl'].rsplit('/',1)[-1])+':'+a['slug']
  if any(e['id']==id for e in data['events']):continue
  at=datetime.now(timezone.utc).isoformat();data['events'].append({'id':id,'site':'loveourlistings.com','title':a['title'],'publishedAt':a['publishedAt'] if status=='done' else None,'verifiedAt':report.get('verifiedAt') if status=='done' else None,'url':a['url'] if status=='done' else None,'status':status,'checkedAt':at})
 if report.get('publicationBlocks') or (status=='failed' and not report['articles']):
  blocks=report.get('publicationBlocks',[]) or [{'sourceUrl':None,'title':'Collection or build failed before any article was produced','reason':report.get('error','Inspect the linked run')}]
  for block in blocks:
   identity=(block.get('sourceUrl') or report.get('runUrl','unknown-run'))+('|property:'+block['propertyId'] if block.get('propertyId') else '');event_id='loveourlistings.com:hold:'+hashlib.sha256(identity.encode()).hexdigest()[:20]
   reason='Native exact-property photo cannot support1600x900 without upscaling' if '1600x900' in block.get('reason','') else 'Source or publication validation failed; inspect the existing run'
   event={'id':event_id,'site':'loveourlistings.com','title':(block.get('title') or identity)+' — '+reason,'sourceUrl':block.get('sourceUrl'),'publishedAt':None,'verifiedAt':None,'url':None,'status':'failed','checkedAt':datetime.now(timezone.utc).isoformat(),'runUrl':report.get('runUrl'),'cause':block.get('reason'),'impact':'This property remains unpublished; independent candidates continue','blockedSince':report.get('startedAt'),'freshness':'current-run','owner':'LoveOurListings site worker owner','nextAction':'Recover a sufficient native original for the same property and source-specific reviewed copy; verify image/crop QA before release.'}
   old=next((e for e in data['events'] if e['id']==event_id),None)
   if old:
    event['blockedSince']=old.get('blockedSince',old.get('checkedAt',event['blockedSince']));old.update(event)
   else:data['events'].append(event)
 if status=='done':
  completed={'loveourlistings.com:hold:'+hashlib.sha256((a['sourceUrl']+('|property:'+a['propertyId'] if a.get('propertyId') else '')).encode()).hexdigest()[:20] for a in report['articles'] if a.get('sourceUrl')}
  for event in data['events']:
   if event.get('status')=='failed' and event.get('id') in completed:event['resolvedAt']=datetime.now(timezone.utc).isoformat()
 data['updatedAt']=datetime.now(timezone.utc).isoformat();path.write_text(json.dumps(data,indent=2)+'\n')

def hold_results(root=ROOT):
 report=json.loads((root/'operations/latest-run.json').read_text())
 if report.get('publicationBlocks'):record_results(root,{**report,'articles':[]},'failed')
 path=root/'public/publication-results.json'
 if path.exists():
  data=json.loads(path.read_text())
  for check in report.get('candidateChecks',[]):
   if check['outcome']!='duplicate-property':continue
   event_id='loveourlistings.com:hold:'+hashlib.sha256(check['sourceUrl'].encode()).hexdigest()[:20]
   for event in data.get('events',[]):
    if event.get('id')==event_id:event.update(correction=True,withdrawn=True,correctionReason=check['reason'],existingArticleUrl='https://www.loveourlistings.com/journal/'+check['duplicateOfArticleSlug']+'/')
  path.write_text(json.dumps(data,indent=2)+'\n')

def get(url):
 req=urllib.request.Request(url,headers={'User-Agent':'LoveOurListings-PublicationVerifier/1.0','Cache-Control':'no-cache'})
 with urllib.request.urlopen(req,timeout=20) as r:
  if r.status!=200:raise RuntimeError('HTTP'+str(r.status))
  return r.read().decode()
def verify_log(root=ROOT,timeout=600):
 report=json.loads((root/'operations/latest-run.json').read_text());end=time.time()+timeout
 while time.time()<end:
  try:
   data=json.loads(get('https://www.loveourlistings.com/publication-results.json'));assert all(any(e['id']=='loveourlistings.com:'+a['slug'] and e['status']=='done' and e['url']==a['url'] for e in data['events']) for a in report['articles']);print('Verified public command-center result log');return
  except Exception:time.sleep(15)
 raise RuntimeError('Verified articles exist but public publication-results log is stale')

def live(root=ROOT,timeout=600):
 r=json.loads((root/'operations/latest-run.json').read_text());end=time.time()+timeout;last='Waiting for deployment'
 if not r['articles']:return
 while time.time()<end:
  try:
   manifest=get('https://www.loveourlistings.com/journal/published.json');index=get('https://www.loveourlistings.com/journal/');sitemap=get('https://www.loveourlistings.com/sitemap.xml');feed=get('https://www.loveourlistings.com/journal/feed.xml')
   for a in r['articles']:
    h=get(a['url']);assert a['publishedAt'] in h and a['sourceUrl'] in h,'Live article does not match new source/time';assert 'We Love This Listing' in h and 'Want to see your property here?' in h,'Live feature brand/CTA missing';assert a['slug'] in manifest and a['slug'] in index and a['url'] in sitemap and a['slug'] in feed,'Live discovery outputs stale'
   if r.get('queueProgress'):r['queueProgress'].update(publicationOutcome='published-and-verified',verifiedPublicationsThisRun=len(r['articles']))
   r.update(status='published-and-verified-with-blockers' if r.get('publicationBlocks') or any(s['status']=='error' for s in r['sources']) else 'published-and-verified',productionVerified=True,verifiedAt=datetime.now(timezone.utc).isoformat());state=json.loads((root/'operations/publisher-state.json').read_text());state['runs'][-1].update(r);(root/'operations/publisher-state.json').write_text(json.dumps(state,indent=2)+'\n');(root/'operations/latest-run.json').write_text(json.dumps(r,indent=2)+'\n');write_status(root,state,r);record_results(root,r,'done');print('VERIFIED NEW PUBLIC FEATURES',json.dumps(r['articles']));return
  except Exception as e:last=str(e);time.sleep(15)
 raise RuntimeError('Content commit exists but public publication did not verify: '+last)
def failed(root=ROOT):
  path=root/'operations/latest-run.json'
  if not path.exists():return
  r=json.loads(path.read_text());r['failedStageStatus']=r.get('status');r.update(status='publication-failed',productionVerified=False,error='Cloud build/publication check failed; see linked workflow run');state=json.loads((root/'operations/publisher-state.json').read_text());state['runs'][-1].update(r);path.write_text(json.dumps(r,indent=2)+'\n');(root/'operations/publisher-state.json').write_text(json.dumps(state,indent=2)+'\n');write_status(root,state,r);record_results(root,r,'failed')

if __name__=='__main__':
 try:hold_results() if '--holds' in sys.argv else failed() if '--failure' in sys.argv else verify_log() if '--log' in sys.argv else live() if '--live' in sys.argv else built()
 except Exception as e:
  path=ROOT/'operations/latest-run.json'
  if path.exists():
   r=json.loads(path.read_text());r['failedStageStatus']=r.get('status');r.update(status='publication-failed',productionVerified=False,error=str(e));path.write_text(json.dumps(r,indent=2)+'\n');state=json.loads((ROOT/'operations/publisher-state.json').read_text());state['runs'][-1].update(r);(ROOT/'operations/publisher-state.json').write_text(json.dumps(state,indent=2)+'\n');write_status(ROOT,state,r);record_results(ROOT,r,'failed')
  raise

