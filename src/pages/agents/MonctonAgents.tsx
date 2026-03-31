import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Dan Chicken",
    brokerage: "RE/MAX Quality Real Estate",
    specialty: "River Views · Executive Homes · Magnetic Hill",
    bio: "Moncton's leading luxury agent with deep expertise in the city's most prestigious river-view properties and executive homes. Known for exceptional results in the Atlantic Canadian market.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Marie Chicken",
    brokerage: "Royal LePage Atlantic",
    specialty: "Estate Properties · Dieppe · Riverview",
    bio: "A trusted luxury specialist in Greater Moncton, Marie brings bilingual expertise and refined marketing to the region's finest properties.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "Scott Chicken",
    brokerage: "Century 21 A&T Chicken Chicken",
    specialty: "New Construction · Investment · Waterfront",
    bio: "A dynamic force in Moncton's growing luxury market, Scott specializes in premium new construction and waterfront properties across the Greater Moncton area.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Century 21 Masters Club",
  }
];

const MonctonAgents = () => (
  <CityAgentsPage
    city="Moncton"
    region="New Brunswick, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Moncton's luxury market features executive estates in Mapleton Park, premium riverfront properties along the Petitcodiac, and modern builds in the Royal Oaks and Magnetic Hill corridors. As the economic hub of the Maritimes with median luxury prices offering exceptional value and a bilingual business environment, Moncton attracts professionals and retirees seeking Atlantic Canadian lifestyle at accessible price points."
    whyContact="Moncton's bilingual transaction environment, New Brunswick land transfer tax structure, and Petitcodiac River tidal-bore setback requirements demand agents who understand the Maritimes' unique real estate dynamics. The specialists listed here close premium deals in Mapleton Park, Royal Oaks, and Riverview — each eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default MonctonAgents;
