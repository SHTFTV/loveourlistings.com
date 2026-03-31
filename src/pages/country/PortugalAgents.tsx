import CountryAgentsPage from "@/components/CountryAgentsPage";

const cities = [
    { name: "Lisbon", slug: "lisbon" },
];

const PortugalAgents = () => (
  <CountryAgentsPage
    country="Portugal"
    flag="🇵🇹"
    region="Europe"
    heroImage="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1920&h=1080&fit=crop"
    description="Portugal's Algarve coast, Lisbon's historic neighborhoods, and Porto's riverside mansions offer European luxury with exceptional value and lifestyle."
    cities={cities}
  />
);

export default PortugalAgents;
