import unittest
from property_evidence import recover
class EvidenceGuards(unittest.TestCase):
 def setUp(self):
  self.item={'url':'https://robbreport.com/shelter/home-1234567890','title':'Exact Home','sourceDate':'2026-11-11'}
  self.sop={'sources':[{'articleHosts':['robbreport.com']}]}
  self.page='<meta property="og:title" content="Exact Home"><meta property="og:url" content="'+self.item['url']+'"><meta property="article:published_time" content="2026-11-11T12:00:00Z"><article id="post-1234567890"><p>'+('The documented home has a courtyard and covered terrace. '*8)+'</p><p>RELATED: Another unrelated mansion has a helipad and ten swimming pools.</p><aside><p>Author biography contains invented property facts and must stay excluded.</p></aside></article>'
 def run_recovery(self,page=None):return recover(self.item,self.sop,fetch=lambda u:(page or self.page).encode())
 def test_exact_body_excludes_related_and_biography(self):
  r=self.run_recovery();self.assertNotIn('helipad',r['sourceEvidence']['text']);self.assertNotIn('biography',r['sourceEvidence']['text']);self.assertEqual(r['sourceEvidence']['wordCount'],72)
 def test_wrong_title_rejected(self):
  with self.assertRaisesRegex(ValueError,'TITLE_MISMATCH'):self.run_recovery(self.page.replace('content="Exact Home"','content="Other Home"'))
 def test_wrong_date_rejected(self):
  with self.assertRaisesRegex(ValueError,'DATE_MISMATCH'):self.run_recovery(self.page.replace('2026-11-11T','2026-11-10T'))
 def test_wrong_canonical_rejected(self):
  with self.assertRaisesRegex(ValueError,'CANONICAL_MISMATCH'):self.run_recovery(self.page.replace('content="'+self.item['url'],'content="https://robbreport.com/other'))
 def test_unapproved_host_never_fetched(self):
  self.item['url']='https://unapproved.example/home'
  with self.assertRaisesRegex(ValueError,'HOST_NOT_APPROVED'):recover(self.item,self.sop,fetch=lambda u:self.fail('network'))
