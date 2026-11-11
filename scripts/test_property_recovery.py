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
   with patch('publish_properties.resolve_media',return_value=MEDIA):result=main(root,lambda _:rotated,NOW)
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
