// IMMUTABLE pricing matrix — DO NOT calculate dynamically.
// Every entry is hardcoded exactly as specified.

export interface PopulationTier {
  population: number;
  label: string;
  slots: number;
  pricePerMonth: number;
}

export const POPULATION_TIERS: PopulationTier[] = [
  { population: 10000,    label: "10,000",     slots: 3,  pricePerMonth: 10 },
  { population: 20000,    label: "20,000",     slots: 3,  pricePerMonth: 10 },
  { population: 100000,   label: "100,000",    slots: 3,  pricePerMonth: 10 },
  { population: 250000,   label: "250,000",    slots: 4,  pricePerMonth: 10 },
  { population: 400000,   label: "400,000",    slots: 5,  pricePerMonth: 10 },
  { population: 500000,   label: "500,000",    slots: 5,  pricePerMonth: 10 },
  { population: 600000,   label: "600,000",    slots: 6,  pricePerMonth: 10 },
  { population: 700000,   label: "700,000",    slots: 7,  pricePerMonth: 10 },
  { population: 800000,   label: "800,000",    slots: 8,  pricePerMonth: 10 },
  { population: 900000,   label: "900,000",    slots: 9,  pricePerMonth: 10 },
  { population: 1000000,  label: "1,000,000",  slots: 10, pricePerMonth: 10 },
  { population: 2000000,  label: "2,000,000",  slots: 10, pricePerMonth: 20 },
  { population: 3000000,  label: "3,000,000",  slots: 10, pricePerMonth: 30 },
  { population: 4000000,  label: "4,000,000",  slots: 10, pricePerMonth: 40 },
  { population: 5000000,  label: "5,000,000",  slots: 10, pricePerMonth: 50 },
  { population: 6000000,  label: "6,000,000",  slots: 10, pricePerMonth: 60 },
  { population: 7000000,  label: "7,000,000",  slots: 10, pricePerMonth: 70 },
  { population: 8000000,  label: "8,000,000",  slots: 10, pricePerMonth: 80 },
  { population: 9000000,  label: "9,000,000",  slots: 10, pricePerMonth: 90 },
  { population: 10000000, label: "10,000,000", slots: 10, pricePerMonth: 100 },
  { population: 15000000, label: "15,000,000", slots: 10, pricePerMonth: 150 },
  { population: 20000000, label: "20,000,000", slots: 10, pricePerMonth: 200 },
  { population: 30000000, label: "30,000,000", slots: 10, pricePerMonth: 300 },
];

export interface AddOn {
  name: string;
  price: string;
  cadence: string;
  description: string;
}

export const PUBLISHING_ADDONS: AddOn[] = [
  { name: "Guest Post Publishing",       price: "+$10.00", cadence: "added to slot price / month",  description: "Sponsored editorial slot inside the magazine feed." },
  { name: "Editorial Feature Post",      price: "+$10.00", cadence: "added to slot price / month",  description: "Curated long-form feature with editorial styling." },
  { name: "SEO Realtor Profile Page",    price: "+$10.00", cadence: "added to slot price / month",  description: "Dedicated SEO-optimized realtor expert page." },
  { name: "TALC.tv Visual Blast",        price: "$10.00",  cadence: "per post (pay-as-you-go)",     description: "Programmatic video distribution across the TALC.tv network." },
  { name: "EyeSpyr Hall Visualizer",     price: "$2.00",   cadence: "per render (pay-as-you-go)",   description: "AI-driven staging and architectural visualization renders." },
  { name: "LoveOur Listings Feature Pack", price: "$159.00", cadence: "one-time flat",              description: "Media kit, network blast, branded overlay graphics, editorial post." },
];

export interface DashboardUpsell {
  name: string;
  price: string;
  cadence: string;
  description: string;
}

export const DASHBOARD_UPSELLS: DashboardUpsell[] = [
  { name: "Position #1 Feature",          price: "Slot Price × 0.50", cadence: "added to monthly billing", description: "Pin your listing to the #1 anchor position within the territory." },
  { name: "High-Authority Backlink Pack", price: "$25.00",            cadence: "one-time",                 description: "Premium backlinks pushed across our 150+ partner domain network." },
  { name: "TALC.tv Visual Blast",         price: "$10.00",            cadence: "per post",                 description: "Push video content automatically across the TALC.tv distribution." },
  { name: "EyeSpyr Hall Visualizer",      price: "$2.00",             cadence: "per render",               description: "Generate architectural and staging renders on-demand." },
];

// Cross-brand network links — used in nav + footer.
export const NETWORK_LINKS = [
  { name: "TALC.tv",          href: "https://talc.tv",          description: "Video distribution" },
  { name: "EyeSpyr",          href: "https://eyespyr.com",      description: "Visual intelligence" },
  { name: "Weddings.io",      href: "https://weddings.io",      description: "Luxury weddings" },
  { name: "Health Wealth Home", href: "https://healthwealthhome.com", description: "Lifestyle journal" },
  { name: "Industry Army Marketing", href: "https://industryarmy.com", description: "Parent network" },
];