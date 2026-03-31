import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Ivan Sher",
    brokerage: "IS Luxury",
    specialty: "The Summit · The Ridges · MacDonald Highlands",
    bio: "Owner of IS Luxury, ranked the #1 luxury Las Vegas brokerage by BrokerMetrics, Ivan leads a boutique firm of 22 agents that has set new standards in the ultra-luxury Vegas market, with listings reaching $28.75 million and beyond.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "#1 Luxury Broker Las Vegas",
  },
  {
    name: "Gavin Ernstone",
    brokerage: "IS Luxury",
    specialty: "Seven Hills · Tournament Hills · Luxury High-Rise",
    bio: "Named among Modern Luxury Vegas' top real estate leaders for 2024, Gavin brings unparalleled expertise and dedication to Las Vegas' luxury market, specializing in guard-gated communities and architectural masterpieces.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Modern Luxury Top Leader 2024",
  },
  {
    name: "Forrest Barbee",
    brokerage: "IS Luxury",
    specialty: "Summerlin · Henderson · Strip-View Penthouses",
    bio: "Part of IS Luxury's elite team, Forrest specializes in Las Vegas' most exclusive properties from guard-gated Summerlin estates to Strip-view penthouses, serving high-net-worth clients seeking the ultimate desert luxury lifestyle.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "IS Luxury Elite Agent",
  },
];

const LasVegasAgents = () => (
  <CityAgentsPage
    city="Las Vegas"
    region="NV, US"
    heroImage="https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=1920&h=1080&fit=crop"
    intro="Las Vegas offers a distinguished luxury real estate market with exceptional properties from guard-gated estates in The Summit to modern penthouses overlooking the Strip. These are the city's most trusted luxury listing agents."
    whyContact="Whether you're buying or selling luxury property in Las Vegas, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default LasVegasAgents;
