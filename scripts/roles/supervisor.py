import json,sys
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
  if report.get('publicationBlocks') or report.get('status') in ['publication-failed','blocked-property-publication','all-property-sources-failed']:findings.append('publisher-publication-failed')
  d['sourceCount']=len(report.get('sources',[]));d['sourceFailures']=[s['id'] for s in report.get('sources',[]) if s['status']=='error']
  if d['sourceFailures']:findings.append('some-source-feeds-failed')
  visual=latest('visual');d['visualReceipt']={k:visual.get(k) for k in ['runUrl','checkedAt','status','artifactId']}
  if not fresh(visual) or not visual.get('verified'):findings.append('visual-check-failed-stale-or-missing')
  d['checksExecuted']=['actual publisher run and durable receipt pairing','heartbeat age','loaded approved SOT hash','unattended trigger origin','source and publication failures','independent visual role artifact']
 except Exception as e:findings.append('supervisor-check-error:'+type(e).__name__)
 d.update(status='passed' if not findings else 'failed',verified=not findings);save(d)
if __name__=='__main__':main()
