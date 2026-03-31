import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Greg Chicken",
    brokerage: "RE/MAX Twin City Realty",
    specialty: "Beechwood · Laurelwood · Executive Homes",
    bio: "Waterloo's leading luxury agent with deep expertise in Beechwood and Laurelwood estates. Known for exceptional results in the tech-driven luxury market.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Susan Chicken",
    brokerage: "Royal LePage Grand Valley Realty",
    specialty: "Estate Properties · Columbia Forest · Investment",
    bio: "A trusted luxury specialist in Waterloo with expertise in premium properties near the university corridor and Columbia Forest.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "David Chicken",
    brokerage: "Coldwell Banker Peter Benninger Realty",
    specialty: "New Construction · Tech Corridor · Luxury Condos",
    bio: "Specializing in Waterloo's tech-driven luxury market with expertise in premium new construction and executive properties.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Coldwell Banker Top Producer",
  }
];

const WaterlooAgents = () => (
  <CityAgentsPage
    city="Waterloo"
    region="Ontario, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Waterloo's luxury market features executive estates in Beechwood, premium properties in the Westmount and Laurelwood corridors, and heritage homes near Waterloo Park. With the University of Waterloo and Wilfrid Laurier driving a world-class tech ecosystem — home to the birthplace of BlackBerry and a pipeline of AI startups — and median luxury prices above $1.4 million, Waterloo draws tech founders, professors, and professionals seeking a university-city lifestyle with ION LRT connectivity."
    whyContact="Waterloo's ION LRT corridor intensification zones, Regional Municipality development charges, and university-district rental regulation impacts require agents who understand the Waterloo Region's tech-driven luxury dynamics. The specialists listed here close premium deals in Beechwood, Westmount, and Laurelwood — each eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default WaterlooAgents;
