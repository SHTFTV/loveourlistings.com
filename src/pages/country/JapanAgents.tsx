import CountryAgentsPage from "@/components/CountryAgentsPage";

const cities = [
    { name: "Tokyo", slug: "tokyo" },
];

const JapanAgents = () => (
  <CountryAgentsPage
    slug="japan"
    country="Japan"
    flag="🇯🇵"
    region="Asia & Middle East"
    heroImage="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&h=1080&fit=crop"
    description="Japan's luxury market blends ultra-modern Tokyo penthouses with traditional Kyoto machiya homes and Niseko mountain retreats."
    cities={cities}
  />
);

export default JapanAgents;
