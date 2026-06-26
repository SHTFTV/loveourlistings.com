import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PUBLISHING_ADDONS, DASHBOARD_UPSELLS } from "@/data/pricingMatrix";

const packages = [
  {
    name: "Authority Launch",
    price: "$159",
    cadence: "one-time",
    description: "The fastest way to plant a flag inside Love Our Listings.",
    includes: [
      "LoveOur Listings One-Time Feature Package",
      "Editorial post with branded overlay graphics",
      "Network blast across 150+ partner domains",
      "Permanent on-site media kit URL",
    ],
    cta: { label: "Order Authority Launch", href: "mailto:love@loveourlistings.com?subject=Authority%20Launch%20Package" },
    accent: false,
  },
  {
    name: "Territory Owner",
    price: "from $10",
    cadence: "per slot / month",
    description: "Lock a population-based slot, then layer publishing add-ons on top.",
    includes: [
      "Reserved territory slot at hardcoded matrix price",
      "+$10/mo Guest Post Publishing add-on",
      "+$10/mo Editorial Feature Post add-on",
      "+$10/mo SEO Realtor Profile Page add-on",
      "Position #1 Feature upgrade (Slot Price × 0.50)",
    ],
    cta: { label: "See Pricing Matrix", href: "/pricing" },
    accent: true,
  },
  {
    name: "Full Stack Visibility",
    price: "Custom",
    cadence: "monthly",
    description: "Every Love Our Listings surface, every Industry Army network leg.",
    includes: [
      "Multi-territory slot bundle",
      "Position #1 Feature on every slot",
      "High-Authority Backlink Pack ($25 one-time)",
      "TALC.tv Visual Blast distribution ($10/post)",
      "EyeSpyr Hall Visualizer renders ($2/render)",
      "Heart-Shaped Sign hardware shipped",
    ],
    cta: { label: "Book a Strategy Call", href: "mailto:love@loveourlistings.com?subject=Full%20Stack%20Visibility" },
    accent: false,
  },
];

const DashboardPage = () => {
  useEffect(() => {
    document.title = "Dashboard Upsells — Love Our Listings";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-10">
        <p className="font-body text-xs tracking-[5px] uppercase text-primary mb-3">Realtor Dashboard</p>
        <h1 className="font-display text-4xl md:text-6xl font-black text-foreground leading-none mb-5">Upsells &amp; Packages</h1>
        <p className="font-body text-base text-muted-foreground max-w-3xl">
          Every Love Our Listings campaign starts with a base territory slot, then stacks publishing add-ons and dashboard upgrades on top. Every price below is hardcoded — what you see is what you pay.
        </p>
      </section>

      {/* Packages */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-16 grid md:grid-cols-3 gap-6">
        {packages.map((p) => (
          <div key={p.name} className={`border p-8 flex flex-col ${p.accent ? "border-primary bg-primary/5" : "border-border"}`}>
            {p.accent && (
              <p className="font-body text-[10px] tracking-[4px] uppercase text-primary mb-2 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Most Popular
              </p>
            )}
            <h2 className="font-display text-2xl font-bold text-foreground mb-1">{p.name}</h2>
            <p className="font-display text-3xl font-black text-foreground">{p.price}<span className="font-body text-xs uppercase tracking-[2px] text-muted-foreground ml-2">{p.cadence}</span></p>
            <p className="font-body text-sm text-muted-foreground mt-3 mb-5">{p.description}</p>
            <ul className="space-y-2 mb-6">
              {p.includes.map((i) => (
                <li key={i} className="flex items-start gap-2 font-body text-sm text-foreground/90">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {i}
                </li>
              ))}
            </ul>
            <a href={p.cta.href} className={`mt-auto inline-flex items-center justify-center gap-2 font-body text-xs tracking-[2px] uppercase py-3 px-5 transition-colors ${p.accent ? "bg-primary text-primary-foreground hover:opacity-90" : "border border-border hover:border-primary hover:text-primary"}`}>
              {p.cta.label} <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        ))}
      </section>

      {/* Publishing add-ons */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-12">
        <h2 className="font-display text-2xl md:text-3xl font-bold italic text-foreground mb-2">Publishing Add-Ons</h2>
        <p className="font-body text-sm text-muted-foreground mb-6">Stack any of these on top of an active territory slot.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PUBLISHING_ADDONS.map((a) => (
            <div key={a.name} className="border border-border p-5">
              <h3 className="font-display text-lg font-bold text-foreground">{a.name}</h3>
              <p className="font-body text-sm text-primary font-bold mt-1">{a.price} <span className="text-muted-foreground font-normal">{a.cadence}</span></p>
              <p className="font-body text-xs text-muted-foreground mt-2 leading-relaxed">{a.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dashboard upsells */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
        <h2 className="font-display text-2xl md:text-3xl font-bold italic text-foreground mb-2">Dashboard Upsells</h2>
        <p className="font-body text-sm text-muted-foreground mb-6">Pay-as-you-go and one-time upgrades available from inside the realtor dashboard.</p>
        <div className="grid md:grid-cols-2 gap-4">
          {DASHBOARD_UPSELLS.map((u) => (
            <div key={u.name} className="border border-border p-6 flex items-start justify-between gap-6">
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">{u.name}</h3>
                <p className="font-body text-xs text-muted-foreground mt-1 leading-relaxed">{u.description}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="font-display text-xl font-black text-primary">{u.price}</p>
                <p className="font-body text-[10px] tracking-[2px] uppercase text-muted-foreground">{u.cadence}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/pricing" className="font-body text-xs tracking-[2px] uppercase border border-border px-4 py-2 hover:border-primary hover:text-primary transition-colors">View Full Pricing Matrix →</Link>
          <Link to="/guest-post" className="font-body text-xs tracking-[2px] uppercase border border-border px-4 py-2 hover:border-primary hover:text-primary transition-colors">Submit a Guest Post</Link>
          <Link to="/seo-realtor" className="font-body text-xs tracking-[2px] uppercase border border-border px-4 py-2 hover:border-primary hover:text-primary transition-colors">SEO Realtor Profile</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DashboardPage;