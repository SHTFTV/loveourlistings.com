import sys,unittest,json,tempfile
from pathlib import Path
from unittest.mock import patch
from datetime import datetime,timedelta,timezone
sys.path.insert(0,str(Path(__file__).parent/'roles'))
import common
class FourRoles(unittest.TestCase):
 def test_stale_missing_wrong_sot_and_future_evidence_cannot_be_fresh(self):
  t=datetime(2026,11,12,5,0,tzinfo=timezone.utc)
  with patch.object(common,'now',return_value=t),patch.object(common,'sot',return_value={'sha256':'approved'}):
   base={'runtimeVerified':True,'checkedAt':t.isoformat(),'sotLoad':{'sha256':'approved'}}
   self.assertTrue(common.fresh(base,900))
   for changed in [{'runtimeVerified':False},{'checkedAt':(t-timedelta(minutes=16)).isoformat()},{'checkedAt':(t+timedelta(minutes=2)).isoformat()},{'sotLoad':None},{'sotLoad':{'sha256':'old'}}]:self.assertFalse(common.fresh({**base,**changed},900))
 def test_watchdog_cannot_claim_delivery_without_actual_owner_receiver(self):
  import watchdog
  with tempfile.TemporaryDirectory() as tmp:
   root=Path(tmp);(root/'operations').mkdir();(root/'operations/site-sop.json').write_text(json.dumps({'fourRoles':{'ownerDeliveryReceiptUrl':None}}))
   d={'site':'loveourlistings.com','role':'watchdog','checkedAt':'2026-11-12T05:00:00Z','findings':[]}
   with patch.object(watchdog,'ROOT',root),patch.object(watchdog,'receipt',return_value=d),patch.object(watchdog,'latest',return_value={'status':'passed','findings':[]}),patch.object(watchdog,'fresh',return_value=True),patch.object(watchdog,'save'):
    watchdog.main()
   self.assertFalse(d['verified']);self.assertFalse(d['ownerAlertDelivery']['verified']);self.assertEqual(d['status'],'failed');self.assertEqual(d['alerts'][0]['deliveryStatus'],'pending-unverified')
 def test_only_current_same_site_workflow_artifact_is_trusted(self):
  with patch.object(common,'api',side_effect=[{'artifacts':[{'id':1,'expired':False,'workflow_run':{'id':2}}]},{'path':'.github/workflows/property-publisher.yml','head_branch':'main','repository':{'full_name':common.REPO}}]):
   result=common.latest('supervisor');self.assertFalse(result['verified']);self.assertEqual(result['status'],'missing')

class RoleDispatchOrigin(unittest.TestCase):
 def test_manual_actor_cannot_be_relabelled_as_unattended(self):
  with patch.dict(common.os.environ,{'GITHUB_EVENT_NAME':'workflow_dispatch','GITHUB_ACTOR':'SHTFTV'}):self.assertFalse(common.automatic_origin()['verified'])
 def test_bot_dispatch_requires_actual_same_repository_publisher_run(self):
  with tempfile.TemporaryDirectory() as tmp:
   p=Path(tmp)/'event.json';p.write_text(json.dumps({'inputs':{'publisher_origin_run':'https://github.com/SHTFTV/loveourlistings.com/actions/runs/123'}}))
   env={'GITHUB_EVENT_NAME':'workflow_dispatch','GITHUB_ACTOR':'github-actions[bot]','GITHUB_EVENT_PATH':str(p)}
   run={'path':'.github/workflows/property-publisher.yml','head_branch':'main','repository':{'full_name':common.REPO},'run_started_at':common.now().isoformat()}
   with patch.dict(common.os.environ,env),patch.object(common,'api',return_value=run):self.assertTrue(common.automatic_origin()['verified'])
   for wrong in [{'path':'.github/workflows/other.yml'},{'head_branch':'other'},{'repository':{'full_name':'other/repo'}},{'run_started_at':(common.now()-timedelta(hours=1)).isoformat()}]:
    with patch.dict(common.os.environ,env),patch.object(common,'api',return_value={**run,**wrong}):self.assertFalse(common.automatic_origin()['verified'])

class ReceiptOrdering(unittest.TestCase):
 def test_receipt_creation_time_wins_over_nonmonotonic_artifact_id(self):
  import io,zipfile
  rows=[{'id':999,'created_at':'2026-11-12T15:00:00Z','expired':False,'workflow_run':{'id':10}},{'id':1,'created_at':'2026-11-12T17:00:00Z','expired':False,'workflow_run':{'id':20}}]
  def call(path,binary=False):
   if path.startswith('/actions/artifacts?'):return {'artifacts':rows}
   if path.startswith('/actions/runs/'):return {'path':common.PATHS['supervisor'],'head_branch':'main','repository':{'full_name':common.REPO}}
   if path.endswith('/zip'):
    b=io.BytesIO()
    with zipfile.ZipFile(b,'w') as z:z.writestr('receipt.json',json.dumps({'role':'supervisor','site':common.SITE,'runtimeVerified':True,'runUrl':'new' if '/1/' in path else 'old'}))
    return b.getvalue()
   raise AssertionError(path)
  with patch.object(common,'api',side_effect=call):self.assertEqual(common.latest('supervisor')['runUrl'],'new')

class OwnerDeliveryProjection(unittest.TestCase):
 def test_status_preserves_actual_delivery_scope_and_rejects_wrong_sot(self):
  from publish_properties import owner_notice
  with tempfile.TemporaryDirectory() as tmp:
   root=Path(tmp);(root/'operations').mkdir();role={'checkedAt':common.now().isoformat(),'sotLoad':{'sha256':'current'},'ownerAlertDelivery':{'verified':True,'receiptUrl':'https://markett-ca.vercel.app/api/publication-activity','expectedEventId':'same-incident','deliveredAt':common.now().isoformat()}}
   (root/'operations/four-roles.json').write_text(json.dumps({'roles':{'watchdog':role}}));d=owner_notice(root,{'sotLoad':{'sha256':'current'}});self.assertEqual(d['status'],'role-alert-delivery-last-verified');self.assertFalse(d['ownerReadVerified'])
   self.assertEqual(owner_notice(root,{'sotLoad':{'sha256':'different'}})['status'],'pending-current-role-alert-proof')
