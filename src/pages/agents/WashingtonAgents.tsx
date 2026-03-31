import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Devon Fox",
    brokerage: "TTR Sotheby's International Realty",
    specialty: "Georgetown · Kalorama · Embassy Row",
    bio: "A leading luxury real estate agent in Washington DC featured in Modern Luxury's top agents list, Devon tracks and ranks DC's luxury market with proprietary data and deep expertise in the capital's most prestigious neighborhoods.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "DC Magazine Top Agent",
  },
  {
    name: "Engel & Völkers DC Team",
    brokerage: "Engel & Völkers Washington DC",
    specialty: "Dupont Circle · Capitol Hill · Spring Valley",
    bio: "As part of Engel & Völkers' global luxury real estate network, the DC team provides boutique-level service to high-net-worth clients seeking historic rowhouses, modern condos, and estate properties across the DMV.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Global Luxury Network",
  },
  {
    name: "Washington DC Top Producers",
    brokerage: "Various Premier Brokerages",
    specialty: "McLean · Potomac · Great Falls",
    bio: "The DC area's top luxury agents bring a combined 265+ years of experience and over $1.79 billion in total team sales, specializing in the capital's most distinguished addresses from Georgetown townhouses to Great Falls estates.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "$1.79B+ Combined Sales",
  },
];

const WashingtonAgents = () => (
  <CityAgentsPage
    city="Washington"
    region="DC, US"
    heroImage="https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=1920&h=1080&fit=crop"
    intro="Georgetown's Federal-era rowhouses trade between $3M and $15M, while Kalorama mansions — once home to presidents and ambassadors — command $2,500+ per square foot. The DC luxury corridor from Embassy Row through Spring Valley to McLean and Great Falls represents one of America's most diplomatically connected prestige markets."
    whyContact="Washington DC's top agents hold a combined $1.79 billion in career sales and maintain relationships with embassy staff, lobbyists, and Fortune 500 executives. The professionals featured here — affiliated with TTR Sotheby's and Engel & Völkers — provide the discretion and global networks required for Georgetown, Kalorama, and Potomac transactions."
    agents={agents}
  />
);

export default WashingtonAgents;
