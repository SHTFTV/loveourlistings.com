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
    intro="Grand Cayman stands as the Caribbean's premier tax-neutral luxury market — no income tax, no capital gains tax, and no property tax create an unmatched wealth-preservation proposition. Seven Mile Beach corridor estates command $10M–$45M+, while South Sound and Rum Point offer waterfront privacy at scale. The Cayman Islands' stable British Overseas Territory governance, world-class banking infrastructure, and 90-minute flight from Miami make it the destination of choice for UHNW families seeking Caribbean residency. These agents are the island's definitive luxury specialists."
    whyContact="Grand Cayman's stamp duty structure, residency-by-investment pathways, and strata title regulations demand agents with deep institutional knowledge. These professionals navigate the nuances between freehold beachfront, canal-front estates in Crystal Harbour, and the emerging luxury inventory along Camana Bay. Their networks span hedge fund relocations, family office advisory, and cross-border structuring. Each agent is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default GrandCaymanAgents;
