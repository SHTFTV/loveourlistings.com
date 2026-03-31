import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Erin Krueger",
    brokerage: "COMPASS",
    specialty: "Belle Meade · Green Hills · Forest Hills",
    bio: "Named the #1 Compass Team in Tennessee by volume in 2025 and #34 medium-size team in the US, Erin's team closed nearly $225 million in sales in 2024. She has been the Greater Nashville Realtors® Top Selling Team from 2016-2020.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "#1 Compass Team TN · $225M in 2024",
  },
  {
    name: "Nashville Top Producers",
    brokerage: "Various Premier Brokerages",
    specialty: "12 South · The Gulch · West End",
    bio: "Nashville's luxury market has grown 51% in inventory year-over-year, with a median home price of $730,000. The city's top producers bring deep knowledge of Nashville's evolving luxury landscape from historic Belle Meade estates to modern downtown penthouses.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RealTrends Verified",
  },
  {
    name: "Nashville Sotheby's Team",
    brokerage: "Zeitlin Sotheby's International Realty",
    specialty: "Brentwood · Franklin · Luxury Estates",
    bio: "Zeitlin Sotheby's International Realty represents Nashville's finest luxury properties, connecting local expertise with Sotheby's global network to serve high-net-worth buyers and sellers across Middle Tennessee's most prestigious addresses.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's Global Network",
  },
];

const NashvilleAgents = () => (
  <CityAgentsPage
    city="Nashville"
    region="TN, US"
    heroImage="https://images.unsplash.com/photo-1545419913-775f1e5de399?w=1920&h=1080&fit=crop"
    intro="Nashville offers a distinguished luxury real estate market with exceptional properties from Belle Meade mansions to modern Gulch penthouses. These are the city's most trusted luxury listing agents — professionals who consistently deliver results for discerning buyers and sellers."
    whyContact="Whether you're buying or selling luxury property in Nashville, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default NashvilleAgents;
