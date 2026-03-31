import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Katrina Barrett",
    brokerage: "Russ Lyon Sotheby's International Realty",
    specialty: "Paradise Valley · Arcadia · Biltmore",
    bio: "Ranked the #1 real estate agent in Arizona by RealTrends with over $2.5 billion in luxury home sales, Katrina Barrett represents some of the finest estates in Arizona, specializing in Paradise Valley, Scottsdale, and Phoenix's most coveted addresses.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "#1 Agent in Arizona · $2.5B+ Sales",
  },
  {
    name: "Phoenix Magazine Top 50",
    brokerage: "Various Premier Brokerages",
    specialty: "Camelback · DC Ranch · Silverleaf",
    bio: "Phoenix Magazine curates its Top 50 real estate agents annually by surveying subscribers on closing skills, market knowledge, communication, and overall satisfaction — representing the best of the Valley's luxury market professionals.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Phoenix Magazine Top 50",
  },
  {
    name: "Phoenix Top Producers",
    brokerage: "Various Premier Brokerages",
    specialty: "Scottsdale Ranch · McCormick Ranch · Pinnacle Peak",
    bio: "Phoenix's luxury market features a median home price of $565,000 with exceptional estate properties in Paradise Valley and North Scottsdale. The city's top producers navigate the Valley's sun-drenched luxury landscape with deep local expertise.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "RealTrends Verified",
  },
];

const PhoenixAgents = () => (
  <CityAgentsPage
    city="Phoenix"
    region="AZ, US"
    heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&h=1080&fit=crop"
    intro="Paradise Valley estates on Mummy Mountain trade between $5M and $30M, while Biltmore's guard-gated communities command $1,400+ per square foot for contemporary desert architecture. Arizona's #1 agent has closed $2.5 billion in career sales — a testament to the Valley's position as the Southwest's premier luxury destination for snowbird buyers and full-time relocations."
    whyContact="Phoenix Magazine's Top 50 agents are selected annually based on closing performance, client satisfaction, and market share. The professionals featured here hold Russ Lyon Sotheby's affiliations and verified RealTrends production — ensuring Paradise Valley, Silverleaf, and DC Ranch listings reach qualified buyers through both Arizona's seasonal buyer networks and global luxury syndication."
    agents={agents}
  />
);

export default PhoenixAgents;
