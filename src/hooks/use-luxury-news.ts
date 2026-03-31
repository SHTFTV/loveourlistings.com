import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export type LuxuryNewsItem = {
  id: string;
  title: string;
  link: string;
  summary: string | null;
  category: string;
  source: string;
  image_url: string | null;
  published_at: string | null;
};

export function useLuxuryNews(category?: string, limit = 10) {
  return useQuery({
    queryKey: ["luxury-news", category, limit],
    queryFn: async () => {
      let query = (supabase as any)
        .from("luxury_news")
        .select("*")
        .order("published_at", { ascending: false })
        .limit(limit);

      if (category && category !== "all") {
        query = query.eq("category", category);
      }

      const { data, error } = await query;
      if (error) throw error;
      return (data || []) as LuxuryNewsItem[];
    },
  });
}

export async function triggerFeedFetch() {
  const { data, error } = await supabase.functions.invoke("fetch-luxury-feeds");
  if (error) throw error;
  return data;
}
