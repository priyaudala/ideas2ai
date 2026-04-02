import React, { useState } from "react";
import { FaPinterest,FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import team1 from "../../assets/team-thumb1.jpg";
import team2 from "../../assets/team-thumb2.jpg";
import team3 from "../../assets/team-thumb3.jpg";

export default function TeamSection() {
  const teamData = [
    {
      name: "Guy Hawkins",
      role: "President of Sales",
      image: team1,
      ai: 80,
      robotics: 60,
    },
    {
      name: "Brooklyn Simmons",
      role: "President of Sales",
      image: team2,
      ai: 90,
      robotics: 70,
    },
    {
      name: "Jenny Wilson",
      role: "President of Sales",
      image: team3,
      ai: 85,
      robotics: 65,
    },
  ];

  const [active, setActive] = useState(1);
  const selected = teamData[active];

  return (
    <section className="bg-[#f6f7fb] py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-red-500 text-[10px] sm:text-xs font-semibold text-center tracking-widest mb-2 sm:mb-3"
        >
          ● AI EXPERT TEAM
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] 
                     font-semibold text-center text-[#0b1b3f] 
                     mb-10 sm:mb-14 md:mb-20 leading-tight"
        >
          Our Professionals AI Expert Team.
        </motion.h2>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-center">

          {/* LEFT LIST (Scrollable on mobile) */}
          <div className="flex lg:block gap-4 overflow-x-auto lg:overflow-visible pb-2">
            {teamData.map((item, index) => (
              <motion.div
                key={index}
                onClick={() => setActive(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={`min-w-[220px] lg:min-w-full 
                            flex items-center gap-4 p-4 rounded-[16px] 
                            cursor-pointer transition
                ${
                  active === index
                    ? "bg-white border border-gray-200 shadow-sm"
                    : "bg-[#eef0f5] hover:bg-white"
                }`}
              >
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover"
                />

                <div>
                  <h4 className="font-semibold text-[#0b1b3f] text-sm sm:text-base">
                    {item.name}
                  </h4>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {item.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CENTER IMAGE */}
          <div className="relative flex justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={selected.image}
                src={selected.image}
                alt={selected.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="rounded-[20px] sm:rounded-[28px] 
                           w-full max-w-[260px] sm:max-w-[320px] md:max-w-[360px] 
                           object-cover shadow-lg"
              />
            </AnimatePresence>

            {/* EXPERIENCE + SOCIAL */}
            <div className="absolute 
                            bottom-[-20px] sm:bottom-[-30px] 
                            left-1/2 -translate-x-1/2 
                            flex flex-col sm:flex-row items-center">

              {/* EXPERIENCE */}
              <div className="bg-[#081c3a] text-white 
                              px-4 sm:px-6 py-3 
                              rounded-t-[12px] sm:rounded-l-[14px] sm:rounded-tr-none 
                              flex items-center gap-2 sm:gap-3 shadow-lg">
                <span className="text-lg sm:text-[22px] font-bold">10+</span>
                <span className="text-xs sm:text-sm">
                  Experience
                </span>
              </div>

              {/* SOCIAL */}
              <div className="bg-white border border-gray-200 
                              px-3 sm:px-5 py-2 sm:py-3 
                              rounded-b-[20px] sm:rounded-r-[40px] sm:rounded-bl-none 
                              flex items-center gap-3 sm:gap-4 shadow-sm">

                {[FaLinkedin, FaFacebook, FaTwitter, FaPinterest, FaInstagram].map(
                  (Icon, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.2 }}
                      className="w-8 h-8 flex items-center justify-center 
                                 rounded-full border hover:bg-red-500 
                                 group cursor-pointer transition"
                    >
                      <Icon className="text-[#0b1b3f] group-hover:text-white text-xs" />
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="text-center lg:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.name}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#0b1b3f] mb-1">
                  {selected.name}
                </h3>

                <p className="text-gray-500 mb-4 sm:mb-5 text-sm sm:text-base">
                  {selected.role}
                </p>

                <p className="text-gray-500 mb-6 sm:mb-8 leading-relaxed text-sm max-w-[420px] mx-auto lg:mx-0">
                  We value curiosity, collaboration and a can-do attitude.
                  Come join a team that celebrates your unique skills.
                </p>

                {/* SKILLS */}
                {[
                  { label: "Artificial Intelligence", value: selected.ai },
                  { label: "Robotics Management", value: selected.robotics },
                ].map((skill, i) => (
                  <div key={i} className="mb-5 sm:mb-6">
                    <div className="flex justify-between text-xs sm:text-sm mb-2 text-[#0b1b3f]">
                      <span>{skill.label}</span>
                      <span>{skill.value}%</span>
                    </div>

                    <div className="w-full h-[4px] bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.value}%` }}
                        transition={{ duration: 1 }}
                        className="h-full bg-red-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}