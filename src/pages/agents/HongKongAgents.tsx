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
    intro="Hong Kong remains Asia's definitive ultra-luxury market — Victoria Peak houses trade at HK$1B+ (US$128M+), making it one of the most expensive residential addresses on earth. The city's leasehold system, Buyer's Stamp Duty for non-permanent residents (15%), and the recent relaxation of cooling measures have reshaped transaction dynamics. From The Peak and Repulse Bay to Deep Water Bay and Shouson Hill, Hong Kong's prestige enclaves attract mainland Chinese capital, global family offices, and multinational executives. These agents represent the pinnacle of the city's luxury market expertise."
    whyContact="Hong Kong's complex stamp duty tiers, government lease structures, and the interplay between developer first-sale regulations and secondary market dynamics demand agents with institutional-grade knowledge. These specialists navigate HKMA mortgage caps, the Additional Buyer's Stamp Duty framework, and the premium commanded by south-facing harbour views versus island-side positions. Their networks span Greater China's UHNW community. Each agent is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default HongKongAgents;
