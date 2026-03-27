import React from "react";
import { Cpu, Bot, Image as ImageIcon, MessageSquare } from "lucide-react";

export default function AiFeaturesSection() {
  const features = [
    {
      id: "01",
      title: "Tech support",
      icon: Cpu,
      desc: "To empower businesses with intelligent, scalable, impactful solutions that drive",
    },
    {
      id: "02",
      title: "Robo Genius",
      icon: Bot,
      desc: "To empower businesses with intelligent, scalable, impactful solutions that drive",
    },
    {
      id: "03",
      title: "Image Generation",
      icon: ImageIcon,
      desc: "To empower businesses with intelligent, scalable, impactful solutions that drive",
    },
    {
      id: "04",
      title: "Chatbots",
      icon: MessageSquare,
      desc: "To empower businesses with intelligent, scalable, impactful solutions that drive",
    },
  ];

  return (
    <section className="bg-[#f5f6fa] py-28">
      <div className="max-w-[1240px] mx-auto px-6 text-center">
        
        {/* TOP LABEL */}
        <p className="text-red-500 text-xs font-semibold tracking-widest mb-4">
          ● ADVANCED TECHNOLOGY
        </p>

        {/* HEADING */}
        <h2 className="text-[48px] md:text-[56px] leading-[64px] font-semibold text-[#0b1b3f] max-w-[900px] mx-auto">
          Advances in AI Technology Are Here <br />
          to Impact the Future.
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative cursor-pointer rounded-[24px] p-[2px] transition-all duration-300"
              >
                {/* Gradient Border (ONLY on hover) */}
                <div className="absolute inset-0 rounded-[24px] bg-gradient-to-r from-purple-600 to-orange-400 opacity-0 group-hover:opacity-100 transition duration-300"></div>

                {/* Card Content */}
                <div className="relative rounded-[22px] bg-[#f0f1f5] group-hover:bg-white p-10 h-full transition-all duration-300 group-hover:shadow-lg">
                  
                  {/* NUMBER */}
                  <span className="text-[48px] font-semibold text-gray-300">
                    {item.id}
                  </span>

                  {/* ICON */}
                  <div className="absolute top-10 right-10 text-gray-300">
                    <Icon size={42} strokeWidth={1.5} />
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-16 text-xl font-semibold text-[#0b1b3f]">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-4 text-gray-500 text-sm leading-6">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}