import DestinationPage from "@/components/DestinationPage";

const listings = [
  {
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80",
    price: "$22,000,000 USD",
    agent: "Compass — Napa Valley",
    location: "St. Helena, Napa Valley, CA",
    badge: "VINEYARD ESTATE",
    url: "https://www.compass.com/homes-for-sale/st-helena-ca/",
  },
  {
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80",
    price: "$18,500,000 USD",
    agent: "Sotheby's International Realty",
    location: "Sonoma, CA",
    url: "https://www.sothebysrealty.com/eng/sales/sonoma-ca-usa",
  },
  {
    image: "https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?w=800&q=80",
    price: "$14,900,000 CAD",
    agent: "Sotheby's International Realty Canada",
    location: "Okanagan Valley, BC",
    badge: "LAKEFRONT WINERY",
    url: "https://sothebysrealty.ca/en/property/british-columbia/okanagan-real-estate/kelowna",
  },
  {
    image: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&q=80",
    price: "€12,000,000 EUR",
    agent: "Knight Frank",
    location: "Chianti, Tuscany, Italy",
    url: "https://www.knightfrank.com/properties/residential/for-sale/tuscany",
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    price: "€9,500,000 EUR",
    agent: "Savills",
    location: "Saint-Émilion, Bordeaux, France",
    url: "https://www.savills.com/property/bordeaux",
  },
  {
    image: "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?w=800&q=80",
    price: "$8,200,000 USD",
    agent: "Christie's International Real Estate",
    location: "Willamette Valley, OR",
    url: "https://www.christiesrealestate.com/oregon",
  },
  {
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
    price: "$6,900,000 CAD",
    agent: "Engel & Völkers",
    location: "Niagara-on-the-Lake, ON",
    url: "https://www.engelvoelkers.com/en-ca/niagara/",
  },
  {
    image: "https://images.unsplash.com/photo-1566903451935-7196f5aad6cb?w=800&q=80",
    price: "NZ$15,000,000",
    agent: "Sotheby's International Realty — NZ",
    location: "Marlborough, New Zealand",
    url: "https://www.sothebysrealty.com/eng/sales/marlborough-new-zealand",
  },
];

const editorial = [
  {
    title: "Living the Vineyard Life",
    content: "Wine country properties offer a rare blend of agricultural heritage, architectural grandeur, and lifestyle luxury. Owning a vineyard estate means private tastings, estate-grown wines, and entertaining against rolling hills and golden light.",
  },
  {
    title: "Napa & Sonoma Lead the Market",
    content: "California wine country remains the benchmark for vineyard luxury. Napa Valley estates with producing vineyards regularly trade above $20M, driven by limited supply, prestige, and the allure of crafting world-class wines on your own land.",
  },
  {
    title: "The Okanagan Opportunity",
    content: "British Columbia's Okanagan Valley is rapidly emerging as a world-class wine region. With stunning lake views, a dry climate, and award-winning wineries, properties here offer exceptional value compared to Napa — with equally compelling lifestyle appeal.",
  },
  {
    title: "Old World Charm",
    content: "Tuscan villas and Bordeaux châteaux carry centuries of winemaking heritage. These properties offer not just land and vines but a cultural legacy — stone cellars, ancient olive groves, and a pace of life that money can't replicate elsewhere.",
  },
];

const WineCountry = () => (
  <DestinationPage
    title="Wine Country"
    subtitle="Estate properties in Napa Valley, Okanagan, Tuscany, and Bordeaux."
    heroImage="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1600&q=80"
    intro="From the sun-soaked hillsides of Napa Valley to the ancient terraces of Tuscany, wine country living marries agricultural tradition with extraordinary luxury. These estates offer producing vineyards, tasting rooms, and panoramic views — a lifestyle where every sunset feels like a celebration."
    editorial={editorial}
    listings={listings}
  />
);

export default WineCountry;
