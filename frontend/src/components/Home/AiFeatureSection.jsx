import React from "react";
import { Cpu, Bot, Image as ImageIcon, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function AiFeaturesSection() {
  const features = [
    { id: "01", title: "Tech support", icon: Cpu, desc: "To empower businesses with intelligent, scalable, impactful solutions that drive" },
    { id: "02", title: "Robo Genius", icon: Bot, desc: "To empower businesses with intelligent, scalable, impactful solutions that drive" },
    { id: "03", title: "Image Generation", icon: ImageIcon, desc: "To empower businesses with intelligent, scalable, impactful solutions that drive" },
    { id: "04", title: "Chatbots", icon: MessageSquare, desc: "To empower businesses with intelligent, scalable, impactful solutions that drive" },
  ];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  const card = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="bg-[#f5f6fa] py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <motion.p className="text-red-500 text-[10px] sm:text-xs font-semibold tracking-widest mb-4">
          ● ADVANCED TECHNOLOGY
        </motion.p>

        <motion.h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[56px] leading-tight font-semibold text-[#0b1b3f] max-w-[900px] mx-auto">
          Advances in AI Technology Are Here <br className="hidden sm:block" />
          to Impact the Future.
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 mt-10 sm:mt-14 lg:mt-20"
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div key={index} variants={card} whileHover={{ y: -8 }} className="group relative rounded-[20px] p-[2px]">

                <div className="absolute inset-0 rounded-[20px] bg-gradient-to-r from-purple-600 to-orange-400 opacity-0 group-hover:opacity-100 transition blur-[1px]" />

                <div className="relative rounded-[18px] bg-[#f0f1f5] group-hover:bg-white p-6 sm:p-8 lg:p-10 h-full transition group-hover:shadow-xl">

                  <span className="text-3xl sm:text-4xl lg:text-[48px] text-gray-300">
                    {item.id}
                  </span>

                  <div className="absolute top-5 right-5 sm:top-8 sm:right-8 text-gray-300">
                    <Icon size={28} className="sm:size-8 lg:size-10" />
                  </div>

                  <h3 className="mt-10 sm:mt-12 lg:mt-16 text-base sm:text-lg lg:text-xl font-semibold text-[#0b1b3f]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-gray-500 leading-6">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}