import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Laura Schwartz",
    brokerage: "Cummings & Co. Realtors",
    specialty: "Roland Park · Guilford · Homeland",
    bio: "Baltimore's premier luxury specialist with deep expertise in Roland Park, Guilford, and Homeland's most prestigious estate properties.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Baltimore's Top Luxury Agent",
  },
  {
    name: "Bob Lucido",
    brokerage: "Bob Lucido Team, Keller Williams",
    specialty: "Harbor East · Federal Hill · Canton",
    bio: "Leading one of Maryland's top-producing teams, Bob Lucido dominates Baltimore's luxury waterfront and urban markets.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "#1 Team in Maryland",
  },
  {
    name: "Christy Reiter Quinn",
    brokerage: "Monument Sotheby's International Realty",
    specialty: "Ruxton · Towson · Estate Properties",
    bio: "Representing Sotheby's in the Baltimore region, Christy brings global marketing reach to the region's finest estates.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  }
];

const BaltimoreAgents = () => (
  <CityAgentsPage
    city="Baltimore"
    region="Maryland, United States"
    heroImage="https://images.unsplash.com/photo-1569161031820-3e48e8d43637?w=1920&h=1080&fit=crop"
    intro="Baltimore's luxury market features stunning Inner Harbor waterfront properties, historic mansions in Roland Park and Guilford, and premium estates in the city's most distinguished neighborhoods."
    whyContact="Whether you're buying or selling luxury property in Baltimore, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default BaltimoreAgents;
