#!/usr/bin/env node
/**
 * Love Our Listings — Content Engine
 * Main ingest cycle orchestrator
 *
 * Usage:
 *   node ingest.js              — run once
 *   node ingest.js --watch      — run on cron schedule
 *   node ingest.js --dry-run    — fetch + tag only, no Claude calls
 *
 * Environment:
 *   ANTHROPIC_API_KEY=sk-ant-...  required for enrichment
 */

const config = require('./src/config');
const { fetchAllFeeds } = require('./src/fetcher');
const { tagCountries, deduplicateItems } = require('./src/tagger');
const { enrichBatch } = require('./src/enricher');
const { publishApproved } = require('./src/publisher');
const queue = require('./src/queue');

const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const isWatch = args.includes('--watch');

async function runIngestCycle() {
  const start = Date.now();
  console.log('\n══════════════════════════════════════════════');
  console.log(`  Love Our Listings — Content Engine`);
  console.log(`  ${new Date().toLocaleString()}`);
  if (isDryRun) console.log('  MODE: DRY RUN (no Claude API calls)');
  console.log('══════════════════════════════════════════════');

  // 1. FETCH all feeds
  const rawItems = await fetchAllFeeds(config);

  // 2. TAG countries
  console.log('\n🗺  Tagging countries...');
  const tagged = rawItems.map(item => ({
    ...item,
    countries: tagCountries(item),
  }));

  // 3. DEDUPLICATE against existing queue + published
  const existingIds = queue.getExistingIds();
  const fresh = deduplicateItems(tagged, existingIds);
  console.log(`\n  New items (after dedup): ${fresh.length} of ${rawItems.length} total`);

  if (fresh.length === 0) {
    console.log('\n  Nothing new. Queue is up to date.');
    printSummary(start);
    return;
  }

  // 4. ADD to queue as pending
  const added = queue.addToQueue(fresh);
  console.log(`  Added to queue: ${added}`);

  if (isDryRun) {
    console.log('\n  DRY RUN: skipping enrichment and publishing.');
    printSummary(start);
    return;
  }

  // 5. ENRICH with Claude
  if (!process.env.ANTHROPIC_API_KEY) {
    console.log('\n  ⚠️  ANTHROPIC_API_KEY not set — skipping enrichment.');
    console.log('  Run: ANTHROPIC_API_KEY=sk-ant-... node ingest.js');
    printSummary(start);
    return;
  }

  const pending = queue.getByStatus('pending').slice(0, config.maxPostsPerRun);
  const enriched = await enrichBatch(pending, config.maxPostsPerRun);

  // Update queue with enriched results
  queue.updateBatch(enriched);

  // 6. AUTO-PUBLISH if flag set, otherwise wait for admin review
  const autoPublish = args.includes('--auto-publish');
  if (autoPublish) {
    console.log('\n  Auto-publishing all enriched posts...');
    const enrichedPosts = queue.getByStatus('enriched');
    enrichedPosts.forEach(p => queue.approveItem(p.id));
    const published = publishApproved();
    console.log(`  Published: ${published}`);
  } else {
    const readyCount = queue.getByStatus('enriched').length;
    if (readyCount > 0) {
      console.log(`\n  ✅ ${readyCount} posts enriched and ready for review.`);
      console.log('  Run: node admin.js review');
      console.log('  Or:  node admin.js approve-all && node admin.js publish');
    }
  }

  printSummary(start);
}

function printSummary(start) {
  const stats = queue.getStats();
  const elapsed = ((Date.now() - start) / 1000).toFixed(1);
  console.log('\n──────────────────────────────────────────────');
  console.log(`  Queue:     pending ${stats.pending || 0} · enriched ${stats.enriched || 0} · approved ${stats.approved || 0}`);
  console.log(`  Published: ${stats.published || 0} total posts live`);
  console.log(`  Time:      ${elapsed}s`);
  console.log('══════════════════════════════════════════════\n');
}

// ─── RUN ──────────────────────────────────────────────────────────────────────────
if (isWatch) {
  console.log(`\n⏰ Watch mode — running every ${config.cronInterval / 3600000}h\n`);
  runIngestCycle();
  setInterval(runIngestCycle, config.cronInterval);
} else {
  runIngestCycle().catch(err => {
    console.error('\n✗ Fatal error:', err.message);
    process.exit(1);
  });
}

module.exports = { runIngestCycle };
