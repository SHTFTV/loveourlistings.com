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
    intro="Old Palo Alto estates on quarter-acre-plus lots trade between $5M and $40M, with Crescent Park and Professorville properties averaging $3,500+ per square foot — the highest in Silicon Valley. Stanford faculty, venture capitalists, and tech founders compete for a severely limited inventory in the nation's most educated zip code, where median household income exceeds $200,000 and teardowns sell for $4M."
    whyContact="Palo Alto's luxury inventory averages fewer than 45 active listings at any given time, making off-market access and pre-listing networks essential. The agents featured here — including DeLeon Realty's peninsula-leading team and Compass' #1 agent — bring verified $100M+ production records and deep Stanford/VC community connections."
    agents={agents}
  />
);

export default PaloAltoAgents;
