import CountryAgentsPage from "@/components/CountryAgentsPage";

const cities = [
    { name: "Tortola", slug: "tortola" },
];

const BritishVirginIslandsAgents = () => (
  <CountryAgentsPage
    country="British Virgin Islands"
    flag="🇻🇬"
    region="Caribbean"
    heroImage="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop"
    description="The British Virgin Islands offer exclusive island properties, private estates, and unparalleled sailing-lifestyle luxury in the Caribbean."
    cities={cities}
  />
);

export default BritishVirginIslandsAgents;
