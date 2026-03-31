import CountryAgentsPage from "@/components/CountryAgentsPage";

const cities = [
    { name: "Doha", slug: "doha" },
];

const QatarAgents = () => (
  <CountryAgentsPage
    country="Qatar"
    flag="🇶🇦"
    region="Asia & Middle East"
    heroImage="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=1920&h=1080&fit=crop"
    description="Qatar's luxury market features world-class developments in Doha, from The Pearl-Qatar to Lusail City's ultra-modern waterfront properties."
    cities={cities}
  />
);

export default QatarAgents;
