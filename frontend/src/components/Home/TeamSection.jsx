import React, { useState } from "react";
import { Facebook, Linkedin } from "lucide-react";
import { FaPinterest, FaTwitter, FaInstagram } from "react-icons/fa";
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
    <section className="bg-[#f6f7fb] py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* HEADER */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-red-500 text-xs font-semibold text-center tracking-widest mb-3"
        >
          ● AI EXPERT TEAM
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[40px] lg:text-[52px] font-semibold text-center text-[#0b1b3f] mb-20 leading-tight"
        >
          Our Professionals AI Expert Team.
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-12 items-center">

          {/* LEFT LIST */}
          <div className="space-y-6">
            {teamData.map((item, index) => (
              <motion.div
                key={index}
                onClick={() => setActive(index)}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-4 p-4 rounded-[16px] cursor-pointer transition-all duration-300
                ${
                  active === index
                    ? "bg-white border border-gray-200 shadow-sm"
                    : "bg-[#eef0f5] hover:bg-white"
                }`}
              >
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-xl object-cover"
                  whileHover={{ rotate: 3 }}
                />
                <div>
                  <h4 className="font-semibold text-[#0b1b3f] text-[16px]">
                    {item.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{item.role}</p>
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
                className="rounded-[28px] w-full max-w-[360px] object-cover shadow-lg"
              />
            </AnimatePresence>

            {/* EXPERIENCE + SOCIAL */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="absolute bottom-[-35px] left-[60%] -translate-x-1/2 flex items-center"
            >
              <div className="bg-[#081c3a] text-white px-8 py-4 rounded-l-[14px] flex items-center gap-3 shadow-lg">
                <span className="text-[24px] font-bold">10+</span>
                <span className="text-sm whitespace-nowrap">
                  Professional Experience
                </span>
              </div>

              {/* SOCIAL ICONS */}
              <div className="bg-white border border-gray-200 px-5 py-3 rounded-r-[40px] flex items-center gap-4 shadow-sm">
                {[Facebook, FaTwitter, Linkedin, FaPinterest, FaInstagram].map(
                  (Icon, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-9 h-9 flex items-center justify-center rounded-full border hover:bg-red-500 group cursor-pointer transition"
                    >
                      <Icon className="text-[#0b1b3f] group-hover:text-white text-sm" />
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.name}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-[30px] font-semibold text-[#0b1b3f] mb-1">
                  {selected.name}
                </h3>

                <p className="text-gray-500 mb-5">{selected.role}</p>

                <p className="text-gray-500 mb-8 leading-relaxed text-[15px] max-w-[420px]">
                  We value curiosity, collaboration and a can-do attitude. Oh,
                  and coffee — lots of coffee. Come join a team that celebrates
                  your unique skills and helps you grow.
                </p>

                {/* SKILLS */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2 text-[#0b1b3f]">
                    <span>Artificial Intelligence</span>
                    <span>{selected.ai}%</span>
                  </div>

                  <div className="w-full h-[4px] bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${selected.ai}%` }}
                      transition={{ duration: 1 }}
                      className="h-full bg-red-500 rounded-full"
                    />
                  </div>
                </div>

                <div className="mb-10">
                  <div className="flex justify-between text-sm mb-2 text-[#0b1b3f]">
                    <span>Robotics Management</span>
                    <span>{selected.robotics}%</span>
                  </div>

                  <div className="w-full h-[4px] bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${selected.robotics}%` }}
                      transition={{ duration: 1 }}
                      className="h-full bg-red-500 rounded-full"
                    />
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}