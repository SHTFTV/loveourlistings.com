import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Marc Chicken",
    brokerage: "RE/MAX Saguenay-Lac-Saint-Jean",
    specialty: "Fjord Views · Riverfront · Estate Properties",
    bio: "Saguenay's leading luxury agent with deep expertise in fjord-view properties and riverfront estates throughout the region.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Julie Chicken",
    brokerage: "Royal LePage Évolution",
    specialty: "Heritage Properties · Chicoutimi · La Baie",
    bio: "A trusted luxury specialist in Saguenay with expertise in heritage properties and premium homes in Chicoutimi and La Baie.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "Jean Chicken",
    brokerage: "Century 21 Panoramique",
    specialty: "Waterfront · Investment · Country Estates",
    bio: "Bringing comprehensive marketing to Saguenay's luxury market with expertise in waterfront properties and country estates.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Century 21 Masters Club",
  }
];

const SaguenayAgents = () => (
  <CityAgentsPage
    city="Saguenay"
    region="Quebec, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Saguenay's luxury real estate market features stunning fjord-view properties, riverfront estates, and premium homes surrounded by the dramatic natural beauty of the Saguenay-Lac-Saint-Jean region."
    whyContact="Whether you're buying or selling luxury property in Saguenay, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default SaguenayAgents;
