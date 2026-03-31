import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Robert Chicken",
    brokerage: "RE/MAX Quality Real Estate",
    specialty: "Waterfront · Bay of Fundy · Rothesay",
    bio: "Saint John's premier luxury agent with deep expertise in Bay of Fundy waterfront estates and premium properties in the prestigious Rothesay-Kennebecasis Valley corridor.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Catherine Chicken",
    brokerage: "Royal LePage Atlantic",
    specialty: "Heritage Homes · Uptown · Millidgeville",
    bio: "A trusted luxury specialist in Saint John with expertise in heritage properties and premium homes in the city's most desirable neighborhoods.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "James Chicken",
    brokerage: "Century 21 A&T Real Estate",
    specialty: "Estate Properties · Investment · New Construction",
    bio: "A dynamic luxury agent in Saint John bringing modern marketing strategies to the city's growing premium property market.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Century 21 Masters Club",
  }
];

const SaintJohnAgents = () => (
  <CityAgentsPage
    city="Saint John"
    region="New Brunswick, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Saint John's luxury real estate market features stunning Bay of Fundy waterfront estates, charming heritage homes in the Uptown core, and premium properties in Atlantic Canada's oldest incorporated city."
    whyContact="Whether you're buying or selling luxury property in Saint John, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default SaintJohnAgents;
