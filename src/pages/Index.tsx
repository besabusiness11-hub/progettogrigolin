import { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection"; // La Filiera
import ProjectsSection from "@/components/ProjectsSection"; // I Nuovi Progetti Iconici
import CompaniesSection from "@/components/CompaniesSection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import 'leaflet/dist/leaflet.css';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <SplashScreen show={showSplash} />
      {!showSplash && (
        <>
          <Navbar />
          {/* 1. Impatto Visivo */}
          <HeroSection />
          
          {/* 2. La Solidità del Gruppo */}
          <StatsSection />
          
          {/* 3. Il Processo/Filiera Integrata (Scroll dinamico) */}
          <AboutSection />
          
          {/* 4. Le Opere (Risultato dell'integrazione) */}
          <ProjectsSection />
          
          {/* 5. Le Nostre Anime (Chi realizza le opere) */}
          <CompaniesSection />
          
          {/* 6. Contatti, HR & Sostenibilità */}
          <ContactSection />
          
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;