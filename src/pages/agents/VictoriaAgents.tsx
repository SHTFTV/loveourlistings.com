import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Jason Binab",
    brokerage: "The Agency Victoria",
    specialty: "Luxury Residential · #1 Sales Volume",
    bio: "Jason Binab is the #1 agent by total sales dollar volume in Greater Victoria from 2005–2025, as reported by the Victoria Real Estate Board. Known for his high-energy marketing approach and unmatched local expertise, Jason and the Binab Group have set the standard for luxury real estate on Vancouver Island.",
    phone: "(250) 893-2931",
    website: "https://binabgroup.com",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop&crop=top",
    accolades: "#1 Agent by Sales Volume · 2005–2025",
  },
  {
    name: "Leslee Farrell",
    brokerage: "The Farrell Group",
    specialty: "Luxury Waterfront · Oak Bay · Uplands",
    bio: "Leslee Farrell and The Farrell Group specialize in luxury waterfront homes in Victoria, BC. With deep roots in the market and a refined approach to marketing, they help discerning buyers and sellers navigate Victoria's most prestigious waterfront and estate neighbourhoods.",
    website: "https://lesleefarrell.com",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&h=800&fit=crop&crop=top",
    accolades: "Luxury Waterfront Specialist",
  },
  {
    name: "Sylvia Therrien",
    brokerage: "Engel & Völkers Victoria",
    specialty: "Luxury Properties · Vancouver Island",
    bio: "Selling luxury properties on Vancouver Island since 1994, Sylvia Therrien is a multiple MLS award winner with international connections. Her decades of experience provide clients with a solid understanding of the market and a focused, results-driven marketing approach.",
    website: "https://www.sylviatherrien.ca",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=800&fit=crop&crop=top",
    accolades: "Multiple MLS Award Winner · Since 1994",
  },
];

const VictoriaAgents = () => (
  <CityAgentsPage
    city="Victoria"
    region="British Columbia, Canada"
    heroImage="https://images.unsplash.com/photo-1559511260-66a68e7e4e91?w=1920&h=1080&fit=crop"
    intro="Victoria, the capital of British Columbia, offers a unique blend of heritage charm and waterfront luxury. From the iconic Inner Harbour to the stately homes of Oak Bay and the Uplands, Victoria's luxury market attracts buyers seeking a refined West Coast lifestyle with a distinctly British flavour."
    whyContact="These top-ranked Victoria agents combine decades of local expertise with international marketing reach. Whether you're selling a waterfront estate or searching for your dream property on Vancouver Island, connecting with one of these professionals — and pairing it with Love Our Listings' iconic branding — is the ultimate competitive advantage."
    agents={agents}
  />
);

export default VictoriaAgents;
