import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Tim Davis",
    brokerage: "Corcoran Group",
    specialty: "Southampton · Sagaponack · Bridgehampton",
    bio: "The Hamptons' luxury market leader, Tim Davis of Corcoran represents some of the most significant estate properties on the East End, with listings ranging from $35 million Ox Pasture Road estates to oceanfront Dune Road compounds. His portfolio consistently features the Hamptons' most iconic addresses.",
    website: "https://timdavishamptons.com",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Hamptons Luxury Market Leader",
  },
  {
    name: "Gary DePersia",
    brokerage: "Corcoran Group",
    specialty: "East Hampton · Water Mill · Montauk",
    bio: "Ranked among the top Hamptons brokers by The Real Deal, Gary DePersia is a powerhouse in the East End luxury market. His decades of experience and unmatched network in the Hamptons make him the trusted advisor for high-profile buyers and sellers seeking the finest oceanfront and estate properties.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Real Deal Top Hamptons Broker",
  },
  {
    name: "Susan Breitenbach",
    brokerage: "Corcoran Group",
    specialty: "Bridgehampton · Sagaponack · Water Mill",
    bio: "A legendary Hamptons agent ranked among The Real Deal's top brokers, Susan Breitenbach has been a dominant force in the East End luxury market for decades. Her intimate knowledge of Bridgehampton, Sagaponack, and Water Mill has made her the definitive authority on the Hamptons' most coveted estate properties.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Legendary Hamptons Agent",
  },
];

const HamptonsAgents = () => (
  <CityAgentsPage
    city="The Hamptons"
    region="New York, United States"
    heroImage="https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1920&h=1080&fit=crop"
    intro="The Hamptons is America's most storied luxury retreat, where oceanfront estates in Southampton, hedge-fund compounds in Sagaponack, and historic East Hampton properties command some of the highest prices in the country. These are the market's most trusted luxury listing agents — professionals who define East End real estate."
    whyContact="Whether you're acquiring a Meadow Lane oceanfront or marketing a Sagaponack estate, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default HamptonsAgents;
