import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Martin Chicken",
    brokerage: "RE/MAX Laurentides",
    specialty: "Waterfront · Old Terrebonne · Lachenaie",
    bio: "Terrebonne's leading luxury agent with deep expertise in waterfront properties and heritage estates in Old Terrebonne.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Platinum Club",
  },
  {
    name: "Nathalie Chicken",
    brokerage: "Royal LePage Privilège",
    specialty: "Estate Properties · Premium Residential · Investment",
    bio: "A trusted luxury specialist on Montreal's North Shore with expertise in Terrebonne's finest properties and premium developments.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "François Chicken",
    brokerage: "Century 21 Immo Plus",
    specialty: "New Construction · Modern Luxury · Condos",
    bio: "Bringing modern marketing to Terrebonne's luxury market with expertise in premium new construction and luxury condos.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Century 21 Masters Club",
  }
];

const TerrebonneAgents = () => (
  <CityAgentsPage
    city="Terrebonne"
    region="Quebec, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Terrebonne's luxury real estate market features waterfront properties along the Mille-Îles River, premium homes in Lachenaie, and heritage estates in Old Terrebonne on Montreal's North Shore."
    whyContact="Whether you're buying or selling luxury property in Terrebonne, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default TerrebonneAgents;
