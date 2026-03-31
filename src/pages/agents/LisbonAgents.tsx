import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Rafael Ascenso",
    brokerage: "Porta da Frente Christie's",
    specialty: "Chiado · Avenida da Liberdade · Cascais · Estoril",
    bio: "As CEO of Porta da Frente Christie's — Portugal's exclusive Christie's International Real Estate affiliate — Rafael Ascenso leads the country's most prestigious luxury brokerage. The firm reported a record €560M in transactions, cementing its position as the undisputed leader in Lisbon and Cascais luxury real estate.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "CEO · Christie's Affiliate · €560M Record",
  },
  {
    name: "Marisa Costa",
    brokerage: "RE/MAX Collection",
    specialty: "Luxury Residential · Lisbon Center · Belém · Restelo",
    bio: "A dedicated luxury consultant with RE/MAX Collection in Lisbon, Marisa Costa has years of experience navigating Lisbon's dynamic luxury market. She provides comprehensive consulting services to international buyers and sellers, combining deep neighborhood knowledge with RE/MAX's powerful global marketing network.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Collection · Lisbon Expert",
  },
  {
    name: "Miguel Lacerda",
    brokerage: "Portugal Sotheby's International Realty",
    specialty: "Golden Visa · Investment · Waterfront · Historic Properties",
    bio: "At Portugal Sotheby's International Realty, Miguel Lacerda serves an elite international clientele drawn to Lisbon's booming luxury market. His expertise spans historic Pombaline apartments in the Baixa, riverfront penthouses in Parque das Nações, and prestigious Linha estates — all backed by Sotheby's unrivalled global brand.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's · International Investment Expert",
  },
];

const LisbonAgents = () => (
  <CityAgentsPage
    city="Lisbon"
    region="PT, INT"
    heroImage="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1920&h=1080&fit=crop"
    intro="Lisbon has emerged as one of Europe's most desirable luxury real estate destinations, offering a unique blend of historic charm, riverside living, and cosmopolitan lifestyle. From the elegant Chiado district to Avenida da Liberdade's grand apartments and the seaside estates of Cascais, Lisbon attracts global buyers seeking exceptional value and quality of life."
    whyContact="Whether you're acquiring a historic apartment in Chiado or selling a waterfront villa in Cascais, these elite Lisbon agents bring deep market expertise and international connections. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default LisbonAgents;
