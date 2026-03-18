import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-40 pb-24 md:pb-32 px-6 md:px-12 text-center bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-primary text-7xl md:text-8xl mb-4 leading-none">♥</div>
        <h1 className="font-display text-5xl md:text-7xl font-black tracking-tight text-foreground leading-none">
          LUXURY{" "}
          <span className="font-light text-foreground/40">HEART</span>
        </h1>
        <p className="font-body text-xs tracking-[4px] uppercase text-foreground/30 mt-4">
          The Global Real Estate &amp; Lifestyle Journal
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
