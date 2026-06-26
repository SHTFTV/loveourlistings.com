import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface RssPost {
  id: string;
  source: string;
  title: string;
  link: string;
  description: string | null;
  image_url: string | null;
  published_at: string | null;
}

export function useLuxuryRss(limit = 6, source?: "sothebys" | "robb-report") {
  const [posts, setPosts] = useState<RssPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      let q = supabase
        .from("rss_posts")
        .select("id, source, title, link, description, image_url, published_at")
        .order("published_at", { ascending: false, nullsFirst: false })
        .limit(limit);
      if (source) q = q.eq("source", source);
      const { data } = await q;
      if (cancelled) return;
      if (data && data.length > 0) {
        setPosts(data as RssPost[]);
      } else {
        // trigger first ingestion, then refetch once
        try {
          await supabase.functions.invoke("ingest-luxury-rss");
          let q2 = supabase
            .from("rss_posts")
            .select("id, source, title, link, description, image_url, published_at")
            .order("published_at", { ascending: false, nullsFirst: false })
            .limit(limit);
          if (source) q2 = q2.eq("source", source);
          const { data: data2 } = await q2;
          if (!cancelled && data2) setPosts(data2 as RssPost[]);
        } catch {
          // swallow — UI handles empty
        }
      }
      if (!cancelled) setLoading(false);
    })();
    return () => { cancelled = true; };
  }, [limit, source]);

  return { posts, loading };
}