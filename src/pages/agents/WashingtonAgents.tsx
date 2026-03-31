import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Devon Fox",
    brokerage: "TTR Sotheby's International Realty",
    specialty: "Georgetown · Kalorama · Embassy Row",
    bio: "A leading luxury real estate agent in Washington DC featured in Modern Luxury's top agents list, Devon tracks and ranks DC's luxury market with proprietary data and deep expertise in the capital's most prestigious neighborhoods.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "DC Magazine Top Agent",
  },
  {
    name: "Engel & Völkers DC Team",
    brokerage: "Engel & Völkers Washington DC",
    specialty: "Dupont Circle · Capitol Hill · Spring Valley",
    bio: "As part of Engel & Völkers' global luxury real estate network, the DC team provides boutique-level service to high-net-worth clients seeking historic rowhouses, modern condos, and estate properties across the DMV.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Global Luxury Network",
  },
  {
    name: "Washington DC Top Producers",
    brokerage: "Various Premier Brokerages",
    specialty: "McLean · Potomac · Great Falls",
    bio: "The DC area's top luxury agents bring a combined 265+ years of experience and over $1.79 billion in total team sales, specializing in the capital's most distinguished addresses from Georgetown townhouses to Great Falls estates.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "$1.79B+ Combined Sales",
  },
];

const WashingtonAgents = () => (
  <CityAgentsPage
    city="Washington"
    region="DC, US"
    heroImage="https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=1920&h=1080&fit=crop"
    intro="Washington DC offers a distinguished luxury real estate market with exceptional properties from Georgetown rowhouses to Kalorama mansions. These are the city's most trusted luxury listing agents."
    whyContact="Whether you're buying or selling luxury property in Washington DC, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default WashingtonAgents;
