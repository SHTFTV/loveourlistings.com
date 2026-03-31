import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Margaret Pena Juvelier",
    brokerage: "Puerto Rico Sotheby's International Realty",
    specialty: "Condado · Old San Juan · Dorado Beach",
    bio: "Internationally-minded yet laser-focused on her Caribbean community, Margaret is the dynamic founder and president of Puerto Rico Sotheby's International Realty, bringing unparalleled expertise to the island's most prestigious luxury addresses.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Founder & President",
  },
  {
    name: "Brian Aronson",
    brokerage: "Christie's International Real Estate",
    specialty: "Estates · Investment · Act 60 Relocation",
    bio: "Representing Christie's prestigious global network in San Juan, Brian specializes in luxury estates and investment properties, guiding high-net-worth clients through Puerto Rico's thriving luxury market and favorable tax incentive programs.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Christie's Luxury Specialist",
  },
  {
    name: "Oriana Juvelier",
    brokerage: "Puerto Rico Sotheby's International Realty",
    specialty: "Waterfront · New Development · Luxury Condos",
    bio: "Continuing a family legacy in Puerto Rico luxury real estate, Oriana brings fresh energy and deep market knowledge to Sotheby's San Juan office, specializing in waterfront properties and premier new developments across the island.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Next-Gen Leader",
  },
];

const SanJuanAgents = () => (
  <CityAgentsPage
    city="San Juan"
    region="PR, INT"
    heroImage="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1920&h=1080&fit=crop"
    intro="San Juan's luxury market sits at the intersection of Caribbean lifestyle and US tax strategy — Act 60 (formerly Acts 20/22) offers qualifying relocators 0% capital gains tax and 4% corporate tax, driving an unprecedented wave of UHNW migration from the mainland. Condado's beachfront towers, Dorado Beach's Ritz-Carlton Reserve estates ($5M–$30M+), and Old San Juan's restored colonial palacetes define the market's three pillars. As a US territory, Puerto Rico offers no passport requirements, US banking, and federal legal protections — an unmatched combination for American buyers seeking tax-advantaged luxury."
    whyContact="Puerto Rico's unique tax incentive landscape, CRIM property tax assessments, and the distinction between Act 60 decree-holder benefits and standard ownership require agents with specialised knowledge. These professionals navigate Condado's HOA complexities, Dorado Beach's resort-community structures, and the heritage preservation requirements governing Old San Juan transactions. Each agent is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default SanJuanAgents;
