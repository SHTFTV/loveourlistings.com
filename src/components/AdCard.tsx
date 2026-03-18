import { motion } from "framer-motion";
import heartSign from "@/assets/heart-sign.jpg";

const AdCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="card-editorial border border-accent-subtle bg-background"
    >
      <div className="overflow-hidden aspect-[4/3]">
        <img
          src={heartSign}
          alt="The Unforgettable Heart-Shaped Sign"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="mb-3">
          <span className="badge-boutique">Boutique Pick</span>
        </div>
        <h3 className="font-display text-xl md:text-2xl text-foreground leading-snug mb-2">
          The Unforgettable Heart-Shaped Sign
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
          Don't just list a home. Make them fall in love with it.
        </p>
        <a
          href="/shop/heart-sign"
          className="inline-block font-body text-sm font-semibold tracking-widest uppercase text-primary hover:text-primary/80 transition-colors duration-300"
        >
          Shop Now →
        </a>
      </div>
    </motion.div>
  );
};

export default AdCard;
