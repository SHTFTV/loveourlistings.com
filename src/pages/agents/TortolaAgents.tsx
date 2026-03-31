import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Chris Smith",
    brokerage: "Coldwell Banker BVI",
    specialty: "Waterfront Estates · Island Properties · Investment",
    bio: "As Managing Broker of Coldwell Banker BVI, Chris brings deep expertise in Tortola's luxury waterfront market, guiding international buyers through the British Virgin Islands' most prestigious property transactions with professionalism and local insight.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Managing Broker",
  },
  {
    name: "Katie Westlake",
    brokerage: "Coldwell Banker BVI",
    specialty: "Luxury Villas · Concierge · Tortola Estates",
    bio: "As Property & Concierge Manager for Tortola, Katie provides white-glove service for luxury villa sales and management, ensuring every detail is handled for discerning clients seeking island living at its finest.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Luxury Concierge Specialist",
  },
  {
    name: "James O'Connell",
    brokerage: "BVI Sotheby's International Realty",
    specialty: "Beachfront · Land · Development",
    bio: "Representing Sotheby's prestigious BVI office, James connects global buyers with Tortola's most exclusive beachfront properties and development opportunities across the British Virgin Islands archipelago.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's BVI Agent",
  },
];

const TortolaAgents = () => (
  <CityAgentsPage
    city="Tortola"
    region="VG, INT"
    heroImage="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop"
    intro="Tortola and the British Virgin Islands offer an exclusive luxury real estate market with stunning waterfront estates and private island properties. These are the territory's most trusted luxury listing agents — professionals who consistently deliver results for discerning buyers and sellers."
    whyContact="Whether you're buying or selling luxury property in Tortola, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default TortolaAgents;
