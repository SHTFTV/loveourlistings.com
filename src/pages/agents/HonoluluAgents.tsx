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
    intro="Kahala beachfront estates trade between $8M and $35M, while Diamond Head's limited oceanfront inventory commands $3,000+ per square foot — making it one of the most exclusive per-square-foot markets in the United States. Honolulu's median home price of $1.18M reflects an island economy where land scarcity, foreign investment, and lifestyle demand converge."
    whyContact="Hawaii's luxury market requires agents who navigate leasehold-versus-fee-simple structures, Conservation District zoning, and the cultural nuances of island transactions. The professionals featured here hold Aloha Sotheby's and Hawaii Life affiliations with Hawaii Business Magazine recognition — ensuring Kahala, Black Point, and Lanikai listings reach qualified mainland and international buyers."
    agents={agents}
  />
);

export default HonoluluAgents;
