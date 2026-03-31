import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Toni Linn Rush",
    brokerage: "Compass",
    specialty: "Ponte Vedra Beach · Nocatee · Oceanfront",
    bio: "Jacksonville's premier luxury agent with Compass, Toni Linn Rush dominates the Ponte Vedra Beach and Nocatee luxury markets.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Compass Top Producer",
  },
  {
    name: "Beau Bryant",
    brokerage: "Berkshire Hathaway HomeServices",
    specialty: "San Marco · Riverside · Avondale",
    bio: "A top-producing Jacksonville luxury agent specializing in the city's most desirable historic riverfront neighborhoods.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Chairman's Circle",
  },
  {
    name: "Nancy McFaull",
    brokerage: "Sotheby's International Realty",
    specialty: "Amelia Island · Waterfront · Estate Properties",
    bio: "Representing Sotheby's in Northeast Florida, Nancy brings global marketing to Amelia Island and Jacksonville's finest waterfront estates.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  }
];

const JacksonvilleAgents = () => (
  <CityAgentsPage
    city="Jacksonville"
    region="Florida, United States"
    heroImage="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1920&h=1080&fit=crop"
    intro="Jacksonville's luxury market features stunning oceanfront estates in Ponte Vedra Beach, riverfront properties along the St. Johns, and premium homes in San Marco and Ortega."
    whyContact="Whether you're buying or selling luxury property in Jacksonville, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default JacksonvilleAgents;
