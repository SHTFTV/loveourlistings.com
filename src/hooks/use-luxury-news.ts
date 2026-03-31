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
    queryFn: async (): Promise<LuxuryNewsItem[]> => {
      // luxury_news table not yet created — return empty to use fallback data
      return [];
    },
  });
}

export async function triggerFeedFetch() {
  const { data, error } = await supabase.functions.invoke("fetch-luxury-feeds");
  if (error) throw error;
  return data;
}
