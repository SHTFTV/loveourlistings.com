import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ESTATES = [
  { name: "Beverly Hills Estate",  detail: "Bel-Air Crest · $135M USD",       href: "/listing/beverly-hills-estate" },
  { name: "Bel Air Compound",      detail: "Stone Canyon · Trophy Asset",     href: "/listing/bel-air-estate" },
  { name: "Bridle Path Mansion",   detail: "Toronto · Drake's Neighborhood",  href: "/listing/bridle-path-toronto" },
  { name: "Bridle Path No. 2",     detail: "Toronto · Modernist Compound",    href: "/listing/bridle-path-toronto-2" },
  { name: "Bellevue West Vancouver", detail: "Waterfront · $58.8M CAD",       href: "/listing/bellevue-west-vancouver" },
  { name: "Shaughnessy Vancouver", detail: "Heritage Quarter · First Shaughnessy", href: "/listing/shaughnessy-vancouver" },
  { name: "Bellevue Washington",   detail: "Lake Washington · Tech Royalty",  href: "/listing/bellevue-washington" },
  { name: "West Vancouver Waterfront", detail: "Point Grey · $58.8M CAD",     href: "/listing/west-vancouver-waterfront" },
];

const CelebrityEstatesPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="font-body text-xs tracking-[5px] uppercase text-primary font-bold mb-4">Celebrity Estates</p>
        <h1 className="font-display text-5xl md:text-7xl font-black text-foreground leading-[0.95] mb-6">
          Where The<br />Names Live.
        </h1>
        <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Iconic addresses, trophy compounds, and the listings that move the market.
          Hand-picked editorial coverage of the homes shaping the global luxury conversation.
        </p>
      </motion.div>
    </section>

    <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24 grid md:grid-cols-2 gap-6">
      {ESTATES.map((e, i) => (
        <motion.a
          key={e.href}
          href={e.href}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="group border border-border p-8 hover:border-primary transition-colors flex items-start justify-between gap-6"
        >
          <div>
            <p className="font-body text-[10px] tracking-[3px] uppercase text-primary font-bold mb-3">
              Feature
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-black text-foreground leading-tight mb-2 group-hover:text-primary transition-colors">
              {e.name}
            </h3>
            <p className="font-body text-sm text-muted-foreground">{e.detail}</p>
          </div>
          <ArrowRight className="w-5 h-5 text-primary mt-3 shrink-0 group-hover:translate-x-1 transition-transform" />
        </motion.a>
      ))}
    </section>

    <Footer />
  </div>
);

export default CelebrityEstatesPage;