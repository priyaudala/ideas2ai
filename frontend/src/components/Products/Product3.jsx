import React from "react";
import { motion } from "framer-motion";
import cloudNestImg from "../../assets/cloudnest.jpg";
import cloudNestImg1 from "../../assets/cloudnest1.png";
import cloudNestImg2 from "../../assets/cloudnest2.jpg";

import {
//   CheckCircle,
//   ArrowRight,
//   Cloud,
//   Shield,
//   ShieldCheck,
//   Smartphone,
//   BarChart3,
//   Cpu,
//   Users,
//   Lock,
//   Activity,
// } from "lucide-react";
  FaCloud,
  FaChartLine,
  FaUsers,
  FaRobot,
  FaHotel,
  FaBuilding,
  FaShieldAlt,
  FaMobileAlt,
  FaBrain,
  FaMagic,
  FaWallet, 
  FaCalendarCheck,
  FaStore,
  FaUserCog,
  FaCreditCard,
  FaNetworkWired,
  FaKey,
  FaMicrophone,
  FaArrowRight,
} from "react-icons/fa";
import { FaBed } from "react-icons/fa6";

const Product3 = () => {
  return (
    <div>

      {/* ================= HERO ================= */}
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
              Cloud Nest PMS
            </h1>
            <p className="text-gray-300">
              Home <span className="mx-2">›</span> Cloud Nest PMS
            </p>
          </div>

        </div>
      </section>

      {/* ================= MAIN ================= */}
      <section className="bg-white py-16 lg:py-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-10">

    {/* ================= LEFT ================= */}
    <div>

      {/* IMAGE (UPDATED TO MATCH STYLE) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="overflow-hidden rounded-[30px] lg:rounded-[40px]"
      >
        <img
          src={cloudNestImg}   // (cloudnest1.png as you said)
          alt="Cloud Nest PMS"
          className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover"
        />
      </motion.div>
       {/* ✅ LOGO SECTION (ADDED) */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">

  <img
    src={cloudNestImg1}
    alt="Cloud Nest Logo"
    className="w-20 sm:w-24 object-contain"
  />

  <div>
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#081b4b]">
      Cloud Nest PMS
    </h1>

    <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold text-purple-600">
      Next-Gen Property Management
    </h2>
  </div>

</div>
      {/* DESCRIPTION */}
      <p className="mt-8 text-base sm:text-lg text-gray-500 leading-8">
        Transform your hospitality operations with cloud-based AI PMS.
        Manage bookings, guests, revenue, and analytics in one dashboard.
      </p>

      {/* TAGS */}
      <div className="flex flex-wrap gap-3 mt-8">
        {[
          "Cloud Based",
          "Multi-Property",
          "Analytics",
          "Secure",
          "Mobile Ready",
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
            99.9%
          </h2>
          <p className="mt-2 text-gray-500">Uptime</p>
        </div>

        <div className="rounded-3xl bg-gray-50 p-8 text-center shadow-sm">
           <h2 className="text-4xl md:text-5xl font-bold text-blue-600">
            500+
          </h2>
          <p className="mt-2 text-gray-500">Properties</p>
        </div>

        <div className="rounded-3xl bg-gray-50 p-8 text-center shadow-sm">
          <h2 className="text-4xl md:text-5xl font-bold text-green-600">
            24/7
          </h2>
          <p className="mt-2 text-gray-500">Support</p>
        </div>

        <div className="rounded-3xl bg-gray-50 p-8 text-center shadow-sm">
          <h2 className="text-4xl md:text-5xl font-bold text-pink-600">
            50+
          </h2>
          <p className="mt-2 text-gray-500">Integrations</p>
        </div>

      </div>

    </div>
            {/* ================= RIGHT ================= */}
            <div>
              {/* PRODUCT INFO (Product1 STYLE FIXED) */}
              <div className="bg-gray-100 rounded-[30px] lg:rounded-[40px] p-6 sm:p-8 lg:p-10">
                <h2 className="text-3xl md:text-4xl font-bold text-[#081b4b] mb-10">
                  Product Info
                </h2>

                <div className="space-y-8">

    <div className="flex gap-4 items-center">
      <div className="w-14 h-14 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
        <FaCloud className="text-white" />
      </div>

      <div>
        <p className="text-gray-400 text-sm">Product</p>
        <h3 className="font-bold text-xl text-[#081b4b]">
          Cloud Nest PMS
        </h3>
      </div>
    </div>

    <div className="flex gap-4 items-center">
      <div className="w-14 h-14 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
        <FaChartLine className="text-white" />
      </div>

      <div>
        <p className="text-gray-400 text-sm">Type</p>
        <h3 className="font-bold text-xl text-[#081b4b]">
          Property Management
        </h3>
      </div>
    </div>

    <div className="flex gap-4 items-center">
      <div className="w-14 h-14 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
        <FaShieldAlt className="text-white" />
      </div>

      <div>
        <p className="text-gray-400 text-sm">Security</p>
        <h3 className="font-bold text-xl text-[#081b4b]">
          GDPR Compliant
        </h3>
      </div>
    </div>

    <div className="flex gap-4 items-center">
      <div className="w-14 h-14 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
        <FaMobileAlt className="text-white" />
      </div>

      <div>
        <p className="text-gray-400 text-sm">Access</p>
        <h3 className="font-bold text-xl text-[#081b4b]">
          Mobile & Web
        </h3>
      </div>
    </div>

  </div>
</div>

              {/* CTA */}
                              <div className="mt-8 rounded-[30px] lg:rounded-[40px] overflow-hidden relative">
                                <img
                                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                                  className="h-[300px] sm:h-[350px] w-full object-cover"
                                  alt=""
                                />
              
                                <div className="absolute inset-0 bg-[#0d022d]/80 p-6 sm:p-10 flex flex-col justify-center">
                                  <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                                    Trusted by 500+ properties worldwide
                                  </h2>
              
                                  <p className="text-gray-300 mt-5 leading-8">
                                    Cloud-based · AI-powered · 24/7 support
                                  </p>
              
                                  <button className="mt-8 bg-gradient-to-r from-purple-600 to-pink-500 px-7 py-4 rounded-full text-white font-semibold flex items-center gap-3 w-fit">
                                    Get Started
                                    <FaArrowRight size={20} />
                                  </button>
                                </div>
                              </div>
            </div>
          </div>
{/* ================= FEATURES ================= */}
<SectionTitle title="Comprehensive Features" />

<div className="relative mt-10">

  {/* Center Timeline Line */}
  <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-purple-600 via-pink-500 to-purple-600 rounded-full"></div>

  <div className="space-y-6">

    {features.map((f, i) => {
      const featureIcons = [
        <FaHotel />,
        <FaCalendarCheck />,
        <FaChartLine />,
        <FaUserCog />,
        <FaWallet />,
        <FaShieldAlt />,
      ];

      const cardStyles = [
        {
          bg: "from-purple-50 to-pink-50",
          icon: "from-purple-600 to-pink-500",
        },
        {
          bg: "from-blue-50 to-cyan-50",
          icon: "from-blue-600 to-cyan-500",
        },
        {
          bg: "from-green-50 to-emerald-50",
          icon: "from-green-600 to-emerald-500",
        },
        {
          bg: "from-orange-50 to-amber-50",
          icon: "from-orange-500 to-amber-500",
        },
        {
          bg: "from-rose-50 to-red-50",
          icon: "from-rose-500 to-red-500",
        },
        {
          bg: "from-indigo-50 to-violet-50",
          icon: "from-indigo-600 to-violet-500",
        },
      ];

      const isLeft = i % 2 === 0;

      return (
        <div
          key={i}
          className={`flex ${
            isLeft ? "lg:justify-start" : "lg:justify-end"
          }`}
        >
          <motion.div
            initial={{
              opacity: 0,
              x: isLeft ? -80 : 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
            }}
            className="relative w-full lg:w-[40%]"
          >

            {/* Timeline Dot */}
            {isLeft ? (
              <div className="hidden lg:block absolute top-8 right-[-44px] w-4 h-4 rounded-full bg-purple-600 shadow-[0_0_20px_rgba(147,51,234,0.8)] z-20" />
            ) : (
              <div className="hidden lg:block absolute top-8 left-[-44px] w-4 h-4 rounded-full bg-purple-600 shadow-[0_0_20px_rgba(147,51,234,0.8)] z-20" />
            )}

            {/* Card */}
            <div
              className="group relative overflow-hidden bg-white border border-purple-100 rounded-[28px] p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Hover Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cardStyles[i].bg}
                opacity-0 group-hover:opacity-100 transition-all duration-500`}
              ></div>

              {/* Glow */}
              <div
                className={`absolute -top-8 -right-8 w-28 h-28 rounded-full blur-3xl opacity-10
                bg-gradient-to-r ${cardStyles[i].icon}
                group-hover:scale-150 transition-all duration-700`}
              ></div>

              {/* Icon */}
              <motion.div
                whileHover={{
                  rotate: 360,
                  scale: 1.15,
                }}
                transition={{
                  duration: 0.8,
                }}
                className={`relative z-10 w-14 h-14 rounded-2xl
                bg-gradient-to-r ${cardStyles[i].icon}
                flex items-center justify-center text-white text-xl shadow-lg mb-4`}
              >
                {featureIcons[i]}
              </motion.div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative z-10 text-xl font-bold text-[#04154a]"
              >
                {f.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative z-10 text-gray-500 mt-3 leading-6 text-sm"
              >
                {f.desc}
              </motion.p>

              {/* Bottom Line */}
              <div
                className={`relative z-10 mt-5 h-1 w-12 rounded-full
                bg-gradient-to-r ${cardStyles[i].icon}
                group-hover:w-20 transition-all duration-500`}
              ></div>
            </div>

          </motion.div>
        </div>
      );
    })}
  </div>
</div>

         {/* ================= BUSINESS ================= */}
<SectionTitle title="Perfect for Every Hospitality Business" />

<div className="grid lg:grid-cols-2 gap-12 items-center mt-12">

  {/* LEFT - CARDS */}
  <div className="grid sm:grid-cols-2 gap-6">

    {business.map((b, i) => {
      const businessIcons = [
        <FaHotel />,
        <FaBuilding />,
        <FaBed />,
        <FaNetworkWired />,
      ];

      return (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            delay: i * 0.15,
          }}
          viewport={{ once: true }}
          className="bg-white border border-purple-100 rounded-[30px] p-7 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
        >
          <div className="w-14 h-14 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white text-xl shadow-lg mb-5">
            {businessIcons[i]}
          </div>

          <h3 className="font-bold text-lg text-[#04154a]">
            {b.title}
          </h3>

          <p className="text-gray-500 mt-3">
            {b.desc}
          </p>

          <p className="mt-4 text-2xl font-bold text-purple-600">
            {b.count}
          </p>
        </motion.div>
      );
    })}

  </div>

  {/* RIGHT - IMAGE */}
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="relative"
  >
    <img
      src={cloudNestImg2}
      alt=""
      className="rounded-[40px] h-[550px] w-full object-cover shadow-2xl"
    />

    {/* Floating Badge */}
    <div className="absolute bottom-8 left-8 bg-white rounded-3xl px-6 py-4 shadow-xl">
      <h3 className="text-3xl font-bold text-purple-600">
        500+
      </h3>

      <p className="text-gray-500">
        Active Properties
      </p>
    </div>
  </motion.div>

</div>
          {/* ================= FUTURE ================= */}
<SectionTitle title="Future of Hospitality" />

<div className="grid md:grid-cols-3 gap-8 mt-10">
  {future.map((f, i) => {
    const futureIcons = [
      <FaRobot />,
      <FaKey />,
      <FaMicrophone />,
      <FaChartLine />,
      <FaStore />,
      <FaUserCog />,
    ];

    const cardStyles = [
      {
        bg: "from-purple-50 to-pink-50",
        icon: "from-purple-600 to-pink-500",
      },
      {
        bg: "from-blue-50 to-cyan-50",
        icon: "from-blue-600 to-cyan-500",
      },
      {
        bg: "from-green-50 to-emerald-50",
        icon: "from-green-600 to-emerald-500",
      },
      {
        bg: "from-orange-50 to-amber-50",
        icon: "from-orange-500 to-amber-500",
      },
      {
        bg: "from-rose-50 to-red-50",
        icon: "from-rose-500 to-red-500",
      },
      {
        bg: "from-indigo-50 to-violet-50",
        icon: "from-indigo-600 to-violet-500",
      },
    ];

    return (
      <div
        key={i}
        className="group relative overflow-hidden rounded-[30px] bg-white border border-gray-100 p-8 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
      >
        {/* Hover Background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${cardStyles[i].bg} opacity-0 group-hover:opacity-100 transition-all duration-500`}
        ></div>

        {/* Floating Glow */}
        <div
          className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r ${cardStyles[i].icon} opacity-10 rounded-full blur-3xl group-hover:scale-150 transition-all duration-700`}
        ></div>

        {/* Icon */}
        <div
          className={`relative z-10 w-16 h-16 rounded-3xl bg-gradient-to-r ${cardStyles[i].icon}
          flex items-center justify-center text-white text-2xl shadow-lg mb-6
          group-hover:rotate-[360deg] group-hover:scale-110 transition-all duration-700`}
        >
          {futureIcons[i]}
        </div>

        {/* Title */}
        <h3 className="relative z-10 text-xl font-bold text-[#04154a] mb-3">
          {f.title}
        </h3>

        {/* Description */}
        <p className="relative z-10 text-gray-500 leading-7">
          {f.desc}
        </p>

        {/* Bottom Accent Line */}
        <div
          className={`relative z-10 mt-6 h-1 w-16 rounded-full bg-gradient-to-r ${cardStyles[i].icon}
          group-hover:w-24 transition-all duration-500`}
        ></div>
      </div>
    );
  })}
</div>
          {/* ================= GALLERY (FIXED MISSING PART) ================= */}
          <SectionTitle title="Product Gallery" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">

  {/* LEFT BIG IMAGE (smaller height) */}
  <div className="h-[240px] md:h-[480px]">
    <img
      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
      className="w-full h-full object-cover rounded-[25px]"
      alt=""
    />
  </div>

  {/* RIGHT SIDE (2 IMAGES) */}
  <div className="flex flex-col gap-5 h-[240px] md:h-[480px]">

    <img
      src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
      className="w-full h-1/2 object-cover rounded-[25px]"
      alt=""
    />

    <img
      src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
      className="w-full h-1/2 object-cover rounded-[25px]"
      alt=""
    />

  </div>

</div>

          {/* ================= FINAL CTA CARD (MISSING FIXED) ================= */}
          <div className="mt-16 relative rounded-[30px] overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              className="h-[300px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-[#081b4b]/85 flex flex-col items-center justify-center text-center text-white p-8">

              <h2 className="text-2xl sm:text-3xl font-bold">
                Ready to Transform Your Business?
              </h2>

              <p className="text-gray-300 mt-3">
                Join 500+ properties using Cloud Nest PMS today
              </p>

              <div className="flex gap-4 mt-6">
                <button className="bg-blue-600 px-6 py-3 rounded-full">
                  Start Free Trial
                </button>
                <button className="bg-white text-[#04154a] px-6 py-3 rounded-full">
                  Schedule Demo
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

/* ================= HELPERS ================= */
const Info = ({ icon, title, value }) => (
  <div className="flex items-center gap-4 mb-5">
    <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-2xl">
      {icon}
    </div>
    <div>
      <p className="text-gray-400 text-sm">{title}</p>
      <h3 className="font-bold text-[#04154a]">{value}</h3>
    </div>
  </div>
);

const SectionTitle = ({ title }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-[#04154a] mt-16">
    {title}
  </h2>
);

const Card = ({ title, desc }) => (
  <div className="bg-gray-50 p-6 rounded-3xl">
    <CheckCircle className="text-blue-600 mb-3" />
    <h3 className="font-bold text-[#04154a]">{title}</h3>
    <p className="text-gray-500 mt-2">{desc}</p>
  </div>
);

/* ================= DATA ================= */
const features = [
  { title: "Front Desk Management", desc: "Smooth check-in/check-out with intelligent room allocation" },
  { title: "Booking Engine", desc: "Seamless integration with OTAs and direct bookings" },
  { title: "Revenue Management", desc: "Dynamic pricing and occupancy tracking with AI insights" },
  { title: "Guest Profiles", desc: "Comprehensive history, preferences, and loyalty programs" },
  { title: "Billing & Payments", desc: "Automated invoicing with multi-currency support" },
  { title: "Security & Compliance", desc: "Enterprise-grade security with GDPR compliance" },
 
];

const business = [
  { title: "Hotels & Resorts", desc: "Complete suite for large-scale hospitality operations", count: "200+Properties" },
  { title: "Property Managers", desc: "Efficient management for multiple rental properties", count: "150+Mangers" },
  { title: "Hostels & Guesthouses", desc: "Streamlined operations for budget accommodations", count: "80+Locations" },
  { title: "Hospitality Chains", desc: "Central control", count: "50+Chains" },
];

const future = [
  { title: "AI Chatbot", desc: "Smart guest inquiries & reservations" },
  { title: "Digital Keys", desc: "Mobile self check-in & room access" },
  { title: "Voice AI", desc: "Voice-enabled property management" },
  { title: "Smart Revenue", desc: "AI-powered optimization" },
  { title: "Marketplace", desc: "Spa, events & tours integration" },
  { title: "Personalization", desc: "AI-driven guest experiences" },
];

export default Product3;