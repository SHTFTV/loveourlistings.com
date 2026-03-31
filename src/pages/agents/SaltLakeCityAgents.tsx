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
    intro="Federal Heights estates with Wasatch Front panoramas trade between $2M and $8M, while Emigration Canyon's custom ski-accessible compounds command $1,200+ per square foot with direct backcountry access. Utah's booming tech sector — the 'Silicon Slopes' corridor — has pushed Salt Lake's $2M+ segment up 28% since 2023, attracting California and Pacific Northwest executives drawn by low taxes and 30-minute ski commutes."
    whyContact="Salt Lake City's luxury inventory turns over faster than any mountain-adjacent market in the Intermountain West. The agents featured here hold Sotheby's, Berkshire Hathaway, and Compass production records with deep networks spanning tech, finance, and the region's ski-resort buyer pipeline."
    agents={agents}
  />
);

export default SaltLakeCityAgents;
