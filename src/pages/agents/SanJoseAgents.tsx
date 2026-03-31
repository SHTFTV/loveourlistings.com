import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Ken DeLeon",
    brokerage: "DeLeon Realty",
    specialty: "Silicon Valley · Almaden · Willow Glen",
    bio: "Founder of DeLeon Realty and one of the most prolific luxury agents in Silicon Valley, Ken DeLeon has set numerous sales records across San Jose's premium neighborhoods.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "#1 Agent in Silicon Valley",
  },
  {
    name: "Mary Kay Groth",
    brokerage: "Compass",
    specialty: "Cambrian · Los Gatos · Saratoga",
    bio: "A top Compass agent in San Jose, Mary Kay brings deep expertise to the Cambrian, Los Gatos, and Saratoga luxury markets.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Compass Top Producer",
  },
  {
    name: "David Tapper",
    brokerage: "Keller Williams Realty",
    specialty: "New Construction · Investment · Tech Corridor",
    bio: "Specializing in San Jose's tech-driven luxury market, David Tapper delivers data-driven strategies for Silicon Valley's most discerning buyers and sellers.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Keller Williams Luxury",
  }
];

const SanJoseAgents = () => (
  <CityAgentsPage
    city="San Jose"
    region="California, United States"
    heroImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=1080&fit=crop"
    intro="Almaden Valley estates on 1-to-5-acre lots trade between $3M and $12M, while Willow Glen's Craftsman and ranch-style luxury averages $2,200 per square foot — fueled by C-suite compensation packages from Apple, Google, and Adobe. San Jose's $3M+ segment is the Bay Area's best value play relative to Palo Alto and Los Altos, attracting tech executives seeking estate-scale properties within 15 minutes of downtown."
    whyContact="Silicon Valley's IPO and RSU liquidity cycles create predictable demand surges in San Jose's luxury market. The agents featured here — including DeLeon Realty's record-setting team and top Compass producers — bring data-driven pricing, pre-market network access, and global syndication to ensure maximum exposure among qualified tech-wealth buyers."
    agents={agents}
  />
);

export default SanJoseAgents;
