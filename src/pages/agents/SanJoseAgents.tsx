import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Ken DeLeon",
    brokerage: "DeLeon Realty",
    specialty: "Silicon Valley · Almaden · Willow Glen",
    bio: "Founder of DeLeon Realty and one of the most prolific luxury agents in Silicon Valley, Ken DeLeon has set numerous sales records across San Jose's premium neighborhoods.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "#1 Agent in Silicon Valley",
  },
  {
    name: "Mary Kay Groth",
    brokerage: "Compass",
    specialty: "Cambrian · Los Gatos · Saratoga",
    bio: "A top Compass agent in San Jose, Mary Kay brings deep expertise to the Cambrian, Los Gatos, and Saratoga luxury markets.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Compass Top Producer",
  },
  {
    name: "David Tapper",
    brokerage: "Keller Williams Realty",
    specialty: "New Construction · Investment · Tech Corridor",
    bio: "Specializing in San Jose's tech-driven luxury market, David Tapper delivers data-driven strategies for Silicon Valley's most discerning buyers and sellers.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Keller Williams Luxury",
  }
];

const SanJoseAgents = () => (
  <CityAgentsPage
    city="San Jose"
    region="California, United States"
    heroImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=1080&fit=crop"
    intro="San Jose's luxury market features stunning Silicon Valley estates in Almaden Valley, premium properties in Willow Glen, and tech-driven luxury living in the heart of the world's innovation capital."
    whyContact="Whether you're buying or selling luxury property in San Jose, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default SanJoseAgents;
