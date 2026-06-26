import CountryAgentsPage from "@/components/CountryAgentsPage";

const cities = [
    { name: "Nadi", slug: "nadi" },
];

const FijiAgents = () => (
  <CountryAgentsPage
    slug="fiji"
    country="Fiji"
    flag="🇫🇯"
    region="Australia & Pacific"
    heroImage="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop"
    description="Fiji offers exclusive private island properties and luxury resort estates in one of the world's most pristine tropical paradises."
    cities={cities}
  />
);

export default FijiAgents;
