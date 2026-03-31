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
    region="Illinois, United States"
    heroImage="https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=1920&h=1080&fit=crop"
    intro="Chicago's luxury real estate market ranks among America's most dynamic, spanning landmark Gold Coast mansions overlooking Lake Michigan, modernist Lakeview penthouses with sweeping skyline views, and tree-lined Lincoln Park brownstones that blend historic architecture with contemporary living. The city's top-producing agents collectively represent over $5 billion in luxury residential sales, commanding a market where median luxury home prices exceed $2.8 million."
    whyContact="Whether you're acquiring a North Shore estate or marketing a Streeterville penthouse, these elite Chicago agents bring the pricing intelligence, buyer networks, and marketing infrastructure that luxury properties demand. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign — boutique branding that turns heads at the curb and dominates online."
    agents={agents}
  />
);

export default ChicagoAgents;
