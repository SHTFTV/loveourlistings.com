"""Actual check-valve dispositions and durable cross-collection fairness."""
from collections import Counter
from datetime import datetime,timedelta

def decision(report,item,row,outcome,reason=None,next_at=None):
 row['lastDisposition']=outcome;row['lastCheckedAt']=report['startedAt'];row['nextAttemptAt']=next_at
 report.setdefault('candidateChecks',[]).append({'sourceUrl':item['url'],'sourceId':item.get('sourceId'),'title':item['title'],'collection':item['collection'],'outcome':outcome,'failedAttempts':row.get('attempts',0),'checks':row.get('checks',0),'nextAttemptAt':next_at,'reason':reason,'duplicateOfArticleSlug':row.get('duplicateOfArticleSlug')})

def fair_candidates(candidates,queue,state,priority,key):
 last=state.get('collectionLastAttemptAt',{});published={a['collection']:a['publishedAt'] for a in sorted(state['articles'],key=lambda a:a['publishedAt'])}
 order=sorted(priority,key=lambda c:(last.get(c,''),published.get(c,'')))
 groups={c:sorted([i for i in candidates if i['collection']==c],key=lambda i:(queue[key(i)].get('lastAttemptAt',''),i['priority'],-datetime.fromisoformat(i['feedPublishedAt']).timestamp())) for c in order}
 while any(groups.values()):
  for c in order:
   if groups[c]:yield c,groups[c].pop(0)

def progress(report,candidates):
 counts=Counter(x['outcome'] for x in report.get('candidateChecks',[]));attempted=sum(counts[x] for x in ['stored-awaiting-verification','attempt-failed'])
 return {'checkedAt':report['finishedAt'],'runtimeState':'intake-unavailable' if report['status']=='all-property-sources-failed' else 'running','publicationOutcome':report['status'],'feedsChecked':len(report['sources']),'feedsHealthy':sum(s['status']=='ok' for s in report['sources']),'feedItemsParsed':sum(s.get('items',0) for s in report['sources']),'feedErrors':[{'sourceId':s['id'],'reason':s.get('error')} for s in report['sources'] if s['status']=='error'],'sourceDispositions':[{'sourceId':s['id'],'itemsParsed':s.get('items',0),'parseRejected':s.get('parseRejected',0),'dispositions':s.get('dispositions',{})} for s in report['sources']],'newCandidatesDiscovered':report.get('newCandidatesDiscovered',0),'candidatesConsidered':len(candidates),'attemptedThisRun':attempted,'skippedThisRun':len(report.get('candidateChecks',[]))-attempted,'outcomes':dict(counts),'newFeaturesStored':len(report['articles']),'verifiedPublicationsThisRun':0,'checkValveScope':'Held individual items do not stop intake or other collections; nextAttemptAt is earliest retry eligibility, not a promise of execution','candidateChecks':report.get('candidateChecks',[])}
