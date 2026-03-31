import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Lana Rademaker",
    brokerage: "Damianos Sotheby's International Realty",
    specialty: "Luxury Estates · Waterfront · Paradise Island",
    bio: "Co-owner and Chief Brokerage Officer of Damianos Sotheby's International Realty, Lana brings over 20 years of experience guiding local and international clients through The Bahamas' most prestigious luxury property transactions.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Chief Brokerage Officer",
  },
  {
    name: "Mark Hussey",
    brokerage: "Bahamas Sotheby's International Realty",
    specialty: "Ocean Club · Lyford Cay · Albany",
    bio: "A distinguished top-tier real estate professional with over 21 years of experience, Mark is known for guiding both local and international clients in acquiring and marketing the finest properties across Nassau and the Out Islands.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "BRI Designation · 21+ Years",
  },
  {
    name: "Lori Roach",
    brokerage: "Graham Real Estate",
    specialty: "Residential · Commercial · Investment",
    bio: "A Nassau native who represented The Bahamas in international tennis, Lori brings the same competitive drive to luxury real estate. After running Rainbow Farms for 20+ years and earning a commercial pilot's license, she now excels in high-end Bahamian property.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Top Sales Agent",
  },
];

const NassauAgents = () => (
  <CityAgentsPage
    city="Nassau"
    region="BS, INT"
    heroImage="https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&h=1080&fit=crop"
    intro="Nassau and New Providence anchor The Bahamas' luxury real estate market — a tax-free jurisdiction with no income, capital gains, or inheritance taxes that has attracted global wealth for decades. Old Fort Bay and Lyford Cay remain among the Caribbean's most exclusive gated communities, with oceanfront estates commanding $15M–$60M+. Paradise Island's Atlantis-adjacent developments and the emerging Albany community on southwestern New Providence have expanded the luxury footprint. The Bahamas' permanent residency-by-investment programme (starting at $750K) adds a powerful incentive for UHNW relocators."
    whyContact="Bahamian real estate transactions involve Value Added Tax on property transfers, International Persons Landholding Act permits for foreign buyers, and the nuances of Crown land versus freehold title. These agents bring decades of experience navigating Nassau's most exclusive enclaves, maintain relationships with legacy families in Lyford Cay, and command the off-market inventory that never reaches public listings. Each agent is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default NassauAgents;
