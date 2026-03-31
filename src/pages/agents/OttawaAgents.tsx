import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Marilyn Wilson",
    brokerage: "Dream Properties",
    specialty: "Rockcliffe Park · The Glebe · Westboro",
    bio: "Founder of Dream Properties, Ottawa's premier luxury brokerage, Marilyn Wilson has been the city's undisputed queen of luxury real estate for decades. Her name is synonymous with the finest addresses in Rockcliffe Park, The Glebe, and Manotick — representing the most significant estate sales in Canada's capital.",
    website: "https://www.dreamproperties.com",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Ottawa's #1 Luxury Brokerage",
  },
  {
    name: "Jason Polonski",
    brokerage: "RE/MAX Hallmark Realty Group",
    specialty: "Rockcliffe Park · Westboro · Manotick",
    bio: "A top-rated Ottawa luxury homes REALTOR specializing in high-end properties across Rockcliffe Park, The Glebe, Westboro, and Manotick. Jason Polonski has earned a reputation for unparalleled expertise, market knowledge, and a proven track record in Ottawa's most prestigious neighbourhoods.",
    website: "https://ottawarealtyman.com",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Top-Rated Luxury REALTOR",
  },
  {
    name: "Cathy Tremblay",
    brokerage: "Coldwell Banker Global Luxury",
    specialty: "Luxury Estates · Waterfront · Executive Homes",
    bio: "A Coldwell Banker Global Luxury Property Specialist, Cathy Tremblay brings an international perspective and refined marketing approach to Ottawa's luxury market. Her global network and dedication to exceeding client expectations make her a standout choice for discerning buyers and sellers in the capital region.",
    phone: "613-851-5395",
    website: "https://www.coldwellbankerluxury.com",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop&crop=top",
    accolades: "Coldwell Banker Global Luxury",
  },
];

const OttawaAgents = () => (
  <CityAgentsPage
    city="Ottawa"
    region="Ontario, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Ottawa's luxury real estate market is uniquely shaped by its role as Canada's capital. Rockcliffe Park — home to embassies and the Governor General's residence — features some of the country's most distinguished estate properties. The Glebe offers character-rich heritage homes, while New Edinburgh and Westboro attract buyers seeking modern luxury along the Rideau Canal. Diplomats, senior government officials, and tech executives from the Kanata corridor drive a discreet but sophisticated $2M+ market."
    whyContact="Whether you're acquiring a Rockcliffe Park estate or marketing a Westboro luxury home, these top-ranked Ottawa agents bring the diplomatic-level discretion, government-sector buyer networks, and refined marketing approach that the capital's luxury market demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default OttawaAgents;
