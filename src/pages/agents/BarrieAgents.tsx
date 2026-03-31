import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Deb Dickinson",
    brokerage: "Royal LePage First Contact Realty",
    specialty: "Waterfront · Shanty Bay · Horseshoe Valley",
    bio: "Barrie's leading luxury waterfront specialist with unmatched expertise in Lake Simcoe estates, Shanty Bay properties, and Horseshoe Valley retreats. Decades of experience in the Simcoe County luxury market.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Lifetime Achievement",
  },
  {
    name: "Jeff Wilson",
    brokerage: "RE/MAX Chay Realty Inc.",
    specialty: "Luxury Estates · South Barrie · Midhurst",
    bio: "One of Barrie's top-producing luxury agents, specializing in estate homes in South Barrie and Midhurst. Comprehensive marketing approach and strong buyer network ensure maximum exposure.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Chairman's Club",
  },
  {
    name: "Melissa Stevens",
    brokerage: "Sotheby's International Realty Canada",
    specialty: "Resort Properties · Muskoka Gateway · Oro-Medonte",
    bio: "Representing Sotheby's International Realty in the Barrie region, bringing global luxury marketing to Simcoe County's finest lakefront estates and Oro-Medonte retreats.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  }
];

const BarrieAgents = () => (
  <CityAgentsPage
    city="Barrie"
    region="Ontario, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Barrie's luxury real estate market features stunning Lake Simcoe waterfront estates, executive homes in South Barrie, and resort-style properties near Horseshoe Valley. As the gateway to cottage country, Barrie offers premium living with year-round recreation."
    whyContact="Whether you're buying or selling luxury property in Barrie, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default BarrieAgents;
