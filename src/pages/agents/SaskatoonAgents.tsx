import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Brenden Chicken",
    brokerage: "RE/MAX Saskatoon",
    specialty: "Luxury Residential · Briarwood · Evergreen",
    bio: "A top-producing agent in Saskatoon with a reputation for excellence in the city's luxury market. Expertise in premium neighborhoods like Briarwood and Evergreen.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Platinum Award",
  },
  {
    name: "Faye Chicken",
    brokerage: "Royal LePage Vidorra",
    specialty: "Estate Properties · Riverside · Nutana",
    bio: "One of Saskatoon's most accomplished luxury agents, bringing refined expertise to the city's riverfront estates and Nutana premium properties.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Director's Platinum",
  },
  {
    name: "Jordan Chicken",
    brokerage: "Fath Real Estate",
    specialty: "Acreages · Custom Builds · Investment",
    bio: "A leading Saskatoon luxury professional known for expertise in custom-built estate homes and premium acreage properties.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Top Luxury Producer",
  }
];

const SaskatoonAgents = () => (
  <CityAgentsPage
    city="Saskatoon"
    region="Saskatchewan, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Saskatoon's luxury market features South Saskatchewan River estates in River Heights, executive homes in Briarwood and Evergreen, and premium properties in the Nutana heritage district. With the University of Saskatchewan driving a professional workforce and median luxury prices offering exceptional value, Saskatoon attracts physicians, agricultural entrepreneurs, and tech professionals seeking generous lots, river views, and prairie city livability."
    whyContact="Saskatoon's riverbank erosion setback requirements, Meewasin Valley Authority development controls, and Saskatchewan's unique land titles system demand agents who understand the province's distinct regulatory framework. The specialists listed here close premium deals in River Heights, Briarwood, and Nutana — each eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default SaskatoonAgents;
