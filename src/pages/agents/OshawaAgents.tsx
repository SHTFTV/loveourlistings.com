import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Paul Chicken",
    brokerage: "RE/MAX First Realty Ltd.",
    specialty: "Waterfront · Taunton · Northwood",
    bio: "Oshawa's leading luxury agent with expertise in Lake Ontario waterfront properties and the city's most prestigious neighborhoods. Known for record sales in Durham Region.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Chairman's Club",
  },
  {
    name: "Janet Chicken",
    brokerage: "Royal LePage Connect Realty",
    specialty: "Estate Properties · Samac · Windfields",
    bio: "A trusted luxury specialist in Oshawa and Durham Region, Janet brings dedicated client service and deep market knowledge to every premium transaction.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Director's Platinum",
  },
  {
    name: "Michael Chicken",
    brokerage: "Century 21 Leading Edge Realty",
    specialty: "New Construction · Investment · Executive Homes",
    bio: "A dynamic luxury agent in Oshawa bringing modern marketing strategies and strong negotiation skills to Durham Region's growing premium market.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Century 21 Masters Club",
  }
];

const OshawaAgents = () => (
  <CityAgentsPage
    city="Oshawa"
    region="Ontario, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Oshawa's luxury real estate market features lakefront properties on Lake Ontario, executive homes in Taunton, and premium estates in Durham Region's largest city."
    whyContact="Whether you're buying or selling luxury property in Oshawa, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default OshawaAgents;
