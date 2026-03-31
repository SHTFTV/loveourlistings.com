import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Jason Jennings",
    brokerage: "Sotheby's International Realty Canada",
    specialty: "Waterfront Estates · British Properties",
    bio: "Jason Jennings is a powerhouse in West Vancouver luxury real estate, representing some of the most prestigious waterfront and British Properties estates. His Sotheby's network provides global reach while his intimate knowledge of the North Shore ensures sellers achieve maximum value.",
    website: "https://sothebysrealty.ca",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  },
  {
    name: "Eric Latta",
    brokerage: "Sotheby's International Realty Canada",
    specialty: "North Shore · West Vancouver Estates",
    bio: "A lifetime North Shore resident, Eric Latta is recognized as a respected leader in the sale of West Vancouver and North Vancouver homes. His consistent track record of top-tier sales and deep community roots make him the go-to agent for luxury properties in this exclusive enclave.",
    website: "https://sothebysrealty.ca",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop&crop=top",
    accolades: "Lifetime North Shore Resident · Top Producer",
  },
  {
    name: "Gina Stockwell",
    brokerage: "Sotheby's International Realty Canada",
    specialty: "Luxury Waterfront · Sunshine Coast",
    bio: "Growing up on BC's Sunshine Coast gave Gina Stockwell a lifelong appreciation for coastal living. Now one of West Vancouver's most sought-after luxury agents, she brings warmth, market expertise, and the prestigious Sotheby's brand to every client relationship.",
    website: "https://sothebysrealty.ca",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  },
];

const WestVancouverAgents = () => (
  <CityAgentsPage
    city="West Vancouver"
    region="British Columbia, Canada"
    heroImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
    intro="West Vancouver is home to British Columbia's most exclusive addresses — from the British Properties to waterfront estates along Marine Drive. With breathtaking ocean views and proximity to world-class amenities, this is where Canada's ultra-luxury market thrives. These agents represent the pinnacle of real estate service in this rarefied market."
    whyContact="If you own or aspire to own property in West Vancouver's most coveted neighbourhoods, these Sotheby's-affiliated professionals offer the discretion, global network, and marketing sophistication that ultra-luxury properties demand. Partner with Love Our Listings to elevate your brand even further."
    agents={agents}
  />
);

export default WestVancouverAgents;
