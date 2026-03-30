import { motion } from "framer-motion";
import { Search } from "lucide-react";

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
    <section className="pt-24 pb-8 bg-background">
      {/* Search Bar */}
      <div className="max-w-4xl mx-auto px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center border border-border bg-card"
        >
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
        </motion.div>
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
