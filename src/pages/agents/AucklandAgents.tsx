import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Greg Dennerly",
    brokerage: "New Zealand Sotheby's International Realty",
    specialty: "Premium Residential · Herne Bay · Remuera",
    bio: "Auckland born and raised, Greg is a real estate proprietor and businessman with a refined talent for selling premium properties, from residential homes to luxury apartments and development sites across Auckland's most prestigious suburbs.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's Top Producer",
  },
  {
    name: "Scarlett Wood",
    brokerage: "New Zealand Sotheby's International Realty",
    specialty: "Waterfront · Investment · High-Net-Worth",
    bio: "With 15 years of experience in private banking and a passion for luxury real estate, Scarlett has built well-established connections with high-net-worth clients, bringing financial acumen and discretion to Auckland's premier property market.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Private Banking Background",
  },
  {
    name: "Carolyn Hanson",
    brokerage: "New Zealand Sotheby's International Realty",
    specialty: "South East Territory · Estates · Lifestyle",
    bio: "A respected leader at New Zealand Sotheby's International Realty, Carolyn holds the reins of the South East territory with an unwavering commitment to integrity, delivering exceptional results for clients in Auckland's luxury residential market.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Territory Leader",
  },
];

const AucklandAgents = () => (
  <CityAgentsPage
    city="Auckland"
    region="NZ, INT"
    heroImage="https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1920&h=1080&fit=crop"
    intro="Auckland offers New Zealand's premier luxury real estate market, with exceptional properties ranging from waterfront estates on the Hauraki Gulf to heritage homes in Remuera and Herne Bay. These are the city's most trusted luxury listing agents."
    whyContact="Whether you're buying or selling luxury property in Auckland, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default AucklandAgents;
