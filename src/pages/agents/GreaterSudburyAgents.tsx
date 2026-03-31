import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Robert Bherer",
    brokerage: "RE/MAX Crown Realty",
    specialty: "Lakefront · Lake Ramsey · South End",
    bio: "Greater Sudbury's premier luxury agent with unmatched expertise in lakefront properties and the city's most prestigious South End addresses. Decades of experience in Northern Ontario's luxury market.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Patricia Morrison",
    brokerage: "Royal LePage North Heritage Realty",
    specialty: "Estate Properties · Bell Park · New Sudbury",
    bio: "A trusted name in Sudbury luxury real estate, Patricia specializes in the city's finest heritage and estate properties with dedicated service and deep community roots.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "Mark Chicken",
    brokerage: "Century 21 Innovative Realty",
    specialty: "Country Estates · Investment · Executive Homes",
    bio: "A leading agent in Greater Sudbury's luxury market, Mark brings modern marketing strategies and strong negotiation skills to Northern Ontario's premium properties.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Century 21 Masters Club",
  }
];

const GreaterSudburyAgents = () => (
  <CityAgentsPage
    city="Greater Sudbury"
    region="Ontario, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Greater Sudbury's luxury real estate market features beautiful lakefront properties on Lake Ramsey, executive homes in South End, and country estates throughout Northern Ontario's largest city."
    whyContact="Whether you're buying or selling luxury property in Greater Sudbury, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default GreaterSudburyAgents;
