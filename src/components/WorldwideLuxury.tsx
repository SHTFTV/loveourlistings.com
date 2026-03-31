import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const regions: { title: string; countries: { flag: string; name: string; slug: string }[] }[] = [
  {
    title: "North America",
    countries: [
      { flag: "🇨🇦", name: "Canada", slug: "canada" },
      { flag: "🇲🇽", name: "Mexico", slug: "mexico" },
      { flag: "🇺🇸", name: "United States", slug: "united-states" },
    ],
  },
  {
    title: "Caribbean",
    countries: [
      { flag: "🇧🇸", name: "Bahamas", slug: "bahamas" },
      { flag: "🇰🇾", name: "Cayman Islands", slug: "cayman-islands" },
      { flag: "🇩🇴", name: "Dominican Republic", slug: "dominican-republic" },
      { flag: "🇵🇷", name: "Puerto Rico", slug: "puerto-rico" },
      { flag: "🇧🇱", name: "Saint Barthélemy", slug: "saint-barthelemy" },
      { flag: "🇹🇨", name: "Turks and Caicos", slug: "turks-and-caicos" },
      { flag: "🇻🇬", name: "Virgin Islands, British", slug: "british-virgin-islands" },
    ],
  },
  {
    title: "Europe",
    countries: [
      { flag: "🇫🇷", name: "France", slug: "france" },
      { flag: "🇩🇪", name: "Germany", slug: "germany" },
      { flag: "🇬🇷", name: "Greece", slug: "greece" },
      { flag: "🇮🇹", name: "Italy", slug: "italy" },
      { flag: "🇲🇨", name: "Monaco", slug: "monaco-country" },
      { flag: "🇵🇹", name: "Portugal", slug: "portugal" },
      { flag: "🇪🇸", name: "Spain", slug: "spain" },
      { flag: "🇨🇭", name: "Switzerland", slug: "switzerland" },
      { flag: "🇬🇧", name: "United Kingdom", slug: "united-kingdom" },
    ],
  },
  {
    title: "Asia & Middle East",
    countries: [
      { flag: "🇦🇪", name: "United Arab Emirates", slug: "uae" },
      { flag: "🇮🇱", name: "Israel", slug: "israel" },
      { flag: "🇶🇦", name: "Qatar", slug: "qatar" },
      { flag: "🇮🇳", name: "India", slug: "india" },
      { flag: "🇹🇭", name: "Thailand", slug: "thailand" },
      { flag: "🇯🇵", name: "Japan", slug: "japan" },
    ],
  },
  {
    title: "Australia & Pacific",
    countries: [
      { flag: "🇦🇺", name: "Australia", slug: "australia" },
      { flag: "🇳🇿", name: "New Zealand", slug: "new-zealand" },
      { flag: "🇫🇯", name: "Fiji", slug: "fiji" },
    ],
  },
  {
    title: "Africa",
    countries: [
      { flag: "🇰🇪", name: "Kenya", slug: "kenya" },
      { flag: "🇲🇺", name: "Mauritius", slug: "mauritius" },
      { flag: "🇲🇦", name: "Morocco", slug: "morocco" },
      { flag: "🇿🇦", name: "South Africa", slug: "south-africa" },
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
                      <Link
                        to={`/country/${c.slug}`}
                        className="font-body text-xs text-primary hover:underline flex items-center gap-2"
                      >
                        <span>{c.flag}</span>
                        {c.name}
                      </Link>
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
