import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Michael Pavone",
    brokerage: "RE/MAX Elite",
    specialty: "Glenora · Crestwood · Windermere Estates",
    bio: "Rated a Top 50 Agent in Canada and #3 in Edmonton by Rate-My-Agent, Michael Pavone is the city's premier luxury realtor. Specializing in fine homes across Glenora, Crestwood, Parkview, and Westbrook Estates, he brings unmatched market expertise and a results-driven approach to every transaction.",
    website: "https://michaelpavone.com",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Top 50 Agents in Canada",
  },
  {
    name: "Ron Dickson",
    brokerage: "Sotheby's International Realty Canada",
    specialty: "Luxury Residential · Estate Properties · Investment",
    bio: "With 25 years of invaluable experience in Edmonton's real estate market, Ron Dickson brings a wealth of advantages to luxury buyers and sellers. His affiliation with Sotheby's International Realty provides unmatched global exposure for estate-calibre listings across Alberta's capital city.",
    website: "https://sothebysrealty.ca",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "25+ Years Experience · Sotheby's",
  },
  {
    name: "Adam Dirksen",
    brokerage: "Rimrock Real Estate",
    specialty: "Luxury New Builds · Acreages · Fine Homes",
    bio: "A dedicated luxury listing agent in Edmonton, Adam Dirksen delivers a tailored experience for discerning clients seeking premium properties. His expertise spans luxury new builds, executive homes, and estate properties across Edmonton's most sought-after neighbourhoods.",
    website: "https://www.adamdirksen.com",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=top",
    accolades: "Luxury Listing Specialist",
  },
];

const EdmontonAgents = () => (
  <CityAgentsPage
    city="Edmonton"
    region="Alberta, Canada"
    heroImage="https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=1920&h=1080&fit=crop"
    intro="Edmonton's luxury real estate market features prestigious estate homes in Glenora, Crestwood, and Windermere, alongside stunning riverfront properties with sweeping valley views. These are the city's most trusted luxury listing agents — professionals who consistently deliver exceptional results for high-net-worth clients."
    whyContact="Whether you're acquiring a Glenora mansion or marketing a riverfront estate, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default EdmontonAgents;
