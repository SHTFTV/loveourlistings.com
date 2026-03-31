import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Patrick Bherer",
    brokerage: "Sotheby's International Realty Québec",
    specialty: "Waterfront · Sainte-Dorothée · Laval-sur-le-Lac",
    bio: "Laval's top luxury specialist with Sotheby's International Realty, representing the city's most prestigious waterfront estates with refined marketing and global exposure.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  },
  {
    name: "Isabelle Demers",
    brokerage: "RE/MAX 2001",
    specialty: "Estate Properties · Fabreville · Duvernay",
    bio: "One of Laval's most accomplished luxury agents with extensive experience and deep community roots. Specializing in Fabreville and Duvernay estate homes.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Platinum Club",
  },
  {
    name: "Marco Giannini",
    brokerage: "Royal LePage Privilège",
    specialty: "Luxury Residential · Vimont · Auteuil",
    bio: "A trusted name in Laval luxury real estate with expertise in premium properties across Vimont and Auteuil. Bilingual service and strong negotiation skills.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  }
];

const LavalAgents = () => (
  <CityAgentsPage
    city="Laval"
    region="Quebec, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Laval's luxury real estate market features stunning waterfront estates on Laval-sur-le-Lac, executive homes in Sainte-Dorothée, and prestigious properties throughout Quebec's third-largest city."
    whyContact="Whether you're buying or selling luxury property in Laval, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default LavalAgents;
