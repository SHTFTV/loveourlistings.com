import { motion } from "framer-motion";
import { Search } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import siteLogo from "@/assets/logo.png";

const featuredListings = [
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    price: "$2,795,000 CAD",
    agent: "Becky Zhou Hill",
    location: "White Rock, BC, Canada",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    price: "$2,375,000 CAD",
    agent: "Raphaelle Beaudoin",
    location: "Abbotsford, BC, Canada",
  },
  {
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    price: "$4,175,000 CAD",
    agent: "Becky Zhou Hill",
    location: "Surrey, BC, Canada",
  },
  {
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    price: "$12,000,000 USD",
    agent: "Sotheby's International",
    location: "Vancouver, BC, Canada",
  },
];

const HeroSearch = () => {
  return (
    <section className="relative bg-background">
      {/* Video Hero */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src={heroVideo.url}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        {/* Hero Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-primary text-5xl md:text-6xl mb-3">♥</div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none">
              LUXURY HEART
            </h1>
            <p className="font-body text-xs tracking-[4px] uppercase text-white/60 mt-3">
              The Fraser Valley's Premier Real Estate &amp; Lifestyle Portfolio
            </p>
          </motion.div>

          {/* Search Bar overlaid on video */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 w-full max-w-3xl"
          >
            <div className="flex items-center bg-white/95 backdrop-blur-sm shadow-2xl">
              <select className="bg-transparent text-foreground font-body text-xs tracking-wider uppercase px-5 py-4 border-r border-border outline-none cursor-pointer">
                <option>Homes For Sale</option>
                <option>Homes For Rent</option>
              </select>
              <div className="flex-1 flex items-center px-4">
                <Search className="w-4 h-4 text-muted-foreground mr-3 shrink-0" />
                <input
                  type="text"
                  placeholder="Search by location, company, or description"
                  className="w-full bg-transparent text-foreground font-body text-sm py-4 outline-none placeholder:text-muted-foreground"
                />
              </div>
              <button className="bg-primary text-primary-foreground font-body text-xs font-bold tracking-[2px] uppercase px-8 py-4 hover:opacity-90 transition-opacity">
                Search
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Listings Row */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredListings.map((listing, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden h-[200px] lg:h-[240px] bg-card">
                <img
                  src={listing.image}
                  alt={listing.location}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
                  loading="lazy"
                />
              </div>
              <div className="pt-3 pb-4">
                <p className="font-display text-lg font-bold text-foreground">{listing.price}</p>
                <p className="font-body text-xs text-primary mt-0.5">{listing.agent}</p>
                <p className="font-body text-xs text-muted-foreground mt-0.5">{listing.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSearch;
