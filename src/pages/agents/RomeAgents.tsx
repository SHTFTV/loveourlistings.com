import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Diletta Giorgolo Spinola",
    brokerage: "Italy Sotheby's International Realty",
    specialty: "Historic Palazzos · Luxury Apartments · Diplomatic Quarter",
    bio: "As the daughter of a former Italian Ambassador, Diletta has cultivated a global perspective, having lived in Berlin, Bonn, Zurich, Vienna, and New York. At Italy Sotheby's International Realty in Rome, she brings her international network and deep cultural understanding to represent the city's most extraordinary historic properties and luxury residences.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's · International Diplomat Network",
  },
  {
    name: "Claudia Ceribelli",
    brokerage: "Italy Sotheby's International Realty",
    specialty: "Centro Storico · Parioli · Trastevere · Pinciano",
    bio: "Born and raised in Rome, Claudia Ceribelli graduated from the M. Massimo Institute before studying Modern Foreign Languages and Literatures at La Sapienza University. Her deep roots in Rome's most prestigious neighborhoods and multilingual abilities make her the trusted advisor for international buyers seeking the Eternal City's finest properties.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's · Native Roman · Multilingual",
  },
  {
    name: "Maria Victoria Vaccaro",
    brokerage: "Italy Sotheby's International Realty",
    specialty: "Legal Expertise · Investment · Historic Properties",
    bio: "Born in Stockholm but a lifelong Roman, Maria Victoria Vaccaro graduated Summa Cum Laude in Law in 1998 and practiced as a lawyer before joining Italy Sotheby's International Realty. Her rigorous legal background gives UHNW clients a decisive edge in navigating Italy's complex property regulations and securing Rome's most coveted addresses.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Lawyer · Summa Cum Laude · Sotheby's",
  },
];

const RomeAgents = () => (
  <CityAgentsPage
    city="Rome"
    region="IT, INT"
    heroImage="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1920&h=1080&fit=crop"
    intro="Rome's luxury real estate market is steeped in history, offering everything from Renaissance palazzos and penthouse apartments with Colosseum views to elegant villas along the Appia Antica. The Eternal City attracts discerning international buyers seeking a rare blend of cultural heritage, architectural grandeur, and la dolce vita."
    whyContact="Whether you're acquiring a historic palazzo in the Centro Storico or selling a luxury villa in Parioli, these elite Rome agents bring unmatched local knowledge and global connections. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default RomeAgents;
