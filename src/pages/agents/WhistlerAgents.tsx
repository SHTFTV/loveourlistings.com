import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Dean Linnell",
    brokerage: "RE/MAX Sea to Sky Real Estate",
    specialty: "Whistler Village · Ski-In/Ski-Out · Chalets",
    bio: "Licensed since 1998 with 1,300+ completed sales and over $300 million in career volume, Dean Linnell is widely regarded as the best realtor in Whistler. His nearly three decades of mountain market expertise makes him the definitive authority on luxury ski properties in the Sea to Sky corridor.",
    website: "https://www.whistler-realestate.com",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "1,300+ Sales · $300M+ Career Volume",
  },
  {
    name: "Andrew King",
    brokerage: "Whistler Spaces · Engel & Völkers",
    specialty: "Whistler · Squamish · Pemberton",
    bio: "Andrew King of Whistler Spaces curates luxury real estate across the Sea to Sky corridor. Whether it's a ski-in/ski-out chalet in Whistler Village or a mountain estate in Pemberton, Andrew's boutique approach and deep local knowledge ensure every client finds their perfect mountain retreat.",
    website: "https://whistlerspaces.com",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Curated Luxury · Sea to Sky",
  },
  {
    name: "Shauna O'Callaghan",
    brokerage: "Personal Real Estate Corporation",
    specialty: "Boutique Service · Confidential Sales",
    bio: "Shauna O'Callaghan is known for her attention to detail and confidential, boutique approach to Whistler luxury real estate. Her clients value privacy and discretion, and Shauna delivers personalized service that matches the exclusivity of the properties she represents.",
    website: "https://shaunaocallaghan.com",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Boutique · Confidential Service",
  },
];

const WhistlerAgents = () => (
  <CityAgentsPage
    city="Whistler"
    region="British Columbia, Canada"
    heroImage="https://images.unsplash.com/photo-1551524559-8af4e6624178?w=1920&h=1080&fit=crop"
    intro="Whistler is one of the world's premier mountain resort destinations, and its luxury real estate market reflects that status. From slope-side chalets to architectural masterpieces nestled in old-growth forest, Whistler properties command premium prices and attract an international clientele of discerning buyers."
    whyContact="These top Whistler agents bring decades of mountain market experience and a network of high-net-worth buyers. Pair their expertise with Love Our Listings' iconic Heart-Shaped Sign and your property will have the unforgettable presence it deserves — both at the curb and online."
    agents={agents}
  />
);

export default WhistlerAgents;
