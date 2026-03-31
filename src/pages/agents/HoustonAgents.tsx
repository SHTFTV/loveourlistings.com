import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Roxana Alarcon",
    brokerage: "The Luxe Realty Group, COMPASS",
    specialty: "River Oaks · Memorial · Tanglewood",
    bio: "With 24 years in the real estate industry and a notable 15-year career with Kickerillo Companies, Roxana has positioned herself as a distinguished figure in Houston's luxury market, offering invaluable insight into luxury home design and expat client needs.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Who's Who 2024 · 24 Years",
  },
  {
    name: "Laura U Design Team",
    brokerage: "Laura U Design Collective",
    specialty: "Estates · Design-Forward · Custom Homes",
    bio: "Partnering with Houston's top luxury brokerages, Laura U Design Collective understands that luxury homes are curated, considered, and crafted around a client's lifestyle, connecting buyers with trusted networks of premier real estate professionals.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Design & Real Estate Expert",
  },
  {
    name: "Houston Top 1% Agents",
    brokerage: "Various Premier Brokerages",
    specialty: "West University · Heights · Museum District",
    bio: "Houston's top 1% luxury agents average $25-60 million in annual sales volume, maintain 97% client satisfaction ratings, and specialize in Houston's premier neighborhoods including River Oaks, Memorial, and Tanglewood.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Top 1% Verified",
  },
];

const HoustonAgents = () => (
  <CityAgentsPage
    city="Houston"
    region="TX, US"
    heroImage="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&h=1080&fit=crop"
    intro="Houston offers a distinguished luxury real estate market with exceptional properties ranging from River Oaks estates to modern Memorial mansions. These are the city's most trusted luxury listing agents — professionals who consistently deliver results for discerning buyers and sellers."
    whyContact="Whether you're buying or selling luxury property in Houston, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default HoustonAgents;
