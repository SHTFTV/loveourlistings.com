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
    intro="Gatineau's luxury market features riverfront estates along the Ottawa River in Aylmer, executive homes in the Plateau sector, and heritage properties in Vieux-Hull with Parliament Hill views. With Quebec's lower property taxes compared to neighbouring Ottawa and median luxury prices above $1.2 million, Gatineau attracts bilingual executives, federal employees, and cross-border buyers seeking value in the National Capital Region."
    whyContact="Gatineau's interprovincial transaction complexities, Quebec land transfer taxes, and Aylmer heritage-district building restrictions require agents fluent in both official languages and both provincial regulatory systems. The specialists listed here close premium deals in Aylmer, the Plateau, and Vieux-Hull — each eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default GatineauAgents;
