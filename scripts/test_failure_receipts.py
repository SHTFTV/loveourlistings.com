import unittest,tempfile,json
from pathlib import Path
from verify_property_publication import failed
class FailureReceipts(unittest.TestCase):
 def test_zero_article_fault_creates_specific_deduplicated_public_hold(self):
  with tempfile.TemporaryDirectory() as tmp:
   r=Path(tmp);(r/'operations').mkdir();(r/'public').mkdir()
   run={'status':'blocked-property-publication','startedAt':'2026-11-10T23:00:00Z','sopVersion':3,'runUrl':'https://github.com/SHTFTV/loveourlistings.com/actions/runs/123','articles':[],'sources':[],'collections':[],'discovered':0,'duplicates':0,'quarantined':1,'publicationBlocks':[{'sourceUrl':'https://publisher.example/house','title':'The actual property','reason':'Native source image must support1600x900 without upscaling'}]}
   (r/'operations/latest-run.json').write_text(json.dumps(run));(r/'operations/publisher-state.json').write_text(json.dumps({'runs':[run]}));failed(r);failed(r)
   events=json.loads((r/'public/publication-results.json').read_text())['events'];self.assertEqual(len(events),1);self.assertEqual(events[0]['status'],'failed');self.assertIsNone(events[0]['url']);self.assertIn('actual property',events[0]['title']);self.assertIn('1600x900',events[0]['title']);self.assertEqual(events[0]['runUrl'],run['runUrl'])
if __name__=='__main__':unittest.main()
