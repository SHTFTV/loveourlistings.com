import { motion } from "framer-motion";
import { Check, Heart, Star, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import siteLogo from "@/assets/logo.png";

const tiers = [
  {
    name: "Starter",
    price: "$997",
    period: "per sign",
    description: "Perfect for testing the iconic Heart-Shaped Sign on your next luxury listing.",
    features: [
      "1 Heart-Shaped Sign",
      "Standard size (24\" x 24\")",
      "Weather-resistant material",
      "Love Our Listings branding",
      "Free shipping in Canada & US",
    ],
    cta: "Order Now",
    href: "mailto:love@loveourlistings.com?subject=Starter%20Sign%20Order",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$399",
    period: "per quarter",
    description: "For active luxury agents who want ongoing brand presence and digital exposure.",
    features: [
      "3 Heart-Shaped Signs",
      "Premium size (30\" x 30\")",
      "Featured agent profile on site",
      "City agents page listing",
      "Social media syndication",
      "Priority sign replacement",
      "Digital badge for marketing",
    ],
    cta: "Get Started",
    href: "mailto:love@loveourlistings.com?subject=Professional%20Plan%20Inquiry",
    highlighted: true,
  },
  {
    name: "Elite",
    price: "$899",
    period: "per quarter",
    description: "Full partnership for top-producing agents who demand maximum exposure.",
    features: [
      "Unlimited Heart-Shaped Signs",
      "Custom sizes available",
      "Dedicated realtor profile page",
      "Homepage featured placement",
      "Luxury news feed syndication",
      "Priority editorial features",
      "Exclusive market reports",
      "White-glove concierge service",
      "Cross-network domain exposure",
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
            The Iconic Heart-Shaped Sign
          </h1>
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Stand out from every other listing on the block. Our signature heart-shaped sign 
            creates unforgettable curb appeal and positions your brand as the luxury standard.
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
              Why the Heart-Shaped Sign?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-display text-lg font-bold text-foreground mb-2">Unforgettable Curb Appeal</h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                In a sea of generic "For Sale" signs, the Heart-Shaped Sign stops traffic — literally. 
                Neighbours talk, social media lights up, and your listing becomes the one everyone remembers.
              </p>
              <h4 className="font-display text-lg font-bold text-foreground mb-2">Premium Brand Association</h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Love Our Listings is reserved for verified luxury professionals representing exceptional properties. 
                The sign signals to buyers that this is not an ordinary listing — it's a curated experience.
              </p>
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-foreground mb-2">Digital + Physical Presence</h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                Your sign at the curb is just the beginning. Professional and Elite partners get featured 
                on our website, across our 150+ domain network, and syndicated through our luxury news feeds.
              </p>
              <h4 className="font-display text-lg font-bold text-foreground mb-2">By Invitation Only</h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Not everyone qualifies. We vet every agent and property to maintain the exclusivity 
                that makes the Heart-Shaped Sign a true mark of distinction in luxury real estate.
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
