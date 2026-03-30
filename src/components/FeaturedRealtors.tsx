import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import beckyImg from "@/assets/becky-zhou-hill.jpg";
import raphaelleImg from "@/assets/raphaelle-beaudoin.jpg";

const realtors = [
  {
    name: "Becky Zhou Hill",
    region: "Surrey · White Rock",
    tagline: "Premier luxury specialist for the South Fraser corridor.",
    portrait: beckyImg,
    link: "/realtor/becky-zhou-hill",
    specialties: ["Waterfront", "New Construction", "Luxury Condos"],
  },
  {
    name: "Raphaelle Beaudoin",
    region: "Chilliwack · Abbotsford",
    tagline: "Eastern Fraser Valley's most trusted luxury listing agent.",
    portrait: raphaelleImg,
    link: "/realtor/raphaelle-beaudoin",
    specialties: ["Acreage Estates", "Heritage Homes", "Farm Properties"],
  },
];

const FeaturedRealtors = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="font-body text-xs tracking-[5px] uppercase text-primary font-bold mb-3">
          Fraser Valley
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-black text-foreground leading-none">
          Featured Realtors
        </h2>
        <p className="font-body text-base text-muted-foreground mt-3 max-w-lg">
          Our premier agents serving the Fraser Valley's most prestigious communities.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {realtors.map((agent, i) => (
          <motion.div
            key={agent.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <Link
              to={agent.link}
              className="group block border border-border hover:border-primary/40 transition-colors duration-500"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Portrait */}
                <div className="w-full sm:w-48 h-56 sm:h-auto shrink-0 overflow-hidden bg-card">
                  <img
                    src={agent.portrait}
                    alt={agent.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
                    loading="lazy"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      <span className="font-body text-[11px] tracking-[3px] uppercase text-primary font-semibold">
                        {agent.region}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                      {agent.name}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {agent.tagline}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {agent.specialties.map((s) => (
                        <span
                          key={s}
                          className="font-body text-[10px] tracking-wider uppercase border border-border px-3 py-1.5 text-foreground/50"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-6 text-primary font-body text-xs font-bold tracking-[2px] uppercase group-hover:gap-3 transition-all duration-300">
                    View Profile
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedRealtors;
