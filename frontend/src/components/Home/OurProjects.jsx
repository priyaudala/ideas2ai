import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

import img1 from "../../assets/project-img1.jpg";
import img2 from "../../assets/project-img2.jpg";
import img3 from "../../assets/project-img3.jpg";
import roboHand from "../../assets/shape2.png";

const OurProjects = () => {
  const [active, setActive] = useState(null);

  const toggleProject = (id) => {
    setActive((prev) => (prev === id ? null : id));
  };

  const projects = [
    {
      id: 1,
      name: "Deep Vision",
      title: "Autonomous vehicle navigation with advanced AI",
      img: img1,
      desc: "Ai Startup Agency",
    },
    {
      id: 2,
      name: "AI Verse",
      title: "Natural language processing powered AI system",
      img: img2,
      desc: "Ai Startup Agency",
    },
    {
      id: 3,
      name: "Deep Vision",
      title: "Predictive stock market analysis using AI",
      img: img3,
      desc: "Ai Startup Agency",
    },
  ];

  return (
    <section className="w-full bg-[#f7f8fa] relative overflow-hidden">

      {/* ================= SAFE ROBO HAND (NO CUT + NO OVERLAP) ================= */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
          absolute
          pointer-events-none
          z-0

          /* SAFE POSITIONING (NO CUT EVER) */
          bottom-[10%] sm:bottom-[12%] md:bottom-[14%] lg:bottom-[18%]

          /* KEEP INSIDE SAFE VISUAL AREA */
          left-[-10px] sm:left-[-20px] md:left-[-40px] lg:left-0

          opacity-60 sm:opacity-70 md:opacity-80 lg:opacity-90
        "
      >
        <motion.img
          src={roboHand}
          alt="Robo Hand"
          initial={{ scale: 0.85 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            w-24 sm:w-32 md:w-44 lg:w-64 xl:w-72
            h-auto object-contain

            /* IMPORTANT FIX: prevents half cut */
            max-h-[45vh]
          "
        />
      </motion.div>

      {/* ================= PROJECT SECTION ================= */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-24 relative z-20">

        <div className="grid lg:grid-cols-[0.8fr_1.4fr] gap-8">

          {/* LEFT */}
          <div>
            <p className="text-red-500 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              OUR PROJECTS & CASE STUDIES
            </p>
          </div>

          {/* RIGHT */}
          <div>
            <h2 className="text-[#0b1b3f] text-3xl md:text-5xl font-bold leading-tight">
              Technology That Drive Impact
            </h2>

            <div className="border-t border-gray-200 my-6"></div>

            <div className="space-y-6">
              {projects.map((p) => (
                <div key={p.id} className="border-b border-gray-300 pb-6">

                  <p
                    onClick={() => toggleProject(p.id)}
                    className="text-red-500 font-medium mb-2 cursor-pointer hover:text-red-600 transition-colors inline-block"
                  >
                    {p.name}:
                  </p>

                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3
                        onClick={() => toggleProject(p.id)}
                        className="text-[#0b1b3f] text-xl md:text-2xl font-semibold cursor-pointer hover:text-purple-600 transition-colors"
                      >
                        {p.title}
                      </h3>
                      <p className="text-gray-500 text-sm mt-1">
                        {p.desc}
                      </p>
                    </div>

                    <button
                      onClick={() => toggleProject(p.id)}
                      className={`w-10 h-10 flex items-center justify-center rounded-full border transition bg-gradient-to-r from-purple-500 to-pink-500 flex-shrink-0 ${
                        active === p.id ? "rotate-90" : ""
                      }`}
                    >
                      <FiArrowRight className="text-white" />
                    </button>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      active === p.id
                        ? "max-h-[500px] opacity-100 mt-4"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <img
                      src={p.img}
                      className="w-full rounded-xl shadow-md"
                      alt={p.title}
                    />

                    <button className="mt-4 text-purple-600 font-semibold hover:underline">
                      View Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ================= SAFE GAP BETWEEN SECTIONS ================= */}
      <div className="h-10 sm:h-14 md:h-16"></div>

      {/* ================= SCROLLING TEXT (NO OVERLAP FIXED) ================= */}
      <div className="w-full overflow-hidden py-10 sm:py-12 relative z-30 bg-[#f7f8fa]">
        <div className="flex w-max animate-marquee items-center">

          <div className="flex items-center gap-12 sm:gap-16 pr-8 sm:pr-16">
            <div className="text-5xl sm:text-6xl text-yellow-500 font-bold">⭐</div>
            <div className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-900 whitespace-nowrap">
              Generate With Ease
            </div>
            <div className="text-5xl sm:text-6xl text-yellow-500 font-bold">⭐</div>
            <div className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-900 whitespace-nowrap">
              Content Generator
            </div>
            <div className="text-5xl sm:text-6xl text-yellow-500 font-bold">⭐</div>
            <div className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-900 whitespace-nowrap">
              AI Technology
            </div>
          </div>

          <div className="flex items-center gap-12 sm:gap-16 pr-8 sm:pr-16">
            <div className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-900 whitespace-nowrap">
              Generate With Ease
            </div>
            <div className="text-5xl sm:text-6xl text-yellow-500 font-bold">⭐</div>
            <div className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-900 whitespace-nowrap">
              Content Generator
            </div>
            <div className="text-5xl sm:text-6xl text-yellow-500 font-bold">⭐</div>
            <div className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-900 whitespace-nowrap">
              AI Technology
            </div>
          </div>

        </div>
      </div>

      {/* ================= ANIMATION ================= */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            animation: marquee 6s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default OurProjects;