import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EditorialFeed from "@/components/EditorialFeed";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <EditorialFeed />
      <Footer />
    </div>
  );
};

export default Index;
