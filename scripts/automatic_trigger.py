"""Verify a health-workflow-originated dispatch without calling it a native schedule."""
import json,os,re,urllib.request
from datetime import datetime,timezone
REPO='SHTFTV/loveourlistings.com'
def verify(env=None,fetch=None,now=None):
 env=env or os.environ;now=now or datetime.now(timezone.utc)
 if env.get('GITHUB_EVENT_NAME')!='workflow_dispatch' or env.get('LOL_AUTOMATIC_RECOVERY')!='true':return {'verified':False,'reason':'Not an automatic recovery request'}
 if env.get('GITHUB_REPOSITORY')!=REPO or env.get('GITHUB_ACTOR')!='github-actions[bot]':return {'verified':False,'reason':'Recovery actor/repository mismatch'}
 origin=env.get('LOL_RECOVERY_ORIGIN_RUN','');match=re.fullmatch(r'https://github\.com/SHTFTV/loveourlistings\.com/actions/runs/(\d+)',origin)
 if not match:return {'verified':False,'reason':'Invalid recovery origin'}
 try:
  if fetch:run=fetch(match[1])
  else:
   req=urllib.request.Request('https://api.github.com/repos/'+REPO+'/actions/runs/'+match[1],headers={'Authorization':'Bearer '+env['GITHUB_TOKEN'],'Accept':'application/vnd.github+json','X-GitHub-Api-Version':'2026-03-10'})
   with urllib.request.urlopen(req,timeout=20) as response:run=json.load(response)
  age=(now-datetime.fromisoformat(run['run_started_at'].replace('Z','+00:00'))).total_seconds()
  valid=run.get('path')=='.github/workflows/property-health.yml' and run.get('head_branch')=='main' and run.get('repository',{}).get('full_name')==REPO and 0<=age<=1800
  return {'verified':valid,'kind':'automatic-recovery','originRun':origin,'originEvent':run.get('event'),'reason':'Verified repository health workflow and GitHub Actions bot' if valid else 'Unverified origin workflow or timestamp'}
 except Exception as error:return {'verified':False,'reason':'Recovery origin verification unavailable: '+type(error).__name__}
