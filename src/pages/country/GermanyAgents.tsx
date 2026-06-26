import CountryAgentsPage from "@/components/CountryAgentsPage";

const cities = [
    { name: "Munich", slug: "munich" },
];

const GermanyAgents = () => (
  <CountryAgentsPage
    slug="germany"
    country="Germany"
    flag="🇩🇪"
    region="Europe"
    heroImage="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1920&h=1080&fit=crop"
    description="Germany's luxury real estate market features architectural masterpieces in Munich, Berlin penthouses, and exclusive lakeside estates across Bavaria."
    cities={cities}
  />
);

export default GermanyAgents;
