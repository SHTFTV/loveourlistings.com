import { motion } from "framer-motion";
import Navbar from "./Navbar";
import FooterFull from "./FooterFull";
import { ArrowLeft, MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface ListingDetailProps {
  image: string;
  price: string;
  agent: string;
  location: string;
  badge?: string;
  externalUrl: string;
  description: string;
  features: string[];
  neighborhood: string;
  agentWebsite?: string;
  agentWebsiteLabel?: string;
}

const ListingDetailPage = ({
  image, price, agent, location, badge, externalUrl, description, features, neighborhood, agentWebsite, agentWebsiteLabel,
}: ListingDetailProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <div className="relative h-[50vh] md:h-[65vh] overflow-hidden">
        <img src={image} alt={location} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        {badge && (
          <span className="absolute top-6 left-6 bg-primary text-primary-foreground font-body text-[10px] font-bold tracking-wider uppercase py-1.5 px-4">
            {badge}
          </span>
        )}
        <div className="absolute bottom-12 left-0 right-0 px-6 md:px-12 max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 font-body text-xs text-primary hover:underline tracking-wider uppercase mb-4">
            <ArrowLeft className="w-3 h-3" /> Back to Home
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl md:text-5xl font-bold text-foreground"
          >
            {price}
          </motion.h1>
          <div className="flex items-center gap-2 mt-2">
            <MapPin className="w-4 h-4 text-primary" />
            <p className="font-body text-sm md:text-base text-muted-foreground">{location}</p>
          </div>
          <p className="font-body text-xs text-primary mt-1">{agent}</p>
        </div>
      </div>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="font-display text-2xl font-bold text-foreground italic mb-4">About This Property</h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8">{description}</p>

            <h3 className="font-display text-lg font-bold text-foreground italic mb-4">The Neighborhood</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{neighborhood}</p>
          </div>

          <div>
            <div className="border border-border p-6">
              <h3 className="font-display text-lg font-bold text-foreground mb-4">Property Highlights</h3>
              <ul className="space-y-3">
                {features.map((f, i) => (
                  <li key={i} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span> {f}
                  </li>
                ))}
              </ul>

              <a
                href={externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body text-xs font-bold tracking-wider uppercase py-3 px-6 hover:opacity-90 transition-opacity"
              >
                View on Agent Site <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="border border-border p-6 mt-4">
              <p className="font-body text-xs text-muted-foreground">
                Listed by <span className="text-foreground font-semibold">{agent}</span>
              </p>
              <p className="font-body text-xs text-muted-foreground mt-1">
                Contact the listing agent for showings, pricing details, and additional information about this property.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterFull />
    </div>
  );
};

export default ListingDetailPage;
