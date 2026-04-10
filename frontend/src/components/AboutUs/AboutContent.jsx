// src/components/AboutUs/AboutContent.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

// ✅ EXISTING IMAGES
import aboutImg1 from "../../assets/about-img1.1.jpg";
import aboutImg2 from "../../assets/about-img2.1.png";

// ✅ NEW IMAGES
import shapeImg from "../../assets/shape1.png";
import icon1 from "../../assets/icon1 (1).png";
import icon2 from "../../assets/icon2 (1).png";

const AboutContent = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE - IMAGES */}
          <div className="relative flex justify-center lg:justify-start">
            
            {/* Top Image */}
            <div className="rounded-3xl overflow-hidden shadow-xl w-[280px] sm:w-[320px] md:w-[360px]">
              <img
                src={aboutImg1}
                alt="About"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Image */}
            <div className="absolute bottom-[-40px] right-[-20px] rounded-3xl overflow-hidden shadow-xl w-[240px] sm:w-[260px] md:w-[300px] border-4 border-white">
              <img
                src={aboutImg2}
                alt="About Work"
                className="w-full h-full object-cover"
              />
            </div>

            {/* ✅ SHAPE IMAGE (REPLACED X) */}
            <img
              src={shapeImg}
              alt="shape"
              className="absolute -bottom-16 left-10 w-16 opacity-40"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            
            {/* Vertical Gradient Line */}
            <div className="hidden md:block absolute left-[-30px] top-0 h-full w-[4px] bg-gradient-to-b from-red-500 via-purple-500 to-blue-500 rounded-full"></div>

            <p className="text-red-500 font-semibold tracking-wider mb-2">
              ● ABOUT US
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Using AI Solutions to Lead the Future of Business
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              We begin by understanding your business goals, challenges, and opportunities for AI integration.
              Our experts assess your current systems and identify areas where AI can bring the most impact.
              Our team designs a tailor-made AI solution based on your specific requirements.
            </p>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              
              {/* ✅ ICON 1 */}
              <div className="flex gap-4 items-start">
                <img src={icon1} alt="icon1" className="w-10 h-10 object-contain" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    100% Customers Satisfaction
                  </h4>
                  <p className="text-sm text-gray-500">
                    Experienced AI specialists delivering results.
                  </p>
                </div>
              </div>

              {/* ✅ ICON 2 */}
              <div className="flex gap-4 items-start">
                <img src={icon2} alt="icon2" className="w-10 h-10 object-contain" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Quality Assurance Guarantee
                  </h4>
                  <p className="text-sm text-gray-500">
                    Reliable and scalable AI solutions.
                  </p>
                </div>
              </div>

            </div>

            {/* BUTTON */}
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg flex items-center gap-2">
              Discover More <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;