#!/usr/bin/env node
/**
 * Love Our Listings — Admin CLI
 * Review and manage the content queue from the terminal
 *
 * Usage:
 *   node admin.js stats          — show queue stats
 *   node admin.js list           — list pending/enriched posts
 *   node admin.js review         — interactive review mode
 *   node admin.js approve <id>   — approve a specific post
 *   node admin.js reject <id>    — reject a specific post
 *   node admin.js publish        — publish all approved posts
 *   node admin.js approve-all    — approve all enriched posts
 *   node admin.js run            — run full ingest cycle now
 */

const readline = require('readline');
const queue = require('./src/queue');
const { publishApproved } = require('./src/publisher');

const args = process.argv.slice(2);
const cmd = args[0] || 'stats';

function printStats() {
  const stats = queue.getStats();
  console.log('\n📊 Love Our Listings — Queue Stats\n');
  console.log(`  pending           ${stats.pending || 0}`);
  console.log(`  enriched          ${stats.enriched || 0}  ← ready to review`);
  console.log(`  approved          ${stats.approved || 0}  ← ready to publish`);
  console.log(`  published         ${stats.published || 0}`);
  console.log(`  rejected          ${stats.rejected || 0}`);
  console.log(`  enrichment-failed ${stats['enrichment-failed'] || 0}`);
  console.log(`  ─────────────────────`);
  console.log(`  total             ${stats.total || 0}\n`);
}

function listPosts(status = 'enriched') {
  const posts = queue.getByStatus(status);
  if (posts.length === 0) {
    console.log(`\n  No posts with status: ${status}\n`);
    return;
  }
  console.log(`\n📋 Posts — status: ${status} (${posts.length})\n`);
  posts.forEach((post, i) => {
    const title = post.enriched?.seoTitle || post.title;
    const countries = (post.countries || []).join(', ');
    console.log(`  [${i + 1}] ${post.id}`);
    console.log(`      Title:    ${title.slice(0, 70)}`);
    console.log(`      Source:   ${post.source}`);
    console.log(`      Markets:  ${countries}`);
    console.log(`      Date:     ${post.pubDate?.split('T')[0] || 'unknown'}`);
    console.log('');
  });
}

function showPost(id) {
  const all = [...queue.readQueue(), ...queue.readPublished()];
  const post = all.find(p => p.id === id);
  if (!post) { console.log(`\n  Post not found: ${id}\n`); return; }

  const e = post.enriched || {};
  console.log('\n─────────────────────────────────────────────────');
  console.log(`ID:          ${post.id}`);
  console.log(`Status:      ${post.status}`);
  console.log(`Source:      ${post.source}`);
  console.log(`Author:      ${post.author}`);
  console.log(`Influencer:  ${post.isInfluencer ? 'Yes' : 'No'}`);
  console.log(`Markets:     ${(post.countries || []).join(', ')}`);
  console.log(`Date:        ${post.pubDate?.split('T')[0]}`);
  console.log(`Original:    ${post.link}`);
  console.log('─────────────────────────────────────────────────');
  if (e.seoTitle) {
    console.log(`\nSEO Title:   ${e.seoTitle}`);
    console.log(`Meta Desc:   ${e.metaDescription}`);
    console.log(`Keywords:    ${(e.keywords || []).join(', ')}`);
    console.log(`\nLLM Summary:\n  ${e.llmSummary}`);
    console.log(`\nFAQ Preview:`);
    (e.faqPairs || []).forEach((f, i) => {
      console.log(`  Q${i+1}: ${f.question}`);
      console.log(`  A${i+1}: ${f.answer.slice(0, 120)}...\n`);
    });
  }
  console.log('─────────────────────────────────────────────────\n');
}

async function interactiveReview() {
  const posts = queue.getByStatus('enriched');
  if (posts.length === 0) {
    console.log('\n  No enriched posts to review.\n');
    return;
  }

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const ask = (q) => new Promise(r => rl.question(q, r));

  console.log(`\n🔍 Interactive Review — ${posts.length} posts\n`);
  console.log('  Commands: (a)pprove  (r)eject  (s)kip  (v)iew full  (q)uit\n');

  for (const post of posts) {
    const e = post.enriched || {};
    console.log('─────────────────────────────────────────────────');
    console.log(`Source:  ${post.source} | Markets: ${(post.countries || []).join(', ')}`);
    console.log(`Title:   ${(e.seoTitle || post.title).slice(0, 70)}`);
    console.log(`Desc:    ${(e.metaDescription || '').slice(0, 120)}...`);

    const ans = await ask('  Action [a/r/s/v/q]: ');
    const choice = ans.trim().toLowerCase();

    if (choice === 'q') break;
    if (choice === 'v') { showPost(post.id); const ans2 = await ask('  Action [a/r/s]: '); if (ans2 === 'a') queue.approveItem(post.id); else if (ans2 === 'r') queue.rejectItem(post.id); }
    else if (choice === 'a') { queue.approveItem(post.id); console.log('  ✓ Approved\n'); }
    else if (choice === 'r') { const reason = await ask('  Reason (optional): '); queue.rejectItem(post.id, reason); console.log('  ✗ Rejected\n'); }
    else console.log('  → Skipped\n');
  }

  rl.close();
  console.log('\nReview complete.');
  printStats();
}

async function runFullCycle() {
  const { runIngestCycle } = require('./ingest');
  await runIngestCycle();
}

// ─── COMMANDS ────────────────────────────────────────────────────────────────────
(async () => {
  switch (cmd) {
    case 'stats':
      printStats();
      break;

    case 'list':
      listPosts(args[1] || 'enriched');
      break;

    case 'show':
      if (!args[1]) { console.log('\n  Usage: node admin.js show <id>\n'); break; }
      showPost(args[1]);
      break;

    case 'review':
      await interactiveReview();
      break;

    case 'approve':
      if (!args[1]) { console.log('\n  Usage: node admin.js approve <id>\n'); break; }
      queue.approveItem(args[1])
        ? console.log(`\n  ✓ Approved: ${args[1]}\n`)
        : console.log(`\n  ✗ Not found: ${args[1]}\n`);
      break;

    case 'reject':
      if (!args[1]) { console.log('\n  Usage: node admin.js reject <id>\n'); break; }
      queue.rejectItem(args[1], args[2] || '')
        ? console.log(`\n  ✓ Rejected: ${args[1]}\n`)
        : console.log(`\n  ✗ Not found: ${args[1]}\n`);
      break;

    case 'approve-all': {
      const enriched = queue.getByStatus('enriched');
      enriched.forEach(p => queue.approveItem(p.id));
      console.log(`\n  ✓ Approved ${enriched.length} posts\n`);
      break;
    }

    case 'publish': {
      const count = publishApproved();
      console.log(`\n  ✓ Published ${count} posts\n`);
      break;
    }

    case 'run':
      await runFullCycle();
      break;

    default:
      console.log(`
Love Our Listings — Admin CLI

Commands:
  node admin.js stats            Queue statistics
  node admin.js list [status]    List posts by status
  node admin.js show <id>        Show post details
  node admin.js review           Interactive review mode
  node admin.js approve <id>     Approve a post
  node admin.js reject <id>      Reject a post
  node admin.js approve-all      Approve all enriched posts
  node admin.js publish          Publish all approved posts
  node admin.js run              Run full ingest + enrich cycle
`);
  }
})();
