import CountryAgentsPage from "@/components/CountryAgentsPage";

const cities = [
    { name: "Bangkok", slug: "bangkok" },
];

const ThailandAgents = () => (
  <CountryAgentsPage
    country="Thailand"
    flag="🇹🇭"
    region="Asia & Middle East"
    heroImage="https://images.unsplash.com/photo-1528181304800-259b08848526?w=1920&h=1080&fit=crop"
    description="Thailand offers tropical luxury from Bangkok's sky-high penthouses to Phuket's clifftop villas and Koh Samui's beachfront estates."
    cities={cities}
  />
);

export default ThailandAgents;
