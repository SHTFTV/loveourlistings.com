import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Monica Colomer",
    brokerage: "Mexico Sotheby's International Realty",
    specialty: "Luxury Residential · Polanco · Lomas de Chapultepec",
    bio: "Educated at the Sorbonne in Paris and Lorenzo de Medici in Florence, Monica brings an international perspective to Mexico City's most exclusive neighborhoods, making the buying and selling process seamless for discerning clients.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's Top Producer",
  },
  {
    name: "Laura de la Torre de Skipsey",
    brokerage: "Mexico Sotheby's International Realty",
    specialty: "Estates · Investment · Relocation",
    bio: "Laura's distinctive passion for service and relationship building has made her one of Mexico City's most sought-after luxury agents, known for guiding international buyers through the capital's finest properties with expertise and discretion.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "International Specialist",
  },
  {
    name: "Ana Cecilia Martinez",
    brokerage: "Mexico Sotheby's International Realty",
    specialty: "Condesa · Roma Norte · Santa Fe",
    bio: "A highly dynamic and resilient real estate professional whose experience living in multiple cities worldwide gives her a unique perspective on Mexico City's evolving luxury market and international buyer needs.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Luxury Market Expert",
  },
];

const MexicoCityAgents = () => (
  <CityAgentsPage
    city="Mexico City"
    region="MX, INT"
    heroImage="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=1920&h=1080&fit=crop"
    intro="Mexico City's luxury market has undergone a renaissance — Polanco's Nuevo Polanco corridor now features $5M+ penthouses rivalling global capitals, while Lomas de Chapultepec and Bosques de las Lomas offer gated estate living minutes from the financial district. The city's 22-million-person metropolitan area generates immense domestic wealth, and the digital nomad influx has pushed Condesa and Roma Norte into premium territory. Mexican property law permits direct foreign ownership (no fideicomiso required outside coastal zones), making CDMX one of Latin America's most accessible luxury markets for international buyers."
    whyContact="Mexico City's notarial closing system, ISR capital gains obligations, and the distinction between ejido and private land titles demand agents with deep transactional expertise. These specialists understand the premium dynamics between Polanco's Avenida Masaryk corridor and the established old-money enclaves of Pedregal and San Ángel. Their networks connect local industrialist families with international buyers. Each agent is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default MexicoCityAgents;
