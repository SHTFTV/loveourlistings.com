import CountryAgentsPage from "@/components/CountryAgentsPage";

const cities = [
    { name: "Auckland", slug: "auckland" },
];

const NewZealandAgents = () => (
  <CountryAgentsPage
    slug="new-zealand"
    country="New Zealand"
    flag="🇳🇿"
    region="Australia & Pacific"
    heroImage="https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1920&h=1080&fit=crop"
    description="New Zealand offers stunning luxury properties from Auckland's waterfront estates to Queenstown's alpine retreats amid breathtaking landscapes."
    cities={cities}
  />
);

export default NewZealandAgents;
