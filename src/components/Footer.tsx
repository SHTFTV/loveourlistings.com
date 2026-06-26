import logo from "@/assets/logo.png";
import { NETWORK_LINKS } from "@/data/pricingMatrix";

const CORE = [
  { label: "Home", href: "/" },
  { label: "Pricing & Slot Matrix", href: "/pricing" },
  { label: "Guest Post", href: "/guest-post" },
  { label: "SEO Realtor Page", href: "/seo-realtor" },
  { label: "Celebrity Estates", href: "/celebrity-estates" },
  { label: "Heart-Shaped Sign", href: "/pricing#heart-sign" },
  { label: "About Love Our Listings", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const FEATURED = [
  { label: "Waterfront Estates", href: "/destinations/waterfront" },
  { label: "Ski Villages", href: "/destinations/ski-villages" },
  { label: "Wine Country", href: "/destinations/wine-country" },
  { label: "Island Retreats", href: "/destinations/island-retreats" },
  { label: "Bridle Path Toronto", href: "/listing/bridle-path-toronto" },
  { label: "Beverly Hills Estate", href: "/listing/beverly-hills-estate" },
  { label: "Bel Air Estate", href: "/listing/bel-air-estate" },
  { label: "Shaughnessy Vancouver", href: "/listing/shaughnessy-vancouver" },
];

const TERRITORIES = [
  { label: "Vancouver", href: "/agents/vancouver" },
  { label: "West Vancouver", href: "/agents/west-vancouver" },
  { label: "Toronto", href: "/agents/toronto" },
  { label: "Whistler", href: "/agents/whistler" },
  { label: "Victoria", href: "/agents/victoria" },
  { label: "Kelowna", href: "/agents/kelowna" },
  { label: "Monaco", href: "/country/monaco-country" },
  { label: "United Kingdom", href: "/country/united-kingdom" },
  { label: "Italy", href: "/country/italy" },
  { label: "France", href: "/country/france" },
  { label: "Switzerland", href: "/country/switzerland" },
  { label: "United Arab Emirates", href: "/country/uae" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Network strip */}
        <div className="border-y border-border py-6 mb-12 flex flex-wrap items-center justify-between gap-6">
          <p className="font-body text-[10px] tracking-[4px] uppercase text-primary font-bold">
            The Industry Army Network
          </p>
          <div className="flex flex-wrap items-center gap-6">
            {NETWORK_LINKS.map((n) => (
              <a
                key={n.href}
                href={n.href}
                target="_blank"
                rel="noopener"
                className="font-body text-[11px] tracking-[3px] uppercase text-foreground/60 hover:text-primary transition-colors"
              >
                {n.name}
              </a>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <img src={logo} alt="Love Our Listings" className="h-14 w-auto mb-5" />
            <p className="font-body text-xs text-muted-foreground leading-relaxed mb-4">
              The editorial home of the world's most exceptional listings. Published by Industry Army Marketing.
            </p>
            <a href="mailto:love@loveourlistings.com" className="font-body text-xs text-primary hover:underline">
              love@loveourlistings.com
            </a>
          </div>

          <div>
            <h4 className="font-display text-sm font-black uppercase tracking-[3px] text-foreground mb-5">The Core</h4>
            <ul className="space-y-2.5">
              {CORE.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-black uppercase tracking-[3px] text-foreground mb-5">Featured Opportunities</h4>
            <ul className="space-y-2.5">
              {FEATURED.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-black uppercase tracking-[3px] text-foreground mb-5">Territory Directory</h4>
            <ul className="space-y-2.5">
              {TERRITORIES.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[11px] text-muted-foreground tracking-wide">
            © {new Date().getFullYear()} Love Our Listings · An Industry Army Marketing brand
          </p>
          <p className="font-body text-[11px] text-muted-foreground tracking-wide">
            Lower Mainland · Langley · Toronto · Beverly Hills
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
