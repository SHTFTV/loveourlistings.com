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
    intro="The Fab Forties — Sacramento's most storied enclave — features Tudor and Mediterranean estates on half-acre lots trading between $2M and $6M, while Granite Bay's gated communities and El Dorado Hills' custom builds command $1,400+ per square foot. California's capital city has become a magnet for Bay Area remote workers, pushing the $2M+ segment up 25% since 2023."
    whyContact="Sacramento's luxury market benefits from a rare combination: capital-city stability, Bay Area spillover demand, and significantly lower price-per-square-foot than coastal California. The agents featured here hold Lyon, Sotheby's, and Compass production records with deep networks spanning government, healthcare, and tech-relocation buyers."
    agents={agents}
  />
);

export default SacramentoAgents;
