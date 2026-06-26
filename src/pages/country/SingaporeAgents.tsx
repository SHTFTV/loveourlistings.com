import CountryAgentsPage from "@/components/CountryAgentsPage";

const cities = [
  { name: "Singapore", slug: "singapore" },
];

const SingaporeAgents = () => (
  <CountryAgentsPage
    slug="singapore"
    country="Singapore"
    flag="🇸🇬"
    region="Asia"
    heroImage="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1920&h=1080&fit=crop"
    description="Singapore commands one of the tightest ultra-prime markets in the world — Good Class Bungalows, Sentosa Cove waterfront, and Orchard Road branded penthouses changing hands almost entirely off-market."
    cities={cities}
  />
);

export default SingaporeAgents;