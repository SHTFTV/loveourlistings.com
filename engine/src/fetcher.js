/**
 * Love Our Listings — RSS Fetcher
 * Fetches and parses RSS/Atom feeds from publications and YouTube
 */

const https = require('https');
const http = require('http');

function fetchUrl(url, timeout = 10000) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    const req = lib.get(url, {
      headers: {
        'User-Agent': 'LoveOurListings/1.0 ContentBot (+https://www.loveourlistings.com)',
        'Accept': 'application/rss+xml, application/xml, text/xml, */*',
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location, timeout).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ body: data, status: res.statusCode }));
    });
    req.setTimeout(timeout, () => { req.destroy(); reject(new Error(`Timeout: ${url}`)); });
    req.on('error', reject);
  });
}

function parseRSS(xml, sourceName) {
  const items = [];

  // Detect Atom vs RSS
  const isAtom = xml.includes('<feed') && xml.includes('xmlns="http://www.w3.org/2005/Atom"');

  const itemTag = isAtom ? 'entry' : 'item';
  const itemRegex = new RegExp(`<${itemTag}[^>]*>([\\s\\S]*?)<\\/${itemTag}>`, 'gi');

  let match;
  while ((match = itemRegex.exec(xml)) !== null) {
    const block = match[1];

    const get = (patterns) => {
      for (const p of patterns) {
        const m = block.match(p);
        if (m && m[1]) return m[1].trim();
      }
      return '';
    };

    const title = get([
      /<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/i,
      /<title[^>]*>([\s\S]*?)<\/title>/i,
    ]);

    const link = get([
      /<link[^>]*href="([^"]+)"/i,
      /<link><!\[CDATA\[([\s\S]*?)\]\]><\/link>/i,
      /<link>([\s\S]*?)<\/link>/i,
      /<id>(https?[^<]+)<\/id>/i,
    ]);

    const description = get([
      /<media:description><!\[CDATA\[([\s\S]*?)\]\]><\/media:description>/i,
      /<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/i,
      /<description[^>]*>([\s\S]*?)<\/description>/i,
      /<content[^>]*><!\[CDATA\[([\s\S]*?)\]\]><\/content>/i,
      /<summary[^>]*>([\s\S]*?)<\/summary>/i,
    ]);

    const pubDate = get([
      /<pubDate>([\s\S]*?)<\/pubDate>/i,
      /<published>([\s\S]*?)<\/published>/i,
      /<updated>([\s\S]*?)<\/updated>/i,
      /<dc:date>([\s\S]*?)<\/dc:date>/i,
    ]);

    const thumbnail = get([
      /<media:thumbnail[^>]*url="([^"]+)"/i,
      /<enclosure[^>]*url="([^"]+)"/i,
    ]);

    const author = get([
      /<author><name>([\s\S]*?)<\/name>/i,
      /<dc:creator><!\[CDATA\[([\s\S]*?)\]\]><\/dc:creator>/i,
      /<dc:creator>([\s\S]*?)<\/dc:creator>/i,
    ]);

    // Clean HTML from description
    const cleanDesc = description
      .replace(/<[^>]+>/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&nbsp;/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 800);

    if (!title || !link) continue;

    // Generate a stable ID from URL
    const id = Buffer.from(link).toString('base64').slice(0, 24);

    items.push({
      id,
      title: title.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>'),
      link,
      description: cleanDesc,
      pubDate: pubDate ? new Date(pubDate).toISOString() : new Date().toISOString(),
      thumbnail: thumbnail || null,
      author: author || sourceName,
      source: sourceName,
      fetchedAt: new Date().toISOString(),
      status: 'pending',        // pending → enriched → approved → published
      enriched: null,           // filled by Claude enrichment
      countries: [],            // filled by keyword matcher
    });
  }

  return items;
}

async function fetchFeed(feedConfig) {
  const url = feedConfig.url || feedConfig.rss;
  const name = feedConfig.name;

  try {
    console.log(`  Fetching: ${name}...`);
    const { body, status } = await fetchUrl(url);

    if (status >= 400) {
      console.log(`  ✗ HTTP ${status}: ${name}`);
      return [];
    }

    const items = parseRSS(body, name);

    // Tag influencer posts
    if (feedConfig.handle) {
      items.forEach(item => {
        item.isInfluencer = true;
        item.influencerHandle = feedConfig.handle;
        item.influencerMarkets = feedConfig.markets || [];
        item.tags = feedConfig.tags || [];
      });
    } else {
      items.forEach(item => {
        item.isInfluencer = false;
        item.tags = feedConfig.tags || [];
      });
    }

    console.log(`  ✓ ${name}: ${items.length} items`);
    return items;

  } catch (err) {
    console.log(`  ✗ ${name}: ${err.message}`);
    return [];
  }
}

async function fetchAllFeeds(config) {
  console.log('\n📡 Fetching all feeds...\n');

  const allItems = [];
  const allFeeds = [
    ...config.influencerFeeds,
    ...config.publicationFeeds,
  ];

  for (const feed of allFeeds) {
    const items = await fetchFeed(feed);
    allItems.push(...items);
  }

  console.log(`\n  Total raw items: ${allItems.length}`);
  return allItems;
}

module.exports = { fetchAllFeeds, fetchFeed, parseRSS };
