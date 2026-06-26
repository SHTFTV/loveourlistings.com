import { motion } from "framer-motion";
import { Eye, Home, Layers, Sparkles, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FEATURES = [
  { icon: Home,     title: "Virtual Staging",      body: "Empty rooms transformed into magazine-ready interiors at the click of a render." },
  { icon: Layers,   title: "Architectural Visualization", body: "Pre-construction, renovation concepts, and 'what could be' overlays for any property." },
  { icon: Sparkles, title: "Pay-Per-Render",       body: "$2 per render. No subscription, no minimums. Iterate until it's perfect — for the cost of a coffee." },
];

const EyeSpyrPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="font-body text-xs tracking-[5px] uppercase text-primary font-bold mb-4">EyeSpyr · Hall Visualizer</p>
        <h1 className="font-display text-5xl md:text-7xl font-black text-foreground leading-[0.95] mb-6">
          See It<br />Before It Exists.
        </h1>
        <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
          EyeSpyr is the AI-driven visualization engine inside the Industry Army stack. Stage, re-imagine,
          and render any room in seconds — $2 per render, pay-as-you-go.
        </p>
      </motion.div>
    </section>

    <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20 grid md:grid-cols-3 gap-6">
      {FEATURES.map((f, i) => (
        <motion.div key={f.title}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
          className="border border-border p-8 hover:border-primary transition-colors">
          <f.icon className="w-6 h-6 text-primary mb-5" />
          <h3 className="font-display text-xl font-black text-foreground mb-3">{f.title}</h3>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.body}</p>
        </motion.div>
      ))}
    </section>

    <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
      <div className="border border-primary bg-primary/5 p-10 md:p-14 text-center">
        <Eye className="w-10 h-10 text-primary mx-auto mb-6" />
        <p className="font-body text-xs tracking-[5px] uppercase text-primary font-bold mb-3">Flat Pricing</p>
        <h2 className="font-display text-4xl md:text-6xl font-black text-foreground leading-none mb-4">
          $2 <span className="font-body text-lg text-muted-foreground font-normal">per render</span>
        </h2>
        <p className="font-body text-sm text-muted-foreground max-w-xl mx-auto mb-8">
          Pay-as-you-go. Available from your dashboard or as an add-on to any active slot.
        </p>
        <a href="mailto:love@loveourlistings.com?subject=EyeSpyr%20Render%20Request"
           className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-black text-xs tracking-[2px] uppercase py-4 px-10 hover:opacity-90 transition">
          Render a Room <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>

    <Footer />
  </div>
);

export default EyeSpyrPage;