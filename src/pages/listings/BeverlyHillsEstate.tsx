import ListingDetailPage from "@/components/ListingDetailPage";

const BeverlyHillsEstate = () => (
  <ListingDetailPage
    image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
    price="$135,000,000 USD"
    agent="Private Beverly Hills — Denise Moreno"
    location="Beverly Hills, CA"
    externalUrl="https://privatebeverlyhills.com/home-search/listings/1827339949656712211-1261-Angelo-Dr"
    description="This $135M Beverly Hills mega-estate is among the most expensive residential listings in the United States. Spanning over 30,000 sq ft on Angelo Drive — one of the city's most exclusive streets — the compound features a main residence, two guest houses, a 20-car collector's garage, and grounds designed for resort-level living. Every room commands sweeping views from downtown LA to the Pacific Ocean."
    features={["30,000+ sq ft mega-estate", "20-car collector's garage", "Two guest houses", "Resort-style infinity pool", "Professional screening room", "Panoramic city-to-ocean views", "Staff quarters & service kitchen", "Gated compound with 24/7 security"]}
    neighborhood="Angelo Drive sits at the pinnacle of Beverly Hills luxury, a winding road home to billionaires, entertainment moguls, and tech titans. The address offers complete privacy while remaining minutes from Rodeo Drive, Spago, and the Beverly Hills Hotel. This is the ultimate expression of Los Angeles living."
  />
);

export default BeverlyHillsEstate;
