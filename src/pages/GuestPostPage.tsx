import { motion } from "framer-motion";
import { ArrowRight, FileText, Globe, Sparkles, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BENEFITS = [
  { icon: Globe,    title: "150+ Domain Network",  body: "Your post is syndicated across the entire Industry Army property network." },
  { icon: FileText, title: "Editorial Treatment",  body: "Hand-crafted layout, custom hero, branded overlays — never a template." },
  { icon: Sparkles, title: "Permanent SEO Asset",  body: "Indexed forever. Permanent canonical backlink to your domain of choice." },
];

const INCLUDED = [
  "1,500–3,500 word editorial post",
  "1 dofollow backlink to your domain",
  "Custom hero image and pull quotes",
  "Author byline with portrait + bio",
  "Indexed in our luxury journal feed",
  "Permanent URL on loveourlistings.com",
];

const GuestPostPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="font-body text-xs tracking-[5px] uppercase text-primary font-bold mb-4">Guest Post</p>
        <h1 className="font-display text-5xl md:text-7xl font-black text-foreground leading-[0.95] mb-6">
          Publish on the<br />Luxury Authority.
        </h1>
        <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Place your brand, listing, or thought-leadership inside an editorial publication
          read by buyers, brokers, and HNW investors across the network.
        </p>
      </motion.div>
    </section>

    <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20 grid md:grid-cols-3 gap-6">
      {BENEFITS.map((b, i) => (
        <motion.div
          key={b.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="border border-border p-8 hover:border-primary transition-colors"
        >
          <b.icon className="w-6 h-6 text-primary mb-5" />
          <h3 className="font-display text-xl font-black text-foreground mb-3">{b.title}</h3>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">{b.body}</p>
        </motion.div>
      ))}
    </section>

    <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
      <div className="border border-primary bg-primary/5 p-10 md:p-14 grid md:grid-cols-2 gap-10">
        <div>
          <p className="font-body text-xs tracking-[5px] uppercase text-primary font-bold mb-4">Investment</p>
          <h2 className="font-display text-3xl md:text-4xl font-black text-foreground leading-tight mb-6">
            Guest Post Publishing
          </h2>
          <div className="flex items-baseline gap-3 mb-6">
            <span className="font-display text-5xl font-black text-primary">+$10</span>
            <span className="font-body text-sm text-muted-foreground">added to your active slot price / month</span>
          </div>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8">
            Already advertising a territory? Layer guest-post publishing onto your slot for an additional $10/month.
            New to the platform? Bundle with a One-Time Feature Package — $159 flat.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:love@loveourlistings.com?subject=Guest%20Post%20Submission"
               className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-black text-xs tracking-[2px] uppercase py-4 px-8 hover:opacity-90 transition">
              Submit Pitch <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/pricing"
               className="inline-flex items-center gap-3 border-2 border-primary text-primary font-black text-xs tracking-[2px] uppercase py-4 px-8 hover:bg-primary hover:text-primary-foreground transition">
              View Pricing
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-display text-lg font-black text-foreground uppercase tracking-[3px] mb-5">What's Included</h3>
          <ul className="space-y-3">
            {INCLUDED.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                <span className="font-body text-sm text-foreground/80">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default GuestPostPage;