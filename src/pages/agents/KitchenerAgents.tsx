import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Anurag Gupta",
    brokerage: "RE/MAX Twin City Realty Inc.",
    specialty: "Luxury Residential · Doon · Hidden Valley",
    bio: "One of Kitchener-Waterloo's top-producing luxury agents, specializing in premium properties in Doon, Hidden Valley, and Laurentian Hills with a data-driven approach.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Platinum Award",
  },
  {
    name: "Kelly Lamb",
    brokerage: "Royal LePage Grand Valley Realty",
    specialty: "Estate Properties · Westmount · Country Estates",
    bio: "Refined expertise in Kitchener's luxury market with particular knowledge of Westmount estates and premium country properties. Strong marketing strategies and loyal luxury clientele.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Director's Platinum",
  },
  {
    name: "Ravi Sekhon",
    brokerage: "Coldwell Banker Peter Benninger Realty",
    specialty: "New Construction · Tech Corridor · Investment",
    bio: "Specializing in Kitchener-Waterloo's luxury new construction and tech-corridor properties. Deep understanding of both the market and the tech community.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Coldwell Banker Top Producer",
  }
];

const KitchenerAgents = () => (
  <CityAgentsPage
    city="Kitchener"
    region="Ontario, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Kitchener's luxury real estate market features executive estates in Doon, premium properties in Westmount, and modern luxury driven by the region's thriving tech sector in Canada's Technology Triangle."
    whyContact="Whether you're buying or selling luxury property in Kitchener, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default KitchenerAgents;
