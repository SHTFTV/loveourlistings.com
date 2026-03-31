import CountryAgentsPage from "@/components/CountryAgentsPage";

const cities = [
    { name: "Tel Aviv", slug: "tel-aviv" },
];

const IsraelAgents = () => (
  <CountryAgentsPage
    country="Israel"
    flag="🇮🇱"
    region="Asia & Middle East"
    heroImage="https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=1920&h=1080&fit=crop"
    description="Israel's luxury real estate market offers Mediterranean penthouses in Tel Aviv, historic properties in Jerusalem, and exclusive coastal estates."
    cities={cities}
  />
);

export default IsraelAgents;
