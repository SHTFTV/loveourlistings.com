import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ExternalLink, Newspaper } from "lucide-react";

type FeedItem = {
  title: string;
  link: string;
  summary: string;
  imageUrl: string;
};

function useLiveFeed() {
  return useQuery({
    queryKey: ["luxury-lifestyle-feed"],
    queryFn: async () => {
      const { data, error } = await supabase.functions.invoke("proxy-rss", {
        body: null,
        method: "GET",
      });
      if (error) throw error;
      return (data?.items || []) as FeedItem[];
    },
    staleTime: 1000 * 60 * 30, // 30 min cache
  });
}

const LuxuryLifestyle = () => {
  const { data: articles, isLoading } = useLiveFeed();

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Newspaper className="h-6 w-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Luxury Lifestyle
          </h2>
        </div>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          The latest from the world of luxury real estate — powered live from Mansion Global.
        </p>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-xl border bg-card p-6 animate-pulse">
                <div className="h-5 bg-muted rounded w-3/4 mb-4" />
                <div className="h-4 bg-muted rounded w-full mb-2" />
                <div className="h-4 bg-muted rounded w-2/3" />
              </div>
            ))}
          </div>
        ) : articles && articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article, idx) => (
              <a
                key={idx}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border bg-card p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/30 flex flex-col"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2">
                  {article.title}
                </h3>
                {article.summary && (
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                    {article.summary}
                  </p>
                )}
                <div className="flex items-center gap-1.5 text-xs text-primary font-medium mt-auto">
                  Read on Mansion Global
                  <ExternalLink className="h-3 w-3" />
                </div>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground italic">No articles available right now.</p>
        )}

        <div className="mt-10 p-6 rounded-xl border border-primary/20 bg-primary/5 text-center">
          <p className="text-sm text-muted-foreground mb-1">
            Want to feature your listing or advertise here?
          </p>
          <a
            href="mailto:colin@industryarmymarketing.com"
            className="text-primary font-semibold hover:underline"
          >
            colin@industryarmymarketing.com
          </a>
          <span className="text-muted-foreground text-sm mx-2">•</span>
          <span className="text-sm text-muted-foreground">PayPal accepted</span>
        </div>
      </div>
    </section>
  );
};

export default LuxuryLifestyle;
