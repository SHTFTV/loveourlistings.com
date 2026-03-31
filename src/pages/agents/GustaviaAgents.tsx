import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Zarek Honneysett",
    brokerage: "Sibarth Real Estate (Christie's Affiliate)",
    specialty: "Luxury Villas · Waterfront Estates · Investment",
    bio: "Named to the Christie's International Real Estate 2024 Masters Circle, Zarek is one of St. Barths' most acclaimed luxury agents, meeting rigorous standards for sales volume, client service, and professional excellence on the island.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Christie's Masters Circle 2024",
  },
  {
    name: "Gabriel Montigny",
    brokerage: "Coldwell Banker St. Barths",
    specialty: "Hillside Villas · Ocean View · Estates",
    bio: "With 45+ luxury listings across St. Barths, Gabriel is one of the island's most active agents, offering bilingual service in English and French to an international clientele seeking the finest properties in Gustavia and beyond.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Top Listing Agent",
  },
  {
    name: "Marion Sautereau",
    brokerage: "Corcoran St Barth",
    specialty: "Beachfront · Luxury Rentals · Villa Sales",
    bio: "Representing Corcoran's prestigious St. Barth office, Marion brings refined taste and deep local knowledge to the island's most sought-after villa sales and investment opportunities for high-net-worth clients.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Corcoran Elite Agent",
  },
];

const GustaviaAgents = () => (
  <CityAgentsPage
    city="Gustavia"
    region="BL, INT"
    heroImage="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1920&h=1080&fit=crop"
    intro="Gustavia and the island of St. Barthélemy offer one of the world's most exclusive luxury real estate markets, with stunning hillside villas and beachfront estates. These are the island's most trusted luxury listing agents — professionals who consistently deliver results for discerning buyers and sellers."
    whyContact="Whether you're buying or selling luxury property in St. Barths, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default GustaviaAgents;
