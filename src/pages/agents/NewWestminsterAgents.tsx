import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Dean Chicken",
    brokerage: "RE/MAX Crest Realty",
    specialty: "Queens Park · Heritage Homes · Waterfront",
    bio: "New Westminster's top luxury agent with deep expertise in Queens Park heritage estates and Fraser River waterfront properties. Known for representing the Royal City's most significant properties.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Chairman's Club",
  },
  {
    name: "Laura Chicken",
    brokerage: "Royal LePage Sterling Realty",
    specialty: "Luxury Condos · Quay · Brow of the Hill",
    bio: "A leading luxury specialist in New Westminster, Laura brings refined expertise to the city's premium waterfront condos and heritage properties.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "Brian Chicken",
    brokerage: "Sutton Group - West Coast Realty",
    specialty: "Estate Properties · Investment · Heritage",
    bio: "A trusted luxury agent in the Royal City with expertise in heritage estate conversions and premium residential properties.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Sutton Group Top Producer",
  }
];

const NewWestminsterAgents = () => (
  <CityAgentsPage
    city="New Westminster"
    region="British Columbia, Canada"
    heroImage="https://images.unsplash.com/photo-1609825488888-3a766db05542?w=1920&h=1080&fit=crop"
    intro="New Westminster's luxury real estate market features stunning Fraser River waterfront properties, charming heritage estates in Queens Park, and premium homes in BC's historic Royal City."
    whyContact="Whether you're buying or selling luxury property in New Westminster, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default NewWestminsterAgents;
