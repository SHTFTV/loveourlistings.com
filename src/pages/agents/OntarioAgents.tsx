import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Edward Oliva",
    brokerage: "Coldwell Banker Town & Country",
    specialty: "Luxury Residential · Ontario Ranch · Mountain Village",
    bio: "Edward Oliva is Ontario's premier luxury real estate specialist, known for representing the city's finest estate homes and gated community properties. His deep expertise in Ontario Ranch, Mountain Village, and the historic downtown corridor, combined with Coldwell Banker's marketing platform, delivers exceptional results.",
    website: "https://www.coldwellbanker.com",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Coldwell Banker President's Circle",
  },
  {
    name: "Monica Sandoval",
    brokerage: "RE/MAX Masters Realty",
    specialty: "Estate Properties · New Developments · Investment",
    bio: "Monica Sandoval is one of Ontario's top-producing luxury agents, specializing in estate properties and premium new developments across the Inland Empire. Her bilingual expertise and strong community connections make her the trusted choice for luxury transactions in the region.",
    website: "https://www.remax.com",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Platinum Club",
  },
  {
    name: "James Park",
    brokerage: "Keller Williams Realty",
    specialty: "Mountain Views · Custom Homes · Relocation",
    bio: "James Park brings sharp market insight and modern marketing strategies to Ontario's luxury real estate market. His specialization in mountain-view properties and custom homes, combined with Keller Williams' powerful technology platform, attracts discerning buyers from across Southern California.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Keller Williams Top Producer",
  },
];

const OntarioAgents = () => (
  <CityAgentsPage
    city="Ontario"
    region="California, United States"
    heroImage="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop"
    intro="Ontario's luxury real estate market features impressive estate homes in Ontario Ranch, mountain-view properties, and premium new developments in the heart of the Inland Empire. With excellent connectivity, a thriving economy, and proximity to both Los Angeles and the mountains, Ontario offers compelling luxury living in Southern California."
    whyContact="Whether you're buying or selling luxury property in Ontario, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default OntarioAgents;
