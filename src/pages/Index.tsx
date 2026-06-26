import { Instagram } from "lucide-react";
import WorldwideLuxury from "@/components/WorldwideLuxury";
import LuxuryNewsFeed from "@/components/LuxuryNewsFeed";
import FooterFull from "@/components/FooterFull";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import siteLogo from "@/assets/logo.png";

const GOLD = "#b38f4a";
const BG = "#0a0a0a";

const NAV = [
  { label: "Markets", href: "/realtors" },
  { label: "Celebrity", href: "/celebrity" },
  { label: "Journal", href: "/#journal" },
  { label: "Apply", href: "/pricing" },
];

const INFLUENCERS = [
  {
    name: "Ryan Serhant",
    handle: "@ryanserhant",
    markets: "New York · LA · Miami",
    quote: "The market rewards who gets seen first.",
  },
  {
    name: "Fredrik Eklund",
    handle: "@fredrikeklund",
    markets: "NYC · Miami · LA",
    quote: "Luxury buyers find you because you built something worth finding.",
  },
  {
    name: "Jason Oppenheim",
    handle: "@jasonoppenheim",
    markets: "LA · London",
    quote: "Own your market online, own it in reality.",
  },
  {
    name: "Darren Kriz",
    handle: "@darrenkriz",
    markets: "Beverly Hills · Malibu",
    quote:
      "300M views. The audience that watches these homes is the audience that buys them.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Claim your territory",
    body:
      "Select your city and lock in one of a limited number of agent slots. Each market is capped — exclusivity is the product.",
  },
  {
    n: "02",
    title: "Get the editorial treatment",
    body:
      "Your profile, listings and guest articles are produced to the standard of a luxury magazine, not a directory ad.",
  },
  {
    n: "03",
    title: "Compound your authority",
    body:
      "Syndication, SEO and the Industry Army network push your name in front of the buyers and sellers who matter.",
  },
];

const initials = (n: string) =>
  n.split(/\s+/).map((p) => p[0]).slice(0, 2).join("").toUpperCase();

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: BG, color: "#fff" }}>
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src={heroVideo.url}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.4)" }} />

        {/* Top nav over hero */}
        <header className="absolute top-0 left-0 right-0 z-20 px-6 md:px-12 py-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src={siteLogo} alt="Love Our Listings" className="h-10 md:h-12 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[11px] tracking-[3px] uppercase font-semibold transition-colors"
                style={{ color: "rgba(255,255,255,0.8)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        {/* Centered hero content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <h1
            style={{ fontFamily: "Georgia, serif" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] max-w-5xl"
          >
            Where the world's finest properties<br className="hidden md:block" /> find their perfect advocate
          </h1>
          <p
            className="mt-6 text-sm md:text-base tracking-[3px] uppercase"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            33 countries · 151 elite markets · Verified agents only
          </p>
          <a
            href="/pricing"
            className="mt-10 inline-block px-10 py-4 text-xs tracking-[4px] uppercase font-bold transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: GOLD, color: BG }}
          >
            Claim Your Territory
          </a>
        </div>
      </section>

      {/* WHO'S WATCHING */}
      <section className="px-6 md:px-12 py-24" style={{ backgroundColor: BG }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-[11px] tracking-[5px] uppercase mb-4" style={{ color: GOLD }}>
              The Audience
            </p>
            <h2
              style={{ fontFamily: "Georgia, serif" }}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              Who's Watching
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {INFLUENCERS.map((p) => (
              <article
                key={p.name}
                className="p-6 flex flex-col"
                style={{ backgroundColor: "#111", border: `1px solid rgba(179,143,74,0.25)` }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: BG, border: `1px solid ${GOLD}` }}
                >
                  <span
                    style={{ color: GOLD, fontFamily: "Georgia, serif" }}
                    className="text-xl font-bold"
                  >
                    {initials(p.name)}
                  </span>
                </div>
                <h3
                  style={{ fontFamily: "Georgia, serif" }}
                  className="text-xl font-bold leading-tight mb-1"
                >
                  {p.name}
                </h3>
                <a
                  href={`https://instagram.com/${p.handle.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs mb-3"
                  style={{ color: GOLD }}
                >
                  <Instagram className="w-3 h-3" /> {p.handle}
                </a>
                <p className="text-[11px] tracking-[2px] uppercase mb-5" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {p.markets}
                </p>
                <p
                  className="text-sm leading-relaxed italic mt-auto pt-5 border-t"
                  style={{ color: "rgba(255,255,255,0.8)", borderColor: "rgba(179,143,74,0.2)", fontFamily: "Georgia, serif" }}
                >
                  "{p.quote}"
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="px-6 md:px-12 py-32" style={{ backgroundColor: "#070707" }}>
        <div className="max-w-5xl mx-auto text-center">
          <p
            style={{ fontFamily: "Georgia, serif", color: "#fff" }}
            className="text-2xl md:text-4xl leading-[1.4] italic"
          >
            "The addresses people dream about have always had one thing in common — the right person knew to answer the call."
          </p>
          <div className="mt-8 inline-block h-px w-16" style={{ backgroundColor: GOLD }} />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 md:px-12 py-24" style={{ backgroundColor: BG }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[11px] tracking-[5px] uppercase mb-4" style={{ color: GOLD }}>
              The Method
            </p>
            <h2 style={{ fontFamily: "Georgia, serif" }} className="text-4xl md:text-5xl font-bold">
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="p-8"
                style={{ border: `1px solid rgba(179,143,74,0.25)`, backgroundColor: "#0f0f0f" }}
              >
                <p
                  style={{ fontFamily: "Georgia, serif", color: GOLD }}
                  className="text-5xl font-bold mb-6"
                >
                  {s.n}
                </p>
                <h3
                  style={{ fontFamily: "Georgia, serif" }}
                  className="text-xl font-bold mb-3 leading-tight"
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIVE FEED */}
      <div id="journal" style={{ backgroundColor: BG }}>
        <LuxuryNewsFeed title="Live From the Luxury Press" limit={6} />
      </div>

      {/* MARKETS */}
      <WorldwideLuxury />

      {/* FINAL CTA */}
      <section className="px-6 md:px-12 py-24" style={{ backgroundColor: GOLD }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2
            style={{ fontFamily: "Georgia, serif", color: "#fff" }}
            className="text-3xl md:text-5xl font-bold leading-tight mb-6"
          >
            Your market only has so many seats.
          </h2>
          <p className="text-base md:text-lg mb-10" style={{ color: "rgba(255,255,255,0.9)" }}>
            Verified agents. Editorial coverage. The Industry Army network behind every listing.
          </p>
          <a
            href="/pricing"
            className="inline-block px-10 py-4 text-xs tracking-[4px] uppercase font-bold transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: "#fff", color: BG }}
          >
            Claim Your Territory
          </a>
        </div>
      </section>

      <FooterFull />
    </div>
  );
};

export default Index;
