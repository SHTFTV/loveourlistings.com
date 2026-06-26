import { useLuxuryRss } from "@/hooks/useLuxuryRss";

interface Props {
  title?: string;
  limit?: number;
  source?: "sothebys" | "robb-report";
}

const sourceLabel: Record<string, string> = {
  "sothebys": "Sotheby's",
  "robb-report": "Robb Report",
};

const LuxuryNewsFeed = ({ title = "From the Luxury Press", limit = 6, source }: Props) => {
  const { posts, loading } = useLuxuryRss(limit, source);

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-border">
      <div className="flex items-end justify-between mb-8">
        <h2 className="font-display text-2xl md:text-3xl font-bold italic text-foreground">{title}</h2>
        <span className="font-body text-xs tracking-[3px] uppercase text-muted-foreground">Live • Sotheby's & Robb Report</span>
      </div>
      {loading && posts.length === 0 ? (
        <p className="font-body text-sm text-muted-foreground">Loading latest luxury news…</p>
      ) : posts.length === 0 ? (
        <p className="font-body text-sm text-muted-foreground">No posts yet — the feed will populate shortly.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <a key={p.id} href={p.link} target="_blank" rel="noopener noreferrer" className="group block border border-border hover:border-primary/40 transition-all">
              {p.image_url && (
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img src={p.image_url} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              )}
              <div className="p-5">
                <p className="font-body text-[10px] tracking-[3px] uppercase text-primary mb-2">{sourceLabel[p.source] ?? p.source}</p>
                <h3 className="font-display text-lg font-bold text-foreground leading-tight mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                {p.description && <p className="font-body text-xs text-muted-foreground line-clamp-3">{p.description}</p>}
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
};

export default LuxuryNewsFeed;