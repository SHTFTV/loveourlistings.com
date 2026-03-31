import DestinationPage from "@/components/DestinationPage";

const listings = [
  {
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80",
    price: "$55,000,000 USD",
    agent: "Christie's International Real Estate",
    location: "Turks & Caicos",
    badge: "PRIVATE ISLAND",
    url: "https://www.christiesrealestate.com/turks-and-caicos",
  },
  {
    image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=800&q=80",
    price: "$38,000,000 USD",
    agent: "Sotheby's International Realty",
    location: "St. Barts, Caribbean",
    url: "https://www.sothebysrealty.com/eng/sales/st-barthelemy",
  },
  {
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    price: "$29,000,000 USD",
    agent: "Compass",
    location: "Maui, Hawaii",
    badge: "BEACHFRONT ESTATE",
    url: "https://www.compass.com/homes-for-sale/maui-hi/",
  },
  {
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    price: "$42,000,000 USD",
    agent: "Knight Frank",
    location: "Maldives",
    url: "https://www.knightfrank.com/properties/residential/for-sale/maldives",
  },
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    price: "$18,500,000 CAD",
    agent: "Engel & Völkers — Vancouver Island",
    location: "Gulf Islands, BC",
    url: "https://www.engelvoelkers.com/en-ca/vancouver-island/",
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    price: "$25,000,000 USD",
    agent: "Douglas Elliman",
    location: "Key Biscayne, FL",
    url: "https://www.elliman.com/key-biscayne",
  },
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    price: "€15,000,000 EUR",
    agent: "Savills",
    location: "Ibiza, Spain",
    url: "https://www.savills.com/property/ibiza",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    price: "A$22,000,000",
    agent: "Sotheby's International Realty — Australia",
    location: "Hamilton Island, Queensland",
    url: "https://www.sothebysrealty.com/eng/sales/queensland-australia",
  },
];

const editorial = [
  {
    title: "The Ultimate Escape",
    content: "Island properties represent the zenith of privacy and exclusivity. From private islands in the Turks & Caicos to beachfront compounds in Maui, these retreats offer total seclusion surrounded by pristine waters and untouched nature.",
  },
  {
    title: "Caribbean Luxury Reborn",
    content: "St. Barts continues to dominate the ultra-luxury Caribbean market, with villa prices rivaling Manhattan penthouses. Post-pandemic demand for private, warm-weather retreats has pushed prices to record highs across the region.",
  },
  {
    title: "Pacific Northwest Islands",
    content: "British Columbia's Gulf Islands and San Juan Islands offer a quieter, temperate alternative to tropical islands. Old-growth forests, protected harbors, and proximity to Vancouver and Seattle make them uniquely appealing for Pacific Northwest luxury buyers.",
  },
  {
    title: "Island Living as Investment",
    content: "Limited land, rising sea-level awareness favoring elevated island properties, and growing remote-work flexibility have made premium island estates one of the strongest performing segments in global luxury real estate.",
  },
];

const IslandRetreats = () => (
  <DestinationPage
    title="Island Retreats"
    subtitle="Private island estates and tropical luxury in the Caribbean, Maldives & Hawaii."
    heroImage="https://images.unsplash.com/photo-1559628233-100c798642d4?w=1600&q=80"
    intro="Island living is the ultimate luxury — total privacy, crystal-clear waters, and the freedom to disconnect from the world. Whether it's a private island in the Caribbean, a beachfront estate in Hawaii, or a hidden gem in BC's Gulf Islands, these properties offer an unparalleled way of life."
    editorial={editorial}
    listings={listings}
  />
);

export default IslandRetreats;
