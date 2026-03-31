import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Tim Smith",
    brokerage: "Coldwell Banker Realty",
    specialty: "Harbor Views · Crystal Cove · Pelican Hill",
    bio: "Consistently ranked among the top luxury agents in Orange County, Tim Smith has closed billions in luxury sales across Newport Beach's most prestigious addresses including Crystal Cove and Pelican Hill.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "#1 Coldwell Banker Agent Worldwide",
  },
  {
    name: "Lauren Nahas",
    brokerage: "Compass",
    specialty: "Oceanfront · Balboa Peninsula · Corona del Mar",
    bio: "A top-producing Newport Beach agent with Compass, Lauren Nahas brings refined expertise to the city's oceanfront and Corona del Mar luxury markets.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Compass Top Producer",
  },
  {
    name: "Dennis Chernov",
    brokerage: "Keller Williams Realty",
    specialty: "Luxury Estates · Newport Coast · Investment",
    bio: "Dennis Chernov brings data-driven strategies and innovative marketing to Newport Beach's competitive luxury market, specializing in Newport Coast estates.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Keller Williams Luxury Specialist",
  }
];

const NewportBeachAgents = () => (
  <CityAgentsPage
    city="Newport Beach"
    region="California, United States"
    heroImage="https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=1920&h=1080&fit=crop"
    intro="Crystal Cove and Pelican Hill estates list between $5M and $35M with unobstructed Pacific views, while harbor-front properties on Linda Isle and Bay Island command $4,000+ per square foot — making Newport Beach Orange County's most expensive coastal market. Corona del Mar's village charm and Balboa Peninsula's oceanfront compounds anchor the $3M+ segment, attracting entertainment, tech, and private-equity wealth."
    whyContact="Newport Beach's $5M+ segment saw just 52 days average on market in 2025, reflecting fierce demand from cash buyers relocating from Los Angeles. The agents featured here — including Coldwell Banker's #1 worldwide agent — bring verified billion-dollar career volumes and deep yacht-club and country-club networks essential for reaching Newport's ultra-high-net-worth buyer pool."
    agents={agents}
  />
);

export default NewportBeachAgents;
