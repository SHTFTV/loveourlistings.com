import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Marie-Claude Palasse",
    brokerage: "Sotheby's International Realty Québec",
    specialty: "Old Quebec · Sillery · Cap-Rouge",
    bio: "A leading luxury agent in Quebec City, bringing Sotheby's prestigious global platform to the city's finest heritage and estate properties in Old Quebec and Sillery.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  },
  {
    name: "Jean-François Bérubé",
    brokerage: "RE/MAX Capitale",
    specialty: "Luxury Estates · Montcalm · Sainte-Foy",
    bio: "One of Quebec City's top-producing agents specializing in luxury homes across Montcalm, Sainte-Foy, and the historic Upper Town.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Nathalie Cloutier",
    brokerage: "Engel & Völkers Québec",
    specialty: "Heritage Properties · Île d'Orléans · Beauport",
    bio: "Representing Engel & Völkers in Quebec City, combining European luxury marketing standards with intimate knowledge of the city's heritage properties.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Engel & Völkers Advisor",
  }
];

const QuebecCityAgents = () => (
  <CityAgentsPage
    city="Quebec City"
    region="Quebec, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Quebec City's luxury real estate market features stunning heritage properties in Old Quebec, grand estates in Sillery, and elegant homes along the St. Lawrence River. A UNESCO World Heritage Site with truly unique luxury living."
    whyContact="Whether you're buying or selling luxury property in Quebec City, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default QuebecCityAgents;
