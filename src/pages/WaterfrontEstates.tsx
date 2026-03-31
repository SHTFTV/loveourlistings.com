import DestinationPage from "@/components/DestinationPage";

const listings = [
  {
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    price: "$58,800,000 CAD",
    agent: "Malcolm Hasman — Angell, Hasman & Associates",
    location: "West Vancouver, BC",
    badge: "OCEANFRONT",
    url: "https://www.buywaterfrontcanada.com/real-estate-news/canadas-most-expensive-home-for-sale-a-588m-oceanfront-estate-in-west-vancouver-listed-by-malcolm-hasman",
  },
  {
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    price: "$39,980,000 CAD",
    agent: "Sotheby's International Realty Canada",
    location: "Bellevue Ave, West Vancouver, BC",
    url: "https://sothebysrealty.ca/en/property/british-columbia/greater-vancouver-real-estate/west-vancouver",
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    price: "$85,000,000 USD",
    agent: "Sotheby's International Realty",
    location: "Palm Beach, FL",
    badge: "BEACHFRONT",
    url: "https://www.sothebysrealty.com/eng/sales/palm-beach-fl-usa",
  },
  {
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    price: "$78,000,000 USD",
    agent: "Douglas Elliman",
    location: "Miami Beach, FL",
    url: "https://www.elliman.com/miami-beach",
  },
  {
    image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80",
    price: "$45,000,000 USD",
    agent: "Christie's International Real Estate",
    location: "Malibu, CA",
    url: "https://www.christiesrealestate.com/malibu",
  },
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    price: "$29,500,000 CAD",
    agent: "RE/MAX Collection",
    location: "White Rock, BC",
    badge: "WATERFRONT",
    url: "https://www.remax.ca/bc/white-rock-real-estate",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    price: "$22,000,000 USD",
    agent: "Windermere Real Estate",
    location: "Lake Washington, Bellevue, WA",
    url: "https://www.windermere.com/bellevue",
  },
  {
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    price: "$18,900,000 CAD",
    agent: "Engel & Völkers",
    location: "Okanagan Lake, BC",
    url: "https://www.engelvoelkers.com/en-ca/okanagan/",
  },
];

const editorial = [
  {
    title: "The Allure of Waterfront Living",
    content: "Waterfront properties represent the pinnacle of luxury real estate. From the rugged Pacific coastline of West Vancouver to the sun-drenched shores of Palm Beach, these homes offer unmatched privacy, natural beauty, and investment value. The global appetite for oceanfront estates has only intensified post-pandemic.",
  },
  {
    title: "Market Trends 2026",
    content: "Waterfront inventory remains critically low in key markets like West Vancouver and Malibu. Prices in Palm Beach have surged 40% since 2022, while British Columbia's oceanfront market continues to attract international ultra-high-net-worth buyers seeking both lifestyle and stable investment.",
  },
  {
    title: "Why West Vancouver Leads",
    content: "Canada's most expensive waterfront listings consistently originate from West Vancouver's coveted Dundarave to Lighthouse Park corridor. The combination of mountain-meets-ocean setting, proximity to a world-class city, and relative value compared to global peers makes it irresistible.",
  },
  {
    title: "Investment Outlook",
    content: "Waterfront properties historically outperform inland luxury by 15-25% in appreciation. Climate-resilient coastlines — particularly the Pacific Northwest — are seeing outsized demand from buyers seeking both beauty and long-term security.",
  },
];

const WaterfrontEstates = () => (
  <DestinationPage
    title="Waterfront Estates"
    subtitle="Oceanfront mansions & lakeside retreats across the world's most coveted coastlines."
    heroImage="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80"
    intro="From the rocky shores of the Pacific Northwest to the turquoise waters of South Florida, waterfront living is the ultimate expression of luxury. These properties offer private beach access, panoramic water views, and an unrivaled connection to nature — all within reach of the world's greatest cities."
    editorial={editorial}
    listings={listings}
  />
);

export default WaterfrontEstates;
