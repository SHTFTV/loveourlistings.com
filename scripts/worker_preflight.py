"""Pre-build checks for the existing publisher. Never prints credentials."""
import hashlib,json,os,subprocess,sys
from datetime import datetime,timezone
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
def sot(root=ROOT):
 raw=(root/'operations/site-sop.json').read_bytes()
 return {'version':json.loads(raw)['version'],'sha256':hashlib.sha256(raw).hexdigest(),'sourceCommit':subprocess.check_output(['git','rev-parse','HEAD'],cwd=root,text=True).strip(),'canonicalSource':'https://github.com/SHTFTV/loveourlistings.com/blob/main/operations/site-sop.json'}
def check(root=ROOT,extension=False):
 loaded=sot(root);receipt={'checkedAt':datetime.now(timezone.utc).isoformat(),'runId':os.environ.get('GITHUB_RUN_ID'),'trigger':os.environ.get('GITHUB_EVENT_NAME'),'sotLoad':loaded,'status':'blocked'}
 try:
  if subprocess.check_output(['git','remote','get-url','origin'],cwd=root,text=True).strip().removesuffix('.git')!='https://github.com/SHTFTV/loveourlistings.com':raise RuntimeError('Canonical repository mismatch')
  if not os.environ.get('GITHUB_ACTIONS'):raise RuntimeError('Actual cloud runtime required for access proof')
  from property_writer import response
  result=response('Return ready true. This is a scoped API access check for the existing LoveOurListings publisher.',{'purpose':'Verify configured existing writer access'}, {'type':'object','properties':{'ready':{'type':'boolean'}},'required':['ready'],'additionalProperties':False})
  if result.get('ready') is not True:raise RuntimeError('Writer API did not complete access test')
  receipt.update(status='passed',writerAccess='actual Responses request completed',model=os.environ.get('OPENAI_MODEL'))
  if extension:
   proof=json.loads((root/'operations/build-contract.json').read_text())
   if not all(proof['gates'].get(x,{}).get('verified') is True for x in ['canonicalSourceProduction','secureRuntimeAccess','minimalProductionWorkflow']):raise RuntimeError('Dependent extension held: required pre-build gate unverified')
 except Exception as e:
  receipt.update(status='blocked',cause=str(e),impact='Required writer access or pre-build proof unavailable',owner='LoveOurListings site worker owner',nextAction='Repair the existing scoped access or attach actual production proof; preserve healthy published content')
  report={'startedAt':receipt['checkedAt'],'sopVersion':loaded['version'],'sotLoad':loaded,'runUrl':'https://github.com/SHTFTV/loveourlistings.com/actions/runs/'+os.environ.get('GITHUB_RUN_ID','unknown'),'status':'required-access-blocked','articles':[],'sources':[],'collections':[],'discovered':0,'duplicates':0,'quarantined':0,'productionVerified':False,'publicationBlocks':[{'title':'Required runtime access','reason':str(e)}]}
  path=root/'operations/publisher-state.json';state=json.loads(path.read_text());state['runs'].append(report);path.write_text(json.dumps(state,indent=2)+'\n');(root/'operations/latest-run.json').write_text(json.dumps(report,indent=2)+'\n')
  raise
 finally:(root/'operations/runtime-access.json').write_text(json.dumps(receipt,indent=2)+'\n')
 return receipt
def fence(root=ROOT):
 receipt=json.loads((root/'operations/runtime-access.json').read_text());current=sot(root)
 if receipt['status']!='passed' or any(receipt['sotLoad'][k]!=current[k] for k in ['version','sha256','sourceCommit']):raise RuntimeError('Loaded approved SOP/source changed during job')
 remote=subprocess.check_output(['git','rev-parse','origin/main'],cwd=root,text=True).strip()
 if remote!=current['sourceCommit']:raise RuntimeError('Canonical main advanced; next sole-writer run must load latest approved source')
 report=json.loads((root/'operations/latest-run.json').read_text())
 if report.get('sotLoad',{}).get('sha256')!=current['sha256']:raise RuntimeError('Publisher did not load the approved SOP hash')
if __name__=='__main__':fence() if '--fence' in sys.argv else check(extension='--extension' in sys.argv)
