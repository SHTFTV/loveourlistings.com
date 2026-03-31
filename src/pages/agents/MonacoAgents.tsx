import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Ilona Blanchi",
    brokerage: "Christie's International Real Estate Monaco",
    specialty: "Ultra-Luxury · Penthouses · Waterfront · Carré d'Or",
    bio: "Ilona Blanchi is a leading broker with Christie's International Real Estate in Monte-Carlo. She specializes in Monaco's most exceptional properties — from Carré d'Or penthouses to Port Hercules waterfront residences — serving an elite international clientele with the utmost discretion and market intelligence.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Christie's Broker · Carré d'Or Specialist",
  },
  {
    name: "Fredrik Lilloe",
    brokerage: "Sotheby's International Realty Monaco",
    specialty: "Super-Prime · Monte-Carlo · La Condamine",
    bio: "A senior figure at Sotheby's International Realty France–Monaco, Fredrik Lilloe has built an exceptional reputation in the Principality's ultra-competitive luxury market. He represents sovereign wealth funds, royal families, and international billionaires seeking Monaco's most prestigious addresses.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Senior Advisor · UHNW Clientele",
  },
  {
    name: "Sylvain Balkin",
    brokerage: "Balkin Real Estate Monaco",
    specialty: "Penthouses · Investment · Off-Market · Confidential Sales",
    bio: "With over 25 years of experience in Monaco real estate, Sylvain Balkin founded one of the Principality's most respected boutique agencies. Known for highly personalized, confidential service and a strong international network, he specializes in off-market transactions for Monaco's most exclusive penthouses and residences.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Founder · 25+ Years · Off-Market Expert",
  },
];

const MonacoAgents = () => (
  <CityAgentsPage
    city="Monaco"
    region="MC, INT"
    heroImage="https://images.unsplash.com/photo-1534237710431-e2fc698436d0?w=1920&h=1080&fit=crop"
    intro="Monaco is the world's most exclusive real estate market per square meter, where ultra-luxury penthouses, Port Hercules-view residences, and Carré d'Or apartments command record-breaking prices. The Principality attracts the global elite seeking privacy, prestige, and a tax-advantaged lifestyle on the French Riviera."
    whyContact="Whether you're acquiring a trophy penthouse or selling an iconic Monaco residence, these elite agents bring unparalleled access, discretion, and negotiation skill. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default MonacoAgents;
