import { motion } from "framer-motion";

const listings = [
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    price: "$58,800,000 CAD",
    agent: "Malcolm Hasman — Angell, Hasman & Associates",
    location: "West Vancouver, BC",
    badge: "WATERFRONT ESTATE",
    url: "https://www.buywaterfrontcanada.com/real-estate-news/canadas-most-expensive-home-for-sale-a-588m-oceanfront-estate-in-west-vancouver-listed-by-malcolm-hasman",
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    price: "$49,950,000 CAD",
    agent: "Sotheby's International Realty Canada",
    location: "Bridle Path, Toronto, ON",
    badge: null,
    url: "https://sothebysrealty.ca/en/property/ontario/greater-toronto-area-real-estate/toronto",
  },
  {
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
    price: "$39,980,000 CAD",
    agent: "McLeod Bovell — Angell, Hasman & Associates",
    location: "Bellevue Ave, West Vancouver, BC",
    badge: null,
    url: "https://dailyhive.com/vancouver/west-vancouver-liminal-house-assessed-2642-bellevue",
  },
  {
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    price: "$19,800,000 CAD",
    agent: "RE/MAX — Morrow Group",
    location: "First Shaughnessy, Vancouver, BC",
    badge: null,
    url: "https://mattmorrow.ca/recip.html/listing.r2959586-3538-osler-street-vancouver-v6h-2w3.104029488",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    price: "$135,000,000 USD",
    agent: "Private Beverly Hills — Denise Moreno",
    location: "Beverly Hills, CA",
    badge: null,
    url: "https://privatebeverlyhills.com/home-search/listings/1827339949656712211-1261-Angelo-Dr",
  },
  {
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    price: "$99,900,000 USD",
    agent: "Josh Flagg — Compass",
    location: "Bel Air, Los Angeles, CA",
    badge: null,
    url: "https://www.compass.com/agents/josh-flagg/",
  },
  {
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    price: "$79,000,000 USD",
    agent: "Windermere Real Estate",
    location: "Bellevue, WA",
    badge: "MOST EXPENSIVE IN WA",
    url: "https://mynorthwest.com/lifestyle/bellevue-mansion-most-expensive/4156328",
  },
  {
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
    price: "$29,800,000 CAD",
    agent: "Sotheby's International Realty Canada",
    location: "Bridle Path, Toronto, ON",
    badge: null,
    url: "https://www.realosophy.com/listing/71-the-bridle-path-bridle-path-toronto/c4833856",
  },
];

const NoteworthyListings = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground italic">
            Ultra-Luxury Homes Recently Listed
          </h2>
          <a href="#" className="font-body text-xs text-primary hover:underline tracking-wider uppercase">
            View Recent Additions →
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {listings.map((listing, i) => (
            <motion.a
              key={i}
              href={listing.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group cursor-pointer block"
            >
              <div className="relative overflow-hidden h-[200px] lg:h-[220px] bg-card">
                <img
                  src={listing.image}
                  alt={listing.location}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
                  loading="lazy"
                />
                {listing.badge && (
                  <span className="absolute bottom-2 left-2 right-2 bg-primary/90 text-primary-foreground font-body text-[10px] font-bold tracking-wider uppercase text-center py-1.5 px-2">
                    {listing.badge}
                  </span>
                )}
              </div>
              <div className="pt-3 pb-4">
                <p className="font-display text-base font-bold text-foreground">{listing.price}</p>
                <p className="font-body text-xs text-primary mt-0.5">{listing.agent}</p>
                <p className="font-body text-xs text-muted-foreground">{listing.location}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default NoteworthyListings;
