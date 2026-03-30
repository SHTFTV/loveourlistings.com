import { motion } from "framer-motion";
import { MapPin, Phone, Star, Clock, ExternalLink } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface Listing {
  image: string;
  price: string;
  address: string;
  beds: number;
  baths: number;
  sqft: string;
}

interface RealtorProfileProps {
  name: string;
  title: string;
  region: string;
  tagline: string;
  bio: string;
  portrait: string;
  heroImage: string;
  phone: string;
  address: string;
  website?: string;
  googleReviews?: string;
  hours?: string;
  specialties: string[];
  listings: Listing[];
}

const RealtorProfile = ({
  name,
  title,
  region,
  tagline,
  bio,
  portrait,
  heroImage,
  phone,
  address,
  website,
  googleReviews,
  hours,
  specialties,
  listings,
}: RealtorProfileProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero with region backdrop */}
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={heroImage}
          alt={region}
          className="w-full h-full object-cover opacity-60"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-end gap-8"
          >
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-none overflow-hidden border-2 border-primary shrink-0">
              <img
                src={portrait}
                alt={name}
                className="w-full h-full object-cover"
                width={800}
                height={1000}
              />
            </div>
            <div>
              <p className="font-body text-xs tracking-[4px] uppercase text-primary mb-2">
                {title}
              </p>
              <h1 className="font-display text-4xl md:text-6xl font-black text-foreground leading-none">
                {name}
              </h1>
              <p className="font-body text-lg text-foreground/60 mt-3 max-w-xl">
                {tagline}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Details Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Bio & Specialties */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              About
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-10">
              {bio}
            </p>

            <h3 className="font-body text-xs tracking-[3px] uppercase text-primary font-bold mb-4">
              Specialties
            </h3>
            <div className="flex flex-wrap gap-3">
              {specialties.map((s) => (
                <span
                  key={s}
                  className="font-body text-xs tracking-wider uppercase border border-border px-4 py-2 text-foreground/70"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-border p-8 space-y-5"
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-4">
              Contact
            </h3>

            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
              <span className="font-body text-sm text-muted-foreground">{address}</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <a href={`tel:${phone}`} className="font-body text-sm text-foreground hover:text-primary transition-colors">
                {phone}
              </a>
            </div>

            {googleReviews && (
              <div className="flex items-center gap-3">
                <Star className="w-4 h-4 text-primary shrink-0" />
                <span className="font-body text-sm text-muted-foreground">{googleReviews}</span>
              </div>
            )}

            {hours && (
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span className="font-body text-sm text-muted-foreground">{hours}</span>
              </div>
            )}

            {website && (
              <div className="flex items-center gap-3">
                <ExternalLink className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-foreground hover:text-primary transition-colors"
                >
                  Website
                </a>
              </div>
            )}

            <a
              href={`tel:${phone}`}
              className="block w-full text-center bg-primary text-primary-foreground font-black text-xs tracking-[2px] uppercase py-4 mt-6 hover:opacity-90 transition-opacity"
            >
              Schedule a Consultation
            </a>
          </motion.div>
        </div>
      </section>

      {/* Featured Listings */}
      {listings.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
          <h2 className="font-display text-3xl font-bold text-foreground mb-10">
            Featured Listings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listings.map((listing, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer border-b border-border pb-8"
              >
                <div className="overflow-hidden h-[280px] bg-card mb-5">
                  <img
                    src={listing.image}
                    alt={listing.address}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
                    loading="lazy"
                  />
                </div>
                <p className="font-display text-2xl font-bold text-foreground">{listing.price}</p>
                <p className="font-body text-sm text-muted-foreground mt-1">{listing.address}</p>
                <p className="font-body text-xs text-foreground/40 mt-2">
                  {listing.beds} Beds · {listing.baths} Baths · {listing.sqft}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

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
            Stand out in {region} with unforgettable boutique branding for your luxury listings.
          </p>
          <a
            href="/shop/heart-sign"
            className="inline-block border-2 border-primary-foreground text-primary-foreground font-black text-xs tracking-[2px] uppercase py-5 px-10 hover:bg-primary-foreground hover:text-primary transition-all duration-300"
          >
            Shop Signs
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RealtorProfile;
