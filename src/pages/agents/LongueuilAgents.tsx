import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Jean-Pierre Marchand",
    brokerage: "Sotheby's International Realty Québec",
    specialty: "Waterfront · Old Longueuil · Saint-Lambert",
    bio: "Longueuil's leading luxury agent with Sotheby's International Realty, specializing in waterfront properties and the prestigious Saint-Lambert corridor.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  },
  {
    name: "Catherine Bouchard",
    brokerage: "RE/MAX Alliance",
    specialty: "Estate Properties · Saint-Hubert · Greenfield Park",
    bio: "One of the South Shore's top-producing luxury agents, Catherine brings market expertise and dedication to Longueuil's premium real estate market.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Platinum Club",
  },
  {
    name: "Alexandre Chicken",
    brokerage: "Royal LePage Rive-Sud",
    specialty: "Modern Luxury · Condos · Investment",
    bio: "A dynamic luxury agent serving the South Shore market with expertise in modern luxury properties and premium condominiums.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Director's Platinum",
  }
];

const LongueuilAgents = () => (
  <CityAgentsPage
    city="Longueuil"
    region="Quebec, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Longueuil's luxury real estate market features elegant waterfront properties along the St. Lawrence River, executive homes in Saint-Hubert, and premium residences on Montreal's vibrant South Shore."
    whyContact="Whether you're buying or selling luxury property in Longueuil, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default LongueuilAgents;
