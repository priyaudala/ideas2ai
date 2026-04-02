import React from "react";
import { motion } from "framer-motion";

// Import your images
import aboutMainImg from "../../assets/about-img1.jpg"; // Main image
import aboutOverlapImg1 from "../../assets/about-img2.png"; // Second image (overlaps with main)
import aboutOverlapImg2 from "../../assets/about-shape.png"; // Third image (right side)

const About = () => {
  return (
    <section className="py-12 md:py-20 w-full bg-white">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* LEFT SIDE - Images */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[600px] w-full"
            >
              {/* Main Image */}
              <div className="absolute top-0 left-0 w-[85%] h-[450px] rounded-2xl overflow-hidden shadow-2xl z-10">
                <img 
                  src={aboutMainImg}
                  alt="AI Innovation"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/600x400/6366f1/ffffff?text=AI+Innovation`;
                  }}
                />
              </div>

              {/* Second Image (Overlapping with Main Image) */}
              <div className="absolute bottom-[10%] right-[5%] w-[75%] h-[400px] rounded-2xl overflow-hidden shadow-2xl z-20">
                <img 
                  src={aboutOverlapImg1}
                  alt="AI Technology"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/500x400/ec4899/ffffff?text=AI+Technology`;
                  }}
                />
              </div>
            </motion.div>

            {/* RIGHT SIDE - Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* ABOUT US Badge */}
              <div className="inline-block">
                <span className="text-red-500 font-semibold text-lg tracking-wider">
                  • ABOUT US
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transforming Businesses with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  AI-Powered Innovation
                </span>
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                we are pioneers in the fusion of creativity and cutting-edge AI technology. 
                Our mission is transform the way businesses approach design and digital 
                strategy by delivering innovative,
              </p>

              {/* Bullet Points */}
              <ul className="space-y-4 mt-8">
                <motion.li 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-purple-600 text-xl mt-1">•</span>
                  <span className="text-gray-700 text-base sm:text-lg">
                    Advanced Artificial Intelligence Capabilities for Enhanced Efficiency.
                  </span>
                </motion.li>

                <motion.li 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-purple-600 text-xl mt-1">•</span>
                  <span className="text-gray-700 text-base sm:text-lg">
                    Real-time Data Analysis and Monitoring for Optimized Performance.
                  </span>
                </motion.li>

                <motion.li 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-purple-600 text-xl mt-1">•</span>
                  <span className="text-gray-700 text-base sm:text-lg">
                    Collaborative and Autonomous Robots for Seamless Integration.
                  </span>
                </motion.li>
              </ul>

              {/* Button and Third Image - Same Line */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8 flex flex-wrap items-center justify-between gap-4 w-full"
              >
                {/* View All Project Button */}
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:scale-105 transition shadow-lg text-white whitespace-nowrap text-sm sm:text-base">
                  View All Project →
                </button>

                {/* Third Image */}
                <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] rounded-2xl overflow-hidden shadow-xl border-4 border-white flex-shrink-0">
                  <img 
                    src={aboutOverlapImg2}
                    alt="AI Robotics"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/150x150/8b5cf6/ffffff?text=AI`;
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;