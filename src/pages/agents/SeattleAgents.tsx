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
    region="WA, US"
    heroImage="https://images.unsplash.com/photo-1502175353174-a7a70e73b362?w=1920&h=1080&fit=crop"
    intro="Seattle offers a distinguished luxury real estate market with exceptional properties ranging from waterfront estates on Lake Washington to modern high-rises in Belltown. These are the city's most trusted luxury listing agents — professionals who consistently deliver results for discerning buyers and sellers."
    whyContact="Whether you're buying or selling luxury property in Seattle, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default SeattleAgents;
