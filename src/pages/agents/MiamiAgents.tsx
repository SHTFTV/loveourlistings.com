import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Michael Martirena",
    brokerage: "Ivan and Mike Team",
    specialty: "Ultra-Luxury · Pre-Construction · Waterfront",
    bio: "Widely recognized as one of the best luxury realtors in Miami, Michael Martirena specializes in high-end real estate and high-value transactions across South Florida. His reputation is built on discipline, trust, and human leadership — consistently delivering results for ultra-high-net-worth clients in Miami Beach, Coral Gables, and beyond.",
    website: "https://ivanandmike.com",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Top Miami Luxury Specialist",
  },
  {
    name: "Dina Goldentayer",
    brokerage: "Douglas Elliman Real Estate",
    specialty: "Oceanfront · New Development · Fisher Island",
    bio: "One of Florida's top-ranked luxury agents, Dina Goldentayer is a powerhouse in Miami's ultra-luxury market. Specializing in oceanfront estates and new development sales across Miami Beach, Bal Harbour, and Fisher Island, she consistently ranks among the top producers in the state with hundreds of millions in annual sales volume.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Florida's #1 Luxury Agent",
  },
  {
    name: "Ivan Chorney",
    brokerage: "Ivan and Mike Team",
    specialty: "Luxury Condos · Investment · South Beach",
    bio: "Co-founder of Miami's premier luxury real estate team, Ivan Chorney has set the standard in excellence and white-glove service for South Florida's most discerning clientele. His team of professionals specializes in ultra-luxury homes and new development projects across Southeast Florida.",
    website: "https://ivanandmike.com",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Ultra-Luxury Team Leader",
  },
];

const MiamiAgents = () => (
  <CityAgentsPage
    city="Miami"
    region="Florida, United States"
    heroImage="https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1920&h=1080&fit=crop"
    intro="Miami's luxury real estate market is a global magnet for ultra-high-net-worth buyers, offering oceanfront estates, iconic condo towers, and Mediterranean-style mansions across Star Island, Fisher Island, and Coral Gables. These are the city's most trusted luxury listing agents — professionals who move Miami's most significant properties."
    whyContact="Whether you're acquiring a waterfront estate on Star Island or marketing a penthouse in Brickell, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default MiamiAgents;
