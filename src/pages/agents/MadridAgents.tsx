import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Ramón de Salas",
    brokerage: "De Salas International Realty",
    specialty: "Luxury Homes · La Moraleja · Puerta de Hierro · Salamanca",
    bio: "With over 35 years of experience, Ramón de Salas leads Madrid's most trusted family-owned luxury real estate agency. Winner of the Luxury Lifestyle Award for Top 100 Real Estate Brokers, he specializes in the city's most exclusive residential areas — La Moraleja, Puerta de Hierro, and the Salamanca district — serving Spain's elite and international buyers.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "35+ Years · Luxury Lifestyle Award Winner",
  },
  {
    name: "Alexander Vaughan",
    brokerage: "Lucas Fox International Properties",
    specialty: "Prime Residential · New Development · Investment",
    bio: "Co-founder of Lucas Fox, Spain's leading international luxury property consultancy, Alexander Vaughan has built one of the country's most respected real estate brands. The Madrid office handles prime residential sales, new developments, and investment properties across the capital's most prestigious neighborhoods for a global clientele.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Co-Founder · Spain's Leading Consultancy",
  },
  {
    name: "María García-Moncó",
    brokerage: "Engel & Völkers Madrid",
    specialty: "Barrio de Salamanca · Chamberí · Jerónimos · Retiro",
    bio: "Leading the Engel & Völkers Madrid team, María García-Moncó brings deep expertise in the capital's golden mile — the Barrio de Salamanca and surrounding luxury districts. With the backing of Engel & Völkers' global network of over 1,000 offices, she connects Madrid's finest properties with qualified international buyers.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Engel & Völkers · Golden Mile Expert",
  },
];

const MadridAgents = () => (
  <CityAgentsPage
    city="Madrid"
    region="ES, INT"
    heroImage="https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1920&h=1080&fit=crop"
    intro="Madrid's luxury real estate market blends regal elegance with modern sophistication. From the tree-lined boulevards of the Barrio de Salamanca to the exclusive gated estates of La Moraleja and Puerta de Hierro, Spain's capital offers some of Europe's most prestigious addresses at exceptional value compared to London or Paris."
    whyContact="Whether you're acquiring a grand apartment in Salamanca or selling an estate in La Moraleja, these elite Madrid agents bring deep local expertise and international reach. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default MadridAgents;
