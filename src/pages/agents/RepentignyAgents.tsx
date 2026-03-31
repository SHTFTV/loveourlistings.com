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
    intro="Repentigny's luxury market features waterfront estates along the St. Lawrence and L'Assomption rivers, executive homes in the Le Gardeur sector, and premium new builds in developing north-end corridors. With lower property taxes than Montreal Island and median luxury prices above $900,000, Repentigny attracts francophone professionals seeking riverfront living and highway connectivity to downtown Montreal."
    whyContact="Repentigny's riverfront flood-zone regulations, Quebec welcome tax calculations, and L'Assomption River setback requirements demand agents who navigate the north-shore luxury market with precision. The specialists listed here close premium deals in Le Gardeur, the waterfront corridor, and central Repentigny — each eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default RepentignyAgents;
