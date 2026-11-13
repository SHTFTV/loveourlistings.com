import unittest,tempfile,json,hashlib,io,xml.etree.ElementTree as ET
from pathlib import Path
from datetime import timedelta
from unittest.mock import patch
import test_property_publisher as fixtures
from publish_properties import main,category,feature
from rss_runtime import parse_feed
from verify_property_publication import hold_results
from property_evidence import recover

class QueueCheckValves(unittest.TestCase):
 def fixture(self,root,source=None):fixtures.TestPublisher().fixture(root,[fixtures.DIRECT]);return source or fixtures.rss('Malibu Home With a Private Observatory','https://robbreport.com/waterfront','An ocean-view residence with a private observatory and a substantial source description.')
 def test_no_eligible_content_is_successful_intake_with_explicit_retry_time(self):
  with tempfile.TemporaryDirectory() as tmp:
   root=Path(tmp);raw=self.fixture(root)
   with patch('publish_properties.resolve_media',side_effect=ValueError('Native source image must support1600x900 without upscaling')):
    first=main(root,lambda _:raw,fixtures.NOW)
   self.assertEqual(first['status'],'no-eligible-content');self.assertEqual(first['queueProgress']['attemptedThisRun'],1)
   with patch('publish_properties.resolve_media') as media:second=main(root,lambda _:raw,fixtures.NOW+timedelta(minutes=5))
   media.assert_not_called();self.assertEqual(second['queueProgress']['attemptedThisRun'],0);check=second['candidateChecks'][0];self.assertEqual(check['outcome'],'retry-cooldown');self.assertEqual(check['nextAttemptAt'],(fixtures.NOW+timedelta(hours=6)).isoformat());self.assertIn('1600x900',check['reason'])
 def test_persistent_collection_rotation_prevents_continuous_failures_monopolizing_budget(self):
  with tempfile.TemporaryDirectory() as tmp:
   root=Path(tmp);self.fixture(root);cfg=json.loads((root/'operations/site-sop.json').read_text());cfg['retryPolicy']={'maxCandidatesPerRun':1,'maxAttempts':5,'cooldownHours':0};(root/'operations/site-sop.json').write_text(json.dumps(cfg))
   a=ET.fromstring(fixtures.rss('Malibu Home With a Private Observatory','https://robbreport.com/waterfront','An ocean-view residence with a private observatory and substantial original facts.'));b=ET.fromstring(fixtures.rss('A Historic Tudor Home','https://robbreport.com/mansion','An inland Tudor home with original carved woodwork and substantial dated source facts.'));a.find('channel').append(b.find('channel/item'));raw=ET.tostring(a)
   with patch('publish_properties.resolve_media',side_effect=ValueError('source unavailable')):
    first=main(root,lambda _:raw,fixtures.NOW);second=main(root,lambda _:raw,fixtures.NOW+timedelta(minutes=5))
   attempted=lambda r:[c['collection'] for c in r['candidateChecks'] if c['outcome']=='attempt-failed']
   self.assertEqual(attempted(first),['waterfront']);self.assertEqual(attempted(second),['mansions']);self.assertEqual(second['queueProgress']['attemptedThisRun'],1);self.assertIn('deferred-attempt-budget',second['queueProgress']['outcomes'])
 def test_source_summary_refresh_does_not_reset_exhausted_budget(self):
  with tempfile.TemporaryDirectory() as tmp:
   root=Path(tmp);raw=self.fixture(root)
   with patch('publish_properties.resolve_media',side_effect=ValueError('native photo unavailable')):main(root,lambda _:raw,fixtures.NOW)
   sp=root/'operations/publisher-state.json';state=json.loads(sp.read_text());key='https://robbreport.com/waterfront';state['candidateQueue'][key]['attempts']=5;old_hash=state['candidateQueue'][key]['item']['summaryHash'];sp.write_text(json.dumps(state));changed=raw.replace(b'substantial source description',b'changed but still substantive source description')
   with patch('publish_properties.resolve_media') as media:result=main(root,lambda _:changed,fixtures.NOW+timedelta(hours=7))
   media.assert_not_called();row=json.loads(sp.read_text())['candidateQueue'][key];self.assertEqual(row['attempts'],5);self.assertEqual(row['priorSourceVersions'][-1]['summaryHash'],old_hash);self.assertEqual(result['candidateChecks'][0]['outcome'],'quarantined-retry-exhausted')
 def test_permission_review_is_a_nonretrying_item_valve(self):
  with tempfile.TemporaryDirectory() as tmp:
   root=Path(tmp);raw=self.fixture(root);item=parse_feed(raw,fixtures.DIRECT,fixtures.NOW)[0][0];(root/'operations/reviewed-properties.json').write_text(json.dumps({'items':{item['url']:{'summaryHash':item['summaryHash'],'reviewRequired':True,'holdReason':'Explicit personal non-commercial source condition'}}}))
   with patch('publish_properties.resolve_media') as media:result=main(root,lambda _:raw,fixtures.NOW)
   media.assert_not_called();self.assertEqual(result['candidateChecks'][0]['outcome'],'review-required');self.assertIsNone(result['candidateChecks'][0]['nextAttemptAt']);self.assertEqual(result['status'],'no-eligible-content')
 def test_all_direct_sources_unavailable_remains_a_real_runtime_fault(self):
  with tempfile.TemporaryDirectory() as tmp:
   root=Path(tmp);self.fixture(root)
   with self.assertRaises(RuntimeError):main(root,lambda _:(_ for _ in ()).throw(ValueError('HTTP403')),fixtures.NOW)
   report=json.loads((root/'operations/latest-run.json').read_text());self.assertEqual(report['status'],'all-property-sources-failed');self.assertEqual(report['queueProgress']['runtimeState'],'intake-unavailable')
 def test_hold_projection_does_not_invent_failed_publications_for_unverified_new_features(self):
  with tempfile.TemporaryDirectory() as tmp:
   root=Path(tmp);(root/'operations').mkdir();(root/'public').mkdir();report={'articles':[{'slug':'new-pending','title':'Pending','publishedAt':'2026-11-12','url':'https://www.loveourlistings.com/journal/new-pending/'}],'publicationBlocks':[{'sourceUrl':'https://source.example/held','title':'Held','reason':'Native1600x900 required'}],'runUrl':'https://github.com/SHTFTV/loveourlistings.com/actions/runs/123','startedAt':'2026-11-12T12:00:00Z'};(root/'operations/latest-run.json').write_text(json.dumps(report));hold_results(root);events=json.loads((root/'public/publication-results.json').read_text())['events'];self.assertEqual(len(events),1);self.assertIn(':hold:',events[0]['id']);self.assertNotIn('new-pending',str(events))
 def test_new_source_excludes_roundups_and_accepts_individual_country_properties(self):
  item=lambda t:{'sourceId':'countrylife-property','publisher':'Country Life','title':t,'summary':'An individual original property with detailed dated source facts.'}
  self.assertIsNone(category(item('Six fine homes for sale this week')));self.assertIsNone(category(item('A discount home and opportunists betting on property')));self.assertEqual(category(item('A Georgian home for sale in the South Downs')),'mansions');self.assertEqual(category(item('A commutable castle set in 12 acres')),'acreage')

class EstablishedFutureBody(unittest.TestCase):
 def test_exact_body_identity_date_and_exclusions(self):
  url='https://www.countrylife.co.uk/property/exact-home';item={'url':url,'title':'Exact Georgian Home','sourceDate':'2026-11-12'};sop={'sources':[{'articleHosts':['www.countrylife.co.uk']}]};words='This exact Georgian residence has a garden and original architectural details that the original publisher describes in its own dated property report. '
  raw=('<meta property="og:title" content="Exact Georgian Home"><meta property="og:url" content="'+url+'"><meta property="article:published_time" content="2026-11-12T16:00:00Z"><article><p>Unrelated outside paragraph should not enter evidence.</p><div id="article-body"><p>'+words*3+'</p><aside><p>Excluded unrelated widget</p></aside></div></article>').encode();result=recover(item,sop,fetch=lambda _:raw);alternate=raw.replace(b'content="Exact Georgian Home"',b'content="Alternate social headline"')+b'<h1>Exact Georgian Home</h1>';self.assertEqual(recover(item,sop,fetch=lambda _:alternate)['sourceEvidence']['text'],result['sourceEvidence']['text']);self.assertNotIn('Unrelated outside',result['sourceEvidence']['text']);self.assertNotIn('widget',result['sourceEvidence']['text'])
  for altered in [raw.replace(b'id="article-body"',b'id="other"'),raw.replace(b'Exact Georgian Home',b'Other Georgian Home'),raw.replace(b'2026-11-12T',b'2026-11-11T')]:
   with self.assertRaises(ValueError):recover(item,sop,fetch=lambda _:altered)

class SharedPropertyTypeGate(unittest.TestCase):
 def test_castle_and_tower_reach_same_audited_writer_as_other_individual_properties(self):
  base={'sourceId':'countrylife-property','publisher':'Country Life','url':'https://www.countrylife.co.uk/property/actual-castle','sourceDate':'2026-11-12','feedPublishedAt':'2026-11-12T12:00:00+00:00','summary':'Dated source facts about this individual property.','summaryHash':'hash'}
  draft={'title':'We Love This Listing: Actual Property','deck':'Actual source grounded property.','paragraphs':[['Source','Specific facts.']],'writer':{'provider':'fixture'}}
  for title in ['A commutable castle in 12 acres','A converted water tower is on the market']:
   item={**base,'title':title}
   with patch('publish_properties.recover_evidence',return_value={**item,'sourceEvidence':{'text':'Verified source facts'}}),patch('property_writer.write_feature',return_value=draft) as writer:
    result=feature(item,category(item),fixtures.NOW,{'timezone':'America/Vancouver','version':13},fixtures.MEDIA)
   writer.assert_called_once();self.assertEqual(result['title'],draft['title'])
