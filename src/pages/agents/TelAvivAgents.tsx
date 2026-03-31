import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Lior Adar",
    brokerage: "ADAR Luxury Realty",
    specialty: "Luxury Residential · Neve Tzedek · Old North · Herzliya Pituach",
    bio: "With over 28 years of professional experience in real estate, Lior Adar is the Managing Director and owner of ADAR Luxury Realty — Tel Aviv's premier boutique luxury agency. Born in Israel with deep roots in Europe and the United States, he brings a unique international perspective to Israel's most exclusive property market.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Managing Director · 28+ Years Experience",
  },
  {
    name: "Daniel Goldstein",
    brokerage: "G.R.E Israel",
    specialty: "High-End Residential · Development · Investment",
    bio: "Daniel Goldstein leads G.R.E Israel, a high-end real estate agency with an international focus. A native English speaker with years of experience in the Israeli market, he leverages a powerful network of developers, solicitors, mortgage advisors, and architects to deliver perfect solutions for international buyers entering Tel Aviv's luxury market.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "G.R.E · International Focus · Developer Network",
  },
  {
    name: "Eli Taieb",
    brokerage: "Israel Sotheby's International Realty",
    specialty: "Residential Estates · New Development · Rothschild Blvd",
    bio: "Eli Taieb is a seasoned real estate professional at Israel Sotheby's International Realty with a long history of successful transactions since 2006. He specializes in residential estate properties and new developments across Tel Aviv's most prestigious addresses — from Rothschild Boulevard to the White City's Bauhaus gems.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's · Since 2006 · Estate Specialist",
  },
];

const TelAvivAgents = () => (
  <CityAgentsPage
    city="Tel Aviv"
    region="IL, INT"
    heroImage="https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=1920&h=1080&fit=crop"
    intro="Tel Aviv is the Mediterranean's most vibrant luxury real estate market, offering stunning sea-view penthouses, restored Bauhaus gems in the White City, and ultra-modern towers along the coastline. From Neve Tzedek's charming streets to Herzliya Pituach's exclusive marina residences, the city attracts global buyers seeking sun, culture, and innovation."
    whyContact="Whether you're acquiring a Rothschild Boulevard penthouse or selling a beachfront property in Herzliya, these elite Tel Aviv agents bring deep local expertise and international connections. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default TelAvivAgents;
