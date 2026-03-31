import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "OKAY.com Team",
    brokerage: "OKAY.com (Forbes Global Properties)",
    specialty: "The Peak · Mid-Levels · Repulse Bay",
    bio: "As an exclusive member of Forbes Global Properties, OKAY.com is a trusted real estate agency in Hong Kong offering up-to-date luxury listings and responsive property agents across the city's most prestigious addresses.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Forbes Global Properties Member",
  },
  {
    name: "Christie's Hong Kong Team",
    brokerage: "Christie's International Real Estate Hong Kong",
    specialty: "Victoria Peak · Deep Water Bay · Stanley",
    bio: "With over 250 years of unparalleled luxury service and reach in 50+ countries, Christie's Hong Kong represents the pinnacle of luxury real estate, offering exceptional apartments, homes, and properties across the world's most dynamic city.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "250+ Years of Luxury",
  },
  {
    name: "Hong Kong Notable Agents",
    brokerage: "Various Premier Brokerages",
    specialty: "Southside · Discovery Bay · Sai Kung",
    bio: "Hong Kong Business magazine annually recognizes the city's most notable real estate agents, highlighting professionals who demonstrate exceptional market knowledge and client service in one of the world's most competitive luxury markets.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "HK Business Notable Agents",
  },
];

const HongKongAgents = () => (
  <CityAgentsPage
    city="Hong Kong"
    region="HK, INT"
    heroImage="https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=1920&h=1080&fit=crop"
    intro="Hong Kong offers one of Asia's most exclusive and dynamic luxury real estate markets, with exceptional properties from Victoria Peak mansions to harbour-view penthouses. These are the city's most trusted luxury listing agents."
    whyContact="Whether you're buying or selling luxury property in Hong Kong, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default HongKongAgents;
