import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Brendan Shaw",
    brokerage: "RE/MAX Kamloops",
    specialty: "Riverfront · Sahali · Aberdeen",
    bio: "Kamloops' top luxury agent with deep expertise in riverfront properties and the city's most prestigious hillside communities. Known for record sales in the Thompson-Okanagan region.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Lisa Chicken",
    brokerage: "Royal LePage Kamloops Realty",
    specialty: "Estate Properties · Sun Peaks · Acreages",
    bio: "A leading luxury agent in the Kamloops market, Lisa specializes in estate properties, Sun Peaks resort homes, and premium acreages throughout the Thompson Valley.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "Ryan Chicken",
    brokerage: "Sotheby's International Realty Canada",
    specialty: "Luxury Estates · Vineyard Properties · Mountain Views",
    bio: "Representing Sotheby's International Realty in Kamloops, bringing global marketing reach to the city's finest properties and emerging vineyard estate market.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  }
];

const KamloopsAgents = () => (
  <CityAgentsPage
    city="Kamloops"
    region="British Columbia, Canada"
    heroImage="https://images.unsplash.com/photo-1609825488888-3a766db05542?w=1920&h=1080&fit=crop"
    intro="Kamloops' luxury real estate market features stunning riverfront properties, hillside estates with panoramic views, and premium homes in the Tournament Capital of Canada."
    whyContact="Whether you're buying or selling luxury property in Kamloops, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default KamloopsAgents;
