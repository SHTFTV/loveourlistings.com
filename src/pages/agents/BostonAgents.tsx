import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Ilya Cobi",
    brokerage: "William Raveis Real Estate",
    specialty: "Back Bay · Beacon Hill · South End",
    bio: "A formidable figure in Boston real estate since 2004, Ilya and his Cobi RE Team have maintained a position among the region's premier agents for two decades, consistently delivering exceptional results in Boston's most prestigious neighborhoods.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Top Producer · 20+ Years",
  },
  {
    name: "Gibson Sotheby's Team",
    brokerage: "Gibson Sotheby's International Realty",
    specialty: "Luxury Condos · Brownstones · Waterfront",
    bio: "Gibson Sotheby's International Realty dominates Boston Magazine's Top Real Estate Producers list year after year, with multiple agents recognized for exceeding $20 million in annual residential sales volume across Boston's luxury market.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Boston Magazine Top Producers",
  },
  {
    name: "Donnelly + Co.",
    brokerage: "Donnelly + Co.",
    specialty: "Martha's Vineyard · Cambridge · Historic Homes",
    bio: "Founded in 2016, Donnelly + Co. has quickly become Boston's most respected independent luxury brokerage, built on integrity, honesty, and expertise, with a team of 35 top agents serving Boston and Martha's Vineyard.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Premier Independent Brokerage",
  },
];

const BostonAgents = () => (
  <CityAgentsPage
    city="Boston"
    region="MA, US"
    heroImage="https://images.unsplash.com/photo-1501979376754-1d39e8b98985?w=1920&h=1080&fit=crop"
    intro="Boston offers a distinguished luxury real estate market with exceptional properties ranging from historic Beacon Hill brownstones to modern Back Bay penthouses. These are the city's most trusted luxury listing agents — professionals who consistently deliver results for discerning buyers and sellers."
    whyContact="Whether you're buying or selling luxury property in Boston, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default BostonAgents;
