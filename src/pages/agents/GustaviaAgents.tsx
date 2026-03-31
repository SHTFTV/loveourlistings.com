import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Zarek Honneysett",
    brokerage: "Sibarth Real Estate (Christie's Affiliate)",
    specialty: "Luxury Villas · Waterfront Estates · Investment",
    bio: "Named to the Christie's International Real Estate 2024 Masters Circle, Zarek is one of St. Barths' most acclaimed luxury agents, meeting rigorous standards for sales volume, client service, and professional excellence on the island.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Christie's Masters Circle 2024",
  },
  {
    name: "Gabriel Montigny",
    brokerage: "Coldwell Banker St. Barths",
    specialty: "Hillside Villas · Ocean View · Estates",
    bio: "With 45+ luxury listings across St. Barths, Gabriel is one of the island's most active agents, offering bilingual service in English and French to an international clientele seeking the finest properties in Gustavia and beyond.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Top Listing Agent",
  },
  {
    name: "Marion Sautereau",
    brokerage: "Corcoran St Barth",
    specialty: "Beachfront · Luxury Rentals · Villa Sales",
    bio: "Representing Corcoran's prestigious St. Barth office, Marion brings refined taste and deep local knowledge to the island's most sought-after villa sales and investment opportunities for high-net-worth clients.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Corcoran Elite Agent",
  },
];

const GustaviaAgents = () => (
  <CityAgentsPage
    city="Gustavia"
    region="BL, INT"
    heroImage="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1920&h=1080&fit=crop"
    intro="St. Barthélemy is the world's most exclusive island real estate market per square metre — a 25-square-kilometre French collectivity where only 1,000 properties exist and virtually none are available at any given time. Gustavia harbour villas start at €5M and hilltop estates in Lurin and Colombier regularly surpass €30M. Strict building codes limit construction to two storeys, preserving the island's intimate character. French property law, SCI ownership structures, and the island's unique tax-free status within the EU create a legal landscape that demands true specialist guidance."
    whyContact="St. Barths transactions operate under French notarial law with unique Caribbean adaptations — from the droits d'enregistrement transfer tax to the complexities of SCI (Société Civile Immobilière) ownership for international buyers. These agents command the island's most coveted off-market inventory, maintain relationships with the legacy families who control Flamands and Gouverneur beachfront, and deliver discretion at the highest level. Each agent is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default GustaviaAgents;
