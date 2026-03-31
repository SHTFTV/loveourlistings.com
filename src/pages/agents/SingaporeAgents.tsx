import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Clare Loh",
    brokerage: "Singapore Luxury Homes",
    specialty: "Good Class Bungalows · Sentosa Cove · Orchard",
    bio: "Recognized as Singapore's most trusted luxury property agent, Clare brings unparalleled dedication and insight to every transaction, with a portfolio spanning the city-state's most prestigious addresses from Nassim Road to Sentosa Cove.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Most Trusted Agent",
  },
  {
    name: "Jen Lee",
    brokerage: "List Sotheby's International Realty",
    specialty: "Luxury Condos · Penthouses · Investment",
    bio: "As Associate Vice President at List Sotheby's International Realty Singapore, Jen brings global luxury expertise and deep local knowledge to Singapore's ultra-luxury condo and penthouse market, serving an elite international clientele.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Associate Vice President",
  },
  {
    name: "Samuel Tan",
    brokerage: "Christie's International Real Estate Singapore",
    specialty: "District 9 & 10 · Heritage · Development",
    bio: "Representing Christie's prestigious Singapore office, Samuel specializes in prime Districts 9 and 10 luxury properties, guiding ultra-high-net-worth buyers through Singapore's tightly regulated and highly coveted residential market.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Christie's Luxury Specialist",
  },
];

const SingaporeAgents = () => (
  <CityAgentsPage
    city="Singapore"
    region="SG, INT"
    heroImage="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1920&h=1080&fit=crop"
    intro="Singapore offers one of Asia's most exclusive luxury real estate markets, with exceptional properties from Good Class Bungalows to ultra-luxury penthouses along the Marina Bay skyline. These are the city's most trusted luxury listing agents."
    whyContact="Whether you're buying or selling luxury property in Singapore, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default SingaporeAgents;
