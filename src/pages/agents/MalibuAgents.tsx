import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Chris Cortazzo",
    brokerage: "Compass",
    specialty: "Malibu Beach · Point Dume · Broad Beach",
    bio: "With $596.93 million in sales volume and an average home price of $10.3 million, Chris Cortazzo is the undisputed king of Malibu real estate. A nationally recognized leading agent, his dominance in the Malibu luxury market is unmatched — consistently representing the most significant beachfront and blufftop estates along the coast.",
    website: "https://chriscortazzo.com",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "$597M Volume · $10.3M Avg Price",
  },
  {
    name: "Bianca Torrence",
    brokerage: "Sotheby's International Realty",
    specialty: "Carbon Beach · La Costa · Malibu Colony",
    bio: "An award-winning realtor in Malibu with Sotheby's International Realty, Bianca Torrence brings decades of experience and hundreds of closed transactions to the coastal luxury market. Her expertise in Carbon Beach, La Costa, and Malibu Colony, combined with Sotheby's global reach, delivers exceptional results for discerning clients.",
    website: "https://www.biancarealtor.com",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Award-Winning · Sotheby's",
  },
  {
    name: "Grauman Rosenfeld",
    brokerage: "The Agency Beverly Hills",
    specialty: "Malibu · Pacific Palisades · Topanga",
    bio: "With 245 sales in the last 12 months and a 98% sale-to-list ratio at an average of just 7 days on market, Grauman Rosenfeld is one of Malibu's most prolific luxury agents. Their unmatched velocity and market expertise make them the go-to team for sellers demanding fast results at premium prices.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "245 Sales · 7 Days Avg on Market",
  },
];

const MalibuAgents = () => (
  <CityAgentsPage
    city="Malibu"
    region="California, United States"
    heroImage="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop"
    intro="Malibu is the ultimate in California coastal luxury, with beachfront estates on Carbon Beach, blufftop compounds on Point Dume, and iconic Broad Beach properties that define the pinnacle of oceanfront living. These are the market's most trusted luxury listing agents — professionals who move Malibu's most extraordinary properties."
    whyContact="Whether you're acquiring a Carbon Beach estate or marketing a Point Dume compound, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default MalibuAgents;
