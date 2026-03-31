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
    { name: "Phoenix", slug: "phoenix" },
    { name: "Philadelphia", slug: "philadelphia" },
    { name: "San Diego", slug: "san-diego" },
    { name: "Austin", slug: "austin" },
    { name: "Nashville", slug: "nashville" },
    { name: "Washington D.C.", slug: "washington" },
    { name: "Atlanta", slug: "atlanta" },
    { name: "Honolulu", slug: "honolulu" },
    { name: "Orlando", slug: "orlando" },
    { name: "Fort Lauderdale", slug: "fort-lauderdale" },
    { name: "Charlotte", slug: "charlotte" },
    { name: "Tampa", slug: "tampa" },
    { name: "Charleston", slug: "charleston" },
    { name: "New Orleans", slug: "new-orleans" },
    { name: "San Jose", slug: "san-jose" },
    { name: "Raleigh", slug: "raleigh" },
    { name: "Baltimore", slug: "baltimore" },
    { name: "Pittsburgh", slug: "pittsburgh" },
    { name: "Minneapolis", slug: "minneapolis" },
    { name: "Milwaukee", slug: "milwaukee" },
    { name: "Indianapolis", slug: "indianapolis" },
    { name: "St. Louis", slug: "st-louis" },
    { name: "Kansas City", slug: "kansas-city" },
    { name: "Jacksonville", slug: "jacksonville" },
    { name: "Savannah", slug: "savannah" },
    { name: "Salt Lake City", slug: "salt-lake-city" },
    { name: "Sacramento", slug: "sacramento" },
    { name: "Newport Beach", slug: "newport-beach" },
    { name: "Santa Barbara", slug: "santa-barbara" },
    { name: "Boca Raton", slug: "boca-raton" },
    { name: "Palo Alto", slug: "palo-alto" },
    { name: "Irvine", slug: "irvine" },
    { name: "Stamford", slug: "stamford" },
    { name: "Naperville", slug: "naperville" },
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
