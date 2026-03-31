import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "David Ng",
    brokerage: "RE/MAX Collection Thailand",
    specialty: "Luxury Condos · Sukhumvit · Riverside · Sathorn",
    bio: "David Ng is a RE/MAX Collection Certified Luxury Property Agent in Bangkok, recognized as one of the city's top-performing luxury specialists. He operates with a disciplined, goals-driven approach to serve UHNW clients seeking premium condominiums and penthouses across Sukhumvit, Riverside, and Sathorn — Bangkok's most coveted luxury corridors.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Collection Certified · Top Producer",
  },
  {
    name: "Nathalie Benko",
    brokerage: "Elite Homes Thailand",
    specialty: "Luxury Villas · Penthouses · International Buyers",
    bio: "As a senior consultant at Elite Homes, one of Thailand's leading luxury real estate agencies, Nathalie Benko specializes in premium properties across Bangkok, Phuket, and Koh Samui. Her multilingual skills and international background make her the go-to advisor for European and Middle Eastern UHNW clients investing in Thai luxury real estate.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Elite Homes · Multilingual Specialist",
  },
  {
    name: "Kasin Suthisakorn",
    brokerage: "Richmont's Luxury Real Estate",
    specialty: "Super-Prime Condos · New Development · Investment",
    bio: "Leading Richmont's Luxury Real Estate in Bangkok, Kasin Suthisakorn brings deep expertise in Thailand's super-prime condominium market. He advises local and international investors on premium new developments and trophy properties along the Chao Phraya River and in Bangkok's prestigious Wireless Road and Langsuan neighborhoods.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Richmont's · Super-Prime Expert",
  },
];

const BangkokAgents = () => (
  <CityAgentsPage
    city="Bangkok"
    region="TH, INT"
    heroImage="https://images.unsplash.com/photo-1528181304800-259b08848526?w=1920&h=1080&fit=crop"
    intro="Bangkok's luxury real estate market is Southeast Asia's most dynamic, offering ultra-modern sky-high penthouses along the Chao Phraya River, exclusive condominiums on Sukhumvit and Wireless Road, and private estates in Sathorn. The Thai capital attracts global investors seeking exceptional value and a world-class tropical metropolitan lifestyle."
    whyContact="Whether you're acquiring a riverside penthouse or selling a premium Sukhumvit condominium, these elite Bangkok agents bring deep local expertise and international networks. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default BangkokAgents;
