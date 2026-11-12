import json
from common import *
from datetime import timedelta
def main():
 report=json.loads((ROOT/'operations/latest-run.json').read_text());p=receipt('publisher');p['runUrl']=report.get('runUrl');p['checkedAt']=report.get('finishedAt',report.get('startedAt'));p['sotLoad']=report.get('sotLoad');p['runtimeVerified']=report.get('runUrl')=='https://github.com/'+REPO+'/actions/runs/'+os.environ.get('GITHUB_RUN_ID','') and bool(report.get('sources'));p['unattendedExecution']=p['runtimeVerified'] and bool(report.get('automaticTriggerProof',{}).get('verified') or report.get('sotLoad',{}).get('trigger')=='schedule');p['outcome']=report.get('status');p['verified']=p['runtimeVerified'] and p['unattendedExecution'] and report.get('status') in ['nothing-new','published-and-verified'] and not report.get('publicationBlocks');p['status']='passed' if p['verified'] else 'failed';p['findings']=[b['reason'] for b in report.get('publicationBlocks',[])][:8]
 p['runtimeHealth']=('fault' if report.get('status') in ['publication-failed','all-property-sources-failed'] else 'running') if p['runtimeVerified'] else 'unknown';p['queueProgress']=report.get('queueProgress');p['operationalStatus']=report.get('status')
 roles={'publisher':p,**{r:latest(r) for r in ['visual','supervisor']}}
 try:
  import urllib.request
  with urllib.request.urlopen('https://www.loveourlistings.com/api/role-watchdog?observe=1',timeout=20) as response:external=json.load(response)
  cached=external.get('lastScheduledReceipt');cached=cached if isinstance(cached,dict) and cached.get('site')==SITE and cached.get('role')=='watchdog' and cached.get('executionProvider','').startswith('Vercel') and cached.get('unattendedExecution') is True else None
  roles['watchdog']=cached or {'role':'watchdog','status':'missing','verified':False,'cause':'No authenticated external Vercel Cron receipt yet'}
 except Exception as e:roles['watchdog']={'role':'watchdog','status':'unknown','verified':False,'cause':'External watchdog observation unavailable: '+type(e).__name__}

 for role,d in roles.items():d['fresh']=fresh(d);d['expiresAt']=(datetime.fromisoformat(d['checkedAt'])+timedelta(minutes=30)).isoformat() if d.get('checkedAt') else None;d['green']=d.get('unattendedExecution') is True and d['fresh'] and d.get('verified') is True and d.get('status')=='passed'
 result={'schemaVersion':1,'site':SITE,'checkedAt':now().isoformat(),'sotLoad':sot(),'roles':roles,'allFourFreshVerified':all(x['green'] for x in roles.values()),'status':'green' if all(x['green'] for x in roles.values()) else 'red','scope':'Actual site-specific runtime/artifact receipts; no config-only or manual-publication green','ownerAlerts':roles['watchdog'].get('alerts',[])}
 names={'publisher':'worker','visual':'visual-checker','supervisor':'supervisor','watchdog':'independent-watchdog'};receipts=[]
 for role,d in roles.items():
  load=d.get('sotLoad') or {};run=d.get('runUrl');artifact=d.get('artifactId');proof=(run+'/artifacts/'+str(artifact)) if run and artifact else d.get('proofRef',run)
  packet={'site':SITE,'repository':REPO,'sourceCommit':load.get('sourceCommit'),'check':'role:'+names[role],'status':'passed' if d.get('green') else 'failed','environment':'production','synthetic':False,'observedAt':d.get('checkedAt'),'actorId':d.get('actorId','loveourlistings-'+role+'-workflow'),'executionProvider':d.get('executionProvider','GitHub Actions'),'schedulerIdentity':d.get('schedulerIdentity',PATHS.get(role,'.github/workflows/property-publisher.yml')),'runRef':d.get('runRef',run),'proofRef':proof,'loadedRevision':load.get('version'),'loadedHash':load.get('sha256'),'rawTrigger':d.get('trigger'),'trigger':'managed-scheduler' if d.get('unattendedExecution') else d.get('trigger'),'runtimeVerified':d.get('runtimeVerified',False),'fresh':d.get('fresh',False),'findings':d.get('findings',[])}
  if role=='publisher':packet.update(pageQualityVersion=1,durableQueueRef='https://github.com/'+REPO+'/blob/main/operations/publisher-state.json',deduplicationRef='https://github.com/'+REPO+'/blob/main/operations/prior-posts.json',leaseRef='https://github.com/'+REPO+'/blob/main/.github/workflows/property-publisher.yml',boundedRetryRef='https://github.com/'+REPO+'/blob/main/operations/site-sop.json',isolationRef=run)
  elif role=='visual':packet.update(desktopRenderRef=d.get('renderArtifactRef'),phoneRenderRef=d.get('renderArtifactRef'),pageUrls=list({x['url'] for x in d.get('checks',[])}))
  elif role=='supervisor':packet.update(checkedWorkerRunRef=d.get('publisherRun'),actualSourceApiDeploymentPublicationChecks=d.get('actualSourceApiDeploymentPublicationChecks',False))
  else:packet.update(checkedSupervisorRunRef=d.get('checkedSupervisorRunRef'),failureInjectionRef=d.get('failureInjectionRef'),ownerDeliveryRef=d.get('ownerAlertDelivery',{}).get('receiptUrl') if d.get('ownerAlertDelivery',{}).get('verified') else None,recoveryRef=d.get('recoveryRef'),workerAndSupervisorSilentDetection=d.get('workerAndSupervisorSilentDetection',False))
  receipts.append(packet)
 result['receipts']=receipts;result['repository']=REPO;result['contractNote']='Each sourceCommit is the actual role-loaded checkout. Do not relabel mismatched commits to force contract green. Independent external watchdog receipt is collected separately from Vercel Cron; missing cache is unknown.'
 # Feed actual role incidents into the already connected public Command Center reader.
 logPath=ROOT/'public/publication-results.json';log=json.loads(logPath.read_text());events=[e for e in log.get('events',[]) if not str(e.get('id','')).startswith(('role-alert:','role-canary:'))]
 for name,d in roles.items():
  if d.get('status')!='passed' and d.get('checkedAt') and d.get('runUrl'):
   incidentId=(d.get('alerts') or [{}])[0].get('id') if name=='watchdog' else None
   events.append({'id':'role-alert:'+name+(':'+incidentId if incidentId else ''),'site':SITE,'status':'failed','checkedAt':d['checkedAt'],'title':(('Publisher running — no eligible content; '+str((d.get('queueProgress') or {}).get('attemptedThisRun',0))+' attempted, '+str((d.get('queueProgress') or {}).get('skippedThisRun',0))+' skipped') if name=='publisher' and d.get('operationalStatus')=='no-eligible-content' else (name.title()+': '+'; '.join(d.get('findings',[]) or ['Role evidence unresolved'])))[:180],'runUrl':d['runUrl'],'cause':'; '.join(d.get('findings',[]))[:400],'owner':'Love Our Listings existing worker owner','nextAction':'Resolve actual role findings; retain editorial approval holds','incidentId':incidentId})
 watchdog=roles.get('watchdog',{})
 if watchdog.get('workerAndSupervisorSilentDetection') and watchdog.get('recoveryRef') and watchdog.get('probeRunId'):
  events.append({'id':'role-canary:'+watchdog['probeRunId'],'site':SITE,'status':'failed','checkedAt':watchdog['checkedAt'],'title':'Monitoring canary: controlled heartbeat silence detected and restored; test only, publisher continues','runUrl':watchdog['runUrl'],'cause':'Private labeled controlled timestamp probe; no actual production outage or publication recovery asserted','probeRunId':watchdog['probeRunId']})
 log['events']=events;log['roleEventsCheckedAt']=now().isoformat();logPath.write_text(json.dumps(log,indent=2)+'\n')
 (ROOT/'public/four-roles.json').write_text(json.dumps(result,indent=2)+'\n');(ROOT/'operations/four-roles.json').write_text(json.dumps(result,indent=2)+'\n');print(json.dumps({k:result[k] for k in ['site','checkedAt','status','allFourFreshVerified']}))
if __name__=='__main__':main()
