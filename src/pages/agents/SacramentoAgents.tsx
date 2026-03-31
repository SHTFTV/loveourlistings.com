import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Leigh Rutledge",
    brokerage: "Lyon Real Estate",
    specialty: "East Sacramento · Fab Forties · Land Park",
    bio: "Sacramento's premier luxury agent, Leigh Rutledge dominates the Fab Forties and East Sacramento markets with exceptional results.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Lyon Top Producer",
  },
  {
    name: "Nick Sadek",
    brokerage: "Nick Sadek Sotheby's International Realty",
    specialty: "Granite Bay · El Dorado Hills · Folsom",
    bio: "A powerhouse in the Sacramento luxury market, Nick Sadek brings Sotheby's global brand to the region's finest estates.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  },
  {
    name: "Todd Lam",
    brokerage: "Compass",
    specialty: "Midtown · Curtis Park · Investment",
    bio: "A top Compass agent in Sacramento, Todd specializes in Midtown luxury and Curtis Park premium properties.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Compass Top Producer",
  }
];

const SacramentoAgents = () => (
  <CityAgentsPage
    city="Sacramento"
    region="California, United States"
    heroImage="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1920&h=1080&fit=crop"
    intro="Sacramento's luxury market features elegant estates in the Fab Forties, riverfront properties along the American River, and premium homes in East Sacramento and Land Park."
    whyContact="Whether you're buying or selling luxury property in Sacramento, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default SacramentoAgents;
