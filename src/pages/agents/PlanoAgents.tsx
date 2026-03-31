import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Featured Agent 1",
    brokerage: "Premium Brokerage",
    specialty: "Luxury Residential · Estate Properties",
    bio: "A top-producing luxury agent in Plano with deep local expertise and a proven track record of representing exceptional properties in the Texas market.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Top Producer",
  },
  {
    name: "Featured Agent 2",
    brokerage: "Elite Realty Group",
    specialty: "Waterfront · New Construction · Estates",
    bio: "Specializing in Plano's most prestigious addresses, this agent brings unparalleled market knowledge and a refined approach to luxury real estate in Texas.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Luxury Specialist",
  },
  {
    name: "Featured Agent 3",
    brokerage: "Prestige Properties",
    specialty: "Investment · Relocation · Fine Homes",
    bio: "With years of experience navigating Plano's luxury market, this agent is known for integrity, discretion, and delivering outstanding results for high-net-worth clients.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Award-Winning Agent",
  },
];

const PlanoAgents = () => (
  <CityAgentsPage
    city="Plano"
    region="Texas, United States"
    heroImage="https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=1920&h=1080&fit=crop"
    intro="Plano offers a distinguished luxury real estate market with exceptional properties ranging from waterfront estates to architectural masterpieces. These are the city's most trusted luxury listing agents — professionals who consistently deliver results for discerning buyers and sellers."
    whyContact="Whether you're buying or selling luxury property in Plano, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default PlanoAgents;
