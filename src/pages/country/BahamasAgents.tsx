import CountryAgentsPage from "@/components/CountryAgentsPage";

const cities = [
    { name: "Nassau", slug: "nassau" },
];

const BahamasAgents = () => (
  <CountryAgentsPage
    country="Bahamas"
    flag="🇧🇸"
    region="Caribbean"
    heroImage="https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&h=1080&fit=crop"
    description="The Bahamas offers unparalleled Caribbean luxury with pristine beaches, crystal-clear waters, and exclusive island estates that define tropical opulence."
    cities={cities}
  />
);

export default BahamasAgents;
