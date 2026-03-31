import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Cora Bett Thomas",
    brokerage: "Cora Bett Thomas Realty",
    specialty: "Historic District · Victorian Homes · Squares",
    bio: "Savannah's legendary luxury agent, Cora Bett Thomas has been the definitive voice in the city's historic luxury market for decades.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Savannah's #1 Luxury Agent",
  },
  {
    name: "Liza DiMarco",
    brokerage: "Compass",
    specialty: "Isle of Hope · Skidaway Island · Waterfront",
    bio: "A top Compass agent in Savannah, Liza specializes in Isle of Hope, Skidaway Island, and the city's most desirable waterfront properties.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Compass Top Producer",
  },
  {
    name: "Roger McFarlane",
    brokerage: "Sotheby's International Realty",
    specialty: "Ardsley Park · Tybee Island · Investment",
    bio: "Representing Sotheby's in Savannah, Roger brings global marketing to the Coastal Empire's finest properties.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Sotheby's International Realty",
  }
];

const SavannahAgents = () => (
  <CityAgentsPage
    city="Savannah"
    region="Georgia, United States"
    heroImage="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1920&h=1080&fit=crop"
    intro="Landmark Historic District mansions overlooking Savannah's 22 original squares trade between $1.5M and $8M, while Isle of Hope and Skidaway Island waterfront estates command $1,200+ per square foot with marsh and Intracoastal views. Savannah's luxury market benefits from Georgia's favorable tax structure, SCAD-driven cultural renaissance, and a growing remote-work migration from the Northeast."
    whyContact="Savannah's historic luxury properties require agents who navigate HDBR (Historic District Board of Review) regulations, preservation easements, and the unique appraisal challenges of 200-year-old architecture. The agents featured here — led by Cora Bett Thomas' legendary brokerage — bring decades of Landmark District expertise and verified buyer networks spanning second-home and investment purchasers."
    agents={agents}
  />
);

export default SavannahAgents;
