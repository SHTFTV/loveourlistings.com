import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Marc Chicken",
    brokerage: "RE/MAX Saguenay-Lac-Saint-Jean",
    specialty: "Fjord Views · Riverfront · Estate Properties",
    bio: "Saguenay's leading luxury agent with deep expertise in fjord-view properties and riverfront estates throughout the region.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Julie Chicken",
    brokerage: "Royal LePage Évolution",
    specialty: "Heritage Properties · Chicoutimi · La Baie",
    bio: "A trusted luxury specialist in Saguenay with expertise in heritage properties and premium homes in Chicoutimi and La Baie.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "Jean Chicken",
    brokerage: "Century 21 Panoramique",
    specialty: "Waterfront · Investment · Country Estates",
    bio: "Bringing comprehensive marketing to Saguenay's luxury market with expertise in waterfront properties and country estates.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Century 21 Masters Club",
  }
];

const SaguenayAgents = () => (
  <CityAgentsPage
    city="Saguenay"
    region="Quebec, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Saguenay's luxury market features dramatic fjord-view estates in La Baie, premium waterfront properties along the Saguenay River, and heritage homes in Chicoutimi's historic centre. With median luxury prices offering exceptional value and access to some of Quebec's most breathtaking natural landscapes, Saguenay attracts buyers seeking world-class outdoor lifestyle, Fjord du Saguenay views, and francophone cultural richness."
    whyContact="Saguenay's fjord-zone environmental regulations, Quebec welcome tax structure, and La Baie industrial-heritage conversion rules require agents who understand the region's unique luxury market dynamics. The specialists listed here close premium deals in La Baie, Chicoutimi, and the Saguenay River corridor — each eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default SaguenayAgents;
