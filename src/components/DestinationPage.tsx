import { motion } from "framer-motion";
import Navbar from "./Navbar";
import FooterFull from "./FooterFull";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface Listing {
  image: string;
  price: string;
  agent: string;
  location: string;
  url: string;
  badge?: string;
}

interface EditorialBlock {
  title: string;
  content: string;
}

interface DestinationPageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  intro: string;
  editorial: EditorialBlock[];
  listings: Listing[];
}

const DestinationPage = ({ title, subtitle, heroImage, intro, editorial, listings }: DestinationPageProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img src={heroImage} alt={title} className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-12 left-0 right-0 px-6 md:px-12 max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 font-body text-xs text-primary hover:underline tracking-wider uppercase mb-4">
            <ArrowLeft className="w-3 h-3" /> Back to Home
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold italic text-foreground"
          >
            {title}
          </motion.h1>
          <p className="font-body text-sm md:text-base text-muted-foreground mt-2 max-w-2xl">{subtitle}</p>
        </div>
      </div>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl">
          {intro}
        </p>
      </section>

      {/* Listings Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-12">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground italic mb-8">
          Featured Listings
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {listings.map((listing, i) => (
            <motion.a
              key={i}
              href={listing.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group cursor-pointer block"
            >
              <div className="relative overflow-hidden h-[200px] lg:h-[220px] bg-card">
                <img
                  src={listing.image}
                  alt={listing.location}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
                  loading="lazy"
                />
                {listing.badge && (
                  <span className="absolute bottom-2 left-2 right-2 bg-primary/90 text-primary-foreground font-body text-[10px] font-bold tracking-wider uppercase text-center py-1.5 px-2">
                    {listing.badge}
                  </span>
                )}
              </div>
              <div className="pt-3 pb-4">
                <p className="font-display text-base font-bold text-foreground">{listing.price}</p>
                <p className="font-body text-xs text-primary mt-0.5">{listing.agent}</p>
                <p className="font-body text-xs text-muted-foreground">{listing.location}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Editorial */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {editorial.map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-l-2 border-primary/30 pl-6"
            >
              <h3 className="font-display text-lg font-bold text-foreground italic mb-3">{block.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{block.content}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <FooterFull />
    </div>
  );
};

export default DestinationPage;
