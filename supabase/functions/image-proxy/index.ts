import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

const ALLOWED_HOSTS = [
  'img.youtube.com',
  'i.ytimg.com',
  'i9.ytimg.com',
  'sothebys-com.brightspotcdn.com',
  'www.sothebysrealty.com',
  'sothebysrealty.com',
  'static.sothebysrealty.com',
  'content.sothebysrealty.com',
  'robbreport.com',
  'pmcrobbreport.files.wordpress.com',
  'robbreport.com.cdn.cloudflare.net',
  'files.wordpress.com',
  'wordpress.com',
  'mansionglobal.com',
  'images.mansionglobal.com',
  'static.mansionglobal.com',
  'images.wsj.net',
  'architecturaldigest.com',
  'media.architecturaldigest.com',
  'assets.architecturaldigest.com',
  'media.vogue.com',
  'images.unsplash.com',
];

// ---- In-memory cache + stats (per warm instance) ----
type CacheEntry = { body: Uint8Array; contentType: string; ts: number };
const CACHE = new Map<string, CacheEntry>();
const CACHE_MAX = 200;
const CACHE_TTL_MS = 1000 * 60 * 60 * 6; // 6h

const STATS = {
  hits: 0,
  misses: 0,
  errors: 0,
  hostHits: {} as Record<string, number>,
  hostMisses: {} as Record<string, number>,
  recentFailures: [] as Array<{ url: string; host: string; status: number; ts: number; reason: string }>,
  startedAt: Date.now(),
};

function recordFailure(url: string, host: string, status: number, reason: string) {
  STATS.errors++;
  STATS.recentFailures.unshift({ url, host, status, ts: Date.now(), reason });
  if (STATS.recentFailures.length > 50) STATS.recentFailures.length = 50;
}

function cacheGet(key: string): CacheEntry | null {
  const e = CACHE.get(key);
  if (!e) return null;
  if (Date.now() - e.ts > CACHE_TTL_MS) { CACHE.delete(key); return null; }
  // LRU bump
  CACHE.delete(key); CACHE.set(key, e);
  return e;
}
function cacheSet(key: string, entry: CacheEntry) {
  if (CACHE.size >= CACHE_MAX) {
    const first = CACHE.keys().next().value;
    if (first) CACHE.delete(first);
  }
  CACHE.set(key, entry);
}

function upgradeWordPressThumbnail(rawUrl: string): string {
  try {
    const u = new URL(rawUrl);
    u.pathname = u.pathname.replace(/-\d{2,4}x\d{2,4}(?=\.(?:jpe?g|png|webp)$)/i, '');
    return u.toString();
  } catch {
    return rawUrl;
  }
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    const url = new URL(req.url);

    // --- Stats endpoint: GET ?stats=1 ---
    if (url.searchParams.get('stats') === '1') {
      return new Response(JSON.stringify({
        ...STATS,
        cacheSize: CACHE.size,
        cacheMax: CACHE_MAX,
        allowList: ALLOWED_HOSTS,
        uptimeMs: Date.now() - STATS.startedAt,
      }), { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    const target = url.searchParams.get('url');
    if (!target) {
      return new Response(JSON.stringify({ error: 'missing url' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const upgradedTarget = upgradeWordPressThumbnail(target);
    let parsed: URL;
    try { parsed = new URL(upgradedTarget); } catch {
      return new Response(JSON.stringify({ error: 'invalid url' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    if (!/^https?:$/.test(parsed.protocol)) {
      return new Response(JSON.stringify({ error: 'unsupported protocol' }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    const hostOk = ALLOWED_HOSTS.some((h) => parsed.hostname === h || parsed.hostname.endsWith(`.${h}`));
    if (!hostOk) {
      recordFailure(upgradedTarget, parsed.hostname, 403, 'host-not-allowed');
      return new Response(JSON.stringify({ error: 'host not allowed', host: parsed.hostname }), {
        status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const cacheKey = parsed.toString();
    const cached = cacheGet(cacheKey);
    if (cached) {
      STATS.hits++;
      STATS.hostHits[parsed.hostname] = (STATS.hostHits[parsed.hostname] ?? 0) + 1;
      console.log(`[image-proxy] CACHE HIT ${parsed.hostname} ${parsed.pathname}`);
      return new Response(cached.body, {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': cached.contentType,
          'Cache-Control': 'public, max-age=86400, s-maxage=604800, immutable',
          'X-Proxy-Cache': 'HIT',
        },
      });
    }

    // Retry with backoff (transient CDN failures)
    let upstream: Response | null = null;
    let lastErr: unknown = null;
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        upstream = await fetch(parsed.toString(), {
          headers: {
            'User-Agent': 'Mozilla/5.0 (compatible; LoveOurListingsBot/1.0)',
            'Accept': 'image/avif,image/webp,image/*,*/*;q=0.8',
            // No Referer — defeat hotlink protection
          },
          redirect: 'follow',
        });
        if (upstream.ok) break;
      } catch (e) { lastErr = e; }
      await new Promise((r) => setTimeout(r, 250 * (attempt + 1)));
    }

    if (!upstream || !upstream.ok) {
      recordFailure(upgradedTarget, parsed.hostname, upstream?.status ?? 0, 'upstream-failed');
      return new Response(JSON.stringify({
        error: 'upstream fetch failed',
        status: upstream?.status ?? 0,
        message: String(lastErr ?? ''),
      }), { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    const contentType = upstream.headers.get('content-type') ?? 'image/jpeg';
    if (!contentType.startsWith('image/')) {
      recordFailure(upgradedTarget, parsed.hostname, 415, 'not-an-image');
      return new Response(JSON.stringify({ error: 'not an image', contentType }), {
        status: 415, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const buf = new Uint8Array(await upstream.arrayBuffer());
    cacheSet(cacheKey, { body: buf, contentType, ts: Date.now() });
    STATS.misses++;
    STATS.hostMisses[parsed.hostname] = (STATS.hostMisses[parsed.hostname] ?? 0) + 1;
    console.log(`[image-proxy] CACHE MISS ${parsed.hostname} ${parsed.pathname} (${buf.byteLength}b)`);

    return new Response(buf, {
      status: 200,
      headers: {
        ...corsHeaders,
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400, s-maxage=604800, immutable',
        'X-Proxy-Cache': 'MISS',
      },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});