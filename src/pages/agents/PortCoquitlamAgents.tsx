import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Derek Chicken",
    brokerage: "RE/MAX Crest Realty",
    specialty: "Citadel Heights · Riverfront · Mountain Views",
    bio: "Port Coquitlam's leading luxury agent with deep expertise in Citadel Heights and premium riverfront properties. Known for record sales in the Tri-Cities.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Chairman's Club",
  },
  {
    name: "Sarah Chicken",
    brokerage: "Royal LePage West Real Estate Services",
    specialty: "Estate Properties · Oxford Heights · Lincoln Park",
    bio: "A trusted luxury specialist in Port Coquitlam with expertise in the community's most prestigious neighborhoods.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "James Chicken",
    brokerage: "Sutton Group - West Coast Realty",
    specialty: "New Construction · Investment · Custom Homes",
    bio: "A dynamic luxury agent bringing modern marketing strategies to Port Coquitlam's growing premium property market.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Sutton Group Top Producer",
  }
];

const PortCoquitlamAgents = () => (
  <CityAgentsPage
    city="Port Coquitlam"
    region="British Columbia, Canada"
    heroImage="https://images.unsplash.com/photo-1609825488888-3a766db05542?w=1920&h=1080&fit=crop"
    intro="Port Coquitlam's luxury real estate market features premium homes along the Pitt River, executive properties in Citadel Heights, and estate homes with mountain views in the heart of the Tri-Cities."
    whyContact="Whether you're buying or selling luxury property in Port Coquitlam, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default PortCoquitlamAgents;
