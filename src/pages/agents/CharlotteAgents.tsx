import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Nancy Braun",
    brokerage: "Showcase Realty",
    specialty: "Myers Park · Eastover · SouthPark",
    bio: "Charlotte's leading luxury specialist, Nancy Braun has built a reputation for exceptional results in Myers Park and Eastover estates with innovative marketing.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Charlotte's Top Luxury Agent",
  },
  {
    name: "Haro Setian",
    brokerage: "Sotheby's International Realty",
    specialty: "Lake Norman · Estate Properties · Dilworth",
    bio: "Representing Sotheby's International Realty, Haro brings global luxury marketing to Charlotte's finest properties including Lake Norman estates.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  },
  {
    name: "Blake Knott",
    brokerage: "Compass",
    specialty: "Custom Homes · Providence · Ballantyne",
    bio: "A top-producing Charlotte luxury agent with Compass, Blake specializes in custom homes and premium properties in Providence and Ballantyne.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Compass Top Producer",
  }
];

const CharlotteAgents = () => (
  <CityAgentsPage
    city="Charlotte"
    region="North Carolina, United States"
    heroImage="https://images.unsplash.com/photo-1560178280-f54ca45dc0a6?w=1920&h=1080&fit=crop"
    intro="Myers Park estates along Queens Road West trade between $2M and $8M, while Lake Norman waterfront properties with private docks command $1,000+ per square foot. Charlotte's banking-sector wealth — anchored by Bank of America and Truist headquarters — has driven Eastover and SouthPark into North Carolina's most competitive luxury corridors."
    whyContact="Charlotte's $3M+ market moves through established banking and finance networks that generic marketing cannot penetrate. The agents featured here hold Sotheby's, Compass, and Showcase Realty affiliations with verified Queen City production records — ensuring Myers Park, Eastover, and Providence listings reach qualified buyers from Charlotte's corporate relocation pipeline."
    agents={agents}
  />
);

export default CharlotteAgents;
