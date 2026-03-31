import { motion } from "framer-motion";
import { Check, Heart, Star, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import siteLogo from "@/assets/logo.png";

const tiers = [
  {
    name: "Basic Listing",
    price: "$997",
    period: "one-time",
    description: "Get your luxury listing featured on LoveOurListings.com with city agent page placement.",
    features: [
      "Featured listing on city agents page",
      "Professional agent profile",
      "SEO-optimized listing page",
      "Cross-network domain exposure",
      "Free for 6 months",
    ],
    cta: "Get Listed",
    href: "mailto:love@loveourlistings.com?subject=Basic%20Listing%20Inquiry",
    highlighted: false,
  },
  {
    name: "Premier Agent",
    price: "$399",
    period: "per quarter",
    description: "For active luxury agents who want ongoing brand presence and maximum digital exposure.",
    features: [
      "Everything in Basic Listing",
      "Dedicated realtor profile page",
      "Homepage featured placement",
      "Social media syndication",
      "Luxury news feed syndication",
      "Digital badge for marketing",
      "Priority editorial features",
    ],
    cta: "Get Started",
    href: "mailto:love@loveourlistings.com?subject=Premier%20Agent%20Plan%20Inquiry",
    highlighted: true,
  },
  {
    name: "Elite Partner",
    price: "$899",
    period: "per quarter",
    description: "Full partnership for top-producing agents who demand maximum exposure and exclusivity.",
    features: [
      "Everything in Premier Agent",
      "Multiple city page listings",
      "Exclusive market reports",
      "White-glove concierge service",
      "Priority sign replacement",
      "Custom editorial content",
      "150+ domain network syndication",
      "Dedicated account manager",
    ],
    cta: "Apply Now",
    href: "mailto:love@loveourlistings.com?subject=Elite%20Partnership%20Application",
    highlighted: false,
  },
];

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={siteLogo} alt="Love Our Listings" className="h-20 w-auto mx-auto mb-8 opacity-80" />
          <p className="font-body text-xs tracking-[5px] uppercase text-primary font-bold mb-4">
            Pricing & Partnership
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-black text-foreground leading-none mb-6">
            Advertise With Us
          </h1>
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Get your luxury listings and agent brand featured across our premium platform 
            and 150+ domain network. Choose the partnership level that fits your business.
          </p>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`border p-8 md:p-10 flex flex-col ${
                tier.highlighted
                  ? "border-primary bg-primary/5 relative"
                  : "border-border"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground font-body text-[10px] font-bold tracking-[2px] uppercase px-4 py-1.5">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-8">
                <h3 className="font-display text-2xl font-black text-foreground mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-display text-4xl font-black text-primary">
                    {tier.price}
                  </span>
                  <span className="font-body text-sm text-muted-foreground">
                    {tier.period}
                  </span>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {tier.description}
                </p>
              </div>
              <ul className="space-y-3 mb-10 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-foreground/80">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                className={`block text-center font-black text-xs tracking-[2px] uppercase py-4 px-8 transition-all duration-300 ${
                  tier.highlighted
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Heart-Shaped Sign Add-On */}
      <section id="heart-sign" className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-primary bg-primary/5 p-10 md:p-14"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="font-body text-xs tracking-[5px] uppercase text-primary font-bold mb-4">
                Add-On · Available With Any Plan
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-black text-foreground leading-tight mb-4">
                The Iconic Heart-Shaped Sign
              </h2>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="font-display text-5xl font-black text-primary">$997</span>
                <span className="font-body text-sm text-muted-foreground">USD per sign</span>
              </div>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
                Stand out from every other listing on the block. Our signature heart-shaped sign 
                creates unforgettable curb appeal and positions your brand as the luxury standard.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Premium weather-resistant material",
                  "Standard (24\" × 24\") or custom sizes",
                  "Love Our Listings branding",
                  "Free shipping in Canada & US",
                  "Priority replacement for Premier & Elite partners",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Heart className="w-4 h-4 text-primary shrink-0 mt-0.5 fill-primary" />
                    <span className="font-body text-sm text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:love@loveourlistings.com?subject=Heart-Shaped%20Sign%20Order"
                className="inline-block bg-primary text-primary-foreground font-black text-xs tracking-[2px] uppercase py-4 px-10 hover:opacity-90 transition-opacity"
              >
                Order Your Sign
              </a>
            </div>
            <div className="flex items-center justify-center">
              <img src={siteLogo} alt="Heart-Shaped Sign" className="h-56 md:h-72 w-auto opacity-60" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* FAQ / Trust */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-border p-10 md:p-14"
        >
          <div className="flex items-center gap-3 mb-8">
            <Heart className="w-6 h-6 text-primary fill-primary" />
            <h2 className="font-display text-2xl md:text-3xl font-black text-foreground">
              Why Advertise With Us?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-display text-lg font-bold text-foreground mb-2">150+ Domain Network</h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                Your profile and listings get syndicated across our network of premium city domains — 
                from WhiteRock.io to Abbotsford.io — driving qualified traffic from buyers already searching your market.
              </p>
              <h4 className="font-display text-lg font-bold text-foreground mb-2">Premium Brand Association</h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Love Our Listings is reserved for verified luxury professionals representing exceptional properties. 
                Being featured here signals to buyers that you are the trusted authority in your market.
              </p>
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-foreground mb-2">SEO-Optimized Exposure</h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                Every agent profile and city page is built with search-engine optimization in mind — 
                structured data, geo-targeted content, and high-authority domain signals that help you rank.
              </p>
              <h4 className="font-display text-lg font-bold text-foreground mb-2">By Invitation Only</h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Not everyone qualifies. We vet every agent and property to maintain the exclusivity 
                that makes this platform a true mark of distinction in luxury real estate.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-promo text-center"
        >
          <Star className="w-8 h-8 text-primary-foreground/80 mx-auto mb-4" />
          <h2 className="font-display text-3xl md:text-4xl font-black text-primary-foreground leading-tight mb-4">
            Ready to Stand Out?
          </h2>
          <p className="font-body text-base text-primary-foreground/90 max-w-lg mx-auto mb-8">
            Contact us to discuss which partnership level is right for your luxury business.
          </p>
          <a
            href="mailto:love@loveourlistings.com"
            className="inline-flex items-center gap-3 border-2 border-primary-foreground text-primary-foreground font-black text-xs tracking-[2px] uppercase py-5 px-10 hover:bg-primary-foreground hover:text-primary transition-all duration-300"
          >
            love@loveourlistings.com <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;
