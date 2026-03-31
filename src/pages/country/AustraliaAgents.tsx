import CountryAgentsPage from "@/components/CountryAgentsPage";

const cities = [
    { name: "Sydney", slug: "sydney" },
    { name: "Brisbane", slug: "brisbane" },
];

const AustraliaAgents = () => (
  <CountryAgentsPage
    country="Australia"
    flag="🇦🇺"
    region="Australia & Pacific"
    heroImage="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1920&h=1080&fit=crop"
    description="Australia's luxury real estate features Sydney Harbour estates, Melbourne's prestigious Toorak, and Gold Coast waterfront mansions."
    cities={cities}
  />
);

export default AustraliaAgents;
