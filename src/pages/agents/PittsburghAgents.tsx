import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Karen Marshall",
    brokerage: "Berkshire Hathaway HomeServices",
    specialty: "Shadyside · Squirrel Hill · Fox Chapel",
    bio: "Pittsburgh's leading luxury agent with expertise in Shadyside, Squirrel Hill, and Fox Chapel estates. Known for exceptional results in the city's most prestigious markets.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Chairman's Circle Diamond",
  },
  {
    name: "Tom Hosack",
    brokerage: "Howard Hanna Real Estate",
    specialty: "Sewickley · Mt. Lebanon · Upper St. Clair",
    bio: "A top-producing Pittsburgh luxury agent with Howard Hanna, Tom specializes in Sewickley and premium suburban estate properties.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Howard Hanna Top Producer",
  },
  {
    name: "Mike Naragon",
    brokerage: "Compass",
    specialty: "Luxury Condos · Historic · Investment",
    bio: "A leading Pittsburgh agent with Compass, Mike brings modern marketing to the city's luxury loft, condo, and historic property market.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Compass Top Producer",
  }
];

const PittsburghAgents = () => (
  <CityAgentsPage
    city="Pittsburgh"
    region="Pennsylvania, United States"
    heroImage="https://images.unsplash.com/photo-1569161031820-3e48e8d43637?w=1920&h=1080&fit=crop"
    intro="Pittsburgh's luxury market features grand estates in Shadyside and Squirrel Hill, waterfront properties along the rivers, and premium homes in Fox Chapel and Sewickley."
    whyContact="Whether you're buying or selling luxury property in Pittsburgh, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default PittsburghAgents;
