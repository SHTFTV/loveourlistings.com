import Navbar from "@/components/Navbar";
import HeroSearch from "@/components/HeroSearch";
import FeaturedProfessionals from "@/components/FeaturedProfessionals";
import RecentNews from "@/components/RecentNews";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import NoteworthyListings from "@/components/NoteworthyListings";
import DiscoverCards from "@/components/DiscoverCards";
import WorldwideLuxury from "@/components/WorldwideLuxury";
import LuxuryLifestyle from "@/components/LuxuryLifestyle";
import FooterFull from "@/components/FooterFull";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSearch />
      <FeaturedProfessionals />
      <RecentNews />
      <FeaturedDestinations />
      <NoteworthyListings />
      <DiscoverCards />
      <WorldwideLuxury />
      <LuxuryLifestyle />
      <FooterFull />
    </div>
  );
};

export default Index;
