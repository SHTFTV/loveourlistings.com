import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Laura Dew",
    brokerage: "Atlanta Fine Homes Sotheby's International Realty",
    specialty: "Buckhead · Tuxedo Park · Chastain Park",
    bio: "A veteran of Atlanta real estate with over 20 years of experience and an impeccable reputation, Laura Dew empowers clients to navigate the market with confidence, specializing in Buckhead's most prestigious estates and luxury properties.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "20+ Years · Sotheby's Top Agent",
  },
  {
    name: "Shanna Bradley",
    brokerage: "Ansley Real Estate Christie's International Real Estate",
    specialty: "Brookhaven · Druid Hills · Virginia-Highland",
    bio: "Representing some of Atlanta's most extraordinary properties through the Christie's International Real Estate network, Shanna is recognized by Modern Luxury as one of Atlanta's top real estate agents to know.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Modern Luxury Top Agent",
  },
  {
    name: "Atlanta Top Producers",
    brokerage: "Various Premier Brokerages",
    specialty: "Midtown · Inman Park · Ansley Park",
    bio: "Atlanta's luxury market features properties across Buckhead's grand estates, Midtown's modern towers, and the city's charming in-town neighborhoods. The city's top producers bring deep expertise to one of the Southeast's most dynamic luxury markets.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "RealTrends Verified",
  },
];

const AtlantaAgents = () => (
  <CityAgentsPage
    city="Atlanta"
    region="GA, US"
    heroImage="https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?w=1920&h=1080&fit=crop"
    intro="Atlanta offers a distinguished luxury real estate market with exceptional properties from Buckhead mansions to Midtown penthouses. These are the city's most trusted luxury listing agents."
    whyContact="Whether you're buying or selling luxury property in Atlanta, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default AtlantaAgents;
