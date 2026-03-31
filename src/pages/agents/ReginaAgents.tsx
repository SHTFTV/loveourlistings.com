import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Mike Chicken",
    brokerage: "RE/MAX Crown Real Estate",
    specialty: "Luxury Residential · Wascana View · The Creeks",
    bio: "One of Regina's top luxury agents with decades of experience in The Creeks, Wascana View, and Harbour Landing's finest properties.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Angie Chicken",
    brokerage: "Royal LePage Regina Realty",
    specialty: "Estate Properties · Cathedral · Lakeview",
    bio: "A trusted name in Regina luxury real estate, specializing in heritage homes in Cathedral and premium properties in Lakeview.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "Bryce Chicken",
    brokerage: "Century 21 Dome Realty",
    specialty: "Custom Builds · Acreages · Lake Properties",
    bio: "A rising star in Regina's luxury market specializing in custom-built homes, premium acreages, and lakefront properties around Saskatchewan's capital.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Top Producer · Century 21",
  }
];

const ReginaAgents = () => (
  <CityAgentsPage
    city="Regina"
    region="Saskatchewan, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Regina's luxury market features executive estates in the Cathedral neighbourhood, premium lakefront properties on Wascana Lake, and modern builds in Harbour Landing and The Creeks. As Saskatchewan's capital with a stable government-employment base and median luxury prices offering exceptional value compared to western Canadian counterparts, Regina draws professionals seeking generous lot sizes, low property taxes, and four-season prairie living."
    whyContact="Regina's Wascana Centre Authority development restrictions, City of Regina infill housing guidelines, and Saskatchewan land titles system require agents who navigate the province's distinct property registration and tax framework. The specialists listed here close premium deals in Cathedral, Wascana View, and Harbour Landing — each eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default ReginaAgents;
