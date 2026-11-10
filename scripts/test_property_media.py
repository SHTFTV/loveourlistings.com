import unittest,tempfile,io,hashlib
from pathlib import Path
from PIL import Image
from property_media import resolve,MediaUnavailable
class MediaTests(unittest.TestCase):
 def image(self,w=1600,h=900):
  b=io.BytesIO();Image.new('RGB',(w,h),(70,90,100)).save(b,format='JPEG');return b.getvalue()
 def test_exact_og_beats_related_post_image_and_preserves_bytes(self):
  image=self.image(1200,675);url='https://publisher.example/actual-house.jpg';page='<meta content="'+url+'" property="og:image"><img class="wp-post-image" src="https://publisher.example/related-house.jpg">'
  with tempfile.TemporaryDirectory() as tmp:
   r=Path(tmp);seen=[]
   def fetch(u):seen.append(u);return image
   m=resolve('https://publisher.example/exact-property',r,fetch,raw=page)
   self.assertEqual(seen,[url]);self.assertEqual(m['width'],1200);self.assertEqual(m['displayWidth'],1200);self.assertEqual(m['originalImageSha256'],hashlib.sha256(image).hexdigest());self.assertEqual(hashlib.sha256((r/'public'/m['imageUrl'].lstrip('/')).read_bytes()).hexdigest(),m['imageSha256'])
   self.assertNotIn('rightsEvidence',m);self.assertIn('no licence',m['usageBasis'])
 def test_listing_picture_one_not_picture_nineteen(self):
  page='<img src="https://source.example/one.jpg" alt="Home property picture 1 of 20"><img src="https://source.example/nineteen.jpg" alt="Home property picture 19 of 20">'
  m=resolve('https://source.example/listing',None,lambda _:self.image(),raw=page);self.assertEqual(m['originalImageUrl'],'https://source.example/one.jpg')
 def test_generic_logo_no_photo_and_explicit_restriction_block(self):
  for page in ['<meta property="og:image" content="https://source.example/logo.jpg">','<h1>No image</h1>','Reproduction is prohibited<meta property="og:image" content="https://source.example/photo.jpg">']:
   with self.assertRaises(MediaUnavailable):resolve('https://source.example/exact',None,lambda _:self.image(),raw=page)
 def test_unusable_bytes_and_tiny_image_block(self):
  page='<meta property="og:image" content="https://source.example/photo.jpg">'
  for b in [b'<html>Not an image</html>',self.image(120,90)]:
   with self.assertRaises(MediaUnavailable):resolve('https://source.example/exact',None,lambda _:b,raw=page)
 def test_observed_derivative_recovers_same_native_asset(self):
  url='https://cdn.example/width=960/https://source.example/media/exact-house';seen=[]
  m=resolve('https://source.example/exact',None,lambda u:(seen.append(u) or self.image(2400,1600)),raw='<meta property="og:image" content="'+url+'">');self.assertEqual(seen[0],'https://source.example/media/exact-house');self.assertEqual(m['displayWidth'],1600)
if __name__=='__main__':unittest.main()
