import CountryAgentsPage from "@/components/CountryAgentsPage";

const cities = [
    { name: "Grand Cayman", slug: "grand-cayman" },
];

const CaymanIslandsAgents = () => (
  <CountryAgentsPage
    slug="cayman-islands"
    country="Cayman Islands"
    flag="🇰🇾"
    region="Caribbean"
    heroImage="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop"
    description="The Cayman Islands represent the pinnacle of Caribbean luxury living with world-class waterfront properties and exclusive gated communities."
    cities={cities}
  />
);

export default CaymanIslandsAgents;
