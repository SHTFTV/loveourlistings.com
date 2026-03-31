import CityAgentsPage from "@/components/CityAgentsPage";

const agents = [
  {
    name: "Baron Bruno",
    brokerage: "Professionals FIJI Real Estate",
    specialty: "Luxury Resorts · Private Islands · Denarau · Coral Coast",
    bio: "A former Wall Street professional turned Fiji luxury real estate specialist, Baron Bruno is the Owner and Director of Professionals FIJI Real Estate. Licensed nationally (REALB License #0217), he brings international financial acumen to Fiji's unique island property market — from private island acquisitions to Denarau resort residences and beachfront estates along the Coral Coast.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=top",
    accolades: "Owner & Director · Wall Street Background",
  },
  {
    name: "Sapna Vithal",
    brokerage: "Bayleys Real Estate Fiji",
    specialty: "Residential · Property Law · Investment · Coastal Estates",
    bio: "Sapna Vithal is Bayleys Fiji's property law expert, bringing rigorous legal knowledge to every luxury transaction. Representing one of Australasia's most trusted real estate brands, she guides international buyers through Fiji's unique property regulations while sourcing premium beachfront homes, resort residences, and coastal estates across Nadi and the western islands.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top",
    accolades: "Bayleys · Property Law Expert",
  },
  {
    name: "Azbar Nadeem",
    brokerage: "Professionals FIJI Real Estate",
    specialty: "Sales & Rental · Beachfront · Development Land · Resorts",
    bio: "As the longest-tenured employee and top Sales Agent at Professionals FIJI, Azbar Nadeem knows the entire Fijian real estate landscape inside out. With 36+ listings and a strong track record averaging $2.3M per sale, he is the go-to advisor for international buyers seeking luxury beachfront properties, development land, and resort investments across Fiji's islands.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=top",
    accolades: "Top Producer · $2.3M Avg Sale · Longest Tenured",
  },
];

const NadiAgents = () => (
  <CityAgentsPage
    city="Nadi"
    region="FJ, INT"
    heroImage="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop"
    intro="Fiji offers some of the world's most exclusive tropical real estate, from private island retreats and luxury resort residences on Denarau Island to beachfront estates along the Coral Coast. Nadi — Fiji's gateway city — is the hub for international buyers seeking paradise living, resort investments, and once-in-a-lifetime private island acquisitions."
    whyContact="Whether you're acquiring a private island or selling a Denarau resort residence, these elite Fiji agents bring deep local expertise and international connections. Each agent listed here is eligible for exclusive partnership with Love Our Listings and our iconic Heart-Shaped Sign."
    agents={agents}
  />
);

export default NadiAgents;
