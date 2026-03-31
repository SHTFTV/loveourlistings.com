import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Ryan Hill",
    brokerage: "Compass",
    specialty: "White Eagle · Ashwood Creek · Riverwalk",
    bio: "Naperville's top luxury agent with Compass, Ryan Hill specializes in White Eagle estates and the city's most exclusive gated communities.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Compass Top Producer",
  },
  {
    name: "Sharon Sodikoff",
    brokerage: "Berkshire Hathaway HomeServices",
    specialty: "Cress Creek · Country Lakes · Estate Homes",
    bio: "A top-producing luxury agent in Naperville, Sharon brings Berkshire Hathaway's prestigious brand to the western suburbs' finest properties.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Chairman's Circle",
  },
  {
    name: "Steve Giannone",
    brokerage: "RE/MAX Suburban",
    specialty: "New Construction · Premium Residential · Investment",
    bio: "A leading Naperville agent bringing innovative marketing to the city's luxury new construction and premium residential market.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Chairman's Club",
  }
];

const NapervilleAgents = () => (
  <CityAgentsPage
    city="Naperville"
    region="Illinois, United States"
    heroImage="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1920&h=1080&fit=crop"
    intro="Naperville's luxury market features grand estates in White Eagle, premium properties near the Riverwalk, and executive homes in one of America's most desirable suburban communities."
    whyContact="Whether you're buying or selling luxury property in Naperville, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default NapervilleAgents;
