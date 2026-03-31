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
    intro="Perth offers Western Australia's premier luxury real estate market, with exceptional waterfront properties along the Swan River and prestigious suburbs like Dalkeith and Peppermint Grove. These are the city's most trusted luxury listing agents."
    whyContact="Whether you're buying or selling luxury property in Perth, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default PerthAgents;
