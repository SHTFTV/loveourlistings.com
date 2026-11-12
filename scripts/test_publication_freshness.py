import sys,unittest
from pathlib import Path
from unittest.mock import patch
sys.path.insert(0,str(Path(__file__).parent/'roles'))
from supervisor import publication_health
class PublicationFreshnessTests(unittest.TestCase):
 def event(self):return dict(status='done',url='https://www.loveourlistings.com/journal/test/',verifiedAt='2026-11-12T22:00:00+00:00',publishedAt='2026-11-12T21:00:00+00:00')
 def test_two_hour_boundary(self):
  with patch('supervisor.age',return_value=7200):self.assertFalse(publication_health([self.event()])['inspectionRequired'])
  with patch('supervisor.age',return_value=7201):self.assertTrue(publication_health([self.event()])['inspectionRequired'])
 def test_hold_or_unverified_does_not_refresh_clock(self):
  for e in [dict(self.event(),status='failed'),dict(self.event(),verifiedAt=None)]:self.assertTrue(publication_health([e])['inspectionRequired'])
 def test_latest_actual_publication_is_selected(self):
  older=dict(self.event(),publishedAt='2026-11-11T21:00:00+00:00')
  with patch('supervisor.age',return_value=10):self.assertEqual(publication_health([self.event(),older])['lastVerifiedPublication'],self.event())
