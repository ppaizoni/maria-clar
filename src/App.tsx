import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import UeberMich from "./pages/UeberMich";
import Beratung from "./pages/Beratung";
import Coaching from "./pages/Coaching";
import Mediation from "./pages/Mediation";
import PersoenlicheEntwicklung from "./pages/PersoenlicheEntwicklung";
import BeziehungKommunikation from "./pages/BeziehungKommunikation";
import SelbstwertInnereStabilitaet from "./pages/SelbstwertInnereStabilitaet";
import BerufNeuorientierung from "./pages/BerufNeuorientierung";
import KrisenVeraenderungsprozesse from "./pages/KrisenVeraenderungsprozesse";
import FrauenLongevity from "./pages/FrauenLongevity";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ueber-mich" element={<UeberMich />} />
          <Route path="/beratung" element={<Beratung />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/mediation" element={<Mediation />} />
          <Route path="/persoenliche-entwicklung" element={<PersoenlicheEntwicklung />} />
          <Route path="/beziehung-kommunikation" element={<BeziehungKommunikation />} />
          <Route path="/selbstwert-innere-stabilitaet" element={<SelbstwertInnereStabilitaet />} />
          <Route path="/beruf-neuorientierung" element={<BerufNeuorientierung />} />
          <Route path="/krisen-veraenderungsprozesse" element={<KrisenVeraenderungsprozesse />} />
          <Route path="/frauen-longevity" element={<FrauenLongevity />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
