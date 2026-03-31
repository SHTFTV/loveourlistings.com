import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Spencer Rivers",
    brokerage: "Luxury Homes Calgary",
    specialty: "Luxury Residential · Inner City · Estate Properties",
    bio: "Calgary's most trusted luxury real estate expert, Spencer Rivers is recognized for market-leading results in the city's most exclusive inner-city communities. His deep knowledge of Calgary's premium neighbourhoods and commitment to client service has earned him a reputation as the go-to agent for high-end properties.",
    website: "https://luxuryhomescalgary.ca",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Calgary's Top Luxury Realtor",
  },
  {
    name: "Heather Waddell",
    brokerage: "Sotheby's International Realty Canada",
    specialty: "Luxury Estates · Acreages · Premium Residential",
    bio: "A leading luxury specialist with Sotheby's International Realty Canada, Heather Waddell brings sophistication and global exposure to Calgary's finest properties. Her Sotheby's affiliation provides unmatched international reach for estate-calibre listings across Alberta.",
    website: "https://sothebysrealty.ca/en/heather-waddell/",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  },
  {
    name: "Barb Richardson",
    brokerage: "Sotheby's International Realty Canada",
    specialty: "Premium Residential · Relocation · Investment",
    bio: "With 40 years of business experience and 16 years in residential real estate, Barb Richardson is a recognized leader in Calgary's luxury market. Frequently sought out for her expertise in the city's most prestigious communities, she combines deep market knowledge with a results-driven approach.",
    website: "https://sothebysrealty.ca",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop&crop=top",
    accolades: "40+ Years Business Experience",
  },
];

const CalgaryAgents = () => (
  <CityAgentsPage
    city="Calgary"
    region="Alberta, Canada"
    heroImage="https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=1920&h=1080&fit=crop"
    intro="Calgary's luxury real estate market features stunning estate homes in communities like Mount Royal, Elbow Park, and Britannia, alongside modern architectural masterpieces with sweeping Rocky Mountain views. These are the city's most trusted luxury listing agents — professionals who consistently deliver exceptional results."
    whyContact="Whether you're acquiring a Mount Royal estate or marketing a premium inner-city property, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default CalgaryAgents;
