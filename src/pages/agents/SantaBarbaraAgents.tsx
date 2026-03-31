import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Cristal Clarke",
    brokerage: "Berkshire Hathaway HomeServices",
    specialty: "Montecito · Hope Ranch · Oceanfront",
    bio: "One of Santa Barbara's most accomplished luxury agents, Cristal Clarke specializes in Montecito and Hope Ranch estates with over $1 billion in career sales.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Top 1% Berkshire Hathaway",
  },
  {
    name: "Randy Solakian",
    brokerage: "Berkshire Hathaway HomeServices",
    specialty: "Riviera · Mesa · Estate Properties",
    bio: "A leading Santa Barbara luxury agent, Randy Solakian brings decades of experience to the Riviera, Mesa, and the city's most prestigious hillside properties.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Chairman's Circle Platinum",
  },
  {
    name: "Nancy Kogevinas",
    brokerage: "Berkshire Hathaway HomeServices",
    specialty: "Montecito · Luxury Estates · International",
    bio: "Nancy Kogevinas is a globally recognized luxury agent in Montecito, serving high-net-worth clients with discretion and market mastery.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Legend Award Winner",
  }
];

const SantaBarbaraAgents = () => (
  <CityAgentsPage
    city="Santa Barbara"
    region="California, United States"
    heroImage="https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=1920&h=1080&fit=crop"
    intro="Santa Barbara's luxury market features stunning Mediterranean estates in Montecito, oceanfront properties along the American Riviera, and vineyard estates in the Santa Ynez Valley."
    whyContact="Whether you're buying or selling luxury property in Santa Barbara, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default SantaBarbaraAgents;
