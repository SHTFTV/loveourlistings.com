import { motion } from "framer-motion";
import { Play, Tv, Share2, Zap, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FEATURES = [
  { icon: Tv,      title: "Network Distribution", body: "One post, instant placement across the TALC.tv property network and partner channels." },
  { icon: Share2,  title: "Programmatic Push",    body: "Listings automatically reformatted for vertical, square, and widescreen — ready for every platform." },
  { icon: Zap,     title: "Pay-As-You-Go",        body: "No subscription, no contracts. $10 per Visual Blast. Use it when you want to make noise." },
];

const TalcTvPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="font-body text-xs tracking-[5px] uppercase text-primary font-bold mb-4">TALC.tv · Visual Blast</p>
        <h1 className="font-display text-5xl md:text-7xl font-black text-foreground leading-[0.95] mb-6">
          Push Play.<br />Reach Everywhere.
        </h1>
        <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
          TALC.tv is the video distribution layer of the Industry Army network. One upload, programmatically
          pushed across our channels, partner sites, and social feeds — for a flat $10 per post.
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
        <Play className="w-10 h-10 text-primary mx-auto mb-6" />
        <p className="font-body text-xs tracking-[5px] uppercase text-primary font-bold mb-3">Flat Pricing</p>
        <h2 className="font-display text-4xl md:text-6xl font-black text-foreground leading-none mb-4">
          $10 <span className="font-body text-lg text-muted-foreground font-normal">per post</span>
        </h2>
        <p className="font-body text-sm text-muted-foreground max-w-xl mx-auto mb-8">
          Pay-as-you-go. No subscription. Available from your dashboard or as an add-on to any active slot.
        </p>
        <a href="mailto:love@loveourlistings.com?subject=TALC.tv%20Visual%20Blast"
           className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-black text-xs tracking-[2px] uppercase py-4 px-10 hover:opacity-90 transition">
          Launch a Blast <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>

    <Footer />
  </div>
);

export default TalcTvPage;