"""Existing repository health workflow restarts only its existing publisher."""
import json,os,urllib.request
from github_dispatch import receipt
from datetime import datetime,timezone
REPO='SHTFTV/loveourlistings.com'
BASE='https://api.github.com/repos/'+REPO
def recover(api,now,origin):
 workflow=api('GET','/actions/workflows/property-publisher.yml')
 if workflow.get('state')!='active':raise RuntimeError('Publisher workflow is not active: '+str(workflow.get('state')))
 runs=api('GET','/actions/workflows/property-publisher.yml/runs?branch=main&per_page=10')['workflow_runs']
 active=next((r for r in runs if r['status'] in ['queued','in_progress','waiting','pending','requested']),None)
 if active:return {'status':'publisher-active','runUrl':active['html_url'],'workflowState':workflow['state']}
 latest=max(runs,key=lambda r:r['created_at']) if runs else None
 if latest and (now-datetime.fromisoformat(latest['created_at'].replace('Z','+00:00'))).total_seconds()<300:
  return {'status':'recent-worker-cycle','runUrl':latest['html_url'],'workflowState':workflow['state']}
 dispatch=api('POST','/actions/workflows/property-publisher.yml/dispatches',{'ref':'main','inputs':{'automatic_recovery':True,'recovery_origin_run':origin}})
 return {'status':'recovery-requested-not-yet-verified','workflowState':workflow['state'],'publisherWorkflow':'property-publisher.yml','originRun':origin,'trigger':'workflow_dispatch','dispatchReceipt':dispatch}
def main():
 token=os.environ['GITHUB_TOKEN']
 if os.environ.get('GITHUB_REPOSITORY')!=REPO:raise RuntimeError('Recovery repository scope mismatch')
 def api(method,path,body=None):
  request=urllib.request.Request(BASE+path,method=method,data=json.dumps(body).encode() if body is not None else None,headers={'Authorization':'Bearer '+token,'Accept':'application/vnd.github+json','X-GitHub-Api-Version':'2026-03-10','Content-Type':'application/json','User-Agent':'LoveOurListings-HealthRecovery'})
  with urllib.request.urlopen(request,timeout=25) as response:
   if method=='POST':return receipt(response,REPO)
   data=response.read();return json.loads(data) if data else {}
 origin='https://github.com/'+REPO+'/actions/runs/'+os.environ['GITHUB_RUN_ID']
 result=recover(api,datetime.now(timezone.utc),origin)
 print(json.dumps(result,indent=2))
 summary=os.environ.get('GITHUB_STEP_SUMMARY')
 if summary:
  with open(summary,'a') as f:f.write('## Same-publisher automatic recovery\n\n```json\n'+json.dumps(result,indent=2)+'\n```\n')
if __name__=='__main__':main()
