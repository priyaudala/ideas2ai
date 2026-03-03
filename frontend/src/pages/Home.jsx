import React from "react";
import SubscribeSection from "../components/Home/SubscribeSection.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <div className="bg-[#070B2D] text-white min-h-screen py-20">

      <SubscribeSection />

      <div className="mt-20">
        <Footer />
      </div>

    </div>
  );
};

export default Home;