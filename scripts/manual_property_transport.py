"""Bounded HTTPS transport for this explicit recovery, using the workspace proxy.

Production publishers remain unchanged. Only known public source/media origins
admitted by the reviewed manifests are eligible; redirects cannot expand scope.
"""
import hashlib
import json
import urllib.request
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parents[1]
ALLOWED = {
    'www.sothebysrealty.com', 'robbreport.com', 'www.mansionglobal.com',
    'www.christiesrealestate.com', 'news.google.com', 'www.countrylife.co.uk',
    'cdn.mos.cms.futurecdn.net', 'www.bighorngolf.com',
    'www.coldwellbankerluxury.com', 'cbglimg.b-cdn.net',
    'nealwardproperties.com', 'piedmonttudor.com', 'websites.open.homes',
    'imgx.openhomes.photo', 'cdn.openhomesphotography.com',
}
CACHE = {}
OBSERVATIONS = {}

def check(url):
    p = urlsplit(url)
    if p.scheme != 'https' or p.username or p.password or p.port not in (None, 443) or p.hostname not in ALLOWED:
        raise ValueError('Recovery transport rejects unreviewed origin: ' + str(p.hostname))
    return url

class Redirect(urllib.request.HTTPRedirectHandler):
    count = 0
    def redirect_request(self, request, fp, code, message, headers, newurl):
        self.count += 1
        if self.count > 3:
            raise ValueError('Recovery transport exceeds three redirects')
        check(newurl)
        return super().redirect_request(request, fp, code, message, headers, newurl)

def fetch(url):
    check(url)
    if url in CACHE:
        return CACHE[url]
    opener = urllib.request.build_opener(Redirect())
    request = urllib.request.Request(url, headers={'User-Agent': 'LoveOurListings-SourceDesk/1.0 (+https://www.loveourlistings.com/journal/)', 'Accept-Encoding': 'identity'})
    with opener.open(request, timeout=30) as response:
        check(response.geturl())
        raw = response.read(16 * 1024 * 1024 + 1)
        if len(raw) > 16 * 1024 * 1024:
            raise ValueError('Recovery source exceeds 16 MiB')
        OBSERVATIONS[url] = {'url': url, 'finalUrl': response.geturl(), 'status': response.status,
                             'checkedAt': datetime.now(timezone.utc).isoformat(),
                             'bytes': len(raw), 'sha256': hashlib.sha256(raw).hexdigest()}
    CACHE[url] = raw
    return raw

def feed_fetch(url):
    import re
    raw = fetch(url)
    if len(raw) > 8 * 1024 * 1024:
        raise ValueError('Feed exceeds 8 MiB')
    if re.search(br'<!DOCTYPE|<!ENTITY', raw, re.I):
        raise ValueError('DTD/entity declarations rejected')
    final = OBSERVATIONS[url]['finalUrl']
    if urlsplit(final).hostname.removeprefix('www.') != urlsplit(url).hostname.removeprefix('www.'):
        raise ValueError('Redirect outside the configured source')
    return raw

def save_observations():
    (ROOT / 'work/manual-recovery').mkdir(parents=True, exist_ok=True)
    (ROOT / 'work/manual-recovery/fetch-evidence.json').write_text(json.dumps(list(OBSERVATIONS.values()), indent=2) + '\n')
