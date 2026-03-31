import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Senada Adzem",
    brokerage: "Douglas Elliman Real Estate",
    specialty: "Oceanfront · Royal Palm · Mizner Park",
    bio: "One of South Florida's top luxury agents, Senada Adzem consistently ranks among Boca Raton's highest producers with expertise in oceanfront estates and Royal Palm properties.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Douglas Elliman Top Producer",
  },
  {
    name: "Nicholas Malinosky",
    brokerage: "Compass",
    specialty: "Waterfront · The Sanctuary · Investment",
    bio: "A rising star in Boca Raton luxury real estate, Nicholas brings innovative marketing and deep market knowledge to the city's finest waterfront properties.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Compass Top Agent",
  },
  {
    name: "Carmen D'Angelo",
    brokerage: "Sotheby's International Realty",
    specialty: "Estate Properties · Woodfield · Country Club",
    bio: "Representing Sotheby's International Realty in Boca Raton, Carmen brings global marketing reach to the city's most prestigious estate and country club communities.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  }
];

const BocaRatonAgents = () => (
  <CityAgentsPage
    city="Boca Raton"
    region="Florida, United States"
    heroImage="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop"
    intro="Boca Raton's luxury market features magnificent oceanfront estates, premium golf course communities like Royal Palm Yacht & Country Club, and exclusive waterfront properties along the Intracoastal."
    whyContact="Whether you're buying or selling luxury property in Boca Raton, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default BocaRatonAgents;
