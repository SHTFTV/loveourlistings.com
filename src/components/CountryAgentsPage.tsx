import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LuxuryNewsFeed from "./LuxuryNewsFeed";
import siteLogo from "@/assets/logo.png";
import { COUNTRY_SEO } from "@/data/countrySeo";

interface CityLink {
  name: string;
  slug: string;
}

interface CountryAgentsPageProps {
  country: string;
  flag: string;
  region: string;
  heroImage: string;
  description: string;
  cities: CityLink[];
  slug?: string;
}

const CountryAgentsPage = ({
  country,
  flag,
  region,
  heroImage,
  description,
  cities,
  slug,
}: CountryAgentsPageProps) => {
  const seo = slug ? COUNTRY_SEO[slug] : undefined;

  useEffect(() => {
    document.title = `Luxury Real Estate in ${country} — Love Our Listings`;
    if (seo) {
      let m = document.querySelector('meta[name="description"]');
      if (!m) { m = document.createElement("meta"); m.setAttribute("name","description"); document.head.appendChild(m); }
      m.setAttribute("content", seo.meta);
    }
  }, [country, seo]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <div className="relative h-[50vh] overflow-hidden">
        <img
          src={heroImage}
          alt={`${country} luxury real estate`}
          className="w-full h-full object-cover opacity-50"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <img src={siteLogo} alt="Love Our Listings" className="h-48 md:h-72 w-auto" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-xs tracking-[5px] uppercase text-primary font-bold mb-3">
              {region}
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-black text-foreground leading-none">
              <span className="mr-4">{flag}</span>Luxury Agents<br />{country}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Description */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="font-body text-base text-muted-foreground leading-relaxed">
            {description}
          </p>
        </motion.div>
      </section>

      {/* Unique SEO sections */}
      {seo && (
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-4 grid md:grid-cols-2 gap-10">
          {[
            { h: `Inside the ${country} Luxury Market`, body: seo.market },
            { h: `Lifestyle & Why Buyers Choose ${country}`, body: seo.lifestyle },
            { h: `Investment Lens — ${country}`, body: seo.investment },
            { h: `Why a Love Our Listings Feature Works in ${country}`, body: seo.whyHeart },
          ].map((s) => (
            <div key={s.h} className="border border-border p-6 md:p-8">
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">{s.h}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </section>
      )}

      {seo && (
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-10">
          <h3 className="font-display text-lg font-bold italic text-foreground mb-4">{country} Highlights</h3>
          <ul className="grid md:grid-cols-2 gap-3">
            {seo.highlights.map((h) => (
              <li key={h} className="font-body text-sm text-muted-foreground border-l-2 border-primary/60 pl-3">{h}</li>
            ))}
          </ul>
        </section>
      )}

      {/* City Links */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground italic mb-8">
          Explore Cities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cities.map((city, i) => (
            <motion.div
              key={city.slug}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <Link
                to={`/agents/${city.slug}`}
                className="flex items-center justify-between p-4 border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="font-body text-sm font-semibold text-foreground">
                    {city.name}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Internal directory back-links */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
        <h3 className="font-display text-lg font-bold italic text-foreground mb-4">Continue Browsing the Network</h3>
        <div className="flex flex-wrap gap-3">
          {[
            { to: "/realtors", label: "← Global Realtor Directory" },
            { to: "/celebrity-estates", label: "Celebrity Estates" },
            { to: "/destinations/waterfront", label: "Waterfront Estates" },
            { to: "/destinations/ski-villages", label: "Ski Villages" },
            { to: "/destinations/wine-country", label: "Wine Country" },
            { to: "/destinations/island-retreats", label: "Island Retreats" },
            { to: "/pricing", label: "Featured Listing Pricing" },
            { to: "/guest-post", label: "Submit a Guest Post" },
            { to: "/seo-realtor", label: "SEO Realtor Profile" },
            { to: "/dashboard", label: "Dashboard Upsells" },
          ].map((l) => (
            <Link key={l.to} to={l.to} className="font-body text-xs tracking-[2px] uppercase border border-border px-4 py-2 hover:border-primary hover:text-primary transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Live luxury press feed */}
      <LuxuryNewsFeed title={`Luxury Press — Relevant to ${country}`} limit={6} />

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-primary/30 bg-primary/5 p-10 md:p-14 text-center"
        >
          <p className="font-body text-xs tracking-[5px] uppercase text-primary mb-4">
            By Invitation Only
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-black text-foreground leading-tight mb-5">
            Want to Be Featured in {country}?
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Are you a top-producing luxury agent in {country}? Love Our Listings is an exclusive platform
            reserved for qualified professionals representing exceptional properties.
          </p>
          <a
            href="mailto:Love@loveourlistings.com"
            className="inline-block bg-primary text-primary-foreground font-black text-xs tracking-[2px] uppercase py-4 px-10 hover:opacity-90 transition-opacity"
          >
            Apply to Feature
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default CountryAgentsPage;
