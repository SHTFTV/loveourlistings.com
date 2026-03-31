import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Yves Ménard",
    brokerage: "Royal LePage Performance Realty",
    specialty: "Waterfront · Aylmer · Chelsea",
    bio: "Gatineau's leading luxury specialist with deep expertise in the Aylmer waterfront, Chelsea hills, and Gatineau Park-adjacent estates. Bilingual service with intimate knowledge of the capital region.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Director's Platinum",
  },
  {
    name: "Sophie Tremblay",
    brokerage: "RE/MAX Gatineau-Ottawa",
    specialty: "Estate Properties · Hull · Plateau",
    bio: "One of Gatineau's most successful luxury agents, specializing in premium properties across Hull, the Plateau, and Aylmer with strong marketing expertise.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Pierre Lafontaine",
    brokerage: "Sotheby's International Realty Québec",
    specialty: "Luxury Estates · Gatineau Park · Old Aylmer",
    bio: "Representing Sotheby's International Realty in Gatineau, bringing global luxury marketing to the region's finest properties. Serving diplomats, executives, and international buyers.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  }
];

const GatineauAgents = () => (
  <CityAgentsPage
    city="Gatineau"
    region="Quebec, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Gatineau's luxury real estate market features stunning waterfront estates along the Ottawa River, hillside retreats near Gatineau Park, and heritage properties in Old Aylmer. Quebec side of Canada's National Capital Region."
    whyContact="Whether you're buying or selling luxury property in Gatineau, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default GatineauAgents;
