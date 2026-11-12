import json,tempfile,hashlib,unittest
from pathlib import Path
from PIL import Image
from original_illustration import resolve,LABEL
from publish_properties import render
class Illustration(unittest.TestCase):
 def test_art_is_bound_labeled_and_requires_actual_layout_reviews(self):
  with tempfile.TemporaryDirectory() as t:
   root=Path(t);(root/'operations').mkdir();p=root/'public/images/editorial-illustrations/art.jpg';p.parent.mkdir(parents=True);Image.new('RGB',(1600,900)).save(p)
   m={'sourceSummaryHash':'facts','imageUrl':'/images/editorial-illustrations/art.jpg','imageSha256':hashlib.sha256(p.read_bytes()).hexdigest(),'label':LABEL,'alt':'Concept only, not actual property','credit':LABEL,'visualQa':{'image':True,'desktop':False,'phone':False}}
   (root/'operations/original-illustrations.json').write_text(json.dumps({'items':{'https://example.com/story':m}}))
   item={'url':'https://example.com/story','summaryHash':'facts'};result=resolve(item,root);self.assertFalse(result['releaseReady']);self.assertTrue(result['isIllustration'])
   with self.assertRaisesRegex(ValueError,'fingerprint'):resolve({**item,'summaryHash':'changed'},root)
 def test_preview_has_no_published_schema_and_explicit_label(self):
  a={'preview':True,'slug':'preview','publishedAt':'2026-11-11T00:00:00Z','source':{'url':'https://example.com/story','sourceDate':'2026-11-10','name':'Source'},'title':'Draft','deck':'Draft','collection':'mansions','image':'/art.jpg','imageAlt':'Illustration','imageCredit':LABEL,'sourceImage':{'isIllustration':True},'paragraphs':[]}
  h=render(a,'https://www.loveourlistings.com');self.assertIn('noindex,nofollow',h);self.assertIn('Unpublished editorial preview',h);self.assertNotIn('datePublished',h);self.assertIn(LABEL,h);self.assertIn('/editorial-preview/preview/',h)
