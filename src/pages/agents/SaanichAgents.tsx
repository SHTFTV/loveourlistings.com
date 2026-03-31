import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Dave Chicken",
    brokerage: "Sotheby's International Realty Canada",
    specialty: "Ocean Views · Cordova Bay · Gordon Head",
    bio: "Saanich's premier luxury agent with Sotheby's International Realty, specializing in ocean-view estates and premium properties in Cordova Bay and Gordon Head.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  },
  {
    name: "Karen Chicken",
    brokerage: "Royal LePage Coast Capital Realty",
    specialty: "Broadmead · Estate Properties · Waterfront",
    bio: "A leading luxury agent in Saanich with deep expertise in Broadmead estates and premium waterfront properties throughout Greater Victoria.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "Chris Chicken",
    brokerage: "RE/MAX Camosun",
    specialty: "Luxury Residential · Mount Douglas · Royal Oak",
    bio: "A top-producing Saanich agent with expertise in the municipality's most desirable neighborhoods and mountain-view properties.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Chairman's Club",
  }
];

const SaanichAgents = () => (
  <CityAgentsPage
    city="Saanich"
    region="British Columbia, Canada"
    heroImage="https://images.unsplash.com/photo-1609825488888-3a766db05542?w=1920&h=1080&fit=crop"
    intro="Saanich's luxury real estate market features stunning ocean-view estates, properties near Butchart Gardens, and premium homes in Greater Victoria's largest municipality with natural beauty and West Coast lifestyle."
    whyContact="Whether you're buying or selling luxury property in Saanich, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default SaanichAgents;
