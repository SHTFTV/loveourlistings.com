import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Ana Alicia López",
    brokerage: "Riviera Maya Sotheby's International Realty",
    specialty: "Waterfront · Puerto Cancún · Luxury Condos",
    bio: "A National Counselor in the Mexican Association of Real Estate Professionals (AMPI) and international member of NAR, Ana Alicia brings unparalleled expertise to Cancún's ultra-luxury waterfront market.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "AMPI National Counselor",
  },
  {
    name: "Carlos Muñoz",
    brokerage: "Christie's International Real Estate Mexico",
    specialty: "Beachfront Estates · Marina Properties · Investment",
    bio: "Representing Cancún's most prestigious addresses through Christie's global network, Carlos specializes in beachfront estates and marina-front properties that attract discerning international investors to the Mexican Caribbean.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Christie's Top Agent",
  },
  {
    name: "Sofia Delgado",
    brokerage: "Preferred Luxury Real Estate",
    specialty: "Puerto Cancún · Playa Mujeres · New Construction",
    bio: "With deep roots in Cancún's luxury market since 2011, Sofia guides high-net-worth clients through Puerto Cancún's vertical ultra-luxury developments and the region's most exclusive gated communities.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Luxury Specialist",
  },
];

const CancunAgents = () => (
  <CityAgentsPage
    city="Cancún"
    region="MX, INT"
    heroImage="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=1920&h=1080&fit=crop"
    intro="Cancún offers a distinguished luxury real estate market with exceptional properties ranging from ultra-luxury towers in Puerto Cancún to beachfront estates along the Caribbean coast. These are the city's most trusted luxury listing agents — professionals who consistently deliver results for discerning buyers and sellers."
    whyContact="Whether you're buying or selling luxury property in Cancún, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default CancunAgents;
