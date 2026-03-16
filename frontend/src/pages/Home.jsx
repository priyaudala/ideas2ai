import React from "react";
import ContactSection from "../components/Home/ContactSection.jsx";
import BlogSection from "../components/Home/BlogSection.jsx";
import SubscribeSection from "../components/Home/SubscribeSection.jsx";

const Home = () => {
  return (
    <div className="bg-[#070B2D] min-h-screen text-white">
      <ContactSection />
      <BlogSection />
      <SubscribeSection />
    </div>
  );
};

export default Home;