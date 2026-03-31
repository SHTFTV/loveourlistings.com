import CountryAgentsPage from "@/components/CountryAgentsPage";

const cities = [
    { name: "Gustavia", slug: "gustavia" },
];

const SaintBarthelemyAgents = () => (
  <CountryAgentsPage
    country="Saint Barthélemy"
    flag="🇧🇱"
    region="Caribbean"
    heroImage="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1920&h=1080&fit=crop"
    description="St. Barths is the ultimate Caribbean luxury destination with hillside villas, beachfront estates, and the most exclusive island lifestyle in the world."
    cities={cities}
  />
);

export default SaintBarthelemyAgents;
