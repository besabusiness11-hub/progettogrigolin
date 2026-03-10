import { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CompaniesSection from "@/components/CompaniesSection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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
          <HeroSection />
          <AboutSection />
          <CompaniesSection />
          <StatsSection />
          <ContactSection />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
