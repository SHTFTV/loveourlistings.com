from common import *
d=latest('visual');due=not fresh(d,900) or d.get('unattendedExecution') is not True
with open(os.environ['GITHUB_OUTPUT'],'a') as f:f.write('run='+str(due).lower()+'\n')
print(json.dumps({'runBrowser':due,'priorActualReceipt':d.get('runUrl'),'priorCheckedAt':d.get('checkedAt'),'reason':'Minimum15minute spacing; prior artifact never relabeled as a new check'}))
