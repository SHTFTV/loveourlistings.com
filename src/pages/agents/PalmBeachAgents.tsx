import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "David W. Roberts",
    brokerage: "Royal Palm Properties",
    specialty: "Palm Beach Island · Jupiter Island · Oceanfront",
    bio: "Palm Beach County's leading real estate powerhouse, David Roberts has closed an astounding $636 million in on-market sales. Unlike many of his peers, Roberts has carved out dominance across the full spectrum of Palm Beach luxury — from oceanfront estates on the Island to exclusive Jupiter Island compounds.",
    website: "https://royalpalm.com",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "$636M in Sales · #1 Palm Beach County",
  },
  {
    name: "Holly Meyer Lucas",
    brokerage: "Compass · Meyer Lucas Team",
    specialty: "Palm Beach · South Florida · Luxury Waterfront",
    bio: "Leading the top-performing Meyer Lucas Team at Compass, Holly Meyer Lucas is one of South Florida's most dynamic luxury agents. Her team's innovative approach to marketing, relocation services, and client concierge has made them a go-to choice for high-net-worth buyers relocating to Palm Beach from New York, Chicago, and beyond.",
    website: "https://meyerlucas.com",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Top Palm Beach Team · Compass",
  },
  {
    name: "Christian Angle",
    brokerage: "Christian Angle Real Estate",
    specialty: "Palm Beach Island · Estate Section · Oceanfront",
    bio: "The undisputed king of Palm Beach Island real estate, Christian Angle has been the go-to broker for billionaires and notable figures seeking the most prestigious addresses on the Island. His boutique firm exclusively handles Palm Beach's most significant estate transactions with absolute discretion.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Palm Beach Island's Top Broker",
  },
];

const PalmBeachAgents = () => (
  <CityAgentsPage
    city="Palm Beach"
    region="Florida, United States"
    heroImage="https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1920&h=1080&fit=crop"
    intro="Palm Beach is the pinnacle of Florida luxury real estate, home to oceanfront estates on the Island, exclusive compounds in the Estate Section, and waterfront mansions that regularly trade for $50 million and above. These are the market's most trusted luxury listing agents — professionals who handle the most significant transactions in South Florida."
    whyContact="Whether you're acquiring a Palm Beach Island estate or marketing an oceanfront compound, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default PalmBeachAgents;
