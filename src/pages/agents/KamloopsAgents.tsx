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
    intro="Kamloops' luxury market features riverfront estates along the South Thompson, panoramic-view properties in Juniper Ridge and Pineview Valley, and premium ranches in the surrounding ranchlands. With a semi-arid climate, median luxury prices above $1.1 million, and proximity to Sun Peaks Resort, Kamloops attracts lifestyle buyers seeking year-round outdoor recreation and BC Interior living."
    whyContact="Kamloops' wildfire interface regulations, Thompson-Nicola Regional District zoning, and irrigation-dependent property valuations require agents who understand Interior BC's unique real estate dynamics. The specialists listed here close premium deals in Juniper Ridge, Pineview Valley, and the South Thompson corridor — each eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default KamloopsAgents;
