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
    intro="Garden District mansions along St. Charles Avenue trade between $2M and $8M, while French Quarter Creole townhouses with original courtyards command $800+ per square foot. Audubon Place — one of only two private streets in New Orleans — remains the city's most exclusive address, where antebellum architecture meets modern restoration standards governed by the Historic District Landmarks Commission."
    whyContact="New Orleans luxury transactions require agents who understand HDLC renovation restrictions, flood zone insurance (FEMA Zone AE designations), and the nuances of selling historic properties with preservation easements. The professionals featured here hold Sotheby's and Berkshire Hathaway affiliations with deep St. Charles corridor relationships."
    agents={agents}
  />
);

export default NewOrleansAgents;
