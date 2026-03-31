import CountryAgentsPage from "@/components/CountryAgentsPage";

const cities = [
    { name: "Mykonos", slug: "mykonos" },
];

const GreeceAgents = () => (
  <CountryAgentsPage
    country="Greece"
    flag="🇬🇷"
    region="Europe"
    heroImage="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1920&h=1080&fit=crop"
    description="Greece offers luxury island living at its finest — from Mykonos and Santorini villas to Athens penthouses with Acropolis views."
    cities={cities}
  />
);

export default GreeceAgents;
