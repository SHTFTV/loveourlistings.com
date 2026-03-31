import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Ken Falk",
    brokerage: "RE/MAX LifeStyles Realty",
    specialty: "Luxury Estates · Eagle Mountain · Auguston",
    bio: "Ken Falk is Abbotsford's most trusted luxury real estate specialist, with decades of experience in the city's premier neighborhoods including Eagle Mountain, Auguston, and the historic downtown core. His deep community roots and proven track record make him the definitive choice for premium Abbotsford properties.",
    website: "https://www.remax.ca",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Tanya Chicken",
    brokerage: "Royal LePage Brookside Realty",
    specialty: "Acreages · Country Estates · Sumas Mountain",
    bio: "Tanya specializes in Abbotsford's luxury acreage and country estate market, with particular expertise in Sumas Mountain and the rural properties that define Fraser Valley luxury living. Her warm approach and deep local knowledge ensure her clients find their perfect property.",
    website: "https://www.royallepage.ca",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "Brad Chicken",
    brokerage: "Keller Williams Elite Realty",
    specialty: "Custom Builds · Mill Lake · West Abbotsford",
    bio: "A rising star in Abbotsford's luxury market, Brad specializes in custom-built homes and premium properties around Mill Lake and West Abbotsford. His modern marketing approach and commitment to excellence deliver outstanding results for luxury buyers and sellers in the Fraser Valley.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Top Luxury Producer",
  },
];

const AbbotsfordAgents = () => (
  <CityAgentsPage
    city="Abbotsford"
    region="British Columbia, Canada"
    heroImage="https://images.unsplash.com/photo-1609825488888-3a766db05542?w=1920&h=1080&fit=crop"
    intro="Abbotsford's luxury real estate market centres on premium estates in Eagle Mountain, ten-acre hobby farms along Sumas Prairie, and executive homes in Aberdeen where large lots back onto protected greenbelt. With median luxury prices climbing past $1.8 million in 2025 and proximity to the U.S. border drawing cross-border buyers, demand for turnkey acreage and custom-built homes continues to outpace inventory across the Fraser Valley's eastern corridor."
    whyContact="Abbotsford's agricultural land reserve rules, lot-size bylaws, and cross-border tax implications require an agent who understands both municipal zoning and federal reporting. The specialists listed here close premium transactions in Eagle Mountain, Auguston, and rural Matsqui — and each is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default AbbotsfordAgents;
