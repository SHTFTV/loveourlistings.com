import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Aloha Sotheby's Team",
    brokerage: "Aloha Sotheby's International Realty",
    specialty: "Diamond Head · Kahala · Black Point",
    bio: "Named among Hawaii Business Magazine's Top Performers in Real Estate 2024, the Aloha Sotheby's team represents Honolulu's most prestigious luxury properties, from Diamond Head oceanfront estates to exclusive Kahala compounds.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Top Performers 2024",
  },
  {
    name: "Hawaii Life Agents",
    brokerage: "Hawaii Life Real Estate Brokers",
    specialty: "North Shore · Kailua · Luxury Estates",
    bio: "Featured in Modern Luxury for representing Hawaii's top sales in 2024, Hawaii Life's elite agents bring deep island expertise and global connections to Honolulu's ultra-luxury residential market.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Featured in Modern Luxury",
  },
  {
    name: "Honolulu Top Producers",
    brokerage: "Various Premier Brokerages",
    specialty: "Waikiki · Hawaii Kai · Lanikai",
    bio: "Honolulu's luxury market features a median home price of $1.18M. The city's top producers specialize in oceanfront estates and luxury condominiums, serving a global clientele drawn to Hawaii's unparalleled island lifestyle.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "RealTrends Verified",
  },
];

const HonoluluAgents = () => (
  <CityAgentsPage
    city="Honolulu"
    region="HI, US"
    heroImage="https://images.unsplash.com/photo-1507876466758-bc54f384809c?w=1920&h=1080&fit=crop"
    intro="Honolulu offers Hawaii's premier luxury real estate market, with exceptional properties from Diamond Head oceanfront estates to exclusive Kahala mansions. These are the city's most trusted luxury listing agents."
    whyContact="Whether you're buying or selling luxury property in Honolulu, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default HonoluluAgents;
