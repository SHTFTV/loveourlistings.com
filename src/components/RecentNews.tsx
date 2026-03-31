import { motion } from "framer-motion";
import { useLuxuryNews } from "@/hooks/use-luxury-news";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const fallbackPress = [
  { title: "George Clooney Lists Lake Como Estate for $100M", date: "Mar 28, 2026", source: "Mansion Global" },
  { title: "BC Housing Market Shows Signs of Recovery in Q1 2026", date: "Mar 25, 2026", source: "BC Real Estate Association" },
  { title: "Heart-Shaped Signs Expand to Dubai's Palm Jumeirah", date: "Mar 22, 2026", source: "Luxury Heart Portfolio" },
  { title: "Surrey's Luxury Market Sees 15% Growth in Waterfront Sales", date: "Mar 20, 2026", source: "Fraser Valley Real Estate Board" },
  { title: "California Outdoor Properties Announces New Luxury Listings", date: "Mar 18, 2026", source: "Sotheby's International" },
];

const fallbackBlog = [
  { title: "Luxury Waterfront Living on Kiawah Island, SC", date: "Mar 28, 2026", source: "Sotheby's Realty" },
  { title: "Just Listed: 11786 Bay Drive, White Rock, BC", date: "Mar 26, 2026", source: "Becky Zhou Hill" },
  { title: "Inside the $45M Modernist Compound in Beverly Hills", date: "Mar 24, 2026", source: "Robb Report" },
  { title: "A Post-Modernist Showpiece by Signature Homes in Abbotsford", date: "Mar 21, 2026", source: "Raphaelle Beaudoin" },
  { title: "What's Next for Vancouver's Luxury Condo Market?", date: "Mar 19, 2026", source: "Knight Frank" },
];

const categories = [
  { value: "all", label: "All" },
  { value: "global", label: "Global" },
  { value: "waterfront", label: "Waterfront" },
  { value: "ski", label: "Ski & Mountain" },
  { value: "wine_country", label: "Wine Country" },
  { value: "island", label: "Islands" },
  { value: "market_trends", label: "Market Trends" },
];

const NewsColumn = ({ title, items, buttonLabel }: { title: string; items: Array<{ title: string; date: string; source: string; link?: string }>; buttonLabel: string }) => (
  <div>
    <h2 className="font-display text-xl font-bold text-foreground mb-6 italic">{title}</h2>
    <div className="space-y-4">
      {items.map((item, i) => (
        <a
          key={i}
          href={item.link || "#"}
          target={item.link ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="group block cursor-pointer border-b border-border pb-3"
        >
          <p className="font-body text-sm text-foreground group-hover:text-primary transition-colors leading-snug">
            {item.title}
          </p>
          <p className="font-body text-[11px] text-muted-foreground mt-1">
            ⏐ {item.date} — {item.source}
          </p>
        </a>
      ))}
    </div>
    <button className="mt-5 bg-primary text-primary-foreground font-body text-xs font-bold tracking-wider uppercase px-5 py-2.5 hover:opacity-90 transition-opacity">
      {buttonLabel}
    </button>
  </div>
);

const RecentNews = () => {
  const { data: liveNews, isLoading } = useLuxuryNews("all", 10);

  const hasLiveData = liveNews && liveNews.length > 0;

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  // Split live data into two columns
  const pressItems = hasLiveData
    ? liveNews.slice(0, 5).map((n) => ({ title: n.title, date: formatDate(n.published_at), source: n.source, link: n.link }))
    : fallbackPress.map((p) => ({ ...p, link: undefined }));

  const blogItems = hasLiveData
    ? liveNews.slice(5, 10).map((n) => ({ title: n.title, date: formatDate(n.published_at), source: n.source, link: n.link }))
    : fallbackBlog.map((b) => ({ ...b, link: undefined }));

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      {/* Category tabs */}
      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="bg-transparent gap-1 flex-wrap h-auto">
          {categories.map((cat) => (
            <TabsTrigger
              key={cat.value}
              value={cat.value}
              className="font-body text-xs uppercase tracking-wider data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2"
            >
              {cat.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((cat) => (
          <TabsContent key={cat.value} value={cat.value}>
            <CategoryNews category={cat.value} />
          </TabsContent>
        ))}
      </Tabs>

      {/* Fallback two-column layout when no tabs selected */}
      {!hasLiveData && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <NewsColumn title="Recent Press Releases" items={pressItems} buttonLabel="All Press Releases" />
          <NewsColumn title="Recent Blog Posts" items={blogItems} buttonLabel="All Blog Posts" />
        </motion.div>
      )}
    </section>
  );
};

const CategoryNews = ({ category }: { category: string }) => {
  const { data, isLoading } = useLuxuryNews(category, 10);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6">
        {[0, 1].map((col) => (
          <div key={col} className="space-y-4">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="border-b border-border pb-3 animate-pulse">
                <div className="h-4 bg-muted rounded w-3/4 mb-2" />
                <div className="h-3 bg-muted rounded w-1/2" />
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <p className="font-body text-sm text-muted-foreground mt-6">
        No articles in this category yet. Content will appear once RSS feeds are synced.
      </p>
    );
  }

  const half = Math.ceil(data.length / 2);
  const formatDate = (d: string | null) => d ? new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6"
    >
      <NewsColumn
        title="Latest News"
        items={data.slice(0, half).map((n) => ({ title: n.title, date: formatDate(n.published_at), source: n.source, link: n.link }))}
        buttonLabel="View All"
      />
      <NewsColumn
        title="More Stories"
        items={data.slice(half).map((n) => ({ title: n.title, date: formatDate(n.published_at), source: n.source, link: n.link }))}
        buttonLabel="View All"
      />
    </motion.div>
  );
};

export default RecentNews;
