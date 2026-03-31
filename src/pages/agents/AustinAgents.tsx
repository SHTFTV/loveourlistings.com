import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Gary & Michelle Dolch",
    brokerage: "Austin Luxury Group, COMPASS",
    specialty: "Westlake · Barton Creek · Lake Austin",
    bio: "Ranked #3 in Austin for 2024 residential sales volume, Gary and Michelle lead the Austin Luxury Group at Compass, specializing in the city's most prestigious neighborhoods and estate properties with a client-first approach.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "#3 Austin by Volume 2024",
  },
  {
    name: "Austin Top Producers",
    brokerage: "Various Premier Brokerages",
    specialty: "Tarrytown · Rollingwood · Rob Roy",
    bio: "Austin's luxury market features a median home price of $700,000 with exceptional properties in the Hill Country. The city's top producers bring deep knowledge of Austin's unique blend of tech-driven wealth and Texas estate living.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "RealTrends Verified",
  },
  {
    name: "Austin Sotheby's Team",
    brokerage: "Kuper Sotheby's International Realty",
    specialty: "Downtown · Lake Travis · Luxury Condos",
    bio: "Kuper Sotheby's International Realty represents Austin's finest luxury properties, combining local Hill Country expertise with Sotheby's global reach to serve high-net-worth buyers relocating to Texas's capital city.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's Global Network",
  },
];

const AustinAgents = () => (
  <CityAgentsPage
    city="Austin"
    region="TX, US"
    heroImage="https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=1920&h=1080&fit=crop"
    intro="Lake Austin waterfront estates list between $4M and $25M, while Westlake Hills compounds with Hill Country views command $1,200+ per square foot. Austin's luxury market — fueled by tech-sector relocations from Silicon Valley — has redefined Texas prestige real estate, with Barton Creek, Rob Roy, and Tarrytown anchoring the $3M+ segment."
    whyContact="Austin's $5M+ market saw 23% volume growth in 2024, driven by executives relocating from California and New York. The agents featured here hold Compass, Kuper Sotheby's, and Christie's affiliations with verified production records — ensuring your property reaches qualified buyers through both Austin's local tech networks and global luxury syndication channels."
    agents={agents}
  />
);

export default AustinAgents;
