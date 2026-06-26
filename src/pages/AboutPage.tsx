import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import logo from "@/assets/logo.png";

const AboutPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-32 pb-16 px-6 md:px-12 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <img src={logo} alt="Love Our Listings" className="h-16 w-auto mb-10 opacity-80" />
        <p className="font-body text-xs tracking-[5px] uppercase text-primary font-bold mb-4">About</p>
        <h1 className="font-display text-5xl md:text-7xl font-black text-foreground leading-[0.95] mb-10">
          The Editorial Home of<br />Exceptional Listings.
        </h1>
        <div className="space-y-6 font-body text-base md:text-lg text-muted-foreground leading-relaxed">
          <p>
            Love Our Listings is the luxury real estate publication of Industry Army Marketing — a network of
            150+ premium city domains, distribution channels, and editorial properties built to amplify the
            agents and listings that deserve more than an MLS thumbnail.
          </p>
          <p>
            We are not a portal. We are not a directory. We are an editorial brand: hand-curated stories,
            magazine-grade visuals, and a feature wall that buyers and brokers actually read.
          </p>
          <p>
            Our model is simple: fixed territory slots, flat monthly pricing, and a creative production layer
            (TALC.tv, EyeSpyr, Guest Post) that lets every partner punch far above their weight.
          </p>
          <p>
            Headquartered in the Lower Mainland with editorial desks aligned to Toronto, Beverly Hills, Monaco,
            and London — wherever the listings live, we cover them.
          </p>
        </div>
      </motion.div>
    </section>

    <Footer />
  </div>
);

export default AboutPage;