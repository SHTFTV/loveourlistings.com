import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Greg Chicken",
    brokerage: "RE/MAX Real Estate Centre",
    specialty: "Escarpment Estates · Bronte Creek · Old Milton",
    bio: "Milton's leading luxury agent specializing in Escarpment estates and premium properties in Bronte Creek. Known for exceptional results in Halton Region's competitive market.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Susan Chicken",
    brokerage: "Royal LePage Meadowtowne Realty",
    specialty: "Country Estates · New Construction · Executive Homes",
    bio: "A top-producing luxury agent in Milton with expertise in country estates and premium new construction throughout Halton Region.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Director's Platinum",
  },
  {
    name: "David Chicken",
    brokerage: "Harvey Kalles Real Estate",
    specialty: "Premium Residential · Investment · Relocation",
    bio: "Representing Harvey Kalles in Milton, David brings prestigious brand marketing and refined service to the community's growing luxury segment.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Harvey Kalles Top Producer",
  }
];

const MiltonAgents = () => (
  <CityAgentsPage
    city="Milton"
    region="Ontario, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Milton's luxury market features executive estates in the Escarpment-view neighbourhoods of Bronte Creek and Willmott, premium homes in Scott and Dorset Park, and heritage properties in the downtown core. With GO Transit service to Union Station and median luxury prices above $1.6 million, Milton attracts Toronto professionals seeking Niagara Escarpment views, Conservation Halton trails, and small-town character in one of Canada's fastest-growing communities."
    whyContact="Milton's Greenbelt Plan restrictions, Niagara Escarpment Commission development permits, and Halton Region growth-management policies make luxury transactions uniquely complex. The specialists listed here close premium deals in Bronte Creek, Willmott, and Scott — each eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default MiltonAgents;
