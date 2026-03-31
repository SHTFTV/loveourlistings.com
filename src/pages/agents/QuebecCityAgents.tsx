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
    intro="Quebec City's luxury market features heritage estates within the UNESCO-designated Old Quebec walls, premium waterfront properties along the St. Lawrence in Sillery and Sainte-Foy, and executive homes on Île d'Orléans. As Canada's most European city with median luxury prices above $1.5 million, Quebec City draws francophone professionals, diplomats, and international buyers captivated by 400 years of architectural heritage and world-class cultural institutions."
    whyContact="Quebec City's UNESCO heritage-zone construction approvals, provincial land transfer tax calculations, and Île d'Orléans agricultural-zone restrictions demand agents fluent in Quebec's distinct legal framework and bilingual transaction processes. The specialists listed here close premium deals in Old Quebec, Sillery, and Sainte-Foy — each eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default QuebecCityAgents;
