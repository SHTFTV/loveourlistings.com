import CountryAgentsPage from "@/components/CountryAgentsPage";

const cities = [
    { name: "Madrid", slug: "madrid" },
];

const SpainAgents = () => (
  <CountryAgentsPage
    country="Spain"
    flag="🇪🇸"
    region="Europe"
    heroImage="https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1920&h=1080&fit=crop"
    description="Spain's luxury market spans from Marbella's Golden Mile to Madrid's Salamanca district, offering Mediterranean living at its finest."
    cities={cities}
  />
);

export default SpainAgents;
