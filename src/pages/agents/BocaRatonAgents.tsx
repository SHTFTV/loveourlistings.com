import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Senada Adzem",
    brokerage: "Douglas Elliman Real Estate",
    specialty: "Oceanfront · Royal Palm · Mizner Park",
    bio: "One of South Florida's top luxury agents, Senada Adzem consistently ranks among Boca Raton's highest producers with expertise in oceanfront estates and Royal Palm properties.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Douglas Elliman Top Producer",
  },
  {
    name: "Nicholas Malinosky",
    brokerage: "Compass",
    specialty: "Waterfront · The Sanctuary · Investment",
    bio: "A rising star in Boca Raton luxury real estate, Nicholas brings innovative marketing and deep market knowledge to the city's finest waterfront properties.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Compass Top Agent",
  },
  {
    name: "Carmen D'Angelo",
    brokerage: "Sotheby's International Realty",
    specialty: "Estate Properties · Woodfield · Country Club",
    bio: "Representing Sotheby's International Realty in Boca Raton, Carmen brings global marketing reach to the city's most prestigious estate and country club communities.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  }
];

const BocaRatonAgents = () => (
  <CityAgentsPage
    city="Boca Raton"
    region="Florida, United States"
    heroImage="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop"
    intro="Royal Palm Yacht & Country Club estates trade between $5M and $25M behind Boca Raton's most exclusive guard gates, while oceanfront properties along A1A command $3,000+ per square foot with direct Atlantic views. The Sanctuary, Woodfield, and St. Andrews Country Club anchor the $3M+ segment — driven by Northeast tax migration, hedge-fund relocations, and Florida's zero state income tax advantage."
    whyContact="Boca Raton's $5M+ inventory averaged just 67 days on market in 2025 — down 30% from 2023. The agents featured here hold Douglas Elliman, Compass, and Sotheby's production records with verified $75M+ annual volumes, ensuring your property reaches qualified buyers through South Florida's most established luxury networks and global syndication channels."
    agents={agents}
  />
);

export default BocaRatonAgents;
