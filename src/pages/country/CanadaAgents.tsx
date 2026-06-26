import CountryAgentsPage from "@/components/CountryAgentsPage";

const cities = [
    { name: "Vancouver", slug: "vancouver" },
    { name: "West Vancouver", slug: "west-vancouver" },
    { name: "Victoria", slug: "victoria" },
    { name: "Kelowna", slug: "kelowna" },
    { name: "Whistler", slug: "whistler" },
    { name: "Toronto", slug: "toronto" },
    { name: "Burnaby", slug: "burnaby" },
    { name: "Surrey", slug: "surrey" },
    { name: "Calgary", slug: "calgary" },
    { name: "Montreal", slug: "montreal" },
    { name: "Ottawa", slug: "ottawa" },
    { name: "Edmonton", slug: "edmonton" },
    { name: "Halifax", slug: "halifax" },
    { name: "Winnipeg", slug: "winnipeg" },
    { name: "Mississauga", slug: "mississauga" },
    { name: "Brampton", slug: "brampton" },
    { name: "Quebec City", slug: "quebec-city" },
    { name: "Markham", slug: "markham" },
    { name: "Vaughan", slug: "vaughan" },
    { name: "Oakville", slug: "oakville" },
    { name: "Barrie", slug: "barrie" },
    { name: "Kitchener", slug: "kitchener" },
    { name: "Windsor", slug: "windsor" },
    { name: "Saskatoon", slug: "saskatoon" },
    { name: "Regina", slug: "regina" },
    { name: "Laval", slug: "laval" },
    { name: "Gatineau", slug: "gatineau" },
    { name: "North Vancouver", slug: "north-vancouver" },
];

const CanadaAgents = () => (
  <CountryAgentsPage
    slug="canada"
    country="Canada"
    flag="🇨🇦"
    region="North America"
    heroImage="https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1920&h=1080&fit=crop"
    description="Canada's luxury real estate market spans from Vancouver's waterfront estates to Toronto's prestigious neighborhoods, Montreal's historic mansions, and Calgary's mountain retreats. Discover our network of elite agents across Canada's most coveted addresses."
    cities={cities}
  />
);

export default CanadaAgents;
