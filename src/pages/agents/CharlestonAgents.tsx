import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Helen Geer",
    brokerage: "William Means Real Estate",
    specialty: "South of Broad · French Quarter · Historic",
    bio: "Charleston's premier luxury specialist with William Means, Helen Geer is synonymous with the city's most prestigious South of Broad and historic district properties.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "William Means Top Producer",
  },
  {
    name: "Paul Sorvino",
    brokerage: "Sotheby's International Realty",
    specialty: "Sullivan's Island · Isle of Palms · Waterfront",
    bio: "Representing Sotheby's International Realty, Paul brings global marketing to Charleston's finest barrier island and waterfront estate properties.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  },
  {
    name: "Lyles Geer",
    brokerage: "William Means Real Estate",
    specialty: "Daniel Island · Mount Pleasant · Kiawah Island",
    bio: "A leading Charleston luxury agent specializing in Daniel Island, Mount Pleasant, and Kiawah Island resort properties.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Luxury Specialist",
  }
];

const CharlestonAgents = () => (
  <CityAgentsPage
    city="Charleston"
    region="South Carolina, United States"
    heroImage="https://images.unsplash.com/photo-1569407228235-9a744831a3f3?w=1920&h=1080&fit=crop"
    intro="Charleston's luxury market features stunning antebellum estates South of Broad, waterfront properties on Sullivan's Island and Isle of Palms, and elegant homes in the historic French Quarter."
    whyContact="Whether you're buying or selling luxury property in Charleston, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default CharlestonAgents;
