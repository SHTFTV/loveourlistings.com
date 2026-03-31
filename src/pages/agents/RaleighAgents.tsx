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
    intro="Raleigh's luxury market features elegant estates in Hayes Barton, executive homes in North Hills, and premium properties in the Research Triangle's most prestigious communities."
    whyContact="Whether you're buying or selling luxury property in Raleigh, connecting with one of these elite agents ensures your property receives the exposure, pricing strategy, and white-glove service it demands. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default RaleighAgents;
