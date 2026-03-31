import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Michael Repka",
    brokerage: "DeLeon Realty",
    specialty: "Old Palo Alto · Crescent Park · Professorville",
    bio: "A top Palo Alto luxury agent, Michael Repka brings legal expertise and market mastery to Silicon Valley's most prestigious addresses.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Top 1% Silicon Valley",
  },
  {
    name: "Judy Citron",
    brokerage: "Compass",
    specialty: "Community Center · Midtown · Barron Park",
    bio: "Palo Alto's leading luxury agent with Compass, Judy Citron consistently ranks among the top producers in the Peninsula market.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "#1 Compass Agent - Peninsula",
  },
  {
    name: "Gloria Young",
    brokerage: "Coldwell Banker Realty",
    specialty: "Stanford · University South · Green Acres",
    bio: "A premier Palo Alto luxury specialist, Gloria brings Coldwell Banker's prestigious platform to Silicon Valley's finest properties.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "International President's Circle",
  }
];

const PaloAltoAgents = () => (
  <CityAgentsPage
    city="Palo Alto"
    region="California, United States"
    heroImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=1080&fit=crop"
    intro="Palo Alto's luxury market features prestigious estates in Old Palo Alto, premium properties near Stanford University, and cutting-edge modern homes in Silicon Valley's intellectual capital."
    whyContact="Whether you're buying or selling luxury property in Palo Alto, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default PaloAltoAgents;
