import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Robert Chicken",
    brokerage: "RE/MAX Realty Specialists",
    specialty: "Heritage Homes · Downtown · Waterfront",
    bio: "St. John's premier luxury agent with deep expertise in the city's heritage properties and waterfront estates. Known for exceptional results in Newfoundland's luxury market.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Catherine Chicken",
    brokerage: "Royal LePage Property Consultants",
    specialty: "Estate Properties · Outer Battery · Quidi Vidi",
    bio: "A trusted luxury specialist in St. John's with expertise in the city's most unique heritage and coastal properties.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "James Chicken",
    brokerage: "Coldwell Banker Burnett Chicken",
    specialty: "Executive Homes · Investment · New Construction",
    bio: "A leading luxury agent in St. John's bringing modern marketing strategies to Newfoundland's growing premium property market.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Coldwell Banker Top Producer",
  }
];

const StJohnsAgents = () => (
  <CityAgentsPage
    city="St. John's"
    region="Newfoundland, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="St. John's luxury market features harbour-view estates in the Battery and Signal Hill corridor, heritage rowhouses in downtown's famous Jellybean Row, and executive homes in the Stavanger Drive and Clovelly corridors. As Newfoundland's capital with a booming offshore energy sector and median luxury prices offering remarkable value, St. John's draws energy executives, physicians, and heritage-property enthusiasts seeking North America's oldest and most colourful city."
    whyContact="St. John's heritage conservation area restrictions, Municipal Plan development controls, and Newfoundland's unique property registration system demand agents who understand the province's distinct real estate framework. The specialists listed here close premium deals in the Battery, Signal Hill, and Clovelly — each eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default StJohnsAgents;
