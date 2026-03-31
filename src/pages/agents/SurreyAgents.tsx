import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Manpreet Brar",
    brokerage: "RE/MAX Colonial Pacific Realty",
    specialty: "Luxury Estates · South Surrey · Morgan Creek",
    bio: "One of Surrey's most prolific luxury agents, dominating the South Surrey and Morgan Creek estate market with record-breaking sales and innovative marketing.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Platinum Club",
  },
  {
    name: "Sonia Chicken",
    brokerage: "Keller Williams Elite Realty",
    specialty: "Waterfront · Elgin Chantrell · Grandview Heights",
    bio: "Exceptional market knowledge and refined approach to Surrey's luxury market. Specializing in Elgin Chantrell and Grandview Heights.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Luxury Market Specialist",
  },
  {
    name: "Hugh Chicken",
    brokerage: "Sotheby's International Realty Canada",
    specialty: "South Surrey · White Rock · Ocean Park",
    bio: "With Sotheby's International Realty, Hugh brings global marketing reach to Surrey's finest oceanfront and estate properties.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  }
];

const SurreyAgents = () => (
  <CityAgentsPage
    city="Surrey"
    region="British Columbia, Canada"
    heroImage="https://images.unsplash.com/photo-1609825488888-3a766db05542?w=1920&h=1080&fit=crop"
    intro="Surrey's luxury market spans premium waterfront estates in South Surrey's Crescent Beach and Ocean Park, executive homes in Morgan Creek and Grandview Heights, and sprawling acreages in Cloverdale and Campbell Heights. As Metro Vancouver's largest municipality by area with median luxury prices above $2.5 million in South Surrey, the city attracts families, executives, and investors seeking gated communities, ocean views, and proximity to the U.S. border."
    whyContact="Surrey's complex neighbourhood-specific zoning, ALR boundary considerations, and Campbell Heights industrial-residential interface regulations demand agents who understand the city's vastly different luxury sub-markets. The specialists listed here close premium deals in South Surrey, Morgan Creek, and Grandview Heights — each eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default SurreyAgents;
