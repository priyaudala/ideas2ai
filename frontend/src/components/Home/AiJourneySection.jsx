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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 md:py-28 lg:py-32 xl:py-36 overflow-hidden relative">
      <div className="max-w-[1240px] xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16 text-center relative z-10">
        {/* TOP LABEL */}
        <motion.p
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
          className="text-red-500 text-xs md:text-sm font-semibold tracking-widest mb-4"
        >
          ● HOW IT WORK
        </motion.p>

        {/* HEADING */}
        <motion.h2
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
          className="text-[32px] md:text-[48px] lg:text-[56px] xl:text-[64px] 2xl:text-[72px] leading-[44px] md:leading-[64px] lg:leading-[72px] xl:leading-[80px] font-semibold text-[#0b1b3f]"
        >
          The AI Transformation Journey
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
          className="mt-4 text-gray-500 max-w-[900px] xl:max-w-[1000px] 2xl:max-w-[1100px] mx-auto text-sm md:text-base xl:text-lg"
        >
          We begin with a detailed consultation to learn about your business
          challenges, goals, and opportunities for AI integration
        </motion.p>

        {/* MAIN LAYOUT */}
        <div className="mt-16 md:mt-24 lg:mt-28 xl:mt-32 flex flex-col lg:flex-row items-center justify-between gap-8 xl:gap-12 2xl:gap-16 relative">
          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="w-full max-w-[320px] xl:max-w-[360px] 2xl:max-w-[400px] h-[200px] md:h-[220px] xl:h-[250px] 2xl:h-[280px] rounded-[30px] xl:rounded-[40px] bg-gradient-to-br from-[#f3b6b6] to-[#e6dede] flex flex-col items-center justify-center text-center px-6 shadow-sm"
          >
            <Search
              className="mb-4 md:mb-6 xl:mb-8 text-[#0b1b3f]"
              size={32}
              strokeWidth={1.5}
            />
            <h3 className="text-lg md:text-xl xl:text-2xl font-semibold text-[#0b1b3f]">
              Discovery & <br /> Consultation
            </h3>
          </motion.div>
          <div className="flex items-center justify-center gap-12 xl:gap-20 2xl:gap-28">
            {/* LEFT FLOW LINE */}
            <motion.div
              className="hidden lg:flex flex-col items-center relative z-30"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <motion.div
                animate={{ x: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-24 xl:w-32 2xl:w-40 border-t-2 border-dashed border-purple-300 relative"
              >
                <span className="absolute right-0 top-[-8px] text-purple-300">
                  →
                </span>
              </motion.div>

              <p className="mt-8 text-gray-500 text-sm xl:text-base text-center leading-relaxed">
                Understanding <br /> Your Needs
              </p>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center justify-center z-0"
            >
              <motion.div
                animate={{ rotate: [0, 1, -1, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="
    absolute inset-0
    border-2 border-dashed border-purple-300
    rounded-[30px] xl:rounded-[40px]

    w-[260px]
    md:w-[320px]
    lg:w-[300px]
    xl:w-[380px]
    2xl:w-[420px]

    h-[360px]
    md:h-[420px]
    lg:h-[400px]
    xl:h-[480px]
    2xl:h-[520px]
  "
              />

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="
    w-[220px] h-[220px]

    md:w-[260px] md:h-[260px]

    lg:w-[240px] lg:h-[240px]

    xl:w-[300px] xl:h-[300px]

    2xl:w-[340px] 2xl:h-[340px]

    rounded-full
    bg-[#e7bcbc]
    flex flex-col items-center justify-center
    relative z-10
    shadow-md
  "
              >
                <Database size={32} className="mb-3 text-[#0b1b3f]" />

                <h3 className="text-lg md:text-xl xl:text-2xl font-semibold text-[#0b1b3f] text-center">
                  Data & <br /> Feasibility
                </h3>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="
    w-[220px] h-[220px]

    md:w-[260px] md:h-[260px]

    lg:w-[240px] lg:h-[240px]

    xl:w-[300px] xl:h-[300px]

    2xl:w-[340px] 2xl:h-[340px]

    rounded-full
    bg-gradient-to-br
    from-purple-600
    to-orange-400
    flex items-center justify-center
    text-white
    text-center
    px-6

    -mt-12
    lg:-mt-10
    xl:-mt-14

    z-20
    shadow-lg
  "
              >
                <p className="text-xs md:text-sm xl:text-base 2xl:text-lg px-4 leading-relaxed">
                  Our experts analyze your data, workflows, and technology stack
                </p>
              </motion.div>
            </motion.div>

            <motion.div className="hidden lg:flex flex-col items-center relative z-30 w-[130px]">
              <motion.div
                animate={{ x: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-24 xl:w-32 2xl:w-40 border-t-2 border-dashed border-purple-300 relative"
              >
                <span className="absolute right-0 top-[-8px] text-purple-300">
                  →
                </span>
              </motion.div>

              <p className="mt-10 text-gray-500 text-sm xl:text-base text-center leading-relaxed">
                Building Smart
                <br />
                Solutions
              </p>
            </motion.div>
          </div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="w-full max-w-[320px] xl:max-w-[360px] 2xl:max-w-[400px] h-[200px] md:h-[220px] xl:h-[250px] 2xl:h-[280px] rounded-[30px] xl:rounded-[40px] bg-gradient-to-br from-[#f3b6b6] to-[#e6dede] flex flex-col items-center justify-center text-center px-6 shadow-sm"
          >
            <Wrench className="mb-4 md:mb-6 xl:mb-8 text-[#0b1b3f]" size={32} />
            <h3 className="text-lg md:text-xl xl:text-2xl font-semibold text-[#0b1b3f]">
              Development & <br /> Integration
            </h3>
          </motion.div>
        </div>
      </div>

      {/* 🤖 ROBOT HAND - Responsive for Laptop L */}
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
          sm:right-[-30px]
          md:right-[-40px]
          lg:right-[-50px]
          xl:right-[-60px]
          2xl:right-[-80px]
          w-[220px]
          sm:w-[280px]
          md:w-[340px]
          lg:w-[380px]
          xl:w-[450px]
          2xl:w-[520px]
          pointer-events-none 
          select-none 
          z-0
        "
      />
    </section>
  );
}
