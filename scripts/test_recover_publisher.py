import importlib.util,unittest
from pathlib import Path
from datetime import datetime,timezone
spec=importlib.util.spec_from_file_location('recovery',Path(__file__).with_name('recover-publisher.py'));m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)
class Recovery(unittest.TestCase):
 def check(self,runs,state='active'):
  calls=[]
  def api(method,path,body=None):
   calls.append((method,path,body));return {'state':state} if path.endswith('.yml') else {'workflow_runs':runs} if method=='GET' else {}
  result=m.recover(api,datetime(2026,11,12,2,tzinfo=timezone.utc),'https://github.com/SHTFTV/loveourlistings.com/actions/runs/123')
  return result,calls
 def test_stale_cycle_dispatches_same_existing_publisher(self):
  result,calls=self.check([{'status':'completed','created_at':'2026-11-11T21:31:00Z','html_url':'old'}]);self.assertEqual(calls[-1][0],'POST');self.assertEqual(calls[-1][2]['ref'],'main');self.assertTrue(calls[-1][2]['inputs']['automatic_recovery']);self.assertIn('not-yet-verified',result['status'])
 def test_active_and_recent_cycles_do_not_duplicate_work(self):
  for status,at in [('in_progress','2026-11-11T21:31:00Z'),('completed','2026-11-12T01:59:00Z')]:
   result,calls=self.check([{'status':status,'created_at':at,'html_url':'current'}]);self.assertFalse(any(c[0]=='POST' for c in calls))
 def test_disabled_workflow_fails_truthfully(self):
  with self.assertRaisesRegex(RuntimeError,'not active'):self.check([],state='disabled_manually')
if __name__=='__main__':unittest.main()
