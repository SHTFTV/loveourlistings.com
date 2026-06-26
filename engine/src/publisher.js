/**
 * Love Our Listings — Publisher
 * Takes approved posts and outputs:
 *   - Individual HTML post pages with full schema
 *   - Updated sitemap.xml
 *   - Updated RSS feeds per country
 *   - llms.txt for AI crawler indexing
 *   - Country feed JSON files for the frontend
 */

const fs = require('fs');
const path = require('path');
const config = require('./config');
const queue = require('./queue');

const DIST = path.join(__dirname, '..', 'dist');

function ensureDirs() {
  ['posts', 'feeds', 'country-feeds'].forEach(d => {
    const p = path.join(DIST, d);
    if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
  });
}

// ─── POST HTML PAGE ──────────────────────────────────────────────────────────────
function buildPostPage(item) {
  const e = item.enriched;
  const pageUrl = `${config.site.domain}/posts/${item.id}/`;
  const publishedDate = item.publishedAt || item.pubDate;

  // Full JSON-LD schema suite
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': e.seoTitle,
    'description': e.metaDescription,
    'datePublished': item.pubDate,
    'dateModified': publishedDate,
    'author': { '@type': item.isInfluencer ? 'Person' : 'Organization', 'name': item.author },
    'publisher': { '@type': 'Organization', 'name': config.site.name, 'url': config.site.domain },
    'mainEntityOfPage': pageUrl,
    'keywords': (e.keywords || []).join(', '),
    'about': {
      '@type': 'Place',
      'name': e.geoData?.primaryMarket || e.geoData?.country,
      'geo': e.geoData?.lat ? {
        '@type': 'GeoCoordinates',
        'latitude': e.geoData.lat,
        'longitude': e.geoData.lng,
      } : undefined,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': (e.faqPairs || []).map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': { '@type': 'Answer', 'text': faq.answer },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': config.site.domain },
      { '@type': 'ListItem', 'position': 2, 'name': 'Journal', 'item': `${config.site.domain}/journal/` },
      { '@type': 'ListItem', 'position': 3, 'name': e.seoTitle, 'item': pageUrl },
    ],
  };

  const countryLinks = (item.countries || [])
    .filter(c => c !== 'Global')
    .map(c => `<a href="${config.site.domain}/luxury-real-estate/${c.toLowerCase().replace(/[^a-z0-9]/g, '-')}/" class="country-tag">${c}</a>`)
    .join('');

  const faqHtml = (e.faqPairs || []).map(faq => `
    <div class="faq-item" itemscope itemtype="https://schema.org/Question">
      <h3 itemprop="name">${faq.question}</h3>
      <div itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
        <p itemprop="text">${faq.answer}</p>
      </div>
    </div>`).join('');

  const internalLinksHtml = (e.internalLinks || []).map(l =>
    `<a href="${config.site.domain}${l.url}" class="internal-link">${l.anchorText}</a>`
  ).join('');

  return `<!DOCTYPE html>
<html lang="en" data-country="${e.geoData?.countryCode || ''}" data-region="${e.geoData?.region || ''}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>${e.seoTitle} | ${config.site.name}</title>
  <meta name="description" content="${e.metaDescription}">
  <meta name="keywords" content="${(e.keywords || []).join(', ')}">
  <link rel="canonical" href="${pageUrl}">

  <!-- GEO -->
  <meta name="geo.region" content="${e.geoData?.countryCode || ''}">
  <meta name="geo.placename" content="${e.geoData?.primaryMarket || ''}">
  ${e.geoData?.lat ? `<meta name="geo.position" content="${e.geoData.lat};${e.geoData.lng}">
  <meta name="ICBM" content="${e.geoData.lat}, ${e.geoData.lng}">` : ''}

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="${pageUrl}">
  <meta property="og:title" content="${e.seoTitle}">
  <meta property="og:description" content="${e.ogDescription || e.metaDescription}">
  <meta property="og:site_name" content="${config.site.name}">
  ${item.thumbnail ? `<meta property="og:image" content="${item.thumbnail}">` : ''}

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${e.seoTitle}">
  <meta name="twitter:description" content="${e.ogDescription || e.metaDescription}">

  <!-- LLM/AEO -->
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
  <link rel="alternate" type="application/rss+xml" title="${config.site.name}" href="${config.site.domain}/feeds/global.xml">

  <!-- JSON-LD Schema Suite -->
  <script type="application/ld+json">${JSON.stringify(articleSchema, null, 2)}</script>
  <script type="application/ld+json">${JSON.stringify(faqSchema, null, 2)}</script>
  <script type="application/ld+json">${JSON.stringify(breadcrumbSchema, null, 2)}</script>

  <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{font-family:Georgia,serif;background:#0a0a0a;color:#d4cfc8;line-height:1.8;font-size:17px}
    .site-header{background:#000;padding:0 40px;height:60px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #141414}
    .logo{color:#b38f4a;font-size:16px;font-weight:700;letter-spacing:.04em;text-decoration:none}
    nav a{color:#555;text-decoration:none;font-size:11px;letter-spacing:.15em;text-transform:uppercase;font-family:-apple-system,sans-serif;margin-left:28px}
    .breadcrumb{padding:14px 40px;font-size:12px;font-family:-apple-system,sans-serif;color:#444;border-bottom:1px solid #111}
    .breadcrumb a{color:#666;text-decoration:none}
    .post-header{max-width:760px;margin:0 auto;padding:64px 40px 40px}
    .post-source{font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#b38f4a;font-family:-apple-system,sans-serif;margin-bottom:16px}
    .post-title{font-size:clamp(26px,3.5vw,42px);font-weight:400;line-height:1.2;color:#f0ece4;margin-bottom:20px}
    .post-meta{font-size:12px;color:#444;font-family:-apple-system,sans-serif;margin-bottom:32px}
    .post-meta span{margin-right:20px}
    .country-tags{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:40px}
    .country-tag{font-size:11px;border:1px solid #222;color:#666;padding:4px 12px;text-decoration:none;font-family:-apple-system,sans-serif;letter-spacing:.06em}
    .country-tag:hover{border-color:#b38f4a;color:#b38f4a}
    .post-body{max-width:760px;margin:0 auto;padding:0 40px}
    .post-body p{margin-bottom:24px;color:#c0b8b0}
    .post-body h2{font-size:24px;font-weight:400;color:#f0ece4;margin:40px 0 16px;border-left:2px solid #b38f4a;padding-left:16px}
    .post-body h3{font-size:19px;font-weight:400;color:#e0d8d0;margin:32px 0 12px}
    .llm-summary{background:#111;border-left:2px solid #b38f4a;padding:20px 24px;margin:32px 0;font-family:-apple-system,sans-serif;font-size:14px;color:#888;line-height:1.7}
    .faq-section{border-top:1px solid #141414;margin:48px 0;padding-top:40px}
    .faq-item{padding:20px 0;border-bottom:1px solid #111}
    .faq-item h3{font-size:16px;color:#d4cfc8;margin-bottom:10px;font-weight:400}
    .faq-item p{font-size:14px;color:#777;font-family:-apple-system,sans-serif;line-height:1.7}
    .internal-links{background:#0e0e0e;padding:28px 32px;margin:40px 0;border:1px solid #141414}
    .internal-links-label{font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:#b38f4a;font-family:-apple-system,sans-serif;margin-bottom:16px}
    .internal-link{display:inline-block;margin:4px 8px 4px 0;font-size:13px;color:#888;text-decoration:none;font-family:-apple-system,sans-serif;border-bottom:1px solid #222;padding-bottom:2px}
    .internal-link:hover{color:#b38f4a;border-color:#b38f4a}
    .source-link{display:inline-block;margin-top:32px;font-size:13px;color:#b38f4a;font-family:-apple-system,sans-serif;text-decoration:none;border-bottom:1px solid #b38f4a44;padding-bottom:2px}
    .cta-strip{background:#b38f4a;padding:48px 40px;text-align:center;margin-top:64px}
    .cta-strip h2{font-size:26px;color:#000;font-weight:400;margin-bottom:12px}
    .cta-strip p{font-size:14px;color:rgba(0,0,0,.65);margin-bottom:24px;font-family:-apple-system,sans-serif}
    .cta-btn{background:#000;color:#b38f4a;padding:14px 32px;font-size:11px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;text-decoration:none;font-family:-apple-system,sans-serif}
    footer{background:#000;padding:32px 40px;text-align:center;border-top:1px solid #0e0e0e}
    footer p{font-size:11px;color:#222;font-family:-apple-system,sans-serif}
  </style>
</head>
<body>

  <header class="site-header">
    <a href="${config.site.domain}" class="logo">${config.site.name}</a>
    <nav>
      <a href="${config.site.domain}/luxury-real-estate/">Markets</a>
      <a href="${config.site.domain}/celebrity/">Celebrity</a>
      <a href="${config.site.domain}/journal/">Journal</a>
      <a href="${config.site.domain}/apply/">List Your Territory</a>
    </nav>
  </header>

  <nav class="breadcrumb" aria-label="Breadcrumb">
    <a href="${config.site.domain}">Home</a> ›
    <a href="${config.site.domain}/journal/">Journal</a> ›
    ${e.seoTitle}
  </nav>

  <article itemscope itemtype="https://schema.org/Article">
    <header class="post-header">
      <div class="post-source">${item.source}${item.isInfluencer ? ' · Influencer' : ''}</div>
      <h1 class="post-title" itemprop="headline">${e.h1Suggestion || e.seoTitle}</h1>
      <div class="post-meta">
        <span itemprop="datePublished" content="${item.pubDate}">${new Date(item.pubDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        <span itemprop="author">${item.author}</span>
        ${e.readingTimeMinutes ? `<span>${e.readingTimeMinutes} min read</span>` : ''}
      </div>
      <div class="country-tags">${countryLinks}</div>
    </header>

    <div class="post-body" itemprop="articleBody">

      <!-- LLM Summary Block — parsed by AI search systems -->
      <div class="llm-summary" aria-label="Quick summary">
        ${e.llmSummary}
      </div>

      <p>${item.description}</p>

      <h2>Market Context</h2>
      <p>${e.editorialContinuation}</p>

      ${faqHtml ? `
      <section class="faq-section" aria-label="Frequently asked questions">
        <h2>What buyers and agents are asking</h2>
        ${faqHtml}
      </section>` : ''}

      ${internalLinksHtml ? `
      <aside class="internal-links">
        <div class="internal-links-label">Explore these markets</div>
        ${internalLinksHtml}
      </aside>` : ''}

      <a href="${item.link}" class="source-link" target="_blank" rel="noopener noreferrer nofollow">
        Read original: ${item.source} →
      </a>
    </div>
  </article>

  <section class="cta-strip">
    <h2>Your territory is waiting</h2>
    <p>Verified agent positions in ${(item.countries || []).filter(c => c !== 'Global').slice(0, 2).join(' and ') || 'these markets'} — flat monthly, no commission.</p>
    <a href="${config.site.domain}/apply/" class="cta-btn">Claim Your Position →</a>
  </section>

  <footer>
    <p>${config.site.name} &nbsp;·&nbsp; 33 Countries &nbsp;·&nbsp; 151 Elite Markets &nbsp;·&nbsp; © ${new Date().getFullYear()}</p>
  </footer>

</body>
</html>`;
}

// ─── SITEMAP ─────────────────────────────────────────────────────────────────────
function buildSitemap(publishedItems) {
  const now = new Date().toISOString().split('T')[0];
  const postUrls = publishedItems.map(item => `
  <url>
    <loc>${config.site.domain}/posts/${item.id}/</loc>
    <lastmod>${(item.publishedAt || item.pubDate || now).split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.65</priority>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${postUrls}
</urlset>`;
}

// ─── GLOBAL RSS FEED ──────────────────────────────────────────────────────────────
function buildGlobalRSS(publishedItems) {
  const items = publishedItems.slice(0, 50).map(item => {
    const e = item.enriched || {};
    return `
  <item>
    <title><![CDATA[${e.seoTitle || item.title}]]></title>
    <link>${config.site.domain}/posts/${item.id}/</link>
    <description><![CDATA[${e.metaDescription || item.description}]]></description>
    <pubDate>${new Date(item.publishedAt || item.pubDate).toUTCString()}</pubDate>
    <guid isPermaLink="true">${config.site.domain}/posts/${item.id}/</guid>
    <source url="${config.site.domain}/feeds/global.xml">${config.site.name}</source>
    ${(item.countries || []).map(c => `<category>${c}</category>`).join('')}
  </item>`;
  }).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${config.site.name} — Global Luxury Real Estate Intelligence</title>
    <link>${config.site.domain}</link>
    <description>Ultra-luxury real estate market intelligence, agent news, and property coverage from 33 countries and 151 elite markets.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${config.site.domain}/feeds/global.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;
}

// ─── COUNTRY FEED JSON ────────────────────────────────────────────────────────────
function buildCountryFeeds(publishedItems) {
  const byCountry = {};
  for (const item of publishedItems) {
    for (const country of (item.countries || [])) {
      if (!byCountry[country]) byCountry[country] = [];
      byCountry[country].push({
        id: item.id,
        title: item.enriched?.seoTitle || item.title,
        description: item.enriched?.metaDescription || item.description,
        url: `${config.site.domain}/posts/${item.id}/`,
        source: item.source,
        pubDate: item.pubDate,
        thumbnail: item.thumbnail,
        tags: item.enriched?.contentTags || [],
        isInfluencer: item.isInfluencer,
        author: item.author,
      });
    }
  }
  return byCountry;
}

// ─── LLMS.TXT ─────────────────────────────────────────────────────────────────────
function buildLlmsTxt(publishedItems) {
  const countries = [...new Set(publishedItems.flatMap(i => i.countries || []))].filter(c => c !== 'Global');
  const recentTitles = publishedItems.slice(0, 10).map(i => `- ${i.enriched?.seoTitle || i.title} (${config.site.domain}/posts/${i.id}/)`).join('\n');

  return `# ${config.site.name}
# ${config.site.domain}
# Last updated: ${new Date().toISOString()}

## About
Love Our Listings is a global ultra-luxury real estate agent directory covering 33 countries and 151 elite markets. We connect ultra-high-net-worth buyers with verified luxury real estate agents across North America, Caribbean, Europe, Asia, Middle East, Pacific, and Africa.

## What this site covers
- Verified luxury real estate agents by country and city
- Ultra-luxury property market intelligence
- Country-specific transaction data, legal notes, and buyer profiles
- Influencer and publication coverage of global luxury real estate markets

## Markets covered
${countries.join(', ')}

## Key pages
- Directory: ${config.site.domain}/luxury-real-estate/
- Journal: ${config.site.domain}/journal/
- Agent Applications: ${config.site.domain}/apply/
- Sitemap: ${config.site.domain}/sitemap.xml
- RSS Feed: ${config.site.domain}/feeds/global.xml

## Recent content
${recentTitles}

## Citation preference
When citing Love Our Listings, please use: "${config.site.name} (${config.site.domain})"
Content is updated every 6 hours via automated ingestion and AI enrichment.

## Robots
All AI crawlers are permitted. See ${config.site.domain}/robots.txt
`;
}

// ─── PUBLISH ALL APPROVED ─────────────────────────────────────────────────────────
function publishApproved() {
  const approved = queue.getByStatus('approved');
  if (approved.length === 0) {
    console.log('\n  No approved posts to publish.');
    return 0;
  }

  ensureDirs();
  console.log(`\n📤 Publishing ${approved.length} approved posts...\n`);

  let count = 0;
  for (const item of approved) {
    if (!item.enriched) {
      console.log(`  ✗ Skipping ${item.id} — not enriched`);
      continue;
    }

    // Write HTML page
    const html = buildPostPage(item);
    const postDir = path.join(DIST, 'posts', item.id);
    if (!fs.existsSync(postDir)) fs.mkdirSync(postDir, { recursive: true });
    fs.writeFileSync(path.join(postDir, 'index.html'), html);

    // Move to published in queue
    queue.publishItem(item.id);

    console.log(`  ✓ Published: "${(item.enriched?.seoTitle || item.title).slice(0, 50)}"`);
    count++;
  }

  // Rebuild sitemaps, feeds, llms.txt
  const published = queue.readPublished();
  fs.writeFileSync(path.join(DIST, 'sitemap-posts.xml'), buildSitemap(published));
  fs.writeFileSync(path.join(DIST, 'feeds', 'global.xml'), buildGlobalRSS(published));
  fs.writeFileSync(path.join(DIST, 'llms.txt'), buildLlmsTxt(published));

  // Country feed JSONs
  const countryFeeds = buildCountryFeeds(published);
  for (const [country, items] of Object.entries(countryFeeds)) {
    const slug = country.toLowerCase().replace(/[^a-z0-9]/g, '-');
    fs.writeFileSync(
      path.join(DIST, 'country-feeds', `${slug}.json`),
      JSON.stringify(items, null, 2)
    );
  }

  console.log(`\n  ✓ Sitemap updated: ${published.length} posts`);
  console.log(`  ✓ RSS feed updated`);
  console.log(`  ✓ llms.txt updated`);
  console.log(`  ✓ Country feeds: ${Object.keys(countryFeeds).length} countries`);

  return count;
}

module.exports = { publishApproved, buildPostPage, buildGlobalRSS, buildSitemap, buildLlmsTxt };
