import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const PRIMARY_LINKS = [
  { label: "Journal", href: "/#journal" },
  { label: "Celebrity", href: "/celebrity-estates" },
  { label: "Realtors", href: "/realtors" },
  { label: "Guest Post", href: "/guest-post" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const NETWORK = [
  { label: "TALC.tv", href: "/talc-tv" },
  { label: "EyeSpyr", href: "/eyespyr" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
          <img src={logo} alt="Love Our Listings" className="h-12 w-auto" />
        </a>
        <nav className="hidden lg:flex items-center gap-7">
          {PRIMARY_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-[11px] font-semibold tracking-[3px] uppercase text-foreground/55 hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <span className="h-4 w-px bg-border" />
          {NETWORK.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-[11px] font-semibold tracking-[3px] uppercase text-primary/80 hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden nav-frosted border-t border-border px-6 py-6 flex flex-col gap-4">
          {[...PRIMARY_LINKS, ...NETWORK].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-xs font-semibold tracking-[3px] uppercase text-foreground/70 hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </motion.header>
  );
};

export default Navbar;
