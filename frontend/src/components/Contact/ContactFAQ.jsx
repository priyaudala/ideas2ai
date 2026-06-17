import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What industries can benefit from your AI solutions?",
    answer:
      "Our AI solutions empower healthcare, finance, education, retail, logistics, manufacturing, and many other industries by automating workflows and improving efficiency.",
  },
  {
    question: "Do I need technical knowledge to use your AI services?",
    answer:
      "Not at all. We create intuitive dashboards and user-friendly systems. Our experts handle the complex technical implementation for you.",
  },
  {
    question: "How secure is my data with your AI systems?",
    answer:
      "Security is our priority. We use encrypted storage, secure APIs, access control, and modern security practices to protect your business data.",
  },
  {
    question: "Can AI solutions be customized for my business?",
    answer:
      "Absolutely. Every business is unique, so we tailor AI solutions to match your specific goals, workflows, and requirements.",
  },
];

const ContactFAQ = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 md:py-20 lg:py-24">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[260px] w-[260px] rounded-full bg-purple-300/10 blur-[90px] sm:h-[350px] sm:w-[350px] lg:h-[500px] lg:w-[500px]" />
      <div className="absolute bottom-0 right-0 h-[260px] w-[260px] rounded-full bg-pink-300/10 blur-[90px] sm:h-[350px] sm:w-[350px] lg:h-[500px] lg:w-[500px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center min-h-[320px] sm:min-h-[420px] md:min-h-[520px] lg:min-h-[650px] order-2 lg:order-1"
          >
            {/* Main Card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative h-[260px] w-full max-w-[280px] overflow-hidden rounded-[24px] shadow-2xl sm:h-[340px] sm:max-w-[360px] sm:rounded-[28px] md:h-[420px] md:max-w-[440px] lg:h-[520px] lg:max-w-[520px] lg:rounded-[40px]"
            >
              <img
                src="/faq.jpeg"
                alt="AI"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </motion.div>

            {/* Floating Card 1 */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute left-0 top-2 rounded-2xl sm:rounded-3xl border border-gray-100 bg-white px-3 py-2 shadow-xl sm:left-2 sm:top-6 sm:px-4 sm:py-3 md:left-4 md:px-5 md:py-4 lg:left-0 lg:top-10 lg:px-6"
            >
              <h4 className="text-sm sm:text-base lg:text-lg font-bold text-[#081b4b]">
                🤖 AI Automation
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-gray-500">
                Smart workflows & productivity
              </p>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-4 left-0 rounded-2xl sm:rounded-3xl border border-gray-100 bg-white px-3 py-2 shadow-xl sm:bottom-8 sm:left-2 sm:px-4 sm:py-3 md:left-4 md:px-5 md:py-4 lg:bottom-16 lg:left-0 lg:px-6"
            >
              <h4 className="text-sm sm:text-base lg:text-lg font-bold text-[#081b4b]">
                🚀 Smart Solutions
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-gray-500">
                Custom AI for your business
              </p>
            </motion.div>

            {/* Floating Stat 1 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute right-0 top-4 rounded-2xl sm:rounded-3xl border border-gray-100 bg-white p-3 shadow-xl sm:right-2 sm:top-8 sm:p-4 md:right-4 md:p-5 lg:right-0 lg:top-20 lg:p-6"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-600">
                500+
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                Projects Delivered
              </p>
            </motion.div>

            {/* Floating Stat 2 */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-8 right-0 rounded-2xl sm:rounded-3xl border border-gray-100 bg-white p-3 shadow-xl sm:bottom-12 sm:right-2 sm:p-4 md:right-4 md:p-5 lg:bottom-24 lg:right-0 lg:p-6"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pink-600">
                98%
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                Client Satisfaction
              </p>
            </motion.div>

            {/* Decorative Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -z-10 h-[320px] w-[320px] rounded-full border border-purple-200 sm:h-[430px] sm:w-[430px] md:h-[520px] md:w-[520px] lg:h-[620px] lg:w-[620px]"
            />
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="order-1 lg:order-2">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 inline-flex items-center gap-3 rounded-full bg-red-50 px-4 py-2 sm:px-5"
            >
              <span className="h-2 w-2 rounded-full bg-red-500" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-red-500">
                FAQ
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold leading-tight text-[#081b4b] lg:mb-10"
            >
              We're here to answer
              <br className="hidden sm:block" />
              all your questions
            </motion.h2>

            {/* FAQ CARDS */}
            <div className="space-y-4 sm:space-y-5">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  layout
                  whileHover={{
                    y: -4,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    borderLeft:
                      active === index
                        ? "4px solid #8b5cf6"
                        : "4px solid transparent",
                  }}
                  className="overflow-hidden rounded-[18px] sm:rounded-[20px] lg:rounded-[24px] border border-gray-200 bg-gray-100 shadow-md"
                >
                  <button
                    onClick={() =>
                      setActive(active === index ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-6 sm:py-5 md:px-8 md:py-6"
                  >
                    <span className="text-base sm:text-lg font-semibold text-[#081b4b]">
                      {faq.question}
                    </span>

                    <motion.div
                      animate={{ rotate: active === index ? 180 : 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown
                        size={22}
                        strokeWidth={2}
                        className="text-[#081b4b] sm:size-6"
                      />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {active === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-gray-200 bg-white">
                          <p className="px-4 py-4 text-sm leading-7 text-gray-600 sm:px-6 sm:py-5 sm:text-base sm:leading-8 md:px-8 md:py-6">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3"
            >
              <div className="rounded-2xl sm:rounded-3xl bg-gray-100 p-5 text-center shadow-md transition-all duration-300 hover:bg-white">
                <h3 className="text-2xl sm:text-3xl font-bold text-purple-600">
                  500+
                </h3>
                <p className="mt-1 text-sm text-gray-500">Projects</p>
              </div>

              <div className="rounded-2xl sm:rounded-3xl bg-gray-100 p-5 text-center shadow-md transition-all duration-300 hover:bg-white">
                <h3 className="text-2xl sm:text-3xl font-bold text-pink-600">
                  98%
                </h3>
                <p className="mt-1 text-sm text-gray-500">Satisfaction</p>
              </div>

              <div className="rounded-2xl sm:rounded-3xl bg-gray-100 p-5 text-center shadow-md transition-all duration-300 hover:bg-white sm:col-span-2 lg:col-span-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-600">
                  24/7
                </h3>
                <p className="mt-1 text-sm text-gray-500">Support</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
