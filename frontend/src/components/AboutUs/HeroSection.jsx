// src/components/AboutUs/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import pageBg from "../../assets/page-bg.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden 
                 mt-16 sm:mt-20 md:mt-24 lg:mt-28
                 min-h-[300px] sm:min-h-[350px] md:min-h-[420px] lg:min-h-[500px]"
      style={{
        backgroundImage: `url(${pageBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full p-8 md:p-12 lg:p-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            About Us
          </h1>
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-gray-300 text-sm md:text-base">
            <span className="hover:text-white cursor-pointer transition">Home</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-purple-400">About Us</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;