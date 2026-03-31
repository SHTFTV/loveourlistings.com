import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Andrew Kim",
    brokerage: "RE/MAX Hallmark Realty Ltd.",
    specialty: "Luxury Residential · Unionville · Cachet",
    bio: "One of Markham's top luxury agents specializing in the prestigious Unionville and Cachet communities with a data-driven approach to pricing and extensive buyer network.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Chairman's Club",
  },
  {
    name: "Linda Chen",
    brokerage: "Royal LePage Your Community Realty",
    specialty: "Estate Homes · Angus Glen · Berczy Village",
    bio: "Markham's go-to luxury agent for estate homes in Angus Glen and Berczy Village. Multilingual capabilities and deep understanding of York Region's diverse luxury market.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "Tony Tran",
    brokerage: "Sutton Group - Heritage Realty",
    specialty: "New Construction · Investment · Premium Condos",
    bio: "Bringing sharp analytical expertise to Markham's luxury market with strong developer relationships and exclusive access to premium new construction.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Top Producer · Sutton Group",
  }
];

const MarkhamAgents = () => (
  <CityAgentsPage
    city="Markham"
    region="Ontario, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Markham's luxury market is defined by estate homes in Angus Glen and Cachet, premium properties in Unionville's heritage village, and modern executive builds in Cornell and Berczy. With median luxury prices exceeding $2.2 million and a tech-sector economy anchored by IBM, AMD, and Huawei's Canadian headquarters, Markham attracts high-net-worth professionals seeking prestigious addresses within the GTA's northeastern corridor."
    whyContact="Markham's heritage conservation district restrictions, York Region development charges, and Greenbelt-adjacent building limitations require agents who navigate one of the GTA's most supply-constrained luxury markets. The specialists listed here close premium deals in Angus Glen, Cachet, and Unionville — each eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default MarkhamAgents;
