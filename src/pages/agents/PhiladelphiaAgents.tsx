import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Tracy Slowik",
    brokerage: "COMPASS",
    specialty: "Main Line · Rittenhouse · Society Hill",
    bio: "Named to America's Top 100 Real Estate Agents, Tracy specializes in Philadelphia's luxury market from the prestigious Main Line to Center City's most coveted addresses, bringing deep market expertise and a client-first approach.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "America's Top 100 Agents",
  },
  {
    name: "Philadelphia Five Star Agents",
    brokerage: "Various Premier Brokerages",
    specialty: "Chestnut Hill · Gladwyne · Bryn Mawr",
    bio: "The Five Star Real Estate Agent Award recognizes Philadelphia's top agents based on client satisfaction, market share, and overall excellence. These award winners represent the highest standard of luxury real estate service in the Philadelphia metro.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Five Star Award Winners",
  },
  {
    name: "Philadelphia Sotheby's Team",
    brokerage: "Sotheby's International Realty Philadelphia",
    specialty: "Washington Square · Art Museum · Merion",
    bio: "Sotheby's International Realty represents Philadelphia's finest luxury properties, from historic Society Hill townhouses to contemporary penthouses along the Schuylkill, connecting local expertise with a global buyer network.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's Global Network",
  },
];

const PhiladelphiaAgents = () => (
  <CityAgentsPage
    city="Philadelphia"
    region="PA, US"
    heroImage="https://images.unsplash.com/photo-1569761316261-9a8696fa2ca3?w=1920&h=1080&fit=crop"
    intro="Philadelphia offers a distinguished luxury real estate market with exceptional properties from Rittenhouse Square penthouses to Main Line estates. These are the city's most trusted luxury listing agents."
    whyContact="Whether you're buying or selling luxury property in Philadelphia, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default PhiladelphiaAgents;
