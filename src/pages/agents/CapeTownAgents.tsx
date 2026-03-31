import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Steve Thomas",
    brokerage: "Lew Geffen Sotheby's International Realty",
    specialty: "Atlantic Seaboard · Clifton · Camps Bay · Bantry Bay",
    bio: "Educated at Katherine Lady Berkley's Grammar School and Bristol Polytechnic in England, Steve Thomas brings 25+ years of engineering and real estate expertise to Lew Geffen Sotheby's International Realty in Cape Town. He specializes in the Atlantic Seaboard's most coveted addresses — Clifton, Camps Bay, and Bantry Bay — where ocean-view estates command premium prices.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's · Atlantic Seaboard Expert",
  },
  {
    name: "Lance Cohen",
    brokerage: "Lance Real Estate",
    specialty: "Clifton · Bantry Bay · Fresnaye · Ultra-Luxury Villas",
    bio: "Lance Cohen of Lance Real Estate has sold nearly R1 billion of high-end luxury properties in Cape Town's Clifton, Bantry Bay, and Fresnaye suburbs. Founded in 1996, his boutique agency is known for hands-on, discreet service and unmatched knowledge of the Atlantic Seaboard's most exclusive villa market.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "R1 Billion+ in Sales · Since 1996",
  },
  {
    name: "Jo Thomas",
    brokerage: "Lew Geffen Sotheby's International Realty",
    specialty: "Constantia · Bishopscourt · Southern Suburbs · Estates",
    bio: "Jo Thomas represents Lew Geffen Sotheby's International Realty across Cape Town's prestigious Southern Suburbs and wine estate regions. She specializes in Constantia's historic wine estates, Bishopscourt's grand properties, and exclusive gated communities — leveraging Sotheby's global brand to connect South African luxury with international buyers.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's · Wine Estate & Southern Suburbs",
  },
];

const CapeTownAgents = () => (
  <CityAgentsPage
    city="Cape Town"
    region="ZA, INT"
    heroImage="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1920&h=1080&fit=crop"
    intro="Cape Town offers some of the world's most spectacular luxury real estate, from Clifton's iconic beach bungalows and Atlantic Seaboard penthouses to Constantia's historic wine estates and Bishopscourt's grand mansions. Set between Table Mountain and the Atlantic Ocean, the Mother City attracts global buyers seeking natural beauty, lifestyle, and exceptional value."
    whyContact="Whether you're acquiring a Clifton villa or selling a Constantia wine estate, these elite Cape Town agents bring unmatched local expertise and global reach. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default CapeTownAgents;
