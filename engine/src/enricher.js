/**
 * Love Our Listings — Claude Enrichment Engine
 * For each raw post, generates:
 *   - SEO title (60 chars, keyword-first)
 *   - Meta description (155 chars, AEO direct-answer format)
 *   - 3 FAQ pairs (for FAQPage schema + AEO)
 *   - LLM summary (2 sentences, plain language for ChatGPT/Perplexity)
 *   - JSON-LD schema type recommendation
 *   - 5 internal link suggestions
 *   - Continued content (200-word luxury editorial paragraph)
 *   - Open Graph description
 *   - 5 SEO keywords
 */

const https = require('https');
const config = require('./config');

function callClaude(prompt) {
  return new Promise((resolve, reject) => {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      reject(new Error('ANTHROPIC_API_KEY not set'));
      return;
    }

    const body = JSON.stringify({
      model: config.claude.model,
      max_tokens: config.claude.maxTokens,
      messages: [{ role: 'user', content: prompt }],
      system: `You are an SEO and content strategist for Love Our Listings, a global ultra-luxury real estate agent directory covering 33 countries and 151 elite markets. 

Your job is to take a raw post from an influencer or market publication and generate a complete metadata package optimized for:
- Google search (traditional SEO)
- AI answer engines (ChatGPT, Perplexity, Google AI Overviews)  
- GEO (Geographic SEO with location signals)
- LLM readability (structured, entity-rich, citable)

Always respond with valid JSON only. No markdown, no backticks, no preamble.`,
    });

    const options = {
      hostname: 'api.anthropic.com',
      path: '/v1/messages',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'Content-Length': Buffer.byteLength(body),
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.error) { reject(new Error(parsed.error.message)); return; }
          const text = parsed.content?.[0]?.text || '';
          // Strip any accidental markdown fences
          const clean = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
          const result = JSON.parse(clean);
          resolve(result);
        } catch (e) {
          reject(new Error(`Claude parse error: ${e.message}\nRaw: ${data.slice(0, 200)}`));
        }
      });
    });

    req.setTimeout(45000, () => { req.destroy(); reject(new Error('Claude API timeout')); });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

function buildEnrichmentPrompt(item) {
  const countries = item.countries.filter(c => c !== 'Global').slice(0, 3);
  const primaryCountry = countries[0] || 'global luxury real estate';
  const isInfluencer = item.isInfluencer;
  const sourceType = isInfluencer
    ? `influencer post by ${item.author} (luxury real estate professional)`
    : `article from ${item.source} (luxury real estate publication)`;

  return `Generate a complete SEO/AEO/GEO metadata package for this ${sourceType}.

ORIGINAL TITLE: ${item.title}
ORIGINAL CONTENT: ${item.description.slice(0, 500)}
PRIMARY MARKET: ${primaryCountry}
ALL MARKETS: ${item.countries.join(', ')}
SOURCE: ${item.source}
DATE: ${item.pubDate}
ORIGINAL URL: ${item.link}

Respond ONLY with this JSON structure, no other text:

{
  "seoTitle": "60-char max, keyword-first SEO title. Start with the primary luxury market name or strongest keyword. Example: 'Dubai Palm Jumeirah Luxury Villas: Market Trends 2026'",
  
  "metaDescription": "155-char max. Written as a direct answer to what a luxury buyer or agent would search for. Must include the market name and a specific insight. AEO format: answer first, context second.",
  
  "ogDescription": "100-char social share description. Evocative, prestige tone. No stats.",
  
  "h1Suggestion": "Page heading suggestion if this post became a full article. Different from seoTitle. More editorial.",
  
  "keywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5"],
  
  "faqPairs": [
    {
      "question": "A real question a luxury buyer or agent would ask about this topic",
      "answer": "A direct, 2-3 sentence answer. Specific to ${primaryCountry}. Cite the source naturally."
    },
    {
      "question": "Second question — different angle, focus on agent opportunity or market dynamics",
      "answer": "Direct answer, 2-3 sentences."
    },
    {
      "question": "Third question — practical or investment-focused",
      "answer": "Direct answer, 2-3 sentences."
    }
  ],
  
  "llmSummary": "2 sentences. Plain language. Written for AI systems to cite when answering questions about ${primaryCountry} luxury real estate. Include: what happened/what this covers, why it matters to buyers or agents. Entity-rich: name the city, the market, the price tier.",
  
  "editorialContinuation": "200-word luxury editorial paragraph that continues this story for Love Our Listings readers. Tone: authoritative, prestige, never salesy. Reference ${primaryCountry} specifically. Connect to why verified agent representation matters in this context. End with a natural bridge to the Love Our Listings directory.",
  
  "schemaType": "Article",
  
  "geoData": {
    "country": "${primaryCountry}",
    "countryCode": "2-letter ISO code",
    "primaryMarket": "Most specific city or area mentioned",
    "lat": 0.0,
    "lng": 0.0,
    "region": "One of: North America, Caribbean, Europe, Asia & Middle East, Australia & Pacific, Africa"
  },
  
  "internalLinks": [
    {
      "anchorText": "natural anchor text",
      "url": "/luxury-real-estate/country-slug/",
      "reason": "why this internal link is relevant"
    }
  ],
  
  "contentTags": ["tag1", "tag2", "tag3"],
  
  "readingTimeMinutes": 2,
  
  "qualityScore": 85
}`;
}

async function enrichPost(item) {
  const prompt = buildEnrichmentPrompt(item);

  try {
    const enriched = await callClaude(prompt);
    return {
      ...item,
      status: 'enriched',
      enriched,
      enrichedAt: new Date().toISOString(),
    };
  } catch (err) {
    console.log(`    ✗ Enrichment failed for "${item.title.slice(0, 40)}...": ${err.message}`);
    return {
      ...item,
      status: 'enrichment-failed',
      enrichmentError: err.message,
    };
  }
}

async function enrichBatch(items, maxItems = 20) {
  const toEnrich = items
    .filter(i => i.status === 'pending')
    .slice(0, maxItems);

  console.log(`\n🤖 Enriching ${toEnrich.length} posts with Claude...\n`);

  const results = [];
  for (const item of toEnrich) {
    process.stdout.write(`  Enriching: "${item.title.slice(0, 45)}..."  `);
    const enriched = await enrichPost(item);
    const ok = enriched.status === 'enriched';
    console.log(ok ? '✓' : '✗');
    results.push(enriched);

    // Brief pause to avoid rate limits
    await new Promise(r => setTimeout(r, 500));
  }

  const succeeded = results.filter(r => r.status === 'enriched').length;
  console.log(`\n  Enriched: ${succeeded}/${toEnrich.length}`);
  return results;
}

module.exports = { enrichPost, enrichBatch, callClaude };
