import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Vivien Yap",
    brokerage: "Ray White Dalkeith | Claremont",
    specialty: "Dalkeith · Peppermint Grove · Cottesloe",
    bio: "The go-to agent for Perth's rich listers, Vivien Yap has become a dominant force in Western Australia's luxury market, consistently handling multi-million dollar transactions in Perth's affluent western suburbs with unmatched market knowledge.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Perth's #1 Luxury Agent",
  },
  {
    name: "Perth Top 50 WA Agents",
    brokerage: "Various Premier Brokerages",
    specialty: "Nedlands · Mosman Park · City Beach",
    bio: "Real Estate Business reveals Western Australia's Top 50 agents annually, recognizing the state's highest performers in sales volume, client service, and market expertise across Perth's most prestigious suburbs.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Top 50 WA Agents 2024",
  },
  {
    name: "Perth Sotheby's Team",
    brokerage: "Perth Sotheby's International Realty",
    specialty: "Swan River · Kings Park · Waterfront",
    bio: "Sotheby's International Realty represents Perth's finest luxury properties, from Swan River waterfront estates to architecturally significant homes, connecting local expertise with a global network of affluent buyers.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's Global Network",
  },
];

const PerthAgents = () => (
  <CityAgentsPage
    city="Perth"
    region="AU, INT"
    heroImage="https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=1920&h=1080&fit=crop"
    intro="Perth's luxury market is experiencing a mining-wealth-driven resurgence — Dalkeith and Peppermint Grove riverfront estates now command $10M–$30M+ as Western Australia's resources boom fuels domestic ultra-high-net-worth growth. Cottesloe's oceanfront positions, Mosman Park's heritage properties, and the emerging Elizabeth Quay precinct offer distinct luxury propositions. Perth's relative affordability versus Sydney and Melbourne, combined with its proximity to Asian markets and world-class lifestyle, has attracted significant interstate and international capital. These agents are the definitive specialists in WA's prestige property landscape."
    whyContact="Perth's luxury segment demands agents who understand FIRB (Foreign Investment Review Board) requirements, WA's unique settlement processes, and the premium dynamics between river-facing and ocean-facing positions across the western suburbs. These specialists leverage networks spanning mining executives, Asian investor groups, and the established families of Nedlands and Claremont. Each agent is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default PerthAgents;
