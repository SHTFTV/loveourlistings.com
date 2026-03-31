import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import BeckyZhouHill from "./pages/BeckyZhouHill.tsx";
import RaphaelleBeaudoin from "./pages/RaphaelleBeaudoin.tsx";
import WaterfrontEstates from "./pages/WaterfrontEstates.tsx";
import SkiVillages from "./pages/SkiVillages.tsx";
import WineCountry from "./pages/WineCountry.tsx";
import IslandRetreats from "./pages/IslandRetreats.tsx";
import NotFound from "./pages/NotFound.tsx";
import PromoBanner from "./components/PromoBanner.tsx";
import VancouverAgents from "./pages/agents/VancouverAgents.tsx";
import WestVancouverAgents from "./pages/agents/WestVancouverAgents.tsx";
import VictoriaAgents from "./pages/agents/VictoriaAgents.tsx";
import KelownaAgents from "./pages/agents/KelownaAgents.tsx";
import WhistlerAgents from "./pages/agents/WhistlerAgents.tsx";
import TorontoAgents from "./pages/agents/TorontoAgents.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <PromoBanner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/realtor/becky-zhou-hill" element={<BeckyZhouHill />} />
          <Route path="/realtor/raphaelle-beaudoin" element={<RaphaelleBeaudoin />} />
          <Route path="/destinations/waterfront" element={<WaterfrontEstates />} />
          <Route path="/destinations/ski-villages" element={<SkiVillages />} />
          <Route path="/destinations/wine-country" element={<WineCountry />} />
          <Route path="/destinations/island-retreats" element={<IslandRetreats />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
