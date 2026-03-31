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
    intro="Milwaukee's luxury market features stunning Lake Michigan waterfront estates, historic mansions along Newbold Avenue, and premium homes in Whitefish Bay and River Hills."
    whyContact="Whether you're buying or selling luxury property in Milwaukee, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default MilwaukeeAgents;
