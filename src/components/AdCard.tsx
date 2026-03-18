import { motion } from "framer-motion";
import heartSign from "@/assets/heart-sign.jpg";

const AdCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="card-promo"
    >
      <p className="font-body text-xs tracking-[5px] uppercase text-primary-foreground/80 mb-5">
        The Signature Collection
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-black text-primary-foreground leading-none mb-6">
        THE HEART-SHAPED SIGN.
      </h2>
      <p className="font-body text-base text-primary-foreground/90 max-w-md mb-8">
        Unforgettable branding for the world's most prestigious listings.
      </p>
      <a
        href="/shop/heart-sign"
        className="inline-block border-2 border-primary-foreground text-primary-foreground font-black text-xs tracking-[2px] uppercase py-5 px-10 hover:bg-primary-foreground hover:text-primary transition-all duration-300"
      >
        Shop Signs
      </a>
    </motion.div>
  );
};

export default AdCard;
