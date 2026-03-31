import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Tarek Ali",
    brokerage: "Qatar Sotheby's International Realty",
    specialty: "The Pearl · Lusail · West Bay · Branded Residences",
    bio: "Tarek Ali is a Senior Sales Associate at Qatar Sotheby's International Realty with deep expertise in Doha's luxury real estate market. He specializes in The Pearl-Qatar's waterfront residences, Lusail City's ultra-modern developments, and branded residences including The Residences at The St. Regis — guiding UHNW clients with passion and market intelligence.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's · Senior Associate · The Pearl Expert",
  },
  {
    name: "Tatiana Spivakova",
    brokerage: "Qatar Sotheby's International Realty",
    specialty: "Ultra-Luxury · International Clients · Kempinski Residences",
    bio: "Tatiana Spivakova represents Qatar Sotheby's International Realty, serving the Doha market's elite international clientele. Her multilingual abilities and refined approach make her the preferred advisor for European, Russian, and Middle Eastern UHNW buyers seeking Doha's most prestigious branded residences and waterfront properties.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's · Multilingual · UHNW Specialist",
  },
  {
    name: "Ahmed Al-Fardan",
    brokerage: "Alfardan Properties",
    specialty: "Premium Developments · West Bay · Lusail Marina · Investment",
    bio: "Part of the prestigious Alfardan Group — one of Qatar's most established family conglomerates — Ahmed leads the properties division's luxury sales. With exclusive access to premium developments across West Bay, Lusail Marina, and The Pearl, he offers international investors and local elite unmatched access to Doha's trophy real estate.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Alfardan Group · Premium Developer Access",
  },
];

const DohaAgents = () => (
  <CityAgentsPage
    city="Doha"
    region="QA, INT"
    heroImage="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=1920&h=1080&fit=crop"
    intro="Doha's luxury real estate market has transformed rapidly, offering world-class developments from The Pearl-Qatar's Venetian-inspired waterfront to Lusail City's futuristic skyline. Qatar's capital attracts global investors and UHNW buyers seeking branded residences, marina penthouses, and ultra-modern apartments in one of the Middle East's most ambitious cities."
    whyContact="Whether you're acquiring a branded residence at The St. Regis or selling a Pearl-Qatar waterfront penthouse, these elite Doha agents bring unmatched local expertise and regional connections. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default DohaAgents;
