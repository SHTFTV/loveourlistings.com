import CountryAgentsPage from "@/components/CountryAgentsPage";

const cities = [
    { name: "Mumbai", slug: "mumbai" },
];

const IndiaAgents = () => (
  <CountryAgentsPage
    country="India"
    flag="🇮🇳"
    region="Asia & Middle East"
    heroImage="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1920&h=1080&fit=crop"
    description="India's luxury real estate spans from Mumbai's sea-facing penthouses to Delhi's colonial-era estates and Goa's beachfront villas."
    cities={cities}
  />
);

export default IndiaAgents;
