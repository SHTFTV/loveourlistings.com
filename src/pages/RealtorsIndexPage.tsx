import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FEATURED_REALTORS = [
  { name: "Becky Zhou Hill",       region: "West Vancouver Waterfront",    href: "/realtor/becky-zhou-hill" },
  { name: "Raphaëlle Beaudoin",    region: "Greater Toronto Area",         href: "/realtor/raphaelle-beaudoin" },
];

const CITY_DIRECTORIES = [
  ["Vancouver", "/agents/vancouver"],
  ["West Vancouver", "/agents/west-vancouver"],
  ["Toronto", "/agents/toronto"],
  ["Whistler", "/agents/whistler"],
  ["Victoria", "/agents/victoria"],
  ["Kelowna", "/agents/kelowna"],
  ["Burnaby", "/agents/burnaby"],
  ["Surrey", "/agents/surrey"],
  ["Coquitlam", "/agents/coquitlam"],
  ["North Vancouver", "/agents/north-vancouver"],
  ["Langley", "/agents/langley"],
  ["White Rock", "/agents/white-rock"],
];

const RealtorsIndexPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="font-body text-xs tracking-[5px] uppercase text-primary font-bold mb-4">Realtors</p>
        <h1 className="font-display text-5xl md:text-7xl font-black text-foreground leading-[0.95] mb-6">
          The Featured<br />Authorities.
        </h1>
        <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Vetted, verified, and represented across the editorial network. Browse featured realtors,
          or jump straight to a city directory.
        </p>
      </motion.div>
    </section>

    <section className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
      <h2 className="font-display text-2xl font-black text-foreground uppercase tracking-[3px] mb-8">Featured Realtors</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {FEATURED_REALTORS.map((r) => (
          <a key={r.href} href={r.href}
             className="group border border-border p-8 hover:border-primary transition-colors flex items-start justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-black text-foreground mb-2 group-hover:text-primary transition-colors">{r.name}</h3>
              <p className="font-body text-sm text-muted-foreground">{r.region}</p>
            </div>
            <ArrowRight className="w-5 h-5 text-primary mt-2 group-hover:translate-x-1 transition-transform" />
          </a>
        ))}
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
      <h2 className="font-display text-2xl font-black text-foreground uppercase tracking-[3px] mb-8">City Directories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {CITY_DIRECTORIES.map(([label, href]) => (
          <a key={href} href={href}
             className="border border-border px-5 py-4 font-body text-sm text-foreground/80 hover:border-primary hover:text-primary transition-colors">
            {label}
          </a>
        ))}
      </div>

      <div className="mt-12 border border-primary bg-primary/5 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="font-display text-2xl font-black text-foreground mb-2">Claim your territory.</h3>
          <p className="font-body text-sm text-muted-foreground max-w-xl">
            Fixed slot count per city. Flat monthly pricing. Once claimed, it's yours.
          </p>
        </div>
        <a href="/pricing"
           className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-black text-xs tracking-[2px] uppercase py-4 px-8 hover:opacity-90 transition shrink-0">
          View Slot Matrix <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>

    <Footer />
  </div>
);

export default RealtorsIndexPage;