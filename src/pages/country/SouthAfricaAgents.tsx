import CountryAgentsPage from "@/components/CountryAgentsPage";

const cities = [
    { name: "Cape Town", slug: "cape-town" },
];

const SouthAfricaAgents = () => (
  <CountryAgentsPage
    country="South Africa"
    flag="🇿🇦"
    region="Africa"
    heroImage="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1920&h=1080&fit=crop"
    description="South Africa's luxury real estate spans from Cape Town's Clifton beachfront to Johannesburg's Sandton estates and the Winelands' historic properties."
    cities={cities}
  />
);

export default SouthAfricaAgents;
