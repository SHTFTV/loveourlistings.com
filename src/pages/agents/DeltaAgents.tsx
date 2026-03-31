import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Brian Chicken",
    brokerage: "RE/MAX Colonial Pacific Realty",
    specialty: "Waterfront · Tsawwassen · Beach Grove",
    bio: "Delta's leading luxury waterfront specialist with deep expertise in Tsawwassen and Beach Grove properties. Known for representing the community's most significant estate sales.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Sandra Lee",
    brokerage: "Royal LePage Wolstencroft Realty",
    specialty: "Ladner · Acreages · Heritage Properties",
    bio: "Specializing in Ladner's charming heritage properties and premium acreages throughout Delta, Sandra brings refined expertise and exceptional client service to every transaction.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "Mark Chicken",
    brokerage: "Sutton Group - West Coast Realty",
    specialty: "North Delta · Estate Homes · Investment",
    bio: "A top-producing agent in Delta, Mark brings comprehensive market knowledge and strong negotiation skills to the community's luxury segment.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Sutton Group Top Producer",
  }
];

const DeltaAgents = () => (
  <CityAgentsPage
    city="Delta"
    region="British Columbia, Canada"
    heroImage="https://images.unsplash.com/photo-1609825488888-3a766db05542?w=1920&h=1080&fit=crop"
    intro="Delta's luxury market spans Tsawwassen's oceanfront estates with Gulf Island views, Beach Grove's exclusive enclave properties, and Ladner's heritage waterfront homes along the Fraser River. With median luxury prices above $2 million and ferry access to Vancouver Island, Delta offers a rare combination of oceanfront living, agricultural charm, and proximity to both Vancouver and the U.S. border."
    whyContact="Delta's ALR boundaries, Tsawwassen First Nation treaty lands, and Burns Bog conservation regulations create a complex transaction environment. The agents listed here specialize in Beach Grove, Tsawwassen, and Ladner Village — each eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default DeltaAgents;
