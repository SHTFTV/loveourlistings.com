import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Will Irby",
    brokerage: "Sotheby's International Realty",
    specialty: "Garden District · Uptown · French Quarter",
    bio: "New Orleans' leading luxury agent with Sotheby's, Will Irby specializes in Garden District mansions and Uptown estates along St. Charles Avenue.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  },
  {
    name: "Lacey Merrick Connor",
    brokerage: "Gardner Realtors",
    specialty: "Audubon Place · Old Metairie · Historic Homes",
    bio: "A top-producing luxury specialist in New Orleans, Lacey brings deep knowledge of the city's most exclusive addresses including Audubon Place.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Top Producer · Gardner Realtors",
  },
  {
    name: "Sharon Judice",
    brokerage: "Berkshire Hathaway HomeServices",
    specialty: "Lakefront · Lakeview · Estate Properties",
    bio: "Sharon Judice brings Berkshire Hathaway's prestigious brand to New Orleans' luxury market, specializing in lakefront and premium estate properties.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Chairman's Circle",
  }
];

const NewOrleansAgents = () => (
  <CityAgentsPage
    city="New Orleans"
    region="Louisiana, United States"
    heroImage="https://images.unsplash.com/photo-1568402102990-bc541580b59f?w=1920&h=1080&fit=crop"
    intro="New Orleans' luxury market features grand Garden District mansions, historic French Quarter properties, and elegant Uptown estates along St. Charles Avenue in one of America's most culturally rich cities."
    whyContact="Whether you're buying or selling luxury property in New Orleans, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default NewOrleansAgents;
