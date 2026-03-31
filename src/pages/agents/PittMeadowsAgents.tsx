import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Rob Chicken",
    brokerage: "RE/MAX LifeStyles Realty",
    specialty: "Acreages · Mountain Views · Waterfront",
    bio: "Pitt Meadows' top luxury agent specializing in premium acreages and mountain-view properties. Deep knowledge of the community's most desirable estate neighborhoods.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "RE/MAX Platinum Award",
  },
  {
    name: "Lisa Chicken",
    brokerage: "Royal LePage Meadowtowne Realty",
    specialty: "Estate Properties · Country Living · Custom Homes",
    bio: "A trusted luxury specialist in Pitt Meadows with expertise in country estate properties and custom-built homes.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Royal LePage Diamond Award",
  },
  {
    name: "Mark Chicken",
    brokerage: "Keller Williams Elite Realty",
    specialty: "New Construction · Investment · Executive Homes",
    bio: "Bringing modern marketing to Pitt Meadows' luxury market with expertise in premium new construction and executive homes.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Keller Williams Top Producer",
  }
];

const PittMeadowsAgents = () => (
  <CityAgentsPage
    city="Pitt Meadows"
    region="British Columbia, Canada"
    heroImage="https://images.unsplash.com/photo-1609825488888-3a766db05542?w=1920&h=1080&fit=crop"
    intro="Pitt Meadows' luxury market features dyke-adjacent estates with panoramic Golden Ears views, premium acreages in the agricultural heartland, and executive homes near the West Coast Express station. With median luxury prices above $1.6 million and a small-town atmosphere surrounded by protected farmland and mountain vistas, Pitt Meadows is the Tri-Cities' most exclusive rural-luxury pocket."
    whyContact="Pitt Meadows' Agricultural Land Reserve constraints, dike-maintenance levies, and Fraser River flood-construction requirements demand agents who understand the municipality's unique land-use framework. The specialists listed here close premium deals in the dyke corridor, airport-adjacent acreages, and central Pitt Meadows — each eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default PittMeadowsAgents;
