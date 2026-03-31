import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Brett Dickinson",
    brokerage: "The Dickinson & Clark Team, Sotheby's International Realty",
    specialty: "La Jolla · Del Mar · Rancho Santa Fe",
    bio: "For more than 15 years, Brett has represented highly-satisfied buyers and sellers in San Diego, including the Top 5 largest-ever recorded residential deals in La Jolla's history. He leads the #1 luxury real estate team in San Diego.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "#1 Luxury Team San Diego",
  },
  {
    name: "Luxury Coast Group",
    brokerage: "COMPASS",
    specialty: "North County · Encinitas · Solana Beach",
    bio: "Named the #1 residential real estate team in San Diego County for 2024, the Luxury Coast Group specializes in North County's most prestigious coastal communities from Del Mar to Encinitas.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "#1 Team San Diego County 2024",
  },
  {
    name: "Robert Aumann",
    brokerage: "Luxury SoCal Realty",
    specialty: "Coronado · Point Loma · Waterfront",
    bio: "A top-rated San Diego real estate agent verified by performance data and client reviews, Robert specializes in luxury waterfront properties and estate homes across San Diego's most coveted coastal neighborhoods.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Top-Rated · Verified",
  },
];

const SanDiegoAgents = () => (
  <CityAgentsPage
    city="San Diego"
    region="CA, US"
    heroImage="https://images.unsplash.com/photo-1538964173425-93e81f7a03be?w=1920&h=1080&fit=crop"
    intro="San Diego offers a distinguished luxury real estate market with exceptional properties from La Jolla oceanfront estates to Rancho Santa Fe compounds. These are the city's most trusted luxury listing agents — professionals who consistently deliver results for discerning buyers and sellers."
    whyContact="Whether you're buying or selling luxury property in San Diego, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default SanDiegoAgents;
