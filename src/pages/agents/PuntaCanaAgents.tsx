import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Melissa Conde",
    brokerage: "MC Punta Cana Realty",
    specialty: "Luxury Condos · Villas · Beachfront",
    bio: "Born in Honduras and drawn to the Dominican Republic's potential, Melissa founded MC Punta Cana Realty and has become one of the region's most prolific luxury agents, specializing in resort-style residences and investment properties.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "CEO & Founder",
  },
  {
    name: "Salvatore Balzano",
    brokerage: "MC Punta Cana Realty",
    specialty: "Villas · Investment · Italian Expertise",
    bio: "Born and raised in Northern Italy, Salvatore brings a European perspective to Punta Cana's luxury market. His passion for fine living and deep knowledge of the Dominican Republic's premier developments make him a sought-after advisor for international buyers.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "International Specialist",
  },
  {
    name: "Johanna Frischbutter",
    brokerage: "Turnkey in Punta Cana",
    specialty: "Relocation · Resort Properties · New Construction",
    bio: "Originally from Canada, Johanna has enjoyed Caribbean life since 1981. Her career as a destination supervisor across sunny locales led her to the Dominican Republic, where she now excels in luxury real estate and relocation services.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Relocation Expert",
  },
];

const PuntaCanaAgents = () => (
  <CityAgentsPage
    city="Punta Cana"
    region="DO, INT"
    heroImage="https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&h=1080&fit=crop"
    intro="Punta Cana offers a distinguished luxury real estate market with exceptional beachfront villas, resort residences, and investment properties along the Dominican Republic's stunning Caribbean coastline. These are the region's most trusted luxury listing agents."
    whyContact="Whether you're buying or selling luxury property in Punta Cana, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default PuntaCanaAgents;
