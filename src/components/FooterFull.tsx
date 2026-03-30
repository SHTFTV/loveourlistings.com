import logo from "@/assets/logo.png";

const FooterFull = () => {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-display text-sm font-bold text-foreground mb-4">Social</h4>
            <ul className="space-y-2">
              {["Facebook", "Instagram", "LinkedIn", "Pinterest", "YouTube"].map((s) => (
                <li key={s}>
                  <a href="#" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold text-foreground mb-4">Properties</h4>
            <ul className="space-y-2">
              {["Homes For Sale", "Luxury Estates", "Waterfront", "Acreage", "New Construction"].map((s) => (
                <li key={s}>
                  <a href="#" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold text-foreground mb-4">Partners</h4>
            <ul className="space-y-2">
              {["Agencies", "Professionals", "Heart Sign Partners", "Beewarm Mechanical"].map((s) => (
                <li key={s}>
                  <a href="#" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold text-foreground mb-4">About</h4>
            <ul className="space-y-2">
              {["About LHP", "Contact Us", "Media & Events", "Awards", "Blog"].map((s) => (
                <li key={s}>
                  <a href="#" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={logo} alt="Love Our Listings" className="h-10 w-auto" />
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Love Our Listings · Luxury Heart Portfolio
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterFull;
