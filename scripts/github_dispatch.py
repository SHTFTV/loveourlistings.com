"""Decode current GitHub dispatch receipts without calling acceptance execution proof."""
import json
def receipt(response,repository):
 if response.status==204:return {'accepted':True}
 if response.status!=200:raise RuntimeError('GitHub workflow dispatch rejected HTTP '+str(response.status))
 data=response.read(65537)
 if len(data)>65536:raise RuntimeError('Dispatch receipt too large')
 result=json.loads(data)
 if not isinstance(result.get('workflow_run_id'),int) or not result.get('html_url','').startswith('https://github.com/'+repository+'/actions/runs/'):raise RuntimeError('Dispatch receipt scope/identity invalid')
 return {'accepted':True,'workflow_run_id':result['workflow_run_id'],'html_url':result['html_url']}
