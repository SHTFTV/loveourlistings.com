import CountryAgentsPage from "@/components/CountryAgentsPage";

const cities = [
    { name: "Punta Cana", slug: "punta-cana" },
];

const DominicanRepublicAgents = () => (
  <CountryAgentsPage
    slug="dominican-republic"
    country="Dominican Republic"
    flag="🇩🇴"
    region="Caribbean"
    heroImage="https://images.unsplash.com/photo-1580237541049-2d715a09486e?w=1920&h=1080&fit=crop"
    description="The Dominican Republic offers stunning beachfront luxury properties and exclusive resort-style living in the heart of the Caribbean."
    cities={cities}
  />
);

export default DominicanRepublicAgents;
