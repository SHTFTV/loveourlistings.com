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
    intro="Cancún's luxury real estate market has evolved far beyond its resort origins — Puerto Cancún's marina residences now rival Miami pricing, while the Riviera Maya corridor from Playa del Carmen to Tulum attracts global ultra-high-net-worth buyers seeking Caribbean lifestyle with Mexican residency advantages. The fideicomiso (bank trust) structure for foreign buyers in the restricted coastal zone requires specialised legal navigation. These agents bring deep expertise in Cancún's evolving master-planned communities, pre-construction opportunities, and the tax benefits driving American and Canadian relocation."
    whyContact="Mexico's restricted zone regulations, notarial closing processes, and capital gains structures demand agents with cross-border transactional fluency. These Cancún specialists navigate fideicomiso renewals, PROFECO compliance for pre-sale contracts, and the nuanced pricing dynamics between Puerto Cancún's $3M+ marina estates and the Hotel Zone's premium beachfront towers. Each agent is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default CancunAgents;
