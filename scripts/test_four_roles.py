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
