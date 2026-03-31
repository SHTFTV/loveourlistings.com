import ListingDetailPage from "@/components/ListingDetailPage";

const BelAirEstate = () => (
  <ListingDetailPage
    image="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80"
    price="$99,900,000 USD"
    agent="Josh Flagg — Compass"
    location="Bel Air, Los Angeles, CA"
    externalUrl="https://www.compass.com/agents/josh-flagg/"
    description="Listed by celebrity broker Josh Flagg, this $99.9M Bel Air estate is a masterclass in California luxury. The property features over 25,000 sq ft of living space designed by a world-renowned architect, with a 200-foot infinity pool, wellness spa, and entertainment pavilion set among manicured grounds. Every element has been curated to create an experience that rivals the world's finest five-star resorts."
    features={["25,000+ sq ft architectural estate", "200-foot infinity pool", "Full wellness spa & gym", "Entertainment pavilion", "Professional chef's kitchen", "10-car gallery garage", "Staff wing with separate access", "Gated Bel Air location"]}
    neighborhood="Bel Air is one of the three platinum-triangle neighborhoods of Los Angeles, known for its gated estates, celebrity residents, and absolute privacy. The community is surrounded by the Santa Monica Mountains, offering a retreat-like atmosphere minutes from Sunset Boulevard, UCLA, and the beaches of Santa Monica."
  />
);

export default BelAirEstate;
