import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Kristin Gentry",
    brokerage: "F.C. Tucker Company",
    specialty: "Meridian-Kessler · Carmel · Zionsville",
    bio: "Indianapolis' top luxury specialist, Kristin Gentry brings deep expertise to Meridian-Kessler, Carmel, and Zionsville's finest properties.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "F.C. Tucker Top Producer",
  },
  {
    name: "Scott Byers",
    brokerage: "Compass",
    specialty: "Geist · Fishers · Estate Properties",
    bio: "A leading Indianapolis luxury agent with Compass, Scott specializes in Geist waterfront and Fishers executive properties.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Compass Top Producer",
  },
  {
    name: "Jennifer Piekarski",
    brokerage: "Sotheby's International Realty",
    specialty: "Historic Homes · Butler-Tarkington · Investment",
    bio: "Representing Sotheby's in Indianapolis, Jennifer brings global marketing to the city's historic luxury properties.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  }
];

const IndianapolisAgents = () => (
  <CityAgentsPage
    city="Indianapolis"
    region="Indiana, United States"
    heroImage="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1920&h=1080&fit=crop"
    intro="Indianapolis' luxury market features grand estates in Meridian-Kessler, premium properties in Carmel and Zionsville, and elegant homes along the city's historic boulevards."
    whyContact="Whether you're buying or selling luxury property in Indianapolis, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default IndianapolisAgents;
