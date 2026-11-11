import os,subprocess,unittest
from pathlib import Path
class SourcePhotoProjection(unittest.TestCase):
 def test_verified_pairing_reaches_cards_and_unrelated_photos_stay_blocked(self):
  script=Path(__file__).with_suffix('.mjs')
  result=subprocess.run([os.environ.get('LOL_NODE_BINARY','node'),str(script)],capture_output=True,text=True,timeout=15)
  self.assertEqual(result.returncode,0,result.stdout+result.stderr)
