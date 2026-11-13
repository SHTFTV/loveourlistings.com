"""Exact-source editorial amendments for unpublished illustration drafts."""
import hashlib,json
FIELDS=['title','deck','paragraphs','image','source']
def content_hash(draft):return hashlib.sha256(json.dumps({k:draft[k] for k in FIELDS},sort_keys=True).encode()).hexdigest()
def apply(draft,item,revision):
 revision_hash=hashlib.sha256(json.dumps(revision,sort_keys=True).encode()).hexdigest()
 if draft.get('writer',{}).get('editorialRevision')==revision_hash:return draft,revision_hash
 if content_hash(draft)!=revision['fromContentSha256'] or item['summaryHash']!=revision['sourceSummaryHash'] or draft['writer'].get('sourceTextSha256')!=revision['sourceTextSha256']:raise ValueError('Editorial revision source or frozen draft changed; fresh review required')
 revised=json.loads(json.dumps(draft));revised['paragraphs']=revision['paragraphs'];revised['writer']['editorialRevision']=revision_hash
 return revised,revision_hash
