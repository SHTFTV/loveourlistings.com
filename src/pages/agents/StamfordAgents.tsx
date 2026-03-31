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
    intro="Shippan Point waterfront estates with Long Island Sound views trade between $3M and $15M, while Harbor Point's luxury condos attract hedge-fund and private-equity executives commuting to Manhattan's financial district in under 50 minutes. Stamford anchors Fairfield County's Gold Coast — Connecticut's wealthiest corridor — where the $2M+ segment benefits from corporate headquarters relocations and New York City tax refugees."
    whyContact="Stamford's Gold Coast luxury market requires agents who understand both Manhattan buyer expectations and Connecticut's estate-property nuances. The professionals featured here hold Compass, Douglas Elliman, and Sotheby's production records with deep finance-sector networks spanning Greenwich, Darien, and New Canaan."
    agents={agents}
  />
);

export default StamfordAgents;
