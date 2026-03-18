import FeedCard from "./FeedCard";
import AdCard from "./AdCard";

import feed1 from "@/assets/feed-1.jpg";
import feed2 from "@/assets/feed-2.jpg";
import feed3 from "@/assets/feed-3.jpg";
import feed4 from "@/assets/feed-4.jpg";
import heroImage from "@/assets/hero-estate.jpg";

const articles = [
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    category: "Celebrity Estates",
    title: "Inside the $22M Hollywood Hills Modernist Retreat",
    excerpt: "Clean lines and panoramic views define this architectural masterpiece now hitting the market...",
  },
  {
    image: feed1,
    category: "Mansion Global",
    title: "Sky-High Living: The World's Most Exclusive Penthouses",
    excerpt: "From Manhattan to Monaco, these residences redefine what it means to live at the top.",
  },
  {
    image: feed2,
    category: "Architectural Digest",
    title: "Mediterranean Dream: A Cliffside Villa in Mallorca",
    excerpt: "This oceanfront estate blends Balearic charm with contemporary luxury across 12,000 sq ft.",
  },
  {
    image: heroImage,
    category: "Sotheby's",
    title: "Shaughnessy Estate: Vancouver's Crown Jewel",
    excerpt: "A prime example of boutique branding in the Vancouver luxury market with grand columned entry.",
  },
  {
    image: feed3,
    category: "Robb Report",
    title: "Modernist Masterpiece in Beverly Hills",
    excerpt: "A glass-and-steel residence that blurs the line between indoor and outdoor living.",
  },
  {
    image: feed4,
    category: "Mansion Global",
    title: "French Château Living in the Heart of Connecticut",
    excerpt: "Old-world elegance meets new-world comfort in this 18-acre estate with formal gardens.",
  },
];

const EditorialFeed = () => {
  // Insert ad card after every 3rd article (every 4th grid item)
  const items: { type: "article" | "ad"; data?: (typeof articles)[0]; index: number }[] = [];
  let articleIdx = 0;

  for (let i = 0; i < articles.length + Math.floor(articles.length / 3); i++) {
    if ((i + 1) % 4 === 0) {
      items.push({ type: "ad", index: i });
    } else if (articleIdx < articles.length) {
      items.push({ type: "article", data: articles[articleIdx], index: i });
      articleIdx++;
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {items.map((item, i) =>
          item.type === "ad" ? (
            <AdCard key={`ad-${i}`} />
          ) : (
            <FeedCard
              key={i}
              index={i}
              image={item.data!.image}
              category={item.data!.category}
              title={item.data!.title}
              excerpt={item.data!.excerpt}
            />
          )
        )}
      </div>
    </section>
  );
};

export default EditorialFeed;
