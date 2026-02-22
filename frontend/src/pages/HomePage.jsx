import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import BatterySafetySection from "../components/BatterySafetySection";
import BenefitsSection from "../components/BenefitsSection";
import ImageCarousel from "../components/ImageCarousel";
import DevelopersSection from "../components/DevelopersSection";
import StatsSection from "../components/StatsSection";
import HowItWorksSection from "../components/HowItWorksSection";
import PricingSection from "../components/PricingSection";
import InfrastructureSection from "../components/InfrastructureSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <BatterySafetySection />
      <BenefitsSection />
      <ImageCarousel />
      <DevelopersSection />
      <StatsSection />
      <HowItWorksSection />
      <PricingSection />
      <InfrastructureSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;