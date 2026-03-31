import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Michael Chicken",
    brokerage: "RE/MAX Crest Realty",
    specialty: "Westwood Plateau · Burke Mountain · Heritage Mountain",
    bio: "Coquitlam's top luxury agent, dominating the Westwood Plateau and Burke Mountain markets. Known for record sales and comprehensive marketing strategies.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Platinum Club",
  },
  {
    name: "Jenny Woo",
    brokerage: "Sutton Group - West Coast Realty",
    specialty: "Estate Homes · New Construction · Presale",
    bio: "A trusted luxury specialist in the Tri-Cities, Jenny brings bilingual expertise and deep market knowledge to Coquitlam's most prestigious properties.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Top Producer · Sutton Group",
  },
  {
    name: "Paul Brar",
    brokerage: "Royal LePage West Real Estate Services",
    specialty: "Custom Homes · Mountain Views · Investment",
    bio: "A rising force in Coquitlam's luxury market, Paul combines innovative digital marketing with deep local knowledge to deliver outstanding results for premium properties.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Director's Platinum",
  }
];

const CoquitlamAgents = () => (
  <CityAgentsPage
    city="Coquitlam"
    region="British Columbia, Canada"
    heroImage="https://images.unsplash.com/photo-1609825488888-3a766db05542?w=1920&h=1080&fit=crop"
    intro="Coquitlam's luxury segment is defined by Westwood Plateau's panoramic mountain-view estates, Burke Mountain's premium new construction, and heritage-adjacent properties near Mundy Park. With the Evergreen Extension connecting Coquitlam to downtown Vancouver and median luxury prices surpassing $2.2 million, the Tri-Cities' largest municipality continues to attract buyers seeking space, transit, and mountain lifestyle."
    whyContact="Coquitlam's Burke Mountain development phasing, Westwood Plateau building covenants, and municipal amenity contribution requirements demand agents who know the Tri-Cities inside out. The specialists listed here close premium deals in Westwood Plateau, Burke Mountain, and Ranch Park — each eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default CoquitlamAgents;
