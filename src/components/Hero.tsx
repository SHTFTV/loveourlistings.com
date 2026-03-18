import { motion } from "framer-motion";
import heroImage from "@/assets/hero-estate.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={heroImage}
          alt="Luxury Estate in Shaughnessy, Vancouver"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
      </motion.div>

      <div className="relative z-10 flex flex-col justify-end h-full max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="font-body text-sm tracking-[0.3em] uppercase text-primary-foreground/80 mb-4"
        >
          Featured Property
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.1] max-w-3xl"
        >
          Shaughnessy Estate
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="font-body text-lg text-primary-foreground/70 mt-5 max-w-xl"
        >
          A prime example of boutique branding in the Vancouver luxury market.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
