import CountryAgentsPage from "@/components/CountryAgentsPage";

const cities = [
    { name: "Dubai", slug: "dubai" },
];

const UaeAgents = () => (
  <CountryAgentsPage
    slug="uae"
    country="United Arab Emirates"
    flag="🇦🇪"
    region="Asia & Middle East"
    heroImage="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&h=1080&fit=crop"
    description="The UAE sets the global standard for ultra-luxury real estate with Dubai's iconic skyline penthouses and Abu Dhabi's waterfront mansions."
    cities={cities}
  />
);

export default UaeAgents;
