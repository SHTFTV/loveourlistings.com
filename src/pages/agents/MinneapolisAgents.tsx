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
    intro="Lake Minnetonka's 14,000-acre shoreline estates trade between $3M and $20M in Wayzata, Orono, and Deephaven, while Kenwood's historic mansions near the Walker Art Center average $1,200+ per square foot. Minneapolis' Fortune 500 density — home to Target, UnitedHealth, 3M, and General Mills — creates a steady pipeline of C-suite buyers seeking lakefront, golf-course, and Edina estate-level properties."
    whyContact="The Twin Cities' $3M+ luxury market requires agents who understand corporate-relocation timelines, Lake Minnetonka's complex shoreline regulations, and Minnesota's unique estate-tax implications. The agents featured here hold Lakes Sotheby's, Compass, and Berkshire Hathaway production records with verified networks spanning the metro's Fortune 500 executive buyer pool."
    agents={agents}
  />
);

export default MinneapolisAgents;
