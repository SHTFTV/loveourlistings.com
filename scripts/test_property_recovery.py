import unittest,tempfile,json
from pathlib import Path
from unittest.mock import patch
from test_property_publisher import TestPublisher,DIRECT,NOW,rss,MEDIA
from publish_properties import main
from reviewed_properties import record_for,reviewed_media,manual_candidates
import hashlib
class Recovery(unittest.TestCase):
 def test_failed_candidate_survives_feed_rotation_and_retries(self):
  with tempfile.TemporaryDirectory() as t:
   root=Path(t);TestPublisher().fixture(root,[DIRECT])
   source=rss('Malibu Home With a Private Observatory','https://robbreport.com/home','An ocean-view residence with a private observatory and a substantial source description.')
   with patch('publish_properties.resolve_media',side_effect=ValueError('temporary source failure')):
    with self.assertRaises(RuntimeError):main(root,lambda _:source,NOW)
   state=json.loads((root/'operations/publisher-state.json').read_text());self.assertEqual(state['candidateQueue']['https://robbreport.com/home']['status'],'retry')
   rotated=rss('The Home Design Market','https://robbreport.com/design','A design market report with enough text to be a valid source summary.')
   with patch('publish_properties.resolve_media',return_value=MEDIA):result=main(root,lambda _:rotated,NOW+__import__('datetime').timedelta(hours=7))
   self.assertEqual(len(result['articles']),1);self.assertEqual(result['articles'][0]['sourceUrl'],'https://robbreport.com/home')
 def test_reviewed_copy_rejects_changed_source(self):
  with self.assertRaisesRegex(ValueError,'source changed'):record_for({'url':'https://source.example/property','summaryHash':'changed'},{'https://source.example/property':{'summaryHash':'reviewed'}})
 def test_reviewed_photo_requires_actual_same_property_evidence(self):
  r={'media':{'sourceUrl':'https://source.example/property','requiredPageEvidence':['528 Lakeview Court']}}
  with self.assertRaisesRegex(ValueError,'evidence changed'):reviewed_media({},None,r,fetch=lambda _:b'different property')

class ReviewedIntake(unittest.TestCase):
 def test_manual_source_is_fingerprint_bound_and_category_explicit(self):
  with tempfile.TemporaryDirectory() as t:
   root=Path(t);(root/'operations').mkdir();summary='A genuine ranch property with a herd of bison and an original dated source.';url='https://source.example/ranch'
   record={'summaryHash':hashlib.sha256(summary.encode()).hexdigest(),'collection':'ranches','requiredSourceEvidence':['A genuine ranch'],'item':{'url':url,'title':'Ranch property','summary':summary,'summaryHash':hashlib.sha256(summary.encode()).hexdigest(),'feedPublishedAt':'2026-11-09T16:00:00+00:00'}}
   (root/'operations/reviewed-properties.json').write_text(json.dumps({'items':{url:record}}));sop={'collections':['ranches'],'lookbackDays':14}
   items,blocks=manual_candidates(root,sop,NOW,fetch=lambda _:b'<p>A genuine ranch</p>');self.assertEqual(len(items),1);self.assertEqual(items[0]['collection'],'ranches');self.assertEqual(blocks,[])
   items,blocks=manual_candidates(root,sop,NOW,fetch=lambda _:b'different property');self.assertEqual(items,[]);self.assertIn('facts changed',blocks[0]['reason'])
   items,blocks=manual_candidates(root,{'collections':['penthouses'],'lookbackDays':14},NOW,fetch=lambda _:b'A genuine ranch');self.assertEqual(items,[]);self.assertIn('category mismatch',blocks[0]['reason'])

class RoundupIdentity(unittest.TestCase):
 def test_distinct_properties_share_a_real_source_without_collapsing(self):
  import copy
  with tempfile.TemporaryDirectory() as t:
   root=Path(t);TestPublisher().fixture(root,[DIRECT]);cfg=json.loads((root/'operations/site-sop.json').read_text());cfg.update(collections=['ranches','acreage'],collectionPriority=['ranches','acreage'],maxArticlesPerRun=1,maxReviewedArticlesPerRun=2);(root/'operations/site-sop.json').write_text(json.dumps(cfg))
   url='https://source.example/real-roundup';items=[];records={}
   for pid,collection in [('first-property','ranches'),('second-property','acreage')]:
    summary='Distinct approved source facts for '+pid;digest=hashlib.sha256(summary.encode()).hexdigest();item={'propertyId':pid,'url':url,'summary':summary,'summaryHash':digest,'title':'An individual property feature','sourceId':'reviewed','publisher':'Original publisher','sourceDate':'2026-11-09','feedPublishedAt':'2026-11-09T16:00:00+00:00','collection':collection,'priority':0,'intake':'reviewed-original-property-source'};items.append(item)
    records['property:'+pid]={'propertyId':pid,'item':item,'summaryHash':digest,'title':'We Love This Listing: '+pid,'deck':'Reviewed fixture copy','paragraphs':[['Fixture',' '.join(['Distinct editorial fixture words']*35)]],'reviewedAt':'2026-11-09','reviewBasis':'Fixture only'}
   (root/'operations/reviewed-properties.json').write_text(json.dumps({'items':records}))
   feed=rss('The Home Design Market','https://robbreport.com/design','An ordinary design market source item that is intentionally ineligible for individual property publication.')
   with patch('publish_properties.manual_candidates',return_value=(items,[])),patch('publish_properties.reviewed_media',return_value=MEDIA):result=main(root,lambda _:feed,NOW)
   state=json.loads((root/'operations/publisher-state.json').read_text());self.assertEqual(len(result['articles']),2);self.assertEqual(len({a['slug']for a in result['articles']}),2);self.assertEqual({a['source']['url']for a in state['articles']},{url});self.assertEqual(len(state['candidateQueue']),2)
 def test_completion_resolves_only_its_property_hold(self):
  from verify_property_publication import record_results
  with tempfile.TemporaryDirectory() as t:
   root=Path(t);(root/'public').mkdir();url='https://source.example/real-roundup';blocks=[{'sourceUrl':url,'propertyId':pid,'title':pid,'reason':'1600x900 photo required'}for pid in ['first-property','second-property']]
   report={'articles':[],'publicationBlocks':blocks,'runUrl':'https://github.com/test/repo/actions/runs/1'};record_results(root,report,'failed')
   report.update(articles=[{'slug':'first','propertyId':'first-property','sourceUrl':url,'title':'First','publishedAt':'2026-11-09','url':'https://site.example/first'}],publicationBlocks=[blocks[1]],verifiedAt='2026-11-09');record_results(root,report,'done')
   data=json.loads((root/'public/publication-results.json').read_text());holds=[x for x in data['events']if ':hold:'in x['id']];self.assertEqual(len(holds),2);self.assertEqual(sum('resolvedAt'in x for x in holds),1)

class ReviewedPhotoDescriptions(unittest.TestCase):
 def test_reviewed_property_alt_survives_media_resolution(self):
  import io
  from PIL import Image
  b=io.BytesIO();Image.new('RGB',(1600,900),(20,50,70)).save(b,format='JPEG');photo=b.getvalue()
  r={'reviewedAt':'2026-11-11','media':{'sourceUrl':'https://broker.example/property','originalImageUrl':'https://broker.example/photo.jpg','requiredPageEvidence':['Actual property'],'nativeWidth':1600,'nativeHeight':900,'alt':'Actual property with its original waterfront view','credit':'Original listing broker'}}
  result=reviewed_media({'url':'https://publisher.example/story'},None,r,fetch=lambda u:b'Actual property' if u.endswith('/property') else photo)
  self.assertEqual(result['sourceImageAlt'],r['media']['alt'])

class ChangedReviewedMediaRecovery(unittest.TestCase):
 def test_new_fingerprint_bound_media_gets_one_bounded_retry_without_erasing_history(self):
  from datetime import timedelta
  with tempfile.TemporaryDirectory() as t:
   root=Path(t);TestPublisher().fixture(root,[DIRECT]);source=rss('Malibu Home With a Private Observatory','https://robbreport.com/home','An ocean-view residence with a private observatory and a substantial source description.')
   with patch('publish_properties.resolve_media',side_effect=ValueError('native photo unavailable')):
    with self.assertRaises(RuntimeError):main(root,lambda _:source,NOW)
   state=json.loads((root/'operations/publisher-state.json').read_text());row=state['candidateQueue']['https://robbreport.com/home'];summary_hash=row['item']['summaryHash'];(root/'operations/reviewed-properties.json').write_text(json.dumps({'items':{'https://robbreport.com/home':{'mediaOnly':True,'summaryHash':summary_hash,'media':{'sourceUrl':'https://broker.example/same-property'}}}}))
   with patch('publish_properties.reviewed_media',return_value=MEDIA):result=main(root,lambda _:source,NOW+timedelta(minutes=5))
   self.assertEqual(len(result['articles']),1);state=json.loads((root/'operations/publisher-state.json').read_text());self.assertEqual(state['candidateQueue']['https://robbreport.com/home']['attempts'],1);self.assertIn('reviewedMediaRevision',state['candidateQueue']['https://robbreport.com/home']);self.assertTrue(state['quarantine'])

class ArchiveMediaRepair(unittest.TestCase):
 def test_media_repair_preserves_date_and_does_not_create_new_publication(self):
  from publish_properties import feature
  from rss_runtime import parse_feed
  with tempfile.TemporaryDirectory() as tmp:
   root=Path(tmp);TestPublisher().fixture(root,[])
   raw=rss('Malibu Home With a Private Observatory','https://robbreport.com/home','An ocean-view residence pairs organic modernism with sweeping coastal views.')
   item=parse_feed(raw,DIRECT,NOW)[0][0];a=feature(item,'waterfront',NOW,{'timezone':'America/Vancouver','version':7},MEDIA);a['sourceImage']={**MEDIA,'width':1200,'height':675}
   original_date=a['publishedAt'];state={'articles':[a],'runs':[{'productionVerified':True,'articles':[{'slug':a['slug']}]}],'quarantine':[],'discovery':[]}
   (root/'operations/publisher-state.json').write_text(json.dumps(state));(root/'operations/reviewed-properties.json').write_text(json.dumps({'items':{item['url']:{'archiveMediaRepair':True,'summaryHash':item['summaryHash'],'mediaOnly':True}}}))
   repaired={**MEDIA,'width':1600,'height':900,'originalWidth':2151,'originalHeight':1200,'originalImageUrl':'https://source.example/original.jpg','sourceImageAlt':'Same property','imageUrl':'/images/source-properties/repaired.jpg'}
   with patch('publish_properties.reviewed_media',return_value=repaired):report=main(root,lambda _:b'',NOW)
   self.assertEqual(report['articles'],[]);self.assertEqual(report['status'],'built-for-media-repair');self.assertEqual(len(report['mediaRepairs']),1)
   after=json.loads((root/'operations/publisher-state.json').read_text())['articles'];self.assertEqual(len(after),1);self.assertEqual(after[0]['publishedAt'],original_date);self.assertEqual(after[0]['image'],repaired['imageUrl'])

class ArchiveRepairRetryBound(unittest.TestCase):
 def test_failed_archive_media_is_cooled_and_exhausted_without_repeated_fetch(self):
  from publish_properties import feature
  from rss_runtime import parse_feed
  from datetime import timedelta
  with tempfile.TemporaryDirectory() as tmp:
   root=Path(tmp);TestPublisher().fixture(root,[]);item=parse_feed(rss('Malibu Home With a Private Observatory','https://robbreport.com/home','An ocean-view residence pairs organic modernism with sweeping coastal views.'),DIRECT,NOW)[0][0]
   a=feature(item,'waterfront',NOW,{'timezone':'America/Vancouver','version':7},MEDIA);a['sourceImage']={**MEDIA,'width':1200,'height':675};sp=root/'operations/publisher-state.json';sp.write_text(json.dumps({'articles':[a],'runs':[{'productionVerified':True,'articles':[{'slug':a['slug']}]}],'quarantine':[],'discovery':[]}));(root/'operations/reviewed-properties.json').write_text(json.dumps({'items':{item['url']:{'archiveMediaRepair':True,'summaryHash':item['summaryHash'],'mediaOnly':True}}}))
   with patch('publish_properties.reviewed_media',side_effect=ValueError('source photo unavailable')) as fetch:
    with self.assertRaises(RuntimeError):main(root,lambda _:b'',NOW)
    self.assertEqual(fetch.call_count,1)
    with self.assertRaises(RuntimeError):main(root,lambda _:b'',NOW+timedelta(hours=1))
    self.assertEqual(fetch.call_count,1)
    state=json.loads(sp.read_text());row=state['archiveMediaRepairQueue'][a['slug']];self.assertEqual(row['lastError'],'source photo unavailable');row['attempts']=5;sp.write_text(json.dumps(state))
    with self.assertRaises(RuntimeError):main(root,lambda _:b'',NOW+timedelta(days=1))
    self.assertEqual(fetch.call_count,1);self.assertEqual(json.loads(sp.read_text())['archiveMediaRepairQueue'][a['slug']]['attempts'],5)
