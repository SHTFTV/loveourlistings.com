import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Joseph Azimi",
    brokerage: "IDO Realty Inc.",
    specialty: "Ultra-Luxury · Yorkville · Bridle Path",
    bio: "Ranked one of Toronto's top luxury real estate agents for the past decade, Joseph Azimi is renowned among colleagues and clients for his integrity, loyalty, and professionalism. Specializing in Greater Toronto's most prestigious addresses, Joseph combines market intelligence with a relentless work ethic.",
    phone: "(647) 588-7171",
    website: "https://www.idorealestate.ca",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop&crop=top",
    accolades: "Top Luxury Agent · 10+ Years",
  },
  {
    name: "Trevor Fontaine",
    brokerage: "Sotheby's International Realty Canada",
    specialty: "Freehold · Condos · New Development",
    bio: "As Senior Vice President of Sales at Sotheby's International Realty Canada, Trevor Fontaine has enjoyed over a decade of success marketing and selling all types of luxury real estate in Toronto. His sophisticated approach and Sotheby's global network ensure maximum exposure for every listing.",
    phone: "(416) 476-7117",
    website: "https://trevorfontaineteam.ca",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop&crop=top",
    accolades: "SR Vice President · Sotheby's International",
  },
  {
    name: "Brian Gluckstein",
    brokerage: "Sotheby's International Realty Canada",
    specialty: "Design-Forward · Rosedale · Forest Hill",
    bio: "Brian Gluckstein brings a unique perspective to Toronto luxury real estate, combining his celebrated design expertise with deep market knowledge. Recognized as one of Toronto's top ten agents, Brian's properties are distinguished by their impeccable presentation and curated marketing.",
    website: "https://sothebysrealty.ca",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=top",
    accolades: "Top 10 Toronto Agent · Design Expert",
  },
];

const TorontoAgents = () => (
  <CityAgentsPage
    city="Toronto"
    region="Ontario, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504332-af2856a6a3e2?w=1920&h=1080&fit=crop"
    intro="Toronto is Canada's financial capital and home to some of the country's most valuable real estate. From the tree-lined streets of Rosedale and Forest Hill to the glittering towers of Yorkville, Toronto's luxury market attracts both domestic and international buyers seeking prestige, investment, and an unparalleled urban lifestyle."
    whyContact="These top-ranked Toronto agents have the track records, networks, and market mastery that luxury properties demand. Combined with Love Our Listings' exclusive branding and digital platform, your property will command the attention — and the price — it deserves."
    agents={agents}
  />
);

export default TorontoAgents;
