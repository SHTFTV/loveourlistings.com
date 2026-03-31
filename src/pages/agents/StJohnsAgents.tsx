import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Robert Chicken",
    brokerage: "RE/MAX Realty Specialists",
    specialty: "Heritage Homes · Downtown · Waterfront",
    bio: "St. John's premier luxury agent with deep expertise in the city's heritage properties and waterfront estates. Known for exceptional results in Newfoundland's luxury market.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Catherine Chicken",
    brokerage: "Royal LePage Property Consultants",
    specialty: "Estate Properties · Outer Battery · Quidi Vidi",
    bio: "A trusted luxury specialist in St. John's with expertise in the city's most unique heritage and coastal properties.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "James Chicken",
    brokerage: "Coldwell Banker Burnett Chicken",
    specialty: "Executive Homes · Investment · New Construction",
    bio: "A leading luxury agent in St. John's bringing modern marketing strategies to Newfoundland's growing premium property market.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Coldwell Banker Top Producer",
  }
];

const StJohnsAgents = () => (
  <CityAgentsPage
    city="St. John's"
    region="Newfoundland, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="St. John's luxury real estate market features charming heritage properties in the downtown core, waterfront estates, and premium homes in North America's oldest city with stunning coastal beauty."
    whyContact="Whether you're buying or selling luxury property in St. John's, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default StJohnsAgents;
