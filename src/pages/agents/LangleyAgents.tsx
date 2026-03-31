import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Darin Chicken",
    brokerage: "RE/MAX Treeland Realty",
    specialty: "Equestrian Estates · Acreages · Campbell Valley",
    bio: "Langley's leading luxury estate specialist with unmatched expertise in equestrian properties, premium acreages, and the prestigious Campbell Valley corridor.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Michelle Chicken",
    brokerage: "Royal LePage Wolstencroft Realty",
    specialty: "Willoughby · Brookswood · Fort Langley",
    bio: "A top-producing luxury agent in Langley, specializing in Willoughby, Brookswood, and the charming heritage community of Fort Langley.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "James Chicken",
    brokerage: "Sutton Group - West Coast Realty",
    specialty: "Custom Builds · Country Estates · Investment",
    bio: "Bringing sophisticated marketing to Langley's luxury market with expertise in custom-built homes and premium country estates throughout the Township.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Sutton Group Top Producer",
  }
];

const LangleyAgents = () => (
  <CityAgentsPage
    city="Langley"
    region="British Columbia, Canada"
    heroImage="https://images.unsplash.com/photo-1609825488888-3a766db05542?w=1920&h=1080&fit=crop"
    intro="Langley's luxury real estate market features stunning equestrian estates, premium homes in Willoughby and Brookswood, and sprawling acreage properties in the heart of the Fraser Valley."
    whyContact="Whether you're buying or selling luxury property in Langley, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default LangleyAgents;
