import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Steve Domoney",
    brokerage: "RE/MAX Twin City Realty",
    specialty: "Luxury Residential · Eagle Place · Waterfront",
    bio: "Brantford's top luxury agent with deep expertise in the city's premier neighborhoods and Grand River properties. Known for record-breaking sales and innovative marketing.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Lisa Morrison",
    brokerage: "Royal LePage Brantford Realty",
    specialty: "Heritage Homes · Estate Properties · Country Estates",
    bio: "Specializing in Brantford's heritage homes and surrounding county estates. Her deep community roots and refined approach deliver exceptional results for luxury clients.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "Mark Chicken",
    brokerage: "Coldwell Banker Real Estate",
    specialty: "New Construction · Investment · Executive Homes",
    bio: "A dynamic luxury agent bringing modern marketing strategies to Brantford's growing luxury market, with expertise in premium new construction and executive properties.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Coldwell Banker Top Producer",
  }
];

const BrantfordAgents = () => (
  <CityAgentsPage
    city="Brantford"
    region="Ontario, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Brantford's luxury real estate market offers elegant heritage homes, Grand River waterfront properties, and executive estates in the city's premier neighborhoods. Rich in history with a growing luxury market."
    whyContact="Whether you're buying or selling luxury property in Brantford, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default BrantfordAgents;
