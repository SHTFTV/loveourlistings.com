import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import siteLogo from "@/assets/logo.png";

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
}

const CountryAgentsPage = ({
  country,
  flag,
  region,
  heroImage,
  description,
  cities,
}: CountryAgentsPageProps) => {
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
