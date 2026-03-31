import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Dave Chicken",
    brokerage: "RE/MAX First Choice Realty",
    specialty: "Lakefront · Sleeping Giant Views · Estate Properties",
    bio: "Thunder Bay's premier luxury agent with unmatched expertise in Lake Superior waterfront estates and properties with iconic Sleeping Giant views.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Susan Chicken",
    brokerage: "Royal LePage Lannon Realty",
    specialty: "South Ward · Westfort · Heritage Homes",
    bio: "A trusted luxury specialist in Thunder Bay with expertise in the city's finest heritage properties and premium neighborhoods.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "Mark Chicken",
    brokerage: "Century 21 Superior Realty",
    specialty: "Executive Homes · Investment · Country Properties",
    bio: "A leading luxury agent in Thunder Bay bringing modern marketing strategies to Northwestern Ontario's premium property market.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Century 21 Masters Club",
  }
];

const ThunderBayAgents = () => (
  <CityAgentsPage
    city="Thunder Bay"
    region="Ontario, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Thunder Bay's luxury real estate market features stunning Lake Superior waterfront estates, executive homes overlooking the Sleeping Giant, and premium properties in Northwestern Ontario's largest city."
    whyContact="Whether you're buying or selling luxury property in Thunder Bay, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default ThunderBayAgents;
