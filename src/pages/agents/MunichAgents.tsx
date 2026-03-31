import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Michael Reiss",
    brokerage: "Munich Sotheby's International Realty",
    specialty: "Luxury Villas · Bogenhausen · Grünwald · Alpine Foothills",
    bio: "Michael Reiss is a leading agent at Munich Sotheby's International Realty, specializing in exclusive real estate across Munich and the Bavarian Alpine foothills. He represents discerning clients seeking listed villas on Kochelsee, elegant apartments in Bogenhausen, and grand estates in Grünwald — leveraging Sotheby's global brand and local expertise.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's · Munich & Alpine Specialist",
  },
  {
    name: "Konstantin Engel",
    brokerage: "Engel & Völkers Munich Nymphenburg",
    specialty: "Nymphenburg · Schwabing · Lehel · Premium Apartments",
    bio: "At Engel & Völkers Munich Nymphenburg — rated 5.0 with outstanding reviews — Konstantin serves Munich's most prestigious neighborhoods. With Engel & Völkers' network of 1,100+ locations in 35+ countries, he connects Bavaria's finest properties with qualified international buyers while providing sellers unmatched global marketing exposure.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Engel & Völkers · 5.0 Rating · Global Network",
  },
  {
    name: "Sophia Heimkraft",
    brokerage: "Heimkraft Immobilien",
    specialty: "Altbau Apartments · Investment · Off-Market · Trudering",
    bio: "Sophia leads Heimkraft Immobilien, a respected Munich boutique agency specializing in the city's luxury residential market. Her expertise spans historic Altbau apartments in Munich's inner city, modern penthouses in Schwabing-Freimann, and family villas in Trudering-Riem — all handled with the personalized attention only a boutique firm can provide.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Boutique Agency · Off-Market Expert",
  },
];

const MunichAgents = () => (
  <CityAgentsPage
    city="Munich"
    region="DE, INT"
    heroImage="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1920&h=1080&fit=crop"
    intro="Munich is Germany's most prestigious luxury real estate market, offering everything from grand villas in Bogenhausen and Grünwald to elegant Altbau apartments in Schwabing and lakeside estates in the Alpine foothills. Bavaria's capital attracts international executives, tech entrepreneurs, and old-money families seeking world-class living with Alpine proximity."
    whyContact="Whether you're acquiring a villa in Grünwald or selling a penthouse in Schwabing, these elite Munich agents bring deep Bavarian market expertise and global connections. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default MunichAgents;
