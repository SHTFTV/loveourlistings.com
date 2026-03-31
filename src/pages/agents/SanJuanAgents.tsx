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
    intro="San Juan offers a distinguished luxury real estate market with exceptional properties ranging from historic colonial estates in Old San Juan to modern beachfront condos in Condado. These are the city's most trusted luxury listing agents — professionals who consistently deliver results for discerning buyers and sellers."
    whyContact="Whether you're buying or selling luxury property in Puerto Rico, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default SanJuanAgents;
