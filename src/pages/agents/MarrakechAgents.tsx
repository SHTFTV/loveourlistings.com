import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Abdelhadi Laaouina",
    brokerage: "Abdel Realty",
    specialty: "Luxury Villas · Historic Riads · Palmeraie · Amelkis",
    bio: "With 7+ years in luxury real estate and 10+ years in property management, Abdelhadi Laaouina is Marrakech's trusted gateway to luxury property. He guides both local and international clients through the city's dynamic market — from historic Medina riads to contemporary Palmeraie villas — with expert knowledge and secure transaction handling.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "17+ Years Combined Experience",
  },
  {
    name: "Samuel Palmer",
    brokerage: "Luxurious Properties Marrakech",
    specialty: "Investment · Riads · Villas · Renovation Projects",
    bio: "Samuel Palmer leads Luxurious Properties Marrakech, one of the city's most established agencies for international buyers. Specializing in both turnkey luxury villas and renovation opportunities in the Medina, he provides end-to-end service — from property search and legal guidance to renovation management — for discerning European and Middle Eastern clients.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "International Specialist · Full-Service Agency",
  },
  {
    name: "Khadija Vaneau",
    brokerage: "Vaneau Maroc",
    specialty: "Premium Villas · Guéliz · Hivernage · Golf Resorts",
    bio: "Part of the prestigious Vaneau network — one of France's most respected luxury real estate brands — Khadija leads the Marrakech office serving the city's most exclusive neighborhoods. From Hivernage's modern penthouses to Amelkis golf villas and palatial Palmeraie estates, she combines French luxury standards with deep Moroccan market expertise.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Vaneau Network · French-Moroccan Expertise",
  },
];

const MarrakechAgents = () => (
  <CityAgentsPage
    city="Marrakech"
    region="MA, INT"
    heroImage="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1920&h=1080&fit=crop"
    intro="Marrakech is Morocco's most captivating luxury real estate destination, where centuries-old Medina riads sit alongside contemporary Palmeraie villas and exclusive golf resort estates. The Red City's enchanting blend of tradition and modernity attracts discerning international buyers seeking a unique lifestyle investment in North Africa's most prestigious address."
    whyContact="Whether you're acquiring a historic riad in the Medina or selling a modern villa in the Palmeraie, these elite Marrakech agents bring deep local expertise and international connections. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default MarrakechAgents;
