import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Jan Sibbald",
    brokerage: "Luxury Homes Halifax",
    specialty: "Oceanfront · Estate Properties · Waterfront",
    bio: "Halifax's premier luxury and oceanfront specialist, Jan Sibbald has represented some of the most significant waterfront and estate properties in Nova Scotia. Her expertise in oceanfront elegance and high-end residential sales makes her the go-to agent for discerning buyers seeking Halifax's finest addresses.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Oceanfront Luxury Specialist",
  },
  {
    name: "Kari MacLeod",
    brokerage: "Sotheby's International Realty Canada",
    specialty: "South End · Northwest Arm · Luxury Residential",
    bio: "A leading luxury agent with Sotheby's International Realty Canada in Halifax, Kari MacLeod brings global exposure and refined marketing to Nova Scotia's finest properties. Her Sotheby's affiliation provides unmatched international reach for estate-calibre listings across Atlantic Canada.",
    website: "https://sothebysrealty.ca/en/real-estate-agent/kari-macleod/",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  },
  {
    name: "Joanne Pullin",
    brokerage: "Joanne Pullin Realty Group",
    specialty: "Halifax · Dartmouth · Luxury Communities",
    bio: "An award-winning REALTOR with a passion for helping clients navigate Halifax's evolving real estate market, Joanne Pullin provides strategic guidance, expert negotiation skills, and a results-driven approach. Her deep understanding of Halifax and surrounding communities makes her a trusted advisor for luxury property transactions.",
    website: "https://joannepullin.ca",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Award-Winning REALTOR",
  },
];

const HalifaxAgents = () => (
  <CityAgentsPage
    city="Halifax"
    region="Nova Scotia, Canada"
    heroImage="https://images.unsplash.com/photo-1609825488888-3a766db05542?w=1920&h=1080&fit=crop"
    intro="Halifax's luxury real estate market features stunning oceanfront estates, heritage South End homes, and waterfront properties along the Northwest Arm. As Atlantic Canada's largest city, Halifax attracts buyers seeking coastal elegance and maritime charm. These are the city's most trusted luxury listing agents."
    whyContact="Whether you're acquiring an oceanfront estate or marketing a heritage property in the South End, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default HalifaxAgents;
