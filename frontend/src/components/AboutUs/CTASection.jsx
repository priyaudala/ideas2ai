import React from "react";
import { FaArrowRight } from "react-icons/fa";
import ctaBg from "../../assets/cta-bg.jpg";

const CTASection = () => {
  return (
    <section
      className="relative py-24 text-center text-white"
      style={{
        backgroundImage: `url(${ctaBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-950/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        
        <p className="text-red-500 font-semibold mb-3 tracking-wider">
          ● SOLUTIONS
        </p>

        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
          Enhance Customer Service with Intelligent Chatbots for Stress-Free Assistance
        </h2>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:scale-105 transition">
            Explore More <FaArrowRight />
          </button>

          <button className="bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:scale-105 transition">
            Watch Video <FaArrowRight />
          </button>

        </div>
      </div>
    </section>
  );
};

export default CTASection;