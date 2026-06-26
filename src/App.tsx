import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import Index from "./pages/Index.tsx";
import BeckyZhouHill from "./pages/BeckyZhouHill.tsx";
import PricingPage from "./pages/PricingPage.tsx";
import GuestPostPage from "./pages/GuestPostPage.tsx";
import SeoRealtorPage from "./pages/SeoRealtorPage.tsx";
import TalcTvPage from "./pages/TalcTvPage.tsx";
import EyeSpyrPage from "./pages/EyeSpyrPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import CelebrityEstatesPage from "./pages/CelebrityEstatesPage.tsx";
import CelebrityPage from "./pages/CelebrityPage.tsx";
import RealtorsIndexPage from "./pages/RealtorsIndexPage.tsx";
import DashboardPage from "./pages/DashboardPage.tsx";
import ImageHealthPage from "./pages/admin/ImageHealthPage.tsx";
import AuthPage from "./pages/AuthPage.tsx";
import AdminGuard from "./components/AdminGuard.tsx";
import RaphaelleBeaudoin from "./pages/RaphaelleBeaudoin.tsx";
import WaterfrontEstates from "./pages/WaterfrontEstates.tsx";
import SkiVillages from "./pages/SkiVillages.tsx";
import WineCountry from "./pages/WineCountry.tsx";
import IslandRetreats from "./pages/IslandRetreats.tsx";
import NotFound from "./pages/NotFound.tsx";

const listingRoutes = [
  { path: "/listing/west-vancouver-waterfront", component: lazy(() => import("./pages/listings/WestVancouverWaterfront.tsx")) },
  { path: "/listing/bridle-path-toronto", component: lazy(() => import("./pages/listings/BridlePathToronto.tsx")) },
  { path: "/listing/bellevue-west-vancouver", component: lazy(() => import("./pages/listings/BellevueWestVancouver.tsx")) },
  { path: "/listing/shaughnessy-vancouver", component: lazy(() => import("./pages/listings/ShaughnessyVancouver.tsx")) },
  { path: "/listing/beverly-hills-estate", component: lazy(() => import("./pages/listings/BeverlyHillsEstate.tsx")) },
  { path: "/listing/bel-air-estate", component: lazy(() => import("./pages/listings/BelAirEstate.tsx")) },
  { path: "/listing/bellevue-washington", component: lazy(() => import("./pages/listings/BellevueWashington.tsx")) },
  { path: "/listing/bridle-path-toronto-2", component: lazy(() => import("./pages/listings/BridlePathToronto2.tsx")) },
];

const agentRoutes = [
  { path: "/agents/vancouver", component: lazy(() => import("./pages/agents/VancouverAgents.tsx")) },
  { path: "/agents/west-vancouver", component: lazy(() => import("./pages/agents/WestVancouverAgents.tsx")) },
  { path: "/agents/victoria", component: lazy(() => import("./pages/agents/VictoriaAgents.tsx")) },
  { path: "/agents/kelowna", component: lazy(() => import("./pages/agents/KelownaAgents.tsx")) },
  { path: "/agents/whistler", component: lazy(() => import("./pages/agents/WhistlerAgents.tsx")) },
  { path: "/agents/toronto", component: lazy(() => import("./pages/agents/TorontoAgents.tsx")) },
  { path: "/agents/burnaby", component: lazy(() => import("./pages/agents/BurnabyAgents.tsx")) },
  { path: "/agents/surrey", component: lazy(() => import("./pages/agents/SurreyAgents.tsx")) },
  { path: "/agents/coquitlam", component: lazy(() => import("./pages/agents/CoquitlamAgents.tsx")) },
  { path: "/agents/new-westminster", component: lazy(() => import("./pages/agents/NewWestminsterAgents.tsx")) },
  { path: "/agents/north-vancouver", component: lazy(() => import("./pages/agents/NorthVancouverAgents.tsx")) },
  { path: "/agents/port-coquitlam", component: lazy(() => import("./pages/agents/PortCoquitlamAgents.tsx")) },
  { path: "/agents/port-moody", component: lazy(() => import("./pages/agents/PortMoodyAgents.tsx")) },
  { path: "/agents/langley", component: lazy(() => import("./pages/agents/LangleyAgents.tsx")) },
  { path: "/agents/delta", component: lazy(() => import("./pages/agents/DeltaAgents.tsx")) },
  { path: "/agents/maple-ridge", component: lazy(() => import("./pages/agents/MapleRidgeAgents.tsx")) },
  { path: "/agents/pitt-meadows", component: lazy(() => import("./pages/agents/PittMeadowsAgents.tsx")) },
  { path: "/agents/white-rock", component: lazy(() => import("./pages/agents/WhiteRockAgents.tsx")) },
  { path: "/agents/abbotsford", component: lazy(() => import("./pages/agents/AbbotsfordAgents.tsx")) },
  { path: "/agents/chilliwack", component: lazy(() => import("./pages/agents/ChilliwackAgents.tsx")) },
  { path: "/agents/mission", component: lazy(() => import("./pages/agents/MissionAgents.tsx")) },
  { path: "/agents/squamish", component: lazy(() => import("./pages/agents/SquamishAgents.tsx")) },
  { path: "/agents/nanaimo", component: lazy(() => import("./pages/agents/NanaimoAgents.tsx")) },
  { path: "/agents/kamloops", component: lazy(() => import("./pages/agents/KamloopsAgents.tsx")) },
  { path: "/agents/prince-george", component: lazy(() => import("./pages/agents/PrinceGeorgeAgents.tsx")) },
  { path: "/agents/montreal", component: lazy(() => import("./pages/agents/MontrealAgents.tsx")) },
  { path: "/agents/calgary", component: lazy(() => import("./pages/agents/CalgaryAgents.tsx")) },
  { path: "/agents/ottawa", component: lazy(() => import("./pages/agents/OttawaAgents.tsx")) },
  { path: "/agents/edmonton", component: lazy(() => import("./pages/agents/EdmontonAgents.tsx")) },
  { path: "/agents/winnipeg", component: lazy(() => import("./pages/agents/WinnipegAgents.tsx")) },
  { path: "/agents/mississauga", component: lazy(() => import("./pages/agents/MississaugaAgents.tsx")) },
  { path: "/agents/brampton", component: lazy(() => import("./pages/agents/BramptonAgents.tsx")) },
  { path: "/agents/quebec-city", component: lazy(() => import("./pages/agents/QuebecCityAgents.tsx")) },
  { path: "/agents/halifax", component: lazy(() => import("./pages/agents/HalifaxAgents.tsx")) },
  { path: "/agents/laval", component: lazy(() => import("./pages/agents/LavalAgents.tsx")) },
  { path: "/agents/london", component: lazy(() => import("./pages/agents/LondonAgents.tsx")) },
  { path: "/agents/markham", component: lazy(() => import("./pages/agents/MarkhamAgents.tsx")) },
  { path: "/agents/vaughan", component: lazy(() => import("./pages/agents/VaughanAgents.tsx")) },
  { path: "/agents/gatineau", component: lazy(() => import("./pages/agents/GatineauAgents.tsx")) },
  { path: "/agents/saskatoon", component: lazy(() => import("./pages/agents/SaskatoonAgents.tsx")) },
  { path: "/agents/kitchener", component: lazy(() => import("./pages/agents/KitchenerAgents.tsx")) },
  { path: "/agents/longueuil", component: lazy(() => import("./pages/agents/LongueuilAgents.tsx")) },
  { path: "/agents/windsor", component: lazy(() => import("./pages/agents/WindsorAgents.tsx")) },
  { path: "/agents/regina", component: lazy(() => import("./pages/agents/ReginaAgents.tsx")) },
  { path: "/agents/oakville", component: lazy(() => import("./pages/agents/OakvilleAgents.tsx")) },
  { path: "/agents/oshawa", component: lazy(() => import("./pages/agents/OshawaAgents.tsx")) },
  { path: "/agents/sherbrooke", component: lazy(() => import("./pages/agents/SherbrookeAgents.tsx")) },
  { path: "/agents/greater-sudbury", component: lazy(() => import("./pages/agents/GreaterSudburyAgents.tsx")) },
  { path: "/agents/levis", component: lazy(() => import("./pages/agents/LevisAgents.tsx")) },
  { path: "/agents/barrie", component: lazy(() => import("./pages/agents/BarrieAgents.tsx")) },
  { path: "/agents/saguenay", component: lazy(() => import("./pages/agents/SaguenayAgents.tsx")) },
  { path: "/agents/trois-rivieres", component: lazy(() => import("./pages/agents/TroisRivieresAgents.tsx")) },
  { path: "/agents/guelph", component: lazy(() => import("./pages/agents/GuelphAgents.tsx")) },
  { path: "/agents/whitby", component: lazy(() => import("./pages/agents/WhitbyAgents.tsx")) },
  { path: "/agents/st-catharines", component: lazy(() => import("./pages/agents/StCatharinesAgents.tsx")) },
  { path: "/agents/milton", component: lazy(() => import("./pages/agents/MiltonAgents.tsx")) },
  { path: "/agents/ajax", component: lazy(() => import("./pages/agents/AjaxAgents.tsx")) },
  { path: "/agents/waterloo", component: lazy(() => import("./pages/agents/WaterlooAgents.tsx")) },
  { path: "/agents/saanich", component: lazy(() => import("./pages/agents/SaanichAgents.tsx")) },
  { path: "/agents/thunder-bay", component: lazy(() => import("./pages/agents/ThunderBayAgents.tsx")) },
  { path: "/agents/brantford", component: lazy(() => import("./pages/agents/BrantfordAgents.tsx")) },
  { path: "/agents/red-deer", component: lazy(() => import("./pages/agents/RedDeerAgents.tsx")) },
  { path: "/agents/lethbridge", component: lazy(() => import("./pages/agents/LethbridgeAgents.tsx")) },
  { path: "/agents/terrebonne", component: lazy(() => import("./pages/agents/TerrebonneAgents.tsx")) },
  { path: "/agents/st-johns", component: lazy(() => import("./pages/agents/StJohnsAgents.tsx")) },
  { path: "/agents/repentigny", component: lazy(() => import("./pages/agents/RepentignyAgents.tsx")) },
  { path: "/agents/brossard", component: lazy(() => import("./pages/agents/BrossardAgents.tsx")) },
  { path: "/agents/peterborough", component: lazy(() => import("./pages/agents/PeterboroughAgents.tsx")) },
  { path: "/agents/saint-john", component: lazy(() => import("./pages/agents/SaintJohnAgents.tsx")) },
  { path: "/agents/moncton", component: lazy(() => import("./pages/agents/MonctonAgents.tsx")) },
  { path: "/agents/los-angeles", component: lazy(() => import("./pages/agents/LosAngelesAgents.tsx")) },
  { path: "/agents/chicago", component: lazy(() => import("./pages/agents/ChicagoAgents.tsx")) },
  { path: "/agents/houston", component: lazy(() => import("./pages/agents/HoustonAgents.tsx")) },
  { path: "/agents/phoenix", component: lazy(() => import("./pages/agents/PhoenixAgents.tsx")) },
  { path: "/agents/philadelphia", component: lazy(() => import("./pages/agents/PhiladelphiaAgents.tsx")) },
  { path: "/agents/san-diego", component: lazy(() => import("./pages/agents/SanDiegoAgents.tsx")) },
  { path: "/agents/dallas", component: lazy(() => import("./pages/agents/DallasAgents.tsx")) },
  { path: "/agents/jacksonville", component: lazy(() => import("./pages/agents/JacksonvilleAgents.tsx")) },
  { path: "/agents/san-jose", component: lazy(() => import("./pages/agents/SanJoseAgents.tsx")) },
  { path: "/agents/austin", component: lazy(() => import("./pages/agents/AustinAgents.tsx")) },
  { path: "/agents/charlotte", component: lazy(() => import("./pages/agents/CharlotteAgents.tsx")) },
  { path: "/agents/indianapolis", component: lazy(() => import("./pages/agents/IndianapolisAgents.tsx")) },
  { path: "/agents/san-francisco", component: lazy(() => import("./pages/agents/SanFranciscoAgents.tsx")) },
  { path: "/agents/seattle", component: lazy(() => import("./pages/agents/SeattleAgents.tsx")) },
  { path: "/agents/denver", component: lazy(() => import("./pages/agents/DenverAgents.tsx")) },
  { path: "/agents/nashville", component: lazy(() => import("./pages/agents/NashvilleAgents.tsx")) },
  { path: "/agents/washington", component: lazy(() => import("./pages/agents/WashingtonAgents.tsx")) },
  { path: "/agents/las-vegas", component: lazy(() => import("./pages/agents/LasVegasAgents.tsx")) },
  { path: "/agents/boston", component: lazy(() => import("./pages/agents/BostonAgents.tsx")) },
  { path: "/agents/baltimore", component: lazy(() => import("./pages/agents/BaltimoreAgents.tsx")) },
  { path: "/agents/milwaukee", component: lazy(() => import("./pages/agents/MilwaukeeAgents.tsx")) },
  { path: "/agents/sacramento", component: lazy(() => import("./pages/agents/SacramentoAgents.tsx")) },
  { path: "/agents/atlanta", component: lazy(() => import("./pages/agents/AtlantaAgents.tsx")) },
  { path: "/agents/kansas-city", component: lazy(() => import("./pages/agents/KansasCityAgents.tsx")) },
  { path: "/agents/raleigh", component: lazy(() => import("./pages/agents/RaleighAgents.tsx")) },
  { path: "/agents/miami", component: lazy(() => import("./pages/agents/MiamiAgents.tsx")) },
  { path: "/agents/minneapolis", component: lazy(() => import("./pages/agents/MinneapolisAgents.tsx")) },
  { path: "/agents/tampa", component: lazy(() => import("./pages/agents/TampaAgents.tsx")) },
  { path: "/agents/new-orleans", component: lazy(() => import("./pages/agents/NewOrleansAgents.tsx")) },
  { path: "/agents/honolulu", component: lazy(() => import("./pages/agents/HonoluluAgents.tsx")) },
  { path: "/agents/irvine", component: lazy(() => import("./pages/agents/IrvineAgents.tsx")) },
  { path: "/agents/st-louis", component: lazy(() => import("./pages/agents/StLouisAgents.tsx")) },
  { path: "/agents/pittsburgh", component: lazy(() => import("./pages/agents/PittsburghAgents.tsx")) },
  { path: "/agents/orlando", component: lazy(() => import("./pages/agents/OrlandoAgents.tsx")) },
  { path: "/agents/scottsdale", component: lazy(() => import("./pages/agents/ScottsdaleAgents.tsx")) },
  { path: "/agents/salt-lake-city", component: lazy(() => import("./pages/agents/SaltLakeCityAgents.tsx")) },
  { path: "/agents/fort-lauderdale", component: lazy(() => import("./pages/agents/FortLauderdaleAgents.tsx")) },
  { path: "/agents/ontario", component: lazy(() => import("./pages/agents/OntarioAgents.tsx")) },
  { path: "/agents/naperville", component: lazy(() => import("./pages/agents/NapervilleAgents.tsx")) },
  { path: "/agents/savannah", component: lazy(() => import("./pages/agents/SavannahAgents.tsx")) },
  { path: "/agents/sydney", component: lazy(() => import("./pages/agents/SydneyAgents.tsx")) },
  { path: "/agents/auckland", component: lazy(() => import("./pages/agents/AucklandAgents.tsx")) },
  { path: "/agents/brisbane", component: lazy(() => import("./pages/agents/BrisbaneAgents.tsx")) },
  { path: "/agents/perth", component: lazy(() => import("./pages/agents/PerthAgents.tsx")) },
  { path: "/agents/dubai", component: lazy(() => import("./pages/agents/DubaiAgents.tsx")) },
  { path: "/agents/singapore", component: lazy(() => import("./pages/agents/SingaporeAgents.tsx")) },
  { path: "/agents/hong-kong", component: lazy(() => import("./pages/agents/HongKongAgents.tsx")) },
  { path: "/agents/tokyo", component: lazy(() => import("./pages/agents/TokyoAgents.tsx")) },
  { path: "/agents/stamford", component: lazy(() => import("./pages/agents/StamfordAgents.tsx")) },
  { path: "/agents/newport-beach", component: lazy(() => import("./pages/agents/NewportBeachAgents.tsx")) },
  { path: "/agents/boca-raton", component: lazy(() => import("./pages/agents/BocaRatonAgents.tsx")) },
  { path: "/agents/palo-alto", component: lazy(() => import("./pages/agents/PaloAltoAgents.tsx")) },
  { path: "/agents/santa-barbara", component: lazy(() => import("./pages/agents/SantaBarbaraAgents.tsx")) },
  { path: "/agents/new-brunswick", component: lazy(() => import("./pages/agents/NewBrunswickAgents.tsx")) },
  { path: "/agents/charleston", component: lazy(() => import("./pages/agents/CharlestonAgents.tsx")) },
  { path: "/agents/aspen", component: lazy(() => import("./pages/agents/AspenAgents.tsx")) },
  { path: "/agents/palm-beach", component: lazy(() => import("./pages/agents/PalmBeachAgents.tsx")) },
  { path: "/agents/hamptons", component: lazy(() => import("./pages/agents/HamptonsAgents.tsx")) },
  { path: "/agents/malibu", component: lazy(() => import("./pages/agents/MalibuAgents.tsx")) },
  { path: "/agents/mexico-city", component: lazy(() => import("./pages/agents/MexicoCityAgents.tsx")) },
  { path: "/agents/cancun", component: lazy(() => import("./pages/agents/CancunAgents.tsx")) },
  { path: "/agents/nassau", component: lazy(() => import("./pages/agents/NassauAgents.tsx")) },
  { path: "/agents/grand-cayman", component: lazy(() => import("./pages/agents/GrandCaymanAgents.tsx")) },
  { path: "/agents/punta-cana", component: lazy(() => import("./pages/agents/PuntaCanaAgents.tsx")) },
  { path: "/agents/san-juan", component: lazy(() => import("./pages/agents/SanJuanAgents.tsx")) },
  { path: "/agents/gustavia", component: lazy(() => import("./pages/agents/GustaviaAgents.tsx")) },
  { path: "/agents/providenciales", component: lazy(() => import("./pages/agents/ProvidencialesAgents.tsx")) },
  { path: "/agents/tortola", component: lazy(() => import("./pages/agents/TortolaAgents.tsx")) },
  { path: "/agents/paris", component: lazy(() => import("./pages/agents/ParisAgents.tsx")) },
  { path: "/agents/munich", component: lazy(() => import("./pages/agents/MunichAgents.tsx")) },
  { path: "/agents/milan", component: lazy(() => import("./pages/agents/MilanAgents.tsx")) },
  { path: "/agents/rome", component: lazy(() => import("./pages/agents/RomeAgents.tsx")) },
  { path: "/agents/monaco", component: lazy(() => import("./pages/agents/MonacoAgents.tsx")) },
  { path: "/agents/lisbon", component: lazy(() => import("./pages/agents/LisbonAgents.tsx")) },
  { path: "/agents/madrid", component: lazy(() => import("./pages/agents/MadridAgents.tsx")) },
  { path: "/agents/geneva", component: lazy(() => import("./pages/agents/GenevaAgents.tsx")) },
  { path: "/agents/tel-aviv", component: lazy(() => import("./pages/agents/TelAvivAgents.tsx")) },
  { path: "/agents/doha", component: lazy(() => import("./pages/agents/DohaAgents.tsx")) },
  { path: "/agents/mumbai", component: lazy(() => import("./pages/agents/MumbaiAgents.tsx")) },
  { path: "/agents/bangkok", component: lazy(() => import("./pages/agents/BangkokAgents.tsx")) },
  { path: "/agents/nadi", component: lazy(() => import("./pages/agents/NadiAgents.tsx")) },
  { path: "/agents/nairobi", component: lazy(() => import("./pages/agents/NairobiAgents.tsx")) },
  { path: "/agents/port-louis", component: lazy(() => import("./pages/agents/PortLouisAgents.tsx")) },
  { path: "/agents/marrakech", component: lazy(() => import("./pages/agents/MarrakechAgents.tsx")) },
  { path: "/agents/cape-town", component: lazy(() => import("./pages/agents/CapeTownAgents.tsx")) },
  { path: "/agents/mykonos", component: lazy(() => import("./pages/agents/MykonosAgents.tsx")) },
  { path: "/agents/new-york", component: lazy(() => import("./pages/agents/NewYorkAgents.tsx")) },
];

const countryRoutes = [
  { path: "/country/canada", component: lazy(() => import("./pages/country/CanadaAgents.tsx")) },
  { path: "/country/mexico", component: lazy(() => import("./pages/country/MexicoAgents.tsx")) },
  { path: "/country/united-states", component: lazy(() => import("./pages/country/UnitedStatesAgents.tsx")) },
  { path: "/country/bahamas", component: lazy(() => import("./pages/country/BahamasAgents.tsx")) },
  { path: "/country/cayman-islands", component: lazy(() => import("./pages/country/CaymanIslandsAgents.tsx")) },
  { path: "/country/dominican-republic", component: lazy(() => import("./pages/country/DominicanRepublicAgents.tsx")) },
  { path: "/country/puerto-rico", component: lazy(() => import("./pages/country/PuertoRicoAgents.tsx")) },
  { path: "/country/saint-barthelemy", component: lazy(() => import("./pages/country/SaintBarthelemyAgents.tsx")) },
  { path: "/country/turks-and-caicos", component: lazy(() => import("./pages/country/TurksAndCaicosAgents.tsx")) },
  { path: "/country/british-virgin-islands", component: lazy(() => import("./pages/country/BritishVirginIslandsAgents.tsx")) },
  { path: "/country/france", component: lazy(() => import("./pages/country/FranceAgents.tsx")) },
  { path: "/country/germany", component: lazy(() => import("./pages/country/GermanyAgents.tsx")) },
  { path: "/country/greece", component: lazy(() => import("./pages/country/GreeceAgents.tsx")) },
  { path: "/country/italy", component: lazy(() => import("./pages/country/ItalyAgents.tsx")) },
  { path: "/country/monaco-country", component: lazy(() => import("./pages/country/MonacoCountryAgents.tsx")) },
  { path: "/country/portugal", component: lazy(() => import("./pages/country/PortugalAgents.tsx")) },
  { path: "/country/spain", component: lazy(() => import("./pages/country/SpainAgents.tsx")) },
  { path: "/country/switzerland", component: lazy(() => import("./pages/country/SwitzerlandAgents.tsx")) },
  { path: "/country/united-kingdom", component: lazy(() => import("./pages/country/UnitedKingdomAgents.tsx")) },
  { path: "/country/uae", component: lazy(() => import("./pages/country/UaeAgents.tsx")) },
  { path: "/country/israel", component: lazy(() => import("./pages/country/IsraelAgents.tsx")) },
  { path: "/country/qatar", component: lazy(() => import("./pages/country/QatarAgents.tsx")) },
  { path: "/country/india", component: lazy(() => import("./pages/country/IndiaAgents.tsx")) },
  { path: "/country/thailand", component: lazy(() => import("./pages/country/ThailandAgents.tsx")) },
  { path: "/country/japan", component: lazy(() => import("./pages/country/JapanAgents.tsx")) },
  { path: "/country/australia", component: lazy(() => import("./pages/country/AustraliaAgents.tsx")) },
  { path: "/country/new-zealand", component: lazy(() => import("./pages/country/NewZealandAgents.tsx")) },
  { path: "/country/fiji", component: lazy(() => import("./pages/country/FijiAgents.tsx")) },
  { path: "/country/kenya", component: lazy(() => import("./pages/country/KenyaAgents.tsx")) },
  { path: "/country/mauritius", component: lazy(() => import("./pages/country/MauritiusAgents.tsx")) },
  { path: "/country/morocco", component: lazy(() => import("./pages/country/MoroccoAgents.tsx")) },
  { path: "/country/south-africa", component: lazy(() => import("./pages/country/SouthAfricaAgents.tsx")) },
  { path: "/country/singapore", component: lazy(() => import("./pages/country/SingaporeAgents.tsx")) },
];

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/realtor/becky-zhou-hill" element={<BeckyZhouHill />} />
            <Route path="/realtor/raphaelle-beaudoin" element={<RaphaelleBeaudoin />} />
            <Route path="/destinations/waterfront" element={<WaterfrontEstates />} />
            <Route path="/destinations/ski-villages" element={<SkiVillages />} />
            <Route path="/destinations/wine-country" element={<WineCountry />} />
            <Route path="/destinations/island-retreats" element={<IslandRetreats />} />
            {agentRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={<route.component />} />
            ))}
            {countryRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={<route.component />} />
            ))}
            {listingRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={<route.component />} />
            ))}
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/guest-post" element={<GuestPostPage />} />
            <Route path="/seo-realtor" element={<SeoRealtorPage />} />
            <Route path="/talc-tv" element={<TalcTvPage />} />
            <Route path="/eyespyr" element={<EyeSpyrPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/celebrity-estates" element={<CelebrityEstatesPage />} />
            <Route path="/celebrity" element={<CelebrityPage />} />
            <Route path="/realtors" element={<RealtorsIndexPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/admin/image-health" element={<AdminGuard><ImageHealthPage /></AdminGuard>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
