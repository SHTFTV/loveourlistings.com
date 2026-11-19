"""Project actual independently verified publications into fresh public counters."""
import json
from datetime import datetime
from pathlib import Path
from zoneinfo import ZoneInfo

ROOT = Path(__file__).resolve().parents[1]
zone = ZoneInfo('America/Dawson_Creek')
day = datetime.now(zone).date().isoformat()
state = json.loads((ROOT / 'operations/publisher-state.json').read_text())
sop = json.loads((ROOT / 'operations/site-sop.json').read_text())
verified = {}
for run in state['runs']:
    if run.get('productionVerified') and run.get('verifiedAt'):
        for article in run.get('articles', []):
            verified[article['slug']] = {**article, 'verifiedAt': run['verifiedAt'], 'executionMode': run.get('executionMode', 'recorded-existing-publisher')}
today = sorted((a for a in verified.values() if datetime.fromisoformat(a['publishedAt']).astimezone(zone).date().isoformat() == day), key=lambda a: a['publishedAt'], reverse=True)
target = sop['publicationCadence']['dailyTargetMinimum']
latest = max(verified.values(), key=lambda a: a['publishedAt']) if verified else None
proof = {'schemaVersion': 1, 'site': 'loveourlistings.com', 'date': day, 'timezone': zone.key,
         'dailyTargetMinimum': target, 'distinctNewLiveVerifiedPosts': len(today),
         'shortfall': max(0, target - len(today)), 'targetMet': len(today) >= target,
         'latestVerifiedAt': max((a['verifiedAt'] for a in verified.values()), default=None),
         'latestPublishedAt': latest['publishedAt'] if latest else None,
         'articles': today, 'verificationScope': 'Actual public article text/date/source plus journal manifest, index, feed and sitemap; source dates remain separate from new publication dates.',
         'executionMode': 'operator-assisted-recovery',
         'unattendedExecutionVerifiedByThisRecovery': False}
(ROOT / 'public/daily-publication-proof.json').write_text(json.dumps(proof, indent=2) + '\n')
path = ROOT / 'public/publishing-status.json'
status = json.loads(path.read_text())
status['runtime'] = 'Operator-assisted recovery; unattended execution status is separate'
status['verifiedAt'] = proof['latestVerifiedAt']
status['lastVerifiedFeatures'] = today or ([latest] if latest else [])
status['dailyPublicationProgress'] = {k: proof[k] for k in ['date', 'timezone', 'dailyTargetMinimum', 'distinctNewLiveVerifiedPosts', 'shortfall', 'targetMet', 'latestVerifiedAt', 'latestPublishedAt']}
path.write_text(json.dumps(status, indent=2) + '\n')
events_path = ROOT / 'public/publication-results.json'
events = json.loads(events_path.read_text())
for event in events.get('events', []):
    if event.get('status') != 'failed':
        continue
    match = next((a for a in today if event.get('id', '').endswith(':' + a['slug'])), None)
    if match:
        event.update(resolvedAt=match['verifiedAt'], resolution='Subsequently published and independently verified', resolvedArticleUrl=match['url'])
events_path.write_text(json.dumps(events, indent=2) + '\n')
print(json.dumps({k: proof[k] for k in ['date', 'distinctNewLiveVerifiedPosts', 'dailyTargetMinimum', 'shortfall', 'latestVerifiedAt', 'latestPublishedAt']}))
