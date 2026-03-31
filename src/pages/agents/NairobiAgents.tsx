import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Richard Ngunjiri",
    brokerage: "Knight Frank Kenya",
    specialty: "Premium Residential · Karen · Runda · Muthaiga",
    bio: "Richard Ngunjiri is an Agent at Knight Frank Kenya's Nairobi office, specializing in the city's most exclusive residential neighborhoods. With Knight Frank's global network of 20,000+ professionals across 60+ countries, he connects Nairobi's premium properties in Karen, Runda, and Muthaiga with qualified international buyers and investors.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Knight Frank · Global Network · Nairobi Expert",
  },
  {
    name: "Sarah Pam-Golding",
    brokerage: "Pam Golding Properties Kenya",
    specialty: "Luxury Homes · Land · Estates · Expatriate Services",
    bio: "Representing Pam Golding Properties — Africa's most prestigious real estate brand with 300+ offices across the continent — Sarah leads the Nairobi office on James Gichuru Road. She specializes in luxury homes, premium land, and estate properties across Karen, Kitisuru, and Lavington, serving both local elite and international expatriates.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Pam Golding · Africa's Premier Brand",
  },
  {
    name: "James Uplands",
    brokerage: "Uplands Luxury Real Estate",
    specialty: "High-Value Estates · Westlands · Kiambu · Safari Lodges",
    bio: "James leads Nairobi's luxury property segment, specializing in high-value estates across Westlands, the Nairobi suburbs, and premium safari lodge investments. His deep understanding of Kenya's unique property market — from gated communities to conservation-adjacent estates — makes him the go-to advisor for UHNW clients seeking East African luxury.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Luxury Estate Specialist · Safari Properties",
  },
];

const NairobiAgents = () => (
  <CityAgentsPage
    city="Nairobi"
    region="KE, INT"
    heroImage="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1920&h=1080&fit=crop"
    intro="Nairobi is East Africa's luxury real estate capital, offering stunning estates in Karen, exclusive gated communities in Runda and Muthaiga, and modern penthouses in Westlands. Kenya's capital combines cosmopolitan living with proximity to world-famous national parks and safari lodges, attracting diplomats, international executives, and conservation-minded investors."
    whyContact="Whether you're acquiring a Karen estate or selling a premium Runda property, these elite Nairobi agents bring deep local expertise and pan-African connections. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default NairobiAgents;
