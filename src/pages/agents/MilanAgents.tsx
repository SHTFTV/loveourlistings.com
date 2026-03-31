import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Laura Stranieri",
    brokerage: "Italy Sotheby's International Realty",
    specialty: "Luxury Residential · Brera · Porta Nuova · CityLife",
    bio: "Born in Brescia and raised in Milan, Laura Stranieri graduated with honors from Università Cattolica before transitioning from HR at major Italian groups into luxury real estate. At Italy Sotheby's International Realty, she combines deep local knowledge with an international perspective, serving discerning clients in Milan's most prestigious neighborhoods.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's · Milan Market Expert",
  },
  {
    name: "Francesca Loi",
    brokerage: "Italy Sotheby's International Realty",
    specialty: "Luxury Apartments · Historic Properties · Investment",
    bio: "A law graduate from the University of Milan, Francesca Loi brings rigorous analytical skills and legal expertise to luxury real estate. After years at a renowned Milan law firm, she joined Italy Sotheby's International Realty, where her legal background gives UHNW clients a decisive advantage in complex transactions.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop&crop=top",
    accolades: "Legal Background · Sotheby's Advisor",
  },
  {
    name: "Barbara Legnani",
    brokerage: "Italy Sotheby's International Realty",
    specialty: "Design District · Penthouse · Luxury Interior Expertise",
    bio: "Barbara Legnani began her career in Italy's furniture sector at B&B Italia and American design leader Herman Miller before transitioning to luxury real estate. Her unique background in high-end design gives her an unmatched eye for Milan's finest properties, from modernist penthouses in Porta Nuova to historic residences in Brera.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Design Industry Background · Sotheby's",
  },
];

const MilanAgents = () => (
  <CityAgentsPage
    city="Milan"
    region="IT, INT"
    heroImage="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1920&h=1080&fit=crop"
    intro="Milan is Italy's fashion and finance capital, home to some of the country's most coveted luxury properties. From the Quadrilatero della Moda to the futuristic towers of Porta Nuova and CityLife, Milan attracts international buyers seeking a blend of historic Italian elegance and cutting-edge contemporary design."
    whyContact="Whether you're acquiring a design-forward penthouse or selling a historic Brera residence, these elite Milan agents bring deep local expertise and global connections. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default MilanAgents;
