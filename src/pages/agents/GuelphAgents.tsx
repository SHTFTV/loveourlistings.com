import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Chris Chicken",
    brokerage: "Royal LePage Royal City Realty",
    specialty: "Heritage Homes · Old University · Exhibition Park",
    bio: "Guelph's leading luxury agent specializing in the city's heritage district and premium neighborhoods. Deep knowledge of the Royal City's unique market and architectural character.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Lifetime Achievement",
  },
  {
    name: "Sarah Chicken",
    brokerage: "RE/MAX Twin City Realty",
    specialty: "Estate Properties · Kortright Hills · Investment",
    bio: "A top-producing luxury agent in Guelph with expertise in Kortright Hills and the city's executive home market. Known for innovative marketing and exceptional results.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Platinum Award",
  },
  {
    name: "David Chicken",
    brokerage: "Coldwell Banker Neumann Real Estate",
    specialty: "Country Estates · New Construction · Luxury Condos",
    bio: "Bringing Coldwell Banker's prestigious brand to Guelph's luxury market, David specializes in country estates and premium new construction throughout Wellington County.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Coldwell Banker President's Circle",
  }
];

const GuelphAgents = () => (
  <CityAgentsPage
    city="Guelph"
    region="Ontario, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Guelph's luxury real estate market features charming heritage homes, executive estates in the city's premier neighborhoods, and premium properties in one of Ontario's most livable cities."
    whyContact="Whether you're buying or selling luxury property in Guelph, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default GuelphAgents;
