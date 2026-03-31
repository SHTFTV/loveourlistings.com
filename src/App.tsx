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

import VancouverWaAgents from "./pages/agents/VancouverWaAgents.tsx";
import BurnabyAgents from "./pages/agents/BurnabyAgents.tsx";
import SurreyAgents from "./pages/agents/SurreyAgents.tsx";
import RichmondKyAgents from "./pages/agents/RichmondKyAgents.tsx";
import CoquitlamAgents from "./pages/agents/CoquitlamAgents.tsx";
import NewWestminsterAgents from "./pages/agents/NewWestminsterAgents.tsx";
import NorthVancouverAgents from "./pages/agents/NorthVancouverAgents.tsx";
import PortCoquitlamAgents from "./pages/agents/PortCoquitlamAgents.tsx";
import PortMoodyAgents from "./pages/agents/PortMoodyAgents.tsx";
import LangleyAgents from "./pages/agents/LangleyAgents.tsx";
import DeltaAgents from "./pages/agents/DeltaAgents.tsx";
import MapleRidgeAgents from "./pages/agents/MapleRidgeAgents.tsx";
import PittMeadowsAgents from "./pages/agents/PittMeadowsAgents.tsx";
import WhiteRockAgents from "./pages/agents/WhiteRockAgents.tsx";
import AbbotsfordAgents from "./pages/agents/AbbotsfordAgents.tsx";
import ChilliwackAgents from "./pages/agents/ChilliwackAgents.tsx";
import MissionAgents from "./pages/agents/MissionAgents.tsx";
import SquamishAgents from "./pages/agents/SquamishAgents.tsx";
import NanaimoAgents from "./pages/agents/NanaimoAgents.tsx";
import KamloopsAgents from "./pages/agents/KamloopsAgents.tsx";
import PrinceGeorgeAgents from "./pages/agents/PrinceGeorgeAgents.tsx";
import MontrealAgents from "./pages/agents/MontrealAgents.tsx";
import CalgaryAgents from "./pages/agents/CalgaryAgents.tsx";
import OttawaAgents from "./pages/agents/OttawaAgents.tsx";
import EdmontonAgents from "./pages/agents/EdmontonAgents.tsx";
import WinnipegAgents from "./pages/agents/WinnipegAgents.tsx";
import MississaugaAgents from "./pages/agents/MississaugaAgents.tsx";
import BramptonAgents from "./pages/agents/BramptonAgents.tsx";
import HamiltonOhAgents from "./pages/agents/HamiltonOhAgents.tsx";
import QuebecCityAgents from "./pages/agents/QuebecCityAgents.tsx";
import HalifaxAgents from "./pages/agents/HalifaxAgents.tsx";
import LavalAgents from "./pages/agents/LavalAgents.tsx";
import LondonAgents from "./pages/agents/LondonAgents.tsx";
import MarkhamAgents from "./pages/agents/MarkhamAgents.tsx";
import VaughanAgents from "./pages/agents/VaughanAgents.tsx";
import GatineauAgents from "./pages/agents/GatineauAgents.tsx";
import SaskatoonAgents from "./pages/agents/SaskatoonAgents.tsx";
import KitchenerAgents from "./pages/agents/KitchenerAgents.tsx";
import LongueuilAgents from "./pages/agents/LongueuilAgents.tsx";
import WindsorAgents from "./pages/agents/WindsorAgents.tsx";
import ReginaAgents from "./pages/agents/ReginaAgents.tsx";
import OakvilleAgents from "./pages/agents/OakvilleAgents.tsx";
import BurlingtonVtAgents from "./pages/agents/BurlingtonVtAgents.tsx";
import OshawaAgents from "./pages/agents/OshawaAgents.tsx";
import SherbrookeAgents from "./pages/agents/SherbrookeAgents.tsx";
import GreaterSudburyAgents from "./pages/agents/GreaterSudburyAgents.tsx";
import LevisAgents from "./pages/agents/LevisAgents.tsx";
import BarrieAgents from "./pages/agents/BarrieAgents.tsx";
import SaguenayAgents from "./pages/agents/SaguenayAgents.tsx";
import TroisRivieresAgents from "./pages/agents/TroisRivieresAgents.tsx";
import GuelphAgents from "./pages/agents/GuelphAgents.tsx";
import CambridgeMaAgents from "./pages/agents/CambridgeMaAgents.tsx";
import WhitbyAgents from "./pages/agents/WhitbyAgents.tsx";
import StCatharinesAgents from "./pages/agents/StCatharinesAgents.tsx";
import KingstonNyAgents from "./pages/agents/KingstonNyAgents.tsx";
import MiltonAgents from "./pages/agents/MiltonAgents.tsx";
import AjaxAgents from "./pages/agents/AjaxAgents.tsx";
import WaterlooAgents from "./pages/agents/WaterlooAgents.tsx";
import SaanichAgents from "./pages/agents/SaanichAgents.tsx";
import ThunderBayAgents from "./pages/agents/ThunderBayAgents.tsx";
import BrantfordAgents from "./pages/agents/BrantfordAgents.tsx";
import RedDeerAgents from "./pages/agents/RedDeerAgents.tsx";
import LethbridgeAgents from "./pages/agents/LethbridgeAgents.tsx";
import TerrebonneAgents from "./pages/agents/TerrebonneAgents.tsx";
import StJohnsAgents from "./pages/agents/StJohnsAgents.tsx";
import RepentignyAgents from "./pages/agents/RepentignyAgents.tsx";
import BrossardAgents from "./pages/agents/BrossardAgents.tsx";
import PeterboroughAgents from "./pages/agents/PeterboroughAgents.tsx";
import NiagaraFallsNyAgents from "./pages/agents/NiagaraFallsNyAgents.tsx";
import SaintJohnAgents from "./pages/agents/SaintJohnAgents.tsx";
import MonctonAgents from "./pages/agents/MonctonAgents.tsx";
import NewYorkAgents from "./pages/agents/NewYorkAgents.tsx";
import LosAngelesAgents from "./pages/agents/LosAngelesAgents.tsx";
import ChicagoAgents from "./pages/agents/ChicagoAgents.tsx";
import HoustonAgents from "./pages/agents/HoustonAgents.tsx";
import PhoenixAgents from "./pages/agents/PhoenixAgents.tsx";
import PhiladelphiaAgents from "./pages/agents/PhiladelphiaAgents.tsx";
import SanAntonioAgents from "./pages/agents/SanAntonioAgents.tsx";
import SanDiegoAgents from "./pages/agents/SanDiegoAgents.tsx";
import DallasAgents from "./pages/agents/DallasAgents.tsx";
import JacksonvilleAgents from "./pages/agents/JacksonvilleAgents.tsx";
import FortWorthAgents from "./pages/agents/FortWorthAgents.tsx";
import SanJoseAgents from "./pages/agents/SanJoseAgents.tsx";
import AustinAgents from "./pages/agents/AustinAgents.tsx";
import ColumbusInAgents from "./pages/agents/ColumbusInAgents.tsx";
import CharlotteAgents from "./pages/agents/CharlotteAgents.tsx";
import IndianapolisAgents from "./pages/agents/IndianapolisAgents.tsx";
import SanFranciscoAgents from "./pages/agents/SanFranciscoAgents.tsx";
import SeattleAgents from "./pages/agents/SeattleAgents.tsx";
import DenverAgents from "./pages/agents/DenverAgents.tsx";
import OklahomaCityAgents from "./pages/agents/OklahomaCityAgents.tsx";
import NashvilleAgents from "./pages/agents/NashvilleAgents.tsx";
import WashingtonAgents from "./pages/agents/WashingtonAgents.tsx";
import ElPasoAgents from "./pages/agents/ElPasoAgents.tsx";
import LasVegasAgents from "./pages/agents/LasVegasAgents.tsx";
import BostonAgents from "./pages/agents/BostonAgents.tsx";
import DetroitAgents from "./pages/agents/DetroitAgents.tsx";
import PortlandMeAgents from "./pages/agents/PortlandMeAgents.tsx";
import MemphisAgents from "./pages/agents/MemphisAgents.tsx";
import LouisvilleAgents from "./pages/agents/LouisvilleAgents.tsx";
import BaltimoreAgents from "./pages/agents/BaltimoreAgents.tsx";
import MilwaukeeAgents from "./pages/agents/MilwaukeeAgents.tsx";
import AlbuquerqueAgents from "./pages/agents/AlbuquerqueAgents.tsx";
import TucsonAgents from "./pages/agents/TucsonAgents.tsx";
import FresnoAgents from "./pages/agents/FresnoAgents.tsx";
import SacramentoAgents from "./pages/agents/SacramentoAgents.tsx";
import MesaAgents from "./pages/agents/MesaAgents.tsx";
import AtlantaAgents from "./pages/agents/AtlantaAgents.tsx";
import KansasCityAgents from "./pages/agents/KansasCityAgents.tsx";
import ColoradoSpringsAgents from "./pages/agents/ColoradoSpringsAgents.tsx";
import OmahaAgents from "./pages/agents/OmahaAgents.tsx";
import RaleighAgents from "./pages/agents/RaleighAgents.tsx";
import MiamiAgents from "./pages/agents/MiamiAgents.tsx";
import VirginiaBeachAgents from "./pages/agents/VirginiaBeachAgents.tsx";
import LongBeachNyAgents from "./pages/agents/LongBeachNyAgents.tsx";
import OaklandAgents from "./pages/agents/OaklandAgents.tsx";
import MinneapolisAgents from "./pages/agents/MinneapolisAgents.tsx";
import TulsaAgents from "./pages/agents/TulsaAgents.tsx";
import TampaAgents from "./pages/agents/TampaAgents.tsx";
import ArlingtonAgents from "./pages/agents/ArlingtonAgents.tsx";
import NewOrleansAgents from "./pages/agents/NewOrleansAgents.tsx";
import WichitaAgents from "./pages/agents/WichitaAgents.tsx";
import BakersfieldAgents from "./pages/agents/BakersfieldAgents.tsx";
import ClevelandAgents from "./pages/agents/ClevelandAgents.tsx";
import AuroraIlAgents from "./pages/agents/AuroraIlAgents.tsx";
import AnaheimAgents from "./pages/agents/AnaheimAgents.tsx";
import HonoluluAgents from "./pages/agents/HonoluluAgents.tsx";
import HendersonAgents from "./pages/agents/HendersonAgents.tsx";
import SantaAnaAgents from "./pages/agents/SantaAnaAgents.tsx";
import RiversideAgents from "./pages/agents/RiversideAgents.tsx";
import CorpusChristiAgents from "./pages/agents/CorpusChristiAgents.tsx";
import LexingtonAgents from "./pages/agents/LexingtonAgents.tsx";
import StocktonAgents from "./pages/agents/StocktonAgents.tsx";
import StPaulAgents from "./pages/agents/StPaulAgents.tsx";
import CincinnatiAgents from "./pages/agents/CincinnatiAgents.tsx";
import IrvineAgents from "./pages/agents/IrvineAgents.tsx";
import NewarkCaAgents from "./pages/agents/NewarkCaAgents.tsx";
import StLouisAgents from "./pages/agents/StLouisAgents.tsx";
import PittsburghAgents from "./pages/agents/PittsburghAgents.tsx";
import GreensboroAgents from "./pages/agents/GreensboroAgents.tsx";
import DurhamAgents from "./pages/agents/DurhamAgents.tsx";
import OrlandoAgents from "./pages/agents/OrlandoAgents.tsx";
import JerseyCityAgents from "./pages/agents/JerseyCityAgents.tsx";
import LincolnAgents from "./pages/agents/LincolnAgents.tsx";
import ChulaVistaAgents from "./pages/agents/ChulaVistaAgents.tsx";
import PlanoAgents from "./pages/agents/PlanoAgents.tsx";
import NorthLasVegasAgents from "./pages/agents/NorthLasVegasAgents.tsx";
import AnchorageAgents from "./pages/agents/AnchorageAgents.tsx";
import GilbertAgents from "./pages/agents/GilbertAgents.tsx";
import MadisonAlAgents from "./pages/agents/MadisonAlAgents.tsx";
import ChandlerAgents from "./pages/agents/ChandlerAgents.tsx";
import RenoAgents from "./pages/agents/RenoAgents.tsx";
import FortWayneAgents from "./pages/agents/FortWayneAgents.tsx";
import BuffaloAgents from "./pages/agents/BuffaloAgents.tsx";
import LubbockAgents from "./pages/agents/LubbockAgents.tsx";
import ToledoAgents from "./pages/agents/ToledoAgents.tsx";
import StPetersburgAgents from "./pages/agents/StPetersburgAgents.tsx";
import LaredoAgents from "./pages/agents/LaredoAgents.tsx";
import GlendaleCaAgents from "./pages/agents/GlendaleCaAgents.tsx";
import ScottsdaleAgents from "./pages/agents/ScottsdaleAgents.tsx";
import WinstonSalemAgents from "./pages/agents/WinstonSalemAgents.tsx";
import ChesapeakeAgents from "./pages/agents/ChesapeakeAgents.tsx";
import NorfolkNeAgents from "./pages/agents/NorfolkNeAgents.tsx";
import IrvingAgents from "./pages/agents/IrvingAgents.tsx";
import FremontNeAgents from "./pages/agents/FremontNeAgents.tsx";
import GarlandAgents from "./pages/agents/GarlandAgents.tsx";
import HialeahAgents from "./pages/agents/HialeahAgents.tsx";
import BoiseAgents from "./pages/agents/BoiseAgents.tsx";
import SpokaneAgents from "./pages/agents/SpokaneAgents.tsx";
import BatonRougeAgents from "./pages/agents/BatonRougeAgents.tsx";
import TacomaAgents from "./pages/agents/TacomaAgents.tsx";
import SanBernardinoAgents from "./pages/agents/SanBernardinoAgents.tsx";
import ModestoAgents from "./pages/agents/ModestoAgents.tsx";
import FontanaAgents from "./pages/agents/FontanaAgents.tsx";
import DesMoinesAgents from "./pages/agents/DesMoinesAgents.tsx";
import MorenoValleyAgents from "./pages/agents/MorenoValleyAgents.tsx";
import SantaClaritaAgents from "./pages/agents/SantaClaritaAgents.tsx";
import FayettevilleAgents from "./pages/agents/FayettevilleAgents.tsx";
import BirminghamAgents from "./pages/agents/BirminghamAgents.tsx";
import OxnardAgents from "./pages/agents/OxnardAgents.tsx";
import RochesterMnAgents from "./pages/agents/RochesterMnAgents.tsx";
import PortStLucieAgents from "./pages/agents/PortStLucieAgents.tsx";
import GrandRapidsAgents from "./pages/agents/GrandRapidsAgents.tsx";
import HuntsvilleAgents from "./pages/agents/HuntsvilleAgents.tsx";
import SaltLakeCityAgents from "./pages/agents/SaltLakeCityAgents.tsx";
import FriscoAgents from "./pages/agents/FriscoAgents.tsx";
import YonkersAgents from "./pages/agents/YonkersAgents.tsx";
import HuntingtonBeachAgents from "./pages/agents/HuntingtonBeachAgents.tsx";
import MckinneyAgents from "./pages/agents/MckinneyAgents.tsx";
import MontgomeryAgents from "./pages/agents/MontgomeryAgents.tsx";
import AmarilloAgents from "./pages/agents/AmarilloAgents.tsx";
import LittleRockAgents from "./pages/agents/LittleRockAgents.tsx";
import AkronAgents from "./pages/agents/AkronAgents.tsx";
import AugustaAgents from "./pages/agents/AugustaAgents.tsx";
import GrandPrairieAgents from "./pages/agents/GrandPrairieAgents.tsx";
import OverlandParkAgents from "./pages/agents/OverlandParkAgents.tsx";
import TallahasseeAgents from "./pages/agents/TallahasseeAgents.tsx";
import MobileAgents from "./pages/agents/MobileAgents.tsx";
import KnoxvilleAgents from "./pages/agents/KnoxvilleAgents.tsx";
import CapeCoralAgents from "./pages/agents/CapeCoralAgents.tsx";
import ShreveportAgents from "./pages/agents/ShreveportAgents.tsx";
import TempeAgents from "./pages/agents/TempeAgents.tsx";
import ProvidenceAgents from "./pages/agents/ProvidenceAgents.tsx";
import ChattanoogaAgents from "./pages/agents/ChattanoogaAgents.tsx";
import FortLauderdaleAgents from "./pages/agents/FortLauderdaleAgents.tsx";
import SiouxFallsAgents from "./pages/agents/SiouxFallsAgents.tsx";
import PeoriaIlAgents from "./pages/agents/PeoriaIlAgents.tsx";
import BrownsvilleAgents from "./pages/agents/BrownsvilleAgents.tsx";
import OntarioAgents from "./pages/agents/OntarioAgents.tsx";
import ElkGroveAgents from "./pages/agents/ElkGroveAgents.tsx";
import SalemAgents from "./pages/agents/SalemAgents.tsx";
import SantaRosaAgents from "./pages/agents/SantaRosaAgents.tsx";
import RanchoCucamongaAgents from "./pages/agents/RanchoCucamongaAgents.tsx";
import OceansideAgents from "./pages/agents/OceansideAgents.tsx";
import GardenGroveAgents from "./pages/agents/GardenGroveAgents.tsx";
import PembrokePinesAgents from "./pages/agents/PembrokePinesAgents.tsx";
import EugeneAgents from "./pages/agents/EugeneAgents.tsx";
import CoronaAgents from "./pages/agents/CoronaAgents.tsx";
import CaryAgents from "./pages/agents/CaryAgents.tsx";
import FortCollinsAgents from "./pages/agents/FortCollinsAgents.tsx";
import PalmdaleAgents from "./pages/agents/PalmdaleAgents.tsx";
import SalinasAgents from "./pages/agents/SalinasAgents.tsx";
import PomonaAgents from "./pages/agents/PomonaAgents.tsx";
import HaywardAgents from "./pages/agents/HaywardAgents.tsx";
import LancasterAgents from "./pages/agents/LancasterAgents.tsx";
import AlexandriaLaAgents from "./pages/agents/AlexandriaLaAgents.tsx";
import SurpriseAgents from "./pages/agents/SurpriseAgents.tsx";
import SunnyvaleAgents from "./pages/agents/SunnyvaleAgents.tsx";
import LakewoodWaAgents from "./pages/agents/LakewoodWaAgents.tsx";
import ClarksvilleAgents from "./pages/agents/ClarksvilleAgents.tsx";
import HollywoodAgents from "./pages/agents/HollywoodAgents.tsx";
import TorranceAgents from "./pages/agents/TorranceAgents.tsx";
import EscondidoAgents from "./pages/agents/EscondidoAgents.tsx";
import JolietAgents from "./pages/agents/JolietAgents.tsx";
import NapervilleAgents from "./pages/agents/NapervilleAgents.tsx";
import BellevueNeAgents from "./pages/agents/BellevueNeAgents.tsx";
import RockfordAgents from "./pages/agents/RockfordAgents.tsx";
import BridgeportAgents from "./pages/agents/BridgeportAgents.tsx";
import PatersonAgents from "./pages/agents/PatersonAgents.tsx";
import SavannahAgents from "./pages/agents/SavannahAgents.tsx";
import MiramarAgents from "./pages/agents/MiramarAgents.tsx";
import PasadenaCaAgents from "./pages/agents/PasadenaCaAgents.tsx";
import MesquiteAgents from "./pages/agents/MesquiteAgents.tsx";
import CarrolltonAgents from "./pages/agents/CarrolltonAgents.tsx";
import OlatheAgents from "./pages/agents/OlatheAgents.tsx";
import ThorntonAgents from "./pages/agents/ThorntonAgents.tsx";
import WacoAgents from "./pages/agents/WacoAgents.tsx";
import FullertonAgents from "./pages/agents/FullertonAgents.tsx";
import WestValleyCityAgents from "./pages/agents/WestValleyCityAgents.tsx";
import VisaliaAgents from "./pages/agents/VisaliaAgents.tsx";
import WarrenOhAgents from "./pages/agents/WarrenOhAgents.tsx";
import GainesvilleAgents from "./pages/agents/GainesvilleAgents.tsx";
import CoralSpringsAgents from "./pages/agents/CoralSpringsAgents.tsx";
import SterlingHeightsAgents from "./pages/agents/SterlingHeightsAgents.tsx";
import ColumbiaMdAgents from "./pages/agents/ColumbiaMdAgents.tsx";
import CedarRapidsAgents from "./pages/agents/CedarRapidsAgents.tsx";
import NewHavenAgents from "./pages/agents/NewHavenAgents.tsx";
import TopekaAgents from "./pages/agents/TopekaAgents.tsx";
import ThousandOaksAgents from "./pages/agents/ThousandOaksAgents.tsx";
import ElizabethAgents from "./pages/agents/ElizabethAgents.tsx";
import SimiValleyAgents from "./pages/agents/SimiValleyAgents.tsx";
import HartfordAgents from "./pages/agents/HartfordAgents.tsx";
import FargoAgents from "./pages/agents/FargoAgents.tsx";
import ConcordNhAgents from "./pages/agents/ConcordNhAgents.tsx";
import RosevilleAgents from "./pages/agents/RosevilleAgents.tsx";
import VictorvilleAgents from "./pages/agents/VictorvilleAgents.tsx";
import DentonAgents from "./pages/agents/DentonAgents.tsx";
import PearlandAgents from "./pages/agents/PearlandAgents.tsx";
import ProvoAgents from "./pages/agents/ProvoAgents.tsx";
import MidlandAgents from "./pages/agents/MidlandAgents.tsx";
import CollegeStationAgents from "./pages/agents/CollegeStationAgents.tsx";
import NormanAgents from "./pages/agents/NormanAgents.tsx";
import PalmBayAgents from "./pages/agents/PalmBayAgents.tsx";
import MurrietaAgents from "./pages/agents/MurrietaAgents.tsx";
import WilmingtonDeAgents from "./pages/agents/WilmingtonDeAgents.tsx";
import AthensAgents from "./pages/agents/AthensAgents.tsx";
import RoundRockAgents from "./pages/agents/RoundRockAgents.tsx";
import LewisvilleAgents from "./pages/agents/LewisvilleAgents.tsx";
import HighPointAgents from "./pages/agents/HighPointAgents.tsx";
import WestJordanAgents from "./pages/agents/WestJordanAgents.tsx";
import PompanoBeachAgents from "./pages/agents/PompanoBeachAgents.tsx";
import BillingsAgents from "./pages/agents/BillingsAgents.tsx";
import PuebloAgents from "./pages/agents/PuebloAgents.tsx";
import ArvadaAgents from "./pages/agents/ArvadaAgents.tsx";
import WestminsterCoAgents from "./pages/agents/WestminsterCoAgents.tsx";
import CentennialAgents from "./pages/agents/CentennialAgents.tsx";
import BerkeleyAgents from "./pages/agents/BerkeleyAgents.tsx";
import RichardsonAgents from "./pages/agents/RichardsonAgents.tsx";
import DowneyAgents from "./pages/agents/DowneyAgents.tsx";
import InglewoodAgents from "./pages/agents/InglewoodAgents.tsx";
import ClearwaterAgents from "./pages/agents/ClearwaterAgents.tsx";
import MiamiGardensAgents from "./pages/agents/MiamiGardensAgents.tsx";
import WestCovinaAgents from "./pages/agents/WestCovinaAgents.tsx";
import FairfieldOhAgents from "./pages/agents/FairfieldOhAgents.tsx";
import MurfreesboroAgents from "./pages/agents/MurfreesboroAgents.tsx";
import CarlsbadAgents from "./pages/agents/CarlsbadAgents.tsx";
import AntiochAgents from "./pages/agents/AntiochAgents.tsx";
import TemeculaAgents from "./pages/agents/TemeculaAgents.tsx";
import VenturaAgents from "./pages/agents/VenturaAgents.tsx";
import LowellAgents from "./pages/agents/LowellAgents.tsx";
import ElMonteAgents from "./pages/agents/ElMonteAgents.tsx";
import CostaMesaAgents from "./pages/agents/CostaMesaAgents.tsx";
import DavieAgents from "./pages/agents/DavieAgents.tsx";
import ElginAgents from "./pages/agents/ElginAgents.tsx";
import GreenBayAgents from "./pages/agents/GreenBayAgents.tsx";
import SanMateoAgents from "./pages/agents/SanMateoAgents.tsx";
import BrocktonAgents from "./pages/agents/BrocktonAgents.tsx";
import RialtoAgents from "./pages/agents/RialtoAgents.tsx";
import SantaMariaAgents from "./pages/agents/SantaMariaAgents.tsx";
import LasCrucesAgents from "./pages/agents/LasCrucesAgents.tsx";
import ElCajonAgents from "./pages/agents/ElCajonAgents.tsx";
import SanMarcosTxAgents from "./pages/agents/SanMarcosTxAgents.tsx";
import BurbankAgents from "./pages/agents/BurbankAgents.tsx";
import SouthBendAgents from "./pages/agents/SouthBendAgents.tsx";
import RentonAgents from "./pages/agents/RentonAgents.tsx";
import OdessaAgents from "./pages/agents/OdessaAgents.tsx";
import VacavilleAgents from "./pages/agents/VacavilleAgents.tsx";
import SydneyAgents from "./pages/agents/SydneyAgents.tsx";
import MelbourneFlAgents from "./pages/agents/MelbourneFlAgents.tsx";
import AucklandAgents from "./pages/agents/AucklandAgents.tsx";
import BrisbaneAgents from "./pages/agents/BrisbaneAgents.tsx";
import PerthAgents from "./pages/agents/PerthAgents.tsx";
import DubaiAgents from "./pages/agents/DubaiAgents.tsx";
import SingaporeAgents from "./pages/agents/SingaporeAgents.tsx";
import HongKongAgents from "./pages/agents/HongKongAgents.tsx";
import TokyoAgents from "./pages/agents/TokyoAgents.tsx";
import WaterburyAgents from "./pages/agents/WaterburyAgents.tsx";
import SparksAgents from "./pages/agents/SparksAgents.tsx";
import LeagueCityAgents from "./pages/agents/LeagueCityAgents.tsx";
import SantaClaraAgents from "./pages/agents/SantaClaraAgents.tsx";
import LongmontAgents from "./pages/agents/LongmontAgents.tsx";
import WaukeganAgents from "./pages/agents/WaukeganAgents.tsx";
import DalyCityAgents from "./pages/agents/DalyCityAgents.tsx";
import NewportNewsAgents from "./pages/agents/NewportNewsAgents.tsx";
import SanLeandroAgents from "./pages/agents/SanLeandroAgents.tsx";
import EdinburgAgents from "./pages/agents/EdinburgAgents.tsx";
import CitrusHeightsAgents from "./pages/agents/CitrusHeightsAgents.tsx";
import WoodbridgeAgents from "./pages/agents/WoodbridgeAgents.tsx";
import SandySpringsAgents from "./pages/agents/SandySpringsAgents.tsx";
import LakeForestAgents from "./pages/agents/LakeForestAgents.tsx";
import LawtonAgents from "./pages/agents/LawtonAgents.tsx";
import SanAngeloAgents from "./pages/agents/SanAngeloAgents.tsx";
import DaytonAgents from "./pages/agents/DaytonAgents.tsx";
import SouthFultonAgents from "./pages/agents/SouthFultonAgents.tsx";
import TylerAgents from "./pages/agents/TylerAgents.tsx";
import AllenAgents from "./pages/agents/AllenAgents.tsx";
import BeaumontAgents from "./pages/agents/BeaumontAgents.tsx";
import MenifeeAgents from "./pages/agents/MenifeeAgents.tsx";
import BendAgents from "./pages/agents/BendAgents.tsx";
import NampaAgents from "./pages/agents/NampaAgents.tsx";
import SanRamonAgents from "./pages/agents/SanRamonAgents.tsx";
import NorwalkCtAgents from "./pages/agents/NorwalkCtAgents.tsx";
import BuckeyeAgents from "./pages/agents/BuckeyeAgents.tsx";
import LivoniaAgents from "./pages/agents/LivoniaAgents.tsx";
import ReddingAgents from "./pages/agents/ReddingAgents.tsx";
import EvansvilleAgents from "./pages/agents/EvansvilleAgents.tsx";
import AbileneAgents from "./pages/agents/AbileneAgents.tsx";
import ClovisAgents from "./pages/agents/ClovisAgents.tsx";
import ChicoAgents from "./pages/agents/ChicoAgents.tsx";
import StamfordAgents from "./pages/agents/StamfordAgents.tsx";
import GoodyearAgents from "./pages/agents/GoodyearAgents.tsx";
import FishersAgents from "./pages/agents/FishersAgents.tsx";
import IndependenceAgents from "./pages/agents/IndependenceAgents.tsx";
import SpringfieldOrAgents from "./pages/agents/SpringfieldOrAgents.tsx";
import KilleenAgents from "./pages/agents/KilleenAgents.tsx";
import YumaAgents from "./pages/agents/YumaAgents.tsx";
import FortSmithAgents from "./pages/agents/FortSmithAgents.tsx";
import NewBraunfelsAgents from "./pages/agents/NewBraunfelsAgents.tsx";
import SugarLandAgents from "./pages/agents/SugarLandAgents.tsx";
import KenoshaAgents from "./pages/agents/KenoshaAgents.tsx";
import HamptonAgents from "./pages/agents/HamptonAgents.tsx";
import ConroeAgents from "./pages/agents/ConroeAgents.tsx";
import GreshamAgents from "./pages/agents/GreshamAgents.tsx";
import EverettAgents from "./pages/agents/EverettAgents.tsx";
import NorthCharlestonAgents from "./pages/agents/NorthCharlestonAgents.tsx";
import BrokenArrowAgents from "./pages/agents/BrokenArrowAgents.tsx";
import LansingAgents from "./pages/agents/LansingAgents.tsx";
import LakelandAgents from "./pages/agents/LakelandAgents.tsx";
import AnnArborAgents from "./pages/agents/AnnArborAgents.tsx";
import ElCentroAgents from "./pages/agents/ElCentroAgents.tsx";
import WichitaFallsAgents from "./pages/agents/WichitaFallsAgents.tsx";
import CarmelAgents from "./pages/agents/CarmelAgents.tsx";
import SouthJordanAgents from "./pages/agents/SouthJordanAgents.tsx";
import LeesSummitAgents from "./pages/agents/LeesSummitAgents.tsx";
import SantaFeAgents from "./pages/agents/SantaFeAgents.tsx";
import VistaAgents from "./pages/agents/VistaAgents.tsx";
import CamarilloAgents from "./pages/agents/CamarilloAgents.tsx";
import OremAgents from "./pages/agents/OremAgents.tsx";
import LivermoreAgents from "./pages/agents/LivermoreAgents.tsx";
import NewportBeachAgents from "./pages/agents/NewportBeachAgents.tsx";
import TracyAgents from "./pages/agents/TracyAgents.tsx";
import ComptonAgents from "./pages/agents/ComptonAgents.tsx";
import RedlandsAgents from "./pages/agents/RedlandsAgents.tsx";
import HemetAgents from "./pages/agents/HemetAgents.tsx";
import HesperiaAgents from "./pages/agents/HesperiaAgents.tsx";
import MissionViejoAgents from "./pages/agents/MissionViejoAgents.tsx";
import MantecaAgents from "./pages/agents/MantecaAgents.tsx";
import NapaAgents from "./pages/agents/NapaAgents.tsx";
import MercedAgents from "./pages/agents/MercedAgents.tsx";
import RedwoodCityAgents from "./pages/agents/RedwoodCityAgents.tsx";
import ChinoAgents from "./pages/agents/ChinoAgents.tsx";
import IndioAgents from "./pages/agents/IndioAgents.tsx";
import MaderaAgents from "./pages/agents/MaderaAgents.tsx";
import ChinoHillsAgents from "./pages/agents/ChinoHillsAgents.tsx";
import CarsonAgents from "./pages/agents/CarsonAgents.tsx";
import TustinAgents from "./pages/agents/TustinAgents.tsx";
import ParamountAgents from "./pages/agents/ParamountAgents.tsx";
import HighlandAgents from "./pages/agents/HighlandAgents.tsx";
import WhittierAgents from "./pages/agents/WhittierAgents.tsx";
import SanClementeAgents from "./pages/agents/SanClementeAgents.tsx";
import UplandAgents from "./pages/agents/UplandAgents.tsx";
import HawthorneAgents from "./pages/agents/HawthorneAgents.tsx";
import PittsburgCaAgents from "./pages/agents/PittsburgCaAgents.tsx";
import LodiAgents from "./pages/agents/LodiAgents.tsx";
import TurlockAgents from "./pages/agents/TurlockAgents.tsx";
import PerrisAgents from "./pages/agents/PerrisAgents.tsx";
import DuluthAgents from "./pages/agents/DuluthAgents.tsx";
import BloomingtonInAgents from "./pages/agents/BloomingtonInAgents.tsx";
import SunriseAgents from "./pages/agents/SunriseAgents.tsx";
import PlantationAgents from "./pages/agents/PlantationAgents.tsx";
import BocaRatonAgents from "./pages/agents/BocaRatonAgents.tsx";
import DeltonaAgents from "./pages/agents/DeltonaAgents.tsx";
import LargoAgents from "./pages/agents/LargoAgents.tsx";
import PalmCoastAgents from "./pages/agents/PalmCoastAgents.tsx";
import DeerfieldBeachAgents from "./pages/agents/DeerfieldBeachAgents.tsx";
import BoyntonBeachAgents from "./pages/agents/BoyntonBeachAgents.tsx";
import DelrayBeachAgents from "./pages/agents/DelrayBeachAgents.tsx";
import LauderhillAgents from "./pages/agents/LauderhillAgents.tsx";
import TamaracAgents from "./pages/agents/TamaracAgents.tsx";
import WestonAgents from "./pages/agents/WestonAgents.tsx";
import HomesteadAgents from "./pages/agents/HomesteadAgents.tsx";
import KissimmeeAgents from "./pages/agents/KissimmeeAgents.tsx";
import OcalaAgents from "./pages/agents/OcalaAgents.tsx";
import ApopkaAgents from "./pages/agents/ApopkaAgents.tsx";
import SanfordAgents from "./pages/agents/SanfordAgents.tsx";
import DaytonaBeachAgents from "./pages/agents/DaytonaBeachAgents.tsx";
import SpringHillTnAgents from "./pages/agents/SpringHillTnAgents.tsx";
import PensacolaAgents from "./pages/agents/PensacolaAgents.tsx";
import BrandonAgents from "./pages/agents/BrandonAgents.tsx";
import WesleyChapelAgents from "./pages/agents/WesleyChapelAgents.tsx";
import ClermontAgents from "./pages/agents/ClermontAgents.tsx";
import OcoeeAgents from "./pages/agents/OcoeeAgents.tsx";
import PalmHarborAgents from "./pages/agents/PalmHarborAgents.tsx";
import TownNCountryAgents from "./pages/agents/TownNCountryAgents.tsx";
import GreenvilleNcAgents from "./pages/agents/GreenvilleNcAgents.tsx";
import JoplinAgents from "./pages/agents/JoplinAgents.tsx";
import JeffersonCityAgents from "./pages/agents/JeffersonCityAgents.tsx";
import StCharlesAgents from "./pages/agents/StCharlesAgents.tsx";
import StJosephAgents from "./pages/agents/StJosephAgents.tsx";
import FlorissantAgents from "./pages/agents/FlorissantAgents.tsx";
import BlueSpringsAgents from "./pages/agents/BlueSpringsAgents.tsx";
import OfallonAgents from "./pages/agents/OfallonAgents.tsx";
import StPetersAgents from "./pages/agents/StPetersAgents.tsx";
import SpringdaleAgents from "./pages/agents/SpringdaleAgents.tsx";
import RogersAgents from "./pages/agents/RogersAgents.tsx";
import JonesboroAgents from "./pages/agents/JonesboroAgents.tsx";
import NorthLittleRockAgents from "./pages/agents/NorthLittleRockAgents.tsx";
import ConwayAgents from "./pages/agents/ConwayAgents.tsx";
import PineBluffAgents from "./pages/agents/PineBluffAgents.tsx";
import BentonAgents from "./pages/agents/BentonAgents.tsx";
import HotSpringsAgents from "./pages/agents/HotSpringsAgents.tsx";
import TexarkanaAgents from "./pages/agents/TexarkanaAgents.tsx";
import MetairieAgents from "./pages/agents/MetairieAgents.tsx";
import LafayetteInAgents from "./pages/agents/LafayetteInAgents.tsx";
import LakeCharlesAgents from "./pages/agents/LakeCharlesAgents.tsx";
import KennerAgents from "./pages/agents/KennerAgents.tsx";
import MonroeAgents from "./pages/agents/MonroeAgents.tsx";
import JacksonTnAgents from "./pages/agents/JacksonTnAgents.tsx";
import GulfportAgents from "./pages/agents/GulfportAgents.tsx";
import SouthavenAgents from "./pages/agents/SouthavenAgents.tsx";
import HattiesburgAgents from "./pages/agents/HattiesburgAgents.tsx";
import BiloxiAgents from "./pages/agents/BiloxiAgents.tsx";
import TuscaloosaAgents from "./pages/agents/TuscaloosaAgents.tsx";
import HooverAgents from "./pages/agents/HooverAgents.tsx";
import DothanAgents from "./pages/agents/DothanAgents.tsx";
import DecaturAgents from "./pages/agents/DecaturAgents.tsx";
import AuburnWaAgents from "./pages/agents/AuburnWaAgents.tsx";
import FranklinAgents from "./pages/agents/FranklinAgents.tsx";
import JohnsonCityAgents from "./pages/agents/JohnsonCityAgents.tsx";
import BartlettAgents from "./pages/agents/BartlettAgents.tsx";
import HendersonvilleAgents from "./pages/agents/HendersonvilleAgents.tsx";
import KingsportAgents from "./pages/agents/KingsportAgents.tsx";
import SmyrnaAgents from "./pages/agents/SmyrnaAgents.tsx";
import GallatinAgents from "./pages/agents/GallatinAgents.tsx";
import BowlingGreenAgents from "./pages/agents/BowlingGreenAgents.tsx";
import OwensboroAgents from "./pages/agents/OwensboroAgents.tsx";
import CovingtonAgents from "./pages/agents/CovingtonAgents.tsx";
import GeorgetownAgents from "./pages/agents/GeorgetownAgents.tsx";
import FlorenceAgents from "./pages/agents/FlorenceAgents.tsx";
import NicholasvilleAgents from "./pages/agents/NicholasvilleAgents.tsx";
import ParmaAgents from "./pages/agents/ParmaAgents.tsx";
import CantonAgents from "./pages/agents/CantonAgents.tsx";
import YoungstownAgents from "./pages/agents/YoungstownAgents.tsx";
import LorainAgents from "./pages/agents/LorainAgents.tsx";
import KetteringAgents from "./pages/agents/KetteringAgents.tsx";
import ElyriaAgents from "./pages/agents/ElyriaAgents.tsx";
import CuyahogaFallsAgents from "./pages/agents/CuyahogaFallsAgents.tsx";
import MiddletownNyAgents from "./pages/agents/MiddletownNyAgents.tsx";
import DublinCaAgents from "./pages/agents/DublinCaAgents.tsx";
import WestervilleOhAgents from "./pages/agents/WestervilleOhAgents.tsx";
import StrongsvilleAgents from "./pages/agents/StrongsvilleAgents.tsx";
import MansfieldAgents from "./pages/agents/MansfieldAgents.tsx";
import MentorAgents from "./pages/agents/MentorAgents.tsx";
import HammondAgents from "./pages/agents/HammondAgents.tsx";
import GaryAgents from "./pages/agents/GaryAgents.tsx";
import MuncieAgents from "./pages/agents/MuncieAgents.tsx";
import TerreHauteAgents from "./pages/agents/TerreHauteAgents.tsx";
import AndersonAgents from "./pages/agents/AndersonAgents.tsx";
import NoblesvilleAgents from "./pages/agents/NoblesvilleAgents.tsx";
import GreenwoodAgents from "./pages/agents/GreenwoodAgents.tsx";
import ElkhartAgents from "./pages/agents/ElkhartAgents.tsx";
import MishawakaAgents from "./pages/agents/MishawakaAgents.tsx";
import LawrenceAgents from "./pages/agents/LawrenceAgents.tsx";
import JeffersonvilleAgents from "./pages/agents/JeffersonvilleAgents.tsx";
import NewAlbanyAgents from "./pages/agents/NewAlbanyAgents.tsx";
import PortageAgents from "./pages/agents/PortageAgents.tsx";
import ValparaisoAgents from "./pages/agents/ValparaisoAgents.tsx";
import RacineAgents from "./pages/agents/RacineAgents.tsx";
import AppletonAgents from "./pages/agents/AppletonAgents.tsx";
import WaukeshaAgents from "./pages/agents/WaukeshaAgents.tsx";
import EauClaireAgents from "./pages/agents/EauClaireAgents.tsx";
import OshkoshAgents from "./pages/agents/OshkoshAgents.tsx";
import JanesvilleAgents from "./pages/agents/JanesvilleAgents.tsx";
import WestAllisAgents from "./pages/agents/WestAllisAgents.tsx";
import LaCrosseAgents from "./pages/agents/LaCrosseAgents.tsx";
import SheboyganAgents from "./pages/agents/SheboyganAgents.tsx";
import WauwatosaAgents from "./pages/agents/WauwatosaAgents.tsx";
import FondDuLacAgents from "./pages/agents/FondDuLacAgents.tsx";
import NewBerlinAgents from "./pages/agents/NewBerlinAgents.tsx";
import WausauAgents from "./pages/agents/WausauAgents.tsx";
import BrookfieldAgents from "./pages/agents/BrookfieldAgents.tsx";
import BeloitAgents from "./pages/agents/BeloitAgents.tsx";
import BrooklynParkAgents from "./pages/agents/BrooklynParkAgents.tsx";
import PlymouthMnAgents from "./pages/agents/PlymouthMnAgents.tsx";
import StCloudAgents from "./pages/agents/StCloudAgents.tsx";
import EaganAgents from "./pages/agents/EaganAgents.tsx";
import WoodburyAgents from "./pages/agents/WoodburyAgents.tsx";
import MapleGroveAgents from "./pages/agents/MapleGroveAgents.tsx";
import EdenPrairieAgents from "./pages/agents/EdenPrairieAgents.tsx";
import CoonRapidsAgents from "./pages/agents/CoonRapidsAgents.tsx";
import BurnsvilleAgents from "./pages/agents/BurnsvilleAgents.tsx";
import BlaineAgents from "./pages/agents/BlaineAgents.tsx";
import LakevilleAgents from "./pages/agents/LakevilleAgents.tsx";
import MinnetonkaAgents from "./pages/agents/MinnetonkaAgents.tsx";
import DavenportAgents from "./pages/agents/DavenportAgents.tsx";
import SiouxCityAgents from "./pages/agents/SiouxCityAgents.tsx";
import IowaCityAgents from "./pages/agents/IowaCityAgents.tsx";
import AmesAgents from "./pages/agents/AmesAgents.tsx";
import WestDesMoinesAgents from "./pages/agents/WestDesMoinesAgents.tsx";
import AnkenyAgents from "./pages/agents/AnkenyAgents.tsx";
import CouncilBluffsAgents from "./pages/agents/CouncilBluffsAgents.tsx";
import DubuqueAgents from "./pages/agents/DubuqueAgents.tsx";
import MarionAgents from "./pages/agents/MarionAgents.tsx";
import GrandIslandAgents from "./pages/agents/GrandIslandAgents.tsx";
import KearneyAgents from "./pages/agents/KearneyAgents.tsx";
import HastingsAgents from "./pages/agents/HastingsAgents.tsx";
import NorthPlatteAgents from "./pages/agents/NorthPlatteAgents.tsx";
import PapillionAgents from "./pages/agents/PapillionAgents.tsx";
import ShawneeOkAgents from "./pages/agents/ShawneeOkAgents.tsx";
import ManhattanKsAgents from "./pages/agents/ManhattanKsAgents.tsx";
import LenexaAgents from "./pages/agents/LenexaAgents.tsx";
import SalinaAgents from "./pages/agents/SalinaAgents.tsx";
import HutchinsonAgents from "./pages/agents/HutchinsonAgents.tsx";
import EdmondAgents from "./pages/agents/EdmondAgents.tsx";
import MooreAgents from "./pages/agents/MooreAgents.tsx";
import MidwestCityAgents from "./pages/agents/MidwestCityAgents.tsx";
import EnidAgents from "./pages/agents/EnidAgents.tsx";
import StillwaterAgents from "./pages/agents/StillwaterAgents.tsx";
import MuskogeeAgents from "./pages/agents/MuskogeeAgents.tsx";
import BartlesvilleAgents from "./pages/agents/BartlesvilleAgents.tsx";
import PoncaCityAgents from "./pages/agents/PoncaCityAgents.tsx";
import ArdmoreAgents from "./pages/agents/ArdmoreAgents.tsx";
import BoulderAgents from "./pages/agents/BoulderAgents.tsx";
import GreeleyAgents from "./pages/agents/GreeleyAgents.tsx";
import LovelandAgents from "./pages/agents/LovelandAgents.tsx";
import BroomfieldAgents from "./pages/agents/BroomfieldAgents.tsx";
import CastleRockAgents from "./pages/agents/CastleRockAgents.tsx";
import CommerceCityAgents from "./pages/agents/CommerceCityAgents.tsx";
import ParkerAgents from "./pages/agents/ParkerAgents.tsx";
import LittletonAgents from "./pages/agents/LittletonAgents.tsx";
import NorthglennAgents from "./pages/agents/NorthglennAgents.tsx";
import BrightonAgents from "./pages/agents/BrightonAgents.tsx";
import EnglewoodAgents from "./pages/agents/EnglewoodAgents.tsx";
import WheatRidgeAgents from "./pages/agents/WheatRidgeAgents.tsx";
import GoldenAgents from "./pages/agents/GoldenAgents.tsx";
import SandyAgents from "./pages/agents/SandyAgents.tsx";
import OgdenAgents from "./pages/agents/OgdenAgents.tsx";
import StGeorgeAgents from "./pages/agents/StGeorgeAgents.tsx";
import LaytonAgents from "./pages/agents/LaytonAgents.tsx";
import LehiAgents from "./pages/agents/LehiAgents.tsx";
import MillcreekAgents from "./pages/agents/MillcreekAgents.tsx";
import TaylorsvilleAgents from "./pages/agents/TaylorsvilleAgents.tsx";
import DraperAgents from "./pages/agents/DraperAgents.tsx";
import BountifulAgents from "./pages/agents/BountifulAgents.tsx";
import RivertonAgents from "./pages/agents/RivertonAgents.tsx";
import MurrayAgents from "./pages/agents/MurrayAgents.tsx";
import SpanishForkAgents from "./pages/agents/SpanishForkAgents.tsx";
import HerrimanAgents from "./pages/agents/HerrimanAgents.tsx";
import PleasantGroveAgents from "./pages/agents/PleasantGroveAgents.tsx";
import MeridianAgents from "./pages/agents/MeridianAgents.tsx";
import IdahoFallsAgents from "./pages/agents/IdahoFallsAgents.tsx";
import CaldwellAgents from "./pages/agents/CaldwellAgents.tsx";
import PocatelloAgents from "./pages/agents/PocatelloAgents.tsx";
import CoeurDaleneAgents from "./pages/agents/CoeurDaleneAgents.tsx";
import TwinFallsAgents from "./pages/agents/TwinFallsAgents.tsx";
import PostFallsAgents from "./pages/agents/PostFallsAgents.tsx";
import LewistonAgents from "./pages/agents/LewistonAgents.tsx";
import HillsboroAgents from "./pages/agents/HillsboroAgents.tsx";
import BeavertonAgents from "./pages/agents/BeavertonAgents.tsx";
import MedfordAgents from "./pages/agents/MedfordAgents.tsx";
import CorvallisAgents from "./pages/agents/CorvallisAgents.tsx";
import AlbanyAgents from "./pages/agents/AlbanyAgents.tsx";
import TigardAgents from "./pages/agents/TigardAgents.tsx";
import LakeOswegoAgents from "./pages/agents/LakeOswegoAgents.tsx";
import KeizerAgents from "./pages/agents/KeizerAgents.tsx";
import GrantsPassAgents from "./pages/agents/GrantsPassAgents.tsx";
import OregonCityAgents from "./pages/agents/OregonCityAgents.tsx";
import McminnvilleAgents from "./pages/agents/McminnvilleAgents.tsx";
import RedmondAgents from "./pages/agents/RedmondAgents.tsx";
import TualatinAgents from "./pages/agents/TualatinAgents.tsx";
import WestLinnAgents from "./pages/agents/WestLinnAgents.tsx";
import KentAgents from "./pages/agents/KentAgents.tsx";
import SpokaneValleyAgents from "./pages/agents/SpokaneValleyAgents.tsx";
import FederalWayAgents from "./pages/agents/FederalWayAgents.tsx";
import KirklandAgents from "./pages/agents/KirklandAgents.tsx";
import KennewickAgents from "./pages/agents/KennewickAgents.tsx";
import BellinghamAgents from "./pages/agents/BellinghamAgents.tsx";
import MarysvilleWaAgents from "./pages/agents/MarysvilleWaAgents.tsx";
import PascoAgents from "./pages/agents/PascoAgents.tsx";
import YakimaAgents from "./pages/agents/YakimaAgents.tsx";
import SammamishAgents from "./pages/agents/SammamishAgents.tsx";
import RichlandAgents from "./pages/agents/RichlandAgents.tsx";
import OlympiaAgents from "./pages/agents/OlympiaAgents.tsx";
import ShorelineAgents from "./pages/agents/ShorelineAgents.tsx";
import LaceyAgents from "./pages/agents/LaceyAgents.tsx";
import BurienAgents from "./pages/agents/BurienAgents.tsx";
import EdmondsAgents from "./pages/agents/EdmondsAgents.tsx";
import PuyallupAgents from "./pages/agents/PuyallupAgents.tsx";
import LynnwoodAgents from "./pages/agents/LynnwoodAgents.tsx";
import BothellAgents from "./pages/agents/BothellAgents.tsx";
import IssaquahAgents from "./pages/agents/IssaquahAgents.tsx";
import LongviewAgents from "./pages/agents/LongviewAgents.tsx";
import WenatcheeAgents from "./pages/agents/WenatcheeAgents.tsx";
import MountVernonNyAgents from "./pages/agents/MountVernonNyAgents.tsx";
import FairbanksAgents from "./pages/agents/FairbanksAgents.tsx";
import JuneauAgents from "./pages/agents/JuneauAgents.tsx";
import PearlCityAgents from "./pages/agents/PearlCityAgents.tsx";
import HiloAgents from "./pages/agents/HiloAgents.tsx";
import KailuaAgents from "./pages/agents/KailuaAgents.tsx";
import WaipahuAgents from "./pages/agents/WaipahuAgents.tsx";
import AvondaleAgents from "./pages/agents/AvondaleAgents.tsx";
import FlagstaffAgents from "./pages/agents/FlagstaffAgents.tsx";
import MaricopaAgents from "./pages/agents/MaricopaAgents.tsx";
import CasaGrandeAgents from "./pages/agents/CasaGrandeAgents.tsx";
import QueenCreekAgents from "./pages/agents/QueenCreekAgents.tsx";
import SanTanValleyAgents from "./pages/agents/SanTanValleyAgents.tsx";
import PrescottAgents from "./pages/agents/PrescottAgents.tsx";
import PrescottValleyAgents from "./pages/agents/PrescottValleyAgents.tsx";
import LakeHavasuCityAgents from "./pages/agents/LakeHavasuCityAgents.tsx";
import AppleValleyAgents from "./pages/agents/AppleValleyAgents.tsx";
import AlhambraAgents from "./pages/agents/AlhambraAgents.tsx";
import LynwoodAgents from "./pages/agents/LynwoodAgents.tsx";
import RedondoBeachAgents from "./pages/agents/RedondoBeachAgents.tsx";
import SanRafaelAgents from "./pages/agents/SanRafaelAgents.tsx";
import PicoRiveraAgents from "./pages/agents/PicoRiveraAgents.tsx";
import MontebelloAgents from "./pages/agents/MontebelloAgents.tsx";
import MontereyParkAgents from "./pages/agents/MontereyParkAgents.tsx";
import SantaCruzAgents from "./pages/agents/SantaCruzAgents.tsx";
import EncinitasAgents from "./pages/agents/EncinitasAgents.tsx";
import NationalCityAgents from "./pages/agents/NationalCityAgents.tsx";
import SanJacintoAgents from "./pages/agents/SanJacintoAgents.tsx";
import FolsomAgents from "./pages/agents/FolsomAgents.tsx";
import RosemeadAgents from "./pages/agents/RosemeadAgents.tsx";
import RocklinAgents from "./pages/agents/RocklinAgents.tsx";
import SanLuisObispoAgents from "./pages/agents/SanLuisObispoAgents.tsx";
import GilroyAgents from "./pages/agents/GilroyAgents.tsx";
import UnionCityNjAgents from "./pages/agents/UnionCityNjAgents.tsx";
import PleasantonAgents from "./pages/agents/PleasantonAgents.tsx";
import DanvilleAgents from "./pages/agents/DanvilleAgents.tsx";
import CupertinoAgents from "./pages/agents/CupertinoAgents.tsx";
import PaloAltoAgents from "./pages/agents/PaloAltoAgents.tsx";
import MountainViewAgents from "./pages/agents/MountainViewAgents.tsx";
import MilpitasAgents from "./pages/agents/MilpitasAgents.tsx";
import RanchoCordovaAgents from "./pages/agents/RanchoCordovaAgents.tsx";
import YubaCityAgents from "./pages/agents/YubaCityAgents.tsx";
import WalnutCreekAgents from "./pages/agents/WalnutCreekAgents.tsx";
import CampbellAgents from "./pages/agents/CampbellAgents.tsx";
import AlamedaAgents from "./pages/agents/AlamedaAgents.tsx";
import SantaBarbaraAgents from "./pages/agents/SantaBarbaraAgents.tsx";
import GlendoraAgents from "./pages/agents/GlendoraAgents.tsx";
import AzusaAgents from "./pages/agents/AzusaAgents.tsx";
import ArcadiaAgents from "./pages/agents/ArcadiaAgents.tsx";
import DiamondBarAgents from "./pages/agents/DiamondBarAgents.tsx";
import RanchoPalosVerdesAgents from "./pages/agents/RanchoPalosVerdesAgents.tsx";
import YorbaLindaAgents from "./pages/agents/YorbaLindaAgents.tsx";
import LagunaNiguelAgents from "./pages/agents/LagunaNiguelAgents.tsx";
import AlisoViejoAgents from "./pages/agents/AlisoViejoAgents.tsx";
import SanJuanCapistranoAgents from "./pages/agents/SanJuanCapistranoAgents.tsx";
import LagunaBeachAgents from "./pages/agents/LagunaBeachAgents.tsx";
import DanaPointAgents from "./pages/agents/DanaPointAgents.tsx";
import BreaAgents from "./pages/agents/BreaAgents.tsx";
import LaHabraAgents from "./pages/agents/LaHabraAgents.tsx";
import PlacentiaAgents from "./pages/agents/PlacentiaAgents.tsx";
import CypressAgents from "./pages/agents/CypressAgents.tsx";
import StantonAgents from "./pages/agents/StantonAgents.tsx";
import LaMiradaAgents from "./pages/agents/LaMiradaAgents.tsx";
import BuenaParkAgents from "./pages/agents/BuenaParkAgents.tsx";
import LaPuenteAgents from "./pages/agents/LaPuenteAgents.tsx";
import BaldwinParkAgents from "./pages/agents/BaldwinParkAgents.tsx";
import CovinaAgents from "./pages/agents/CovinaAgents.tsx";
import ClaremontAgents from "./pages/agents/ClaremontAgents.tsx";
import SanDimasAgents from "./pages/agents/SanDimasAgents.tsx";
import LaVerneAgents from "./pages/agents/LaVerneAgents.tsx";
import MonroviaAgents from "./pages/agents/MonroviaAgents.tsx";
import DuarteAgents from "./pages/agents/DuarteAgents.tsx";
import TempleCityAgents from "./pages/agents/TempleCityAgents.tsx";
import SouthElMonteAgents from "./pages/agents/SouthElMonteAgents.tsx";
import ManchesterNhAgents from "./pages/agents/ManchesterNhAgents.tsx";
import NashuaAgents from "./pages/agents/NashuaAgents.tsx";
import WarwickAgents from "./pages/agents/WarwickAgents.tsx";
import CranstonAgents from "./pages/agents/CranstonAgents.tsx";
import PawtucketAgents from "./pages/agents/PawtucketAgents.tsx";
import EastProvidenceAgents from "./pages/agents/EastProvidenceAgents.tsx";
import DanburyAgents from "./pages/agents/DanburyAgents.tsx";
import NewBritainAgents from "./pages/agents/NewBritainAgents.tsx";
import BristolCtAgents from "./pages/agents/BristolCtAgents.tsx";
import MeridenAgents from "./pages/agents/MeridenAgents.tsx";
import WestHavenAgents from "./pages/agents/WestHavenAgents.tsx";
import MilfordCtAgents from "./pages/agents/MilfordCtAgents.tsx";
import StratfordAgents from "./pages/agents/StratfordAgents.tsx";
import EastHartfordAgents from "./pages/agents/EastHartfordAgents.tsx";
import WallingfordAgents from "./pages/agents/WallingfordAgents.tsx";
import SheltonAgents from "./pages/agents/SheltonAgents.tsx";
import TorringtonCtAgents from "./pages/agents/TorringtonCtAgents.tsx";
import SyracuseAgents from "./pages/agents/SyracuseAgents.tsx";
import SchenectadyAgents from "./pages/agents/SchenectadyAgents.tsx";
import UticaAgents from "./pages/agents/UticaAgents.tsx";
import TroyAgents from "./pages/agents/TroyAgents.tsx";
import BinghamtonAgents from "./pages/agents/BinghamtonAgents.tsx";
import WhitePlainsAgents from "./pages/agents/WhitePlainsAgents.tsx";
import NewRochelleAgents from "./pages/agents/NewRochelleAgents.tsx";
import HempsteadAgents from "./pages/agents/HempsteadAgents.tsx";
import FreeportAgents from "./pages/agents/FreeportAgents.tsx";
import ValleyStreamAgents from "./pages/agents/ValleyStreamAgents.tsx";
import PoughkeepsieAgents from "./pages/agents/PoughkeepsieAgents.tsx";
import NewburghAgents from "./pages/agents/NewburghAgents.tsx";
import IthacaAgents from "./pages/agents/IthacaAgents.tsx";
import SaratogaSpringsAgents from "./pages/agents/SaratogaSpringsAgents.tsx";
import GlensFallsAgents from "./pages/agents/GlensFallsAgents.tsx";
import AllentownAgents from "./pages/agents/AllentownAgents.tsx";
import ErieAgents from "./pages/agents/ErieAgents.tsx";
import ReadingAgents from "./pages/agents/ReadingAgents.tsx";
import BethlehemAgents from "./pages/agents/BethlehemAgents.tsx";
import ScrantonAgents from "./pages/agents/ScrantonAgents.tsx";
import HarrisburgAgents from "./pages/agents/HarrisburgAgents.tsx";
import YorkAgents from "./pages/agents/YorkAgents.tsx";
import WilkesBarreAgents from "./pages/agents/WilkesBarreAgents.tsx";
import ChesterAgents from "./pages/agents/ChesterAgents.tsx";
import StateCollegeAgents from "./pages/agents/StateCollegeAgents.tsx";
import EastonAgents from "./pages/agents/EastonAgents.tsx";
import TrentonAgents from "./pages/agents/TrentonAgents.tsx";
import CamdenAgents from "./pages/agents/CamdenAgents.tsx";
import CliftonAgents from "./pages/agents/CliftonAgents.tsx";
import PassaicAgents from "./pages/agents/PassaicAgents.tsx";
import HobokenAgents from "./pages/agents/HobokenAgents.tsx";
import NewBrunswickAgents from "./pages/agents/NewBrunswickAgents.tsx";
import PerthAmboyAgents from "./pages/agents/PerthAmboyAgents.tsx";
import WestNewYorkAgents from "./pages/agents/WestNewYorkAgents.tsx";
import BayonneAgents from "./pages/agents/BayonneAgents.tsx";
import EastOrangeAgents from "./pages/agents/EastOrangeAgents.tsx";
import VinelandAgents from "./pages/agents/VinelandAgents.tsx";
import AtlanticCityAgents from "./pages/agents/AtlanticCityAgents.tsx";
import SilverSpringAgents from "./pages/agents/SilverSpringAgents.tsx";
import FrederickAgents from "./pages/agents/FrederickAgents.tsx";
import RockvilleAgents from "./pages/agents/RockvilleAgents.tsx";
import GaithersburgAgents from "./pages/agents/GaithersburgAgents.tsx";
import BowieAgents from "./pages/agents/BowieAgents.tsx";
import HagerstownAgents from "./pages/agents/HagerstownAgents.tsx";
import AnnapolisAgents from "./pages/agents/AnnapolisAgents.tsx";
import CollegeParkAgents from "./pages/agents/CollegeParkAgents.tsx";
import RoanokeAgents from "./pages/agents/RoanokeAgents.tsx";
import PortsmouthAgents from "./pages/agents/PortsmouthAgents.tsx";
import SuffolkAgents from "./pages/agents/SuffolkAgents.tsx";
import LynchburgAgents from "./pages/agents/LynchburgAgents.tsx";
import HarrisonburgAgents from "./pages/agents/HarrisonburgAgents.tsx";
import CharlottesvilleAgents from "./pages/agents/CharlottesvilleAgents.tsx";
import BlacksburgAgents from "./pages/agents/BlacksburgAgents.tsx";
import FredericksburgAgents from "./pages/agents/FredericksburgAgents.tsx";
import ManassasAgents from "./pages/agents/ManassasAgents.tsx";
import CharlestonAgents from "./pages/agents/CharlestonAgents.tsx";
import HuntingtonAgents from "./pages/agents/HuntingtonAgents.tsx";
import MorgantownAgents from "./pages/agents/MorgantownAgents.tsx";

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
          <Route path="/agents/vancouver" element={<VancouverAgents />} />
          <Route path="/agents/west-vancouver" element={<WestVancouverAgents />} />
          <Route path="/agents/victoria" element={<VictoriaAgents />} />
          <Route path="/agents/kelowna" element={<KelownaAgents />} />
          <Route path="/agents/whistler" element={<WhistlerAgents />} />
          <Route path="/agents/toronto" element={<TorontoAgents />} />
          <Route path="/agents/vancouver-wa" element={<VancouverWaAgents />} />
          <Route path="/agents/burnaby" element={<BurnabyAgents />} />
          <Route path="/agents/surrey" element={<SurreyAgents />} />
          <Route path="/agents/richmond-ky" element={<RichmondKyAgents />} />
          <Route path="/agents/coquitlam" element={<CoquitlamAgents />} />
          <Route path="/agents/new-westminster" element={<NewWestminsterAgents />} />
          <Route path="/agents/north-vancouver" element={<NorthVancouverAgents />} />
          <Route path="/agents/port-coquitlam" element={<PortCoquitlamAgents />} />
          <Route path="/agents/port-moody" element={<PortMoodyAgents />} />
          <Route path="/agents/langley" element={<LangleyAgents />} />
          <Route path="/agents/delta" element={<DeltaAgents />} />
          <Route path="/agents/maple-ridge" element={<MapleRidgeAgents />} />
          <Route path="/agents/pitt-meadows" element={<PittMeadowsAgents />} />
          <Route path="/agents/white-rock" element={<WhiteRockAgents />} />
          <Route path="/agents/abbotsford" element={<AbbotsfordAgents />} />
          <Route path="/agents/chilliwack" element={<ChilliwackAgents />} />
          <Route path="/agents/mission" element={<MissionAgents />} />
          <Route path="/agents/squamish" element={<SquamishAgents />} />
          <Route path="/agents/nanaimo" element={<NanaimoAgents />} />
          <Route path="/agents/kamloops" element={<KamloopsAgents />} />
          <Route path="/agents/prince-george" element={<PrinceGeorgeAgents />} />
          <Route path="/agents/montreal" element={<MontrealAgents />} />
          <Route path="/agents/calgary" element={<CalgaryAgents />} />
          <Route path="/agents/ottawa" element={<OttawaAgents />} />
          <Route path="/agents/edmonton" element={<EdmontonAgents />} />
          <Route path="/agents/winnipeg" element={<WinnipegAgents />} />
          <Route path="/agents/mississauga" element={<MississaugaAgents />} />
          <Route path="/agents/brampton" element={<BramptonAgents />} />
          <Route path="/agents/hamilton-oh" element={<HamiltonOhAgents />} />
          <Route path="/agents/quebec-city" element={<QuebecCityAgents />} />
          <Route path="/agents/halifax" element={<HalifaxAgents />} />
          <Route path="/agents/laval" element={<LavalAgents />} />
          <Route path="/agents/london" element={<LondonAgents />} />
          <Route path="/agents/markham" element={<MarkhamAgents />} />
          <Route path="/agents/vaughan" element={<VaughanAgents />} />
          <Route path="/agents/gatineau" element={<GatineauAgents />} />
          <Route path="/agents/saskatoon" element={<SaskatoonAgents />} />
          <Route path="/agents/kitchener" element={<KitchenerAgents />} />
          <Route path="/agents/longueuil" element={<LongueuilAgents />} />
          <Route path="/agents/windsor" element={<WindsorAgents />} />
          <Route path="/agents/regina" element={<ReginaAgents />} />
          <Route path="/agents/oakville" element={<OakvilleAgents />} />
          <Route path="/agents/burlington-vt" element={<BurlingtonVtAgents />} />
          <Route path="/agents/oshawa" element={<OshawaAgents />} />
          <Route path="/agents/sherbrooke" element={<SherbrookeAgents />} />
          <Route path="/agents/greater-sudbury" element={<GreaterSudburyAgents />} />
          <Route path="/agents/levis" element={<LevisAgents />} />
          <Route path="/agents/barrie" element={<BarrieAgents />} />
          <Route path="/agents/saguenay" element={<SaguenayAgents />} />
          <Route path="/agents/trois-rivieres" element={<TroisRivieresAgents />} />
          <Route path="/agents/guelph" element={<GuelphAgents />} />
          <Route path="/agents/cambridge-ma" element={<CambridgeMaAgents />} />
          <Route path="/agents/whitby" element={<WhitbyAgents />} />
          <Route path="/agents/st-catharines" element={<StCatharinesAgents />} />
          <Route path="/agents/kingston-ny" element={<KingstonNyAgents />} />
          <Route path="/agents/milton" element={<MiltonAgents />} />
          <Route path="/agents/ajax" element={<AjaxAgents />} />
          <Route path="/agents/waterloo" element={<WaterlooAgents />} />
          <Route path="/agents/saanich" element={<SaanichAgents />} />
          <Route path="/agents/thunder-bay" element={<ThunderBayAgents />} />
          <Route path="/agents/brantford" element={<BrantfordAgents />} />
          <Route path="/agents/red-deer" element={<RedDeerAgents />} />
          <Route path="/agents/lethbridge" element={<LethbridgeAgents />} />
          <Route path="/agents/terrebonne" element={<TerrebonneAgents />} />
          <Route path="/agents/st-johns" element={<StJohnsAgents />} />
          <Route path="/agents/repentigny" element={<RepentignyAgents />} />
          <Route path="/agents/brossard" element={<BrossardAgents />} />
          <Route path="/agents/peterborough" element={<PeterboroughAgents />} />
          <Route path="/agents/niagara-falls-ny" element={<NiagaraFallsNyAgents />} />
          <Route path="/agents/saint-john" element={<SaintJohnAgents />} />
          <Route path="/agents/moncton" element={<MonctonAgents />} />
          <Route path="/agents/new-york" element={<NewYorkAgents />} />
          <Route path="/agents/los-angeles" element={<LosAngelesAgents />} />
          <Route path="/agents/chicago" element={<ChicagoAgents />} />
          <Route path="/agents/houston" element={<HoustonAgents />} />
          <Route path="/agents/phoenix" element={<PhoenixAgents />} />
          <Route path="/agents/philadelphia" element={<PhiladelphiaAgents />} />
          <Route path="/agents/san-antonio" element={<SanAntonioAgents />} />
          <Route path="/agents/san-diego" element={<SanDiegoAgents />} />
          <Route path="/agents/dallas" element={<DallasAgents />} />
          <Route path="/agents/jacksonville" element={<JacksonvilleAgents />} />
          <Route path="/agents/fort-worth" element={<FortWorthAgents />} />
          <Route path="/agents/san-jose" element={<SanJoseAgents />} />
          <Route path="/agents/austin" element={<AustinAgents />} />
          <Route path="/agents/columbus-in" element={<ColumbusInAgents />} />
          <Route path="/agents/charlotte" element={<CharlotteAgents />} />
          <Route path="/agents/indianapolis" element={<IndianapolisAgents />} />
          <Route path="/agents/san-francisco" element={<SanFranciscoAgents />} />
          <Route path="/agents/seattle" element={<SeattleAgents />} />
          <Route path="/agents/denver" element={<DenverAgents />} />
          <Route path="/agents/oklahoma-city" element={<OklahomaCityAgents />} />
          <Route path="/agents/nashville" element={<NashvilleAgents />} />
          <Route path="/agents/washington" element={<WashingtonAgents />} />
          <Route path="/agents/el-paso" element={<ElPasoAgents />} />
          <Route path="/agents/las-vegas" element={<LasVegasAgents />} />
          <Route path="/agents/boston" element={<BostonAgents />} />
          <Route path="/agents/detroit" element={<DetroitAgents />} />
          <Route path="/agents/portland-me" element={<PortlandMeAgents />} />
          <Route path="/agents/memphis" element={<MemphisAgents />} />
          <Route path="/agents/louisville" element={<LouisvilleAgents />} />
          <Route path="/agents/baltimore" element={<BaltimoreAgents />} />
          <Route path="/agents/milwaukee" element={<MilwaukeeAgents />} />
          <Route path="/agents/albuquerque" element={<AlbuquerqueAgents />} />
          <Route path="/agents/tucson" element={<TucsonAgents />} />
          <Route path="/agents/fresno" element={<FresnoAgents />} />
          <Route path="/agents/sacramento" element={<SacramentoAgents />} />
          <Route path="/agents/mesa" element={<MesaAgents />} />
          <Route path="/agents/atlanta" element={<AtlantaAgents />} />
          <Route path="/agents/kansas-city" element={<KansasCityAgents />} />
          <Route path="/agents/colorado-springs" element={<ColoradoSpringsAgents />} />
          <Route path="/agents/omaha" element={<OmahaAgents />} />
          <Route path="/agents/raleigh" element={<RaleighAgents />} />
          <Route path="/agents/miami" element={<MiamiAgents />} />
          <Route path="/agents/virginia-beach" element={<VirginiaBeachAgents />} />
          <Route path="/agents/long-beach-ny" element={<LongBeachNyAgents />} />
          <Route path="/agents/oakland" element={<OaklandAgents />} />
          <Route path="/agents/minneapolis" element={<MinneapolisAgents />} />
          <Route path="/agents/tulsa" element={<TulsaAgents />} />
          <Route path="/agents/tampa" element={<TampaAgents />} />
          <Route path="/agents/arlington" element={<ArlingtonAgents />} />
          <Route path="/agents/new-orleans" element={<NewOrleansAgents />} />
          <Route path="/agents/wichita" element={<WichitaAgents />} />
          <Route path="/agents/bakersfield" element={<BakersfieldAgents />} />
          <Route path="/agents/cleveland" element={<ClevelandAgents />} />
          <Route path="/agents/aurora-il" element={<AuroraIlAgents />} />
          <Route path="/agents/anaheim" element={<AnaheimAgents />} />
          <Route path="/agents/honolulu" element={<HonoluluAgents />} />
          <Route path="/agents/henderson" element={<HendersonAgents />} />
          <Route path="/agents/santa-ana" element={<SantaAnaAgents />} />
          <Route path="/agents/riverside" element={<RiversideAgents />} />
          <Route path="/agents/corpus-christi" element={<CorpusChristiAgents />} />
          <Route path="/agents/lexington" element={<LexingtonAgents />} />
          <Route path="/agents/stockton" element={<StocktonAgents />} />
          <Route path="/agents/st-paul" element={<StPaulAgents />} />
          <Route path="/agents/cincinnati" element={<CincinnatiAgents />} />
          <Route path="/agents/irvine" element={<IrvineAgents />} />
          <Route path="/agents/newark-ca" element={<NewarkCaAgents />} />
          <Route path="/agents/st-louis" element={<StLouisAgents />} />
          <Route path="/agents/pittsburgh" element={<PittsburghAgents />} />
          <Route path="/agents/greensboro" element={<GreensboroAgents />} />
          <Route path="/agents/durham" element={<DurhamAgents />} />
          <Route path="/agents/orlando" element={<OrlandoAgents />} />
          <Route path="/agents/jersey-city" element={<JerseyCityAgents />} />
          <Route path="/agents/lincoln" element={<LincolnAgents />} />
          <Route path="/agents/chula-vista" element={<ChulaVistaAgents />} />
          <Route path="/agents/plano" element={<PlanoAgents />} />
          <Route path="/agents/north-las-vegas" element={<NorthLasVegasAgents />} />
          <Route path="/agents/anchorage" element={<AnchorageAgents />} />
          <Route path="/agents/gilbert" element={<GilbertAgents />} />
          <Route path="/agents/madison-al" element={<MadisonAlAgents />} />
          <Route path="/agents/chandler" element={<ChandlerAgents />} />
          <Route path="/agents/reno" element={<RenoAgents />} />
          <Route path="/agents/fort-wayne" element={<FortWayneAgents />} />
          <Route path="/agents/buffalo" element={<BuffaloAgents />} />
          <Route path="/agents/lubbock" element={<LubbockAgents />} />
          <Route path="/agents/toledo" element={<ToledoAgents />} />
          <Route path="/agents/st-petersburg" element={<StPetersburgAgents />} />
          <Route path="/agents/laredo" element={<LaredoAgents />} />
          <Route path="/agents/glendale-ca" element={<GlendaleCaAgents />} />
          <Route path="/agents/scottsdale" element={<ScottsdaleAgents />} />
          <Route path="/agents/winston-salem" element={<WinstonSalemAgents />} />
          <Route path="/agents/chesapeake" element={<ChesapeakeAgents />} />
          <Route path="/agents/norfolk-ne" element={<NorfolkNeAgents />} />
          <Route path="/agents/irving" element={<IrvingAgents />} />
          <Route path="/agents/fremont-ne" element={<FremontNeAgents />} />
          <Route path="/agents/garland" element={<GarlandAgents />} />
          <Route path="/agents/hialeah" element={<HialeahAgents />} />
          <Route path="/agents/boise" element={<BoiseAgents />} />
          <Route path="/agents/spokane" element={<SpokaneAgents />} />
          <Route path="/agents/baton-rouge" element={<BatonRougeAgents />} />
          <Route path="/agents/tacoma" element={<TacomaAgents />} />
          <Route path="/agents/san-bernardino" element={<SanBernardinoAgents />} />
          <Route path="/agents/modesto" element={<ModestoAgents />} />
          <Route path="/agents/fontana" element={<FontanaAgents />} />
          <Route path="/agents/des-moines" element={<DesMoinesAgents />} />
          <Route path="/agents/moreno-valley" element={<MorenoValleyAgents />} />
          <Route path="/agents/santa-clarita" element={<SantaClaritaAgents />} />
          <Route path="/agents/fayetteville" element={<FayettevilleAgents />} />
          <Route path="/agents/birmingham" element={<BirminghamAgents />} />
          <Route path="/agents/oxnard" element={<OxnardAgents />} />
          <Route path="/agents/rochester-mn" element={<RochesterMnAgents />} />
          <Route path="/agents/port-st-lucie" element={<PortStLucieAgents />} />
          <Route path="/agents/grand-rapids" element={<GrandRapidsAgents />} />
          <Route path="/agents/huntsville" element={<HuntsvilleAgents />} />
          <Route path="/agents/salt-lake-city" element={<SaltLakeCityAgents />} />
          <Route path="/agents/frisco" element={<FriscoAgents />} />
          <Route path="/agents/yonkers" element={<YonkersAgents />} />
          <Route path="/agents/huntington-beach" element={<HuntingtonBeachAgents />} />
          <Route path="/agents/mckinney" element={<MckinneyAgents />} />
          <Route path="/agents/montgomery" element={<MontgomeryAgents />} />
          <Route path="/agents/amarillo" element={<AmarilloAgents />} />
          <Route path="/agents/little-rock" element={<LittleRockAgents />} />
          <Route path="/agents/akron" element={<AkronAgents />} />
          <Route path="/agents/augusta" element={<AugustaAgents />} />
          <Route path="/agents/grand-prairie" element={<GrandPrairieAgents />} />
          <Route path="/agents/overland-park" element={<OverlandParkAgents />} />
          <Route path="/agents/tallahassee" element={<TallahasseeAgents />} />
          <Route path="/agents/mobile" element={<MobileAgents />} />
          <Route path="/agents/knoxville" element={<KnoxvilleAgents />} />
          <Route path="/agents/cape-coral" element={<CapeCoralAgents />} />
          <Route path="/agents/shreveport" element={<ShreveportAgents />} />
          <Route path="/agents/tempe" element={<TempeAgents />} />
          <Route path="/agents/providence" element={<ProvidenceAgents />} />
          <Route path="/agents/chattanooga" element={<ChattanoogaAgents />} />
          <Route path="/agents/fort-lauderdale" element={<FortLauderdaleAgents />} />
          <Route path="/agents/sioux-falls" element={<SiouxFallsAgents />} />
          <Route path="/agents/peoria-il" element={<PeoriaIlAgents />} />
          <Route path="/agents/brownsville" element={<BrownsvilleAgents />} />
          <Route path="/agents/ontario" element={<OntarioAgents />} />
          <Route path="/agents/elk-grove" element={<ElkGroveAgents />} />
          <Route path="/agents/salem" element={<SalemAgents />} />
          <Route path="/agents/santa-rosa" element={<SantaRosaAgents />} />
          <Route path="/agents/rancho-cucamonga" element={<RanchoCucamongaAgents />} />
          <Route path="/agents/oceanside" element={<OceansideAgents />} />
          <Route path="/agents/garden-grove" element={<GardenGroveAgents />} />
          <Route path="/agents/pembroke-pines" element={<PembrokePinesAgents />} />
          <Route path="/agents/eugene" element={<EugeneAgents />} />
          <Route path="/agents/corona" element={<CoronaAgents />} />
          <Route path="/agents/cary" element={<CaryAgents />} />
          <Route path="/agents/fort-collins" element={<FortCollinsAgents />} />
          <Route path="/agents/palmdale" element={<PalmdaleAgents />} />
          <Route path="/agents/salinas" element={<SalinasAgents />} />
          <Route path="/agents/pomona" element={<PomonaAgents />} />
          <Route path="/agents/hayward" element={<HaywardAgents />} />
          <Route path="/agents/lancaster" element={<LancasterAgents />} />
          <Route path="/agents/alexandria-la" element={<AlexandriaLaAgents />} />
          <Route path="/agents/surprise" element={<SurpriseAgents />} />
          <Route path="/agents/sunnyvale" element={<SunnyvaleAgents />} />
          <Route path="/agents/lakewood-wa" element={<LakewoodWaAgents />} />
          <Route path="/agents/clarksville" element={<ClarksvilleAgents />} />
          <Route path="/agents/hollywood" element={<HollywoodAgents />} />
          <Route path="/agents/torrance" element={<TorranceAgents />} />
          <Route path="/agents/escondido" element={<EscondidoAgents />} />
          <Route path="/agents/joliet" element={<JolietAgents />} />
          <Route path="/agents/naperville" element={<NapervilleAgents />} />
          <Route path="/agents/bellevue-ne" element={<BellevueNeAgents />} />
          <Route path="/agents/rockford" element={<RockfordAgents />} />
          <Route path="/agents/bridgeport" element={<BridgeportAgents />} />
          <Route path="/agents/paterson" element={<PatersonAgents />} />
          <Route path="/agents/savannah" element={<SavannahAgents />} />
          <Route path="/agents/miramar" element={<MiramarAgents />} />
          <Route path="/agents/pasadena-ca" element={<PasadenaCaAgents />} />
          <Route path="/agents/mesquite" element={<MesquiteAgents />} />
          <Route path="/agents/carrollton" element={<CarrolltonAgents />} />
          <Route path="/agents/olathe" element={<OlatheAgents />} />
          <Route path="/agents/thornton" element={<ThorntonAgents />} />
          <Route path="/agents/waco" element={<WacoAgents />} />
          <Route path="/agents/fullerton" element={<FullertonAgents />} />
          <Route path="/agents/west-valley-city" element={<WestValleyCityAgents />} />
          <Route path="/agents/visalia" element={<VisaliaAgents />} />
          <Route path="/agents/warren-oh" element={<WarrenOhAgents />} />
          <Route path="/agents/gainesville" element={<GainesvilleAgents />} />
          <Route path="/agents/coral-springs" element={<CoralSpringsAgents />} />
          <Route path="/agents/sterling-heights" element={<SterlingHeightsAgents />} />
          <Route path="/agents/columbia-md" element={<ColumbiaMdAgents />} />
          <Route path="/agents/cedar-rapids" element={<CedarRapidsAgents />} />
          <Route path="/agents/new-haven" element={<NewHavenAgents />} />
          <Route path="/agents/topeka" element={<TopekaAgents />} />
          <Route path="/agents/thousand-oaks" element={<ThousandOaksAgents />} />
          <Route path="/agents/elizabeth" element={<ElizabethAgents />} />
          <Route path="/agents/simi-valley" element={<SimiValleyAgents />} />
          <Route path="/agents/hartford" element={<HartfordAgents />} />
          <Route path="/agents/fargo" element={<FargoAgents />} />
          <Route path="/agents/concord-nh" element={<ConcordNhAgents />} />
          <Route path="/agents/roseville" element={<RosevilleAgents />} />
          <Route path="/agents/victorville" element={<VictorvilleAgents />} />
          <Route path="/agents/denton" element={<DentonAgents />} />
          <Route path="/agents/pearland" element={<PearlandAgents />} />
          <Route path="/agents/provo" element={<ProvoAgents />} />
          <Route path="/agents/midland" element={<MidlandAgents />} />
          <Route path="/agents/college-station" element={<CollegeStationAgents />} />
          <Route path="/agents/norman" element={<NormanAgents />} />
          <Route path="/agents/palm-bay" element={<PalmBayAgents />} />
          <Route path="/agents/murrieta" element={<MurrietaAgents />} />
          <Route path="/agents/wilmington-de" element={<WilmingtonDeAgents />} />
          <Route path="/agents/athens" element={<AthensAgents />} />
          <Route path="/agents/round-rock" element={<RoundRockAgents />} />
          <Route path="/agents/lewisville" element={<LewisvilleAgents />} />
          <Route path="/agents/high-point" element={<HighPointAgents />} />
          <Route path="/agents/west-jordan" element={<WestJordanAgents />} />
          <Route path="/agents/pompano-beach" element={<PompanoBeachAgents />} />
          <Route path="/agents/billings" element={<BillingsAgents />} />
          <Route path="/agents/pueblo" element={<PuebloAgents />} />
          <Route path="/agents/arvada" element={<ArvadaAgents />} />
          <Route path="/agents/westminster-co" element={<WestminsterCoAgents />} />
          <Route path="/agents/centennial" element={<CentennialAgents />} />
          <Route path="/agents/berkeley" element={<BerkeleyAgents />} />
          <Route path="/agents/richardson" element={<RichardsonAgents />} />
          <Route path="/agents/downey" element={<DowneyAgents />} />
          <Route path="/agents/inglewood" element={<InglewoodAgents />} />
          <Route path="/agents/clearwater" element={<ClearwaterAgents />} />
          <Route path="/agents/miami-gardens" element={<MiamiGardensAgents />} />
          <Route path="/agents/west-covina" element={<WestCovinaAgents />} />
          <Route path="/agents/fairfield-oh" element={<FairfieldOhAgents />} />
          <Route path="/agents/murfreesboro" element={<MurfreesboroAgents />} />
          <Route path="/agents/carlsbad" element={<CarlsbadAgents />} />
          <Route path="/agents/antioch" element={<AntiochAgents />} />
          <Route path="/agents/temecula" element={<TemeculaAgents />} />
          <Route path="/agents/ventura" element={<VenturaAgents />} />
          <Route path="/agents/lowell" element={<LowellAgents />} />
          <Route path="/agents/el-monte" element={<ElMonteAgents />} />
          <Route path="/agents/costa-mesa" element={<CostaMesaAgents />} />
          <Route path="/agents/davie" element={<DavieAgents />} />
          <Route path="/agents/elgin" element={<ElginAgents />} />
          <Route path="/agents/green-bay" element={<GreenBayAgents />} />
          <Route path="/agents/san-mateo" element={<SanMateoAgents />} />
          <Route path="/agents/brockton" element={<BrocktonAgents />} />
          <Route path="/agents/rialto" element={<RialtoAgents />} />
          <Route path="/agents/santa-maria" element={<SantaMariaAgents />} />
          <Route path="/agents/las-cruces" element={<LasCrucesAgents />} />
          <Route path="/agents/el-cajon" element={<ElCajonAgents />} />
          <Route path="/agents/san-marcos-tx" element={<SanMarcosTxAgents />} />
          <Route path="/agents/burbank" element={<BurbankAgents />} />
          <Route path="/agents/south-bend" element={<SouthBendAgents />} />
          <Route path="/agents/renton" element={<RentonAgents />} />
          <Route path="/agents/odessa" element={<OdessaAgents />} />
          <Route path="/agents/vacaville" element={<VacavilleAgents />} />
          <Route path="/agents/sydney" element={<SydneyAgents />} />
          <Route path="/agents/melbourne-fl" element={<MelbourneFlAgents />} />
          <Route path="/agents/auckland" element={<AucklandAgents />} />
          <Route path="/agents/brisbane" element={<BrisbaneAgents />} />
          <Route path="/agents/perth" element={<PerthAgents />} />
          <Route path="/agents/dubai" element={<DubaiAgents />} />
          <Route path="/agents/singapore" element={<SingaporeAgents />} />
          <Route path="/agents/hong-kong" element={<HongKongAgents />} />
          <Route path="/agents/tokyo" element={<TokyoAgents />} />
          <Route path="/agents/waterbury" element={<WaterburyAgents />} />
          <Route path="/agents/sparks" element={<SparksAgents />} />
          <Route path="/agents/league-city" element={<LeagueCityAgents />} />
          <Route path="/agents/santa-clara" element={<SantaClaraAgents />} />
          <Route path="/agents/longmont" element={<LongmontAgents />} />
          <Route path="/agents/waukegan" element={<WaukeganAgents />} />
          <Route path="/agents/daly-city" element={<DalyCityAgents />} />
          <Route path="/agents/newport-news" element={<NewportNewsAgents />} />
          <Route path="/agents/san-leandro" element={<SanLeandroAgents />} />
          <Route path="/agents/edinburg" element={<EdinburgAgents />} />
          <Route path="/agents/citrus-heights" element={<CitrusHeightsAgents />} />
          <Route path="/agents/woodbridge" element={<WoodbridgeAgents />} />
          <Route path="/agents/sandy-springs" element={<SandySpringsAgents />} />
          <Route path="/agents/lake-forest" element={<LakeForestAgents />} />
          <Route path="/agents/lawton" element={<LawtonAgents />} />
          <Route path="/agents/san-angelo" element={<SanAngeloAgents />} />
          <Route path="/agents/dayton" element={<DaytonAgents />} />
          <Route path="/agents/south-fulton" element={<SouthFultonAgents />} />
          <Route path="/agents/tyler" element={<TylerAgents />} />
          <Route path="/agents/allen" element={<AllenAgents />} />
          <Route path="/agents/beaumont" element={<BeaumontAgents />} />
          <Route path="/agents/menifee" element={<MenifeeAgents />} />
          <Route path="/agents/bend" element={<BendAgents />} />
          <Route path="/agents/nampa" element={<NampaAgents />} />
          <Route path="/agents/san-ramon" element={<SanRamonAgents />} />
          <Route path="/agents/norwalk-ct" element={<NorwalkCtAgents />} />
          <Route path="/agents/buckeye" element={<BuckeyeAgents />} />
          <Route path="/agents/livonia" element={<LivoniaAgents />} />
          <Route path="/agents/redding" element={<ReddingAgents />} />
          <Route path="/agents/evansville" element={<EvansvilleAgents />} />
          <Route path="/agents/abilene" element={<AbileneAgents />} />
          <Route path="/agents/clovis" element={<ClovisAgents />} />
          <Route path="/agents/chico" element={<ChicoAgents />} />
          <Route path="/agents/stamford" element={<StamfordAgents />} />
          <Route path="/agents/goodyear" element={<GoodyearAgents />} />
          <Route path="/agents/fishers" element={<FishersAgents />} />
          <Route path="/agents/independence" element={<IndependenceAgents />} />
          <Route path="/agents/springfield-or" element={<SpringfieldOrAgents />} />
          <Route path="/agents/killeen" element={<KilleenAgents />} />
          <Route path="/agents/yuma" element={<YumaAgents />} />
          <Route path="/agents/fort-smith" element={<FortSmithAgents />} />
          <Route path="/agents/new-braunfels" element={<NewBraunfelsAgents />} />
          <Route path="/agents/sugar-land" element={<SugarLandAgents />} />
          <Route path="/agents/kenosha" element={<KenoshaAgents />} />
          <Route path="/agents/hampton" element={<HamptonAgents />} />
          <Route path="/agents/conroe" element={<ConroeAgents />} />
          <Route path="/agents/gresham" element={<GreshamAgents />} />
          <Route path="/agents/everett" element={<EverettAgents />} />
          <Route path="/agents/north-charleston" element={<NorthCharlestonAgents />} />
          <Route path="/agents/broken-arrow" element={<BrokenArrowAgents />} />
          <Route path="/agents/lansing" element={<LansingAgents />} />
          <Route path="/agents/lakeland" element={<LakelandAgents />} />
          <Route path="/agents/ann-arbor" element={<AnnArborAgents />} />
          <Route path="/agents/el-centro" element={<ElCentroAgents />} />
          <Route path="/agents/wichita-falls" element={<WichitaFallsAgents />} />
          <Route path="/agents/carmel" element={<CarmelAgents />} />
          <Route path="/agents/south-jordan" element={<SouthJordanAgents />} />
          <Route path="/agents/lees-summit" element={<LeesSummitAgents />} />
          <Route path="/agents/santa-fe" element={<SantaFeAgents />} />
          <Route path="/agents/vista" element={<VistaAgents />} />
          <Route path="/agents/camarillo" element={<CamarilloAgents />} />
          <Route path="/agents/orem" element={<OremAgents />} />
          <Route path="/agents/livermore" element={<LivermoreAgents />} />
          <Route path="/agents/newport-beach" element={<NewportBeachAgents />} />
          <Route path="/agents/tracy" element={<TracyAgents />} />
          <Route path="/agents/compton" element={<ComptonAgents />} />
          <Route path="/agents/redlands" element={<RedlandsAgents />} />
          <Route path="/agents/hemet" element={<HemetAgents />} />
          <Route path="/agents/hesperia" element={<HesperiaAgents />} />
          <Route path="/agents/mission-viejo" element={<MissionViejoAgents />} />
          <Route path="/agents/manteca" element={<MantecaAgents />} />
          <Route path="/agents/napa" element={<NapaAgents />} />
          <Route path="/agents/merced" element={<MercedAgents />} />
          <Route path="/agents/redwood-city" element={<RedwoodCityAgents />} />
          <Route path="/agents/chino" element={<ChinoAgents />} />
          <Route path="/agents/indio" element={<IndioAgents />} />
          <Route path="/agents/madera" element={<MaderaAgents />} />
          <Route path="/agents/chino-hills" element={<ChinoHillsAgents />} />
          <Route path="/agents/carson" element={<CarsonAgents />} />
          <Route path="/agents/tustin" element={<TustinAgents />} />
          <Route path="/agents/paramount" element={<ParamountAgents />} />
          <Route path="/agents/highland" element={<HighlandAgents />} />
          <Route path="/agents/whittier" element={<WhittierAgents />} />
          <Route path="/agents/san-clemente" element={<SanClementeAgents />} />
          <Route path="/agents/upland" element={<UplandAgents />} />
          <Route path="/agents/hawthorne" element={<HawthorneAgents />} />
          <Route path="/agents/pittsburg-ca" element={<PittsburgCaAgents />} />
          <Route path="/agents/lodi" element={<LodiAgents />} />
          <Route path="/agents/turlock" element={<TurlockAgents />} />
          <Route path="/agents/perris" element={<PerrisAgents />} />
          <Route path="/agents/duluth" element={<DuluthAgents />} />
          <Route path="/agents/bloomington-in" element={<BloomingtonInAgents />} />
          <Route path="/agents/sunrise" element={<SunriseAgents />} />
          <Route path="/agents/plantation" element={<PlantationAgents />} />
          <Route path="/agents/boca-raton" element={<BocaRatonAgents />} />
          <Route path="/agents/deltona" element={<DeltonaAgents />} />
          <Route path="/agents/largo" element={<LargoAgents />} />
          <Route path="/agents/palm-coast" element={<PalmCoastAgents />} />
          <Route path="/agents/deerfield-beach" element={<DeerfieldBeachAgents />} />
          <Route path="/agents/boynton-beach" element={<BoyntonBeachAgents />} />
          <Route path="/agents/delray-beach" element={<DelrayBeachAgents />} />
          <Route path="/agents/lauderhill" element={<LauderhillAgents />} />
          <Route path="/agents/tamarac" element={<TamaracAgents />} />
          <Route path="/agents/weston" element={<WestonAgents />} />
          <Route path="/agents/homestead" element={<HomesteadAgents />} />
          <Route path="/agents/kissimmee" element={<KissimmeeAgents />} />
          <Route path="/agents/ocala" element={<OcalaAgents />} />
          <Route path="/agents/apopka" element={<ApopkaAgents />} />
          <Route path="/agents/sanford" element={<SanfordAgents />} />
          <Route path="/agents/daytona-beach" element={<DaytonaBeachAgents />} />
          <Route path="/agents/spring-hill-tn" element={<SpringHillTnAgents />} />
          <Route path="/agents/pensacola" element={<PensacolaAgents />} />
          <Route path="/agents/brandon" element={<BrandonAgents />} />
          <Route path="/agents/wesley-chapel" element={<WesleyChapelAgents />} />
          <Route path="/agents/clermont" element={<ClermontAgents />} />
          <Route path="/agents/ocoee" element={<OcoeeAgents />} />
          <Route path="/agents/palm-harbor" element={<PalmHarborAgents />} />
          <Route path="/agents/town-n-country" element={<TownNCountryAgents />} />
          <Route path="/agents/greenville-nc" element={<GreenvilleNcAgents />} />
          <Route path="/agents/joplin" element={<JoplinAgents />} />
          <Route path="/agents/jefferson-city" element={<JeffersonCityAgents />} />
          <Route path="/agents/st-charles" element={<StCharlesAgents />} />
          <Route path="/agents/st-joseph" element={<StJosephAgents />} />
          <Route path="/agents/florissant" element={<FlorissantAgents />} />
          <Route path="/agents/blue-springs" element={<BlueSpringsAgents />} />
          <Route path="/agents/ofallon" element={<OfallonAgents />} />
          <Route path="/agents/st-peters" element={<StPetersAgents />} />
          <Route path="/agents/springdale" element={<SpringdaleAgents />} />
          <Route path="/agents/rogers" element={<RogersAgents />} />
          <Route path="/agents/jonesboro" element={<JonesboroAgents />} />
          <Route path="/agents/north-little-rock" element={<NorthLittleRockAgents />} />
          <Route path="/agents/conway" element={<ConwayAgents />} />
          <Route path="/agents/pine-bluff" element={<PineBluffAgents />} />
          <Route path="/agents/benton" element={<BentonAgents />} />
          <Route path="/agents/hot-springs" element={<HotSpringsAgents />} />
          <Route path="/agents/texarkana" element={<TexarkanaAgents />} />
          <Route path="/agents/metairie" element={<MetairieAgents />} />
          <Route path="/agents/lafayette-in" element={<LafayetteInAgents />} />
          <Route path="/agents/lake-charles" element={<LakeCharlesAgents />} />
          <Route path="/agents/kenner" element={<KennerAgents />} />
          <Route path="/agents/monroe" element={<MonroeAgents />} />
          <Route path="/agents/jackson-tn" element={<JacksonTnAgents />} />
          <Route path="/agents/gulfport" element={<GulfportAgents />} />
          <Route path="/agents/southaven" element={<SouthavenAgents />} />
          <Route path="/agents/hattiesburg" element={<HattiesburgAgents />} />
          <Route path="/agents/biloxi" element={<BiloxiAgents />} />
          <Route path="/agents/tuscaloosa" element={<TuscaloosaAgents />} />
          <Route path="/agents/hoover" element={<HooverAgents />} />
          <Route path="/agents/dothan" element={<DothanAgents />} />
          <Route path="/agents/decatur" element={<DecaturAgents />} />
          <Route path="/agents/auburn-wa" element={<AuburnWaAgents />} />
          <Route path="/agents/franklin" element={<FranklinAgents />} />
          <Route path="/agents/johnson-city" element={<JohnsonCityAgents />} />
          <Route path="/agents/bartlett" element={<BartlettAgents />} />
          <Route path="/agents/hendersonville" element={<HendersonvilleAgents />} />
          <Route path="/agents/kingsport" element={<KingsportAgents />} />
          <Route path="/agents/smyrna" element={<SmyrnaAgents />} />
          <Route path="/agents/gallatin" element={<GallatinAgents />} />
          <Route path="/agents/bowling-green" element={<BowlingGreenAgents />} />
          <Route path="/agents/owensboro" element={<OwensboroAgents />} />
          <Route path="/agents/covington" element={<CovingtonAgents />} />
          <Route path="/agents/georgetown" element={<GeorgetownAgents />} />
          <Route path="/agents/florence" element={<FlorenceAgents />} />
          <Route path="/agents/nicholasville" element={<NicholasvilleAgents />} />
          <Route path="/agents/parma" element={<ParmaAgents />} />
          <Route path="/agents/canton" element={<CantonAgents />} />
          <Route path="/agents/youngstown" element={<YoungstownAgents />} />
          <Route path="/agents/lorain" element={<LorainAgents />} />
          <Route path="/agents/kettering" element={<KetteringAgents />} />
          <Route path="/agents/elyria" element={<ElyriaAgents />} />
          <Route path="/agents/cuyahoga-falls" element={<CuyahogaFallsAgents />} />
          <Route path="/agents/middletown-ny" element={<MiddletownNyAgents />} />
          <Route path="/agents/dublin-ca" element={<DublinCaAgents />} />
          <Route path="/agents/westerville-oh" element={<WestervilleOhAgents />} />
          <Route path="/agents/strongsville" element={<StrongsvilleAgents />} />
          <Route path="/agents/mansfield" element={<MansfieldAgents />} />
          <Route path="/agents/mentor" element={<MentorAgents />} />
          <Route path="/agents/hammond" element={<HammondAgents />} />
          <Route path="/agents/gary" element={<GaryAgents />} />
          <Route path="/agents/muncie" element={<MuncieAgents />} />
          <Route path="/agents/terre-haute" element={<TerreHauteAgents />} />
          <Route path="/agents/anderson" element={<AndersonAgents />} />
          <Route path="/agents/noblesville" element={<NoblesvilleAgents />} />
          <Route path="/agents/greenwood" element={<GreenwoodAgents />} />
          <Route path="/agents/elkhart" element={<ElkhartAgents />} />
          <Route path="/agents/mishawaka" element={<MishawakaAgents />} />
          <Route path="/agents/lawrence" element={<LawrenceAgents />} />
          <Route path="/agents/jeffersonville" element={<JeffersonvilleAgents />} />
          <Route path="/agents/new-albany" element={<NewAlbanyAgents />} />
          <Route path="/agents/portage" element={<PortageAgents />} />
          <Route path="/agents/valparaiso" element={<ValparaisoAgents />} />
          <Route path="/agents/racine" element={<RacineAgents />} />
          <Route path="/agents/appleton" element={<AppletonAgents />} />
          <Route path="/agents/waukesha" element={<WaukeshaAgents />} />
          <Route path="/agents/eau-claire" element={<EauClaireAgents />} />
          <Route path="/agents/oshkosh" element={<OshkoshAgents />} />
          <Route path="/agents/janesville" element={<JanesvilleAgents />} />
          <Route path="/agents/west-allis" element={<WestAllisAgents />} />
          <Route path="/agents/la-crosse" element={<LaCrosseAgents />} />
          <Route path="/agents/sheboygan" element={<SheboyganAgents />} />
          <Route path="/agents/wauwatosa" element={<WauwatosaAgents />} />
          <Route path="/agents/fond-du-lac" element={<FondDuLacAgents />} />
          <Route path="/agents/new-berlin" element={<NewBerlinAgents />} />
          <Route path="/agents/wausau" element={<WausauAgents />} />
          <Route path="/agents/brookfield" element={<BrookfieldAgents />} />
          <Route path="/agents/beloit" element={<BeloitAgents />} />
          <Route path="/agents/brooklyn-park" element={<BrooklynParkAgents />} />
          <Route path="/agents/plymouth-mn" element={<PlymouthMnAgents />} />
          <Route path="/agents/st-cloud" element={<StCloudAgents />} />
          <Route path="/agents/eagan" element={<EaganAgents />} />
          <Route path="/agents/woodbury" element={<WoodburyAgents />} />
          <Route path="/agents/maple-grove" element={<MapleGroveAgents />} />
          <Route path="/agents/eden-prairie" element={<EdenPrairieAgents />} />
          <Route path="/agents/coon-rapids" element={<CoonRapidsAgents />} />
          <Route path="/agents/burnsville" element={<BurnsvilleAgents />} />
          <Route path="/agents/blaine" element={<BlaineAgents />} />
          <Route path="/agents/lakeville" element={<LakevilleAgents />} />
          <Route path="/agents/minnetonka" element={<MinnetonkaAgents />} />
          <Route path="/agents/davenport" element={<DavenportAgents />} />
          <Route path="/agents/sioux-city" element={<SiouxCityAgents />} />
          <Route path="/agents/iowa-city" element={<IowaCityAgents />} />
          <Route path="/agents/ames" element={<AmesAgents />} />
          <Route path="/agents/west-des-moines" element={<WestDesMoinesAgents />} />
          <Route path="/agents/ankeny" element={<AnkenyAgents />} />
          <Route path="/agents/council-bluffs" element={<CouncilBluffsAgents />} />
          <Route path="/agents/dubuque" element={<DubuqueAgents />} />
          <Route path="/agents/marion" element={<MarionAgents />} />
          <Route path="/agents/grand-island" element={<GrandIslandAgents />} />
          <Route path="/agents/kearney" element={<KearneyAgents />} />
          <Route path="/agents/hastings" element={<HastingsAgents />} />
          <Route path="/agents/north-platte" element={<NorthPlatteAgents />} />
          <Route path="/agents/papillion" element={<PapillionAgents />} />
          <Route path="/agents/shawnee-ok" element={<ShawneeOkAgents />} />
          <Route path="/agents/manhattan-ks" element={<ManhattanKsAgents />} />
          <Route path="/agents/lenexa" element={<LenexaAgents />} />
          <Route path="/agents/salina" element={<SalinaAgents />} />
          <Route path="/agents/hutchinson" element={<HutchinsonAgents />} />
          <Route path="/agents/edmond" element={<EdmondAgents />} />
          <Route path="/agents/moore" element={<MooreAgents />} />
          <Route path="/agents/midwest-city" element={<MidwestCityAgents />} />
          <Route path="/agents/enid" element={<EnidAgents />} />
          <Route path="/agents/stillwater" element={<StillwaterAgents />} />
          <Route path="/agents/muskogee" element={<MuskogeeAgents />} />
          <Route path="/agents/bartlesville" element={<BartlesvilleAgents />} />
          <Route path="/agents/ponca-city" element={<PoncaCityAgents />} />
          <Route path="/agents/ardmore" element={<ArdmoreAgents />} />
          <Route path="/agents/boulder" element={<BoulderAgents />} />
          <Route path="/agents/greeley" element={<GreeleyAgents />} />
          <Route path="/agents/loveland" element={<LovelandAgents />} />
          <Route path="/agents/broomfield" element={<BroomfieldAgents />} />
          <Route path="/agents/castle-rock" element={<CastleRockAgents />} />
          <Route path="/agents/commerce-city" element={<CommerceCityAgents />} />
          <Route path="/agents/parker" element={<ParkerAgents />} />
          <Route path="/agents/littleton" element={<LittletonAgents />} />
          <Route path="/agents/northglenn" element={<NorthglennAgents />} />
          <Route path="/agents/brighton" element={<BrightonAgents />} />
          <Route path="/agents/englewood" element={<EnglewoodAgents />} />
          <Route path="/agents/wheat-ridge" element={<WheatRidgeAgents />} />
          <Route path="/agents/golden" element={<GoldenAgents />} />
          <Route path="/agents/sandy" element={<SandyAgents />} />
          <Route path="/agents/ogden" element={<OgdenAgents />} />
          <Route path="/agents/st-george" element={<StGeorgeAgents />} />
          <Route path="/agents/layton" element={<LaytonAgents />} />
          <Route path="/agents/lehi" element={<LehiAgents />} />
          <Route path="/agents/millcreek" element={<MillcreekAgents />} />
          <Route path="/agents/taylorsville" element={<TaylorsvilleAgents />} />
          <Route path="/agents/draper" element={<DraperAgents />} />
          <Route path="/agents/bountiful" element={<BountifulAgents />} />
          <Route path="/agents/riverton" element={<RivertonAgents />} />
          <Route path="/agents/murray" element={<MurrayAgents />} />
          <Route path="/agents/spanish-fork" element={<SpanishForkAgents />} />
          <Route path="/agents/herriman" element={<HerrimanAgents />} />
          <Route path="/agents/pleasant-grove" element={<PleasantGroveAgents />} />
          <Route path="/agents/meridian" element={<MeridianAgents />} />
          <Route path="/agents/idaho-falls" element={<IdahoFallsAgents />} />
          <Route path="/agents/caldwell" element={<CaldwellAgents />} />
          <Route path="/agents/pocatello" element={<PocatelloAgents />} />
          <Route path="/agents/coeur-dalene" element={<CoeurDaleneAgents />} />
          <Route path="/agents/twin-falls" element={<TwinFallsAgents />} />
          <Route path="/agents/post-falls" element={<PostFallsAgents />} />
          <Route path="/agents/lewiston" element={<LewistonAgents />} />
          <Route path="/agents/hillsboro" element={<HillsboroAgents />} />
          <Route path="/agents/beaverton" element={<BeavertonAgents />} />
          <Route path="/agents/medford" element={<MedfordAgents />} />
          <Route path="/agents/corvallis" element={<CorvallisAgents />} />
          <Route path="/agents/albany" element={<AlbanyAgents />} />
          <Route path="/agents/tigard" element={<TigardAgents />} />
          <Route path="/agents/lake-oswego" element={<LakeOswegoAgents />} />
          <Route path="/agents/keizer" element={<KeizerAgents />} />
          <Route path="/agents/grants-pass" element={<GrantsPassAgents />} />
          <Route path="/agents/oregon-city" element={<OregonCityAgents />} />
          <Route path="/agents/mcminnville" element={<McminnvilleAgents />} />
          <Route path="/agents/redmond" element={<RedmondAgents />} />
          <Route path="/agents/tualatin" element={<TualatinAgents />} />
          <Route path="/agents/west-linn" element={<WestLinnAgents />} />
          <Route path="/agents/kent" element={<KentAgents />} />
          <Route path="/agents/spokane-valley" element={<SpokaneValleyAgents />} />
          <Route path="/agents/federal-way" element={<FederalWayAgents />} />
          <Route path="/agents/kirkland" element={<KirklandAgents />} />
          <Route path="/agents/kennewick" element={<KennewickAgents />} />
          <Route path="/agents/bellingham" element={<BellinghamAgents />} />
          <Route path="/agents/marysville-wa" element={<MarysvilleWaAgents />} />
          <Route path="/agents/pasco" element={<PascoAgents />} />
          <Route path="/agents/yakima" element={<YakimaAgents />} />
          <Route path="/agents/sammamish" element={<SammamishAgents />} />
          <Route path="/agents/richland" element={<RichlandAgents />} />
          <Route path="/agents/olympia" element={<OlympiaAgents />} />
          <Route path="/agents/shoreline" element={<ShorelineAgents />} />
          <Route path="/agents/lacey" element={<LaceyAgents />} />
          <Route path="/agents/burien" element={<BurienAgents />} />
          <Route path="/agents/edmonds" element={<EdmondsAgents />} />
          <Route path="/agents/puyallup" element={<PuyallupAgents />} />
          <Route path="/agents/lynnwood" element={<LynnwoodAgents />} />
          <Route path="/agents/bothell" element={<BothellAgents />} />
          <Route path="/agents/issaquah" element={<IssaquahAgents />} />
          <Route path="/agents/longview" element={<LongviewAgents />} />
          <Route path="/agents/wenatchee" element={<WenatcheeAgents />} />
          <Route path="/agents/mount-vernon-ny" element={<MountVernonNyAgents />} />
          <Route path="/agents/fairbanks" element={<FairbanksAgents />} />
          <Route path="/agents/juneau" element={<JuneauAgents />} />
          <Route path="/agents/pearl-city" element={<PearlCityAgents />} />
          <Route path="/agents/hilo" element={<HiloAgents />} />
          <Route path="/agents/kailua" element={<KailuaAgents />} />
          <Route path="/agents/waipahu" element={<WaipahuAgents />} />
          <Route path="/agents/avondale" element={<AvondaleAgents />} />
          <Route path="/agents/flagstaff" element={<FlagstaffAgents />} />
          <Route path="/agents/maricopa" element={<MaricopaAgents />} />
          <Route path="/agents/casa-grande" element={<CasaGrandeAgents />} />
          <Route path="/agents/queen-creek" element={<QueenCreekAgents />} />
          <Route path="/agents/san-tan-valley" element={<SanTanValleyAgents />} />
          <Route path="/agents/prescott" element={<PrescottAgents />} />
          <Route path="/agents/prescott-valley" element={<PrescottValleyAgents />} />
          <Route path="/agents/lake-havasu-city" element={<LakeHavasuCityAgents />} />
          <Route path="/agents/apple-valley" element={<AppleValleyAgents />} />
          <Route path="/agents/alhambra" element={<AlhambraAgents />} />
          <Route path="/agents/lynwood" element={<LynwoodAgents />} />
          <Route path="/agents/redondo-beach" element={<RedondoBeachAgents />} />
          <Route path="/agents/san-rafael" element={<SanRafaelAgents />} />
          <Route path="/agents/pico-rivera" element={<PicoRiveraAgents />} />
          <Route path="/agents/montebello" element={<MontebelloAgents />} />
          <Route path="/agents/monterey-park" element={<MontereyParkAgents />} />
          <Route path="/agents/santa-cruz" element={<SantaCruzAgents />} />
          <Route path="/agents/encinitas" element={<EncinitasAgents />} />
          <Route path="/agents/national-city" element={<NationalCityAgents />} />
          <Route path="/agents/san-jacinto" element={<SanJacintoAgents />} />
          <Route path="/agents/folsom" element={<FolsomAgents />} />
          <Route path="/agents/rosemead" element={<RosemeadAgents />} />
          <Route path="/agents/rocklin" element={<RocklinAgents />} />
          <Route path="/agents/san-luis-obispo" element={<SanLuisObispoAgents />} />
          <Route path="/agents/gilroy" element={<GilroyAgents />} />
          <Route path="/agents/union-city-nj" element={<UnionCityNjAgents />} />
          <Route path="/agents/pleasanton" element={<PleasantonAgents />} />
          <Route path="/agents/danville" element={<DanvilleAgents />} />
          <Route path="/agents/cupertino" element={<CupertinoAgents />} />
          <Route path="/agents/palo-alto" element={<PaloAltoAgents />} />
          <Route path="/agents/mountain-view" element={<MountainViewAgents />} />
          <Route path="/agents/milpitas" element={<MilpitasAgents />} />
          <Route path="/agents/rancho-cordova" element={<RanchoCordovaAgents />} />
          <Route path="/agents/yuba-city" element={<YubaCityAgents />} />
          <Route path="/agents/walnut-creek" element={<WalnutCreekAgents />} />
          <Route path="/agents/campbell" element={<CampbellAgents />} />
          <Route path="/agents/alameda" element={<AlamedaAgents />} />
          <Route path="/agents/santa-barbara" element={<SantaBarbaraAgents />} />
          <Route path="/agents/glendora" element={<GlendoraAgents />} />
          <Route path="/agents/azusa" element={<AzusaAgents />} />
          <Route path="/agents/arcadia" element={<ArcadiaAgents />} />
          <Route path="/agents/diamond-bar" element={<DiamondBarAgents />} />
          <Route path="/agents/rancho-palos-verdes" element={<RanchoPalosVerdesAgents />} />
          <Route path="/agents/yorba-linda" element={<YorbaLindaAgents />} />
          <Route path="/agents/laguna-niguel" element={<LagunaNiguelAgents />} />
          <Route path="/agents/aliso-viejo" element={<AlisoViejoAgents />} />
          <Route path="/agents/san-juan-capistrano" element={<SanJuanCapistranoAgents />} />
          <Route path="/agents/laguna-beach" element={<LagunaBeachAgents />} />
          <Route path="/agents/dana-point" element={<DanaPointAgents />} />
          <Route path="/agents/brea" element={<BreaAgents />} />
          <Route path="/agents/la-habra" element={<LaHabraAgents />} />
          <Route path="/agents/placentia" element={<PlacentiaAgents />} />
          <Route path="/agents/cypress" element={<CypressAgents />} />
          <Route path="/agents/stanton" element={<StantonAgents />} />
          <Route path="/agents/la-mirada" element={<LaMiradaAgents />} />
          <Route path="/agents/buena-park" element={<BuenaParkAgents />} />
          <Route path="/agents/la-puente" element={<LaPuenteAgents />} />
          <Route path="/agents/baldwin-park" element={<BaldwinParkAgents />} />
          <Route path="/agents/covina" element={<CovinaAgents />} />
          <Route path="/agents/claremont" element={<ClaremontAgents />} />
          <Route path="/agents/san-dimas" element={<SanDimasAgents />} />
          <Route path="/agents/la-verne" element={<LaVerneAgents />} />
          <Route path="/agents/monrovia" element={<MonroviaAgents />} />
          <Route path="/agents/duarte" element={<DuarteAgents />} />
          <Route path="/agents/temple-city" element={<TempleCityAgents />} />
          <Route path="/agents/south-el-monte" element={<SouthElMonteAgents />} />
          <Route path="/agents/manchester-nh" element={<ManchesterNhAgents />} />
          <Route path="/agents/nashua" element={<NashuaAgents />} />
          <Route path="/agents/warwick" element={<WarwickAgents />} />
          <Route path="/agents/cranston" element={<CranstonAgents />} />
          <Route path="/agents/pawtucket" element={<PawtucketAgents />} />
          <Route path="/agents/east-providence" element={<EastProvidenceAgents />} />
          <Route path="/agents/danbury" element={<DanburyAgents />} />
          <Route path="/agents/new-britain" element={<NewBritainAgents />} />
          <Route path="/agents/bristol-ct" element={<BristolCtAgents />} />
          <Route path="/agents/meriden" element={<MeridenAgents />} />
          <Route path="/agents/west-haven" element={<WestHavenAgents />} />
          <Route path="/agents/milford-ct" element={<MilfordCtAgents />} />
          <Route path="/agents/stratford" element={<StratfordAgents />} />
          <Route path="/agents/east-hartford" element={<EastHartfordAgents />} />
          <Route path="/agents/wallingford" element={<WallingfordAgents />} />
          <Route path="/agents/shelton" element={<SheltonAgents />} />
          <Route path="/agents/torrington-ct" element={<TorringtonCtAgents />} />
          <Route path="/agents/syracuse" element={<SyracuseAgents />} />
          <Route path="/agents/schenectady" element={<SchenectadyAgents />} />
          <Route path="/agents/utica" element={<UticaAgents />} />
          <Route path="/agents/troy" element={<TroyAgents />} />
          <Route path="/agents/binghamton" element={<BinghamtonAgents />} />
          <Route path="/agents/white-plains" element={<WhitePlainsAgents />} />
          <Route path="/agents/new-rochelle" element={<NewRochelleAgents />} />
          <Route path="/agents/hempstead" element={<HempsteadAgents />} />
          <Route path="/agents/freeport" element={<FreeportAgents />} />
          <Route path="/agents/valley-stream" element={<ValleyStreamAgents />} />
          <Route path="/agents/poughkeepsie" element={<PoughkeepsieAgents />} />
          <Route path="/agents/newburgh" element={<NewburghAgents />} />
          <Route path="/agents/ithaca" element={<IthacaAgents />} />
          <Route path="/agents/saratoga-springs" element={<SaratogaSpringsAgents />} />
          <Route path="/agents/glens-falls" element={<GlensFallsAgents />} />
          <Route path="/agents/allentown" element={<AllentownAgents />} />
          <Route path="/agents/erie" element={<ErieAgents />} />
          <Route path="/agents/reading" element={<ReadingAgents />} />
          <Route path="/agents/bethlehem" element={<BethlehemAgents />} />
          <Route path="/agents/scranton" element={<ScrantonAgents />} />
          <Route path="/agents/harrisburg" element={<HarrisburgAgents />} />
          <Route path="/agents/york" element={<YorkAgents />} />
          <Route path="/agents/wilkes-barre" element={<WilkesBarreAgents />} />
          <Route path="/agents/chester" element={<ChesterAgents />} />
          <Route path="/agents/state-college" element={<StateCollegeAgents />} />
          <Route path="/agents/easton" element={<EastonAgents />} />
          <Route path="/agents/trenton" element={<TrentonAgents />} />
          <Route path="/agents/camden" element={<CamdenAgents />} />
          <Route path="/agents/clifton" element={<CliftonAgents />} />
          <Route path="/agents/passaic" element={<PassaicAgents />} />
          <Route path="/agents/hoboken" element={<HobokenAgents />} />
          <Route path="/agents/new-brunswick" element={<NewBrunswickAgents />} />
          <Route path="/agents/perth-amboy" element={<PerthAmboyAgents />} />
          <Route path="/agents/west-new-york" element={<WestNewYorkAgents />} />
          <Route path="/agents/bayonne" element={<BayonneAgents />} />
          <Route path="/agents/east-orange" element={<EastOrangeAgents />} />
          <Route path="/agents/vineland" element={<VinelandAgents />} />
          <Route path="/agents/atlantic-city" element={<AtlanticCityAgents />} />
          <Route path="/agents/silver-spring" element={<SilverSpringAgents />} />
          <Route path="/agents/frederick" element={<FrederickAgents />} />
          <Route path="/agents/rockville" element={<RockvilleAgents />} />
          <Route path="/agents/gaithersburg" element={<GaithersburgAgents />} />
          <Route path="/agents/bowie" element={<BowieAgents />} />
          <Route path="/agents/hagerstown" element={<HagerstownAgents />} />
          <Route path="/agents/annapolis" element={<AnnapolisAgents />} />
          <Route path="/agents/college-park" element={<CollegeParkAgents />} />
          <Route path="/agents/roanoke" element={<RoanokeAgents />} />
          <Route path="/agents/portsmouth" element={<PortsmouthAgents />} />
          <Route path="/agents/suffolk" element={<SuffolkAgents />} />
          <Route path="/agents/lynchburg" element={<LynchburgAgents />} />
          <Route path="/agents/harrisonburg" element={<HarrisonburgAgents />} />
          <Route path="/agents/charlottesville" element={<CharlottesvilleAgents />} />
          <Route path="/agents/blacksburg" element={<BlacksburgAgents />} />
          <Route path="/agents/fredericksburg" element={<FredericksburgAgents />} />
          <Route path="/agents/manassas" element={<ManassasAgents />} />
          <Route path="/agents/charleston" element={<CharlestonAgents />} />
          <Route path="/agents/huntington" element={<HuntingtonAgents />} />
          <Route path="/agents/morgantown" element={<MorgantownAgents />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
