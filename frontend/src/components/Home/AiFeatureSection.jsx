import React from "react";
import { Cpu, Bot, Image as ImageIcon, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

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

  // 🔥 Container stagger
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // 🔥 Card animation
  const card = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-[#f5f6fa] py-28 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 text-center">

        {/* TOP LABEL */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-red-500 text-xs font-semibold tracking-widest mb-4"
        >
          ● ADVANCED TECHNOLOGY
        </motion.p>

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[48px] md:text-[56px] leading-[64px] font-semibold text-[#0b1b3f] max-w-[900px] mx-auto"
        >
          Advances in AI Technology Are Here <br />
          to Impact the Future.
        </motion.h2>

        {/* CARDS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={card}
                whileHover={{ y: -10 }}
                className="group relative cursor-pointer rounded-[24px] p-[2px]"
              >
                {/* Gradient Border */}
                <div className="absolute inset-0 rounded-[24px] bg-gradient-to-r from-purple-600 to-orange-400 opacity-0 group-hover:opacity-100 transition duration-300 blur-[1px]"></div>

                {/* Card */}
                <div className="relative rounded-[22px] bg-[#f0f1f5] group-hover:bg-white p-10 h-full transition-all duration-300 group-hover:shadow-xl">

                  {/* NUMBER (animated entry) */}
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-[48px] font-semibold text-gray-300"
                  >
                    {item.id}
                  </motion.span>

                  {/* ICON */}
                  <motion.div
                    className="absolute top-10 right-10 text-gray-300"
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <Icon size={42} strokeWidth={1.5} />
                  </motion.div>

                  {/* TITLE */}
                  <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-16 text-xl font-semibold text-[#0b1b3f]"
                  >
                    {item.title}
                  </motion.h3>

                  {/* DESCRIPTION */}
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-4 text-gray-500 text-sm leading-6"
                  >
                    {item.desc}
                  </motion.p>

                  {/* ✨ Subtle bottom glow */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}