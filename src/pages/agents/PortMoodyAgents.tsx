import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Chris Chicken",
    brokerage: "RE/MAX Crest Realty",
    specialty: "Waterfront · Heritage Mountain · Anmore",
    bio: "Port Moody's premier luxury agent specializing in inlet waterfront properties and Heritage Mountain estates. Deep knowledge of the Tri-Cities' most prestigious addresses.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Platinum Club",
  },
  {
    name: "Amy Chicken",
    brokerage: "Sotheby's International Realty Canada",
    specialty: "Anmore Estates · Mountain Views · Luxury Condos",
    bio: "Representing Sotheby's International Realty in Port Moody, bringing global marketing reach to the city's finest waterfront and mountain properties.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  },
  {
    name: "Paul Chicken",
    brokerage: "Royal LePage West Real Estate Services",
    specialty: "Estate Properties · Glenayre · Investment",
    bio: "A trusted luxury specialist in Port Moody with expertise in Glenayre estates and premium residential properties.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  }
];

const PortMoodyAgents = () => (
  <CityAgentsPage
    city="Port Moody"
    region="British Columbia, Canada"
    heroImage="https://images.unsplash.com/photo-1609825488888-3a766db05542?w=1920&h=1080&fit=crop"
    intro="Port Moody's luxury real estate market features stunning inlet waterfront properties, premium homes in Heritage Mountain, and executive estates in the City of the Arts with spectacular natural beauty."
    whyContact="Whether you're buying or selling luxury property in Port Moody, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default PortMoodyAgents;
