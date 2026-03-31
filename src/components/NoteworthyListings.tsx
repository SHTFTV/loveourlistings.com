import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const listings = [
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    price: "$58,800,000 CAD",
    agent: "Malcolm Hasman — Angell, Hasman & Associates Realty",
    location: "West Vancouver, BC",
    badge: "CANADA'S MOST EXPENSIVE LISTING",
    path: "/listing/west-vancouver-waterfront",
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    price: "$49,950,000 CAD",
    agent: "Sotheby's International Realty Canada",
    location: "Bridle Path, Toronto, ON",
    badge: "TORONTO'S MOST EXPENSIVE",
    path: "/listing/bridle-path-toronto",
  },
  {
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
    price: "$39,980,000 CAD",
    agent: "2642 Bellevue Ave — Architectural Icon",
    location: "Bellevue Ave, West Vancouver, BC",
    badge: "ARCHITECTURAL ICON",
    path: "/listing/bellevue-west-vancouver",
  },
  {
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    price: "$19,800,000 CAD",
    agent: "Matt Morrow — RE/MAX (MLS R2959586)",
    location: "3538 Osler St, First Shaughnessy, Vancouver",
    badge: null,
    path: "/listing/shaughnessy-vancouver",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    price: "$135,000,000 USD",
    agent: "Denise Moreno — Private Beverly Hills",
    location: "1261 Angelo Dr, Beverly Hills, CA 90210",
    badge: "$135M — BEVERLY HILLS",
    path: "/listing/beverly-hills-estate",
  },
  {
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    price: "$99,950,000 USD",
    agent: "Compass — MLS #25520563",
    location: "1200 Bel Air Rd, Los Angeles, CA 90077",
    badge: "$99.95M — BEL AIR",
    path: "/listing/bel-air-estate",
  },
  {
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    price: "$79,000,000 USD",
    agent: "Tere Foster & Moya Skillman — Compass",
    location: "Bellevue, WA 98004",
    badge: "PACIFIC NORTHWEST RECORD",
    path: "/listing/bellevue-washington",
  },
  {
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
    price: "$29,800,000 CAD",
    agent: "Barry Cohen Homes — Re/Max",
    location: "71 The Bridle Path, Toronto, ON",
    badge: null,
    path: "/listing/bridle-path-toronto-2",
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
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link to={listing.path} className="group cursor-pointer block">
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
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default NoteworthyListings;
