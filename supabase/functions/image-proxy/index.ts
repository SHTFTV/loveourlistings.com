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
      return new Response(JSON.stringify({ error: 'host not allowed', host: parsed.hostname }), {
        status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
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
      return new Response(JSON.stringify({
        error: 'upstream fetch failed',
        status: upstream?.status ?? 0,
        message: String(lastErr ?? ''),
      }), { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    const contentType = upstream.headers.get('content-type') ?? 'image/jpeg';
    if (!contentType.startsWith('image/')) {
      return new Response(JSON.stringify({ error: 'not an image', contentType }), {
        status: 415, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(upstream.body, {
      status: 200,
      headers: {
        ...corsHeaders,
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400, s-maxage=604800, immutable',
      },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});