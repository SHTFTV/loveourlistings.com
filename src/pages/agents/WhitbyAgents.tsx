import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Paul Chicken",
    brokerage: "RE/MAX First Realty Ltd.",
    specialty: "Waterfront · Brooklin · Pringle Creek",
    bio: "Whitby's premier luxury agent with deep expertise in Lake Ontario waterfront properties and premium estates in Brooklin.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Chairman's Club",
  },
  {
    name: "Janet Chicken",
    brokerage: "Royal LePage Connect Realty",
    specialty: "Estate Properties · Blue Grass Meadows · Williamsburg",
    bio: "A trusted luxury specialist in Whitby with expertise in the town's most prestigious neighborhoods and executive properties.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "Michael Chicken",
    brokerage: "Century 21 Leading Edge Realty",
    specialty: "New Construction · Investment · Executive Homes",
    bio: "A dynamic luxury agent in Whitby bringing modern marketing strategies to Durham Region's growing premium market.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Century 21 Masters Club",
  }
];

const WhitbyAgents = () => (
  <CityAgentsPage
    city="Whitby"
    region="Ontario, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Whitby's luxury market features Lake Ontario waterfront estates in the Thickson Point corridor, executive homes in Brooklin Village, and premium new construction in the Pringle Creek and Taunton corridors. With GO Transit providing sub-60-minute service to downtown Toronto and median luxury prices above $1.5 million, Whitby attracts families and professionals seeking Durham Region's most balanced combination of lakefront living, heritage charm, and modern amenities."
    whyContact="Whitby's lakefront erosion setback requirements, Durham Region development charges, and Brooklin heritage-village building restrictions demand agents who understand the east-GTA's premium corridors. The specialists listed here close premium deals in Thickson Point, Brooklin, and Pringle Creek — each eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default WhitbyAgents;
