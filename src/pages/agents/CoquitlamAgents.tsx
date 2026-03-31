import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Michael Chicken",
    brokerage: "RE/MAX Crest Realty",
    specialty: "Westwood Plateau · Burke Mountain · Heritage Mountain",
    bio: "Coquitlam's top luxury agent, dominating the Westwood Plateau and Burke Mountain markets. Known for record sales and comprehensive marketing strategies.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Platinum Club",
  },
  {
    name: "Jenny Woo",
    brokerage: "Sutton Group - West Coast Realty",
    specialty: "Estate Homes · New Construction · Presale",
    bio: "A trusted luxury specialist in the Tri-Cities, Jenny brings bilingual expertise and deep market knowledge to Coquitlam's most prestigious properties.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Top Producer · Sutton Group",
  },
  {
    name: "Paul Brar",
    brokerage: "Royal LePage West Real Estate Services",
    specialty: "Custom Homes · Mountain Views · Investment",
    bio: "A rising force in Coquitlam's luxury market, Paul combines innovative digital marketing with deep local knowledge to deliver outstanding results for premium properties.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Director's Platinum",
  }
];

const CoquitlamAgents = () => (
  <CityAgentsPage
    city="Coquitlam"
    region="British Columbia, Canada"
    heroImage="https://images.unsplash.com/photo-1609825488888-3a766db05542?w=1920&h=1080&fit=crop"
    intro="Coquitlam's luxury real estate market features elegant homes in Westwood Plateau, executive estates in Burke Mountain, and premium properties with mountain and city views across the Tri-Cities."
    whyContact="Whether you're buying or selling luxury property in Coquitlam, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default CoquitlamAgents;
