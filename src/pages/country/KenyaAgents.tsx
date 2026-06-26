import CountryAgentsPage from "@/components/CountryAgentsPage";

const cities = [
    { name: "Nairobi", slug: "nairobi" },
];

const KenyaAgents = () => (
  <CountryAgentsPage
    slug="kenya"
    country="Kenya"
    flag="🇰🇪"
    region="Africa"
    heroImage="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1920&h=1080&fit=crop"
    description="Kenya's luxury real estate combines Nairobi's modern penthouses with exclusive safari lodges and Indian Ocean coastal estates."
    cities={cities}
  />
);

export default KenyaAgents;
