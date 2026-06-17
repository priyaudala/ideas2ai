import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Folder,
  Calendar,
  MapPin,
  ArrowRight,
  CheckCircle,
  Globe,
  Zap,
  Scale,
  Landmark,
  Languages,
  Newspaper,
  Mic,
  MessageSquareQuote,
  Flame,
  Clapperboard,
  HeartHandshake,
  ScanSearch,
  RadioTower,
  MessageCircleMore,
  Smartphone,
  Radio,
  Share2,
  Clock3,
} from "lucide-react";
import {
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa6";

const Product2 = () => {
  return (
    <div>
      {/* HERO */}
      <section className="pt-24 md:pt-28">
        <div className="relative w-full h-[300px] md:h-[350px] flex items-center justify-center text-center text-white overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/bgimg.jpeg')" }}
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,#ffffff,transparent_60%)]" />

          <div className="relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-3">
              TeaTimeTelugu
            </h1>

            <p className="text-gray-300 text-sm md:text-base">
              Home <span className="mx-2">›</span> TeaTimeTelugu
            </p>
          </div>
        </div>

        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-10">
              {/* LEFT */}
              <div>
                {/* HERO IMAGE */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="overflow-hidden rounded-[30px] lg:rounded-[40px]"
                >
                  <img
                    src="/ttbg.jpeg"
                    alt=""
                    className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover"
                  />
                </motion.div>

                {/* LOGO */}
                <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <img src="/tt1.png" alt="" className="w-20 sm:w-24" />

                  <div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#081b4b]">
                      TeaTimeTelugu
                    </h1>

                    <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold text-purple-600">
                      Your Daily Dose of Telugu News & Entertainment
                    </h2>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <p className="mt-8 text-base sm:text-lg text-gray-500 leading-8">
                  Connecting the global Telugu community with authentic,
                  credible, and timely news coverage. Your trusted source for
                  breaking news, Tollywood updates and cultural stories.
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {[
                    "Breaking News",
                    "Tollywood",
                    "Human Stories",
                    "Deep Analysis",
                    "Event Coverage",
                    "Expert Views",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="px-4 py-3 rounded-full bg-purple-50 text-purple-700 text-sm sm:text-base font-medium"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* STATS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-14">
                  <div className="rounded-3xl bg-gray-50 p-8 text-center shadow-sm">
                    <h2 className="text-4xl md:text-5xl font-bold text-purple-600">
                      1M+
                    </h2>

                    <p className="mt-2 text-gray-500">Daily Readers</p>
                  </div>

                  <div className="rounded-3xl bg-gray-50 p-8 text-center shadow-sm">
                    <h2 className="text-4xl md:text-5xl font-bold text-pink-600">
                      24/7
                    </h2>

                    <p className="mt-2 text-gray-500">News Coverage</p>
                  </div>

                  <div className="rounded-3xl bg-gray-50 p-8 text-center shadow-sm">
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-600">
                      100%
                    </h2>

                    <p className="mt-2 text-gray-500">Telugu Content</p>
                  </div>

                  <div className="rounded-3xl bg-gray-50 p-8 text-center shadow-sm">
                    <h2 className="text-4xl md:text-5xl font-bold text-green-600">
                      500+
                    </h2>

                    <p className="mt-2 text-gray-500">Exclusive Stories</p>
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
                    <div className="flex gap-4">
                      <div className="w-14 h-14 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
                        <User className="text-white" />
                      </div>

                      <div>
                        <p className="text-gray-400">Platform</p>

                        <h3 className="font-bold text-xl text-[#081b4b]">
                          Tea Time Telugu
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
                          Digital Media & News
                        </h3>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-14 h-14 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
                        <Calendar className="text-white" />
                      </div>

                      <div>
                        <p className="text-gray-400">Founded</p>

                        <h3 className="font-bold text-xl text-[#081b4b]">
                          Since 2025
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
                          Worldwide
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA CARD */}
                <div className="mt-8 rounded-[30px] lg:rounded-[40px] overflow-hidden relative">
                  <img
                    src="/news-banner.jpg"
                    className="h-[300px] sm:h-[350px] w-full object-cover"
                    alt=""
                  />

                  <div className="absolute inset-0 bg-[#0d022d]/80 p-6 sm:p-10 flex flex-col justify-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                      Trusted by 1M+ readers worldwide
                    </h2>

                    <p className="text-gray-300 mt-5 leading-8">
                      Breaking news · Tollywood updates · 24/7 coverage
                    </p>

                    <button className="mt-8 bg-gradient-to-r from-purple-600 to-pink-500 px-7 py-4 rounded-full text-white font-semibold flex items-center gap-3 w-fit">
                      Visit Website
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ================= WHAT WE COVER ================= */}

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 lg:mt-24">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#081b4b]">
              What We Cover
            </h2>

            <p className="text-gray-500 text-base sm:text-lg mt-5 leading-8 max-w-4xl">
              Comprehensive coverage for the modern Telugu audience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-14">
              {[
                {
                  tag: "HOT",
                  title: "Breaking News",
                  desc: "Real-time political updates and national events.",
                  icon: Flame,
                  color: "from-red-500 to-orange-500",
                },
                {
                  tag: "TRENDING",
                  title: "Tollywood",
                  desc: "Film news, box office reports and behind-the-scenes stories.",
                  icon: Clapperboard,
                  color: "from-purple-500 to-pink-600",
                },
                {
                  tag: "EXCLUSIVE",
                  title: "Human Stories",
                  desc: "Inspiring and emotional untold stories from across Telugu states.",
                  icon: HeartHandshake,
                  color: "from-pink-500 to-rose-500",
                },
                {
                  tag: "INSIGHT",
                  title: "News Analysis",
                  desc: "Deep insights, investigations and meaningful journalism.",
                  icon: ScanSearch,
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  tag: "LIVE",
                  title: "Event Coverage",
                  desc: "Celebrity events, premieres and red carpet moments.",
                  icon: RadioTower,
                  color: "from-green-500 to-emerald-600",
                },
                {
                  tag: "EXPERT",
                  title: "Commentary",
                  desc: "Expert opinions and social analysis that matter.",
                  icon: MessageCircleMore,
                  color: "from-indigo-500 to-violet-600",
                },
              ].map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: i * 0.1,
                    }}
                    whileHover={{
                      y: -12,
                      scale: 1.02,
                    }}
                    className="group relative overflow-hidden bg-gray-50 rounded-[35px] p-8 shadow-sm border border-transparent hover:border-purple-200"
                  >
                    {/* Glow */}
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br ${item.color}/10`}
                    />

                    {/* Floating blob */}
                    <motion.div
                      animate={{
                        x: [0, 15, 0],
                        y: [0, -15, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                      }}
                      className={`absolute -top-12 -right-12 w-36 h-36 rounded-full bg-gradient-to-r ${item.color} opacity-10 blur-3xl`}
                    />

                    {/* Top */}
                    <div className="relative z-10 flex items-center justify-between">
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className={`px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${item.color}`}
                      >
                        {item.tag}
                      </motion.span>

                      <motion.div
                        whileHover={{
                          rotate: 360,
                          scale: 1.15,
                        }}
                        transition={{ duration: 0.8 }}
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg`}
                      >
                        <Icon className="text-white" size={28} />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <h3 className="relative z-10 text-2xl font-bold text-[#081b4b] mt-8">
                      {item.title}
                    </h3>

                    <p className="relative z-10 text-gray-500 mt-4 leading-8">
                      {item.desc}
                    </p>

                    {/* Bottom Animated Line */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.4 }}
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${item.color}`}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ================= KEY HIGHLIGHTS ================= */}

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 lg:mt-24">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#081b4b]"
            >
              Key Highlights
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-base sm:text-lg text-gray-500 leading-8 max-w-5xl"
            >
              Bringing authentic, timely and engaging Telugu content to millions
              of readers worldwide.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {[
                {
                  icon: Radio,
                  title: "Real-Time Breaking News",
                  color: "from-red-500 to-pink-500",
                },
                {
                  icon: Clapperboard,
                  title: "Exclusive Tollywood Updates",
                  color: "from-purple-500 to-indigo-600",
                },
                {
                  icon: Languages,
                  title: "100% Telugu Content",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Newspaper,
                  title: "Deep News Analysis",
                  color: "from-orange-500 to-red-500",
                },
                {
                  icon: Mic,
                  title: "Live Event Coverage",
                  color: "from-green-500 to-emerald-600",
                },
                {
                  icon: MessageSquareQuote,
                  title: "Expert Commentary",
                  color: "from-pink-500 to-purple-600",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      y: -12,
                      scale: 1.03,
                    }}
                    className="group relative overflow-hidden bg-gray-50 rounded-[35px] p-7 shadow-sm border border-transparent hover:border-purple-200"
                  >
                    {/* Background Glow */}
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br ${item.color}/10`}
                    />

                    {/* Floating Blob */}
                    <motion.div
                      animate={{
                        x: [0, 15, 0],
                        y: [0, -15, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                      }}
                      className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-r ${item.color} opacity-10 blur-3xl`}
                    />

                    {/* Icon */}
                    <motion.div
                      whileHover={{
                        rotate: 360,
                        scale: 1.15,
                      }}
                      transition={{ duration: 0.8 }}
                      className={`relative z-10 w-16 h-16 rounded-3xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-xl`}
                    >
                      <Icon size={30} className="text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="relative z-10 mt-7 text-xl sm:text-2xl font-bold text-[#081b4b] leading-8">
                      {item.title}
                    </h3>

                    {/* Bottom Line Animation */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.4 }}
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${item.color}`}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ================= JOIN OUR COMMUNITY ================= */}

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 lg:mt-28">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#081b4b]"
            >
              Join Our Community
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-base sm:text-lg text-gray-500 leading-8"
            >
              Follow Tea Time Telugu across all platforms and never miss an
              update.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {[
                {
                  name: "Instagram",
                  icon: FaInstagram,
                  color: "from-pink-500 to-purple-600",
                  link: "https://www.instagram.com/teatime_telugu/",
                },
                {
                  name: "Twitter",
                  icon: FaXTwitter,
                  color: "from-sky-500 to-blue-600",
                  link: "https://x.com/",
                },
                {
                  name: "Facebook",
                  icon: FaFacebookF,
                  color: "from-blue-500 to-indigo-700",
                  link: "https://www.facebook.com/",
                },
                {
                  name: "YouTube",
                  icon: FaYoutube,
                  color: "from-red-500 to-red-700",
                  link: "https://www.youtube.com/@TeaTimeTelugu-eet",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.15,
                      duration: 0.7,
                    }}
                    whileHover={{
                      y: -15,
                      scale: 1.03,
                    }}
                    className="group relative overflow-hidden rounded-[35px] bg-gray-50 p-10 shadow-sm text-center"
                  >
                    {/* Animated Glow */}
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br ${item.color}/20`}
                    />

                    {/* Floating Blob */}
                    <motion.div
                      animate={{
                        x: [0, 20, 0],
                        y: [0, -20, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                      }}
                      className={`absolute -top-8 -right-8 w-28 h-28 rounded-full bg-gradient-to-r ${item.color} opacity-10 blur-3xl`}
                    />

                    {/* Icon Circle */}
                    <motion.div
                      whileHover={{
                        rotate: 360,
                        scale: 1.15,
                      }}
                      transition={{ duration: 0.8 }}
                      className={`relative z-10 w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-xl`}
                    >
                      <Icon className="text-white text-3xl" />
                    </motion.div>

                    {/* Name */}
                    <h3 className="relative z-10 text-2xl font-bold text-[#081b4b] mt-8">
                      {item.name}
                    </h3>

                    {/* Description */}
                    <p className="relative z-10 mt-4 text-gray-500 leading-7">
                      Stay connected for instant updates and exclusive stories.
                    </p>

                    {/* Bottom line */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${item.color}`}
                    />
                  </motion.a>
                );
              })}
            </div>
          </div>
          {/* ================= WHY CHOOSE TEA TIME TELUGU ================= */}

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 lg:mt-28">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#081b4b]"
            >
              Why Choose Tea Time Telugu?
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-14">
              {[
                {
                  icon: Globe,
                  title: "Trusted Worldwide",
                  desc: "A reliable source trusted by Telugu readers across the globe for accurate and timely news.",
                },
                {
                  icon: Zap,
                  title: "Always First",
                  desc: "We deliver breaking news updates as they happen, keeping you ahead of the curve.",
                },
                {
                  icon: Scale,
                  title: "Balanced Content",
                  desc: "A perfect blend of entertainment and responsible journalism.",
                },
                {
                  icon: Landmark,
                  title: "Cultural Voice",
                  desc: "A true reflection of Telugu culture, heritage and values in every story we share.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.15,
                    }}
                    whileHover={{
                      y: -15,
                      scale: 1.02,
                    }}
                    className="group relative overflow-hidden bg-gray-50 rounded-[35px] p-8 sm:p-10 shadow-sm border border-transparent hover:border-purple-200"
                  >
                    {/* Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-purple-100/40 to-pink-100/30" />

                    {/* Icon */}
                    <motion.div
                      whileHover={{
                        rotate: 360,
                        scale: 1.1,
                      }}
                      transition={{ duration: 0.8 }}
                      className="relative z-10 w-16 h-16 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center shadow-lg"
                    >
                      <Icon className="text-white" size={30} />
                    </motion.div>

                    {/* Title */}
                    <h3 className="relative z-10 text-2xl sm:text-3xl font-bold text-[#081b4b] mt-8">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="relative z-10 mt-5 text-gray-500 text-base sm:text-lg leading-8">
                      {item.desc}
                    </p>

                    {/* Animated line */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.4 }}
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-600 to-pink-500"
                    />

                    {/* Floating blob */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-300/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-700" />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ================= FUTURE OF TELUGU DIGITAL JOURNALISM ================= */}

          {/* ================= GALLERY ================= */}

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 lg:mt-28">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#081b4b] mb-12">
              Gallery
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-[30px] lg:rounded-[40px]"
              >
                <img
                  src="/tt2.png"
                  alt=""
                  className="h-[280px] sm:h-[350px] lg:h-[400px] w-full object-cover"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-[30px] lg:rounded-[40px]"
              >
                <img
                  src="/tt3.jpg"
                  alt=""
                  className="h-[280px] sm:h-[350px] lg:h-[400px] w-full object-cover"
                />
              </motion.div>
            </div>
          </div>

          {/* ================= FINAL CTA ================= */}

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#081b4b] to-purple-700 p-10 md:p-16 text-center"
            >
              {/* Rotating Glow */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-60 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full border border-white/10"
              />

              {/* Glow Blob 1 */}
              <motion.div
                animate={{
                  x: [0, 40, 0],
                  y: [0, -30, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                }}
                className="absolute -top-32 -left-24 w-96 h-96 bg-purple-500/40 rounded-full blur-[120px]"
              />

              {/* Glow Blob 2 */}
              <motion.div
                animate={{
                  x: [0, -40, 0],
                  y: [0, 30, 0],
                  scale: [1.2, 1, 1.2],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                }}
                className="absolute -bottom-32 -right-24 w-96 h-96 bg-pink-500/40 rounded-full blur-[120px]"
              />

              {/* Floating Particles */}
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [-20, 20, -20],
                    opacity: [0.2, 1, 0.2],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 3,
                    repeat: Infinity,
                  }}
                />
              ))}

              <div className="relative z-10">
                <motion.h2
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(255,255,255,0.2)",
                      "0 0 30px rgba(255,255,255,0.6)",
                      "0 0 10px rgba(255,255,255,0.2)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
                >
                  Ready to Stay Informed?
                </motion.h2>

                <p className="text-gray-300 mt-6 text-lg leading-8 max-w-3xl mx-auto">
                  Join millions of Telugu readers who trust Tea Time Telugu for
                  accurate and timely news.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center mt-10">
                  <motion.a
                    href="https://www.teatimetelugu.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.08,
                      y: -8,
                      boxShadow: "0 0 40px rgba(255,255,255,0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="bg-white text-[#081b4b] px-8 py-4 rounded-full font-semibold shadow-xl"
                  >
                    Visit Our Website
                  </motion.a>

                  <motion.button
                    whileHover={{
                      scale: 1.08,
                      y: -8,
                      borderColor: "#fff",
                    }}
                    animate={{
                      y: [0, 6, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                    }}
                    className="border border-white text-white px-8 py-4 rounded-full font-semibold"
                  >
                    Download App
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Product2;
