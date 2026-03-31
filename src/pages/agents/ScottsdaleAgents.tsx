import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Lisa Roberts",
    brokerage: "Russ Lyon Sotheby's International Realty",
    specialty: "North Scottsdale · Paradise Valley · Desert Estates",
    bio: "A PRIME Agent ranked in the top 1% of real estate professionals, Lisa Roberts is a 15-year luxury veteran with 350+ career transactions and 62 sales in the last 12 months alone. Her Sotheby's affiliation and deep expertise in North Scottsdale and Paradise Valley make her the definitive choice for Arizona luxury real estate.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Top 1% · 350+ Transactions",
  },
  {
    name: "Walt Danley",
    brokerage: "Local Luxury Christie's International Real Estate",
    specialty: "Paradise Valley · Arcadia · Silverleaf",
    bio: "A legend in Arizona luxury real estate, Walt Danley founded one of the state's most prestigious brokerages, now affiliated with Christie's International Real Estate. For over four decades, his firm has represented the finest estate properties in Paradise Valley, Scottsdale, and Arcadia — setting the standard for luxury service in the desert.",
    website: "https://localluxuryre.com",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Christie's International · 40+ Years",
  },
  {
    name: "Joan Levinson",
    brokerage: "Engel & Völkers Scottsdale",
    specialty: "Golf Communities · Desert Modern · Resort Living",
    bio: "One of Scottsdale's most accomplished luxury agents, Joan Levinson specializes in the city's premier golf communities and desert modern estates. Her expertise in Silverleaf, DC Ranch, and Troon North, combined with Engel & Völkers' global luxury network, provides exceptional exposure for the Valley's most distinguished properties.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop&crop=top",
    accolades: "Engel & Völkers Luxury Specialist",
  },
];

const ScottsdaleAgents = () => (
  <CityAgentsPage
    city="Scottsdale"
    region="Arizona, United States"
    heroImage="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1080&fit=crop"
    intro="Scottsdale's luxury real estate market offers desert modern masterpieces, sprawling ranch estates, and exclusive golf community properties in Paradise Valley, Silverleaf, and DC Ranch. These are the city's most trusted luxury listing agents — professionals who represent the finest properties in the Sonoran Desert."
    whyContact="Whether you're acquiring a Paradise Valley estate or marketing a Silverleaf compound, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default ScottsdaleAgents;
