import CountryAgentsPage from "@/components/CountryAgentsPage";

const cities = [
    { name: "Mexico City", slug: "mexico-city" },
    { name: "Cancún", slug: "cancun" },
];

const MexicoAgents = () => (
  <CountryAgentsPage
    country="Mexico"
    flag="🇲🇽"
    region="North America"
    heroImage="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=1920&h=1080&fit=crop"
    description="Mexico offers stunning luxury properties from the Riviera Maya to Mexico City's exclusive neighborhoods. Explore our curated network of elite agents across Mexico's finest real estate markets."
    cities={cities}
  />
);

export default MexicoAgents;
