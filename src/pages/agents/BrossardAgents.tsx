import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Philippe Beauchamp",
    brokerage: "Sotheby's International Realty Québec",
    specialty: "Luxury Residential · Brossard A · Quartier DIX30",
    bio: "Brossard's leading luxury agent with Sotheby's International Realty, specializing in the city's most prestigious addresses and premium properties near Quartier DIX30.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  },
  {
    name: "Marie-Josée Fortier",
    brokerage: "RE/MAX Platine",
    specialty: "Executive Homes · New Construction · Investment",
    bio: "One of the South Shore's top-producing luxury agents, bringing market expertise and a comprehensive network to Brossard's thriving premium real estate market.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Platinum Club",
  },
  {
    name: "David Chen-Nguyen",
    brokerage: "Royal LePage Héritage",
    specialty: "Modern Luxury · Condos · Relocation",
    bio: "A multilingual luxury specialist serving Brossard's diverse affluent community. His understanding of the South Shore's evolving luxury landscape delivers outstanding results.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Director's Platinum",
  }
];

const BrossardAgents = () => (
  <CityAgentsPage
    city="Brossard"
    region="Quebec, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Brossard's luxury real estate market features modern executive homes, premium condos near the REM transit line, and elegant properties in established neighborhoods on Montreal's South Shore."
    whyContact="Whether you're buying or selling luxury property in Brossard, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default BrossardAgents;
