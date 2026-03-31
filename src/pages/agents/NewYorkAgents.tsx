import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Serena Boardman",
    brokerage: "Sotheby's International Realty",
    specialty: "Upper East Side · Townhouses · Historic Estates",
    bio: "Consistently ranked as the top-producing individual broker at Sotheby's International Realty, Serena Boardman is a legend in New York City luxury real estate. Her expertise in Manhattan's most prestigious townhouses and co-ops on the Upper East Side has made her the trusted advisor for the city's most discerning buyers and sellers.",
    website: "https://www.sothebysrealty.com",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "#1 Sotheby's Individual Broker",
  },
  {
    name: "Caroline Bass",
    brokerage: "Compass",
    specialty: "Tribeca · West Village · Luxury Condos",
    bio: "With over $350 million in career sales, Caroline Bass is one of Manhattan's most trusted luxury brokers. Known for her patience, strategic pricing, and client-first approach, she has earned a stellar reputation among both buyers and sellers in Tribeca, the West Village, and SoHo's most exclusive addresses.",
    website: "https://caroline-bass.com",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop&crop=top",
    accolades: "$350M+ Career Sales",
  },
  {
    name: "Ryan Serhant",
    brokerage: "SERHANT.",
    specialty: "New Development · Ultra-Luxury · Manhattan",
    bio: "Founder of SERHANT. and one of the most recognized names in global real estate, Ryan Serhant has redefined luxury property marketing. His innovative approach to branding, media, and client service has made him the go-to agent for Manhattan's highest-profile new developments and ultra-luxury transactions.",
    website: "https://www.serhant.com",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Founder of SERHANT.",
  },
];

const NewYorkAgents = () => (
  <CityAgentsPage
    city="New York"
    region="New York, United States"
    heroImage="https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1920&h=1080&fit=crop"
    intro="New York City's luxury real estate market is the most prestigious in the world, from the iconic townhouses of the Upper East Side to the soaring penthouses of Billionaire's Row. These are the city's most trusted luxury listing agents — professionals who collectively represent billions in Manhattan's most significant properties."
    whyContact="Whether you're acquiring a Park Avenue co-op or marketing a Tribeca penthouse, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default NewYorkAgents;
