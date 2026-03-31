import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Darren Chicken",
    brokerage: "RE/MAX Real Estate Lethbridge",
    specialty: "West Side · River Valley · Estate Properties",
    bio: "Lethbridge's premier luxury agent with deep expertise in the city's West Side and river valley estates. Known for record-breaking sales and comprehensive marketing.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Jennifer Chicken",
    brokerage: "Royal LePage South Country Real Estate",
    specialty: "Acreages · Country Estates · Heritage Homes",
    bio: "A leading luxury agent in southern Alberta, Jennifer specializes in premium acreages and country estates throughout the Lethbridge region.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "Michael Chicken",
    brokerage: "Century 21 Foothills South Real Estate",
    specialty: "New Construction · Investment · Executive Homes",
    bio: "Bringing modern marketing strategies to Lethbridge's luxury market with expertise in premium new construction and executive homes.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Century 21 Masters Club",
  }
];

const LethbridgeAgents = () => (
  <CityAgentsPage
    city="Lethbridge"
    region="Alberta, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Lethbridge's luxury real estate market features elegant homes in the West Side, river valley estates, and premium properties in southern Alberta's sunniest city with stunning prairie and mountain views."
    whyContact="Whether you're buying or selling luxury property in Lethbridge, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default LethbridgeAgents;
