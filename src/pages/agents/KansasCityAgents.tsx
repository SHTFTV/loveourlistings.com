import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Dale Pekarek",
    brokerage: "ReeceNichols Real Estate",
    specialty: "Mission Hills · Ward Parkway · Leawood",
    bio: "Kansas City's top luxury agent, Dale Pekarek specializes in Mission Hills estates and Ward Parkway properties with decades of market expertise.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "ReeceNichols Top Producer",
  },
  {
    name: "Chase Davison",
    brokerage: "Compass",
    specialty: "Brookside · Plaza · Prairie Village",
    bio: "A leading Kansas City luxury agent with Compass, Chase brings modern marketing to the city's most desirable neighborhoods.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Compass Top Producer",
  },
  {
    name: "Sara Merz",
    brokerage: "Sotheby's International Realty",
    specialty: "Estate Properties · Lake Lotawana · Investment",
    bio: "Representing Sotheby's in Kansas City, Sara brings global luxury marketing to the metro's finest properties.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  }
];

const KansasCityAgents = () => (
  <CityAgentsPage
    city="Kansas City"
    region="Missouri, United States"
    heroImage="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1920&h=1080&fit=crop"
    intro="Mission Hills estates — Kansas City's most prestigious address since 1914 — trade between $2M and $10M on expansive lots designed by Hare & Hare, while Ward Parkway's boulevard mansions and Leawood's Hallbrook community command $500+ per square foot. The metro's $2M+ segment benefits from dual-state opportunity: Missouri's lower property taxes and Kansas' top-rated Blue Valley schools create distinct buyer corridors."
    whyContact="Kansas City's luxury market spans two states, three counties, and dozens of distinct neighborhoods — making local expertise non-negotiable. The agents featured here hold ReeceNichols, Compass, and Sotheby's production records with deep networks spanning Mission Hills country clubs, Sprint Campus executives, and the metro's growing tech and healthcare sectors."
    agents={agents}
  />
);

export default KansasCityAgents;
