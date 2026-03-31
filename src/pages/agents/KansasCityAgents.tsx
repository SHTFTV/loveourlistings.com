import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Dale Pekarek",
    brokerage: "ReeceNichols Real Estate",
    specialty: "Mission Hills · Ward Parkway · Leawood",
    bio: "Kansas City's top luxury agent, Dale Pekarek specializes in Mission Hills estates and Ward Parkway properties with decades of market expertise.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "ReeceNichols Top Producer",
  },
  {
    name: "Chase Davison",
    brokerage: "Compass",
    specialty: "Brookside · Plaza · Prairie Village",
    bio: "A leading Kansas City luxury agent with Compass, Chase brings modern marketing to the city's most desirable neighborhoods.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Compass Top Producer",
  },
  {
    name: "Sara Merz",
    brokerage: "Sotheby's International Realty",
    specialty: "Estate Properties · Lake Lotawana · Investment",
    bio: "Representing Sotheby's in Kansas City, Sara brings global luxury marketing to the metro's finest properties.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  }
];

const KansasCityAgents = () => (
  <CityAgentsPage
    city="Kansas City"
    region="Missouri, United States"
    heroImage="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1920&h=1080&fit=crop"
    intro="Kansas City's luxury market features grand estates in Mission Hills, premium properties along Ward Parkway, and elegant homes in Leawood and Prairie Village."
    whyContact="Whether you're buying or selling luxury property in Kansas City, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default KansasCityAgents;
