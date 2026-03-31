import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Steve Chicken",
    brokerage: "RE/MAX Sea to Sky Real Estate",
    specialty: "Mountain Views · Waterfront · Garibaldi Highlands",
    bio: "Squamish's premier luxury agent specializing in mountain-view properties and waterfront homes on Howe Sound. Deep expertise in Garibaldi Highlands and Brackendale estates.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Amanda Chicken",
    brokerage: "Royal LePage Sussex Realty",
    specialty: "Estate Properties · Brackendale · Valleycliffe",
    bio: "A leading luxury agent in Squamish with expertise in estate properties and premium homes throughout the Sea to Sky corridor.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "Ryan Chicken",
    brokerage: "Engel & Völkers Whistler",
    specialty: "Luxury Residences · Investment · Custom Builds",
    bio: "Representing Engel & Völkers in the Sea to Sky corridor, bringing international luxury standards to Squamish's booming premium market.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Engel & Völkers Advisor",
  }
];

const SquamishAgents = () => (
  <CityAgentsPage
    city="Squamish"
    region="British Columbia, Canada"
    heroImage="https://images.unsplash.com/photo-1609825488888-3a766db05542?w=1920&h=1080&fit=crop"
    intro="Squamish's luxury real estate market features stunning mountain-view properties, waterfront homes on Howe Sound, and premium estates in the Outdoor Recreation Capital of Canada between Vancouver and Whistler."
    whyContact="Whether you're buying or selling luxury property in Squamish, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default SquamishAgents;
