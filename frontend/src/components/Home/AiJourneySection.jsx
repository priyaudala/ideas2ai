import React from "react";
import { Search, Database, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import handImg from "../../assets/process-shape.png";

export default function AiJourneySection() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="bg-[#f5f6fa] py-20 md:py-28 overflow-hidden relative">

      <div className="max-w-[1240px] mx-auto px-6 text-center relative z-10">

        {/* TOP LABEL */}
        <motion.p
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
          className="text-red-500 text-xs font-semibold tracking-widest mb-4"
        >
          ● HOW IT WORK
        </motion.p>

        {/* HEADING */}
        <motion.h2
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
          className="text-[32px] md:text-[48px] lg:text-[56px] leading-[44px] md:leading-[64px] font-semibold text-[#0b1b3f]"
        >
          The AI Transformation Journey
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
          className="mt-4 text-gray-500 max-w-[900px] mx-auto text-sm md:text-base"
        >
          We begin with a detailed consultation to learn about your business challenges,
          goals, and opportunities for AI integration
        </motion.p>

        {/* MAIN LAYOUT */}
        <div className="mt-16 md:mt-24 flex flex-col lg:flex-row items-center justify-between gap-14 relative">

          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="w-full max-w-[320px] h-[200px] md:h-[220px] rounded-[30px] bg-gradient-to-br from-[#f3b6b6] to-[#e6dede] flex flex-col items-center justify-center text-center px-6 shadow-sm"
          >
            <Search className="mb-4 md:mb-6 text-[#0b1b3f]" size={32} strokeWidth={1.5} />
            <h3 className="text-lg md:text-xl font-semibold text-[#0b1b3f]">
              Discovery & <br /> Consultation
            </h3>
          </motion.div>

          {/* LEFT FLOW LINE */}
          <motion.div
            className="hidden lg:flex flex-col items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <motion.div
              animate={{ x: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-28 border-t-2 border-dashed border-purple-300 relative"
            >
              <span className="absolute right-0 top-[-6px] text-purple-300">→</span>
            </motion.div>

            <p className="mt-4 text-gray-500 text-sm text-center">
              Understanding <br /> Your Needs
            </p>
          </motion.div>

          {/* CENTER */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center justify-center"
          >

            {/* DASH BOX */}
            <motion.div
              animate={{ rotate: [0, 1, -1, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute inset-0 border-2 border-dashed border-purple-300 rounded-[30px] w-[260px] md:w-[320px] h-[360px] md:h-[420px]"
            />

            {/* TOP CIRCLE */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-full bg-[#e7bcbc] flex flex-col items-center justify-center relative z-10 shadow-md"
            >
              <Database size={32} className="mb-3 text-[#0b1b3f]" />
              <h3 className="text-lg md:text-xl font-semibold text-[#0b1b3f] text-center">
                Data & <br /> Feasibility
              </h3>
            </motion.div>

            {/* BOTTOM CIRCLE */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-full bg-gradient-to-br from-purple-600 to-orange-400 flex items-center justify-center text-white text-center px-6 -mt-14 z-20 shadow-lg"
            >
              <p className="text-xs md:text-sm">
                Our experts analyze your data, workflows, and technology stack
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT FLOW LINE */}
          <motion.div
            className="hidden lg:flex flex-col items-center"
          >
            <motion.div
              animate={{ x: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-28 border-t-2 border-dashed border-purple-300 relative"
            >
              <span className="absolute right-0 top-[-6px] text-purple-300">→</span>
            </motion.div>

            <p className="mt-4 text-gray-500 text-sm text-center">
              Building Smart <br /> Solutions
            </p>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="w-full max-w-[320px] h-[200px] md:h-[220px] rounded-[30px] bg-gradient-to-br from-[#f3b6b6] to-[#e6dede] flex flex-col items-center justify-center text-center px-6 shadow-sm"
          >
            <Wrench className="mb-4 md:mb-6 text-[#0b1b3f]" size={32} />
            <h3 className="text-lg md:text-xl font-semibold text-[#0b1b3f]">
              Development & <br /> Integration
            </h3>
          </motion.div>

        </div>
      </div>

      {/* 🤖 ROBOT HAND (SMOOTH + PREMIUM) */}
      <motion.img
        src={handImg}
        alt="robot hand"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        animate={{ y: [0, -10, 0] }}
        className="
          absolute 
          bottom-[-10px] 
          right-[-20px] 
          w-[220px]
          sm:w-[280px]
          md:w-[340px]
          lg:w-[420px]
          md:right-[-40px]
          lg:right-[-60px]
          pointer-events-none 
          select-none 
          z-0
        "
      />
    </section>
  );
}