import DestinationPage from "@/components/DestinationPage";

const listings = [
  {
    image: "https://images.unsplash.com/photo-1520984032042-162d526883e0?w=800&q=80",
    price: "$35,000,000 CAD",
    agent: "Sotheby's International Realty Canada",
    location: "Whistler, BC",
    badge: "SKI-IN/SKI-OUT",
    url: "https://sothebysrealty.ca/en/property/british-columbia/whistler-real-estate/whistler",
  },
  {
    image: "https://images.unsplash.com/photo-1482784160316-6eb046863ece?w=800&q=80",
    price: "$68,500,000 USD",
    agent: "Christie's International Real Estate",
    location: "Aspen, CO",
    badge: "MOUNTAIN ESTATE",
    url: "https://www.christiesrealestate.com/aspen",
  },
  {
    image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&q=80",
    price: "$28,000,000 USD",
    agent: "Compass",
    location: "Park City, UT",
    url: "https://www.compass.com/homes-for-sale/park-city-ut/",
  },
  {
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80",
    price: "CHF 42,000,000",
    agent: "Knight Frank",
    location: "St. Moritz, Switzerland",
    url: "https://www.knightfrank.com/properties/residential/for-sale/st-moritz",
  },
  {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    price: "$18,500,000 CAD",
    agent: "RE/MAX Sea to Sky",
    location: "Whistler Creekside, BC",
    url: "https://www.remax.ca/bc/whistler-real-estate",
  },
  {
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    price: "$45,000,000 USD",
    agent: "Hilton & Hyland",
    location: "Sun Valley, ID",
    url: "https://www.hiltonhyland.com",
  },
  {
    image: "https://images.unsplash.com/photo-1502786129293-79981df4e689?w=800&q=80",
    price: "€25,000,000 EUR",
    agent: "Savills",
    location: "Courchevel, French Alps",
    url: "https://www.savills.com/property/courchevel",
  },
  {
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
    price: "$22,000,000 USD",
    agent: "LIV Sotheby's International Realty",
    location: "Vail, CO",
    url: "https://www.livsothebysrealty.com/vail",
  },
];

const editorial = [
  {
    title: "Alpine Luxury Reimagined",
    content: "Today's mountain chalets are far from rustic cabins. Expect heated driveways, private gondolas, wine cellars carved into rock, and floor-to-ceiling glass framing pristine peaks. Whistler and Aspen lead the way in redefining what ski-in/ski-out luxury means.",
  },
  {
    title: "Year-Round Appeal",
    content: "Modern ski villages are four-season destinations. Hiking, mountain biking, golf, and cultural festivals have transformed these communities into year-round luxury hubs — driving consistent demand and appreciation in property values.",
  },
  {
    title: "The European Standard",
    content: "St. Moritz and Courchevel remain the gold standard for alpine luxury, attracting royalty and billionaires. European ski properties command a premium for their history, infrastructure, and proximity to world-class dining and culture.",
  },
  {
    title: "Whistler's Rise",
    content: "Since the 2010 Olympics, Whistler has cemented itself as North America's premier ski destination. Limited buildable land, strict development controls, and growing international demand have pushed top-tier properties well beyond $20M CAD.",
  },
];

const SkiVillages = () => (
  <DestinationPage
    title="Ski Villages"
    subtitle="Luxury chalets in Whistler, Aspen, St. Moritz, and beyond."
    heroImage="https://images.unsplash.com/photo-1520984032042-162d526883e0?w=1600&q=80"
    intro="The world's most exclusive ski villages offer more than powder days and après-ski. These are communities where the ultra-wealthy gather to unwind in architectural masterpieces perched on mountainsides, with private slopes, helicopter access, and views that stretch forever."
    editorial={editorial}
    listings={listings}
  />
);

export default SkiVillages;
