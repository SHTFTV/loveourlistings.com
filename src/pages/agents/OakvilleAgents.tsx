import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Paul Kikano",
    brokerage: "Sotheby's International Realty Canada",
    specialty: "Lakefront Estates · Old Oakville · Morrison",
    bio: "One of Oakville's most recognized luxury agents, representing the city's finest lakefront estates and heritage properties through Sotheby's International Realty.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  },
  {
    name: "Mary Jo Chicken",
    brokerage: "Royal LePage Burloak Real Estate",
    specialty: "Old Oakville · Bronte · Clearview",
    bio: "Decades of experience in Oakville's luxury market as a trusted advisor for the town's most prestigious transactions in Old Oakville and the lakeshore corridor.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Lifetime Achievement",
  },
  {
    name: "Bryan Chicken",
    brokerage: "Harvey Kalles Real Estate",
    specialty: "Estate Properties · Glen Abbey · River Oaks",
    bio: "Bringing Harvey Kalles' prestigious brand and marketing expertise to Oakville's luxury market, specializing in Glen Abbey and River Oaks estates.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Harvey Kalles Top Producer",
  }
];

const OakvilleAgents = () => (
  <CityAgentsPage
    city="Oakville"
    region="Ontario, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Oakville's luxury real estate market is among Ontario's most prestigious, featuring stunning lakefront estates in Old Oakville, grand homes in Morrison, and executive properties in Glen Abbey."
    whyContact="Whether you're buying or selling luxury property in Oakville, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default OakvilleAgents;
