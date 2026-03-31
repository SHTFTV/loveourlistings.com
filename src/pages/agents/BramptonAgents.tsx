import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Harpreet Singh Bedi",
    brokerage: "RE/MAX Realty Specialists Inc.",
    specialty: "Luxury Residential · Credit Valley · Castlemore",
    bio: "One of Brampton's most prolific luxury agents, dominating the Credit Valley and Castlemore estate markets with innovative marketing strategies and a deep understanding of premium neighborhoods.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Platinum Award",
  },
  {
    name: "Simran Kaur Gill",
    brokerage: "Royal LePage Flower City Realty",
    specialty: "Estate Properties · Snelgrove · Vales of Castlemore",
    bio: "Refined expertise and exceptional market knowledge in Brampton's luxury segment. Specializing in Snelgrove estates and the Vales of Castlemore with meticulous attention to detail.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Director's Platinum",
  },
  {
    name: "Tony DeCaria",
    brokerage: "Century 21 President Realty",
    specialty: "Custom Homes · New Development · Investment",
    bio: "A trusted name in Brampton luxury real estate, specializing in custom-built homes and premium new developments with strong community ties and exceptional client service.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Century 21 Masters Club",
  }
];

const BramptonAgents = () => (
  <CityAgentsPage
    city="Brampton"
    region="Ontario, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Brampton's luxury real estate market features impressive estate homes in Credit Valley, grand properties in Castlemore, and executive residences in Snelgrove. One of the GTA's fastest-growing cities with premium living options."
    whyContact="Whether you're buying or selling luxury property in Brampton, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default BramptonAgents;
