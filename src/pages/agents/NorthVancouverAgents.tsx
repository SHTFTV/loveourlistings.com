import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Tom Burditt",
    brokerage: "Sotheby's International Realty Canada",
    specialty: "Waterfront · Deep Cove · Edgemont Village",
    bio: "North Vancouver's premier luxury agent with Sotheby's, specializing in waterfront and mountain-view properties. Expertise in Deep Cove, Edgemont Village, and the British Properties corridor.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  },
  {
    name: "Cheryl Baxter",
    brokerage: "Engel & Völkers Vancouver",
    specialty: "Mountain Estates · Canyon Heights · Upper Lonsdale",
    bio: "Representing Engel & Völkers on the North Shore, Cheryl brings European luxury standards to Canyon Heights and Upper Lonsdale estates.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Engel & Völkers Top Advisor",
  },
  {
    name: "Andrew Carswell",
    brokerage: "RE/MAX Crest Realty",
    specialty: "Luxury Residential · Lynn Valley · Pemberton Heights",
    bio: "A top-producing North Vancouver agent known for deep knowledge of Lynn Valley, Pemberton Heights, and the Lower Lonsdale waterfront.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Chairman's Club",
  }
];

const NorthVancouverAgents = () => (
  <CityAgentsPage
    city="North Vancouver"
    region="British Columbia, Canada"
    heroImage="https://images.unsplash.com/photo-1609825488888-3a766db05542?w=1920&h=1080&fit=crop"
    intro="North Vancouver's luxury real estate market features stunning mountain-view estates, waterfront properties in Deep Cove, and executive homes nestled among old-growth forests on the spectacular North Shore."
    whyContact="Whether you're buying or selling luxury property in North Vancouver, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default NorthVancouverAgents;
