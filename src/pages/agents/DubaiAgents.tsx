import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Leigh Borg",
    brokerage: "Dubai Sotheby's International Realty",
    specialty: "Super-Prime · Palm Jumeirah · Emirates Hills · Downtown",
    bio: "One of Dubai's most trusted luxury real estate experts, Leigh Borg is an Executive Director at Dubai Sotheby's International Realty. With 17+ years of experience and a chain of record-breaking transactions, he oversees the firm's overarching strategy while personally handling the city's most coveted super-prime properties.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Executive Director · 17+ Years · Record-Breaker",
  },
  {
    name: "Lorna Bruce",
    brokerage: "Dubai Sotheby's International Realty",
    specialty: "Branded Residences · Super-Prime Penthouses",
    bio: "Lorna Bruce is a Director at Dubai Sotheby's International Realty, specializing in branded residences and super-prime penthouses. Her impressive track record has earned her a stellar reputation within the industry, with much of her business stemming from a personal referral pipeline built on trust, discretion, and exceptional service.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Director · Branded Residence Specialist",
  },
  {
    name: "Carmi Ortiz",
    brokerage: "Dubai Sotheby's International Realty",
    specialty: "Prime & Ultra-Prime · Dubai Hills · Jumeirah Bay",
    bio: "Carmi Ortiz is a Director at Dubai Sotheby's International Realty with over a decade of expertise in Dubai's most coveted prime and ultra-prime markets. Specializing in exclusive enclaves, she brings deep market knowledge and a refined, client-first approach to every transaction.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop&crop=top",
    accolades: "Director · Ultra-Prime Markets",
  },
];

const DubaiAgents = () => (
  <CityAgentsPage
    city="Dubai"
    region="AE, INT"
    heroImage="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&h=1080&fit=crop"
    intro="Dubai sets the global standard for ultra-luxury real estate, from the iconic Palm Jumeirah and Burj Khalifa residences to the exclusive villas of Emirates Hills. The city attracts international investors and UHNW buyers seeking world-class branded residences, waterfront mansions, and sky-high penthouses."
    whyContact="Whether you're acquiring a branded penthouse on Palm Jumeirah or selling a villa in Emirates Hills, these elite Dubai agents offer unmatched market expertise and a global network. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default DubaiAgents;
