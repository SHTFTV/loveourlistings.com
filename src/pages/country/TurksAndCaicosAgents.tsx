import CountryAgentsPage from "@/components/CountryAgentsPage";

const cities = [
    { name: "Providenciales", slug: "providenciales" },
];

const TurksAndCaicosAgents = () => (
  <CountryAgentsPage
    slug="turks-and-caicos"
    country="Turks and Caicos"
    flag="🇹🇨"
    region="Caribbean"
    heroImage="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop"
    description="Turks and Caicos offers pristine luxury beachfront living on some of the world's most beautiful beaches, attracting discerning buyers seeking Caribbean perfection."
    cities={cities}
  />
);

export default TurksAndCaicosAgents;
