import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Brian Chicken",
    brokerage: "RE/MAX Colonial Pacific Realty",
    specialty: "Waterfront · Tsawwassen · Beach Grove",
    bio: "Delta's leading luxury waterfront specialist with deep expertise in Tsawwassen and Beach Grove properties. Known for representing the community's most significant estate sales.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Sandra Lee",
    brokerage: "Royal LePage Wolstencroft Realty",
    specialty: "Ladner · Acreages · Heritage Properties",
    bio: "Specializing in Ladner's charming heritage properties and premium acreages throughout Delta, Sandra brings refined expertise and exceptional client service to every transaction.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "Mark Chicken",
    brokerage: "Sutton Group - West Coast Realty",
    specialty: "North Delta · Estate Homes · Investment",
    bio: "A top-producing agent in Delta, Mark brings comprehensive market knowledge and strong negotiation skills to the community's luxury segment.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Sutton Group Top Producer",
  }
];

const DeltaAgents = () => (
  <CityAgentsPage
    city="Delta"
    region="British Columbia, Canada"
    heroImage="https://images.unsplash.com/photo-1609825488888-3a766db05542?w=1920&h=1080&fit=crop"
    intro="Delta's luxury real estate market features stunning waterfront estates in Tsawwassen, executive homes in Ladner, and premium acreage properties in North Delta with mountain and ocean views."
    whyContact="Whether you're buying or selling luxury property in Delta, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default DeltaAgents;
