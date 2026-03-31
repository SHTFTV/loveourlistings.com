import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Katrina Barrett",
    brokerage: "Russ Lyon Sotheby's International Realty",
    specialty: "Paradise Valley · Arcadia · Biltmore",
    bio: "Ranked the #1 real estate agent in Arizona by RealTrends with over $2.5 billion in luxury home sales, Katrina Barrett represents some of the finest estates in Arizona, specializing in Paradise Valley, Scottsdale, and Phoenix's most coveted addresses.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "#1 Agent in Arizona · $2.5B+ Sales",
  },
  {
    name: "Phoenix Magazine Top 50",
    brokerage: "Various Premier Brokerages",
    specialty: "Camelback · DC Ranch · Silverleaf",
    bio: "Phoenix Magazine curates its Top 50 real estate agents annually by surveying subscribers on closing skills, market knowledge, communication, and overall satisfaction — representing the best of the Valley's luxury market professionals.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Phoenix Magazine Top 50",
  },
  {
    name: "Phoenix Top Producers",
    brokerage: "Various Premier Brokerages",
    specialty: "Scottsdale Ranch · McCormick Ranch · Pinnacle Peak",
    bio: "Phoenix's luxury market features a median home price of $565,000 with exceptional estate properties in Paradise Valley and North Scottsdale. The city's top producers navigate the Valley's sun-drenched luxury landscape with deep local expertise.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "RealTrends Verified",
  },
];

const PhoenixAgents = () => (
  <CityAgentsPage
    city="Phoenix"
    region="AZ, US"
    heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&h=1080&fit=crop"
    intro="Phoenix offers a distinguished luxury real estate market with exceptional properties from Paradise Valley estates to Biltmore mansions. These are the city's most trusted luxury listing agents."
    whyContact="Whether you're buying or selling luxury property in Phoenix, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default PhoenixAgents;
