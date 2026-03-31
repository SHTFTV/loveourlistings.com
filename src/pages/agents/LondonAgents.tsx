import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "George Smith",
    brokerage: "United Kingdom Sotheby's International Realty",
    specialty: "Super-Prime · Chelsea · Knightsbridge · Belgravia",
    bio: "With over 22 years of experience in London's super-prime market, George Smith is a Senior Director at UK Sotheby's International Realty. He holds an illustrious track record of record-breaking transactions across Chelsea, Kensington, Knightsbridge, and Belgravia, serving an international clientele of UHNW buyers and sellers.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Senior Director · 22+ Years Experience",
  },
  {
    name: "Matthew Chard",
    brokerage: "United Kingdom Sotheby's International Realty",
    specialty: "Prime Central London · High-Value Sales · Negotiations",
    bio: "Matthew Chard is a trusted property professional specializing in high-value sales across Chelsea, Knightsbridge, and Belgravia. Known for his strong negotiation skills and deep understanding of client needs, he is one of the best-regarded agents in Prime Central London, with a career built on integrity and results.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Director · Prime Central London Expert",
  },
  {
    name: "Camilla Dell",
    brokerage: "Black Brick Property Solutions",
    specialty: "Buying Agent · Mayfair · Belgravia · Kensington",
    bio: "Camilla Dell is the founder and Managing Partner of Black Brick, London's leading luxury buying agency. Named in Spear's top property brokers, she represents UHNW clients acquiring London's finest properties — from Mayfair mansions to Belgravia townhouses — providing fully independent, conflict-free advice.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Managing Partner · Spear's Recommended",
  },
];

const LondonAgents = () => (
  <CityAgentsPage
    city="London"
    region="UK, INT"
    heroImage="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&h=1080&fit=crop"
    intro="London's luxury property market is one of the most exclusive in the world. From Mayfair's grand Georgian townhouses to Knightsbridge penthouses and Chelsea's garden squares, Prime Central London attracts the world's most discerning buyers and investors seeking prestige, privacy, and enduring value."
    whyContact="Whether you're buying or selling super-prime property in London, these elite agents offer unrivalled market access, discretion, and transactional expertise. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default LondonAgents;
