import CountryAgentsPage from "@/components/CountryAgentsPage";

const cities = [
    { name: "San Juan", slug: "san-juan" },
];

const PuertoRicoAgents = () => (
  <CountryAgentsPage
    country="Puerto Rico"
    flag="🇵🇷"
    region="Caribbean"
    heroImage="https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?w=1920&h=1080&fit=crop"
    description="Puerto Rico combines Caribbean charm with American convenience, offering luxury properties from historic Old San Juan to modern Dorado Beach estates."
    cities={cities}
  />
);

export default PuertoRicoAgents;
