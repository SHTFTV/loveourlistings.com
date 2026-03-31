import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Alexander Kraft",
    brokerage: "Sotheby's International Realty France",
    specialty: "Luxury Residential · Historic Estates · Châteaux",
    bio: "As CEO of Sotheby's International Realty France–Monaco, Alexander Kraft oversees the most prestigious property transactions in Paris. A renowned figure in European luxury real estate, he represents ultra-high-net-worth clients seeking landmark Parisian properties on Avenue Montaigne, Place des Vosges, and the Golden Triangle.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "CEO · Global Luxury Leader",
  },
  {
    name: "Marie-Hélène Lundgreen",
    brokerage: "Daniel Féau / Christie's International",
    specialty: "Left Bank · Right Bank · Haussmann Apartments",
    bio: "A senior director at Daniel Féau, Paris's most established luxury agency (affiliated with Christie's International Real Estate), Marie-Hélène specializes in exceptional Haussmann apartments and private hôtels particuliers across the 6th, 7th, and 16th arrondissements. Her deep network includes diplomats, art collectors, and international investors.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Senior Director · Christie's Affiliate",
  },
  {
    name: "Thomas Junot",
    brokerage: "Junot Fine Properties",
    specialty: "Ultra-Luxury · Private Hôtels Particuliers · Penthouses",
    bio: "Founder of Junot Fine Properties, one of Paris's most exclusive boutique agencies, Thomas built his Private Office as a concierge-style service for UHNW clients. His team handles off-market transactions for the city's most exceptional properties — from Marais mansions to Eiffel Tower-view penthouses — with unmatched discretion.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Founder · Ultra-Luxury Specialist",
  },
];

const ParisAgents = () => (
  <CityAgentsPage
    city="Paris"
    region="FR, INT"
    heroImage="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&h=1080&fit=crop"
    intro="Paris is the epicenter of European luxury real estate, home to iconic Haussmann architecture, historic hôtels particuliers, and some of the world's most prestigious addresses. From the Golden Triangle to Saint-Germain-des-Prés, the City of Light attracts discerning buyers from every corner of the globe."
    whyContact="Whether you're acquiring a pied-à-terre on the Left Bank or selling a landmark property in the 8th arrondissement, these elite Paris agents bring unparalleled market access, discretion, and negotiation expertise. Each is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default ParisAgents;
