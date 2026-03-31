import CountryAgentsPage from "@/components/CountryAgentsPage";

const cities = [
    { name: "Port Louis", slug: "port-louis" },
];

const MauritiusAgents = () => (
  <CountryAgentsPage
    country="Mauritius"
    flag="🇲🇺"
    region="Africa"
    heroImage="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop"
    description="Mauritius offers exclusive island luxury with beachfront villas, resort estates, and one of Africa's most prestigious property markets."
    cities={cities}
  />
);

export default MauritiusAgents;
