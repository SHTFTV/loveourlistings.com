const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

function extractFromXml(xml: string, tag: string): string {
  const regex = new RegExp(`<${tag}[^>]*>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${tag}>`, "i");
  const match = xml.match(regex);
  return match ? match[1].trim() : "";
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const feedUrl = url.searchParams.get("feed") || "https://www.mansionglobal.com/rss/luxury-real-estate-news";
    const limit = parseInt(url.searchParams.get("limit") || "3", 10);

    const response = await fetch(feedUrl, {
      headers: { "User-Agent": "LuxuryHeartPortfolio/1.0" },
    });

    if (!response.ok) {
      return new Response(JSON.stringify({ error: `Feed returned ${response.status}` }), {
        status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const xml = await response.text();
    const items: Array<{ title: string; link: string; summary: string; imageUrl: string }> = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/gi;
    let match;

    while ((match = itemRegex.exec(xml)) !== null && items.length < limit) {
      const itemXml = match[1];
      const title = extractFromXml(itemXml, "title");
      let link = extractFromXml(itemXml, "link");
      if (!link) {
        const linkMatch = itemXml.match(/<link[^>]*href="([^"]+)"/);
        if (linkMatch) link = linkMatch[1];
      }
      const summary = extractFromXml(itemXml, "description").replace(/<[^>]+>/g, "").substring(0, 200);
      const mediaMatch = itemXml.match(/<media:content[^>]*url="([^"]+)"/);
      const enclosureMatch = itemXml.match(/<enclosure[^>]*url="([^"]+)"/);
      const imageUrl = mediaMatch?.[1] || enclosureMatch?.[1] || "";

      if (title && link) items.push({ title, link, summary, imageUrl });
    }

    return new Response(JSON.stringify({ items }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
