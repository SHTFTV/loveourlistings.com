import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Gary & Michelle Dolch",
    brokerage: "Austin Luxury Group, COMPASS",
    specialty: "Westlake · Barton Creek · Lake Austin",
    bio: "Ranked #3 in Austin for 2024 residential sales volume, Gary and Michelle lead the Austin Luxury Group at Compass, specializing in the city's most prestigious neighborhoods and estate properties with a client-first approach.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "#3 Austin by Volume 2024",
  },
  {
    name: "Austin Top Producers",
    brokerage: "Various Premier Brokerages",
    specialty: "Tarrytown · Rollingwood · Rob Roy",
    bio: "Austin's luxury market features a median home price of $700,000 with exceptional properties in the Hill Country. The city's top producers bring deep knowledge of Austin's unique blend of tech-driven wealth and Texas estate living.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "RealTrends Verified",
  },
  {
    name: "Austin Sotheby's Team",
    brokerage: "Kuper Sotheby's International Realty",
    specialty: "Downtown · Lake Travis · Luxury Condos",
    bio: "Kuper Sotheby's International Realty represents Austin's finest luxury properties, combining local Hill Country expertise with Sotheby's global reach to serve high-net-worth buyers relocating to Texas's capital city.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's Global Network",
  },
];

const AustinAgents = () => (
  <CityAgentsPage
    city="Austin"
    region="TX, US"
    heroImage="https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=1920&h=1080&fit=crop"
    intro="Austin offers a distinguished luxury real estate market with exceptional properties ranging from Lake Austin waterfront estates to modern downtown penthouses. These are the city's most trusted luxury listing agents."
    whyContact="Whether you're buying or selling luxury property in Austin, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default AustinAgents;
