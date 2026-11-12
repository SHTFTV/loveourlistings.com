import unittest
from datetime import datetime,timezone
from automatic_trigger import verify
class TriggerProof(unittest.TestCase):
 def test_manual_metadata_alone_does_not_count_as_recovery(self):
  env={'GITHUB_EVENT_NAME':'workflow_dispatch','LOL_AUTOMATIC_RECOVERY':'true','GITHUB_REPOSITORY':'SHTFTV/loveourlistings.com','GITHUB_ACTOR':'SHTFTV','LOL_RECOVERY_ORIGIN_RUN':'https://github.com/SHTFTV/loveourlistings.com/actions/runs/123'}
  self.assertFalse(verify(env,fetch=lambda _:{}).get('verified'))
 def test_actual_recent_health_workflow_and_bot_are_required(self):
  env={'GITHUB_EVENT_NAME':'workflow_dispatch','LOL_AUTOMATIC_RECOVERY':'true','GITHUB_REPOSITORY':'SHTFTV/loveourlistings.com','GITHUB_ACTOR':'github-actions[bot]','LOL_RECOVERY_ORIGIN_RUN':'https://github.com/SHTFTV/loveourlistings.com/actions/runs/123'}
  run={'path':'.github/workflows/property-health.yml','head_branch':'main','repository':{'full_name':'SHTFTV/loveourlistings.com'},'run_started_at':'2026-11-12T02:00:00Z','event':'workflow_run'}
  result=verify(env,fetch=lambda _:run,now=datetime(2026,11,12,2,5,tzinfo=timezone.utc));self.assertTrue(result['verified']);self.assertEqual(result['kind'],'automatic-recovery')
  run['path']='.github/workflows/other.yml';self.assertFalse(verify(env,fetch=lambda _:run,now=datetime(2026,11,12,2,5,tzinfo=timezone.utc))['verified'])
if __name__=='__main__':unittest.main()
