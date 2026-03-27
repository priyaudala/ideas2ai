import React from "react";
import { Search, Database, Wrench } from "lucide-react";
import handImg from "../../assets/process-shape.png";

export default function AiJourneySection() {
  return (
    <section className="bg-[#f5f6fa] py-20 md:py-28 overflow-hidden relative">
      <div className="max-w-[1240px] mx-auto px-6 text-center relative z-10">

        {/* TOP LABEL */}
        <p className="text-red-500 text-xs font-semibold tracking-widest mb-4">
          ● HOW IT WORK
        </p>

        {/* HEADING */}
        <h2 className="text-[32px] md:text-[48px] lg:text-[56px] leading-[44px] md:leading-[64px] font-semibold text-[#0b1b3f]">
          The AI Transformation Journey
        </h2>

        {/* SUBTEXT */}
        <p className="mt-4 text-gray-500 max-w-[900px] mx-auto text-sm md:text-base">
          We begin with a detailed consultation to learn about your business challenges,
          goals, and opportunities for AI integration
        </p>

        {/* MAIN LAYOUT */}
        <div className="mt-16 md:mt-24 flex flex-col lg:flex-row items-center justify-between gap-14 relative">

          {/* LEFT CARD */}
          <div className="w-full max-w-[320px] h-[200px] md:h-[220px] rounded-[30px] bg-gradient-to-br from-[#f3b6b6] to-[#e6dede] flex flex-col items-center justify-center text-center px-6">
            <Search className="mb-4 md:mb-6 text-[#0b1b3f]" size={32} strokeWidth={1.5} />
            <h3 className="text-lg md:text-xl font-semibold text-[#0b1b3f] leading-7 md:leading-8">
              Discovery & <br /> Consultation
            </h3>
          </div>

          {/* LEFT DASH LINE (hide on mobile) */}
          <div className="hidden lg:flex flex-col items-center">
            <div className="w-28 border-t-2 border-dashed border-purple-300 relative">
              <span className="absolute right-0 top-[-6px] text-purple-300">→</span>
            </div>
            <p className="mt-4 text-gray-500 text-sm text-center">
              Understanding <br /> Your Needs
            </p>
          </div>

          {/* CENTER SECTION */}
          <div className="relative flex flex-col items-center justify-center">

            {/* DASHED BORDER BOX */}
            <div className="absolute inset-0 border-2 border-dashed border-purple-300 rounded-[30px] w-[260px] md:w-[320px] h-[360px] md:h-[420px]"></div>

            {/* TOP CIRCLE */}
            <div className="w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-full bg-[#e7bcbc] flex flex-col items-center justify-center relative z-10">
              <Database size={32} className="mb-3 md:mb-4 text-[#0b1b3f]" strokeWidth={1.5} />
              <h3 className="text-lg md:text-xl font-semibold text-[#0b1b3f] text-center">
                Data & <br /> Feasibility
              </h3>
            </div>

            {/* BOTTOM CIRCLE */}
            <div className="w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-full bg-gradient-to-br from-purple-600 to-orange-400 flex items-center justify-center text-white text-center px-6 md:px-8 -mt-14 md:-mt-16 z-20">
              <p className="text-xs md:text-sm leading-5 md:leading-6">
                Our experts analyze your data, workflows, and technology stack
              </p>
            </div>
          </div>

          {/* RIGHT DASH LINE (hide on mobile) */}
          <div className="hidden lg:flex flex-col items-center">
            <div className="w-28 border-t-2 border-dashed border-purple-300 relative">
              <span className="absolute right-0 top-[-6px] text-purple-300">→</span>
            </div>
            <p className="mt-4 text-gray-500 text-sm text-center">
              Understanding <br /> Your Needs
            </p>
          </div>

          {/* RIGHT CARD */}
          <div className="w-full max-w-[320px] h-[200px] md:h-[220px] rounded-[30px] bg-gradient-to-br from-[#f3b6b6] to-[#e6dede] flex flex-col items-center justify-center text-center px-6">
            <Wrench className="mb-4 md:mb-6 text-[#0b1b3f]" size={32} strokeWidth={1.5} />
            <h3 className="text-lg md:text-xl font-semibold text-[#0b1b3f] leading-7 md:leading-8">
              Development & <br /> Integration
            </h3>
          </div>
        </div>
      </div>

      {/* 🤖 ROBOT HAND IMAGE (RESPONSIVE FIX) */}
      <img
        src={handImg}
        alt="robot hand"
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