import CountryAgentsPage from "@/components/CountryAgentsPage";

const cities = [
    { name: "London", slug: "london" },
];

const UnitedKingdomAgents = () => (
  <CountryAgentsPage
    slug="united-kingdom"
    country="United Kingdom"
    flag="🇬🇧"
    region="Europe"
    heroImage="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&h=1080&fit=crop"
    description="The UK's luxury market centers on London's Mayfair, Knightsbridge, and Chelsea, with country estates across the English countryside and Scottish Highlands."
    cities={cities}
  />
);

export default UnitedKingdomAgents;
