import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Angelos Roumpos",
    brokerage: "Roumpos Real Estate",
    specialty: "Luxury Villas · Waterfront Estates · Land Development",
    bio: "Angelos Roumpos founded Roumpos Real Estate following a successful track record specializing in unique Mykonos properties. Known for honesty, expertise, and an in-depth understanding of client needs, he has established himself as the island's most trusted agent for ultra-luxury villas, waterfront estates, and prime development land across Mykonos's most exclusive locations.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Founder · Mykonos Specialist",
  },
  {
    name: "Katerina Mykonos",
    brokerage: "Mykonos Estates",
    specialty: "Luxury Villas · Elia · Agrari · Aleomandra · Fanari",
    bio: "Leading Mykonos Estates, one of the island's premier luxury agencies, Katerina specializes in the sale and rental of exceptional villas across Mykonos's most sought-after locations — from the celebrity-favored shores of Elia and Agrari to the private peninsulas of Aleomandra. Her deep local connections ensure access to off-market trophy properties.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Mykonos Estates · Off-Market Access",
  },
  {
    name: "George Savills",
    brokerage: "Savills Greece",
    specialty: "Investment · Cyclades Portfolio · International Buyers",
    bio: "Representing Savills — one of the world's most prestigious property consultancies — in the Greek Islands, George connects international UHNW buyers with Mykonos's finest luxury villas and development opportunities. Savills' global network of 700+ offices provides unmatched exposure for sellers and exclusive access for buyers seeking Cycladic luxury.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Savills · Global Network · Cyclades Expert",
  },
];

const MykonosAgents = () => (
  <CityAgentsPage
    city="Mykonos"
    region="GR, INT"
    heroImage="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1920&h=1080&fit=crop"
    intro="Mykonos is Greece's most glamorous luxury real estate destination, where whitewashed clifftop villas with infinity pools overlook the Aegean Sea. From the exclusive shores of Elia and Agrari to the private peninsulas of Aleomandra, the island attracts A-list celebrities, tech billionaires, and global investors seeking the ultimate Mediterranean retreat."
    whyContact="Whether you're acquiring a clifftop villa overlooking the Aegean or selling a trophy estate on the island, these elite Mykonos agents bring unmatched local access and international connections. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default MykonosAgents;
