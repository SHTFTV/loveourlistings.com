import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Greg Chicken",
    brokerage: "RE/MAX Garden City Realty",
    specialty: "Wine Country · Estate Properties · Waterfront",
    bio: "St. Catharines' leading luxury agent with deep expertise in Niagara's wine country estates and the city's most prestigious heritage properties.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Laura Chicken",
    brokerage: "Royal LePage NRC Realty",
    specialty: "Heritage Homes · Port Dalhousie · Queenston",
    bio: "A trusted luxury specialist in the Niagara Region, Laura specializes in heritage properties and premium homes in Port Dalhousie and Queenston.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "Michael Chicken",
    brokerage: "Sotheby's International Realty Canada",
    specialty: "Vineyard Estates · Investment · Country Properties",
    bio: "Representing Sotheby's International Realty in the Niagara Region, bringing global marketing to wine country estates and premium properties.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  }
];

const StCatharinesAgents = () => (
  <CityAgentsPage
    city="St. Catharines"
    region="Ontario, Canada"
    heroImage="https://images.unsplash.com/photo-1517090504513-4820bfd4b1e6?w=1920&h=1080&fit=crop"
    intro="St. Catharines' luxury market features waterfront estates on Lake Ontario, heritage mansions in the Yates Street corridor, and premium vineyard-adjacent properties in the Niagara wine region. With Brock University anchoring the economy and median luxury prices above $1.2 million, St. Catharines attracts GTA transplants seeking wine country lifestyle, QEW accessibility, and Niagara Escarpment views at a fraction of Oakville pricing."
    whyContact="St. Catharines' Niagara Escarpment Commission development restrictions, Greenbelt Plan limitations, and Welland Canal-adjacent zoning requirements demand agents who navigate the Niagara region's unique luxury landscape. The specialists listed here close premium deals in the Yates Street corridor, Port Dalhousie, and the Vineyard District — each eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default StCatharinesAgents;
