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
    intro="Brampton's luxury segment features executive estates in Credit Valley, premium homes in Castlemore, and gated communities along the Huttonville corridor. With a population approaching 700,000 and median luxury prices above $1.6 million, Brampton's premium market draws buyers from across the GTA seeking larger lots, modern builds, and proximity to Pearson International Airport and Highway 407."
    whyContact="Brampton's rapid growth means navigating development levies, Peel Region zoning changes, and builder allocation processes requires seasoned local expertise. The agents listed here specialize in Credit Valley, Castlemore, and Vales of Castlemore — each eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default BramptonAgents;
