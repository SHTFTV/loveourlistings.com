import { motion } from "framer-motion";
import vancouverImage from "@/assets/9bbbf923-25e7-44ee-838e-a881a37445a7.png";

const destinations = [
  {
    name: "White Rock, BC",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  },
  {
    name: "Vancouver",
    image: vancouverImage,
  },
  {
    name: "Abbotsford, BC",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
  },
  {
    name: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
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
            Featured Destinations
          </h2>
          <a href="#" className="font-body text-xs text-primary hover:underline tracking-wider uppercase">
            View All Destinations →
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {destinations.map((dest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden h-[200px] lg:h-[220px] bg-card">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
                  loading="lazy"
                />
              </div>
              <p className="font-display text-sm font-bold text-foreground mt-3">{dest.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedDestinations;
