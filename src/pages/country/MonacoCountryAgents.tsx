import CountryAgentsPage from "@/components/CountryAgentsPage";

const cities = [
    { name: "Monaco", slug: "monaco" },
];

const MonacoCountryAgents = () => (
  <CountryAgentsPage
    slug="monaco-country"
    country="Monaco"
    flag="🇲🇨"
    region="Europe"
    heroImage="https://images.unsplash.com/photo-1534237710431-e2fc698436d0?w=1920&h=1080&fit=crop"
    description="Monaco is the world's most exclusive real estate market per square meter, offering ultra-luxury apartments and penthouses on the French Riviera."
    cities={cities}
  />
);

export default MonacoCountryAgents;
