import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Kirk Chamberlain",
    brokerage: "Chamberlain Property Group",
    specialty: "Okanagan Luxury · Lakeshore Estates",
    bio: "Named one of the TOP 100 Real Estate Brokers of the World in 2025, Kirk Chamberlain leads the Okanagan's premier brokerage with over $6 billion in career sales. The Chamberlain Property Group is synonymous with luxury in Kelowna, specializing in lakefront estates and premium Okanagan properties.",
    phone: "(778) 476-7778",
    website: "https://www.chamberlainpropertygroup.ca",
    image: "https://images.unsplash.com/photo-1556157382-97eded2f9b71?w=600&h=800&fit=crop&crop=top",
    accolades: "TOP 100 Brokers of the World 2025 · $6B+ Sold",
  },
  {
    name: "Krista Johnstone",
    brokerage: "RE/MAX Kelowna",
    specialty: "Upper Mission · Wilden · Glenmore",
    bio: "Krista Johnstone is one of Kelowna's most recognized luxury realtors, specializing in the city's most desirable neighbourhoods including Upper Mission, Wilden, and Glenmore. Her hyperlocal expertise and personalized service make her the top choice for discerning Okanagan buyers and sellers.",
    phone: "(250) 300-3807",
    website: "https://kristajohnstone.com",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop&crop=top",
    accolades: "Top Kelowna Realtor",
  },
  {
    name: "Keith Watts",
    brokerage: "Royal LePage Kelowna",
    specialty: "Luxury Homes · Investment Properties",
    bio: "Keith Watts brings sharp market insight and a data-driven approach to Kelowna's luxury real estate market. His analysis of high-end market trends and deep understanding of lifestyle-driven purchasing decisions makes him invaluable for sellers positioning premium Okanagan properties.",
    website: "https://keithpwatts.com",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop&crop=top",
    accolades: "Luxury Market Analyst",
  },
];

const KelownaAgents = () => (
  <CityAgentsPage
    city="Kelowna"
    region="British Columbia, Canada"
    heroImage="https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=1920&h=1080&fit=crop"
    intro="Kelowna sits at the heart of the Okanagan Valley — a region defined by pristine lakefront living, world-class wineries, and year-round outdoor recreation. The luxury market here commands premium prices for properties with lake views, private docks, and vineyard settings that rival anything in the world."
    whyContact="These elite Kelowna agents have the track record and local expertise to maximize the value of your Okanagan property. Whether you're listing a lakeshore estate or a hilltop masterpiece, partnering with Love Our Listings adds the boutique branding and digital presence that sets your listing apart."
    agents={agents}
  />
);

export default KelownaAgents;
