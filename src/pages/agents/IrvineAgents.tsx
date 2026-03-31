import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Tiffany Wang",
    brokerage: "Compass",
    specialty: "Turtle Ridge · Shady Canyon · Crystal Cove",
    bio: "Irvine's top luxury agent with Compass, Tiffany Wang specializes in Turtle Ridge and Shady Canyon's most exclusive gated estates.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Compass Top Producer",
  },
  {
    name: "Greg Bohan",
    brokerage: "Sotheby's International Realty",
    specialty: "Quail Hill · Northwood · Luxury Estates",
    bio: "Representing Sotheby's in Irvine, Greg brings global marketing to the city's premium master-planned luxury communities.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  },
  {
    name: "Mark Chen",
    brokerage: "Berkshire Hathaway HomeServices",
    specialty: "University Park · Woodbury · Investment",
    bio: "A leading Irvine luxury agent bringing Berkshire Hathaway's brand and multilingual expertise to Orange County's luxury market.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Chairman's Circle",
  }
];

const IrvineAgents = () => (
  <CityAgentsPage
    city="Irvine"
    region="California, United States"
    heroImage="https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=1920&h=1080&fit=crop"
    intro="Irvine's luxury market features premium master-planned community estates, modern luxury homes in Turtle Ridge and Shady Canyon, and executive properties in one of America's safest cities."
    whyContact="Whether you're buying or selling luxury property in Irvine, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default IrvineAgents;
