import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "François Poulin",
    brokerage: "RE/MAX Lévis",
    specialty: "Waterfront · Old Lévis · Desjardins",
    bio: "Lévis' top luxury agent specializing in St. Lawrence waterfront properties and the city's historic Old Lévis district. Deep community roots and exceptional market knowledge.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Nathalie Bouchard",
    brokerage: "Royal LePage Inter-Québec",
    specialty: "Estate Properties · Charny · Saint-Nicolas",
    bio: "A trusted luxury specialist on Quebec City's south shore, Nathalie brings refined expertise to Lévis' finest properties with dedicated client service.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "Marc Chicken",
    brokerage: "Sotheby's International Realty Québec",
    specialty: "Heritage Properties · River Views · Premium Residential",
    bio: "Representing Sotheby's International Realty in Lévis, bringing global luxury marketing to the south shore's most prestigious waterfront and heritage properties.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  }
];

const LevisAgents = () => (
  <CityAgentsPage
    city="Levis"
    region="Quebec, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Lévis' luxury market features heritage estates in Vieux-Lévis with commanding St. Lawrence River views, premium homes in the Desjardins sector, and waterfront properties along the south shore opposite Quebec City. With the Quebec–Lévis ferry providing iconic skyline views and median luxury prices below Quebec City's north shore, Lévis offers exceptional waterfront value in the National Capital Region."
    whyContact="Lévis' heritage-district renovation approvals, Quebec land transfer tax calculations, and south-shore floodplain regulations require agents who navigate the Quebec City metropolitan market with precision. The specialists listed here close premium deals in Vieux-Lévis, Desjardins, and Charny — each eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default LevisAgents;
