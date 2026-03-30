import { motion } from "framer-motion";

const listings = [
  {
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
    price: "$295,000,000 USD",
    agent: "Mauricio Umansky — The Agency",
    location: "Bel Air, Los Angeles, CA",
    badge: null,
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    price: "$187,500,000 USD",
    agent: "Ryan Serhant — SERHANT.",
    location: "Manhattan, New York, NY",
    badge: null,
  },
  {
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    price: "€180,000,000 EUR",
    agent: "Knight Frank",
    location: "Cap Ferrat, Côte d'Azur, France",
    badge: "LUXURY PROPERTY AUCTION",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    price: "$108,000,000 USD",
    agent: "Compass — Josh Flagg",
    location: "Holmby Hills, Los Angeles, CA",
    badge: null,
  },
  {
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    price: "$85,000,000 USD",
    agent: "Sotheby's International Realty",
    location: "Palm Beach, FL",
    badge: null,
  },
  {
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    price: "$78,000,000 USD",
    agent: "Douglas Elliman",
    location: "Miami Beach, FL",
    badge: null,
  },
  {
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
    price: "$68,500,000 USD",
    agent: "Christie's International Real Estate",
    location: "Aspen, CO",
    badge: null,
  },
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    price: "$59,000,000 USD",
    agent: "Hilton & Hyland",
    location: "Malibu, CA",
    badge: null,
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
            Recent Noteworthy Listings
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
              className="group cursor-pointer"
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
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default NoteworthyListings;
