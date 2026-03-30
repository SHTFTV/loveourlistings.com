import { motion } from "framer-motion";

const cards = [
  {
    title: "Worldwide Search",
    description: "Homes for Sale and for rent.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  },
  {
    title: "Destinations",
    description: "Noteworthy cities and regions.",
    image: "https://images.unsplash.com/photo-1559511260-66a68e7e3764?w=800&q=80",
  },
  {
    title: "Heart Signs",
    description: "Unforgettable boutique branding.",
    image: "/5bc6627e-6f18-42aa-b9d4-5a22d1c20b63.png",
  },
];

const DiscoverCards = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group cursor-pointer border border-border overflow-hidden"
          >
            <div className="overflow-hidden h-[220px] bg-card">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg font-bold text-foreground">{card.title}</h3>
              <p className="font-body text-xs text-muted-foreground mt-1">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DiscoverCards;
