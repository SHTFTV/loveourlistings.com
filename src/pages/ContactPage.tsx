import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-32 pb-20 px-6 md:px-12 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="font-body text-xs tracking-[5px] uppercase text-primary font-bold mb-4">Contact</p>
        <h1 className="font-display text-5xl md:text-7xl font-black text-foreground leading-[0.95] mb-10">
          Let's Talk.
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <a href="mailto:love@loveourlistings.com"
             className="border border-border p-8 hover:border-primary transition-colors block">
            <Mail className="w-6 h-6 text-primary mb-5" />
            <h3 className="font-display text-xl font-black text-foreground mb-2">Editorial & Partnerships</h3>
            <p className="font-body text-sm text-muted-foreground mb-4">
              Pitch a story, claim a territory, or discuss a custom package.
            </p>
            <span className="inline-flex items-center gap-2 font-body text-sm text-primary">
              love@loveourlistings.com <ArrowRight className="w-4 h-4" />
            </span>
          </a>

          <div className="border border-border p-8">
            <MapPin className="w-6 h-6 text-primary mb-5" />
            <h3 className="font-display text-xl font-black text-foreground mb-2">Headquarters</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Industry Army Marketing<br />
              Lower Mainland · Langley, BC<br />
              Editorial desks in Toronto, Beverly Hills, Monaco, London.
            </p>
          </div>
        </div>

        <div className="border border-primary bg-primary/5 p-10">
          <h3 className="font-display text-2xl font-black text-foreground mb-3">Ready to be featured?</h3>
          <p className="font-body text-sm text-muted-foreground mb-6 max-w-2xl">
            Review the slot matrix to see the available territories and flat monthly pricing.
          </p>
          <a href="/pricing"
             className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-black text-xs tracking-[2px] uppercase py-4 px-8 hover:opacity-90 transition">
            View Pricing <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </section>

    <Footer />
  </div>
);

export default ContactPage;