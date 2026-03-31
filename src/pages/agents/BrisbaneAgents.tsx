import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Tyson Clarke",
    brokerage: "Queensland Sotheby's International Realty",
    specialty: "New Farm · Teneriffe · Hamilton",
    bio: "Named among Sotheby's International Realty Top 100 agents worldwide, Tyson Clarke is Brisbane's leading luxury agent, setting records across the city's premium riverside suburbs with deep expertise and global buyer connections.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's Top 100 Worldwide",
  },
  {
    name: "Sarah Hackett",
    brokerage: "Place New Farm",
    specialty: "Riverfront · Kangaroo Point · Bulimba",
    bio: "Named Australia's Most Influential Woman in Real Estate, #1 Female Agent in Queensland, and record holder for the highest price per square meter sold in Brisbane, Sarah has spent 27+ years dominating Brisbane's luxury riverfront market.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "#1 Female Agent QLD · Record Holder",
  },
  {
    name: "Brisbane Top Producers",
    brokerage: "Various Premier Brokerages",
    specialty: "Ascot · Clayfield · Paddington",
    bio: "Brisbane's luxury market continues to grow as one of Australia's most exciting, with premium riverfront and heritage properties attracting both domestic and international buyers to Queensland's capital city.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "REB Top 100 Agents",
  },
];

const BrisbaneAgents = () => (
  <CityAgentsPage
    city="Brisbane"
    region="AU, INT"
    heroImage="https://images.unsplash.com/photo-1524293581917-878a6d017c71?w=1920&h=1080&fit=crop"
    intro="Brisbane's luxury market is surging — post-Olympics infrastructure investment and interstate migration from Sydney and Melbourne have driven prestige prices in New Farm, Teneriffe, and Hamilton to record levels. Riverfront estates along the Brisbane River now command $8M–$25M+, while the new Queens Wharf precinct redefines inner-city luxury. The agents featured here specialise in Brisbane's unique combination of subtropical lifestyle, capital growth trajectory, and relative value compared to Australia's southern capitals."
    whyContact="Brisbane's prestige property landscape demands agents fluent in Queensland's foreign acquisition duties, Body Corporate legislation, and the heritage overlay requirements governing Queenslander-style estates. These specialists leverage deep networks across Asia-Pacific buyer pools, deliver strategic pre-market campaigns, and understand the micro-level pricing dynamics from Ascot to Bulimba. Each agent is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default BrisbaneAgents;
