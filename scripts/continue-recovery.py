"""Hand off to existing health workflow explicitly; no workflow_run nesting dependency."""
import json,os,urllib.request
from pathlib import Path
from datetime import datetime,timezone
from github_dispatch import receipt
def handoff(send,repository,run_id):
 if repository!='SHTFTV/loveourlistings.com':raise RuntimeError('Recovery scope mismatch')
 path='https://api.github.com/repos/'+repository+'/actions/workflows/property-health.yml/dispatches'
 accepted=send(path,{'ref':'main'})
 return {'status':'health-recovery-handoff-requested','originPublisherRun':'https://github.com/'+repository+'/actions/runs/'+run_id,'nextWorkflow':'property-health.yml','dispatchReceipt':accepted,'proof':'Dispatch accepted; next execution remains independently verified'}
def main():
 token=os.environ['GITHUB_TOKEN']
 def send(url,body):
  req=urllib.request.Request(url,method='POST',data=json.dumps(body).encode(),headers={'Authorization':'Bearer '+token,'Accept':'application/vnd.github+json','X-GitHub-Api-Version':'2026-03-10','Content-Type':'application/json'})
  with urllib.request.urlopen(req,timeout=25) as response:
   return receipt(response,os.environ['GITHUB_REPOSITORY'])
 result=handoff(send,os.environ['GITHUB_REPOSITORY'],os.environ['GITHUB_RUN_ID'])
 root=Path(__file__).resolve().parents[1];report=json.loads((root/'operations/latest-run.json').read_text());current=report.get('runUrl')==result['originPublisherRun']
 result.update(checkedAt=datetime.now(timezone.utc).isoformat(),publisherOutcome=report.get('status') if current else 'current-run-receipt-unavailable',sourceCount=len(report.get('sources',[])) if current else None,actualAutomaticOrigin=report.get('automaticTriggerProof') if current else None,nativeScheduleProof=False,operationallyComplete=False)
 for path in ['operations/recovery-handoff.json','public/automatic-recovery.json']:(root/path).write_text(json.dumps(result,indent=2)+'\n')
 print(json.dumps(result,indent=2))
 summary=os.environ.get('GITHUB_STEP_SUMMARY')
 if summary:
  with open(summary,'a') as f:f.write('\n## Health recovery handoff\n\n```json\n'+json.dumps(result,indent=2)+'\n```\n')
if __name__=='__main__':main()
