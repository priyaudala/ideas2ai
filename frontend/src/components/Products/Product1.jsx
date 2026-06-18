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
                  <img src="/medi2ai.png" alt="" className="w-20 sm:w-24" />

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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 lg:mt-24 overflow-hidden">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 flex-wrap">
                <div className="w-12 sm:w-16 h-[3px] sm:h-[4px] rounded-full bg-[#081b4b]" />

                <span className="uppercase tracking-[4px] sm:tracking-[5px] text-gray-500 text-xs sm:text-sm">
                  AI Capabilities
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-5xl font-bold text-[#081b4b]">
                What Medi2AI Does
              </h2>

              <p className="text-gray-500 text-sm sm:text-base lg:text-lg mt-4 sm:mt-6 leading-7 sm:leading-8 max-w-3xl">
                Bridging the gap between data overload and clinical clarity.
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative mt-10 sm:mt-14 lg:mt-16">
              {/* Center Line */}
              <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-purple-200 via-[#081b4b] to-purple-200" />

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
                <div
                  key={i}
                  className={`relative flex ${
                    i % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
                  } mb-4 sm:mb-5 lg:mb-6`}
                >
                  {/* Circle */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 xl:w-12 xl:h-12 rounded-full bg-white border-[3px] border-purple-600 shadow-md items-center justify-center z-20">
                    <CheckCircle size={16} className="text-purple-600" />
                  </div>

                  {/* Card */}
                  <div
                    className="
          group
          relative
          overflow-hidden
          w-full
          lg:w-[47%]
          xl:w-[45%]
          bg-white
          rounded-[24px]
          sm:rounded-[30px]
          border border-gray-100
          shadow-[0_10px_35px_rgba(0,0,0,.06)]
          p-5
          sm:p-6
          lg:p-7
          transition-all
          duration-300
          hover:-translate-y-1.5
          hover:shadow-[0_20px_60px_rgba(0,0,0,.1)]
        "
                  >
                    {/* Glow */}
                    <div className="absolute -right-14 -bottom-14 w-36 h-36 rounded-full bg-purple-100 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

                    {/* Number */}
                    <div className="absolute right-4 sm:right-5 top-3 text-[45px] sm:text-[55px] lg:text-[60px] font-bold text-[#081b4b]/5 select-none">
                      0{i + 1}
                    </div>

                    {/* Title */}
                    <h3 className="relative z-10 text-lg sm:text-xl lg:text-2xl font-bold text-[#081b4b] pr-10">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="relative z-10 mt-3 text-gray-500 text-sm sm:text-base leading-6 sm:leading-7">
                      {item.desc}
                    </p>

                    {/* Bottom Line */}
                    <div className="mt-5 h-[3px] w-14 sm:w-16 rounded-full bg-purple-600 transition-all duration-500 group-hover:w-24 sm:group-hover:w-28" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* ================= KEY HIGHLIGHTS ================= */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 lg:mt-24 overflow-hidden">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6 flex-wrap">
                <motion.div
                  animate={{ width: [40, 70, 40] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="h-[3px] sm:h-[4px] rounded-full bg-[#081b4b]"
                />

                <span className="uppercase tracking-[4px] sm:tracking-[5px] text-gray-500 text-xs sm:text-sm">
                  Advanced Capabilities
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#081b4b]">
                Key Highlights
              </h2>

              <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-gray-500 leading-7 sm:leading-8 max-w-4xl">
                Advanced AI capabilities designed to improve clinical efficiency
                and healthcare outcomes.
              </p>
            </motion.div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-5 sm:gap-6 mt-10 sm:mt-14 lg:mt-16">
              {[
                {
                  title: "AI-powered Clinical Decision Support",
                  number: "01",
                  span: "xl:col-span-7",
                },
                {
                  title: "Automated Patient Record Summaries",
                  number: "02",
                  span: "xl:col-span-5",
                },
                {
                  title: "Time-Saving Documentation Tools",
                  number: "03",
                  span: "xl:col-span-4",
                },
                {
                  title: "Predictive Healthcare Analytics",
                  number: "04",
                  span: "xl:col-span-8",
                },
                {
                  title: "Seamless EHR / EMR Integration",
                  number: "05",
                  span: "xl:col-span-6",
                },
                {
                  title: "Data Security & HIPAA Compliance",
                  number: "06",
                  span: "xl:col-span-6",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`
        group
        relative
        overflow-hidden
        rounded-[28px] sm:rounded-[32px] lg:rounded-[36px]
        border border-gray-100
        bg-white
        shadow-[0_10px_40px_rgba(0,0,0,.05)]
        p-6 sm:p-8 lg:p-10
        transition-all duration-500
        hover:-translate-y-2
        hover:shadow-[0_25px_80px_rgba(8,27,75,.12)]
        ${item.span}
      `}
                >
                  {/* Glow */}
                  <div className="absolute -right-20 -top-20 w-40 sm:w-48 h-40 sm:h-48 bg-blue-100 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition duration-700" />

                  {/* Number */}
                  <div className="absolute right-5 sm:right-7 top-4 sm:top-5 text-[55px] sm:text-[70px] lg:text-[80px] font-bold text-[#081b4b]/5 select-none">
                    {item.number}
                  </div>

                  {/* Badge */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center shadow-lg">
                    <CheckCircle
                      size={20}
                      className="text-white sm:w-[22px] sm:h-[22px]"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 sm:mt-8 text-xl sm:text-2xl lg:text-3xl font-bold text-[#081b4b] leading-tight max-w-md">
                    {item.title}
                  </h3>

                  {/* Bottom */}
                  <div className="mt-8 sm:mt-10 flex items-center justify-between">
                    <div className="h-[3px] w-14 sm:w-16 rounded-full bg-[#081b4b] group-hover:w-24 sm:group-hover:w-28 transition-all duration-500" />

                    <div
                      className="
            w-10 h-10 sm:w-12 sm:h-12
            rounded-full
            bg-gray-50
            flex items-center justify-center
            text-[#081b4b]
            text-lg sm:text-xl
            group-hover:bg-[#081b4b]
            group-hover:text-white
            transition-all duration-300
          "
                    >
                      →
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* ================= WHO BENEFITS ================= */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 lg:mt-28 overflow-hidden">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 flex-wrap">
                <div className="w-10 sm:w-14 h-[3px] sm:h-[4px] rounded-full bg-[#081b4b]" />

                <span className="text-xs sm:text-sm uppercase tracking-[3px] sm:tracking-[4px] text-gray-500">
                  Designed For Everyone
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#081b4b] leading-tight">
                Who Benefits From Medi2AI?
              </h2>

              <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-gray-500 leading-7 sm:leading-8 max-w-2xl">
                Designed for clinicians, hospitals and healthcare organizations.
              </p>
            </motion.div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-10 sm:mt-14 lg:mt-16">
              {/* Large Card */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="lg:col-span-2 lg:row-span-2 relative overflow-hidden rounded-[28px] sm:rounded-[35px] bg-[#081b4b] p-7 sm:p-8 lg:p-10 text-white"
              >
                {/* Glow */}
                <div className="absolute -right-20 -bottom-20 w-60 sm:w-72 h-60 sm:h-72 bg-white/10 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <div className="text-4xl sm:text-5xl mb-6 sm:mb-8">👨‍⚕️</div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                    Doctors
                  </h3>

                  <p className="mt-4 sm:mt-6 text-white/80 leading-7 sm:leading-8 text-base lg:text-lg max-w-md">
                    Faster access to patient insights and reduced administrative
                    burden with AI-assisted workflows.
                  </p>

                  <motion.div
                    animate={{ x: [0, 8, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                    }}
                    className="mt-8 sm:mt-10 text-2xl sm:text-3xl"
                  >
                    →
                  </motion.div>
                </div>
              </motion.div>

              {[
                {
                  icon: "🏥",
                  title: "Clinics & Hospitals",
                  desc: "Improve operational efficiency and optimize patient management systems.",
                },
                {
                  icon: "📊",
                  title: "Healthcare Systems",
                  desc: "Deliver better outcomes with predictive analytics.",
                },
                {
                  icon: "🎓",
                  title: "Medical Students",
                  desc: "Accelerate learning with AI guidance and smart recommendations.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className="group relative overflow-hidden rounded-[28px] sm:rounded-[35px] bg-gray-50 p-6 sm:p-8 shadow-sm"
                >
                  {/* Number */}
                  <div className="absolute right-4 sm:right-5 top-2 text-[60px] sm:text-[80px] font-bold text-[#081b4b]/5 select-none">
                    0{index + 2}
                  </div>

                  {/* Floating Icon */}
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3 + index,
                    }}
                    className="text-3xl sm:text-4xl mb-5 sm:mb-7"
                  >
                    {item.icon}
                  </motion.div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#081b4b] leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 leading-7 sm:leading-8 mt-4 sm:mt-5 text-sm sm:text-base">
                    {item.desc}
                  </p>

                  {/* Animated Line */}
                  <div className="mt-6 sm:mt-7 h-[3px] w-14 rounded-full bg-[#081b4b] group-hover:w-full transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* ================= WHY CHOOSE MEDI2AI ================= */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 lg:mt-28 overflow-hidden">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 sm:w-14 h-[4px] rounded-full bg-[#081b4b]" />

                <span className="uppercase tracking-[4px] text-xs sm:text-sm text-gray-500">
                  Trusted AI Platform
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#081b4b] leading-tight">
                Why Choose Medi2AI?
              </h2>

              <p className="mt-5 text-base sm:text-lg text-gray-500 leading-8 max-w-2xl">
                Built for clinicians and healthcare organizations with speed,
                reliability, and intelligent decision support.
              </p>
            </motion.div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7 mt-14">
              {[
                {
                  icon: "🛡️",
                  title: "Trusted AI Partner",
                  desc: "Designed for doctors and healthcare professionals with a focus on reliability and trust.",
                },
                {
                  icon: "⚡",
                  title: "Speed + Accuracy",
                  desc: "Delivering faster insights with exceptional precision.",
                },
                {
                  icon: "🧠",
                  title: "Context-Aware Insights",
                  desc: "Understands patient history and clinical relevance for better decisions.",
                },
                {
                  icon: "📈",
                  title: "Continuous Learning",
                  desc: "Evolves with the latest research and medical advancements.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="
          group
          relative
          overflow-hidden
          rounded-[30px]
          bg-white
          border border-gray-100
          p-6 sm:p-8 lg:p-10
          shadow-[0_10px_40px_rgba(0,0,0,.06)]
          hover:shadow-[0_25px_70px_rgba(8,27,75,.12)]
          transition-all duration-500
          flex flex-col
          h-full
        "
                >
                  {/* Glow */}
                  <div className="absolute -bottom-16 -right-16 w-44 h-44 bg-blue-100 rounded-full blur-[90px] opacity-0 group-hover:opacity-100 transition duration-700" />

                  {/* Top */}
                  <div className="relative z-10 flex items-center justify-between">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-[22px] bg-gradient-to-br from-[#081b4b] to-blue-600 shadow-lg flex items-center justify-center text-3xl">
                      {item.icon}
                    </div>

                    {/* Arrow */}
                    <div
                      className="
              w-11 h-11
              rounded-full
              bg-gray-50
              flex items-center justify-center
              text-[#081b4b]
              text-lg
              group-hover:bg-[#081b4b]
              group-hover:text-white
              group-hover:translate-x-1
              transition-all duration-300
            "
                    >
                      →
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 mt-7 text-2xl sm:text-[28px] font-bold text-[#081b4b] leading-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 mt-5 text-sm sm:text-base text-gray-500 leading-7 flex-grow">
                    {item.desc}
                  </p>

                  {/* Bottom Animated Line */}
                  <div className="relative z-10 mt-8 h-[3px] w-16 rounded-full bg-[#081b4b] group-hover:w-32 transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* ================= PRODUCT GALLERY ================= */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 lg:mt-28 overflow-hidden">
            {/* Heading */}
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-blue-500 uppercase tracking-[4px] text-sm font-medium">
                  Showcase
                </p>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#081b4b] mt-3">
                  Product Gallery
                </h2>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-6">
              {/* Left Large Card */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 group relative overflow-hidden rounded-[40px] shadow-xl h-[300px] sm:h-[420px] lg:h-[600px]"
              >
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.8 }}
                  src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?w=1200"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#081b4b] via-[#081b4b]/10 to-transparent" />

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute top-6 left-6 bg-white/15 backdrop-blur-xl px-5 py-3 rounded-full text-white"
                >
                  AI Assistant
                </motion.div>

                <div className="absolute bottom-8 left-8">
                  <h3 className="text-white text-3xl lg:text-4xl font-bold">
                    Smart AI Solutions
                  </h3>

                  <p className="text-white/80 mt-3 max-w-md">
                    Intelligent automation designed for modern businesses.
                  </p>
                </div>
              </motion.div>

              {/* Right Side */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                {/* Top Card */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ rotate: 1, y: -8 }}
                  transition={{ duration: 0.5 }}
                  className="group relative overflow-hidden rounded-[40px] shadow-xl h-[280px]"
                >
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.8 }}
                    src="/robo1.jpg"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#081b4b] via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-white text-2xl font-bold">
                      Robotics Platform
                    </h3>
                  </div>
                </motion.div>

                {/* Bottom Two Small Cards */}
                <div className="grid grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="relative overflow-hidden rounded-[30px] shadow-lg h-[180px] group"
                  >
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                      src="/med5.png"
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/30" />

                    <div className="absolute bottom-4 left-4 text-white font-semibold">
                      Vision AI
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -8 }}
                    className="relative overflow-hidden rounded-[30px] shadow-lg h-[180px] group"
                  >
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                      src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=700"
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/30" />

                    <div className="absolute bottom-4 left-4 text-white font-semibold">
                      Neural Engine
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= PREVIOUS / NEXT ================= */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Previous */}
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 180 }}
                className="group relative h-[240px] sm:h-[280px] rounded-[32px] overflow-hidden cursor-pointer"
              >
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                  src="https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=1000"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#081b4b]/90 via-[#081b4b]/60 to-transparent" />

                {/* Glow */}
                <div className="absolute -left-20 top-1/2 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

                <div className="relative h-full flex flex-col justify-between p-6 sm:p-8">
                  <div>
                    <p className="text-white/70 text-sm uppercase tracking-[3px]">
                      Previous Article
                    </p>

                    <h2 className="text-white text-2xl sm:text-3xl font-bold mt-3 max-w-xs">
                      AI Analytics Platform
                    </h2>
                  </div>

                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{ x: [0, -5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-14 h-14 rounded-full bg-white text-[#081b4b] flex items-center justify-center text-2xl font-bold"
                    >
                      ←
                    </motion.div>

                    <span className="text-white/80">Explore previous</span>
                  </div>
                </div>
              </motion.div>

              {/* Next */}
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 180 }}
                className="group relative h-[240px] sm:h-[280px] rounded-[32px] overflow-hidden cursor-pointer"
              >
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                  src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?w=1000"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-l from-[#081b4b]/90 via-[#081b4b]/60 to-transparent" />

                <div className="absolute -right-20 top-1/2 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

                <div className="relative h-full flex flex-col justify-between p-6 sm:p-8 items-end text-right">
                  <div>
                    <p className="text-white/70 text-sm uppercase tracking-[3px]">
                      Next Article
                    </p>

                    <h2 className="text-white text-2xl sm:text-3xl font-bold mt-3 max-w-xs ml-auto">
                      Smart Healthcare Suite
                    </h2>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-white/80">Explore next</span>

                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-14 h-14 rounded-full bg-white text-[#081b4b] flex items-center justify-center text-2xl font-bold"
                    >
                      →
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Product1;
