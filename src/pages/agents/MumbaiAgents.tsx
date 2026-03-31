import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Juhi Nataraj Singh",
    brokerage: "India Sotheby's International Realty",
    specialty: "South Mumbai · BKC · Worli · Sea-Facing Apartments",
    bio: "With a Masters in International Business from the US and over seven years of American realty experience, Juhi Nataraj Singh brings a rich international perspective to India Sotheby's International Realty in Mumbai. She specializes in the city's most exclusive sea-facing apartments and penthouses across South Mumbai, Worli, and Bandra Kurla Complex.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's · US-Trained · International Expert",
  },
  {
    name: "Manas Sharma",
    brokerage: "Yellow Oak Realty",
    specialty: "Ultra-Luxury · Lodha · Oberoi · Raheja Developments",
    bio: "With 15+ years at Aditya Birla, K Raheja Corp., Rustomjee, Lodha, and Deutsche Bank, Manas Sharma is Mumbai's most trusted luxury real estate consultant. Now Vice President at Yellow Oak Realty, he leverages his deep developer relationships and financial expertise to secure the city's most prestigious addresses for UHNW clients.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "VP · 15+ Years · Developer Insider",
  },
  {
    name: "Binita Patel",
    brokerage: "Knight Frank India",
    specialty: "Advisory · Investment · Premium Residential · Commercial",
    bio: "As Senior Director of Advisory Services at Knight Frank India's Mumbai office, Binita Patel advises institutional investors and UHNW individuals on Mumbai's most significant luxury residential and commercial transactions. Knight Frank's global network of 20,000+ professionals gives her clients unmatched international reach and market intelligence.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop&crop=top",
    accolades: "Senior Director · Knight Frank Global Network",
  },
];

const MumbaiAgents = () => (
  <CityAgentsPage
    city="Mumbai"
    region="IN, INT"
    heroImage="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1920&h=1080&fit=crop"
    intro="Mumbai is India's financial capital and home to some of Asia's most expensive real estate. From the iconic sea-facing apartments of Marine Drive and Altamount Road to the ultra-modern towers of Worli and Lower Parel, Mumbai's luxury market caters to industrialists, Bollywood royalty, and global investors seeking trophy properties."
    whyContact="Whether you're acquiring a sea-facing penthouse in South Mumbai or selling a premium residence in BKC, these elite agents bring unmatched local expertise and global connections. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default MumbaiAgents;
