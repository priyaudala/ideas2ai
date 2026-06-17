// src/pages/AboutUs.jsx
import React from "react";
import HeroSection from "../components/AboutUs/HeroSection";
import AboutContent from "../components/AboutUs/AboutContent.jsx";
import StatsSection from "../components/AboutUs/StatsSection.jsx";
import CTASection from "../components/AboutUs/CTASection.jsx";
import WhoWeAre from "../components/AboutUs/WhoWeAre.jsx";
import WorkProcess from "../components/AboutUs/WorkProcess.jsx";
import AdvancedTechnology from "../components/AboutUs/AdvancedTechnology.jsx";
import TeamSection from "../components/Home/TeamSection.jsx";
import TestimonialSection from "../components/Home/TestimonialSection.jsx";
import Clients from "../components/Home/Clients.jsx";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutContent />
      <StatsSection />
      <CTASection />
      <WhoWeAre />
      <WorkProcess />
      <AdvancedTechnology />
      <TeamSection />
      <Clients />
      <TestimonialSection />
    </div>
  );
};

export default AboutUs;