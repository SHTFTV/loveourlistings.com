"""Bounded repair of stale checkers through existing repo token; never publishes content."""
from common import *
def main():
 if os.environ.get('GITHUB_ACTIONS')!='true' or os.environ.get('GITHUB_REPOSITORY')!=REPO:raise RuntimeError('Actual same-repository runtime required')
 origin='https://github.com/'+REPO+'/actions/runs/'+os.environ['GITHUB_RUN_ID'];results=[]
 for role,ttl in [('visual',900),('supervisor',600)]:
  prior=latest(role)
  if fresh(prior,ttl) and prior.get('unattendedExecution') is True:results.append({'role':role,'status':'fresh-existing-receipt'});continue
  active=api('/actions/workflows/role-'+role+'.yml/runs?branch=main&per_page=10')['workflow_runs']
  if any(x.get('status') in ['queued','in_progress','waiting','pending'] for x in active):results.append({'role':role,'status':'existing-active-run'});continue
  request=urllib.request.Request(BASE+'/actions/workflows/role-'+role+'.yml/dispatches',data=json.dumps({'ref':'main','inputs':{'publisher_origin_run':origin}}).encode(),headers={'Authorization':'Bearer '+os.environ['GITHUB_TOKEN'],'Accept':'application/vnd.github+json','Content-Type':'application/json'},method='POST')
  with urllib.request.urlopen(request,timeout=25) as response:accepted=response.status in [200,204]
  results.append({'role':role,'accepted':accepted,'executed':False,'originRun':origin})
 p=ROOT/'operations/role-refresh.json';p.write_text(json.dumps({'checkedAt':now().isoformat(),'results':results},indent=2)+'\n');print(json.dumps(results))
if __name__=='__main__':main()
