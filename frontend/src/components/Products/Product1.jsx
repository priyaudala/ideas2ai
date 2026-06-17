import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Folder,
  Calendar,
  MapPin,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const Product1 = () => {
  return (
    <div>
      <section className="pt-24 md:pt-28">
        <div className="relative w-full h-[300px] md:h-[350px] flex items-center justify-center text-center text-white overflow-hidden">
          {/* ✅ Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/bgimg.jpeg')" }}
          />

          {/* ✅ Dark Overlay (important for text visibility) */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Optional Glow */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,#ffffff,transparent_60%)]" />

          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-3">Medi2AI</h1>
            <p className="text-gray-300 text-sm md:text-base">
              Home <span className="mx-2">›</span> Medi2AI
            </p>
          </div>
        </div>
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-10">
              {/* LEFT */}
              <div>
                {/* Hero */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="overflow-hidden rounded-[30px] lg:rounded-[40px]"
                >
                  <img
                    src="/robom.jpg"
                    alt=""
                    className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover"
                  />
                </motion.div>

                {/* Logo */}
                <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <img
                    src="/medi2ai.png"
                    alt=""
                    className="w-20 sm:w-24"
                  />

                  <div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#081b4b]">
                      Medi2AI
                    </h1>

                    <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold text-purple-600">
                      Smarter Decisions. Better Patient Care.
                    </h2>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-8 text-base sm:text-lg text-gray-500 leading-8">
                  Advanced AI-powered medical assistant that transforms complex
                  patient data into clear, actionable clinical insights —
                  helping doctors focus on what matters most.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {[
                    "AI Diagnostics",
                    "HIPAA Ready",
                    "EHR / EMR Sync",
                    "Predictive Analytics",
                    "Mobile First",
                    "Voice AI",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="px-4 py-3 rounded-full bg-purple-50 text-purple-700 text-sm sm:text-base font-medium"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-14">
                  <div className="rounded-3xl bg-gray-50 p-8 text-center shadow-sm">
                    <h2 className="text-4xl md:text-5xl font-bold text-purple-600">
                      10x
                    </h2>
                    <p className="mt-2 text-gray-500">Faster Summaries</p>
                  </div>

                  <div className="rounded-3xl bg-gray-50 p-8 text-center shadow-sm">
                    <h2 className="text-4xl md:text-5xl font-bold text-pink-600">
                      98%
                    </h2>
                    <p className="mt-2 text-gray-500">Accuracy Rate</p>
                  </div>

                  <div className="rounded-3xl bg-gray-50 p-8 text-center shadow-sm">
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-600">
                      500+
                    </h2>
                    <p className="mt-2 text-gray-500">Hospitals</p>
                  </div>

                  <div className="rounded-3xl bg-gray-50 p-8 text-center shadow-sm">
                    <h2 className="text-4xl md:text-5xl font-bold text-green-600">
                      24/7
                    </h2>
                    <p className="mt-2 text-gray-500">AI Availability</p>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDEBAR */}
              <div>
                <div className="bg-gray-100 rounded-[30px] lg:rounded-[40px] p-6 sm:p-8 lg:p-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#081b4b] mb-10">
                    Product Info
                  </h2>

                  <div className="space-y-8">
                    {/* Card */}
                    <div className="flex gap-4">
                      <div className="w-14 h-14 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
                        <User className="text-white" />
                      </div>

                      <div>
                        <p className="text-gray-400">Product</p>
                        <h3 className="font-bold text-xl text-[#081b4b]">
                          Medi2AI
                        </h3>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-14 h-14 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
                        <Folder className="text-white" />
                      </div>

                      <div>
                        <p className="text-gray-400">Industry</p>
                        <h3 className="font-bold text-xl text-[#081b4b]">
                          Healthcare AI
                        </h3>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-14 h-14 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
                        <Calendar className="text-white" />
                      </div>

                      <div>
                        <p className="text-gray-400">Compliance</p>
                        <h3 className="font-bold text-xl text-[#081b4b]">
                          HIPAA Ready
                        </h3>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-14 h-14 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
                        <MapPin className="text-white" />
                      </div>

                      <div>
                        <p className="text-gray-400">Availability</p>
                        <h3 className="font-bold text-xl text-[#081b4b]">
                          24/7 AI
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 rounded-[30px] lg:rounded-[40px] overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1676299081847-824916de030a?w=1000"
                    className="h-[300px] sm:h-[350px] w-full object-cover"
                    alt=""
                  />

                  <div className="absolute inset-0 bg-[#0d022d]/80 p-6 sm:p-10 flex flex-col justify-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                      Trusted by 500+ hospitals worldwide
                    </h2>

                    <p className="text-gray-300 mt-5 leading-8">
                      HIPAA compliant · EHR ready · Real-time AI
                    </p>

                    <button className="mt-8 bg-gradient-to-r from-purple-600 to-pink-500 px-7 py-4 rounded-full text-white font-semibold flex items-center gap-3 w-fit">
                      Get Started
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ================= WHAT MEDI2AI DOES ================= */}

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 lg:mt-24">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#081b4b]">
              What Medi2AI Does
            </h2>

            <p className="text-gray-500 text-base sm:text-lg mt-5 leading-8 max-w-4xl">
              Bridging the gap between data overload and clinical clarity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-14">
              {[
                {
                  title: "Automated Medical Summaries",
                  desc: "Converts EHRs and patient notes into concise summaries.",
                },
                {
                  title: "Clinical Decision Support",
                  desc: "Suggests possible diagnoses, risk factors and next steps.",
                },
                {
                  title: "Symptom & History Analysis",
                  desc: "Reviews past medical records to detect patterns.",
                },
                {
                  title: "Billing & Documentation Support",
                  desc: "Generates structured clinical notes for compliance.",
                },
                {
                  title: "Predictive Insights",
                  desc: "Leverages AI models to forecast health risks and outcomes.",
                },
                {
                  title: "Voice AI Assistance",
                  desc: "Hands-free interaction with patient records and notes.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-50 rounded-[30px] lg:rounded-[35px] p-7 sm:p-8 shadow-sm"
                >
                  <CheckCircle size={32} className="text-purple-600 mb-5" />

                  <h3 className="text-xl sm:text-2xl font-bold text-[#081b4b]">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 mt-4 leading-8 text-base">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ================= KEY HIGHLIGHTS ================= */}

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 lg:mt-24">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#081b4b]">
              Key Highlights
            </h2>

            <p className="mt-5 text-base sm:text-lg text-gray-500 leading-8 max-w-5xl">
              Advanced AI capabilities designed to improve clinical efficiency
              and healthcare outcomes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {[
                "AI-powered Clinical Decision Support",
                "Automated Patient Record Summaries",
                "Time-Saving Documentation Tools",
                "Predictive Healthcare Analytics",
                "Seamless EHR / EMR Integration",
                "Data Security & HIPAA Compliance",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-start gap-4 bg-gray-50 rounded-3xl p-6"
                >
                  <div className="min-w-[40px] h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
                    <CheckCircle size={18} className="text-white" />
                  </div>

                  <h3 className="text-lg sm:text-xl text-[#081b4b] font-semibold leading-8">
                    {item}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ================= WHO BENEFITS ================= */}

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 lg:mt-28">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#081b4b]">
              Who Benefits From Medi2AI?
            </h2>

            <p className="mt-5 text-base sm:text-lg text-gray-500 leading-8">
              Designed for clinicians, hospitals and healthcare organizations.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-14">
              {[
                {
                  title: "Doctors",
                  desc: "Faster access to patient insights and reduced administrative burden with AI-assisted workflows.",
                },
                {
                  title: "Clinics & Hospitals",
                  desc: "Improve operational efficiency and optimize patient management systems.",
                },
                {
                  title: "Healthcare Systems",
                  desc: "Deliver better outcomes with data-driven intelligence and predictive analytics.",
                },
                {
                  title: "Medical Students",
                  desc: "Accelerate learning with real-time AI guidance and smart recommendations.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-[30px] lg:rounded-[35px] bg-gray-50 p-7 sm:p-10 shadow-sm"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#081b4b]">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 leading-8 mt-5 text-base sm:text-lg">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          {/* ================= FUTURE OF HEALTHCARE AI ================= */}

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 lg:mt-28">
            <div className="rounded-[30px] lg:rounded-[45px] overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600"
                alt=""
                className="w-full h-[700px] sm:h-[750px] lg:h-[500px] object-cover"
              />

              <div className="absolute inset-0 bg-[#081b4b]/80 flex items-center">
                <div className="w-full px-6 sm:px-10 lg:px-20">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    The Future of Healthcare AI
                  </h2>

                  <p className="text-gray-300 text-base sm:text-lg mt-6 leading-8 max-w-3xl">
                    Witness how Medi2AI is transforming diagnostics and patient
                    care through intelligent AI-powered solutions.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {[
                      {
                        title: "Mobile First",
                        desc: "Anywhere access",
                      },
                      {
                        title: "Voice AI",
                        desc: "Natural interaction",
                      },
                      {
                        title: "Smart Diagnostics",
                        desc: "Advanced analysis",
                      },
                      {
                        title: "Real-time",
                        desc: "Instant insights",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -8 }}
                        className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-[25px] p-6"
                      >
                        <h3 className="text-2xl font-bold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-4 text-gray-300">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= WHY CHOOSE MEDI2AI ================= */}

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 lg:mt-28">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#081b4b]">
              Why Choose Medi2AI?
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-14">
              {[
                {
                  title: "Trusted AI Partner",
                  desc: "Designed for doctors and healthcare professionals with a focus on reliability and trust.",
                },
                {
                  title: "Speed + Accuracy",
                  desc: "Delivering faster insights with exceptional precision.",
                },
                {
                  title: "Context-Aware Insights",
                  desc: "Understands patient history and clinical relevance for better decisions.",
                },
                {
                  title: "Continuous Learning",
                  desc: "Evolves with the latest research and medical advancements.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-50 rounded-[30px] lg:rounded-[35px] p-8 sm:p-10 shadow-sm"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#081b4b]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-gray-500 text-base sm:text-lg leading-8">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ================= PRODUCT GALLERY ================= */}

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 lg:mt-28">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#081b4b] mb-12">
              Product Gallery
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-[30px] lg:rounded-[40px]"
              >
                <img
                  src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?w=1200"
                  alt=""
                  className="h-[280px] sm:h-[350px] lg:h-[400px] w-full object-cover"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-[30px] lg:rounded-[40px]"
              >
                <img
                  src="/robo1.jpg"
                  alt=""
                  className="h-[280px] sm:h-[350px] lg:h-[400px] w-full object-cover"
                />
              </motion.div>
            </div>
          </div>

          {/* ================= PREVIOUS / NEXT ================= */}

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 border-y py-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              {/* Previous */}
              <motion.div
                whileHover={{ x: -5 }}
                className="flex items-center gap-5"
              >
                <img
                  src="https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=200"
                  alt=""
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#081b4b]">
                    Previous
                  </h3>

                  <p className="text-gray-500 mt-2">AI Analytics Platform</p>
                </div>
              </motion.div>

              {/* Center */}
              <div className="hidden lg:block text-5xl text-[#081b4b] font-bold">
                ⬚
              </div>

              {/* Next */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-5"
              >
                <div className="text-right">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#081b4b]">
                    Next
                  </h3>

                  <p className="text-gray-500 mt-2">Smart Healthcare Suite</p>
                </div>

                <img
                  src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?w=200"
                  alt=""
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Product1;
