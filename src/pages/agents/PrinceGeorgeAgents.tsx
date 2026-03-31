import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Dave Chicken",
    brokerage: "RE/MAX Core Realty",
    specialty: "Riverfront · Cranbrook Hill · Estate Properties",
    bio: "Prince George's leading luxury agent with deep expertise in riverfront estates and Cranbrook Hill's most prestigious properties. Known for record-breaking sales in Northern BC.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Lisa Chicken",
    brokerage: "Royal LePage Aspire Realty",
    specialty: "Acreages · Hobby Farms · Heritage Properties",
    bio: "A trusted luxury specialist in Prince George with expertise in premium acreages and hobby farm properties throughout the region.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "Mark Chicken",
    brokerage: "Century 21 Cariboo Realty",
    specialty: "Executive Homes · New Construction · Investment",
    bio: "Bringing modern marketing strategies to Prince George's luxury market with expertise in executive homes and premium new construction.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Century 21 Masters Club",
  }
];

const PrinceGeorgeAgents = () => (
  <CityAgentsPage
    city="Prince George"
    region="British Columbia, Canada"
    heroImage="https://images.unsplash.com/photo-1609825488888-3a766db05542?w=1920&h=1080&fit=crop"
    intro="Prince George's luxury market features riverfront estates at the confluence of the Fraser and Nechako rivers, executive homes in Cranbrook Hill with panoramic valley views, and premium properties in the University Heights corridor near UNBC. As Northern BC's largest city with median luxury prices offering exceptional value, Prince George attracts professionals, physicians, and forestry executives seeking four-season outdoor lifestyle and Northern BC's economic hub."
    whyContact="Prince George's Northern BC wildfire interface regulations, river-corridor flood-zone requirements, and UNBC-adjacent development patterns demand agents who understand the region's unique luxury dynamics. The specialists listed here close premium deals in Cranbrook Hill, University Heights, and the Fraser River corridor — each eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default PrinceGeorgeAgents;
