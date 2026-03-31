import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Glenwood Agency Team",
    brokerage: "The Glenwood Agency",
    specialty: "Hayes Barton · Five Points · ITB",
    bio: "Raleigh's boutique luxury brokerage, The Glenwood Agency specializes in Inside-the-Beltline properties including Hayes Barton and Five Points estates.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Raleigh's Top Luxury Brokerage",
  },
  {
    name: "Linda Craft",
    brokerage: "Linda Craft & Team Realtors",
    specialty: "North Hills · Falls Lake · Estate Properties",
    bio: "One of Raleigh's most recognized luxury agents, Linda Craft brings decades of experience to the Triangle's premium real estate market.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Triangle's Top Agent",
  },
  {
    name: "Jon Hauser",
    brokerage: "Compass",
    specialty: "Cary · Apex · Custom Homes",
    bio: "A leading Triangle luxury agent with Compass, Jon specializes in premium properties in Cary, Apex, and Raleigh's newest luxury developments.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Compass Top Producer",
  }
];

const RaleighAgents = () => (
  <CityAgentsPage
    city="Raleigh"
    region="North Carolina, United States"
    heroImage="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1920&h=1080&fit=crop"
    intro="Hayes Barton's historic estates on tree-lined streets trade between $1.5M and $5M, while ITB (Inside-the-Beltline) properties in Five Points and Oakwood average $600+ per square foot. The Research Triangle's explosive tech and biotech growth — anchored by Apple, Google, and Epic Games campuses — has made Raleigh's $2M+ segment the Southeast's fastest-growing luxury market outside of Florida."
    whyContact="Raleigh's luxury inventory turns over 40% faster than the national average, driven by tech-sector relocations from the Bay Area and Northeast. The agents featured here hold Glenwood Agency, Compass, and boutique-brokerage production records with deep Triangle corporate-relocation and new-construction networks."
    agents={agents}
  />
);

export default RaleighAgents;
