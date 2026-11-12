import hashlib,json,tempfile,unittest
from pathlib import Path
from unittest.mock import patch
from datetime import timedelta
from test_property_publisher import TestPublisher,DIRECT,NOW,rss,MEDIA
from publish_properties import main
class WorkerContract(unittest.TestCase):
 def test_exhausted_failure_does_not_starve_healthy_candidate_or_hide_sot(self):
  with tempfile.TemporaryDirectory() as t:
   root=Path(t);TestPublisher().fixture(root,[DIRECT])
   broken=rss('Malibu Home With a Private Observatory','https://robbreport.com/broken','An ocean-view residence with a private observatory and a substantial source description.')
   with patch('publish_properties.resolve_media',side_effect=ValueError('native image unavailable')):
    for i in range(5):
     with self.assertRaises(RuntimeError):main(root,lambda _:broken,NOW+timedelta(hours=7*i))
   healthy=rss('Malibu Home With a Private Observatory','https://robbreport.com/healthy','A different ocean-view residence with a private observatory and its own detailed description.')
   with patch('publish_properties.resolve_media',return_value=MEDIA) as media:
    result=main(root,lambda _:healthy,NOW+timedelta(hours=40))
   self.assertEqual(len(result['articles']),1);self.assertEqual(media.call_count,1)
   self.assertEqual(result['publicationBlocks'][0]['retryStatus'],'quarantined-retry-exhausted')
   self.assertEqual(result['sotLoad']['sha256'],hashlib.sha256((root/'operations/site-sop.json').read_bytes()).hexdigest())
   status=json.loads((root/'public/publishing-status.json').read_text());self.assertEqual(status['health'],'degraded');self.assertEqual(status['ownerNotification']['status'],'pending-current-role-alert-proof')
 def test_commit_fence_rejects_changed_sot(self):
  from worker_preflight import fence
  with tempfile.TemporaryDirectory() as t:
   root=Path(t);(root/'operations').mkdir();(root/'operations/runtime-access.json').write_text(json.dumps({'status':'passed','sotLoad':{'version':1,'sha256':'old','sourceCommit':'abc'}}))
   with patch('worker_preflight.sot',return_value={'version':2,'sha256':'new','sourceCommit':'abc'}):
    with self.assertRaisesRegex(RuntimeError,'changed during job'):fence(root)
