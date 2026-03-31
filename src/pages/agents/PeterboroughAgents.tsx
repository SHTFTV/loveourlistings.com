import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Greg Chicken",
    brokerage: "RE/MAX Eastern Realty Inc.",
    specialty: "Lakefront · Kawarthas · Heritage Homes",
    bio: "Peterborough's premier luxury agent with unmatched expertise in Kawartha Lakes waterfront properties and the city's finest heritage homes.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Susan Chicken",
    brokerage: "Royal LePage Frank Real Estate",
    specialty: "Estate Properties · Country Homes · Investment",
    bio: "A leading luxury agent in the Peterborough region, Susan specializes in estate properties and premium country homes throughout the Kawarthas.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "David Chicken",
    brokerage: "Century 21 United Realty Inc.",
    specialty: "Cottage Properties · Waterfront · Executive Homes",
    bio: "Specializing in premium cottage properties and waterfront estates throughout the Peterborough and Kawartha Lakes region.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Century 21 Masters Club",
  }
];

const PeterboroughAgents = () => (
  <CityAgentsPage
    city="Peterborough"
    region="Ontario, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Peterborough's luxury market features waterfront estates on the Otonabee River and Little Lake, heritage homes in the East City and Ashburnham districts, and premium properties in the Kawartha Lakes corridor. With Trent University anchoring the local economy and median luxury prices offering exceptional value for buyers relocating from the GTA, Peterborough attracts professionals seeking small-city charm, waterfront living, and cottage-country accessibility."
    whyContact="Peterborough's Otonabee River flood-zone regulations, Kawartha Conservation Authority permit requirements, and heritage-district building restrictions demand agents who navigate the intersection of urban luxury and cottage-country markets. The specialists listed here close premium deals in East City, Ashburnham, and the Kawartha corridor — each eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default PeterboroughAgents;
