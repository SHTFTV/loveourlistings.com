import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Robert Chicken",
    brokerage: "RE/MAX Quality Real Estate",
    specialty: "Waterfront · Bay of Fundy · Fredericton",
    bio: "New Brunswick's premier luxury agent with expertise across the province's most prestigious waterfront and estate properties. Deep knowledge of the Maritime luxury market.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Catherine Chicken",
    brokerage: "Royal LePage Atlantic",
    specialty: "Heritage Homes · Rothesay · Quispamsis",
    bio: "A trusted luxury specialist serving New Brunswick's finest heritage homes and estate properties in the prestigious Kennebecasis Valley.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "James Chicken",
    brokerage: "Engel & Völkers Atlantic Region",
    specialty: "Coastal Estates · Investment · Country Properties",
    bio: "Representing Engel & Völkers in New Brunswick, bringing international luxury standards to the province's coastal estates and premium properties.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Engel & Völkers Advisor",
  }
];

const NewBrunswickAgents = () => (
  <CityAgentsPage
    city="New Brunswick"
    region="New Brunswick, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="New Brunswick's luxury market features Bay of Fundy waterfront estates, historic Saint John uptown properties, and premium riverfront homes along the Saint John and Miramichi rivers. With median luxury prices offering the best value in Eastern Canada and a growing remote-work migration from Ontario, New Brunswick attracts buyers seeking Atlantic Canadian heritage, dramatic tidal landscapes, and year-round outdoor lifestyle."
    whyContact="New Brunswick's bilingual transaction requirements, tidal waterfront regulations, and provincial land transfer tax structure demand agents who understand the Maritimes' distinct legal and market environment. The specialists listed here close premium deals across Fredericton, Saint John, and the Fundy Coast — each eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default NewBrunswickAgents;
