import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Joel Carson",
    brokerage: "Sotheby's International Realty",
    specialty: "Federal Heights · Avenues · Emigration Canyon",
    bio: "Utah's leading luxury agent with Sotheby's International Realty, Joel Carson has set sales records across Salt Lake City's most prestigious mountain-view communities.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  },
  {
    name: "Kerry Oman",
    brokerage: "Berkshire Hathaway HomeServices",
    specialty: "Holladay · Cottonwood · Wasatch Foothills",
    bio: "A top-producing Salt Lake luxury agent, Kerry Oman brings decades of experience to the Wasatch foothills and Cottonwood luxury markets.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Chairman's Circle Diamond",
  },
  {
    name: "Nathan Yates",
    brokerage: "Compass",
    specialty: "Ski Properties · Modern Luxury · Investment",
    bio: "A leading Compass agent in Utah, Nathan specializes in modern luxury properties and ski-accessible estates along the Wasatch Front.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Compass Top Producer",
  }
];

const SaltLakeCityAgents = () => (
  <CityAgentsPage
    city="Salt Lake City"
    region="Utah, United States"
    heroImage="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1920&h=1080&fit=crop"
    intro="Salt Lake City's luxury market features stunning mountain-view estates in the Wasatch foothills, premium homes in Federal Heights, and ski-accessible luxury in Emigration Canyon."
    whyContact="Whether you're buying or selling luxury property in Salt Lake City, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default SaltLakeCityAgents;
