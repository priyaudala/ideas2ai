import React, { useState } from "react";
import { Facebook, Linkedin } from "lucide-react";
import { FaPinterest, FaTwitter, FaInstagram } from "react-icons/fa";

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
    <section className="bg-[#f6f7fb] py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* HEADER */}
        <p className="text-red-500 text-xs font-semibold text-center tracking-widest mb-3">
          ● AI EXPERT TEAM
        </p>

        <h2 className="text-[40px] lg:text-[52px] font-semibold text-center text-[#0b1b3f] mb-20 leading-tight">
          Our Professionals AI Expert Team.
        </h2>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* LEFT LIST */}
          <div className="space-y-6">
            {teamData.map((item, index) => (
              <div
                key={index}
                onClick={() => setActive(index)}
                className={`flex items-center gap-4 p-4 rounded-[16px] cursor-pointer transition-all duration-300
                ${
                  active === index
                    ? "bg-white border border-gray-200 shadow-sm"
                    : "bg-[#eef0f5] hover:bg-white"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-xl object-cover"
                />
                <div>
                  <h4 className="font-semibold text-[#0b1b3f] text-[16px]">
                    {item.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{item.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CENTER IMAGE + COMBINED BAR */}
          <div className="relative flex justify-center">
            <img
              src={selected.image}
              alt={selected.name}
              className="rounded-[28px] w-full max-w-[360px] object-cover"
            />

            {/* 🔥 COMBINED EXPERIENCE + SOCIAL */}
            <div className="absolute bottom-[-35px] left-[60%] -translate-x-1/2 flex items-center">
              {/* EXPERIENCE */}
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
                    <div
                      key={i}
                      className="w-9 h-9 flex items-center justify-center rounded-full border hover:bg-red-500 group cursor-pointer transition"
                    >
                      <Icon className="text-[#0b1b3f] group-hover:text-white text-sm" />
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h3 className="text-[30px] font-semibold text-[#0b1b3f] mb-1">
              {selected.name}
            </h3>

            <p className="text-gray-500 mb-5">{selected.role}</p>

            <p className="text-gray-500 mb-8 leading-relaxed text-[15px] max-w-[420px]">
              We value curiosity, collaboration and a can-do attitude. Oh, and
              coffee — lots of coffee. Come join a team that celebrates your
              unique skills and helps you grow.
            </p>

            {/* SKILLS */}
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2  text-[#0b1b3f]">
                <span>Artificial Intelligence</span>
                <span>{selected.ai}%</span>
              </div>
              <div className="w-full h-[4px] bg-gray-200 rounded-full">
                <div
                  className="h-full bg-red-500 rounded-full transition-all duration-500"
                  style={{ width: `${selected.ai}%` }}
                />
              </div>
            </div>

            <div className="mb-10">
              <div className="flex justify-between text-sm mb-2  text-[#0b1b3f]">
                <span>Robotics Management</span>
                <span>{selected.robotics}%</span>
              </div>
              <div className="w-full h-[4px] bg-gray-200 rounded-full">
                <div
                  className="h-full bg-red-500 rounded-full transition-all duration-500"
                  style={{ width: `${selected.robotics}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
