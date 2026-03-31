import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Leo Wilk",
    brokerage: "RE/MAX Masters Realty",
    specialty: "Luxury Residential · Westside · Downtown",
    bio: "With over 25 years of experience and 100+ five-star Google reviews, Leo Wilk is one of Vancouver's most trusted luxury realtors. His deep knowledge of the Westside and Downtown markets, combined with a client-first approach, consistently delivers results for discerning buyers and sellers.",
    phone: "(604) 722-6982",
    website: "https://leowilkrealestate.com",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "100+ Five-Star Google Reviews",
  },
  {
    name: "Tanis Fritz",
    brokerage: "Sotheby's International Realty Canada",
    specialty: "Ultra-Luxury · West Vancouver · Shaughnessy",
    bio: "With a reputation for discretion, grace, and unwavering integrity, Tanis Fritz has established herself as a leading luxury agent serving Vancouver and West Vancouver. Her Sotheby's affiliation provides unmatched global exposure for her exclusive portfolio of estate properties.",
    website: "https://sothebysrealty.ca",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  },
  {
    name: "Mike Lai",
    brokerage: "RE/MAX Crest Realty",
    specialty: "Presale · Resale · Property Management",
    bio: "An award-winning Top 10% realtor in Vancouver, Mike Lai brings creativity and efficiency to every transaction. Known for his integrity-driven approach, Mike specializes in luxury resale, presale developments, and property management across Metro Vancouver's most sought-after neighbourhoods.",
    website: "https://www.mikelai.ca",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Award-Winning · Top 10% Realtor",
  },
];

const VancouverAgents = () => (
  <CityAgentsPage
    city="Vancouver"
    region="British Columbia, Canada"
    heroImage="https://images.unsplash.com/photo-1609825488888-3a766db05542?w=1920&h=1080&fit=crop"
    intro="Vancouver's luxury real estate market commands some of the highest prices in North America. First Shaughnessy mansions trade above $15 million. Point Grey waterfront estates overlooking English Bay routinely exceed $25 million. From the heritage architecture of Kerrisdale to the soaring glass towers of Coal Harbour, Vancouver attracts ultra-high-net-worth buyers from Hong Kong, mainland China, and across the Pacific Rim — making it one of the most internationally competitive luxury markets on earth."
    whyContact="Whether you're acquiring a Shaughnessy heritage estate or marketing a West Side land assembly, these top-ranked Vancouver agents deliver the multilingual expertise, cross-border buyer networks, and strategic pricing intelligence that this market demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign — boutique branding that creates unforgettable curb appeal."
    agents={agents}
  />
);

export default VancouverAgents;
