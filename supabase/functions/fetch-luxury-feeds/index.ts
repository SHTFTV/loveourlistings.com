import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const RSS_FEEDS = [
  {
    url: "https://www.mansionglobal.com/rss/luxury-real-estate-news",
    source: "Mansion Global",
    defaultCategory: "global",
  },
  {
    url: "https://www.sothebysrealty.com/blog/feed/",
    source: "Sotheby's International Realty",
    defaultCategory: "global",
  },
  {
    url: "https://www.christiesrealestate.com/blog/feed/",
    source: "Christie's Real Estate",
    defaultCategory: "global",
  },
];

// Category keywords for auto-tagging
const CATEGORY_KEYWORDS: Record<string, string[]> = {
  waterfront: ["waterfront", "oceanfront", "beachfront", "lakefront", "coastal", "marina", "harbor", "seaside"],
  ski: ["ski", "mountain", "alpine", "chalet", "snow", "resort", "slopes", "whistler", "aspen", "vail"],
  wine_country: ["wine", "vineyard", "winery", "napa", "sonoma", "tuscany", "bordeaux"],
  island: ["island", "tropical", "caribbean", "bahamas", "hawaii", "maldives", "fiji"],
  market_trends: ["market", "trend", "forecast", "sales", "growth", "investment", "price"],
};

function categorize(title: string, summary: string): string {
  const text = `${title} ${summary}`.toLowerCase();
  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    if (keywords.some((kw) => text.includes(kw))) return category;
  }
  return "global";
}

function extractFromXml(xml: string, tag: string): string {
  const regex = new RegExp(`<${tag}[^>]*>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${tag}>`, "i");
  const match = xml.match(regex);
  return match ? match[1].trim() : "";
}

function extractItems(xml: string): Array<{ title: string; link: string; summary: string; pubDate: string; imageUrl: string }> {
  const items: Array<{ title: string; link: string; summary: string; pubDate: string; imageUrl: string }> = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/gi;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const itemXml = match[1];
    const title = extractFromXml(itemXml, "title");
    let link = extractFromXml(itemXml, "link");
    
    // Some feeds put link in a different format
    if (!link) {
      const linkMatch = itemXml.match(/<link[^>]*href="([^"]+)"/);
      if (linkMatch) link = linkMatch[1];
    }

    const summary = extractFromXml(itemXml, "description")
      .replace(/<[^>]+>/g, "") // Strip HTML
      .substring(0, 300);

    const pubDate = extractFromXml(itemXml, "pubDate");

    // Try to find image
    let imageUrl = "";
    const mediaMatch = itemXml.match(/<media:content[^>]*url="([^"]+)"/);
    const enclosureMatch = itemXml.match(/<enclosure[^>]*url="([^"]+)"/);
    const imgMatch = extractFromXml(itemXml, "description").match(/<img[^>]*src="([^"]+)"/);
    imageUrl = mediaMatch?.[1] || enclosureMatch?.[1] || imgMatch?.[1] || "";

    if (title && link) {
      items.push({ title, link, summary, pubDate, imageUrl });
    }
  }

  return items;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    let totalInserted = 0;
    const errors: string[] = [];

    for (const feed of RSS_FEEDS) {
      try {
        console.log(`Fetching: ${feed.url}`);
        const response = await fetch(feed.url, {
          headers: { "User-Agent": "LuxuryHeartPortfolio/1.0" },
        });

        if (!response.ok) {
          errors.push(`${feed.source}: HTTP ${response.status}`);
          continue;
        }

        const xml = await response.text();
        const items = extractItems(xml);
        console.log(`${feed.source}: Found ${items.length} items`);

        for (const item of items.slice(0, 20)) {
          const category = categorize(item.title, item.summary);

          const { error } = await supabase.from("luxury_news").upsert(
            {
              title: item.title,
              link: item.link,
              summary: item.summary,
              category: category !== "global" ? category : feed.defaultCategory,
              source: feed.source,
              image_url: item.imageUrl || null,
              published_at: item.pubDate ? new Date(item.pubDate).toISOString() : new Date().toISOString(),
            },
            { onConflict: "link" }
          );

          if (!error) totalInserted++;
          else if (error.code !== "23505") {
            console.error(`Insert error: ${error.message}`);
          }
        }
      } catch (e) {
        errors.push(`${feed.source}: ${e.message}`);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        inserted: totalInserted,
        errors,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    return new Response(
      JSON.stringify({ error: e.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
