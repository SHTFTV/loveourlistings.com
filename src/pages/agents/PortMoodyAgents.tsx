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
    intro="Port Moody's luxury market centres on inlet-view estates in Heritage Mountain, waterfront properties in Rocky Point, and premium townhomes in Suter Brook Village. Known as the 'City of the Arts' with Burrard Inlet at its doorstep and median luxury prices above $2 million, Port Moody attracts buyers seeking an intimate, walkable waterfront community with direct Evergreen Extension SkyTrain service to downtown Vancouver."
    whyContact="Port Moody's inlet-view lot premiums, Heritage Mountain building covenants, and Burrard Inlet environmental assessment requirements make every premium transaction uniquely positioned. The specialists listed here close premium deals in Heritage Mountain, Rocky Point, and Suter Brook — each eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default PortMoodyAgents;
