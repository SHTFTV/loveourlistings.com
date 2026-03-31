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
    intro="Maple Ridge's luxury market features waterfront estates along the Fraser River, mountain-view acreages in Whonnock and Websters Corners, and premium homes in Silver Valley with Golden Ears Park at the doorstep. With median luxury prices above $1.8 million and the West Coast Express connecting to downtown Vancouver, Maple Ridge offers the Fraser Valley's most compelling combination of rural estate living and urban commutability."
    whyContact="Maple Ridge's ALR exclusion applications, Fraser River floodplain construction requirements, and Kanaka Creek setback regulations demand agents who understand both rural and suburban premium markets. The specialists listed here close premium deals in Silver Valley, Whonnock, and the Albion waterfront — each eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default MapleRidgeAgents;
