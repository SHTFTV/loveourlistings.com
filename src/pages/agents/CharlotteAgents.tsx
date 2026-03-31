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
    intro="Charlotte's luxury market features stately estates in Myers Park, lakefront properties on Lake Norman, and premium homes in SouthPark and Eastover in the Queen City."
    whyContact="Whether you're buying or selling luxury property in Charlotte, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default CharlotteAgents;
