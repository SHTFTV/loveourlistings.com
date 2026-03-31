import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Paul Savoline",
    brokerage: "RE/MAX First Realty Ltd.",
    specialty: "Waterfront · South Ajax · Pickering Beach",
    bio: "Paul Savoline is Ajax's premier luxury agent, with deep expertise in the town's lakefront properties and South Ajax estate homes. His strong negotiation skills and comprehensive marketing approach have made him the top choice for luxury buyers and sellers in Durham Region.",
    website: "https://www.remax.ca",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Chairman's Club",
  },
  {
    name: "Janet Matthews",
    brokerage: "Royal LePage Connect Realty",
    specialty: "Estate Properties · Salem · North Ajax",
    bio: "Janet Matthews brings decades of experience to Ajax's luxury real estate market, specializing in estate homes in Salem and North Ajax. Her intimate knowledge of the community and dedication to client satisfaction ensure exceptional results for every luxury transaction.",
    website: "https://www.royallepage.ca",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Director's Platinum",
  },
  {
    name: "Michael Chen",
    brokerage: "Keller Williams Energy Real Estate",
    specialty: "New Construction · Investment · Executive Homes",
    bio: "Michael Chen is a dynamic luxury agent in Ajax known for his expertise in premium new construction and executive homes. His analytical approach to market data and innovative digital marketing strategies consistently deliver outstanding results for his high-net-worth clients.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Keller Williams Top Producer",
  },
];

const AjaxAgents = () => (
  <CityAgentsPage
    city="Ajax"
    region="Ontario, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Ajax's luxury real estate market features stunning Lake Ontario waterfront properties, executive homes in South Ajax, and premium new construction throughout this growing Durham Region community. Its proximity to Toronto and beautiful lakeshore make it increasingly attractive to luxury buyers."
    whyContact="Whether you're buying or selling luxury property in Ajax, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default AjaxAgents;
