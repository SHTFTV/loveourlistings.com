import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Mike Dopp",
    brokerage: "Compass",
    specialty: "North Shore · Whitefish Bay · River Hills",
    bio: "Milwaukee's top luxury agent with Compass, Mike Dopp specializes in the North Shore communities and Lake Michigan waterfront properties.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Compass Top Producer",
  },
  {
    name: "Suzanne Powers",
    brokerage: "Shorewest Realtors",
    specialty: "East Side · Historic Homes · Lakefront",
    bio: "A leading Milwaukee luxury agent with Shorewest, Suzanne brings deep expertise to the city's East Side and historic luxury properties.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Shorewest Top Producer",
  },
  {
    name: "Mark Monahan",
    brokerage: "Keller Williams Realty",
    specialty: "Brookfield · Elm Grove · Mequon",
    bio: "Specializing in Milwaukee's premier western suburbs, Mark brings strong marketing and market expertise to Brookfield and Elm Grove estates.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Keller Williams Luxury",
  }
];

const MilwaukeeAgents = () => (
  <CityAgentsPage
    city="Milwaukee"
    region="Wisconsin, United States"
    heroImage="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1920&h=1080&fit=crop"
    intro="River Hills estates on 5-to-20-acre wooded lots trade between $2M and $8M behind Milwaukee's most exclusive gates, while Whitefish Bay's lakefront properties and the North Shore's bluff-top homes command $800+ per square foot with Lake Michigan panoramas. Milwaukee's luxury market offers exceptional value — comparable estate-quality living at 50% below Chicago North Shore pricing — attracting Northwestern Mutual, Kohl's, and Harley-Davidson executives."
    whyContact="Milwaukee's $2M+ segment rewards agents with deep North Shore community knowledge and corporate-relocation expertise. The agents featured here hold Compass, Shorewest, and Keller Williams production records with established networks spanning the metro's manufacturing, finance, and healthcare executive buyer communities."
    agents={agents}
  />
);

export default MilwaukeeAgents;
