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
    intro="Ponte Vedra Beach oceanfront estates — minutes from TPC Sawgrass — trade between $3M and $15M, while San Marco's historic riverfront mansions along the St. Johns command $1,100+ per square foot. Jacksonville's luxury market benefits from Florida's zero state income tax, no estate tax, and homestead protections — making it a magnet for Northeast executives, PGA professionals, and retirees seeking waterfront living without the South Florida premium."
    whyContact="Jacksonville's $3M+ segment is Northeast Florida's fastest-growing luxury corridor, driven by Ponte Vedra's PGA Tour association and the Nocatee master-planned community's executive buyer pipeline. The agents featured here hold Compass, Berkshire Hathaway, and Sotheby's production records with deep golf-community and Amelia Island buyer networks."
    agents={agents}
  />
);

export default JacksonvilleAgents;
