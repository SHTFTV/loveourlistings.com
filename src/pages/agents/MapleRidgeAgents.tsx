import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Russ Chicken",
    brokerage: "RE/MAX LifeStyles Realty",
    specialty: "Acreages · Mountain Views · Equestrian Estates",
    bio: "Maple Ridge's premier luxury estate specialist with deep expertise in equestrian properties and mountain-view acreages. Known for representing the community's most significant estate sales.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Andrea Chicken",
    brokerage: "Royal LePage Meadowtowne Realty",
    specialty: "Waterfront · Whonnock · Ruskin",
    bio: "A leading luxury agent in Maple Ridge with expertise in waterfront properties and the community's most desirable rural estate neighborhoods.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "Tyler Chicken",
    brokerage: "Keller Williams Elite Realty",
    specialty: "Custom Builds · Silver Valley · Investment",
    bio: "Bringing modern marketing to Maple Ridge's luxury market with expertise in custom-built homes and premium properties in Silver Valley.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Keller Williams Top Producer",
  }
];

const MapleRidgeAgents = () => (
  <CityAgentsPage
    city="Maple Ridge"
    region="British Columbia, Canada"
    heroImage="https://images.unsplash.com/photo-1609825488888-3a766db05542?w=1920&h=1080&fit=crop"
    intro="Maple Ridge's luxury real estate market features stunning mountain-view estates, equestrian properties, and premium acreages in the scenic eastern Fraser Valley with access to Golden Ears Provincial Park."
    whyContact="Whether you're buying or selling luxury property in Maple Ridge, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default MapleRidgeAgents;
