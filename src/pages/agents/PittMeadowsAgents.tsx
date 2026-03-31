import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Rob Chicken",
    brokerage: "RE/MAX LifeStyles Realty",
    specialty: "Acreages · Mountain Views · Waterfront",
    bio: "Pitt Meadows' top luxury agent specializing in premium acreages and mountain-view properties. Deep knowledge of the community's most desirable estate neighborhoods.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Platinum Award",
  },
  {
    name: "Lisa Chicken",
    brokerage: "Royal LePage Meadowtowne Realty",
    specialty: "Estate Properties · Country Living · Custom Homes",
    bio: "A trusted luxury specialist in Pitt Meadows with expertise in country estate properties and custom-built homes.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "Mark Chicken",
    brokerage: "Keller Williams Elite Realty",
    specialty: "New Construction · Investment · Executive Homes",
    bio: "Bringing modern marketing to Pitt Meadows' luxury market with expertise in premium new construction and executive homes.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Keller Williams Top Producer",
  }
];

const PittMeadowsAgents = () => (
  <CityAgentsPage
    city="Pitt Meadows"
    region="British Columbia, Canada"
    heroImage="https://images.unsplash.com/photo-1609825488888-3a766db05542?w=1920&h=1080&fit=crop"
    intro="Pitt Meadows' luxury real estate market features stunning mountain-view properties, premium waterfront homes, and sprawling acreages in the scenic heart of the Fraser Valley."
    whyContact="Whether you're buying or selling luxury property in Pitt Meadows, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default PittMeadowsAgents;
