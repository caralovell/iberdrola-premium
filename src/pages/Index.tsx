import HeroSection from "@/components/HeroSection";
import ObjetivosSection from "@/components/ObjetivosSection";
import PilaresSection from "@/components/PilaresSection";
import TecnologiasSection from "@/components/TecnologiasSection";
import RecorridoSection from "@/components/RecorridoSection";
import PlanoSection from "@/components/PlanoSection";
import DatosSection from "@/components/DatosSection";
import InversionSection from "@/components/InversionSection";
import FooterSection from "@/components/FooterSection";
import SectionDivider from "@/components/SectionDivider";

const Index = () => (
  <div className="min-h-screen">
    <HeroSection />
    <SectionDivider />
    <ObjetivosSection />
    <SectionDivider />
    <PilaresSection />
    <SectionDivider />
    <TecnologiasSection />
    <SectionDivider />
    <RecorridoSection />
    <SectionDivider />
    <PlanoSection />
    <SectionDivider />
    <DatosSection />
    <SectionDivider />
    <InversionSection />
    <FooterSection />
  </div>
);

export default Index;
