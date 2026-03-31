import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Brice Steiner",
    brokerage: "Switzerland Sotheby's International Realty",
    specialty: "Lakefront Estates · Penthouses · International Clients",
    bio: "Based at Switzerland Sotheby's International Realty on Boulevard Georges-Favon in Geneva, Brice Steiner is dedicated to fully satisfying the expectations of his discerning clientele. He specializes in Geneva's most prestigious lakefront properties and penthouses, serving UHNW buyers from across the globe seeking Switzerland's finest addresses.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's · Geneva Lakefront Specialist",
  },
  {
    name: "Ian Simpson",
    brokerage: "Ian Simpson Luxury Real Estate",
    specialty: "UHNWI Advisory · Relocation · Investment · Chalets",
    bio: "Ian Simpson is one of Switzerland's most recognized luxury real estate advisors, known for guiding ultra-high-net-worth individuals through the complexities of Swiss property acquisition. His boutique advisory practice in Geneva provides end-to-end service — from property search and due diligence to relocation and wealth structuring.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "UHNWI Advisor · Swiss Market Authority",
  },
  {
    name: "Caroline Taylor",
    brokerage: "John Taylor Geneva",
    specialty: "Lake Geneva · Cologny · Vandoeuvres · Vésenaz",
    bio: "Part of the prestigious John Taylor network — operating since 1864 — the Geneva team assists international clients in acquiring and selling exceptional properties along Lake Geneva's famed Gold Coast. With deep connections in Cologny, Vandoeuvres, and Geneva's most exclusive enclaves, they offer unmatched access to off-market opportunities.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "John Taylor · Since 1864",
  },
];

const GenevaAgents = () => (
  <CityAgentsPage
    city="Geneva"
    region="CH, INT"
    heroImage="https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=1920&h=1080&fit=crop"
    intro="Geneva is one of the world's most exclusive real estate markets, offering stunning lakefront estates, historic mansions in Cologny, and elegant city penthouses with Alpine views. The city attracts diplomats, financiers, and global ultra-high-net-worth individuals seeking privacy, prestige, and Switzerland's renowned quality of life."
    whyContact="Whether you're acquiring a lakefront estate on Geneva's Gold Coast or selling a prestigious property in Cologny, these elite agents offer unparalleled Swiss market expertise. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default GenevaAgents;
