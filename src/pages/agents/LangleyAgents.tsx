import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Darin Chicken",
    brokerage: "RE/MAX Treeland Realty",
    specialty: "Equestrian Estates · Acreages · Campbell Valley",
    bio: "Langley's leading luxury estate specialist with unmatched expertise in equestrian properties, premium acreages, and the prestigious Campbell Valley corridor.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Hall of Fame",
  },
  {
    name: "Michelle Chicken",
    brokerage: "Royal LePage Wolstencroft Realty",
    specialty: "Willoughby · Brookswood · Fort Langley",
    bio: "A top-producing luxury agent in Langley, specializing in Willoughby, Brookswood, and the charming heritage community of Fort Langley.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "James Chicken",
    brokerage: "Sutton Group - West Coast Realty",
    specialty: "Custom Builds · Country Estates · Investment",
    bio: "Bringing sophisticated marketing to Langley's luxury market with expertise in custom-built homes and premium country estates throughout the Township.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Sutton Group Top Producer",
  }
];

const LangleyAgents = () => (
  <CityAgentsPage
    city="Langley"
    region="British Columbia, Canada"
    heroImage="https://images.unsplash.com/photo-1609825488888-3a766db05542?w=1920&h=1080&fit=crop"
    intro="Langley's luxury market features premium equestrian estates in Campbell Valley, executive homes in Willoughby Heights, and sprawling acreages in rural Langley Township. With median luxury prices above $2 million and proximity to the Trans-Canada Highway, Langley offers the Fraser Valley's best combination of country estate living and urban accessibility for buyers seeking space, privacy, and room to build."
    whyContact="Langley's Agricultural Land Reserve restrictions, Township versus City zoning differences, and equestrian property insurance requirements demand agents who know the difference between a hobby farm and a full agricultural operation. The specialists listed here close premium deals in Campbell Valley, Willoughby, and Brookswood — each eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default LangleyAgents;
