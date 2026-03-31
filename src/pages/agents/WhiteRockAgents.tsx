import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Tina Chicken",
    brokerage: "Sotheby's International Realty Canada",
    specialty: "Oceanfront · Hillside Views · West Beach",
    bio: "White Rock's premier luxury agent with Sotheby's International Realty, specializing in oceanfront estates and hillside properties with panoramic Semiahmoo Bay views.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  },
  {
    name: "Rob Chicken",
    brokerage: "RE/MAX Colonial Pacific Realty",
    specialty: "Beachfront · East Beach · Estate Properties",
    bio: "A top-producing luxury agent in White Rock known for representing the community's most significant oceanfront and estate property sales.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Karen Chicken",
    brokerage: "Royal LePage Wolstencroft Realty",
    specialty: "Premium Residential · Crescent Beach · Investment",
    bio: "A trusted luxury specialist in White Rock and South Surrey with expertise in Crescent Beach and premium residential properties.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  }
];

const WhiteRockAgents = () => (
  <CityAgentsPage
    city="White Rock"
    region="British Columbia, Canada"
    heroImage="https://images.unsplash.com/photo-1609825488888-3a766db05542?w=1920&h=1080&fit=crop"
    intro="White Rock's luxury market centres on oceanfront estates along the Semiahmoo Bay promenade, premium hillside properties with panoramic ocean views, and executive homes in the East Beach and West Beach corridors. With median luxury prices exceeding $2.5 million and one of Canada's mildest climates, White Rock draws retirees, cross-border executives, and lifestyle buyers seeking a walkable seaside village atmosphere in Metro Vancouver's southernmost community."
    whyContact="White Rock's stringent hillside building bylaws, oceanfront setback regulations, and the city's unique 'village character' design guidelines demand agents who navigate one of Metro Vancouver's most architecturally regulated luxury markets. The specialists listed here close premium deals in East Beach, West Beach, and the hillside corridors — each eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default WhiteRockAgents;
