import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Steve Chicken",
    brokerage: "RE/MAX Sea to Sky Real Estate",
    specialty: "Mountain Views · Waterfront · Garibaldi Highlands",
    bio: "Squamish's premier luxury agent specializing in mountain-view properties and waterfront homes on Howe Sound. Deep expertise in Garibaldi Highlands and Brackendale estates.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Amanda Chicken",
    brokerage: "Royal LePage Sussex Realty",
    specialty: "Estate Properties · Brackendale · Valleycliffe",
    bio: "A leading luxury agent in Squamish with expertise in estate properties and premium homes throughout the Sea to Sky corridor.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "Ryan Chicken",
    brokerage: "Engel & Völkers Whistler",
    specialty: "Luxury Residences · Investment · Custom Builds",
    bio: "Representing Engel & Völkers in the Sea to Sky corridor, bringing international luxury standards to Squamish's booming premium market.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Engel & Völkers Advisor",
  }
];

const SquamishAgents = () => (
  <CityAgentsPage
    city="Squamish"
    region="British Columbia, Canada"
    heroImage="https://images.unsplash.com/photo-1609825488888-3a766db05542?w=1920&h=1080&fit=crop"
    intro="Squamish's luxury market features oceanfront properties on Howe Sound, mountain-view estates below the Stawamus Chief, and premium new builds in the University Heights and Garibaldi Highlands corridors. With the Sea-to-Sky Highway connecting to both Vancouver and Whistler and median luxury prices above $1.8 million, Squamish has emerged as one of BC's most sought-after outdoor lifestyle destinations for climbers, trail runners, and remote-working professionals."
    whyContact="Squamish's Howe Sound foreshore regulations, District of Squamish steep-slope bylaws, and Cheakamus River flood-zone requirements demand agents who understand the Sea-to-Sky corridor's rapidly evolving luxury market. The specialists listed here close premium deals in Garibaldi Highlands, University Heights, and the Howe Sound waterfront — each eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default SquamishAgents;
