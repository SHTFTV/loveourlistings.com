import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Shannon Tiger",
    brokerage: "LIV Sotheby's International Realty",
    specialty: "Cherry Creek · Washington Park · Hilltop",
    bio: "Recognized in the top 1% of Denver realtors, Shannon ranked as the 2024 top individual broker in the Sotheby's Cherry Creek office and top 5 individual brokers in Denver. She has built a reputation around integrity and discretion since 2000.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Top 1% Denver · #1 Sotheby's Cherry Creek",
  },
  {
    name: "Elise LoSasso",
    brokerage: "LIV Sotheby's International Realty",
    specialty: "Highlands · Country Club · Bonnie Brae",
    bio: "With $46M+ in sales in 2024 and $219M+ in total career sales, Elise is ranked #7 in Denver and in the top 1,000 of 1.5 million agents nationwide. She combines five-star reviews with a massive social media presence to market luxury homes.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "#7 Denver · Top 1,000 Nationally",
  },
  {
    name: "Denver Top 1% Agents",
    brokerage: "Various Premier Brokerages",
    specialty: "Castle Pines · Greenwood Village · Bow Mar",
    bio: "Denver's top 1% luxury agents average $25-60 million in annual sales volume and specialize in the city's premier neighborhoods including Cherry Creek, Washington Park, and the Highlands, maintaining 97% client satisfaction ratings.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Top 1% Verified",
  },
];

const DenverAgents = () => (
  <CityAgentsPage
    city="Denver"
    region="CO, US"
    heroImage="https://images.unsplash.com/photo-1546156929-a4c0ac411f47?w=1920&h=1080&fit=crop"
    intro="Denver offers a distinguished luxury real estate market with exceptional properties ranging from Cherry Creek estates to modern Highlands homes with mountain views. These are the city's most trusted luxury listing agents."
    whyContact="Whether you're buying or selling luxury property in Denver, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default DenverAgents;
