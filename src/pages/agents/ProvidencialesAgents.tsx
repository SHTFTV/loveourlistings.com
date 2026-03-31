import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Nina Siegenthaler",
    brokerage: "Turks & Caicos Sotheby's International Realty",
    specialty: "Grace Bay · Beachfront · Luxury Villas",
    bio: "Named to Sotheby's International Realty Top 100 Agents in 2021, 2022, and 2023, and Turks & Caicos Real Estate Association Top Agent from 2014 to 2024, Nina is the undisputed leader in Providenciales luxury real estate.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's Top 100 · TCREA Top Agent",
  },
  {
    name: "Richard Sankar",
    brokerage: "Turks & Caicos Sotheby's International Realty",
    specialty: "Estates · Investment · Development",
    bio: "With a career spanning more than three decades across Canada and the Caribbean, Richard brings unparalleled expertise to Turks & Caicos luxury real estate, specializing in premier Grace Bay properties and exclusive island developments.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "30+ Years Experience",
  },
  {
    name: "Snjezana Andrews",
    brokerage: "White Rock Realty",
    specialty: "Grace Bay · Resort Properties · Luxury Management",
    bio: "Former General Manager of The Somerset luxury resort on Grace Bay and a serial entrepreneur, Snjezana brings unmatched hospitality expertise and insider knowledge to Providenciales' most coveted luxury properties.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Luxury Resort Expert",
  },
];

const ProvidencialesAgents = () => (
  <CityAgentsPage
    city="Providenciales"
    region="TC, INT"
    heroImage="https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&h=1080&fit=crop"
    intro="Providenciales and the Turks & Caicos Islands offer one of the Caribbean's most exclusive luxury real estate markets, anchored by the world-renowned Grace Bay Beach. These are the islands' most trusted luxury listing agents — professionals who consistently deliver results for discerning buyers and sellers."
    whyContact="Whether you're buying or selling luxury property in Turks & Caicos, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default ProvidencialesAgents;
