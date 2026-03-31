import CountryAgentsPage from "@/components/CountryAgentsPage";

const cities = [
    { name: "Marrakech", slug: "marrakech" },
];

const MoroccoAgents = () => (
  <CountryAgentsPage
    country="Morocco"
    flag="🇲🇦"
    region="Africa"
    heroImage="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1920&h=1080&fit=crop"
    description="Morocco's luxury market features stunning Marrakech riads, Casablanca penthouses, and exclusive estates in the Atlas Mountains."
    cities={cities}
  />
);

export default MoroccoAgents;
