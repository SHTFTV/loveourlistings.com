"""Add the source's own extra property photographs to published features.

The lead image stays the verified featured photo. Extra frames come from the
same source page, kept at their own proportions, and only when they belong to
that property. Roundups are split on their section headings so one home does
not inherit the next home's pictures.
"""
import hashlib, io, json, re, urllib.request
from html import unescape
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
UA = 'LoveOurListings-SourceMedia/1.0'
MIN_EDGE = 1200
MAX_WIDTH = 2000
MAX_FRAMES = 16
GENERIC = re.compile(r'logo|favicon|sprite|pixel|avatar|icon|shutterstock|istock|getty|adobestock', re.I)

def fetch(url):
    req = urllib.request.Request(url, headers={'User-Agent': UA, 'Accept': '*/*'})
    with urllib.request.urlopen(req, timeout=40) as response:
        return response.read()

def words(text):
    return {w for w in re.findall(r'[a-z0-9]{5,}', text.lower()) if w not in {'house', 'home', 'listing', 'property', 'love', 'this', 'there', 'their', 'about', 'which', 'where', 'feature'}}

def save_jpeg(data):
    image = ImageOps.exif_transpose(Image.open(io.BytesIO(data)))
    image = image.convert('RGB')
    width, height = image.size
    if max(width, height) < MIN_EDGE:
        return None
    if width > MAX_WIDTH:
        height = round(height * MAX_WIDTH / width)
        width = MAX_WIDTH
        image = image.resize((width, height), Image.Resampling.LANCZOS)
    output = io.BytesIO()
    image.save(output, format='JPEG', quality=88, optimize=True, progressive=True)
    body = output.getvalue()
    digest = hashlib.sha256(body).hexdigest()
    local = '/images/source-properties/gallery-' + digest[:20] + '.jpg'
    dest = ROOT / 'public' / local.lstrip('/')
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_bytes(body)
    return {'imageUrl': local, 'width': width, 'height': height, 'sha256': digest}

def country_life_urls(html, article):
    headings = list(re.finditer(r'<h[23][^>]*>([\s\S]*?)</h[23]>', html))
    if not headings:
        return []
    needles = words(article['title'] + ' ' + article['deck'] + ' ' + (article['source'].get('propertyId') or '').replace('-', ' '))
    best = None
    for index, heading in enumerate(headings):
        end = headings[index + 1].start() if index + 1 < len(headings) else heading.end() + 30000
        chunk = html[heading.start():end]
        text = re.sub(r'\s+', ' ', re.sub('<[^>]+>', ' ', unescape(chunk)))
        score = len(needles & words(text))
        found = []
        for src in re.findall(r'https://cdn\.mos\.cms\.futurecdn\.net/[A-Za-z0-9]+\.jpg', chunk):
            if src not in found:
                found.append(src)
        if found and (best is None or score > best[0]):
            best = (score, found)
    if not best or best[0] < 2:
        return []
    return best[1]

def spaces_urls(html):
    cut = html.find('TBXJga_related')
    if cut < 0:
        cut = html.lower().find('related stories')
    chunk = html[:cut] if cut > 0 else html
    found = []
    for src in re.findall(r'src="(https://system\.tiquo\.app/api/storage/[A-Za-z0-9-]+)"', chunk):
        if src not in found:
            found.append(src)
    return found

def urls_for(article, html):
    host = article['source']['url'].split('/')[2]
    if host == 'www.countrylife.co.uk':
        return country_life_urls(html, article)
    if host == 'thespaces.com':
        return spaces_urls(html)
    return []

def main():
    state_path = ROOT / 'operations/publisher-state.json'
    state = json.loads(state_path.read_text())
    import publish_properties
    updated = []
    for article in state['articles']:
        if article.get('gallery'):
            continue
        host = article['source']['url'].split('/')[2]
        if host not in ('www.countrylife.co.uk', 'thespaces.com'):
            continue
        try:
            html = fetch(article['source']['url']).decode('utf-8', 'replace')
        except Exception as error:
            print('fetch-failed', article['slug'], error)
            continue
        hero = (article.get('sourceImage') or {}).get('originalImageUrl')
        frames = []
        seen = set()
        for src in urls_for(article, html):
            if src == hero or GENERIC.search(src):
                continue
            try:
                data = fetch(src)
            except Exception as error:
                print('image-failed', article['slug'], error)
                continue
            original = hashlib.sha256(data).hexdigest()
            if original in seen:
                continue
            saved = save_jpeg(data)
            if not saved:
                continue
            seen.add(original)
            saved.update(originalImageUrl=src, alt=article['imageAlt'], credit=article['imageCredit'])
            frames.append(saved)
            if len(frames) >= MAX_FRAMES:
                break
        if not frames:
            print('none', article['slug'])
            continue
        article['gallery'] = frames
        page = ROOT / 'public/journal' / article['slug'] / 'index.html'
        page.parent.mkdir(parents=True, exist_ok=True)
        page.write_text(publish_properties.render(article, 'https://www.loveourlistings.com'))
        updated.append((article['slug'], len(frames)))
        print('gallery', len(frames), article['slug'])
    state_path.write_text(json.dumps(state, indent=2) + '\n')
    print('updated', len(updated))

if __name__ == '__main__':
    main()
