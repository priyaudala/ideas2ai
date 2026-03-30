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
    <section className="bg-[#f7f7fb] py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row 
                        items-start lg:items-center 
                        justify-between 
                        gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="text-red-500 text-[10px] sm:text-xs font-semibold tracking-widest mb-3 sm:mb-4">
              ● PRICING PLAN
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] 
                           leading-tight md:leading-[1.3] 
                           font-semibold text-[#0b1b3f] 
                           max-w-[640px]">
              Simple and Adaptable, Pay only for what you need.
            </h2>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto 
                       flex items-center justify-center gap-2 
                       bg-gradient-to-r from-purple-600 to-pink-500 
                       text-white px-6 sm:px-8 py-3 rounded-full shadow-md"
          >
            Get In Touch <ArrowRight size={16} />
          </motion.button>
        </div>

        {/* CARDS */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -6 }}
              className={`rounded-[20px] sm:rounded-[30px] 
                          px-5 sm:px-8 md:px-10 lg:px-14 
                          py-6 sm:py-8 md:py-10 lg:py-12 
                          flex flex-col lg:flex-row 
                          items-start lg:items-center 
                          justify-between gap-6 sm:gap-8 lg:gap-10 
                          border transition-all
              ${
                plan.highlight
                  ? "bg-gradient-to-r from-[#1a0b3f] to-[#0a1a5f] text-white border-transparent shadow-xl"
                  : "bg-white border-gray-200 hover:shadow-lg"
              }`}
            >

              {/* LEFT */}
              <div className="w-full lg:w-[220px]">
                <p className={`mb-1 sm:mb-2 text-sm ${plan.highlight ? "text-gray-300" : "text-gray-500"}`}>
                  {plan.name}
                </p>

                <h3
                  className={`text-3xl sm:text-4xl md:text-5xl lg:text-[56px] 
                              leading-none font-semibold ${
                    plan.highlight ? "text-white" : "text-[#0b1b3f]"
                  }`}
                >
                  {plan.price}
                </h3>

                <p className={`mt-2 sm:mt-3 text-sm ${plan.highlight ? "text-gray-300" : "text-gray-500"}`}>
                  {plan.desc}
                </p>
              </div>

              {/* FEATURES */}
              <div className="w-full flex-1 
                              grid grid-cols-1 sm:grid-cols-2 
                              gap-4 sm:gap-6 lg:gap-10">

                {plan.features.map((item, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 text-sm sm:text-base"
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

              {/* BUTTON */}
              <div className="w-full lg:w-[220px] flex justify-start lg:justify-end">
                {plan.highlight ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto 
                               bg-gradient-to-r from-purple-600 to-orange-400 
                               text-white px-6 sm:px-8 py-3 rounded-full 
                               flex items-center justify-center gap-2"
                  >
                    Get Started Now <ArrowRight size={16} />
                  </motion.button>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-full sm:w-auto 
                               p-[1px] rounded-full 
                               bg-gradient-to-r from-purple-500 to-orange-400"
                  >
                    <button className="w-full sm:w-auto 
                                       bg-white px-6 sm:px-8 py-3 
                                       rounded-full flex items-center justify-center gap-2 
                                       text-[#0b1b3f]">
                      Get Started Now <ArrowRight size={16} />
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