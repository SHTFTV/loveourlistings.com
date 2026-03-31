import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Cristal Clarke",
    brokerage: "Berkshire Hathaway HomeServices",
    specialty: "Montecito · Hope Ranch · Oceanfront",
    bio: "One of Santa Barbara's most accomplished luxury agents, Cristal Clarke specializes in Montecito and Hope Ranch estates with over $1 billion in career sales.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Top 1% Berkshire Hathaway",
  },
  {
    name: "Randy Solakian",
    brokerage: "Berkshire Hathaway HomeServices",
    specialty: "Riviera · Mesa · Estate Properties",
    bio: "A leading Santa Barbara luxury agent, Randy Solakian brings decades of experience to the Riviera, Mesa, and the city's most prestigious hillside properties.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Chairman's Circle Platinum",
  },
  {
    name: "Nancy Kogevinas",
    brokerage: "Berkshire Hathaway HomeServices",
    specialty: "Montecito · Luxury Estates · International",
    bio: "Nancy Kogevinas is a globally recognized luxury agent in Montecito, serving high-net-worth clients with discretion and market mastery.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Legend Award Winner",
  }
];

const SantaBarbaraAgents = () => (
  <CityAgentsPage
    city="Santa Barbara"
    region="California, United States"
    heroImage="https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=1920&h=1080&fit=crop"
    intro="Montecito estates on 2-to-20-acre parcels trade between $5M and $65M — home to Oprah, Ellen, and a growing cohort of tech billionaires who prize the American Riviera's Mediterranean climate and 90-minute proximity to LA. Hope Ranch's equestrian properties average $4,500 per square foot, while Santa Ynez Valley vineyard estates offer 50-to-200-acre luxury compounds starting at $8M."
    whyContact="Santa Barbara's ultra-luxury market operates almost entirely off-market — fewer than 20% of $10M+ transactions appear on the MLS. The agents featured here — including Berkshire Hathaway's $1B+ career producers — maintain the private networks and discretion essential for Montecito and Hope Ranch's most significant estate transactions."
    agents={agents}
  />
);

export default SantaBarbaraAgents;
