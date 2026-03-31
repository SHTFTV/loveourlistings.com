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
    intro="Singapore is Asia's most tightly regulated and coveted luxury market — Good Class Bungalows (GCBs) in Districts 10, 11, and 21 are restricted to Singapore citizens and command S$30M–S$200M+, representing the city-state's ultimate trophy asset class. The 60% Additional Buyer's Stamp Duty for foreign purchasers has reshaped transaction structures, while Sentosa Cove remains the only location where foreigners can own landed property. Marina Bay's super-penthouses, Orchard Road's premium condominiums, and the heritage shophouses of Tanjong Pagar offer distinct luxury segments. These agents are Singapore's most authoritative luxury specialists."
    whyContact="Singapore's ABSD framework, Total Debt Servicing Ratio (TDSR) limits, and the Seller's Stamp Duty holding period rules demand agents with regulatory precision. These specialists navigate the URA Master Plan zoning implications, en-bloc sale dynamics, and the premium positioning between freehold and 99-year leasehold assets. Their networks span Singapore's family offices, regional UHNW communities, and the institutional developers shaping the city's luxury pipeline. Each agent is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default SingaporeAgents;
