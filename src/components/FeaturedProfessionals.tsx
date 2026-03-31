import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import beckyImg from "@/assets/becky-zhou-hill.jpg";
import raphaelleImg from "@/assets/raphaelle-beaudoin.jpg";
import mascotImg from "@/assets/9bbbf923-25e7-44ee-838e-a881a37445a7.png";

const professionals = [
  {
    name: "Becky Zhou Hill",
    company: "Premier Luxury Realtor",
    location: "Surrey · White Rock, BC, Canada",
    portrait: beckyImg,
    link: "/realtor/becky-zhou-hill",
  },
  {
    name: "Raphaelle Beaudoin",
    company: "Luxury Listing Realtor",
    location: "Chilliwack · Abbotsford, BC, Canada",
    portrait: raphaelleImg,
    link: "/realtor/raphaelle-beaudoin",
  },
  {
    name: "Coming Soon",
    company: "Vancouver Luxury Specialist",
    location: "Vancouver, BC, Canada",
    portrait: "@/assets/9bbbf923-25e7-44ee-838e-a881a37445a7.png",
    link: "#",
  },
  {
    name: "Coming Soon",
    company: "Victoria Estate Expert",
    location: "Victoria, BC, Canada",
    portrait: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    link: "#",
  },
];

const FeaturedProfessionals = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 italic">
          Featured Professionals
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {professionals.map((pro, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to={pro.link} className="group block">
                <div className="overflow-hidden h-[260px] lg:h-[300px] bg-card">
                  <img
                    src={pro.portrait}
                    alt={pro.name}
                    className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="pt-3">
                  <p className="font-display text-base font-bold text-primary group-hover:underline">
                    {pro.name}
                  </p>
                  <p className="font-body text-xs text-muted-foreground mt-0.5">{pro.company}</p>
                  <p className="font-body text-xs text-muted-foreground">{pro.location}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedProfessionals;
