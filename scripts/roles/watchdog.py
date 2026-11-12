import json,urllib.request,hashlib
from common import *
def main():
 d=receipt('watchdog');s=latest('supervisor');d['supervisorReceipt']={k:s.get(k) for k in ['runUrl','checkedAt','status','artifactId','findings']};issues=d['findings']
 if not fresh(s,900):issues.append('supervisor-stale-or-missing')
 if s.get('status')!='passed':issues.append('supervisor-reports-unresolved-failures')
 cfg=json.loads((ROOT/'operations/site-sop.json').read_text());url=cfg.get('fourRoles',{}).get('ownerDeliveryReceiptUrl');delivery=None
 if url:
  from urllib.parse import urlsplit
  if urlsplit(url).hostname!='markett-ca.vercel.app' or urlsplit(url).scheme!='https':issues.append('delivery-receipt-outside-approved-command-center')
  else:
   try:
    with urllib.request.urlopen(url,timeout=20) as r:delivery=json.load(r)
   except Exception:issues.append('owner-delivery-receipt-unavailable')
 if not delivery or delivery.get('site')!=SITE or delivery.get('delivered') is not True or age(delivery.get('deliveredAt',''))>1800:issues.append('actual-owner-alert-delivery-unverified')
 d['ownerAlertDelivery']={'verified':not any('delivery' in x for x in issues),'receiptUrl':url,'deliveredAt':delivery.get('deliveredAt') if delivery else None,'route':'existing authorized Command Center / owner chat; no new channel or credential created'}
 fingerprint=hashlib.sha256(json.dumps({'site':SITE,'issues':sorted(issues),'supervisorFindings':s.get('findings',[])},sort_keys=True).encode()).hexdigest()[:24]
 d['alerts']=[{'id':SITE+':four-roles:'+fingerprint,'site':SITE,'type':'task_blocked','cause':issues,'impact':'Four Roles incomplete; no green readiness','owner':'LoveOurListings site owner / existing Command Center alert owner','nextAction':'Resolve actual failed roles and verify delivered owner alert through existing authorized receiver','checkedAt':d['checkedAt'],'deliveryStatus':'pending-unverified'}] if issues else []
 d.update(status='passed' if not issues else 'failed',verified=not issues);save(d)
if __name__=='__main__':main()
