import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Tim Smith",
    brokerage: "Coldwell Banker Realty",
    specialty: "Harbor Views · Crystal Cove · Pelican Hill",
    bio: "Consistently ranked among the top luxury agents in Orange County, Tim Smith has closed billions in luxury sales across Newport Beach's most prestigious addresses including Crystal Cove and Pelican Hill.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "#1 Coldwell Banker Agent Worldwide",
  },
  {
    name: "Lauren Nahas",
    brokerage: "Compass",
    specialty: "Oceanfront · Balboa Peninsula · Corona del Mar",
    bio: "A top-producing Newport Beach agent with Compass, Lauren Nahas brings refined expertise to the city's oceanfront and Corona del Mar luxury markets.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Compass Top Producer",
  },
  {
    name: "Dennis Chernov",
    brokerage: "Keller Williams Realty",
    specialty: "Luxury Estates · Newport Coast · Investment",
    bio: "Dennis Chernov brings data-driven strategies and innovative marketing to Newport Beach's competitive luxury market, specializing in Newport Coast estates.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Keller Williams Luxury Specialist",
  }
];

const NewportBeachAgents = () => (
  <CityAgentsPage
    city="Newport Beach"
    region="California, United States"
    heroImage="https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=1920&h=1080&fit=crop"
    intro="Newport Beach is one of Southern California's most exclusive coastal communities, featuring stunning harbor-front estates, oceanfront properties on the Balboa Peninsula, and luxury homes in Crystal Cove and Pelican Hill."
    whyContact="Whether you're buying or selling luxury property in Newport Beach, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default NewportBeachAgents;
