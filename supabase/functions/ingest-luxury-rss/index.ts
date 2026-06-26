import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const FEEDS = [
  { source: "sothebys",    url: "https://www.sothebysrealty.com/extraordinary-living-blog/feed" },
  { source: "robb-report", url: "https://robbreport.com/shelter/feed/" },
];

function pick(xml: string, tag: string): string | null {
  const m = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  if (!m) return null;
  return m[1].replace(/<!\[CDATA\[|\]\]>/g, "").trim();
}

function pickAttr(xml: string, tag: string, attr: string): string | null {
  const m = xml.match(new RegExp(`<${tag}[^>]*\\s${attr}=["']([^"']+)["']`, "i"));
  return m ? m[1] : null;
}

function parseItems(xml: string) {
  const items: any[] = [];
  const re = /<item[\s\S]*?<\/item>/gi;
  let m;
  while ((m = re.exec(xml)) !== null) {
    const block = m[0];
    const title = pick(block, "title") || "Untitled";
    const link = pick(block, "link") || "";
    const guid = pick(block, "guid") || link || title;
    const description = pick(block, "description") || "";
    const pubDate = pick(block, "pubDate");
    const media = pickAttr(block, "media:content", "url") || pickAttr(block, "enclosure", "url");
    const imgMatch = description.match(/<img[^>]+src=["']([^"']+)["']/i);
    const image_url = media || (imgMatch ? imgMatch[1] : null);
    const catRe = /<category[^>]*>([\s\S]*?)<\/category>/gi;
    const cats: string[] = [];
    let c;
    while ((c = catRe.exec(block)) !== null) {
      cats.push(c[1].replace(/<!\[CDATA\[|\]\]>/g, "").trim());
    }
    items.push({
      guid,
      title,
      link,
      description: description.replace(/<[^>]+>/g, "").slice(0, 600),
      image_url,
      published_at: pubDate ? new Date(pubDate).toISOString() : null,
      categories: cats,
    });
  }
  return items;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );
    const summary: Record<string, number> = {};
    for (const f of FEEDS) {
      try {
        const r = await fetch(f.url, { headers: { "User-Agent": "LoveOurListingsBot/1.0" } });
        if (!r.ok) { summary[f.source] = 0; continue; }
        const xml = await r.text();
        const items = parseItems(xml).slice(0, 20).map((i) => ({ ...i, source: f.source }));
        if (items.length) {
          const { error } = await supabase.from("rss_posts").upsert(items, { onConflict: "source,guid" });
          if (error) console.error(f.source, error);
        }
        summary[f.source] = items.length;
      } catch (e) {
        console.error(f.source, e);
        summary[f.source] = 0;
      }
    }
    return new Response(JSON.stringify({ ok: true, summary }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: String(e) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});