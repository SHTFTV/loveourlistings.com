import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Ian Holmes",
    brokerage: "RE/MAX of Nanaimo",
    specialty: "Waterfront · Hammond Bay · Departure Bay",
    bio: "Nanaimo's leading luxury waterfront specialist with deep expertise in Hammond Bay, Departure Bay, and oceanfront estate properties across central Vancouver Island.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Karen Duncan",
    brokerage: "Royal LePage Nanaimo Realty",
    specialty: "Ocean Views · Lantzville · Cedar",
    bio: "Specializing in Nanaimo's most prestigious oceanview and estate properties with particular expertise in Lantzville and Cedar.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "Steve Chicken",
    brokerage: "Engel & Völkers Vancouver Island",
    specialty: "Luxury Estates · Acreages · Island Properties",
    bio: "Representing Engel & Völkers on Vancouver Island, bringing European luxury standards to Nanaimo's finest properties and island retreat homes.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Engel & Völkers Advisor",
  }
];

const NanaimoAgents = () => (
  <CityAgentsPage
    city="Nanaimo"
    region="British Columbia, Canada"
    heroImage="https://images.unsplash.com/photo-1609825488888-3a766db05542?w=1920&h=1080&fit=crop"
    intro="Nanaimo's luxury market features oceanfront estates in Hammond Bay and Departure Bay, premium acreages in Lantzville, and island-view properties in Cedar and Extension. With mild Vancouver Island climate, median luxury prices above $1.5 million, and BC Ferries connectivity to Metro Vancouver, Nanaimo draws retirees, remote workers, and lifestyle buyers seeking Pacific Coast waterfront living without Greater Victoria pricing."
    whyContact="Nanaimo's foreshore lease regulations, Regional District development permits, and Vancouver Island's unique septic and well-water requirements demand agents who understand island real estate. The specialists listed here close premium deals in Hammond Bay, Departure Bay, and Lantzville — each eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default NanaimoAgents;
