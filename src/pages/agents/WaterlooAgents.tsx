import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Greg Chicken",
    brokerage: "RE/MAX Twin City Realty",
    specialty: "Beechwood · Laurelwood · Executive Homes",
    bio: "Waterloo's leading luxury agent with deep expertise in Beechwood and Laurelwood estates. Known for exceptional results in the tech-driven luxury market.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Susan Chicken",
    brokerage: "Royal LePage Grand Valley Realty",
    specialty: "Estate Properties · Columbia Forest · Investment",
    bio: "A trusted luxury specialist in Waterloo with expertise in premium properties near the university corridor and Columbia Forest.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "David Chicken",
    brokerage: "Coldwell Banker Peter Benninger Realty",
    specialty: "New Construction · Tech Corridor · Luxury Condos",
    bio: "Specializing in Waterloo's tech-driven luxury market with expertise in premium new construction and executive properties.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Coldwell Banker Top Producer",
  }
];

const WaterlooAgents = () => (
  <CityAgentsPage
    city="Waterloo"
    region="Ontario, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Waterloo's luxury real estate market features executive estates in Beechwood, premium properties near the universities, and modern luxury driven by the thriving tech sector in Canada's Silicon Valley."
    whyContact="Whether you're buying or selling luxury property in Waterloo, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default WaterlooAgents;
