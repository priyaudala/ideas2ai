import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../../assets/hero-img1.png";
import img2 from "../../assets/hero-img2.webp";
import img3 from "../../assets/hero-img3.webp";

import client1 from "../../assets/client1.jpg";
import client2 from "../../assets/client2.jpg";
import client3 from "../../assets/client3.jpg";

const slides = [
  {
    title: "AI For Your Business Boosting Growth",
    desc: "Web developers and marketers who've been delivering digital success for more than a decade.",
    img: img1,
  },
  {
    title: "Simplifying Tech To Empower Growth",
    desc: "We build intelligent AI solutions that help businesses grow faster and smarter.",
    img: img2,
  },
  {
    title: "AI Automation To Save Time & Scale",
    desc: "Automation-driven AI systems to improve productivity and scale your success.",
    img: img3,
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [pause, setPause] = useState(false);

  // Auto Slide
  useEffect(() => {
    if (pause) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [pause]);

  return (
    <section className="pt-24 md:pt-28 pb-12 md:pb-20 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Main Card Container - Full Width */}
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-r from-[#0b0f3a] via-[#1a0f4c] to-[#5b2d8c] shadow-2xl w-full">
          {/* Content */}
          <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="grid md:grid-cols-2 items-center gap-10 min-h-[520px] md:min-h-[560px]">
              {/* LEFT CONTENT */}
              <div className="text-white space-y-6 text-center md:text-left">
                <p className="text-red-400 font-semibold tracking-wider text-sm">
                  ● SMARTER TECH FOR TOMORROW
                </p>

                {/* TITLE */}
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={current}
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -80 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  >
                    {slides[current].title}
                  </motion.h1>
                </AnimatePresence>

                {/* DESCRIPTION */}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={"desc-" + current}
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -60 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-gray-300 max-w-lg mx-auto md:mx-0"
                  >
                    {slides[current].desc}
                  </motion.p>
                </AnimatePresence>

                {/* BUTTON + CLIENTS */}
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full font-semibold hover:scale-105 transition shadow-lg">
                    Get A Quote →
                  </button>

                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-3">
                      <img
                        src={client1}
                        className="w-9 h-9 rounded-full border-2 border-white object-cover"
                      />
                      <img
                        src={client2}
                        className="w-9 h-9 rounded-full border-2 border-white object-cover"
                      />
                      <img
                        src={client3}
                        className="w-9 h-9 rounded-full border-2 border-white object-cover"
                      />

                      <div className="w-9 h-9 flex items-center justify-center rounded-full bg-red-500 text-white text-xs border-2 border-white">
                        10+
                      </div>
                    </div>

                    <div className="text-yellow-400 text-sm font-semibold">
                      ⭐⭐⭐⭐⭐
                      <span className="text-white ml-2">20K+ users</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="flex justify-center items-center min-h-[300px] md:min-h-[450px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current}
                    src={slides[current].img}
                    initial={{ opacity: 0, x: 80, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 80, scale: 0.9 }}
                    transition={{ duration: 0.6 }}
                    className="object-contain w-full max-w-[500px]"
                  />
                </AnimatePresence>
              </div>
            </div>

            {/* DOTS */}
            <div className="flex justify-center mt-10 gap-3">
              {slides.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300
                  ${current === index ? "bg-pink-500 scale-125" : "bg-gray-400"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
