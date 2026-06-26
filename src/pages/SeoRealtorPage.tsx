import { motion } from "framer-motion";
import { ArrowRight, Search, TrendingUp, Award, Megaphone, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const REASONS = [
  {
    icon: Search,
    title: "Become The Search Result",
    body: "Your name + 'luxury realtor' + your city deserves the top result. We engineer it with structured data, semantic content, and 150+ domain authority signals.",
  },
  {
    icon: TrendingUp,
    title: "Editorial Authority Compounds",
    body: "Buyers research before they call. Every feature, every guest post, every market report becomes a permanent SEO asset working for you 24/7.",
  },
  {
    icon: Award,
    title: "Verified Expert Positioning",
    body: "Inclusion is by invitation. The badge alone signals to HNW clients that you are vetted, premium, and not interchangeable with the average MLS agent.",
  },
  {
    icon: Megaphone,
    title: "Guest Posting Builds Backlinks",
    body: "Publish in the journal, link back to your site, climb the SERPs. Editorial backlinks from a high-authority domain are the strongest SEO move you can buy.",
  },
];

const PAGE_INCLUDES = [
  "Custom-designed SEO landing page on loveourlistings.com",
  "Schema.org RealEstateAgent structured data",
  "Geo-targeted city + neighborhood keyword targeting",
  "Permanent dofollow link to your domain",
  "Press-style hero, bio, listings carousel, contact CTA",
  "Indexed and syndicated across the 150+ domain network",
];

const SeoRealtorPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="font-body text-xs tracking-[5px] uppercase text-primary font-bold mb-4">
          SEO Realtor Profile Page
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-black text-foreground leading-[0.95] mb-6">
          Own The Search.<br />Own The Territory.
        </h1>
        <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
          A dedicated, hand-built SEO realtor page that positions you as the
          undisputed expert in your market — and feeds buyers to your inbox while you sleep.
        </p>
      </motion.div>
    </section>

    <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24 grid md:grid-cols-2 gap-6">
      {REASONS.map((r, i) => (
        <motion.div
          key={r.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="border border-border p-8 hover:border-primary transition-colors"
        >
          <r.icon className="w-6 h-6 text-primary mb-5" />
          <h3 className="font-display text-xl font-black text-foreground mb-3">{r.title}</h3>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">{r.body}</p>
        </motion.div>
      ))}
    </section>

    <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
      <div className="border border-primary bg-primary/5 p-10 md:p-14 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-black text-foreground leading-tight mb-6">
            What You Get
          </h2>
          <ul className="space-y-3">
            {PAGE_INCLUDES.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                <span className="font-body text-sm text-foreground/80">{f}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-body text-xs tracking-[5px] uppercase text-primary font-bold mb-4">Pricing</p>
          <div className="mb-6">
            <span className="font-display text-5xl font-black text-primary">+$10</span>
            <span className="font-body text-sm text-muted-foreground ml-3">added to your active slot price / month</span>
          </div>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8">
            Your slot price is based on city population — see the full territory matrix on the pricing page.
            Want the works? Bundle with the One-Time Feature Package for $159 flat.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:love@loveourlistings.com?subject=SEO%20Realtor%20Page%20Claim"
               className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-black text-xs tracking-[2px] uppercase py-4 px-8 hover:opacity-90 transition">
              Claim Your Territory <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/pricing"
               className="inline-flex items-center gap-3 border-2 border-primary text-primary font-black text-xs tracking-[2px] uppercase py-4 px-8 hover:bg-primary hover:text-primary-foreground transition">
              See Slot Matrix
            </a>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default SeoRealtorPage;