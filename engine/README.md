# Love Our Listings — Content Engine

Automated ingestion, AI enrichment, and publishing pipeline for luxury real estate content.

## What it does

Every 6 hours (or on demand):
1. **Fetches** RSS feeds from influencers (Serhant, Eklund, Kriz) and publications (Mansion Global, AD, Bloomberg)
2. **Tags** each post to relevant countries using keyword matching
3. **Deduplicates** against existing queue and published posts
4. **Enriches** each post via Claude API — generates SEO title, meta description, FAQ pairs, LLM summary, GEO data, schema type, internal links, and a 200-word editorial continuation
5. **Queues** enriched posts for admin review
6. **Publishes** approved posts as full HTML pages with complete JSON-LD schema suite
7. **Updates** sitemap, RSS feeds, country JSON feeds, and llms.txt automatically

## Setup

```bash
# 1. Install (no dependencies — pure Node.js)
cd lol-content-engine

# 2. Add your API key
export ANTHROPIC_API_KEY=sk-ant-your-key-here

# 3. Run once
node ingest.js

# 4. Review enriched posts
node admin.js review

# 5. Publish approved posts
node admin.js publish
```

## Commands

```bash
node ingest.js                  # Run one full ingest cycle
node ingest.js --dry-run        # Fetch + tag only, no Claude calls
node ingest.js --watch          # Run on 6-hour cron schedule
node ingest.js --auto-publish   # Skip review, publish everything

node admin.js stats             # Queue statistics
node admin.js list              # List enriched posts ready for review
node admin.js list pending      # List pending posts
node admin.js review            # Interactive review (approve/reject)
node admin.js approve <id>      # Approve specific post
node admin.js reject <id>       # Reject specific post
node admin.js approve-all       # Approve all enriched posts
node admin.js publish           # Publish all approved posts
node admin.js show <id>         # Show full post details
```

## Output files

```
dist/
  posts/
    <post-id>/
      index.html          ← Full SEO post page with 5x JSON-LD schemas
  feeds/
    global.xml            ← Master RSS feed
  country-feeds/
    united-states.json    ← Country-specific post feed for frontend
    united-kingdom.json
    ... (one per country)
  sitemap-posts.xml       ← Post sitemap (auto-updates on publish)
  llms.txt                ← AI crawler index file

queue/
  posts.json              ← Active queue (pending/enriched/approved)
  published.json          ← Archive of all published posts
```

## Schema generated per post

Each published post HTML includes:
- `Article` — full post metadata
- `FAQPage` — 3 Q&A pairs for AEO/featured snippets
- `BreadcrumbList` — navigation path
- `Place` with `GeoCoordinates` — country/city GEO signals
- GEO meta tags (`geo.region`, `geo.position`, `ICBM`)
- Open Graph + Twitter cards
- LLM summary block (readable by ChatGPT, Perplexity, Gemini)

## Adding feeds

Edit `src/config.js`:

```javascript
// Add an influencer
influencerFeeds: [
  {
    name: 'Agent Name',
    handle: 'instagramhandle',
    platform: 'youtube',
    rss: 'https://www.youtube.com/feeds/videos.xml?channel_id=XXXXX',
    markets: ['United States', 'United Kingdom'],
    tags: ['agent-brand', 'luxury-sales'],
  },
],

// Add a publication
publicationFeeds: [
  {
    name: 'Publication Name',
    url: 'https://publication.com/rss',
    tags: ['market-intel'],
  },
],
```

## Production deployment (Cloudflare / Vercel / VPS)

### VPS cron
```bash
# Add to crontab — runs every 6 hours, auto-publishes
0 */6 * * * cd /var/www/lol-engine && ANTHROPIC_API_KEY=sk-ant-... node ingest.js --auto-publish >> /var/log/lol-engine.log 2>&1
```

### GitHub Actions (free)
```yaml
name: Content Engine
on:
  schedule:
    - cron: '0 */6 * * *'
  workflow_dispatch:

jobs:
  ingest:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: node ingest.js --auto-publish
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
      - uses: actions/upload-artifact@v4
        with:
          name: dist
          path: dist/
```

## llms.txt

The engine automatically maintains `/dist/llms.txt` — the emerging standard
for telling AI crawlers (ChatGPT, Perplexity, Claude) what your site covers.
Deploy this file to `https://www.loveourlistings.com/llms.txt`.

This single file dramatically improves how AI systems discover, cite, and
surface your content in AI-generated answers.
