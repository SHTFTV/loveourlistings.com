import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Carl Rémillard-Fontaine",
    brokerage: "Carl Rémillard Fontaine Real Estate Group",
    specialty: "Westmount · Nuns' Island · Luxury Condos",
    bio: "With over 21 years of experience selling the finest properties in Montreal, Carl Rémillard-Fontaine is a prominent figure in the city's luxury market. Recognized by peers as one of the leading luxury professionals and regularly interviewed by media on real estate matters, his team has built an unmatched reputation for exceptional results.",
    website: "https://carlrfontaine.com",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "21+ Years Luxury Experience",
  },
  {
    name: "Maxime Lafrenière",
    brokerage: "Sotheby's International Realty Québec",
    specialty: "Westmount · Old Montreal · Golden Square Mile",
    bio: "A true figurehead in luxury real estate in Montreal's most coveted neighbourhoods, Maxime Lafrenière has built a solid reputation as a fine negotiator. Consistently named a top performer with Sotheby's International Realty Québec, he brings global reach and local expertise to every transaction.",
    website: "https://sothebysrealty.ca",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's Top Performer",
  },
  {
    name: "Marie-Yvonne Paint",
    brokerage: "Royal LePage Heritage",
    specialty: "Westmount · Outremont · Town of Mount Royal",
    bio: "One of Montreal's most legendary luxury agents, Marie-Yvonne Paint has been a dominant force in the city's high-end market for decades. Her name is synonymous with prestige real estate in Westmount and Outremont, where she has represented some of the most significant properties ever sold in Quebec.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Montreal's Legendary Luxury Agent",
  },
];

const MontrealAgents = () => (
  <CityAgentsPage
    city="Montreal"
    region="Quebec, Canada"
    heroImage="https://images.unsplash.com/photo-1519178614-68673b201f36?w=1920&h=1080&fit=crop"
    intro="Montreal's luxury real estate market is a study in contrasts — old-world European elegance meets contemporary North American ambition. Westmount's stone mansions on Summit Circle command $10M+. The Golden Square Mile's heritage townhouses attract global collectors. Old Montreal's converted loft penthouses offer waterfront living with 18th-century character. Bilingual by nature and international by reputation, Montreal's luxury market draws sophisticated buyers from France, the Middle East, and across the Americas."
    whyContact="Whether you're acquiring a Westmount estate or marketing a penthouse in the Plateau, these top-ranked Montreal agents deliver the bilingual expertise, European-connected buyer networks, and culturally nuanced marketing that Quebec's luxury market demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default MontrealAgents;
