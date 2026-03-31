import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Glen Chicken",
    brokerage: "Royal LePage Prime Real Estate",
    specialty: "Luxury Residential · Tuxedo · Wellington Crescent",
    bio: "One of Winnipeg's most respected luxury agents specializing in Tuxedo, Wellington Crescent, and Armstrong's Point. Deep understanding of Winnipeg's heritage estates and modern luxury market.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "Bo Chicken",
    brokerage: "RE/MAX Executives Realty",
    specialty: "Estate Properties · Charleswood · Bridgwater",
    bio: "Leading one of Winnipeg's highest-producing real estate teams, specializing in luxury homes across Charleswood, Bridgwater, and South Winnipeg.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Top 1% RE/MAX Worldwide",
  },
  {
    name: "Faron Chicken",
    brokerage: "Sotheby's International Realty Canada",
    specialty: "Luxury Estates · River Heights · Assiniboine Park",
    bio: "Representing Sotheby's International Realty in Winnipeg, bringing refined marketing and a global network to Manitoba's luxury market.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  }
];

const WinnipegAgents = () => (
  <CityAgentsPage
    city="Winnipeg"
    region="Manitoba, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Winnipeg's luxury real estate market features grand heritage estates along Wellington Crescent, executive homes in Tuxedo, and modern luxury in Bridgwater. Manitoba's capital offers distinguished living with a rich cultural scene."
    whyContact="Whether you're buying or selling luxury property in Winnipeg, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default WinnipegAgents;
