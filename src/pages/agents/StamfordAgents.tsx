import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Rachel Walsh",
    brokerage: "Compass",
    specialty: "Shippan Point · North Stamford · Waterfront",
    bio: "Stamford's top luxury agent with Compass, Rachel Walsh brings exceptional marketing to Shippan Point and waterfront properties.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Compass Top Producer",
  },
  {
    name: "Mark Levine",
    brokerage: "Douglas Elliman Real Estate",
    specialty: "Harbor Point · Luxury Condos · Investment",
    bio: "A leading Stamford agent with Douglas Elliman, Mark specializes in Harbor Point luxury condos and the city's premium waterfront developments.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Douglas Elliman Top Producer",
  },
  {
    name: "Susan Welsh",
    brokerage: "Sotheby's International Realty",
    specialty: "Darien · New Canaan · Estate Properties",
    bio: "Representing Sotheby's in the Stamford area, Susan brings global marketing to Fairfield County's Gold Coast properties.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  }
];

const StamfordAgents = () => (
  <CityAgentsPage
    city="Stamford"
    region="Connecticut, United States"
    heroImage="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1920&h=1080&fit=crop"
    intro="Stamford's luxury market features stunning Long Island Sound waterfront estates, premium properties in Shippan Point, and executive homes serving the city's thriving finance sector."
    whyContact="Whether you're buying or selling luxury property in Stamford, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default StamfordAgents;
