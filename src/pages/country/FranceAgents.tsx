import CountryAgentsPage from "@/components/CountryAgentsPage";

const cities = [
    { name: "Paris", slug: "paris" },
];

const FranceAgents = () => (
  <CountryAgentsPage
    country="France"
    flag="🇫🇷"
    region="Europe"
    heroImage="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&h=1080&fit=crop"
    description="France is home to some of the world's most coveted luxury properties, from Parisian apartments on the Champs-Élysées to Côte d'Azur waterfront villas."
    cities={cities}
  />
);

export default FranceAgents;
