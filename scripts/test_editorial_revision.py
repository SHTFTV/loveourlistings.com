import unittest,copy
from editorial_revision import apply,content_hash
class EditorialRevisionTests(unittest.TestCase):
 def test_revision_preserves_original_and_rejects_changed_source_or_draft(self):
  draft={'title':'T','deck':'D','paragraphs':[['Old','Old wording']],'image':'/a.jpg','source':{'url':'https://example.com/a'},'writer':{'sourceTextSha256':'body'}};original=copy.deepcopy(draft);revision={'fromContentSha256':content_hash(draft),'sourceSummaryHash':'summary','sourceTextSha256':'body','paragraphs':[['New','Original rewritten wording']]};item={'summaryHash':'summary'}
  revised,h=apply(draft,item,revision);self.assertEqual(draft,original);self.assertEqual(revised['paragraphs'],revision['paragraphs']);self.assertEqual(apply(revised,item,revision)[1],h)
  for changed_item,changed_draft in [({'summaryHash':'changed'},draft),(item,{**draft,'title':'Changed'}),(item,{**draft,'writer':{'sourceTextSha256':'changed'}})]:
   with self.assertRaises(ValueError):apply(changed_draft,changed_item,revision)
