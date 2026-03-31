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
    intro="Meridian-Kessler's stately homes along the historic Meridian Street corridor trade between $1M and $4M, while Carmel's Village of WestClay and Zionsville's estate-lot properties command $500+ per square foot. Indianapolis offers the Midwest's strongest luxury value proposition — comparable estate-quality living at 40% below Chicago pricing — attracting Eli Lilly, Salesforce, and motorsport-industry executives."
    whyContact="Indianapolis' $1.5M+ segment grew 19% in 2025, driven by corporate headquarters expansions and the city's affordability advantage over coastal markets. The agents featured here hold F.C. Tucker, Compass, and Sotheby's production records with deep Carmel, Geist waterfront, and Hamilton County executive buyer networks."
    agents={agents}
  />
);

export default IndianapolisAgents;
