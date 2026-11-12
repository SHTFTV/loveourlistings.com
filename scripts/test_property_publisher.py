import unittest,tempfile,json
from pathlib import Path
from unittest.mock import patch
from property_media import MediaUnavailable
from datetime import datetime,timezone
from publish_properties import main,feature,validate,category
from rss_runtime import parse_feed
MEDIA={'status':'verified-public-source','imageUrl':'/images/source-properties/test.jpg','sourceImageAlt':'The actual fixture property','credit':'Fixture publisher','sourceUrl':'https://robbreport.com/home'}
NOW=datetime(2026,11,9,23,59,tzinfo=timezone.utc)
DIRECT={'id':'robb','name':'Robb Report','url':'https://robbreport.com/shelter/feed/','articleHosts':['robbreport.com'],'priority':1}
GOOGLE={'id':'google','name':'Google RSS discovery','url':'https://news.google.com/rss/search?q=waterfront','articleHosts':['news.google.com'],'priority':10,'discoveryOnly':True}
def rss(title,url,summary,date='Mon, 09 Nov 2026 16:00:00 +0000'):
 return ('<rss><channel><item><title>'+title+'</title><link>'+url+'</link><pubDate>'+date+'</pubDate><description><![CDATA['+summary+']]></description></item></channel></rss>').encode()
class TestPublisher(unittest.TestCase):
 def setUp(self):
  self.media=patch('publish_properties.resolve_media',return_value=MEDIA);self.media.start();self.addCleanup(self.media.stop);self.evidence=patch('publish_properties.recover_evidence',side_effect=ValueError('Insufficient fixture source facts'));self.evidence.start();self.addCleanup(self.evidence.stop)
 def fixture(self,r,sources):
  (r/'operations').mkdir();(r/'public/journal').mkdir(parents=True);(r/'src/data').mkdir(parents=True);(r/'operations/prior-posts.json').write_text('[]');(r/'public/journal/index.html').write_text('<html><h1>The journal.</h1><p>Latest article: <time datetime="2026-01-01">January 1</time></p></html>');(r/'public/sitemap.xml').write_text('<urlset></urlset>');(r/'src/data/latestPublished.ts').write_text('export const latestPublished = [];');cfg={'version':7,'origin':'https://www.loveourlistings.com','timezone':'America/Vancouver','sources':sources,'lookbackDays':14,'maxArticlesPerRun':2,'collectionPriority':['waterfront','mansions'],'collections':['waterfront','mansions']};(r/'operations/site-sop.json').write_text(json.dumps(cfg))
 def test_real_feature_has_source_brand_cta_original_time_and_no_frontage_invention(self):
  data=rss('This $14.5 Million Malibu Home Has a Private Observatory','https://robbreport.com/home','An ocean-view residence pairs organic modernism with sweeping coastal views.');item=parse_feed(data,DIRECT,NOW)[0][0];a=feature(item,'waterfront',NOW,{'timezone':'America/Vancouver','version':3},MEDIA);self.assertIn('We Love This Listing',a['title']);self.assertIn('Want to see your property here?',str(a['paragraphs']));self.assertIn('not turning that into a claim of direct frontage',str(a['paragraphs']));self.assertGreater(validate(a),130);self.assertEqual(a['source']['sourceDate'],'2026-11-09')
 def test_google_is_actual_discovery_never_fake_original_and_repeat_deduplicates(self):
  with tempfile.TemporaryDirectory() as tmp:
   r=Path(tmp);self.fixture(r,[DIRECT,GOOGLE]);direct=rss('This $14.5 Million Malibu Home Has a Private Observatory','https://robbreport.com/home','An ocean-view residence pairs organic modernism with sweeping coastal views.');google=rss('A waterfront mansion property story - Publisher','https://news.google.com/rss/articles/opaque','A real source headline and publisher from the public Google News RSS feed.')
   first=main(r,lambda u:google if 'google' in u else direct,NOW);self.assertEqual(len(first['articles']),1);self.assertEqual(first['discovered'],1);state=json.loads((r/'operations/publisher-state.json').read_text());self.assertEqual(state['articles'][0]['source']['url'],'https://robbreport.com/home');self.assertEqual(state['discovery'][0]['status'],'original-publisher-link-required; not auto-published from Google redirect');state['runs'][0]['productionVerified']=True;(r/'operations/publisher-state.json').write_text(json.dumps(state));repeat=main(r,lambda u:google if 'google' in u else direct,NOW);self.assertEqual(repeat['articles'],[]);self.assertEqual(repeat['duplicates'],2);self.assertEqual((r/'public/journal/index.html').read_text().count('<!-- RSS_FEATURES_START -->'),1)
 def test_eligible_property_with_image_never_gets_generic_repeated_copy(self):
  with tempfile.TemporaryDirectory() as tmp:
   r=Path(tmp);self.fixture(r,[DIRECT])
   result=main(r,lambda _:rss('This London Water Tower Is a Contemporary Residence','https://robbreport.com/water-tower','A dated source describes an individual converted water tower residence with a specific history.'),NOW)
   self.assertEqual(result['status'],'no-eligible-content')
   result=json.loads((r/'operations/latest-run.json').read_text())
   self.assertEqual(result['articles'],[])
   self.assertIn('Source-specific original writer required',str(result['publicationBlocks']))
   self.assertFalse(list((r/'public/journal').glob('*/index.html')))
 def test_generic_design_story_is_not_mislabelled_as_a_property_listing(self):
  self.assertIsNone(category({'title':'Color Chart: The Joys of Browns in the Home','summary':'A home design feature','publisher':'Sotheby’s International Realty'}))
  self.assertEqual(category({'title':'Inside Montecito’s La Paloma','summary':'A restored estate designed by a named architect','publisher':'Sotheby’s International Realty'}),'mansions')
 def test_individual_penthouse_and_tudor_are_eligible_without_generic_design(self):
  self.assertEqual(category({'title':'Clive Davis’s Park Avenue Penthouse Lists for $11 Million','summary':'An individual dated property source','publisher':'Robb Report'}),'penthouses')
  self.assertEqual(category({'title':'A 1920s Seattle Tudor Blends Old-World Details With Modern Flourishes for $9.7 Million','summary':'An individual dated property source','publisher':'Robb Report'}),'mansions')
 def test_missing_date_future_or_external_host_rejected(self):
  good=rss('A Home','https://bad.example/property','A genuine-looking property summary with more than thirty-five characters.');items,errors=parse_feed(good,DIRECT,NOW);self.assertEqual(len(items),0);self.assertEqual(len(errors),1)
  future=rss('A Home','https://robbreport.com/property','A genuine-looking property summary with more than thirty-five characters.','Mon, 09 Nov 2036 16:00:00 +0000');self.assertEqual(len(parse_feed(future,DIRECT,NOW)[0]),0)
 def test_existing_canonical_source_is_not_reposted(self):
  with tempfile.TemporaryDirectory() as tmp:
   r=Path(tmp);self.fixture(r,[DIRECT]);(r/'operations/prior-posts.json').write_text(json.dumps([{'slug':'existing','datePublished':'2026-01-01','sourceUrls':['https://robbreport.com/home']}]))
   report=main(r,lambda _:rss('A Malibu Home','https://robbreport.com/home','An ocean-view residence with a well-described setting and original source.'),NOW);self.assertEqual(report['articles'],[]);self.assertEqual(report['duplicates'],1)
 def test_missing_source_image_quarantines_before_write(self):
  with tempfile.TemporaryDirectory() as tmp:
   r=Path(tmp);self.fixture(r,[DIRECT])
   with patch('publish_properties.resolve_media',side_effect=MediaUnavailable('Exact photo unavailable')):
    result=main(r,lambda _:rss('A Malibu Home','https://robbreport.com/home','A dated ocean-view source home with a genuinely long factual summary.'),NOW)
    self.assertEqual(result['status'],'no-eligible-content')
   result=json.loads((r/'operations/latest-run.json').read_text());self.assertEqual(result['status'],'no-eligible-content');self.assertEqual(result['collections'][0]['status'],'blocked-eligible-property')
   self.assertEqual(result['articles'],[]);self.assertEqual(result['quarantined'],1)
   self.assertFalse(list((r/'public/journal').glob('*/index.html')))
   self.assertEqual(json.loads((r/'operations/publisher-state.json').read_text())['articles'],[])
if __name__=='__main__':unittest.main()
