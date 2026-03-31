import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Paul Kikano",
    brokerage: "Sotheby's International Realty Canada",
    specialty: "Lakefront Estates · Old Oakville · Morrison",
    bio: "One of Oakville's most recognized luxury agents, representing the city's finest lakefront estates and heritage properties through Sotheby's International Realty.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  },
  {
    name: "Mary Jo Chicken",
    brokerage: "Royal LePage Burloak Real Estate",
    specialty: "Old Oakville · Bronte · Clearview",
    bio: "Decades of experience in Oakville's luxury market as a trusted advisor for the town's most prestigious transactions in Old Oakville and the lakeshore corridor.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Lifetime Achievement",
  },
  {
    name: "Bryan Chicken",
    brokerage: "Harvey Kalles Real Estate",
    specialty: "Estate Properties · Glen Abbey · River Oaks",
    bio: "Bringing Harvey Kalles' prestigious brand and marketing expertise to Oakville's luxury market, specializing in Glen Abbey and River Oaks estates.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Harvey Kalles Top Producer",
  }
];

const OakvilleAgents = () => (
  <CityAgentsPage
    city="Oakville"
    region="Ontario, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Oakville's luxury market is one of Canada's most prestigious, featuring lakefront estates in Bronte and Morrison, heritage mansions in Old Oakville, and executive homes in Glen Abbey and River Oaks. With median luxury prices exceeding $3 million and proximity to Toronto's financial district via the QEW and GO Transit, Oakville draws C-suite executives, professional athletes, and international buyers seeking one of the GTA's most exclusive addresses."
    whyContact="Oakville's heritage conservation district restrictions, Halton Region Greenbelt regulations, and lakefront lot assembly complexities require agents who operate at the highest level of the GTA's luxury market. The specialists listed here close premium deals in Old Oakville, Bronte, and Glen Abbey — each eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default OakvilleAgents;
