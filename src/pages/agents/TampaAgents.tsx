import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Andrew Duncan",
    brokerage: "Duncan Duo RE/MAX",
    specialty: "Davis Islands · Hyde Park · South Tampa",
    bio: "Leading one of Tampa Bay's highest-producing teams, Andrew Duncan dominates the luxury market in Davis Islands, Hyde Park, and South Tampa.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "#1 RE/MAX Team in Florida",
  },
  {
    name: "Martha Thorn",
    brokerage: "Smith & Associates Real Estate",
    specialty: "Bayshore · Beach Park · Palma Ceia",
    bio: "A Smith & Associates luxury specialist, Martha brings refined expertise to Tampa's most prestigious Bayshore Boulevard and Palma Ceia properties.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Smith & Associates Top Producer",
  },
  {
    name: "Joe Fenimore",
    brokerage: "Sotheby's International Realty",
    specialty: "Waterfront · Harbour Island · Luxury Condos",
    bio: "Representing Sotheby's International Realty in Tampa, Joe specializes in waterfront estates and premium luxury condominiums.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  }
];

const TampaAgents = () => (
  <CityAgentsPage
    city="Tampa"
    region="Florida, United States"
    heroImage="https://images.unsplash.com/photo-1562181523-1e5c8cee9431?w=1920&h=1080&fit=crop"
    intro="Tampa's luxury market features stunning waterfront estates on Davis Islands and Bayshore Boulevard, historic mansions in Hyde Park, and premium homes in South Tampa's most exclusive neighborhoods."
    whyContact="Whether you're buying or selling luxury property in Tampa, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default TampaAgents;
