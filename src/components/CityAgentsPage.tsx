import { useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Star, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import siteLogo from "@/assets/logo.png";

interface Agent {
  name: string;
  brokerage: string;
  specialty: string;
  bio: string;
  phone?: string;
  website?: string;
  image: string;
  accolades?: string;
}

interface CityAgentsPageProps {
  city: string;
  region: string;
  heroImage: string;
  intro: string;
  whyContact: string;
  agents: Agent[];
}

const CityAgentsPage = ({
  city,
  region,
  heroImage,
  intro,
  whyContact,
  agents,
}: CityAgentsPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <div className="relative h-[55vh] overflow-hidden">
        <img
          src={heroImage}
          alt={`${city} luxury real estate`}
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
              Luxury Listing Agents<br />{city}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
            {intro}
          </p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            {whyContact}
          </p>
        </motion.div>
      </section>

      {/* Agent Cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="border border-border group hover:border-primary/40 transition-colors duration-500"
            >
              <div className="h-72 overflow-hidden bg-card">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-1">
                  {agent.name}
                </h3>
                <p className="font-body text-[11px] tracking-[2px] uppercase text-primary font-semibold mb-1">
                  {agent.brokerage}
                </p>
                {agent.accolades && (
                  <div className="flex items-center gap-1.5 mb-3">
                    <Star className="w-3 h-3 text-primary fill-primary" />
                    <span className="font-body text-[10px] tracking-wider uppercase text-foreground/50">
                      {agent.accolades}
                    </span>
                  </div>
                )}
                <p className="font-body text-xs text-foreground/40 uppercase tracking-wider mb-3">
                  {agent.specialty}
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  {agent.bio}
                </p>
                {agent.phone && (
                  <div className="flex items-center gap-2 mb-3">
                    <Phone className="w-3.5 h-3.5 text-primary" />
                    <a href={`tel:${agent.phone}`} className="font-body text-sm text-foreground hover:text-primary transition-colors">
                      {agent.phone}
                    </a>
                  </div>
                )}
                {agent.website && (
                  <a
                    href={agent.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-body text-xs font-bold tracking-[2px] uppercase text-primary hover:gap-3 transition-all duration-300"
                  >
                    Visit Website <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA: Get Listed */}
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
            Want to Be Featured on<br />Love Our Listings?
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
            Are you a top-producing luxury agent in {city}? Love Our Listings is an exclusive platform 
            reserved for qualified professionals representing exceptional properties. In addition to your 
            existing marketing, our iconic Heart-Shaped Sign and premium web presence give your listings 
            the unforgettable edge they deserve.
          </p>
          <p className="font-body text-sm text-muted-foreground max-w-xl mx-auto mb-8">
            Stand out from the competition with boutique branding that turns heads at the curb and online. 
            Only verified luxury professionals with qualifying properties are eligible.
          </p>
          <a
            href="mailto:colin@industryarmymarketing.com"
            className="inline-block bg-primary text-primary-foreground font-black text-xs tracking-[2px] uppercase py-4 px-10 hover:opacity-90 transition-opacity"
          >
            Apply to Feature
          </a>
        </motion.div>
      </section>

      {/* Heart Sign CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="card-promo">
          <p className="font-body text-xs tracking-[5px] uppercase text-primary-foreground/80 mb-5">
            Exclusive Partnership
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black text-primary-foreground leading-none mb-6">
            THE HEART-SHAPED SIGN.
          </h2>
          <p className="font-body text-base text-primary-foreground/90 max-w-md mb-8">
            Stand out in {city} with unforgettable boutique branding for your luxury listings.
          </p>
          <a
            href="/pricing"
            className="inline-block border-2 border-primary-foreground text-primary-foreground font-black text-xs tracking-[2px] uppercase py-5 px-10 hover:bg-primary-foreground hover:text-primary transition-all duration-300"
          >
            View Pricing
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CityAgentsPage;
