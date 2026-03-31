import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Sandra Rathe",
    brokerage: "REAL Broker, LLC",
    specialty: "Las Olas · Harbor Beach · Lighthouse Point",
    bio: "Named to America's Top 100 Real Estate Agents with $133 million in annual sales volume, Sandra is one of Fort Lauderdale's most accomplished luxury agents, specializing in waterfront estates and prestige addresses throughout Broward County.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "America's Top 100 · $133M Annual Sales",
  },
  {
    name: "TrustLarry Team",
    brokerage: "TrustLarry Real Estate",
    specialty: "Fort Lauderdale Beach · Rio Vista · Coral Ridge",
    bio: "A close-knit, top-producing team of South Florida real estate professionals headquartered in Fort Lauderdale, TrustLarry has built a reputation for excellence in the luxury waterfront market since 2014.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Top Producing Team",
  },
  {
    name: "South Florida Top Agents",
    brokerage: "Various Premier Brokerages",
    specialty: "Hillsboro Beach · Pompano Beach · Weston",
    bio: "Fort Lauderdale's top luxury agents bring deep expertise in South Florida's intracoastal and oceanfront markets, featured among South Florida Agent Magazine's top snapshots for exceptional client service and market knowledge.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Featured in SFL Agent Magazine",
  },
];

const FortLauderdaleAgents = () => (
  <CityAgentsPage
    city="Fort Lauderdale"
    region="FL, US"
    heroImage="https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=1920&h=1080&fit=crop"
    intro="Harbor Beach deepwater estates with 100+ feet of frontage trade between $8M and $40M, while Las Olas Isles properties command $1,800+ per square foot for new-construction waterfront. Fort Lauderdale's 165 miles of navigable waterways make it America's 'Venice' — and its top agent closed $133 million in annual volume, reflecting a market where yacht-accessible dockage drives pricing as much as square footage."
    whyContact="Fort Lauderdale's luxury waterfront requires agents who understand seawall engineering, dock permits, and tidal impact on insurance — not just aesthetics. The professionals featured here hold America's Top 100 designations and South Florida Agent Magazine recognition, with established buyer networks across Broward County's most coveted intracoastal addresses."
    agents={agents}
  />
);

export default FortLauderdaleAgents;
