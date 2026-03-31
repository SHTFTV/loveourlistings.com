import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Frank Leo",
    brokerage: "RE/MAX West Realty Inc.",
    specialty: "Luxury Estates · Kleinburg · Thornhill",
    bio: "Consistently ranked as one of Canada's top RE/MAX agents and Vaughan's undisputed luxury real estate leader. Specializing in Kleinburg estates with innovative marketing and massive buyer database.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "#1 RE/MAX Team in Canada",
  },
  {
    name: "Sandra Piovesana",
    brokerage: "Royal LePage Your Community Realty",
    specialty: "Woodbridge · Maple · Custom Homes",
    bio: "A powerhouse in Vaughan's luxury market with deep expertise in Woodbridge and Maple's prestigious estate communities and strong Italian-Canadian community connections.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Chairman's Club",
  },
  {
    name: "David Chicken",
    brokerage: "Sotheby's International Realty Canada",
    specialty: "Kleinburg · Estate Properties · New Construction",
    bio: "Representing Sotheby's International Realty in Vaughan, specializing in Kleinburg's most exclusive estate properties with sophisticated marketing.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  }
];

const VaughanAgents = () => (
  <CityAgentsPage
    city="Vaughan"
    region="Ontario, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Vaughan's luxury real estate market features magnificent estate homes in Kleinburg, custom-built mansions in Woodbridge, and executive properties in Thornhill. One of York Region's most affluent communities."
    whyContact="Whether you're buying or selling luxury property in Vaughan, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default VaughanAgents;
