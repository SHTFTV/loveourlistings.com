import CountryAgentsPage from "@/components/CountryAgentsPage";

const cities = [
    { name: "New York", slug: "new-york" },
    { name: "Los Angeles", slug: "los-angeles" },
    { name: "Miami", slug: "miami" },
    { name: "San Francisco", slug: "san-francisco" },
    { name: "Chicago", slug: "chicago" },
    { name: "Houston", slug: "houston" },
    { name: "Dallas", slug: "dallas" },
    { name: "Denver", slug: "denver" },
    { name: "Boston", slug: "boston" },
    { name: "Seattle", slug: "seattle" },
    { name: "Scottsdale", slug: "scottsdale" },
    { name: "Aspen", slug: "aspen" },
    { name: "Palm Beach", slug: "palm-beach" },
    { name: "The Hamptons", slug: "hamptons" },
    { name: "Malibu", slug: "malibu" },
    { name: "Las Vegas", slug: "las-vegas" },
];

const UnitedStatesAgents = () => (
  <CountryAgentsPage
    country="United States"
    flag="🇺🇸"
    region="North America"
    heroImage="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop"
    description="The United States boasts the world's most dynamic luxury real estate markets, from Manhattan penthouses to Malibu beachfront estates, Miami waterfront mansions to Aspen mountain retreats."
    cities={cities}
  />
);

export default UnitedStatesAgents;
