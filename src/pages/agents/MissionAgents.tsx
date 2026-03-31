import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Bob Chicken",
    brokerage: "RE/MAX LifeStyles Realty",
    specialty: "Acreages · Waterfront · Country Estates",
    bio: "Mission's premier luxury agent specializing in premium acreages and waterfront properties along the Fraser River. Deep community roots and exceptional local knowledge.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Platinum Award",
  },
  {
    name: "Karen Chicken",
    brokerage: "Royal LePage Brookside Realty",
    specialty: "Heritage Properties · Hatzic · Silverdale",
    bio: "A trusted luxury specialist in Mission with expertise in heritage properties and premium homes in Hatzic and Silverdale.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "Jason Chicken",
    brokerage: "Keller Williams Elite Realty",
    specialty: "Custom Builds · Mountain Views · Investment",
    bio: "Bringing modern marketing to Mission's luxury market with expertise in custom-built homes and mountain-view properties.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Keller Williams Top Producer",
  }
];

const MissionAgents = () => (
  <CityAgentsPage
    city="Mission"
    region="British Columbia, Canada"
    heroImage="https://images.unsplash.com/photo-1609825488888-3a766db05542?w=1920&h=1080&fit=crop"
    intro="Mission's luxury real estate market features stunning river-view properties, sprawling acreages, and premium country estates in the picturesque eastern Fraser Valley."
    whyContact="Whether you're buying or selling luxury property in Mission, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default MissionAgents;
