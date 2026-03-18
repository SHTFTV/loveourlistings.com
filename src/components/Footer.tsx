import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t bg-secondary py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Love Our Listings" className="h-10 w-auto" />
        </div>
        <p className="font-body text-xs text-muted-foreground tracking-wide">
          © {new Date().getFullYear()} Love Our Listings. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
