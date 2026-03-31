import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Alexander Phillips",
    brokerage: "Phillips Pantzer Donnelley",
    specialty: "Eastern Suburbs · Harbour Views · Prestige Homes",
    bio: "Ranked #1 agent in Australia by REB with nearly $1 billion in annual sales, Alexander specializes in Sydney's prestigious Eastern Suburbs. With 23 years of experience, he consistently sets suburb records across Bellevue Hill, Point Piper, and Double Bay.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "#1 Agent in Australia (REB)",
  },
  {
    name: "Brad Pillinger",
    brokerage: "Pillinger",
    specialty: "Ultra-Luxury · Waterfront · Trophy Homes",
    bio: "A second-generation luxury real estate agent with 30 years of experience, Brad is renowned for selling some of Australia's most expensive homes, including landmark $85M+ transactions. His name is synonymous with Sydney's ultra-prestige market.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "30 Years in Ultra-Luxury",
  },
  {
    name: "Jaime Upton",
    brokerage: "Sydney Sotheby's International Realty",
    specialty: "North Shore · Eastern Suburbs · Global Clients",
    bio: "With a 25-year career spanning Sydney, London, and global markets, Jaime has amassed a network of 15,000+ clients. She brings world-class expertise and Sotheby's global reach to Sydney's most distinguished properties.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "25 Years · 15,000+ Clients",
  },
];

const SydneyAgents = () => (
  <CityAgentsPage
    city="Sydney"
    region="AU, INT"
    heroImage="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1920&h=1080&fit=crop"
    intro="Sydney is Australia's undisputed luxury capital — Point Piper and Vaucluse harbour-front estates regularly trade at A$30M–A$100M+, making the Eastern Suburbs one of the most expensive residential corridors in the Southern Hemisphere. From the sandstone heritage homes of Woollahra to Mosman's north-shore waterfront and the emerging Barangaroo precinct, Sydney's prestige market attracts both domestic mining and tech wealth and international capital from Greater China and Southeast Asia. FIRB restrictions and NSW stamp duty surcharges for foreign buyers add layers of complexity that only seasoned specialists can navigate."
    whyContact="Sydney's luxury market demands agents who understand NSW's tiered stamp duty structure, FIRB approval timelines, and the heritage conservation orders that govern many of the Eastern Suburbs' most valuable properties. These specialists command the off-market networks that define Sydney's trophy-home transactions — where the majority of $20M+ sales never reach public listing portals. Each agent is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default SydneyAgents;
