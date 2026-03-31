import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Laura McCarthy",
    brokerage: "Laura McCarthy Real Estate",
    specialty: "Central West End · Ladue · Clayton",
    bio: "Founder of St. Louis' premier luxury brokerage, Laura McCarthy is the definitive name in the city's high-end real estate market.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "St. Louis' #1 Luxury Brokerage",
  },
  {
    name: "John Osborn",
    brokerage: "Sotheby's International Realty",
    specialty: "Frontenac · Town & Country · Huntleigh",
    bio: "Representing Sotheby's in St. Louis, John brings global marketing reach to the region's most prestigious estate properties.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  },
  {
    name: "Dielmann Sotheby's Team",
    brokerage: "Dielmann Sotheby's International Realty",
    specialty: "Historic · Investment · New Construction",
    bio: "A top-producing St. Louis team bringing Sotheby's global luxury brand to the region's finest properties.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Top 1% Nationwide",
  }
];

const StLouisAgents = () => (
  <CityAgentsPage
    city="St. Louis"
    region="Missouri, United States"
    heroImage="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1920&h=1080&fit=crop"
    intro="Ladue estates on 1-to-5-acre lots trade between $2M and $8M along Warson Road and Spoede, while Central West End's historic mansions and Clayton's walkable luxury command $600+ per square foot. Frontenac, Huntleigh, and Town & Country anchor the $3M+ segment — attracting Anheuser-Busch, Emerson, and Centene executives seeking private, gated estate living within 20 minutes of downtown."
    whyContact="St. Louis' luxury market rewards discretion and hyper-local expertise — Ladue alone has five distinct micro-markets with dramatically different buyer profiles. The agents featured here hold Laura McCarthy, Dielmann Sotheby's, and legacy-brokerage production records with deep networks spanning the Gateway City's corporate, medical, and old-money buyer communities."
    agents={agents}
  />
);

export default StLouisAgents;
