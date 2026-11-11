"""Source-led Love Our Listings journal publisher; no model key or source-body reuse."""
import json,re,hashlib,os,html
from email.utils import format_datetime
from pathlib import Path
from datetime import datetime,timedelta,timezone
from zoneinfo import ZoneInfo
from urllib.parse import urlsplit
from rss_runtime import get,parse_feed,canonical,FETCHED_URLS
from property_media import resolve as resolve_media,MediaUnavailable
from reviewed_properties import load as load_reviewed,record_for,reviewed_media,manual_candidates
ROOT=Path(__file__).resolve().parents[1];UTC=timezone.utc
E=lambda x:html.escape(str(x),quote=True)
def category(item):
 t=(item['title']+' '+item['summary'][:750]).lower()
 if 'sotheby' in item['publisher'].lower() and not item['title'].lower().startswith('inside '):return None
 if re.search(r'\b(?:market|sales|prices|painting|museum|competition|design trends|lighting|color chart|art of display)\b',item['title'],re.I):return None
 if not re.search(r'\b(?:inside|home|mansion|estate|compound|townhouse|cottage|residence|retreat)\b',item['title'],re.I):return None
 if re.search(r'waterfront|oceanfront|beachfront|lakefront|lakeside|ocean.view|coast|malibu',t):return 'waterfront'
 return 'mansions'
def feature(item,collection,now,sop,sourceImage=None,reviewed=None):
 if not sourceImage or sourceImage.get("status")!="verified-public-source":raise MediaUnavailable("Exact source property image required before article write")
 title=item['title'];text=item['summary'];publisher=item['publisher'];sourceDate=item['sourceDate'];paragraphs=[];writer={}
 if reviewed:
  heading=reviewed['title'];deck=reviewed['deck'];paragraphs=[tuple(x) for x in reviewed['paragraphs']];writer={'method':'reviewed-source-specific-copy','reviewedAt':reviewed['reviewedAt'],'summaryHash':reviewed['summaryHash'],'reviewBasis':reviewed['reviewBasis']}
 elif re.search(r'Inside .*La Paloma',title,re.I):
  heading='We Love This Listing: La Paloma’s restored Montecito character'
  architect=re.search(r'by architect (.*?) and restored',text,re.I);restorer=re.search(r'and designer (.*?),',text,re.I)
  if not architect or not restorer:raise ValueError('Architectural attribution could not be extracted safely')
  deck='A Montecito property story makes the case for character that survives a new chapter.'
  paragraphs=[('The story behind the house',f"{publisher}’s {sourceDate} feature identifies an early twentieth-century design by {architect[1]} and later restoration and expansion by {restorer[1]}. Those are source-reported architectural credits, not an inspection or an interview conducted by this magazine."),('Why we love this listing','A grand house can make an entrance. The more interesting question is what remains inviting after that first impression. Here, the appeal is the relationship between inherited character and later decisions: a home can gain another chapter without treating its history as a decorative label.'),('Look beyond the first photograph','For a property like this, we would read circulation, garden connections and everyday rooms alongside the formal spaces. Restoration is a reason to look more closely, not a substitute for current property documents or a qualified review of condition. The original feature supplies the reported detail and credited photography.')]
 elif 'observatory' in title.lower() and 'malibu' in (title+' '+text).lower():
  if not re.search(r'ocean.view',text,re.I):raise ValueError('Coastal setting not supported by source summary')
  heading='We Love This Listing: a Malibu home that looks up as well as out'
  deck='An ocean outlook and a private observatory put two very different kinds of sky in the same property story.'
  paragraphs=[('Two ways to enjoy the setting',f"In its {sourceDate} report, {publisher} describes a Malibu residence with an ocean outlook and a private observatory. That pairing is the reason for this coastal selection. The source calls it ocean-view; we are not turning that into a claim of direct frontage, beach ownership or shore access."),('Why we love this listing','The unusual room is a useful starting point, but the real appeal is the routine it suggests: time outside, a changing horizon and somewhere to look beyond the familiar view. A distinctive feature earns its place when it changes how a home might be enjoyed, rather than merely extending an inventory.'),('The practical reading','We would ask how the observatory and outdoor areas relate to the spaces used every day. Equipment, access, condition and local constraints belong in a specific property review. Follow the original publication for the reported design details, asking terms and photography; confirm present availability with the listing professional.')]
 else:
  if not re.search(r'\b(?:inside|home|mansion|estate|compound|townhouse|cottage|residence|retreat)\b',title,re.I):raise ValueError('Not a supported individual property story')
  from property_writer import write_feature
  try:draft=write_feature(item,collection,sop)
  except Exception as e:raise ValueError('Source-specific original writer required: '+str(e)) from None
  heading=draft['title'];deck=draft['deck'];paragraphs=[tuple(x) for x in draft['paragraphs']];writer=draft['writer']
 paragraphs.append(('Want to see your property here?','Have a home with a story worth sharing? Tell Love Our Listings what makes it distinctive, include the original listing link, and identify the listing professional and any photo permissions. Editorial selection and magazine advertising are separate enquiries.'))
 published=now.astimezone(ZoneInfo(sop['timezone'])).isoformat(timespec='seconds');digest=hashlib.sha256(item['url'].encode()).hexdigest()[:10];slug='we-love-'+collection+'-'+sourceDate+'-'+digest
 return {'slug':slug,'collection':collection,'title':heading,'deck':deck,'paragraphs':paragraphs,'source':{'name':publisher,'url':item['url'],'title':item['title'],'publishedAt':item['feedPublishedAt'],'sourceDate':sourceDate,'summaryHash':item['summaryHash']},'publishedAt':published,'sourceImage':sourceImage,'writer':writer,'image':sourceImage['imageUrl'],'imageAlt':sourceImage.get('sourceImageAlt') or title,'imageCredit':sourceImage['credit'],'sopVersion':sop['version'],'method':'Source-led original editorial template; no full source article or unlicensed photos republished'}
def render(a,origin):
 url=origin+'/journal/'+a['slug']+'/';date=a['publishedAt'][:10];source=a['source'];schema={'@context':'https://schema.org','@type':'BlogPosting','headline':a['title'],'description':a['deck'],'datePublished':a['publishedAt'],'dateModified':a['publishedAt'],'author':{'@type':'Organization','name':'Love Our Listings'},'publisher':{'@type':'Organization','name':'Love Our Listings','logo':origin+'/images/love-logo-clean-v6.webp'},'mainEntityOfPage':url,'citation':source['url'],'image':origin+a['image']}
 return f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{E(a['title'])} | Love Our Listings</title><meta name="description" content="{E(a['deck'])}"><link rel="canonical" href="{url}"><link rel="stylesheet" href="/magazine-article-v1.css"><link rel="stylesheet" href="/love-post-banners.css"><meta property="og:type" content="article"><meta property="og:site_name" content="Love Our Listings"><meta property="og:title" content="{E(a['title'])}"><meta property="og:description" content="{E(a['deck'])}"><meta property="og:url" content="{url}"><meta property="og:image" content="{origin+a['image']}"><meta name="twitter:card" content="summary_large_image"><script type="application/ld+json">{json.dumps(schema).replace('</','<\\/')}</script></head><body class="lol-magazine"><header class="lol-journal-masthead"><a href="/"><img src="/images/love-logo-clean-v6.webp" alt="Love Our Listings" width="42" height="54">LOVE OUR LISTINGS</a><a href="/journal/">The journal ↗</a></header><nav class="lol-mag-nav"><a href="/collections/mansions">Mansions</a><a href="/collections/waterfront">At the Water</a><a href="/realtors">Markets</a><a href="/contact">Contact</a></nav><main><article class="lol-journal-article"><p class="lol-mag-kicker">WE LOVE THIS LISTING / {E(a['collection'].upper())}</p><h1>{E(a['title'])}</h1><p class="lol-deck">{E(a['deck'])}</p><p class="lol-note">Published <time datetime="{a['publishedAt']}">{date}</time>. Original source date: {source['sourceDate']}.</p><figure><img src="{a['image']}" width="1600" height="900" alt="{E(a['imageAlt'])}"><figcaption>{E(a['imageCredit'])}. <a href="{E(a.get('sourceImage',{}).get('sourceUrl',source['url']))}">Original property image source ↗</a></figcaption></figure><div class="lol-journal-body">{''.join('<section><h2>'+E(h)+'</h2><p>'+E(p)+'</p></section>' for h,p in a['paragraphs'])}<p><a href="mailto:colin@industryarmymarketing.com?subject=We%20Love%20This%20Listing%20Feature">Want to see your property here? ↗</a></p><h2>Source & dates</h2><p><a href="{E(source['url'])}" rel="noreferrer">{E(source['name'])}: original property story ↗</a></p><p class="lol-note">Source published {source['sourceDate']}; this independent feature published {date}. Asking prices and property details belong to the source; current availability is not independently confirmed. No broker partnership, endorsement, sale result or permission to copy source imagery is implied.</p><p><a href="/collections/{a['collection']}">Explore the collection ↗</a> · <a href="/journal/">Read more stories ↗</a></p></div></article></main><footer class="lol-mag-footer"><div><a href="/">LOVE OUR LISTINGS</a><p>Extraordinary homes. Interesting people.</p></div><nav><a href="/journal/">The magazine</a><a href="/contact">Contact</a></nav><p>Independent source-led property editorial.</p></footer></body></html>'''

def validate(a):
 words=sum(len(p.split()) for _,p in a['paragraphs'])
 if not 130<=words<=320:raise ValueError('Feature word count outside validated range')
 if not a['source']['url'].startswith('https://'):raise ValueError('Original source required')
 if 'Want to see your property here?' not in str(a['paragraphs']):raise ValueError('Required feature CTA missing')
 return words

def main(root=ROOT,fetch=get,now=None):
 now=now or datetime.now(UTC);cfg=json.loads((root/'operations/site-sop.json').read_text());prior=json.loads((root/'operations/prior-posts.json').read_text());sp=root/'operations/publisher-state.json';state=json.loads(sp.read_text()) if sp.exists() else {'schemaVersion':1,'runs':[],'articles':[],'quarantine':[],'discovery':[]}
 urls={canonical(u) for p in prior for u in p['sourceUrls'] if u.startswith('https://')};urls.update(a['source']['url'] for a in state['articles']);hashes={a['source']['summaryHash'] for a in state['articles']};report={'startedAt':now.isoformat(),'sopVersion':cfg['version'],'runUrl':os.environ.get('GITHUB_SERVER_URL','https://github.com')+'/'+os.environ.get('GITHUB_REPOSITORY','SHTFTV/loveourlistings.com')+'/actions/runs/'+os.environ.get('GITHUB_RUN_ID','local-test'),'sources':[],'articles':[],'duplicates':0,'quarantined':0,'discovered':0,'productionVerified':False};candidates=[]
 completed={a['slug'] for run in state['runs'] if run.get('productionVerified') for a in run.get('articles',[])}
 for a in state['articles']:
  if a['slug'] not in completed and not (root/'public'/a['image'].lstrip('/')).exists():
   original={'url':a['source']['url'],'summaryHash':a['source']['summaryHash']}
   reviewed=record_for(original,load_reviewed(root))
   if not reviewed:raise MediaUnavailable('Pending publication photo missing; restore exact source asset')
   media=reviewed_media(original,root,reviewed)
   if media['imageSha256']!=a['sourceImage']['imageSha256']:raise MediaUnavailable('Pending reviewed photo changed')
  if a['slug'] not in completed:report['articles'].append({'slug':a['slug'],'title':a['title'],'collection':a['collection'],'url':cfg['origin']+'/journal/'+a['slug']+'/','publishedAt':a['publishedAt'],'sourceUrl':a['source']['url'],'retryOfPendingPublication':True})
 for source in cfg['sources']:
  try:
   data=fetch(source['url']);items,errors=parse_feed(data,source,now);report['sources'].append({'id':source['id'],'url':source['url'],'status':'ok','fetchedAt':now.isoformat(),'items':len(items),'errors':errors,'finalUrl':FETCHED_URLS.get(source['url'],source['url'])})
   for error in errors:state['quarantine'].append({'at':now.isoformat(),'sourceId':source['id'],**error});report['quarantined']+=1
   for item in items:
    if now.date()-datetime.fromisoformat(item['sourceDate']).date()>timedelta(days=cfg['lookbackDays']):continue
    if source.get('discoveryOnly'):
     existing=next((d for d in state['discovery'] if d['discoveryUrl']==item['url']),None)
     if existing:existing['lastSeenAt']=now.isoformat();report['duplicates']+=1
     else:state['discovery'].append({'at':now.isoformat(),'lastSeenAt':now.isoformat(),'sourceId':source['id'],'title':item['title'],'discoveryUrl':item['url'],'sourceDate':item['sourceDate'],'status':'original-publisher-link-required; not auto-published from Google redirect'});report['discovered']+=1
     continue
    if item['url'] in urls or item['summaryHash'] in hashes:report['duplicates']+=1;continue
    item['collection']=category(item);item['priority']=source['priority']
    if item['collection']:candidates.append(item)
  except Exception as e:report['sources'].append({'id':source['id'],'url':source['url'],'status':'error','fetchedAt':now.isoformat(),'error':str(e)})
 def normalized(title):return re.sub(r'[^a-z0-9]+','',re.sub(r' - [^-]+$','',title).lower())
 for discovery in state['discovery']:
  match=next((c for c in candidates if normalized(c['title'])==normalized(discovery['title'])),None)
  if match:discovery.update(status='matched-validated-original-publisher-feed',originalUrl=match['url'])
 records=load_reviewed(root);manual,manual_blocks=manual_candidates(root,cfg,now)
 report['reviewedCandidateIntake']=len(manual)
 for block in manual_blocks:report.setdefault('publicationBlocks',[]).append(block)
 for item in manual:
  if item['url'] in urls or item['summaryHash'] in hashes:report['duplicates']+=1;continue
  candidates=[x for x in candidates if x['url']!=item['url']];candidates.append(item)
 queue=state.setdefault('candidateQueue',{})
 for item in candidates:
  old=queue.get(item['url'],{});queue[item['url']]={**old,'item':item,'discoveredAt':old.get('discoveredAt',now.isoformat()),'status':'pending'}
 for url,row in queue.items():
  i=row['item']
  if url in urls:row['status']='stored-awaiting-verification';continue
  if now.date()-datetime.fromisoformat(i['sourceDate']).date()>timedelta(days=cfg['lookbackDays']):row['status']='expired';continue
  if not any(x['url']==url for x in candidates):candidates.append(i)
 sp.write_text(json.dumps(state,indent=2)+'\n')
 for collection in cfg['collectionPriority']:
  selected=sorted([x for x in candidates if x['collection']==collection],key=lambda x:(x['priority'],-datetime.fromisoformat(x['feedPublishedAt']).timestamp()))
  for item in selected:
   if len(report['articles'])>=cfg['maxArticlesPerRun']:break
   try:
    reviewed=record_for(item,records);sourceImage=reviewed_media(item,root,reviewed) if reviewed else resolve_media(item['url'],root,publisher=item['publisher']);a=feature(item,collection,now,cfg,sourceImage,reviewed);validate(a);state['articles'].append(a);urls.add(item['url']);hashes.add(item['summaryHash']);report['articles'].append({'slug':a['slug'],'title':a['title'],'collection':collection,'url':cfg['origin']+'/journal/'+a['slug']+'/','publishedAt':a['publishedAt'],'sourceUrl':item['url']});queue[item['url']].update(status='stored-awaiting-verification',lastAttemptAt=now.isoformat());sp.write_text(json.dumps(state,indent=2)+'\n')
   except Exception as e:
    queue[item['url']].update(status='retry',lastAttemptAt=now.isoformat(),attempts=queue[item['url']].get('attempts',0)+1,lastError=str(e));sp.write_text(json.dumps(state,indent=2)+'\n')
    state['quarantine'].append({'at':now.isoformat(),'url':item['url'],'reason':str(e)});report['quarantined']+=1;report.setdefault('publicationBlocks',[]).append({'sourceUrl':item['url'],'title':item['title'],'reason':str(e)})
 report['collections']=[{'name':c,'eligible':len([x for x in candidates if x['collection']==c]),'newFeatures':len([x for x in report['articles'] if x['collection']==c]),'status':'built-for-publication' if any(x['collection']==c for x in report['articles']) else 'blocked-eligible-property' if any(x.get('sourceUrl') in [i['url'] for i in candidates if i['collection']==c] for x in report.get('publicationBlocks',[])) else 'no-fresh-eligible-items'} for c in cfg['collections']];report['status']='built-for-publication' if report['articles'] else 'blocked-property-publication' if report.get('publicationBlocks') else 'nothing-new' if any(s['status']=='ok' and not next(x for x in cfg['sources'] if x['id']==s['id']).get('discoveryOnly') for s in report['sources']) else 'all-property-sources-failed';report['finishedAt']=datetime.now(UTC).isoformat();state['runs'].append(report)
 public=root/'public';(public/'images/journal').mkdir(parents=True,exist_ok=True)
 for a in state['articles']:
  path=public/'journal'/a['slug'];path.mkdir(parents=True,exist_ok=True);(path/'index.html').write_text(render(a,cfg['origin']))
 # Preserve all existing journal entries; replace only our explicitly delimited projection.
 index=public/'journal/index.html';body=index.read_text();body=re.sub(r'<!-- RSS_FEATURES_START -->[\s\S]*?<!-- RSS_FEATURES_END -->','',body);cards='<!-- RSS_FEATURES_START -->'+''.join(f'<article><p class="lol-mag-kicker">WE LOVE THIS LISTING / {E(a["collection"].upper())}</p><a href="/journal/{a["slug"]}/"><img src="{a["image"]}" alt="{E(a["imageAlt"])}" width="1600" height="900"><h2>{E(a["title"])}</h2></a><p>{E(a["deck"])}</p><time datetime="{a["publishedAt"]}">{a["publishedAt"][:10]}</time></article>' for a in reversed(state['articles']))+'<!-- RSS_FEATURES_END -->';body=body.replace('<h1>The journal.</h1>','<h1>The journal.</h1>'+cards);
 if state['articles']:
  latest=max(a['publishedAt'] for a in state['articles']);body=re.sub(r'Latest article: <time datetime="[^"]+">[^<]+</time>', 'Latest article: <time datetime="'+latest+'">'+latest[:10]+'</time>',body,count=1)
 index.write_text(body)
 feed_items=[];manifest=[]
 for a in reversed(state['articles']):
  url=cfg['origin']+'/journal/'+a['slug']+'/';feed_items.append('<item><title>'+E(a['title'])+'</title><link>'+url+'</link><guid>'+url+'</guid><pubDate>'+a['publishedAt']+'</pubDate><description>'+E(a['deck'])+'</description></item>');manifest.append({k:a[k] for k in ['slug','collection','title','deck','publishedAt','image','imageAlt','imageCredit']})
 (public/'journal/feed.xml').write_text('<?xml version="1.0"?><rss version="2.0"><channel><title>Love Our Listings · We Love This Listing</title><link>'+cfg['origin']+'/journal/</link><description>Independent attributed property features</description>'+''.join(feed_items)+'</channel></rss>');(public/'journal/published.json').write_text(json.dumps(manifest,indent=2)+'\n')
 sm=public/'sitemap.xml'
 if sm.exists():
  xml=sm.read_text()
  for a in state['articles']:
   url=cfg['origin']+'/journal/'+a['slug']+'/'
   if url not in xml:xml=xml.replace('</urlset>','<url><loc>'+url+'</loc></url></urlset>')
  sm.write_text(xml)
 latest_path=root/'src/data/latestPublished.ts';original=latest_path.read_text();old=json.loads(original.split('=',1)[1].strip().rstrip(';'));new=[]
 for a in reversed(state['articles']):new.append({'slug':a['slug'],'desk':'WE LOVE THIS LISTING / '+a['collection'].upper(),'title':a['title'],'deck':a['deck'],'image':a['image'],'date':a['publishedAt'][:10],'dateLabel':datetime.fromisoformat(a['publishedAt']).strftime('%B %d, %Y'),'imageAlt':a['imageAlt'],'imageCredit':a['imageCredit'],'videoEmbed':None})
 known={x['slug'] for x in new};new.extend(x for x in old if x['slug'] not in known);latest_path.write_text('export const latestPublished = '+json.dumps(new[:8],ensure_ascii=False)+';\n')
 registry_path=root/'operations/property-media.json';registry=json.loads(registry_path.read_text()) if registry_path.exists() else {'version':1,'articles':{}};registry['articles'].update({a['slug']:a['sourceImage'] for a in state['articles'] if a.get('sourceImage')});registry_path.write_text(json.dumps(registry,indent=2)+'\n');sp.write_text(json.dumps(state,indent=2)+'\n');(root/'operations/latest-run.json').write_text(json.dumps(report,indent=2)+'\n');write_status(root,state,report)
 if os.environ.get('GITHUB_OUTPUT'):
  with open(os.environ['GITHUB_OUTPUT'],'a') as f:f.write('has_articles='+str(bool(report['articles'])).lower()+'\n')
 print(json.dumps(report,indent=2))
 if report['status']=='blocked-property-publication':raise RuntimeError('Eligible property publication blocked; durable reasons retained; no successful publication claimed')
 if report['status']=='all-property-sources-failed':raise RuntimeError('All direct property sources failed; Google discovery alone is not a publication')
 return report

def write_status(root,state,report):
 verified=next((r for r in reversed(state['runs']) if r.get('productionVerified')),None);status={'updatedAt':datetime.now(UTC).isoformat(),'runtime':'GitHub Actions cloud workflow','scheduleUTC':'43 */6 * * *','sopVersion':report['sopVersion'],'lastRunAt':report['startedAt'],'status':report['status'],'sources':[{'id':s['id'],'status':s['status'],'fetchedAt':s['fetchedAt'],'items':s.get('items',0)} for s in report['sources']],'collections':report.get('collections',[]),'googleDiscoveryItems':report['discovered'],'duplicatesFiltered':report['duplicates'],'quarantinedItems':report['quarantined'],'lastVerifiedFeatures':verified['articles'] if verified else [],'verifiedAt':verified.get('verifiedAt') if verified else None};(root/'public/publishing-status.json').write_text(json.dumps(status,indent=2)+'\n')
if __name__=='__main__':main()
