
// import React from "react";
// import { motion } from "framer-motion";
// import {
//   CheckCircle,
//   ArrowRight,
//   Cloud,
//   Shield,
//   Smartphone,
//   BarChart3,
// } from "lucide-react";

// const Product3 = () => {
//   return (
//     <div>
//       <section className="pt-24 md:pt-28">
//         {/* ================= HERO ================= */}
//         <div className="relative w-full h-[300px] md:h-[350px] flex items-center justify-center text-center text-white overflow-hidden">
//           <div
//             className="absolute inset-0 bg-cover bg-center"
//             style={{ backgroundImage: "url('/bgimg.jpeg')" }}
//           />
//           <div className="absolute inset-0 bg-black/50" />
//           <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,#ffffff,transparent_60%)]" />

//           <div className="relative z-10">
//             <h1 className="text-3xl md:text-5xl font-bold mb-3">
//               Cloud Nest PMS
//             </h1>
//             <p className="text-gray-300 text-sm md:text-base">
//               Home <span className="mx-2">›</span> Cloud Nest PMS
//             </p>
//           </div>
//         </div>

//         {/* ================= MAIN ================= */}
//         <section className="bg-white py-16 lg:py-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//             <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-10">

//               {/* LEFT */}
//               <div>

//                 {/* HERO IMAGE */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 40 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="overflow-hidden rounded-[30px] lg:rounded-[40px]"
//                 >
//                   <img
//                     src="/cloudpms.jpg"
//                     alt="Cloud PMS"
//                     className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover"
//                   />
//                 </motion.div>

//                 {/* TITLE */}
//                 <div className="mt-8">
//                   <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#081b4b]">
//                     Cloud Nest PMS
//                   </h1>

//                   <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold text-blue-600">
//                     Next-Gen Property Management
//                   </h2>
//                 </div>

//                 {/* DESCRIPTION */}
//                 <p className="mt-8 text-base sm:text-lg text-gray-500 leading-8">
//                   Transform your hospitality operations with our cloud-based platform.
//                   Streamline bookings, enhance guest experiences, and maximize revenue—all from one intelligent dashboard.
//                 </p>

//                 {/* BADGES */}
//                 <div className="flex flex-wrap gap-3 mt-8">
//                   {[
//                     "Cloud Based",
//                     "Multi-Property",
//                     "Analytics",
//                     "Secure",
//                     "Mobile Ready",
//                     "Fast Setup",
//                   ].map((item, i) => (
//                     <div
//                       key={i}
//                       className="px-4 py-3 rounded-full bg-blue-50 text-blue-700 text-sm font-medium"
//                     >
//                       {item}
//                     </div>
//                   ))}
//                 </div>

//                 {/* STATS */}
//                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-14">
//                   {[
//                     { num: "99.9%", label: "Uptime" },
//                     { num: "500+", label: "Properties" },
//                     { num: "24/7", label: "Support" },
//                     { num: "50+", label: "Integrations" },
//                   ].map((s, i) => (
//                     <div
//                       key={i}
//                       className="rounded-3xl bg-gray-50 p-8 text-center shadow-sm"
//                     >
//                       <h2 className="text-3xl md:text-5xl font-bold text-blue-600">
//                         {s.num}
//                       </h2>
//                       <p className="mt-2 text-gray-500">{s.label}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* RIGHT */}
//               <div>
//                 <div className="bg-gray-100 rounded-[30px] lg:rounded-[40px] p-6 sm:p-8 lg:p-10">

//                   <h2 className="text-3xl md:text-4xl font-bold text-[#081b4b] mb-10">
//                     Product Info
//                   </h2>

//                   <div className="space-y-8">

//                     <Info icon={<Cloud />} title="Product" value="Cloud Nest PMS" />
//                     <Info icon={<BarChart3 />} title="Type" value="Property Management" />
//                     <Info icon={<Shield />} title="Security" value="GDPR Compliant" />
//                     <Info icon={<Smartphone />} title="Access" value="Mobile & Web" />

//                   </div>
//                 </div>

//                 {/* CTA */}
//                 <div className="mt-8 rounded-[30px] overflow-hidden relative">
//                   <img
//                     src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
//                     className="h-[300px] w-full object-cover"
//                     alt=""
//                   />

//                   <div className="absolute inset-0 bg-[#081b4b]/80 p-6 sm:p-10 flex flex-col justify-center">
//                     <h2 className="text-2xl sm:text-3xl font-bold text-white">
//                       Trusted by 500+ properties worldwide
//                     </h2>

//                     <p className="text-gray-300 mt-4">
//                       Cloud-based · AI-powered · 24/7 support
//                     </p>

//                     <button className="mt-6 bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 rounded-full text-white font-semibold flex items-center gap-3 w-fit">
//                       Start Free Trial
//                       <ArrowRight size={20} />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* ================= FEATURES ================= */}
//             <div className="mt-20">
//               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#081b4b]">
//                 Comprehensive Features
//               </h2>

//               <div className="grid md:grid-cols-2 gap-6 mt-12">

//                 {features.map((f, i) => (
//                   <motion.div
//                     key={i}
//                     whileHover={{ y: -8 }}
//                     className="bg-gray-50 rounded-3xl p-7 shadow-sm"
//                   >
//                     <CheckCircle className="text-blue-600 mb-4" />
//                     <h3 className="text-xl font-bold text-[#081b4b]">
//                       {f.title}
//                     </h3>
//                     <p className="text-gray-500 mt-3">{f.desc}</p>
//                   </motion.div>
//                 ))}

//               </div>
//             </div>

//             {/* ================= WHY DIFFERENT ================= */}
//             <div className="mt-20">
//               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#081b4b]">
//                 Why Choose Cloud Nest PMS?
//               </h2>

//               <div className="grid md:grid-cols-2 gap-6 mt-12">
//                 {why.map((w, i) => (
//                   <motion.div
//                     key={i}
//                     whileHover={{ scale: 1.03 }}
//                     className="bg-gray-50 p-8 rounded-3xl"
//                   >
//                     <h3 className="text-xl font-bold text-[#081b4b]">
//                       {w}
//                     </h3>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </section>
//       </section>
//     </div>
//   );
// };

// /* ===== SMALL COMPONENT ===== */
// const Info = ({ icon, title, value }) => (
//   <div className="flex gap-4 items-center">
//     <div className="w-14 h-14 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white">
//       {icon}
//     </div>
//     <div>
//       <p className="text-gray-400">{title}</p>
//       <h3 className="font-bold text-xl text-[#081b4b]">{value}</h3>
//     </div>
//   </div>
// );

// /* DATA */
// const features = [
//   {
//     title: "Front Desk Management",
//     desc: "Smooth check-in/check-out with intelligent room allocation",
//   },
//   {
//     title: "Booking Engine",
//     desc: "Seamless OTA integration and direct bookings",
//   },
//   {
//     title: "Revenue Management",
//     desc: "AI-powered dynamic pricing and forecasting",
//   },
//   {
//     title: "Guest Profiles",
//     desc: "Personalized guest experience tracking",
//   },
// ];

// const why = [
//   "Cloud-based access anywhere",
//   "Multi-property management",
//   "Real-time OTA integration",
//   "Automated billing system",
//   "AI analytics & forecasting",
//   "Mobile optimized dashboard",
// ];

// export default Product3;
import React from "react";
import { motion } from "framer-motion";
import cloudNestImg from "../../assets/cloudnest.jpg";
import cloudNestImg1 from "../../assets/cloudnest1.png";
import {
  CheckCircle,
  ArrowRight,
  Cloud,
  Shield,
  Smartphone,
  BarChart3,
} from "lucide-react";

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
            src={cloudNestImg1}   // logo image
            alt="Cloud Nest Logo"
            className="w-20 sm:w-24 object-contain"
          />
          </div>
      {/* TITLE */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#081b4b] mt-8">
        Cloud Nest PMS
      </h1>

      <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold text-blue-600">
        Next-Gen Property Management
      </h2>

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
            className="px-4 py-3 rounded-full bg-blue-50 text-blue-700 text-sm sm:text-base font-medium"
          >
            {item}
          </div>
        ))}
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-14">

        <div className="rounded-3xl bg-gray-50 p-8 text-center shadow-sm">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600">
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
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600">
            24/7
          </h2>
          <p className="mt-2 text-gray-500">Support</p>
        </div>

        <div className="rounded-3xl bg-gray-50 p-8 text-center shadow-sm">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600">
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
        <Cloud className="text-white" />
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
        <BarChart3 className="text-white" />
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
        <Shield className="text-white" />
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
        <Smartphone className="text-white" />
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

              {/* CTA CARD */}
              <div className="mt-6 relative rounded-[30px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
                  className="h-[300px] w-full object-cover"
                  alt=""
                />

                <div className="absolute inset-0 bg-[#081b4b]/80 p-6 text-white flex flex-col justify-center">
                  <h2 className="text-2xl font-bold">
                    Ready to Transform Your Business?
                  </h2>

                  <p className="text-gray-300 mt-3">
                    Join 500+ properties already using Cloud Nest PMS
                  </p>

                  <button className="mt-5 bg-blue-600 px-6 py-3 rounded-full w-fit flex items-center gap-2">
                    Start Free Trial <ArrowRight size={18} />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* ================= FEATURES ================= */}
          <SectionTitle title="Comprehensive Features" />

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {features.map((f, i) => (
              <Card key={i} title={f.title} desc={f.desc} />
            ))}
          </div>

          {/* ================= BUSINESS ================= */}
          <SectionTitle title="Perfect for Every Hospitality Business" />

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {business.map((b, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-3xl">
                <h3 className="font-bold text-[#04154a]">{b.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{b.desc}</p>
                <p className="mt-3 font-semibold text-blue-600">{b.count}</p>
              </div>
            ))}
          </div>

          {/* ================= FUTURE ================= */}
          <SectionTitle title="Future of Hospitality" />

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {future.map((f, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-3xl">
                <h3 className="font-bold">{f.title}</h3>
                <p className="text-gray-500 mt-2">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* ================= GALLERY (FIXED MISSING PART) ================= */}
          <SectionTitle title="Product Gallery" />

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <img className="rounded-[30px] object-cover h-[300px] w-full" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" />
            <img className="rounded-[30px] object-cover h-[300px] w-full" src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d" />
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
  { title: "Front Desk Management", desc: "Smart check-in system" },
  { title: "Booking Engine", desc: "OTA integration" },
  { title: "Revenue Management", desc: "AI pricing engine" },
  { title: "Guest Profiles", desc: "Smart tracking system" },
];

const business = [
  { title: "Hotels", desc: "Large scale ops", count: "200+" },
  { title: "Managers", desc: "Multi property", count: "150+" },
  { title: "Hostels", desc: "Budget stays", count: "80+" },
  { title: "Chains", desc: "Central control", count: "50+" },
];

const future = [
  { title: "AI Chatbot", desc: "Smart support" },
  { title: "Digital Keys", desc: "Mobile access" },
  { title: "Voice AI", desc: "Hands free control" },
];

export default Product3;