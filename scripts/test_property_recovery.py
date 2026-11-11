import unittest,tempfile,json
from pathlib import Path
from unittest.mock import patch
from test_property_publisher import TestPublisher,DIRECT,NOW,rss,MEDIA
from publish_properties import main
from reviewed_properties import record_for,reviewed_media
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
