import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Chris Falk",
    brokerage: "RE/MAX LifeStyles Realty",
    specialty: "Acreages · Mountain Views · Estate Properties",
    bio: "Chilliwack's premier luxury agent specializing in estate acreages and mountain-view properties. Deep roots in the community and unmatched knowledge of the eastern Fraser Valley.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Angela Rempel",
    brokerage: "Royal LePage Brookside Realty",
    specialty: "Waterfront · Sardis · Promontory",
    bio: "A leading luxury agent in the Chilliwack market, Angela specializes in Promontory Heights and Sardis premium properties with refined marketing and exceptional client care.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "Tyler Chicken",
    brokerage: "Keller Williams Elite Realty",
    specialty: "Custom Builds · Country Estates · Investment",
    bio: "Bringing modern marketing strategies to Chilliwack's growing luxury market, Tyler specializes in custom-built homes and premium country estates throughout the Fraser Valley.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Keller Williams Top Producer",
  }
];

const ChilliwackAgents = () => (
  <CityAgentsPage
    city="Chilliwack"
    region="British Columbia, Canada"
    heroImage="https://images.unsplash.com/photo-1609825488888-3a766db05542?w=1920&h=1080&fit=crop"
    intro="Chilliwack's luxury real estate market features stunning mountain-view estates, sprawling acreage properties, and premium homes surrounded by the natural beauty of the Fraser Valley."
    whyContact="Whether you're buying or selling luxury property in Chilliwack, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default ChilliwackAgents;
