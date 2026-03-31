import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Drew Fenton",
    brokerage: "Carolwood Estates",
    specialty: "Beverly Hills · Holmby Hills · Bel Air",
    bio: "With over $7.2 billion in career sales, Drew Fenton holds the record for the highest-priced residential sale in Los Angeles history. He has had the honour of representing the most pedigreed and significant estates in Beverly Hills, Holmby Hills, and Bel Air — serving an elite clientele that demands absolute discretion and results.",
    website: "https://www.forbesglobalproperties.com/agents/drew-fenton",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "$7.2 Billion in Career Sales",
  },
  {
    name: "Jade Mills",
    brokerage: "Coldwell Banker Global Luxury",
    specialty: "Beverly Hills · Bel Air · Malibu",
    bio: "One of the most recognized names in luxury real estate worldwide, Jade Mills is consistently ranked as the #1 Coldwell Banker agent globally. Her unparalleled network and decades of experience in Beverly Hills, Bel Air, and Malibu make her the definitive choice for buyers and sellers of the world's most extraordinary properties.",
    website: "https://www.jademills.com",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "#1 Coldwell Banker Agent Globally",
  },
  {
    name: "Santiago Arana",
    brokerage: "The Agency",
    specialty: "Westside · Malibu · Architectural Estates",
    bio: "Named to The Hollywood Reporter's top 30 Los Angeles real estate agents, Santiago Arana brings star power and strategic brilliance to every transaction. A leading agent at The Agency, he specializes in architectural masterpieces and trophy properties across LA's most coveted Westside neighbourhoods.",
    website: "https://www.theagencyre.com",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Hollywood Reporter Top 30",
  },
];

const LosAngelesAgents = () => (
  <CityAgentsPage
    city="Los Angeles"
    region="California, United States"
    heroImage="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop"
    intro="Los Angeles is the epicentre of luxury real estate, home to the world's most iconic estates in Beverly Hills, Bel Air, Holmby Hills, and Malibu. These are the city's most trusted luxury listing agents — professionals who have collectively sold billions in trophy properties and represent the pinnacle of the industry."
    whyContact="Whether you're acquiring a Beverly Hills mansion or marketing an architectural estate in the Bird Streets, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default LosAngelesAgents;
