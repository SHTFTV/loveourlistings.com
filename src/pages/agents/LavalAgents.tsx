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
    intro="Laval's luxury market features premium waterfront estates along the Rivière des Prairies, executive homes in Sainte-Dorothée and Fabreville, and modern penthouse living in Centropolis. As Quebec's third-largest city with median luxury prices above $1.4 million, Laval attracts Montreal professionals seeking larger lots, waterfront living, and excellent highway connectivity to downtown."
    whyContact="Laval's riverfront environmental regulations, Quebec welcome tax calculations, and bilingual transaction requirements demand agents fluent in both the local market and provincial regulatory framework. The specialists listed here close premium deals in Sainte-Dorothée, Fabreville, and Laval-sur-le-Lac — each eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default LavalAgents;
