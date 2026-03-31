import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Zoe Ward",
    brokerage: "Japan Sotheby's International Realty",
    specialty: "Minato · Shibuya · Meguro · Luxury Apartments",
    bio: "At Japan Sotheby's International Realty, Zoe Ward bridges the gap between Tokyo's exclusive property market and international buyers. Fluent in Japanese and English, she specializes in premium apartments and penthouses across Minato-ku, Shibuya, and Meguro — Tokyo's most sought-after wards for luxury living.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's · Bilingual · Tokyo Specialist",
  },
  {
    name: "Adam German",
    brokerage: "Housing Japan",
    specialty: "Expat Luxury · Private Estates · Investment Properties",
    bio: "As a leader at Housing Japan — Tokyo's premier real estate agency for international clients — Adam German has facilitated luxury transactions across the city's most prestigious neighborhoods. With deep expertise in Japanese real estate law and market dynamics, he guides UHNW clients through acquiring private estates, luxury condominiums, and investment properties.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Housing Japan · International Client Leader",
  },
  {
    name: "Ryo Tanaka",
    brokerage: "Ken Corporation",
    specialty: "Super-Prime · Roppongi · Azabu · Hiroo · Traditional Estates",
    bio: "Ken Corporation is Japan's most prestigious luxury real estate firm, and Ryo Tanaka leads their ultra-prime residential division. Specializing in Tokyo's elite Minato-ku neighborhoods — Azabu, Roppongi Hills, and Hiroo — he serves the Japanese business elite and international UHNW clients with unmatched discretion and market access.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Ken Corporation · Ultra-Prime Division",
  },
];

const TokyoAgents = () => (
  <CityAgentsPage
    city="Tokyo"
    region="JP, INT"
    heroImage="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&h=1080&fit=crop"
    intro="Tokyo's luxury real estate market is one of Asia's most sophisticated, offering everything from ultra-modern penthouses in Roppongi Hills to traditional estates in Azabu and sleek waterfront towers in Minato. The city attracts global investors and executives seeking world-class living in one of the planet's most dynamic capitals."
    whyContact="Whether you're acquiring a penthouse in Minato-ku or selling a private estate in Azabu, these elite Tokyo agents bring deep local expertise and international reach. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default TokyoAgents;
