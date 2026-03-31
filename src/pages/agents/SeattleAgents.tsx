import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Amy Thompson",
    brokerage: "Realogics Sotheby's International Realty",
    specialty: "Bellevue · Mercer Island · Waterfront",
    bio: "Winner of the Best Seattle Agent and Best Bellevue Agent awards from WalletHub, Amy has built a reputation for delivering exceptional results, with listings that consistently sell quickly and at prices beating neighborhood benchmarks.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Best Seattle Agent · Best Bellevue Agent",
  },
  {
    name: "Moira Holley",
    brokerage: "Realogics Sotheby's International Realty",
    specialty: "Capitol Hill · Queen Anne · Belltown Penthouses",
    bio: "One of Seattle's most recognized luxury brokers, Moira Holley specializes in one-of-a-kind properties from Belltown penthouses to waterfront estates, bringing unmatched marketing expertise and personal attention to every transaction.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Top Luxury Broker",
  },
  {
    name: "Hines Group",
    brokerage: "Hines Group Real Estate",
    specialty: "West Seattle · Luxury Homes · Pacific NW",
    bio: "Named West Seattle's #1 Real Estate Agent in 2022 & 2023 and a Seattle Times Gold Winner for Best in the Pacific Northwest, the Hines Group is a RealTrends Verified top 1.5% of agents in the country.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "#1 West Seattle · Top 1.5% Nationally",
  },
];

const SeattleAgents = () => (
  <CityAgentsPage
    city="Seattle"
    region="Washington, United States"
    heroImage="https://images.unsplash.com/photo-1502175353174-a7a70e73b362?w=1920&h=1080&fit=crop"
    intro="Seattle's luxury real estate market blends Pacific Northwest natural beauty with tech-driven wealth, spanning waterfront estates on Lake Washington, architecturally stunning homes in Mercer Island, and modern penthouses in Belltown and Capitol Hill. Home to Amazon, Microsoft, and a thriving tech ecosystem, Seattle's $5M+ segment has seen sustained demand from executives and entrepreneurs who value privacy, design, and proximity to the outdoors."
    whyContact="Whether you're acquiring a Medina waterfront estate or marketing a Queen Anne architectural gem, these top-ranked Seattle agents deliver the pricing intelligence, tech-forward marketing, and buyer networks that luxury properties demand. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default SeattleAgents;
