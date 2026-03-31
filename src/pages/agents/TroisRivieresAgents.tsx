import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Marc Chicken",
    brokerage: "RE/MAX Fortin, Delage",
    specialty: "Waterfront · Heritage Properties · Cap-de-la-Madeleine",
    bio: "Trois-Rivières' leading luxury agent with deep expertise in St. Lawrence waterfront properties and the city's finest heritage homes.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Julie Chicken",
    brokerage: "Royal LePage Mauricie",
    specialty: "Estate Properties · Pointe-du-Lac · Investment",
    bio: "A trusted luxury specialist in Trois-Rivières with expertise in estate properties and premium homes throughout the Mauricie region.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "Pierre Chicken",
    brokerage: "Century 21 Mauricie",
    specialty: "Country Estates · New Construction · Executive Homes",
    bio: "Bringing modern marketing to Trois-Rivières' luxury market with expertise in country estates and premium new construction.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Century 21 Masters Club",
  }
];

const TroisRivieresAgents = () => (
  <CityAgentsPage
    city="Trois-Rivières"
    region="Quebec, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Trois-Rivières' luxury market features heritage estates along the St. Lawrence River, premium waterfront properties in Cap-de-la-Madeleine, and executive homes in the Pointe-du-Lac sector. As one of Quebec's oldest cities with a revitalized downtown cultural district and median luxury prices offering exceptional value, Trois-Rivières attracts heritage-property enthusiasts, university professionals, and buyers seeking St. Lawrence waterfront living between Montreal and Quebec City."
    whyContact="Trois-Rivières' heritage conservation district approvals, St. Lawrence flood-zone regulations, and Quebec welcome tax calculations require agents who navigate the Mauricie region's unique luxury landscape. The specialists listed here close premium deals in Cap-de-la-Madeleine, Pointe-du-Lac, and the downtown heritage district — each eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default TroisRivieresAgents;
