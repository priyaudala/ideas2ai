import React from "react";
import AiJourneySection from "../components/Home/AiJourneySection.jsx";
import TestimonialSection from "../components/Home/TestimonialSection.jsx";
import AiFeatureSection from "../components/Home/AiFeatureSection.jsx";
import PricingSection from "../components/Home/PricingSection.jsx";
import TeamSection from "../components/Home/TeamSection";
import ContactSection from "../components/Home/ContactSection.jsx";
import BlogSection from "../components/Home/BlogSection.jsx";
import SubscribeSection from "../components/Home/SubscribeSection.jsx";



const Home = () => {
  return (
    <div className="bg-[#070B2D] min-h-screen text-white">
      <AiJourneySection />
      <TestimonialSection />
      <AiFeatureSection />
      <PricingSection />
      <TeamSection />
      <ContactSection />
      <BlogSection />
      <SubscribeSection />
    </div>
  );
};

export default Home;