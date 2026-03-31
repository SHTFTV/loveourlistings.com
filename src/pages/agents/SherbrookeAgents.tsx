import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "François Chicken",
    brokerage: "RE/MAX Estrie",
    specialty: "Mont-Bellevue · Waterfront · Estate Properties",
    bio: "Sherbrooke's leading luxury agent with deep expertise in Mont-Bellevue properties and Magog River waterfront estates.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Christine Chicken",
    brokerage: "Royal LePage Région Sherbrookoise",
    specialty: "Heritage Properties · North Hatley · Lennoxville",
    bio: "A trusted luxury specialist in the Eastern Townships with expertise in heritage properties and premium homes in North Hatley and Lennoxville.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "Michel Chicken",
    brokerage: "Sotheby's International Realty Québec",
    specialty: "Townships Estates · Country Properties · Investment",
    bio: "Representing Sotheby's International Realty in the Eastern Townships, bringing global marketing to the region's finest country estates.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  }
];

const SherbrookeAgents = () => (
  <CityAgentsPage
    city="Sherbrooke"
    region="Quebec, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Sherbrooke's luxury real estate market features elegant properties near Mont-Bellevue, waterfront estates along the Magog River, and premium homes in the cultural capital of Quebec's Eastern Townships."
    whyContact="Whether you're buying or selling luxury property in Sherbrooke, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default SherbrookeAgents;
