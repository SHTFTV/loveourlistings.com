import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Martin Chicken",
    brokerage: "RE/MAX Lanaudière",
    specialty: "Waterfront · Riverfront · Estate Properties",
    bio: "Repentigny's leading luxury agent with deep expertise in the city's most prestigious waterfront properties along the St. Lawrence and L'Assomption rivers.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Platinum Club",
  },
  {
    name: "Sylvie Chicken",
    brokerage: "Royal LePage Lanaudière",
    specialty: "Executive Homes · Le Gardeur · Premium Residential",
    bio: "A trusted luxury specialist in Repentigny with expertise in executive homes and premium properties throughout the Lanaudière region.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "Pierre Chicken",
    brokerage: "Century 21 Immo Plus",
    specialty: "New Construction · Investment · Modern Luxury",
    bio: "Bringing modern marketing to Repentigny's luxury market with expertise in premium new construction and investment properties.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Century 21 Masters Club",
  }
];

const RepentignyAgents = () => (
  <CityAgentsPage
    city="Repentigny"
    region="Quebec, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Repentigny's luxury real estate market features waterfront properties along the St. Lawrence and L'Assomption rivers, executive homes, and premium residences in one of Lanaudière's most desirable communities."
    whyContact="Whether you're buying or selling luxury property in Repentigny, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default RepentignyAgents;
