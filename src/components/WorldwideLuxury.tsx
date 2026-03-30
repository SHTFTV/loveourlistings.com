import { motion } from "framer-motion";

const regions: { title: string; countries: { flag: string; name: string }[] }[] = [
  {
    title: "North America",
    countries: [
      { flag: "🇨🇦", name: "Canada" },
      { flag: "🇲🇽", name: "Mexico" },
      { flag: "🇺🇸", name: "United States" },
    ],
  },
  {
    title: "Caribbean",
    countries: [
      { flag: "🇧🇸", name: "Bahamas" },
      { flag: "🇰🇾", name: "Cayman Islands" },
      { flag: "🇩🇴", name: "Dominican Republic" },
      { flag: "🇵🇷", name: "Puerto Rico" },
      { flag: "🇧🇱", name: "Saint Barthélemy" },
      { flag: "🇹🇨", name: "Turks and Caicos" },
      { flag: "🇻🇬", name: "Virgin Islands, British" },
    ],
  },
  {
    title: "Europe",
    countries: [
      { flag: "🇫🇷", name: "France" },
      { flag: "🇩🇪", name: "Germany" },
      { flag: "🇬🇷", name: "Greece" },
      { flag: "🇮🇹", name: "Italy" },
      { flag: "🇲🇨", name: "Monaco" },
      { flag: "🇵🇹", name: "Portugal" },
      { flag: "🇪🇸", name: "Spain" },
      { flag: "🇨🇭", name: "Switzerland" },
      { flag: "🇬🇧", name: "United Kingdom" },
    ],
  },
  {
    title: "Asia & Middle East",
    countries: [
      { flag: "🇦🇪", name: "United Arab Emirates" },
      { flag: "🇮🇱", name: "Israel" },
      { flag: "🇶🇦", name: "Qatar" },
      { flag: "🇮🇳", name: "India" },
      { flag: "🇹🇭", name: "Thailand" },
      { flag: "🇯🇵", name: "Japan" },
    ],
  },
  {
    title: "Australia & Pacific",
    countries: [
      { flag: "🇦🇺", name: "Australia" },
      { flag: "🇳🇿", name: "New Zealand" },
      { flag: "🇫🇯", name: "Fiji" },
    ],
  },
  {
    title: "Africa",
    countries: [
      { flag: "🇰🇪", name: "Kenya" },
      { flag: "🇲🇺", name: "Mauritius" },
      { flag: "🇲🇦", name: "Morocco" },
      { flag: "🇿🇦", name: "South Africa" },
    ],
  },
];

const WorldwideLuxury = () => {
  return (
    <section className="border-t border-border bg-card/30 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground italic mb-4">
            Worldwide Luxury
          </h2>
          <p className="font-body text-sm text-muted-foreground max-w-4xl mb-10 leading-relaxed">
            As the premier luxury real estate portfolio, Luxury Heart Portfolio connects you to fine
            international estates and exclusive property listings. Recognized worldwide by industry
            leaders and media alike, our curated network continues to set the standard.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {regions.map((region) => (
              <div key={region.title}>
                <h3 className="font-display text-sm font-bold text-foreground italic mb-3">
                  {region.title}
                </h3>
                <ul className="space-y-1.5">
                  {region.countries.map((c) => (
                    <li key={c.name}>
                      <a
                        href="#"
                        className="font-body text-xs text-primary hover:underline flex items-center gap-2"
                      >
                        <span>{c.flag}</span>
                        {c.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorldwideLuxury;
