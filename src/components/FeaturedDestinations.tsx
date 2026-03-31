import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const destinations = [
  {
    name: "Waterfront Estates",
    badge: "WATERFRONT",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    description: "Oceanfront mansions, lakeside retreats, and beachfront estates along the world's most exclusive coastlines.",
    path: "/destinations/waterfront",
  },
  {
    name: "Ski Villages",
    badge: "SKI & ALPINE",
    image: "https://images.unsplash.com/photo-1520984032042-162d526883e0?w=800&q=80",
    description: "Ski-in/ski-out chalets and alpine luxury homes in Whistler, Aspen, St. Moritz, and beyond.",
    path: "/destinations/ski-villages",
  },
  {
    name: "Wine Country",
    badge: "VINEYARD LIVING",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80",
    description: "Vineyard estates and luxury country homes in Napa Valley, Okanagan, Tuscany, and Bordeaux.",
    path: "/destinations/wine-country",
  },
  {
    name: "Island Retreats",
    badge: "ISLAND & TROPICAL",
    image: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=800&q=80",
    description: "Private island estates and tropical luxury in the Caribbean, Maldives & Hawaii.",
    path: "/destinations/island-retreats",
  },
];

const FeaturedDestinations = () => {
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
            Luxury Homes by Destination
          </h2>
          <a href="#" className="font-body text-xs text-primary hover:underline tracking-wider uppercase">
            View All Destinations →
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {destinations.map((dest, i) => (
            <Link key={i} to={dest.path}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden h-[200px] lg:h-[220px] bg-card">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
                    loading="lazy"
                  />
                  <span className="absolute bottom-2 left-2 right-2 bg-primary/90 text-primary-foreground font-body text-[10px] font-bold tracking-wider uppercase text-center py-1.5 px-2">
                    {dest.badge}
                  </span>
                </div>
                <div className="pt-3 pb-2">
                  <p className="font-display text-sm font-bold text-foreground">{dest.name}</p>
                  <p className="font-body text-xs text-muted-foreground mt-0.5 line-clamp-2">{dest.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedDestinations;
