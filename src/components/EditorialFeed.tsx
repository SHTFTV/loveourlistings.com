import { motion } from "framer-motion";
import FeedCard from "./FeedCard";
import AdCard from "./AdCard";

import feed1 from "@/assets/feed-1.jpg";
import feed2 from "@/assets/feed-2.jpg";
import feed3 from "@/assets/feed-3.jpg";
import feed4 from "@/assets/feed-4.jpg";

const articles = [
  {
    image: feed1,
    source: "Sotheby's",
    category: "Global Listings",
    title: "Sky-High Living: The World's Most Exclusive Penthouses",
    excerpt: "From Manhattan to Monaco, these residences redefine what it means to live at the top.",
  },
  {
    image: feed2,
    source: "Robb Report",
    category: "Celebrity Homes",
    title: "Mediterranean Dream: A Cliffside Villa in Mallorca",
    excerpt: "This oceanfront estate blends Balearic charm with contemporary luxury across 12,000 sq ft.",
  },
  {
    image: feed3,
    source: "Sotheby's",
    category: "Global Listings",
    title: "Modernist Masterpiece in Beverly Hills",
    excerpt: "A glass-and-steel residence that blurs the line between indoor and outdoor living.",
  },
  {
    image: feed4,
    source: "Robb Report",
    category: "Celebrity Homes",
    title: "French Château Living in the Heart of Connecticut",
    excerpt: "Old-world elegance meets new-world comfort in this 18-acre estate with formal gardens.",
  },
];

const EditorialFeed = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-3">
          The Edit
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-foreground">
          Curated Luxury
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.slice(0, 2).map((a, i) => (
          <FeedCard key={i} index={i} {...a} />
        ))}
        <AdCard />
        {articles.slice(2).map((a, i) => (
          <FeedCard key={i + 2} index={i + 3} {...a} />
        ))}
      </div>
    </section>
  );
};

export default EditorialFeed;
