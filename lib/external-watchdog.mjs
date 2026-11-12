import crypto from 'node:crypto';
export function observeRoles(packet,{now=Date.now(),sotHash}={}){
 const issues=[];for(const [key,ttl]of [['publisher',900],['supervisor',900]]){const r=packet?.roles?.[key],age=now-Date.parse(r?.checkedAt);if(!r||!Number.isFinite(age)||age<0||age>ttl*1000)issues.push(key+'-silent-stale-or-missing');if(r?.sotLoad?.sha256!==sotHash)issues.push(key+'-SOT-mismatch');}
 const sup=packet?.roles?.supervisor;if(sup?.status!=='passed')issues.push('supervisor-reports-unresolved-failures');return {issues,workerAndSupervisorSilentDetection:issues.includes('publisher-silent-stale-or-missing')&&issues.includes('supervisor-silent-stale-or-missing'),checkedWorkerRunRef:packet?.roles?.publisher?.runUrl??null,checkedSupervisorRunRef:sup?.runUrl??null};
}
export function incident(observation,prior,at){const fingerprint=crypto.createHash('sha256').update(JSON.stringify({issues:[...observation.issues].sort()})).digest('hex').slice(0,24),old=prior?.alerts?.find(x=>x.fingerprint===fingerprint);const blockedSince=old?.blockedSince??at,id=old?.id??'loveourlistings.com:four-roles:'+crypto.createHash('sha256').update(fingerprint+blockedSince).digest('hex').slice(0,24);return {id,fingerprint,blockedSince};}
export function validOwnerDelivery(d,eventId){return d?.site==='loveourlistings.com'&&d?.eventId===eventId&&d?.delivered===true&&Number.isFinite(Date.parse(d.deliveredAt));}

// Verify actual normalized events in the existing intended Command Center pull reader.
// This is delivery to that reader, never owner read or push-channel delivery.
export function matchPullDelivery(source,reader,eventId,{now=Date.now()}={}){
 const clean=v=>String(v??'').replace(/<[^>]*>/g,'').replace(/[\u0000-\u001f]/g,' ').trim().slice(0,180);
 const expected=(source?.events??[]).filter(e=>e.site==='loveourlistings.com'&&e.status==='failed'&&/^(role-alert:|role-canary:)/.test(e.id??''));
 const matched=expected.filter(e=>(reader?.events??[]).some(r=>r.id==='loveourlistings.com:'+e.id&&r.status===e.status&&r.runUrl===e.runUrl&&r.title===clean(e.title)));
 const fresh=e=>{const age=now-Date.parse(e.checkedAt);return age>=0&&age<=1200000;};
 const incident=matched.find(e=>e.incidentId===eventId),canary=matched.find(e=>e.id.startsWith('role-canary:'));
 const verified=!!incident&&!!canary&&fresh(incident)&&fresh(canary);
 return {verified,route:'authorized-command-center-pull-reader',receiptUrl:'https://markett-ca.vercel.app/api/publication-activity',observedAt:new Date(now).toISOString(),deliveredAt:verified?new Date(now).toISOString():null,eventId,matchedIds:matched.map(e=>'loveourlistings.com:'+e.id),canaryEventId:canary?.id??null,canaryRunId:canary?.probeRunId??null,ownerReadVerified:false,scope:'Exact normalized incident and labeled canary matched in live intended reader; no owner-read assertion'};
}
