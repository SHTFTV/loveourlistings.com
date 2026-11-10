import json,re,xml.etree.ElementTree as ET
from pathlib import Path
from html.parser import HTMLParser
ROOT=Path(__file__).resolve().parents[1];OUT=ROOT/'dist'
class Page(HTMLParser):
 def __init__(self):super().__init__();self.h1=[];self.title=[];self.active=None;self.links=[];self.canonical=None;self.meta={}
 def handle_starttag(self,t,a):
  d=dict(a)
  if t in ['h1','title']:self.active=t
  if t=='a':self.links.append(d.get('href',''))
  if t=='link' and d.get('rel')=='canonical':self.canonical=d.get('href')
  if t=='meta':self.meta[d.get('name',d.get('property',''))]=d.get('content','')
 def handle_endtag(self,t):
  if self.active==t:self.active=None
 def handle_data(self,s):
  if self.active=='h1':self.h1.append(s)
  if self.active=='title':self.title.append(s)
def parse(file):
 p=Page();h=file.read_text();p.feed(h);return p,h
data=json.loads((ROOT/'src/data/articleIndex.json').read_text());coverage=json.loads((ROOT/'operations/seo-category-coverage.json').read_text());assert len(data)>=23
home,html=parse(OUT/'index.html');assert len(home.h1)>=1 and len(home.links)>25,'Homepage remains an empty app shell';assert home.canonical=='https://www.loveourlistings.com/';assert '"@type":"WebSite"' in html and '"@type":"Organization"' in html
latest=html.split('Fresh from the magazine.',1)[1].split('</section>',1)[0];assert '<iframe' not in latest,'Article cards still default to video players';assert 'Featured image under review' not in html,'Reader-facing operational placeholder leaked'
titles=[home.title];descs=[home.meta['description']]
for c in coverage['collections']:
 slug=c['collection'];p,h=parse(OUT/'collections'/slug/'index.html');assert p.h1 and p.canonical=='https://www.loveourlistings.com/collections/'+slug;assert c['articleSlug'] in h,'Category has no genuine feature';assert c['publishedAt'] in h,'Category feature date is not the original date';assert 'data-collection-feature="'+slug+'"' in html and 'data-article-slug="'+c['articleSlug']+'"' in html,'Homepage category section lacks a real article';assert 'CollectionPage' in h and 'BreadcrumbList' in h;titles.append(p.title);descs.append(p.meta['description'])
assert len({tuple(t) for t in titles})==7,'Duplicate homepage/category titles';assert len(set(descs))==7,'Duplicate homepage/category descriptions'
for a in data:
 p,h=parse(OUT/'journal'/a['slug']/'index.html');assert a['publishedAt'] in h,'Original publication date lost';assert p.h1 and p.canonical.startswith('https://www.loveourlistings.com/journal/');assert '"@type":"WebSite"' in h and 'BreadcrumbList' in h
urls=[x.text for x in ET.parse(OUT/'sitemap.xml').findall('.//{*}loc')];assert len(urls)==len(set(urls)) and all(x.startswith('https://www.loveourlistings.com/') for x in urls),'Sitemap canonical host conflict';assert all('https://www.loveourlistings.com/collections/'+c['collection'] in urls for c in coverage['collections'])
config=json.loads((ROOT/'vercel.json').read_text());rewrites={x['source'] for x in config['rewrites']};app=(ROOT/'src/App.tsx').read_text();declared=set(re.findall(r'path:\s*["\x27]([^"\x27]+)',app)+re.findall(r'<Route\s+path="([^"]+)"',app));assert all(p in rewrites for p in declared if p.startswith('/') and ':' not in p and p!='/'),'An existing city/country/listing route was removed';assert all(x['destination']=='/spa' for x in config['rewrites']),'cleanUrls rewrite destination must be extensionless';assert not any(x['source'] in ['/(.*)','/:path*'] for x in config['rewrites']),'Unknown routes still rewrite to indexable homepage';assert 'noindex,follow' in (OUT/'404.html').read_text()
print(json.dumps({'status':'passed','initialHomepageLinks':len(home.links),'renderedCollectionRoutes':6,'homepageSectionsWithGenuineFeatures':6,'preservedStaticArticles':len(data),'preservedReactRoutes':len(rewrites),'sitemapUrls':len(urls),'verifiedSourceFeatureMedia':sum(c['verifiedPropertyMedia'] for c in coverage['collections']),'photoExceptions':'Exact public-property media carries provenance; no generated substitute or licence claim','popularity':'No ranking inferred without first-party data'},indent=2))
