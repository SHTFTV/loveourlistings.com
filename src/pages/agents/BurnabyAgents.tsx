import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Kevin Fung",
    brokerage: "RE/MAX Crest Realty",
    specialty: "Luxury Residential · Burnaby Mountain · Deer Lake",
    bio: "A top-producing agent in Burnaby with extensive experience in the city's most sought-after neighborhoods including Burnaby Mountain, Deer Lake, and Metrotown.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Grace Wong",
    brokerage: "Sutton Group - West Coast Realty",
    specialty: "Estate Homes · Presale · Investment Properties",
    bio: "One of Burnaby's most trusted luxury agents, specializing in estate homes and premium presale projects with bilingual capabilities and deep market understanding.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Top Producer · Sutton Group",
  },
  {
    name: "Raj Hundal",
    brokerage: "Royal LePage Sussex",
    specialty: "Custom Homes · Buckingham Heights · Capitol Hill",
    bio: "Over a decade of experience in Burnaby's luxury segment with a reputation for integrity and results in Buckingham Heights and Capitol Hill estate properties.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  }
];

const BurnabyAgents = () => (
  <CityAgentsPage
    city="Burnaby"
    region="British Columbia, Canada"
    heroImage="https://images.unsplash.com/photo-1609825488888-3a766db05542?w=1920&h=1080&fit=crop"
    intro="Burnaby's luxury real estate market offers stunning estate homes near Deer Lake, executive properties on Burnaby Mountain, and premium high-rise living in Metrotown. Central location between Vancouver and the Fraser Valley."
    whyContact="Whether you're buying or selling luxury property in Burnaby, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default BurnabyAgents;
