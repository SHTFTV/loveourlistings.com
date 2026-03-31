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
    intro="Saanich's luxury market features oceanfront estates in Cordova Bay, premium properties in the Broadmead and Royal Oak corridors, and heritage acreages in the rural Saanich Peninsula. As Greater Victoria's largest municipality with median luxury prices above $1.8 million, Saanich draws retirees, professionals, and lifestyle buyers seeking Pacific Northwest oceanfront living, mild climate, and proximity to downtown Victoria."
    whyContact="Saanich's oceanfront DPA (Development Permit Area) regulations, CRD environmental protection zones, and Saanich Peninsula agricultural-zone restrictions demand agents who understand Vancouver Island's most complex luxury market. The specialists listed here close premium deals in Cordova Bay, Broadmead, and Royal Oak — each eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default SaanichAgents;
