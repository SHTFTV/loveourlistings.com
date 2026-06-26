import CountryAgentsPage from "@/components/CountryAgentsPage";

const cities = [
    { name: "Milan", slug: "milan" },
    { name: "Rome", slug: "rome" },
];

const ItalyAgents = () => (
  <CountryAgentsPage
    slug="italy"
    country="Italy"
    flag="🇮🇹"
    region="Europe"
    heroImage="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1920&h=1080&fit=crop"
    description="Italy's luxury real estate spans from Lake Como villas to Roman palazzos and Milanese penthouses, offering la dolce vita at its most refined."
    cities={cities}
  />
);

export default ItalyAgents;
