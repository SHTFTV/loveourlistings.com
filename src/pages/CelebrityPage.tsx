import { useEffect, useState } from "react";
import { Instagram, Youtube, ArrowRight, Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLuxuryRss } from "@/hooks/useLuxuryRss";
import SmartImage from "@/components/SmartImage";
import ImageDebugOverlay from "@/components/ImageDebugOverlay";
import { proxiedImage } from "@/lib/imageProxy";
import feedOne from "@/assets/feed-1.jpg";
import feedTwo from "@/assets/feed-2.jpg";
import feedThree from "@/assets/feed-3.jpg";
import feedFour from "@/assets/feed-4.jpg";

const GOLD = "#b38f4a";
const GOLD_SOFT = "rgba(179,143,74,0.25)";
const BG_DARK = "#0d0d0d";
const BG_PANEL = "#1a1a1a";

type Influencer = {
  name: string;
  title: string;
  markets: string[];
  followers: string;
  bio: string;
  quote?: string;
  videoId?: string;
  videoUrl?: string;
  instagram?: string;
  youtube?: string;
  tiktok?: string;
  instagramUrl?: string;
  youtubeUrl?: string;
  tiktokUrl?: string;
  imageUrl?: string;
  imageAlt?: string;
};

const INFLUENCERS: Influencer[] = [
  {
    name: "Ryan Serhant",
    title: "Founder & CEO, SERHANT.",
    markets: ["New York", "Los Angeles", "Miami", "London"],
    followers: "1.2M",
    bio: "Transformed luxury real estate into a global media brand. SERHANT. closed $6B in 2026. Author, TV host, and the blueprint every modern luxury agent studies.",
    quote: "The market rewards who gets seen first.",
    videoId: "RC2BUPnfJsw",
    videoUrl: "https://www.youtube.com/watch?v=RC2BUPnfJsw",
    instagram: "@ryanserhant",
    instagramUrl: "https://instagram.com/ryanserhant",
    youtube: "Ryan Serhant",
    youtubeUrl: "https://youtube.com/@RyanSerhant",
  },
  {
    name: "Fredrik Eklund",
    title: "Co-Founder, Eklund | Gomes Team · Douglas Elliman",
    markets: ["New York", "Miami", "Los Angeles"],
    followers: "800K",
    bio: "Million Dollar Listing NY star. Closed $3B+ in luxury in 2026 including record waterfront penthouses. Known for his signature high kick and even higher closing rate.",
    quote: "Luxury buyers find you because you built something worth finding.",
    videoId: "e5cCCOLWrvU",
    videoUrl: "https://www.youtube.com/watch?v=e5cCCOLWrvU",
    instagram: "@fredrikeklund",
    instagramUrl: "https://instagram.com/fredrikeklund",
    youtube: "Fredrik Eklund",
    youtubeUrl: "https://youtube.com/@FredrikEklund",
  },
  {
    name: "Jason Oppenheim",
    title: "President & Founder, The Oppenheim Group",
    markets: ["Los Angeles", "Newport Beach", "London", "Mallorca"],
    followers: "750K",
    bio: "The face of Selling Sunset. Manages LA's most elite brokerage while expanding into European luxury markets. Equal parts attorney and closer.",
    quote: "Own your market online, own it in reality.",
    videoId: "L6KlAaVmaAE",
    videoUrl: "https://www.youtube.com/watch?v=L6KlAaVmaAE",
    instagram: "@jasonoppenheim",
    instagramUrl: "https://instagram.com/jasonoppenheim",
  },
  {
    name: "Darren Kriz",
    title: "Luxury Property Content Creator",
    markets: ["Los Angeles", "Beverly Hills", "Malibu"],
    followers: "145K · 300M views",
    bio: "The definitive luxury home tour channel. 300 million views walking through mansions, penthouses and celebrity estates. Pure aspirational content that drives serious buyer intent.",
    quote: "300M views. The audience that watches these homes is the audience that buys them.",
    videoId: "PzGhN75RFxA",
    videoUrl: "https://www.youtube.com/watch?v=PzGhN75RFxA",
    youtube: "Darren Kriz",
    youtubeUrl: "https://youtube.com/@DarrenKriz",
    instagram: "@darrenkriz",
    instagramUrl: "https://instagram.com/darrenkriz",
  },
  {
    name: "Brendan Fitzpatrick",
    title: "Global Luxury Property Specialist",
    markets: ["Dubai", "Los Angeles", "London"],
    followers: "400K",
    bio: "One of the few agents operating credibly across three continents. His international luxury content bridges Gulf, European and American buyer audiences — exactly the crossover Love Our Listings was built for.",
    instagram: "@brendanfitzpatrick",
    instagramUrl: "https://instagram.com/brendanfitzpatrick",
    imageUrl: feedOne,
    imageAlt: "Luxury penthouse interior representing Brendan Fitzpatrick's global real estate media profile",
  },
  {
    name: "Heather Rae El Moussa",
    title: "Luxury Real Estate Agent · Oppenheim Group",
    markets: ["Orange County", "Los Angeles"],
    followers: "1.8M",
    bio: "Selling Sunset star turned luxury lifestyle authority. Her audience of aspirational HNW buyers is one of the most engaged in real estate media. Co-developing luxury properties with Tarek El Moussa.",
    instagram: "@heatherraeelmoussa",
    instagramUrl: "https://instagram.com/heatherraeelmoussa",
    imageUrl: feedTwo,
    imageAlt: "Luxury resort-style villa representing Heather Rae El Moussa's real estate audience",
  },
  {
    name: "Tatiana Londono",
    title: "Founder, Londono Realty Group · TV Host",
    markets: ["Miami", "Colombia", "Latin America"],
    followers: "600K",
    bio: "Founder of Londono Realty Group and host of The Property Shop. Combines high-end property marketing with agent mentorship — a direct pipeline to the ambitious luxury agents Love Our Listings wants to attract.",
    instagram: "@tatianalondono",
    instagramUrl: "https://instagram.com/tatianalondono",
    imageUrl: feedFour,
    imageAlt: "Gated luxury estate representing Tatiana Londono's luxury property media profile",
  },
  {
    name: "Grant Cardone",
    title: "Founder, Cardone Capital",
    markets: ["Miami", "New York", "National"],
    followers: "5M",
    bio: "Built a multibillion-dollar real estate empire on the 10X philosophy. His audience of wealth-builders and investors overlaps directly with ultra-luxury buyer profiles across every market Love Our Listings serves.",
    instagram: "@grantcardone",
    instagramUrl: "https://instagram.com/grantcardone",
    youtube: "Grant Cardone",
    youtubeUrl: "https://youtube.com/@GrantCardone",
    imageUrl: feedThree,
    imageAlt: "Modern luxury mansion representing Grant Cardone's real estate investment audience",
  },
];

const initialsOf = (name: string) =>
  name.split(/\s+/).map((n) => n[0]).slice(0, 2).join("").toUpperCase();

const FEED_TABS = ["All", "Properties", "Design", "Market Intel", "Celebrity"] as const;
type Tab = typeof FEED_TABS[number];

const matchesTab = (text: string, tab: Tab) => {
  if (tab === "All") return true;
  const t = text.toLowerCase();
  if (tab === "Properties") return /home|estate|mansion|listing|property|penthouse|villa|residence/.test(t);
  if (tab === "Design") return /design|architect|interior|decor|style|aesthetic/.test(t);
  if (tab === "Market Intel") return /market|price|sale|deal|invest|index|trend|report/.test(t);
  if (tab === "Celebrity") return /celebrity|star|billionaire|founder|ceo|royal|famous/.test(t);
  return true;
};

const formatDate = (iso: string | null) => {
  if (!iso) return "";
  try { return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }); } catch { return ""; }
};

const Monogram = ({ name }: { name: string }) => (
  <div
    className="w-20 h-20 rounded-full flex items-center justify-center mb-5"
    style={{ backgroundColor: BG_DARK, border: `1px solid ${GOLD}` }}
  >
    <span style={{ color: GOLD, fontFamily: "Georgia, serif" }} className="text-2xl font-bold tracking-wide">
      {initialsOf(name)}
    </span>
  </div>
);

const VideoThumb = ({ name, videoId, videoUrl }: { name: string; videoId: string; videoUrl: string }) => {
  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Watch ${name} on YouTube`}
      className="group block mb-5 -mx-6 -mt-6 relative overflow-hidden"
      style={{ backgroundColor: "#000", aspectRatio: "16 / 9" }}
    >
      <div className="absolute inset-0">
        <SmartImage
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt={`${name} video thumbnail`}
          fallbackInitials={initialsOf(name)}
          context={`video:${name}`}
          imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          className="w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
        style={{ backgroundColor: GOLD }}
      >
        <Play className="w-6 h-6 fill-current" style={{ color: BG_DARK }} />
      </div>
    </a>
  );
};

const StaticThumb = ({ name, src, alt }: { name: string; src: string; alt: string }) => (
  <div
    data-testid="static-thumb"
    className="group block mb-5 -mx-6 -mt-6 relative overflow-hidden"
    style={{ backgroundColor: "#000", aspectRatio: "16 / 9" }}
  >
    <SmartImage
      src={src}
      alt={alt}
      fallbackInitials={initialsOf(name)}
      context={`influencer:${name}`}
      imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      className="w-full h-full"
    />
    <div className="absolute inset-0 bg-black/15" />
  </div>
);

const InfluencerCard = ({ p }: { p: Influencer }) => (
  <article
    className="relative p-6 transition-all duration-300"
    style={{ backgroundColor: p.videoId ? "#141414" : BG_PANEL, border: `1px solid ${GOLD_SOFT}` }}
    onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 0 24px ${GOLD_SOFT}`)}
    onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
  >
    <span
      className="absolute top-4 right-4 px-3 py-1 text-[10px] tracking-[2px] uppercase font-bold rounded-full"
      style={{ backgroundColor: GOLD, color: BG_DARK }}
    >
      {p.followers}
    </span>

    {p.videoId && p.videoUrl ? (
      <VideoThumb name={p.name} videoId={p.videoId} videoUrl={p.videoUrl} />
    ) : p.imageUrl ? (
      <StaticThumb name={p.name} src={p.imageUrl} alt={p.imageAlt || `${p.name} luxury real estate image`} />
    ) : (
      <Monogram name={p.name} />
    )}

    <h3 style={{ fontFamily: "Georgia, serif", color: "#fff" }} className="text-xl font-bold mb-1 leading-tight">{p.name}</h3>
    <p className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>{p.title}</p>

    <div className="flex flex-wrap gap-1.5 mb-4">
      {p.markets.map((m) => (
        <span
          key={m}
          className="text-[10px] tracking-[1px] uppercase px-2 py-1"
          style={{ color: GOLD, border: `1px solid ${GOLD_SOFT}` }}
        >
          {m}
        </span>
      ))}
    </div>

    {p.quote ? (
      <p className="text-sm leading-relaxed mb-5 italic" style={{ color: "rgba(255,255,255,0.85)", fontFamily: "Georgia, serif" }}>
        “{p.quote}”
      </p>
    ) : (
      <p className="text-sm leading-relaxed mb-5 line-clamp-3" style={{ color: "rgba(255,255,255,0.75)" }}>{p.bio}</p>
    )}

    <div className="flex items-center gap-3 mb-5">
      {p.instagramUrl && (
        <a href={p.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} on Instagram`} style={{ color: GOLD }}>
          <Instagram className="w-4 h-4" />
        </a>
      )}
      {p.youtubeUrl && (
        <a href={p.youtubeUrl} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} on YouTube`} style={{ color: GOLD }}>
          <Youtube className="w-4 h-4" />
        </a>
      )}
      {p.tiktokUrl && (
        <a href={p.tiktokUrl} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} on TikTok`} style={{ color: GOLD }} className="text-xs font-bold">
          TT
        </a>
      )}
    </div>

    <a
      href={p.instagramUrl || p.youtubeUrl || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="block text-center text-xs tracking-[3px] uppercase font-bold py-3 transition-colors"
      style={{ border: `1px solid ${GOLD}`, color: GOLD }}
      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = GOLD; e.currentTarget.style.color = BG_DARK; }}
      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = GOLD; }}
    >
      Follow
    </a>
  </article>
);

const CelebrityPage = () => {
  const [tab, setTab] = useState<Tab>("All");
  const { posts } = useLuxuryRss(24);

  useEffect(() => {
    document.title = "Luxury Real Estate Influencers & Industry Leaders | Love Our Listings";
    const ensureMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    ensureMeta(
      "description",
      "Discover the agents, brokers and tastemakers shaping ultra-luxury real estate worldwide. Follow the voices defining the $892B global luxury property market.",
    );
    ensureMeta("og:title", "Luxury Real Estate Influencers | Love Our Listings", "property");
    ensureMeta(
      "og:description",
      "The agents, brokers and tastemakers defining ultra-luxury property worldwide.",
      "property",
    );
    ensureMeta("og:url", "https://heart-estate-hub.lovable.app/celebrity", "property");

    const itemList = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Luxury Real Estate Influencers",
      itemListElement: INFLUENCERS.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Person",
          name: p.name,
          jobTitle: p.title,
          description: p.bio,
          sameAs: [p.instagramUrl, p.youtubeUrl, p.tiktokUrl].filter(Boolean),
        },
      })),
    };
    const id = "lol-celebrity-jsonld";
    document.getElementById(id)?.remove();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    script.text = JSON.stringify(itemList);
    document.head.appendChild(script);
    return () => { document.getElementById(id)?.remove(); };
  }, []);

  const filteredPosts = posts.filter((p) => matchesTab(`${p.title} ${p.description ?? ""}`, tab)).slice(0, 6);

  return (
    <div className="min-h-screen" style={{ backgroundColor: BG_DARK, color: "#fff" }}>
      <Navbar />

      {/* HERO */}
      <section
        className="relative pt-32 pb-24 px-6 md:px-12"
        style={{
          background: `linear-gradient(180deg, rgba(0,0,0,0.85), ${BG_DARK}), radial-gradient(circle at 20% 20%, rgba(179,143,74,0.15), transparent 60%)`,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] tracking-[6px] uppercase mb-6" style={{ color: GOLD }}>The Voices</p>
          <h1 style={{ fontFamily: "Georgia, serif", color: "#fff" }} className="text-5xl md:text-7xl font-bold leading-[1.02] mb-6">
            Who's Shaping<br />Luxury Real Estate
          </h1>
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed" style={{ color: GOLD }}>
            The agents, brokers and tastemakers defining ultra-luxury property worldwide.
          </p>
        </div>
      </section>

      {/* INFLUENCER GRID */}
      <section className="px-6 md:px-12 py-20" style={{ backgroundColor: BG_PANEL }}>
        <div className="max-w-7xl mx-auto">
          <div data-testid="influencer-grid" className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {INFLUENCERS.map((p) => <InfluencerCard key={p.name} p={p} />)}
          </div>
        </div>
      </section>

      {/* SECTION A: Apply CTA */}
      <section className="px-6 md:px-12 py-24" style={{ backgroundColor: BG_DARK }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 style={{ fontFamily: "Georgia, serif", color: "#fff" }} className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Are You the Next Voice in<br />Luxury Real Estate?
          </h2>
          <p className="text-base md:text-lg mb-10 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
            Love Our Listings is building a verified network of luxury agents with influence. If you close deals and create content, we want to feature you.
          </p>
          <a
            href="/apply"
            className="inline-block px-10 py-4 text-xs tracking-[4px] uppercase font-bold transition-transform hover:scale-[1.02]"
            style={{ backgroundColor: GOLD, color: BG_DARK }}
          >
            Apply for Featured Agent Status
          </a>
        </div>
      </section>

      {/* SECTION B: Fresh From Their Feeds */}
      <section className="px-6 md:px-12 py-20" style={{ backgroundColor: BG_PANEL }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 style={{ fontFamily: "Georgia, serif", color: "#fff" }} className="text-3xl md:text-4xl font-bold mb-3">Fresh From Their Feeds</h2>
            <p style={{ color: GOLD }} className="text-sm tracking-[2px] uppercase">Latest luxury real estate content from across the network</p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {FEED_TABS.map((t) => {
              const active = tab === t;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTab(t)}
                  className="px-4 py-2 text-[11px] tracking-[2px] uppercase transition-colors"
                  style={{
                    border: `1px solid ${GOLD_SOFT}`,
                    backgroundColor: active ? GOLD : "transparent",
                    color: active ? BG_DARK : GOLD,
                  }}
                >
                  {t}
                </button>
              );
            })}
          </div>

          {filteredPosts.length === 0 ? (
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>No posts match this filter yet — try another tab.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <a
                  key={post.id}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group transition-all"
                  style={{ backgroundColor: BG_DARK, border: `1px solid ${GOLD_SOFT}` }}
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 0 24px ${GOLD_SOFT}`)}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
                >
                  <div className="aspect-[16/10] overflow-hidden" style={{ backgroundColor: BG_PANEL }}>
                    <SmartImage
                      src={proxiedImage(post.image_url)}
                      alt={post.title}
                      fallbackInitials="LOL"
                      context={`rss:${post.source}`}
                      imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between text-[10px] tracking-[2px] uppercase mb-3">
                      <span style={{ color: GOLD }}>{post.source === "sothebys" ? "Sotheby's" : post.source === "robb-report" ? "Robb Report" : post.source}</span>
                      <span style={{ color: "rgba(255,255,255,0.5)" }}>{formatDate(post.published_at)}</span>
                    </div>
                    <h3 style={{ fontFamily: "Georgia, serif", color: "#fff" }} className="text-lg font-bold leading-tight mb-3 line-clamp-3">{post.title}</h3>
                    <span className="inline-flex items-center gap-2 text-[11px] tracking-[2px] uppercase" style={{ color: GOLD }}>
                      Read More <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* STICKY SIDE CTA */}
      <a
        href="/apply"
        className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 px-5 py-3 text-xs tracking-[3px] uppercase font-bold items-center gap-2 origin-right -rotate-90 translate-x-[calc(100%-44px)] hover:translate-x-0 transition-transform"
        style={{ backgroundColor: GOLD, color: "#fff" }}
      >
        🏛 List Your Territory →
      </a>

      <Footer />
      <ImageDebugOverlay />
    </div>
  );
};

export default CelebrityPage;