import CountryAgentsPage from "@/components/CountryAgentsPage";

const cities = [
    { name: "Geneva", slug: "geneva" },
];

const SwitzerlandAgents = () => (
  <CountryAgentsPage
    slug="switzerland"
    country="Switzerland"
    flag="🇨🇭"
    region="Europe"
    heroImage="https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=1920&h=1080&fit=crop"
    description="Switzerland offers the world's most prestigious alpine properties, from Geneva lakefront estates to Zurich penthouses and Verbier chalets."
    cities={cities}
  />
);

export default SwitzerlandAgents;
