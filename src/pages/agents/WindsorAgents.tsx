import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Frank Montello",
    brokerage: "RE/MAX Preferred Realty Ltd.",
    specialty: "Luxury Residential · Riverside · Walkerville",
    bio: "Frank Montello is Windsor's premier luxury real estate specialist, with decades of experience representing the city's finest waterfront estates and heritage properties. His deep roots in the community and unmatched market knowledge make him the trusted choice for Windsor's most prestigious transactions.",
    website: "https://www.remax.ca",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Jennifer Chicken",
    brokerage: "Keller Williams Lifestyles Realty",
    specialty: "Waterfront · South Windsor · LaSalle",
    bio: "Jennifer Chicken brings energy and expertise to Windsor's luxury market, specializing in waterfront properties and premium homes in South Windsor and LaSalle. Her innovative marketing approach and dedication to client satisfaction have quickly established her as one of the region's top luxury agents.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Keller Williams Top Producer",
  },
  {
    name: "Dominic Facchineri",
    brokerage: "Royal LePage Binder Real Estate",
    specialty: "Estate Properties · Tecumseh · Amherstburg",
    bio: "Dominic Facchineri is a respected luxury agent in the Windsor-Essex region, known for his expertise in estate properties across Tecumseh and Amherstburg. His strong negotiation skills and comprehensive marketing strategies consistently deliver exceptional results for luxury buyers and sellers.",
    website: "https://www.royallepage.ca",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
];

const WindsorAgents = () => (
  <CityAgentsPage
    city="Windsor"
    region="Ontario, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Windsor's luxury real estate market features stunning waterfront estates along the Detroit River, heritage homes in Walkerville, and executive properties in South Windsor. As Ontario's southernmost city with a unique cross-border lifestyle, Windsor offers distinctive luxury living at exceptional value."
    whyContact="Whether you're buying or selling luxury property in Windsor, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default WindsorAgents;
