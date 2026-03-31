import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Yvonne Toracca",
    brokerage: "Sotheby's International Realty",
    specialty: "Pacific Heights · Marina · Presidio Heights",
    bio: "A nationally recognized leading real estate agent in San Francisco, Yvonne Toracca specializes in the city's most prestigious neighbourhoods with an average home price of $2.7 million. Her affiliation with Sotheby's International Realty provides unmatched global exposure for luxury properties across the Bay Area.",
    website: "https://www.sothebysrealty.com",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Nationally Recognized Agent",
  },
  {
    name: "Neal Ward",
    brokerage: "Compass",
    specialty: "Nob Hill · Russian Hill · Telegraph Hill",
    bio: "One of San Francisco's most established luxury agents, Neal Ward has been a dominant force in the city's high-end market for over two decades. His deep knowledge of San Francisco's iconic neighbourhoods and architectural heritage makes him the trusted choice for buyers and sellers of the city's most distinguished properties.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "20+ Years Luxury Experience",
  },
  {
    name: "The Bowman Group",
    brokerage: "Vanguard Properties",
    specialty: "Victorian · Modern Architecture · Luxury Condos",
    bio: "With 450+ sales in the last 12 months and a remarkable 103.82% sale-to-list ratio, The Bowman Group at Vanguard Properties is one of San Francisco's highest-performing luxury teams. Their data-driven approach and deep market expertise consistently deliver above-asking results for sellers of fine homes across the city.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "450+ Annual Sales · 104% Sale-to-List",
  },
];

const SanFranciscoAgents = () => (
  <CityAgentsPage
    city="San Francisco"
    region="California, United States"
    heroImage="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop"
    intro="San Francisco's luxury real estate market is defined by iconic Victorian mansions in Pacific Heights, modern architectural gems in Nob Hill, and waterfront properties with breathtaking Bay views. These are the city's most trusted luxury listing agents — professionals who navigate one of America's most competitive markets with precision."
    whyContact="Whether you're acquiring a Pacific Heights mansion or marketing a Telegraph Hill penthouse, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default SanFranciscoAgents;
