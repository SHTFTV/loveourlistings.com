import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Dina Gorgos",
    brokerage: "RE/MAX Realtron Realty Inc.",
    specialty: "Luxury Residential · Lorne Park · Mineola",
    bio: "One of Mississauga's most accomplished luxury agents, Dina Gorgos specializes in the city's premier waterfront and estate communities. Her deep knowledge of Lorne Park, Mineola, and Port Credit has made her the go-to agent for high-end transactions in the western GTA.",
    website: "https://www.dinagorgos.com",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Top 1% Mississauga Agent",
  },
  {
    name: "Amar Kang",
    brokerage: "Royal LePage Credit Valley Real Estate",
    specialty: "Estate Homes · New Construction · Investment",
    bio: "A dominant force in Mississauga real estate, Amar Kang leads one of the city's top-producing teams. Known for his strategic marketing approach and extensive network, he consistently delivers exceptional results for luxury buyers and sellers across the GTA.",
    website: "https://www.royallepage.ca",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Chairman's Club",
  },
  {
    name: "Rina DiRisio",
    brokerage: "Sotheby's International Realty Canada",
    specialty: "Waterfront · Port Credit · Clarkson",
    bio: "With Sotheby's International Realty Canada, Rina DiRisio brings refined marketing and global exposure to Mississauga's finest properties. Her specialization in waterfront estates and Port Credit luxury homes has earned her a loyal clientele among the city's most discerning residents.",
    website: "https://sothebysrealty.ca",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  },
];

const MississaugaAgents = () => (
  <CityAgentsPage
    city="Mississauga"
    region="Ontario, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="Mississauga's luxury real estate market features stunning lakefront estates in Lorne Park, executive homes in Mineola, and sophisticated condos along the waterfront. As the GTA's third-largest city, it attracts discerning buyers seeking premium living with proximity to Toronto."
    whyContact="Whether you're buying or selling luxury property in Mississauga, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default MississaugaAgents;
