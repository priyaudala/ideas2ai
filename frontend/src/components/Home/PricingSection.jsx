import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PricingSection() {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      desc: "Great for private individuals",
      features: [
        "1 User",
        "Download prototypes",
        "25 Deployment Slots",
        "Unlimited Projects",
        "1 Gb workspace",
        "Customer Management",
      ],
      highlight: false,
    },
    {
      name: "Premium",
      price: "$69",
      desc: "14 days free period",
      features: [
        "1 User",
        "Download prototypes",
        "25 Deployment Slots",
        "Unlimited Projects",
        "1 Gb workspace",
        "Customer Management",
      ],
      highlight: true,
    },
    {
      name: "Advanced",
      price: "$99",
      desc: "01 Month free period",
      features: [
        "1 User",
        "Download prototypes",
        "25 Deployment Slots",
        "Unlimited Projects",
        "1 Gb workspace",
        "Customer Management",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="bg-[#f7f7fb] py-28 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-20">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="text-red-500 text-xs font-semibold tracking-widest mb-4">
              ● PRICING PLAN
            </p>

            <h2 className="text-[52px] leading-[64px] font-semibold text-[#0b1b3f] max-w-[640px]">
              Simple and Adaptable, Pay only for what you need.
            </h2>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full flex items-center gap-2 shadow-md"
          >
            Get In Touch <ArrowRight size={18} />
          </motion.button>
        </div>

        {/* CARDS */}
        <div className="space-y-10">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className={`rounded-[30px] px-14 py-12 flex flex-col lg:flex-row items-center justify-between gap-10 border transition-all duration-300
              ${
                plan.highlight
                  ? "bg-gradient-to-r from-[#1a0b3f] to-[#0a1a5f] text-white border-transparent shadow-xl"
                  : "bg-white border-gray-200 hover:shadow-lg"
              }`}
            >

              {/* LEFT */}
              <div className="w-[220px] shrink-0">
                <p className={`mb-2 ${plan.highlight ? "text-gray-300" : "text-gray-500"}`}>
                  {plan.name}
                </p>

                <motion.h3
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  className={`text-[56px] leading-none font-semibold ${
                    plan.highlight ? "text-white" : "text-[#0b1b3f]"
                  }`}
                >
                  {plan.price}
                </motion.h3>

                <p className={`mt-3 ${plan.highlight ? "text-gray-300" : "text-gray-500"}`}>
                  {plan.desc}
                </p>
              </div>

              {/* FEATURES */}
              <div className="flex flex-1 justify-center gap-20">
                {[plan.features.slice(0, 3), plan.features.slice(3, 6)].map(
                  (group, gIndex) => (
                    <div key={gIndex} className="space-y-4">
                      {group.map((item, i) => (
                        <motion.p
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <span
                            className={`w-2 h-2 rounded-full ${
                              plan.highlight ? "bg-gray-400" : "bg-purple-500"
                            }`}
                          ></span>
                          <span
                            className={
                              plan.highlight ? "text-gray-200" : "text-gray-600"
                            }
                          >
                            {item}
                          </span>
                        </motion.p>
                      ))}
                    </div>
                  )
                )}
              </div>

              {/* BUTTON */}
              <div className="w-[220px] flex justify-end shrink-0">
                {plan.highlight ? (
                  <motion.button
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ y: [0, -3, 0] }} // 🔥 subtle floating
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="bg-gradient-to-r from-purple-600 to-orange-400 text-white px-8 py-3 rounded-full flex items-center gap-2 shadow-md"
                  >
                    Get Started Now <ArrowRight size={18} />
                  </motion.button>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-[1px] rounded-full bg-gradient-to-r from-purple-500 to-orange-400"
                  >
                    <button className="bg-white px-8 py-3 rounded-full flex items-center gap-2 text-[#0b1b3f]">
                      Get Started Now <ArrowRight size={18} />
                    </button>
                  </motion.div>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}