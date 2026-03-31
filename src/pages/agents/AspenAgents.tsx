import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Carrie Wells",
    brokerage: "Douglas Elliman Real Estate",
    specialty: "Central Core · Red Mountain · Woody Creek",
    bio: "One of Aspen's elite luxury agents, Carrie Wells is renowned for her deep expertise across Aspen's most coveted enclaves including Central Core, Red Mountain, and McLain Flats. Her exclusive listings and intimate knowledge of the mountain luxury market make her the trusted choice for ultra-high-net-worth buyers and sellers.",
    website: "https://carriewells.com",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Elite Aspen Luxury Agent",
  },
  {
    name: "Steven Shane",
    brokerage: "Douglas Elliman Real Estate",
    specialty: "Aspen · Snowmass Village · Woody Creek",
    bio: "A legendary figure in Aspen luxury real estate, Steven Shane is a top broker specializing in the most significant estate properties in the Roaring Fork Valley. His portfolio includes landmark residences and development projects that have shaped Aspen's ultra-luxury landscape for decades.",
    website: "https://shaneaspen.com",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Legendary Aspen Broker",
  },
  {
    name: "Engel Lansburgh Team",
    brokerage: "Compass",
    specialty: "Aspen · Snowmass Village · Basalt",
    bio: "Two brokers with one purpose and 100% client satisfaction, the Engel Lansburgh Team are luxury real estate specialists across Aspen, Snowmass Village, and the Roaring Fork Valley. Their portfolio includes properties ranging from $24.7 million mountain estates to exclusive ski-in/ski-out residences.",
    website: "https://engellansburghteam.com",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "100% Client Satisfaction",
  },
];

const AspenAgents = () => (
  <CityAgentsPage
    city="Aspen"
    region="Colorado, United States"
    heroImage="https://images.unsplash.com/photo-1548041347-390744c58da6?w=1920&h=1080&fit=crop"
    intro="Aspen's luxury real estate market is among the most exclusive in the world, with mountain estates on Red Mountain, ski-in/ski-out residences, and historic Central Core properties commanding some of the highest prices per square foot in America. These are the city's most trusted luxury listing agents."
    whyContact="Whether you're acquiring a Red Mountain estate or marketing a Woody Creek compound, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default AspenAgents;
