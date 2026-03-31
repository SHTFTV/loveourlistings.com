import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Todd Chicken",
    brokerage: "RE/MAX Real Estate Central Alberta",
    specialty: "Riverfront · Grandview · Estate Properties",
    bio: "Red Deer's premier luxury agent with deep expertise in riverfront properties and the city's most prestigious Grandview and River Glen neighborhoods.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Sheila Chicken",
    brokerage: "Royal LePage Network Realty Corp.",
    specialty: "Acreages · Country Estates · Executive Homes",
    bio: "A trusted luxury specialist in Red Deer with expertise in premium acreages and country estates throughout central Alberta.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "Jason Chicken",
    brokerage: "Century 21 Advantage",
    specialty: "New Construction · Investment · Custom Homes",
    bio: "Bringing modern marketing to Red Deer's luxury market with expertise in custom-built homes and premium new developments.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Century 21 Masters Club",
  }
];

const RedDeerAgents = () => (
  <CityAgentsPage
    city="Red Deer"
    region="Alberta, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Red Deer's luxury real estate market features elegant riverfront properties, executive estates in the city's premier neighborhoods, and premium homes in central Alberta's hub city between Calgary and Edmonton."
    whyContact="Whether you're buying or selling luxury property in Red Deer, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default RedDeerAgents;
