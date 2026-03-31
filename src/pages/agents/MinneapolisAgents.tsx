import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "John Wanninger",
    brokerage: "Lakes Sotheby's International Realty",
    specialty: "Lake Minnetonka · Kenwood · Wayzata",
    bio: "The Twin Cities' leading luxury agent, John Wanninger dominates the Lake Minnetonka market with Sotheby's global reach and deep local expertise.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  },
  {
    name: "Kerby Skurat",
    brokerage: "Compass",
    specialty: "Edina · Southwest Minneapolis · Lakefront",
    bio: "A top-producing luxury agent with Compass in Minneapolis, Kerby brings exceptional marketing to Edina and the city's lakefront properties.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Compass Top Producer",
  },
  {
    name: "Vicky Andrews",
    brokerage: "Berkshire Hathaway HomeServices",
    specialty: "Linden Hills · Country Club · Estate Properties",
    bio: "A trusted name in Twin Cities luxury real estate, Vicky brings Berkshire Hathaway's prestigious brand to Minneapolis' finest properties.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Chairman's Circle Platinum",
  }
];

const MinneapolisAgents = () => (
  <CityAgentsPage
    city="Minneapolis"
    region="Minnesota, United States"
    heroImage="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1920&h=1080&fit=crop"
    intro="Minneapolis' luxury market features stunning lakefront estates on Lake Minnetonka, historic mansions in Kenwood, and premium properties in the city's most prestigious neighborhoods."
    whyContact="Whether you're buying or selling luxury property in Minneapolis, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default MinneapolisAgents;
