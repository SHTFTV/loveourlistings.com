import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Ivan Sher",
    brokerage: "IS Luxury",
    specialty: "The Summit · The Ridges · MacDonald Highlands",
    bio: "Owner of IS Luxury, ranked the #1 luxury Las Vegas brokerage by BrokerMetrics, Ivan leads a boutique firm of 22 agents that has set new standards in the ultra-luxury Vegas market, with listings reaching $28.75 million and beyond.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "#1 Luxury Broker Las Vegas",
  },
  {
    name: "Gavin Ernstone",
    brokerage: "IS Luxury",
    specialty: "Seven Hills · Tournament Hills · Luxury High-Rise",
    bio: "Named among Modern Luxury Vegas' top real estate leaders for 2024, Gavin brings unparalleled expertise and dedication to Las Vegas' luxury market, specializing in guard-gated communities and architectural masterpieces.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Modern Luxury Top Leader 2024",
  },
  {
    name: "Forrest Barbee",
    brokerage: "IS Luxury",
    specialty: "Summerlin · Henderson · Strip-View Penthouses",
    bio: "Part of IS Luxury's elite team, Forrest specializes in Las Vegas' most exclusive properties from guard-gated Summerlin estates to Strip-view penthouses, serving high-net-worth clients seeking the ultimate desert luxury lifestyle.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "IS Luxury Elite Agent",
  },
];

const LasVegasAgents = () => (
  <CityAgentsPage
    city="Las Vegas"
    region="NV, US"
    heroImage="https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=1920&h=1080&fit=crop"
    intro="The Summit Club estates list between $8M and $30M behind guard gates in Summerlin, while MacDonald Highlands' custom builds in Henderson command $1,500+ per square foot with panoramic Strip and mountain views. Nevada's zero state income tax continues driving California and New York wealth migration — pushing Las Vegas' $5M+ segment to record transaction volume in 2025, with The Ridges and Seven Hills anchoring ultra-luxury demand."
    whyContact="Las Vegas' $5M+ market recorded 31% volume growth in 2025, the fastest of any major U.S. luxury market. The agents featured here — led by IS Luxury, BrokerMetrics' #1 ranked Las Vegas luxury brokerage — hold verified production records exceeding $100M annually, ensuring your property reaches qualified buyers through both Strip-adjacent networks and global wealth channels."
    agents={agents}
  />
);

export default LasVegasAgents;
