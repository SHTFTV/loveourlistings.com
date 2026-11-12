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

class PreviewIsolation(unittest.TestCase):
 def test_actual_publisher_previews_without_appending_or_resolving_hold(self):
  from test_property_publisher import TestPublisher,DIRECT,NOW,rss
  from unittest.mock import patch
  from publish_properties import main
  with tempfile.TemporaryDirectory() as t:
   root=Path(t);TestPublisher().fixture(root,[DIRECT])
   media={'status':'verified-original-illustration','sourceUrl':'https://robbreport.com/home','imageUrl':'/images/editorial-illustrations/art.jpg','imageSha256':'a'*64,'width':1600,'height':900,'sourceImageAlt':'Concept only','credit':LABEL,'label':LABEL,'isIllustration':True,'releaseReady':False,'visualQa':{'image':True,'desktop':False,'phone':False}}
   source=rss('Malibu Home With a Private Observatory','https://robbreport.com/home','An ocean-view residence with a private observatory and a substantial source description.')
   with patch('publish_properties.resolve_media',side_effect=ValueError('native image too small')),patch('publish_properties.illustration_record',return_value={'revision':1}),patch('publish_properties.resolve_illustration',return_value=media):
    with self.assertRaisesRegex(RuntimeError,'Eligible property publication blocked'):main(root,lambda _:source,NOW)
   state=json.loads((root/'operations/publisher-state.json').read_text());self.assertEqual(state['articles'],[])
   report=json.loads((root/'operations/latest-run.json').read_text());self.assertEqual(report['articles'],[]);self.assertFalse(report['productionVerified']);self.assertIsNone(report['previews'][0]['url']);self.assertIn('contentSha256',report['previews'][0])
   draft=state['candidateQueue']['https://robbreport.com/home']['illustrationDraft'];self.assertTrue(draft['preview']);self.assertTrue(list((root/'work/editorial-previews').glob('*/receipt.json')))
