import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-frosted border-b" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="Love Our Listings" className="h-14 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {["Global Listings", "Celebrity Homes", "Shop"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
              className="font-body text-sm font-medium tracking-widest uppercase text-foreground/70 hover:text-primary transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
