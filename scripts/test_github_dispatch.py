import io,json,unittest
from github_dispatch import receipt
class Response(io.BytesIO):
 def __init__(self,status,data):super().__init__(json.dumps(data).encode());self.status=status
class DispatchReceipt(unittest.TestCase):
 def test_current_response_keeps_actual_run_identity(self):
  result=receipt(Response(200,{'workflow_run_id':123,'html_url':'https://github.com/SHTFTV/loveourlistings.com/actions/runs/123'}),'SHTFTV/loveourlistings.com');self.assertTrue(result['accepted']);self.assertEqual(result['workflow_run_id'],123)
 def test_legacy_empty_response_is_accepted_without_execution_claim(self):self.assertEqual(receipt(Response(204,{}),'SHTFTV/loveourlistings.com'),{'accepted':True})
 def test_wrong_repository_response_is_rejected(self):
  with self.assertRaisesRegex(RuntimeError,'scope/identity'):receipt(Response(200,{'workflow_run_id':123,'html_url':'https://github.com/other/repo/actions/runs/123'}),'SHTFTV/loveourlistings.com')
if __name__=='__main__':unittest.main()
