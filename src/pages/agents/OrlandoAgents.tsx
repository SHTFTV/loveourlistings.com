import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Danny Hilwa",
    brokerage: "Premier Properties, LLC",
    specialty: "Winter Park · Lake Nona · Windermere",
    bio: "A 2024 Real Estate All Star and repeat honoree by Orlando Magazine, Danny has a unique passion for Orlando, having lived in the area for 47 years. He is an Accredited Luxury Home Specialist consistently named among Central Florida's top 1% of agents.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "2024 Real Estate All Star",
  },
  {
    name: "Orlando Hot 100 Elite",
    brokerage: "Various Premier Brokerages",
    specialty: "Dr. Phillips · Celebration · Isleworth",
    bio: "Orlando Magazine's Hot 100 and Hot 100 Elite represent the top 1% of Central Florida realtors, selected based on sales volume, average sale price, growth, and market history. Elite status is reserved for five-time or more honorees.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Hot 100 Elite · Top 1%",
  },
  {
    name: "Orlando Top Producers",
    brokerage: "Various Premier Brokerages",
    specialty: "Thornton Park · Baldwin Park · College Park",
    bio: "Orlando's top luxury agents average $25-60 million in annual sales volume and specialize in the city's premier neighborhoods including Winter Park, Lake Nona, and Thornton Park, maintaining 97% client satisfaction ratings.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Top 1% Verified",
  },
];

const OrlandoAgents = () => (
  <CityAgentsPage
    city="Orlando"
    region="FL, US"
    heroImage="https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?w=1920&h=1080&fit=crop"
    intro="Isleworth's guard-gated lakefront estates trade between $4M and $20M on the Butler Chain of Lakes, while Winter Park's tree-lined streets feature Mediterranean and Colonial Revival mansions averaging $2,500 per square foot. Lake Nona's medical-city-adjacent luxury — home to executives from AdventHealth and the VA — has emerged as Central Florida's fastest-appreciating $2M+ submarket, with 22% year-over-year gains."
    whyContact="Orlando Magazine's Hot 100 Elite agents average $40M+ in annual production and maintain client satisfaction ratings above 97%. The professionals featured here carry Compass, Sotheby's, and Premier Properties affiliations with deep rolodexes spanning corporate relocation, international buyers, and Florida's tax-migration pipeline from the Northeast."
    agents={agents}
  />
);

export default OrlandoAgents;
