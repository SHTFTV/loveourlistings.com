import { motion } from "framer-motion";

const pressReleases = [
  {
    title: "George Clooney Lists Lake Como Estate for $100M",
    date: "Mar 28, 2026",
    source: "Mansion Global",
  },
  {
    title: "BC Housing Market Shows Signs of Recovery in Q1 2026",
    date: "Mar 25, 2026",
    source: "BC Real Estate Association",
  },
  {
    title: "Heart-Shaped Signs Expand to Dubai's Palm Jumeirah",
    date: "Mar 22, 2026",
    source: "Luxury Heart Portfolio",
  },
  {
    title: "Surrey's Luxury Market Sees 15% Growth in Waterfront Sales",
    date: "Mar 20, 2026",
    source: "Fraser Valley Real Estate Board",
  },
  {
    title: "California Outdoor Properties Announces New Luxury Listings",
    date: "Mar 18, 2026",
    source: "Sotheby's International",
  },
];

const blogPosts = [
  {
    title: "Luxury Waterfront Living on Kiawah Island, SC",
    date: "Mar 28, 2026",
    source: "Sotheby's Realty",
  },
  {
    title: "Just Listed: 11786 Bay Drive, White Rock, BC",
    date: "Mar 26, 2026",
    source: "Becky Zhou Hill",
  },
  {
    title: "Inside the $45M Modernist Compound in Beverly Hills",
    date: "Mar 24, 2026",
    source: "Robb Report",
  },
  {
    title: "A Post-Modernist Showpiece by Signature Homes in Abbotsford",
    date: "Mar 21, 2026",
    source: "Raphaelle Beaudoin",
  },
  {
    title: "What's Next for Vancouver's Luxury Condo Market?",
    date: "Mar 19, 2026",
    source: "Knight Frank",
  },
];

const RecentNews = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        {/* Press Releases */}
        <div>
          <h2 className="font-display text-xl font-bold text-foreground mb-6 italic">
            Recent Press Releases
          </h2>
          <div className="space-y-4">
            {pressReleases.map((item, i) => (
              <div key={i} className="group cursor-pointer border-b border-border pb-3">
                <p className="font-body text-sm text-foreground group-hover:text-primary transition-colors leading-snug">
                  {item.title}
                </p>
                <p className="font-body text-[11px] text-muted-foreground mt-1">
                  ⏐ {item.date} — {item.source}
                </p>
              </div>
            ))}
          </div>
          <button className="mt-5 bg-primary text-primary-foreground font-body text-xs font-bold tracking-wider uppercase px-5 py-2.5 hover:opacity-90 transition-opacity">
            All Press Releases
          </button>
        </div>

        {/* Blog Posts */}
        <div>
          <h2 className="font-display text-xl font-bold text-foreground mb-6 italic">
            Recent Blog Posts
          </h2>
          <div className="space-y-4">
            {blogPosts.map((item, i) => (
              <div key={i} className="group cursor-pointer border-b border-border pb-3">
                <p className="font-body text-sm text-foreground group-hover:text-primary transition-colors leading-snug">
                  {item.title}
                </p>
                <p className="font-body text-[11px] text-muted-foreground mt-1">
                  ⏐ {item.date} — {item.source}
                </p>
              </div>
            ))}
          </div>
          <button className="mt-5 bg-primary text-primary-foreground font-body text-xs font-bold tracking-wider uppercase px-5 py-2.5 hover:opacity-90 transition-opacity">
            All Blog Posts
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default RecentNews;
