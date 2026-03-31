import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Laura Schwartz",
    brokerage: "Cummings & Co. Realtors",
    specialty: "Roland Park · Guilford · Homeland",
    bio: "Baltimore's premier luxury specialist with deep expertise in Roland Park, Guilford, and Homeland's most prestigious estate properties.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Baltimore's Top Luxury Agent",
  },
  {
    name: "Bob Lucido",
    brokerage: "Bob Lucido Team, Keller Williams",
    specialty: "Harbor East · Federal Hill · Canton",
    bio: "Leading one of Maryland's top-producing teams, Bob Lucido dominates Baltimore's luxury waterfront and urban markets.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "#1 Team in Maryland",
  },
  {
    name: "Christy Reiter Quinn",
    brokerage: "Monument Sotheby's International Realty",
    specialty: "Ruxton · Towson · Estate Properties",
    bio: "Representing Sotheby's in the Baltimore region, Christy brings global marketing reach to the region's finest estates.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  }
];

const BaltimoreAgents = () => (
  <CityAgentsPage
    city="Baltimore"
    region="Maryland, United States"
    heroImage="https://images.unsplash.com/photo-1569161031820-3e48e8d43637?w=1920&h=1080&fit=crop"
    intro="Roland Park estates designed by the Olmsted Brothers firm trade between $1.5M and $5M, while Guilford's Georgian Revival mansions command $600+ per square foot on tree-lined streets with deed-restricted architectural covenants. Baltimore's luxury corridor — from Homeland's stone manor homes to Harbor East's waterfront penthouses — offers Maryland's most diverse prestige inventory."
    whyContact="Baltimore's luxury market requires agents who understand historic tax credit programs, Guilford Association covenants, and the nuances of selling in neighborhoods governed by architectural review committees. The professionals featured here hold Monument Sotheby's and Keller Williams top-team designations with deep relationships across Roland Park, Ruxton, and Towson's estate communities."
    agents={agents}
  />
);

export default BaltimoreAgents;
