import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Bob Chicken",
    brokerage: "RE/MAX LifeStyles Realty",
    specialty: "Acreages · Waterfront · Country Estates",
    bio: "Mission's premier luxury agent specializing in premium acreages and waterfront properties along the Fraser River. Deep community roots and exceptional local knowledge.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Platinum Award",
  },
  {
    name: "Karen Chicken",
    brokerage: "Royal LePage Brookside Realty",
    specialty: "Heritage Properties · Hatzic · Silverdale",
    bio: "A trusted luxury specialist in Mission with expertise in heritage properties and premium homes in Hatzic and Silverdale.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "Jason Chicken",
    brokerage: "Keller Williams Elite Realty",
    specialty: "Custom Builds · Mountain Views · Investment",
    bio: "Bringing modern marketing to Mission's luxury market with expertise in custom-built homes and mountain-view properties.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Keller Williams Top Producer",
  }
];

const MissionAgents = () => (
  <CityAgentsPage
    city="Mission"
    region="British Columbia, Canada"
    heroImage="https://images.unsplash.com/photo-1609825488888-3a766db05542?w=1920&h=1080&fit=crop"
    intro="Mission's luxury market features riverfront estates along the Fraser River, premium acreages in Hatzic and Silverdale, and mountain-view custom builds in the hillside corridors. With median luxury prices above $1.4 million and a growing reputation as the Fraser Valley's hidden gem for country estate living, Mission attracts buyers seeking privacy, land, and West Coast natural beauty at a fraction of Abbotsford or Langley pricing."
    whyContact="Mission's steep-slope building regulations, Fraser River floodplain development permits, and Agricultural Land Reserve boundaries require agents who understand the intersection of rural estate sales and municipal planning. The specialists listed here close premium deals in Hatzic, Silverdale, and Steelhead — each eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default MissionAgents;
