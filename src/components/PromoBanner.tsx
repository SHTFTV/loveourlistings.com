import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const PromoBanner = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-primary text-primary-foreground"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-6 flex-1">
            <span className="font-display text-lg md:text-xl font-bold italic hidden sm:inline">
              Love Our Listings
            </span>
            <span className="hidden md:inline text-primary-foreground/80 font-body text-sm">
              |
            </span>
            <p className="font-body text-xs md:text-sm text-primary-foreground/90">
              Use our signature heart-shaped sign for your listing. Building the world's luxury real estate everyone loves.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="/shop/heart-sign"
              className="font-body text-[10px] md:text-xs font-bold tracking-[2px] uppercase border-2 border-primary-foreground px-4 md:px-6 py-2.5 hover:bg-primary-foreground hover:text-primary transition-all duration-300 whitespace-nowrap"
            >
              Order Signs
            </a>
            <a
              href="#noteworthy"
              className="font-body text-[10px] md:text-xs font-bold tracking-[2px] uppercase border-2 border-primary-foreground/40 px-4 md:px-6 py-2.5 hover:bg-primary-foreground/10 transition-all duration-300 whitespace-nowrap hidden sm:inline-block"
            >
              Work With Us
            </a>
            <button
              onClick={() => setDismissed(true)}
              className="p-1.5 hover:bg-primary-foreground/10 rounded transition-colors ml-1"
              aria-label="Dismiss banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PromoBanner;
