import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Kim Lund",
    brokerage: "The Lund Team — RE/MAX Cayman Islands",
    specialty: "Seven Mile Beach · Waterfront · Luxury Condos",
    bio: "Recognized as the #1 luxury real estate agent in the Cayman Islands, Kim Lund and her team specialize in Seven Mile Beach's most prestigious addresses, with an unmatched portfolio of ultra-luxury beachfront properties.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "#1 Cayman Islands Agent",
  },
  {
    name: "Tracy Moore",
    brokerage: "Cayman Islands Sotheby's International Realty",
    specialty: "Estates · Cayman Kai · New Development",
    bio: "Representing Sotheby's prestigious Cayman Islands office, Tracy brings deep local knowledge and global reach to the island's luxury market, specializing in waterfront homes and exclusive new developments along Seven Mile Beach.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's Top Agent",
  },
  {
    name: "Sophie Miles",
    brokerage: "Milestone Properties Cayman",
    specialty: "Investment · Relocation · Luxury Villas",
    bio: "Owner and broker of Milestone Properties, Sophie is a trusted name in Cayman Islands luxury real estate, guiding international investors and relocating families through the acquisition of premier Grand Cayman properties.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Owner & Broker",
  },
];

const GrandCaymanAgents = () => (
  <CityAgentsPage
    city="Grand Cayman"
    region="KY, INT"
    heroImage="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop"
    intro="Grand Cayman offers one of the Caribbean's most exclusive luxury real estate markets, anchored by the world-famous Seven Mile Beach. These are the island's most trusted luxury listing agents — professionals who consistently deliver results for discerning buyers and sellers."
    whyContact="Whether you're buying or selling luxury property in the Cayman Islands, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default GrandCaymanAgents;
