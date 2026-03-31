import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Jasmine Longuève",
    brokerage: "Leading Luxury Home",
    specialty: "Luxury Estates · Investment · IRS Properties",
    bio: "With over 20 years of experience in asset management and real estate investment, Jasmine has developed unique expertise in the Mauritian luxury market, identifying opportunities and guiding high-net-worth clients through the island's most prestigious transactions.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "CEO & Founder",
  },
  {
    name: "Jennifer Hirst",
    brokerage: "Mauritius Sotheby's International Realty",
    specialty: "Waterfront · Coastal Estates · Relocation",
    bio: "Born in Mauritius and raised in Johannesburg, Jennifer is an authentic 'hybrid' who returned to the island 25 years ago. Her deep local knowledge and international perspective make her one of Mauritius's most trusted luxury property advisors.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's Top Agent",
  },
  {
    name: "Ashik Doorgakant",
    brokerage: "RE/MAX 24 Mauritius",
    specialty: "Smart Cities · PDS · Luxury Developments",
    bio: "Part of the award-winning RE/MAX 24 team — named Best Luxury Real Estate Brokerage in Mauritius 2024 by the Luxury Lifestyle Awards — Ashik specializes in the island's premier Smart City developments and PDS luxury schemes.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Award-Winning Brokerage",
  },
];

const PortLouisAgents = () => (
  <CityAgentsPage
    city="Port Louis"
    region="MU, INT"
    heroImage="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop"
    intro="Port Louis and Mauritius offer a distinguished luxury real estate market with exceptional properties ranging from beachfront estates to Smart City developments. These are the island's most trusted luxury listing agents — professionals who consistently deliver results for discerning buyers and sellers."
    whyContact="Whether you're buying or selling luxury property in Mauritius, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default PortLouisAgents;
