import json,sys,urllib.request
from common import *
def main():
 d=receipt('supervisor');findings=d['findings']
 try:
  runs=api('/actions/workflows/property-publisher.yml/runs?branch=main&per_page=8')['workflow_runs'];run=next((r for r in runs if r['status']=='completed'),None)
  report=json.loads((ROOT/'operations/latest-run.json').read_text());d['publisherRun']=run['html_url'] if run else None;d['publisherReceiptRun']=report.get('runUrl');d['publisherOutcome']=report.get('status');d['publisherReceiptAgeSeconds']=age(report.get('finishedAt',report.get('startedAt','')))
  if not run or report.get('runUrl')!=run['html_url']:findings.append('publisher-run-receipt-mismatch')
  if d['publisherReceiptAgeSeconds']>900:findings.append('publisher-heartbeat-stale-or-missing')
  if report.get('sotLoad',{}).get('sha256')!=d['sotLoad']['sha256']:findings.append('publisher-loaded-SOT-mismatch')
  if not report.get('automaticTriggerProof',{}).get('verified') and report.get('sotLoad',{}).get('trigger')!='schedule':findings.append('publisher-unattended-proof-missing')
  d['publisherOperationalStatus']=report.get('status');d['queueProgress']=report.get('queueProgress')
  if report.get('status') in ['publication-failed','all-property-sources-failed']:findings.append('publisher-runtime-or-publication-fault')
  elif report.get('publicationBlocks'):findings.append('publisher-item-check-valves-held; intake-continues')
  access=json.loads((ROOT/'operations/runtime-access.json').read_text());d['apiAccessReceipt']={'runId':access.get('runId'),'status':access.get('status'),'checkedAt':access.get('checkedAt')}
  if access.get('status')!='passed' or str(access.get('runId'))!=report.get('runUrl','').rsplit('/',1)[-1]:findings.append('required-API-access-failed-or-unmatched')
  def public(path):
   with urllib.request.urlopen('https://www.loveourlistings.com'+path,timeout=20) as response:return response.read().decode()
  deployed=json.loads(public('/publishing-status.json'));d['deployedSotLoad']=deployed.get('sotLoad')
  if deployed.get('sotLoad',{}).get('sha256')!=d['sotLoad']['sha256']:findings.append('production-deployment-SOT-mismatch')
  manifest=json.loads(public('/journal/published.json'));article=manifest[0];slug=article['slug']
  import re
  if not re.fullmatch(r'[a-z0-9-]+',slug):raise ValueError('Invalid published slug')
  page=public('/journal/'+slug+'/');d['checkedPublishedPage']='https://www.loveourlistings.com/journal/'+slug+'/';d['matchedPublishedPage']=article['publishedAt'] in page and article['image'] in page
  if not d['matchedPublishedPage']:findings.append('actual-published-page-mismatch')
  jobs=api('/actions/runs/'+str(run['id'])+'/jobs');executed=any(s.get('name','').startswith('Load current SOP, collect property') and s.get('conclusion') in ['success','failure'] for j in jobs.get('jobs',[]) for s in j.get('steps',[]));d['actualSourceApiDeploymentPublicationChecks']=executed
  if not executed:findings.append('publisher-source-collection-never-executed')
  d['sourceCount']=len(report.get('sources',[]));d['sourceFailures']=[s['id'] for s in report.get('sources',[]) if s['status']=='error']
  if d['sourceFailures']:findings.append('some-source-feeds-failed')
  visual=latest('visual');d['visualReceipt']={k:visual.get(k) for k in ['runUrl','checkedAt','status','artifactId']}
  if not fresh(visual) or not visual.get('verified'):findings.append('visual-check-failed-stale-or-missing')
  d['checksExecuted']=['actual publisher run and durable receipt pairing','heartbeat age','loaded approved SOT hash','unattended trigger origin','source and publication failures','independent visual role artifact']
 except Exception as e:findings.append('supervisor-check-error:'+type(e).__name__)
 d.update(status='passed' if not findings else 'failed',verified=not findings);save(d)
if __name__=='__main__':main()
