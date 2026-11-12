import json
from common import *
from datetime import timedelta
def main():
 report=json.loads((ROOT/'operations/latest-run.json').read_text());p=receipt('publisher');p['runUrl']=report.get('runUrl');p['checkedAt']=report.get('finishedAt',report.get('startedAt'));p['sotLoad']=report.get('sotLoad');p['runtimeVerified']=report.get('runUrl')=='https://github.com/'+REPO+'/actions/runs/'+os.environ.get('GITHUB_RUN_ID','') and bool(report.get('automaticTriggerProof',{}).get('verified') or report.get('sotLoad',{}).get('trigger')=='schedule');p['unattendedExecution']=p['runtimeVerified'];p['outcome']=report.get('status');p['verified']=p['runtimeVerified'] and report.get('status') in ['nothing-new','published-and-verified'] and not report.get('publicationBlocks');p['status']='passed' if p['verified'] else 'failed';p['findings']=[b['reason'] for b in report.get('publicationBlocks',[])][:8]
 roles={'publisher':p,**{r:latest(r) for r in ['visual','supervisor','watchdog']}}
 for role,d in roles.items():d['fresh']=fresh(d);d['expiresAt']=(datetime.fromisoformat(d['checkedAt'])+timedelta(minutes=30)).isoformat() if d.get('checkedAt') else None;d['green']=d.get('unattendedExecution') is True and d['fresh'] and d.get('verified') is True and d.get('status')=='passed'
 result={'schemaVersion':1,'site':SITE,'checkedAt':now().isoformat(),'sotLoad':sot(),'roles':roles,'allFourFreshVerified':all(x['green'] for x in roles.values()),'status':'green' if all(x['green'] for x in roles.values()) else 'red','scope':'Actual site-specific runtime/artifact receipts; no config-only or manual-publication green','ownerAlerts':roles['watchdog'].get('alerts',[])}
 (ROOT/'public/four-roles.json').write_text(json.dumps(result,indent=2)+'\n');(ROOT/'operations/four-roles.json').write_text(json.dumps(result,indent=2)+'\n');print(json.dumps({k:result[k] for k in ['site','checkedAt','status','allFourFreshVerified']}))
if __name__=='__main__':main()
