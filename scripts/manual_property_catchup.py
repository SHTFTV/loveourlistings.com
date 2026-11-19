import contextlib
import functools
import json
import os
import subprocess
import sys
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'work/manual-recovery'
OUT.mkdir(parents=True, exist_ok=True)
sys.path.insert(0, str(ROOT / 'scripts'))
from manual_property_transport import fetch, feed_fetch, save_observations, ALLOWED, CACHE
import publish_properties as publisher
import reviewed_properties
import property_media
import property_evidence

sha = subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=ROOT, text=True).strip()
os.environ['LOADED_SOURCE_COMMIT'] = sha
os.environ['GITHUB_EVENT_NAME'] = 'operator-assisted-recovery'
publisher.manual_candidates = functools.partial(reviewed_properties.manual_candidates, fetch=fetch)
publisher.reviewed_media = functools.partial(reviewed_properties.reviewed_media, fetch=fetch)
publisher.resolve_media = functools.partial(property_media.resolve, fetch=fetch)
publisher.recover_evidence = functools.partial(property_evidence.recover, fetch=fetch)
config = json.loads((ROOT / 'operations/site-sop.json').read_text())
records = reviewed_properties.load(ROOT)
urls = [s['url'] for s in config['sources']]
for record in records.values():
    if record.get('item'):
        urls.append(record['item']['url'])
    if record.get('media'):
        urls.extend([record['media']['sourceUrl'], record['media']['originalImageUrl']])
def prefetch(url):
    try: fetch(url)
    except Exception: pass
with ThreadPoolExecutor(max_workers=10) as pool:
    list(pool.map(prefetch, dict.fromkeys(urls)))
before = json.loads((ROOT / 'operations/publisher-state.json').read_text())
before_slugs = {a['slug'] for a in before['articles']}
with (OUT / 'latest-intake-output.log').open('w') as log, contextlib.redirect_stdout(log):
    publisher.main(ROOT, fetch=feed_fetch)
state_path = ROOT / 'operations/publisher-state.json'
state = json.loads(state_path.read_text())
report = state['runs'][-1]
report.update(executionMode='operator-assisted-recovery',
              runUrl='https://github.com/SHTFTV/loveourlistings.com/blob/main/operations/latest-run.json',
              automaticTriggerProof={'verified': False, 'reason': 'Explicit owner-requested manual recovery; this run does not verify unattended GitHub Actions execution.'})
report['queueProgress']['runtimeState'] = 'operator-assisted-recovery-finished'
report['newlyStoredThisRecovery'] = [a['slug'] for a in state['articles'] if a['slug'] not in before_slugs]
state_path.write_text(json.dumps(state, indent=2) + '\n')
(ROOT / 'operations/latest-run.json').write_text(json.dumps(report, indent=2) + '\n')
publisher.write_status(ROOT, state, report)
status_path = ROOT / 'public/publishing-status.json'
status = json.loads(status_path.read_text())
status['runtime'] = 'Operator-assisted recovery; unattended execution status is separate'
status_path.write_text(json.dumps(status, indent=2) + '\n')
save_observations()
print(json.dumps({'status': report['status'], 'new': report['newlyStoredThisRecovery'], 'articles': report['articles'], 'sourceErrors': [s for s in report['sources'] if s['status'] == 'error'], 'candidateChecks': report.get('candidateChecks', [])}, indent=2))
