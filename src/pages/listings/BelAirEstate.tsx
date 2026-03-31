import ListingDetailPage from "@/components/ListingDetailPage";

const BelAirEstate = () => (
  <ListingDetailPage
    image="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80"
    price="$99,950,000 USD"
    agent="Compass — Listed via MLS #25520563"
    location="1200 Bel Air Rd, Los Angeles, CA 90077"
    badge="$99.95M — BEL AIR"
    externalUrl="https://www.compass.com/homedetails/1200-Bel-Air-Rd-Los-Angeles-CA-90077/1I349L_pid/"
    description="Known as 'La Fin' — French for 'The End' — 1200 Bel Air Road is marketed as the ultimate expression of modern decadence. Listed at $99,950,000, the property features 12 bedrooms and 17 bathrooms across a compound that has undergone multiple price reductions from its original $139M ask. The estate made headlines when sellers announced they would accept cryptocurrency payments. Listed on Compass under MLS #25520563 (also tracked as #26639473 on Zillow), the property sits on one of Bel Air's most prominent promontories with unobstructed views spanning from the Pacific to downtown LA."
    features={["12 bedrooms, 17 bathrooms", "Known as 'La Fin' (The End)", "Originally listed at $139M, now $99.95M", "Seller accepts cryptocurrency", "Unobstructed ocean-to-downtown views", "Bel Air promontory compound", "MLS #25520563 / Zillow #26639473", "Listed on Compass"]}
    neighborhood="Bel Air is one of Los Angeles' three Platinum Triangle neighbourhoods alongside Beverly Hills and Holmby Hills. Behind its iconic East Gate, winding roads climb through the Santa Monica Mountains past estates owned by entertainment, tech, and finance titans. The enclave offers total seclusion — many properties are invisible from the street — yet Sunset Boulevard, UCLA, Getty Center, and Santa Monica beaches are all within a 15-minute drive."
    agentWebsite="https://abbotsford.io"
    agentWebsiteLabel="Abbotsford.io"
  />
);

export default BelAirEstate;
