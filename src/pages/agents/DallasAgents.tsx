import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Faisal Halum",
    brokerage: "Briggs Freeman Sotheby's International Realty",
    specialty: "Highland Park · Preston Hollow · Turtle Creek",
    bio: "Leading the consistently top-producing Faisal Halum Group at Briggs Freeman Sotheby's — the No. 1 luxury brokerage in Texas — Faisal specializes in architecturally significant homes and high-rises of the utmost quality across Dallas.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "#1 Luxury Brokerage in Texas",
  },
  {
    name: "Bryan Crawford",
    brokerage: "Briggs Freeman Sotheby's International Realty",
    specialty: "New Development · Off-Market · Estates",
    bio: "A Global Real Estate Advisor and RealTrends Verified Top Agent with over $350 million in luxury residential sales since 2009, Bryan specializes in high-value properties, architecturally significant homes, and private off-market transactions across Dallas.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "RealTrends Verified · $350M+ Sales",
  },
  {
    name: "Clarke Landry",
    brokerage: "Briggs Freeman Sotheby's International Realty",
    specialty: "University Park · Design · Marketing",
    bio: "A top-ranked producer in the luxury market for more than 15 years, Clarke represents some of the most exceptional homes and families in Dallas' most coveted neighborhoods, consistently elevating every listing with her strong background in design and marketing.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "15+ Years Top Producer",
  },
];

const DallasAgents = () => (
  <CityAgentsPage
    city="Dallas"
    region="TX, US"
    heroImage="https://images.unsplash.com/photo-1545194445-dddb8f4487c6?w=1920&h=1080&fit=crop"
    intro="Dallas offers a distinguished luxury real estate market with exceptional properties ranging from Highland Park estates to modern Turtle Creek high-rises. These are the city's most trusted luxury listing agents — professionals who consistently deliver results for discerning buyers and sellers."
    whyContact="Whether you're buying or selling luxury property in Dallas, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default DallasAgents;
