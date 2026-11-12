"""Same-site role evidence from actual GitHub jobs; no credential output."""
import json,os,hashlib,subprocess,urllib.request,io,zipfile
from pathlib import Path
from datetime import datetime,timezone
ROOT=Path(__file__).resolve().parents[2];REPO='SHTFTV/loveourlistings.com';SITE='loveourlistings.com';BASE='https://api.github.com/repos/'+REPO
PATHS={r:'.github/workflows/role-'+r+'.yml' for r in ['visual','supervisor','watchdog']}
def now():return datetime.now(timezone.utc)
def age(at):
 try:return (now()-datetime.fromisoformat(at.replace('Z','+00:00'))).total_seconds()
 except:return float('inf')
def sot():
 b=(ROOT/'operations/site-sop.json').read_bytes();d=json.loads(b)
 return {'version':d['version'],'sha256':hashlib.sha256(b).hexdigest(),'sourceCommit':subprocess.check_output(['git','rev-parse','HEAD'],cwd=ROOT,text=True).strip(),'canonicalSource':'https://github.com/'+REPO+'/blob/main/operations/site-sop.json'}
class Redirect(urllib.request.HTTPRedirectHandler):
 def redirect_request(self,req,fp,code,msg,headers,newurl):
  from urllib.parse import urlsplit
  if urlsplit(newurl).scheme!='https':raise RuntimeError('Non-HTTPS role artifact redirect')
  result=super().redirect_request(req,fp,code,msg,headers,newurl)
  if urlsplit(newurl).hostname!='api.github.com':result.remove_header('Authorization')
  return result
def api(path,binary=False):
 if os.environ.get('GITHUB_REPOSITORY')!=REPO:raise RuntimeError('Role repository scope mismatch')
 req=urllib.request.Request(BASE+path,headers={'Authorization':'Bearer '+os.environ['GITHUB_TOKEN'],'Accept':'application/vnd.github+json','User-Agent':'LoveOurListings-FourRoles'})
 with urllib.request.build_opener(Redirect()).open(req,timeout=25) as r:b=r.read(2000001)
 if len(b)>2000000:raise RuntimeError('Role response bound exceeded')
 return b if binary else json.loads(b)
def latest(role):
 try:
  data=api('/actions/artifacts?name=role-'+role+'-receipt&per_page=8')
  for a in data.get('artifacts',[]):
   if a['expired']:continue
   run=api('/actions/runs/'+str(a['workflow_run']['id']))
   if run.get('path')!=PATHS[role] or run.get('head_branch')!='main' or run.get('repository',{}).get('full_name')!=REPO:continue
   with zipfile.ZipFile(io.BytesIO(api('/actions/artifacts/'+str(a['id'])+'/zip',True))) as z:
    if z.getinfo('receipt.json').file_size>200000:continue
    d=json.loads(z.read('receipt.json'))
   if d.get('role')==role and d.get('site')==SITE and d.get('runtimeVerified') is True:
    d['artifactId']=a['id']
    if role=='visual':
     render=next((x for x in api('/actions/runs/'+str(run['id'])+'/artifacts').get('artifacts',[]) if x['name']=='role-visual-screenshots-'+str(run['id']) and not x['expired']),None)
     d['renderArtifactRef']='https://github.com/'+REPO+'/actions/runs/'+str(run['id'])+'/artifacts/'+str(render['id']) if render else None
    return d
 except Exception as e:return {'role':role,'status':'unknown','verified':False,'cause':'Actual role artifact unavailable: '+type(e).__name__}
 return {'role':role,'status':'missing','verified':False,'cause':'No actual role receipt'}
def receipt(role):
 return {'schemaVersion':1,'site':SITE,'role':role,'checkedAt':now().isoformat(),'runUrl':'https://github.com/'+REPO+'/actions/runs/'+os.environ.get('GITHUB_RUN_ID','local'),'trigger':os.environ.get('GITHUB_EVENT_NAME'),'sotLoad':sot(),'runtimeVerified':os.environ.get('GITHUB_ACTIONS')=='true','unattendedExecution':os.environ.get('GITHUB_EVENT_NAME') in ['workflow_run','schedule'],'verified':False,'status':'unknown','findings':[]}
def save(d):
 p=ROOT/'work/roles'/d['role'];p.mkdir(parents=True,exist_ok=True);(p/'receipt.json').write_text(json.dumps(d,indent=2)+'\n')
 print(json.dumps(d,indent=2));return d

def fresh(d,seconds=None):
 if seconds is None:seconds=json.loads((ROOT/'operations/site-sop.json').read_text()).get('fourRoles',{}).get('freshnessSeconds',{}).get(d.get('role'),1800)
 return d.get('runtimeVerified') is True and 0<=age(d.get('checkedAt',''))<=seconds and (d.get('sotLoad') or {}).get('sha256')==sot()['sha256']
