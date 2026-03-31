import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Carrie McCormick",
    brokerage: "@properties Christie's International Real Estate",
    specialty: "Gold Coast · Lincoln Park · North Shore",
    bio: "Recognized as Chicago's #1 individual luxury real estate broker with more than $2.5 billion in career sales and 24+ years of proven success, Carrie provides white-glove real estate concierge service to high-net-worth individuals, CEOs, and global investors.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "#1 Chicago Luxury Broker · $2.5B+ Sales",
  },
  {
    name: "Leigh Marcus",
    brokerage: "@properties Christie's International Real Estate",
    specialty: "North Shore · Luxury Homes · New Construction",
    bio: "Leading one of Chicago's top luxury teams, Leigh Marcus is renowned for his innovative marketing strategies and deep expertise in both Chicago's urban luxury market and the prestigious North Shore suburbs.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Top Luxury Team Leader",
  },
  {
    name: "Chicago Association Top Producers",
    brokerage: "Various Premier Brokerages",
    specialty: "Streeterville · Lakeview · River North",
    bio: "The Chicago Association of REALTORS® recognizes top producers annually for superior market knowledge, mastery of technology, and exceptional service. These elite agents represent the highest level of professionalism in Chicagoland real estate.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "CAR Top Producer Award",
  },
];

const ChicagoAgents = () => (
  <CityAgentsPage
    city="Chicago"
    region="IL, US"
    heroImage="https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=1920&h=1080&fit=crop"
    intro="Chicago offers a distinguished luxury real estate market with exceptional properties ranging from Gold Coast mansions to modern high-rise penthouses along Lake Michigan. These are the city's most trusted luxury listing agents — professionals who consistently deliver results for discerning buyers and sellers."
    whyContact="Whether you're buying or selling luxury property in Chicago, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default ChicagoAgents;
