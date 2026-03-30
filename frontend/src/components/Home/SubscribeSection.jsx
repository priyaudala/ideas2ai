import React from "react";
import { FaBell } from "react-icons/fa";
import { motion } from "framer-motion";

const SubscribeSection = () => {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      className="bg-[#070B2D] 
      pt-20 sm:pt-24 md:pt-28 lg:pt-32 
      pb-24 sm:pb-28 md:pb-32 lg:pb-36 
      px-4 sm:px-6 
      text-white relative overflow-hidden"
    >
      {/* BACKGROUND BLOBS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] bg-purple-500/20 rounded-full blur-[100px] top-[-80px] left-[10%]" />
        <div className="absolute w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] bg-pink-500/20 rounded-full blur-[100px] bottom-[-80px] right-[10%]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto 
        grid grid-cols-1 lg:grid-cols-2 
        gap-10 sm:gap-12 
        items-center relative z-10"
      >
        {/* LEFT */}
        <motion.div variants={item} className="text-center lg:text-left">
          <p className="text-red-500 font-semibold tracking-widest mb-4 text-xs sm:text-sm">
            ● GET STARTED
          </p>

          <motion.h2
            variants={item}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
            font-semibold leading-tight mb-6 sm:mb-10"
          >
            Join our AI-driven Creative Community!
          </motion.h2>

          {/* AVATARS */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 justify-center lg:justify-start">
            <div className="flex -space-x-3 sm:-space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.img
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i}`}
                  alt="user"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-white"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                />
              ))}
            </div>

            <motion.p
              variants={item}
              className="text-sm sm:text-base text-gray-300"
            >
              4689 weekly subscribe
            </motion.p>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div variants={item} className="w-full">

          {/* 💡 RESPONSIVE INPUT SECTION */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="w-full max-w-xl mx-auto lg:ml-auto"
          >
            {/* 📱 MOBILE (stacked) */}
            <div className="flex flex-col sm:hidden gap-3">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-3 rounded-full bg-gray-200 text-gray-700 outline-none"
              />

              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 
                px-6 py-3 rounded-full text-white font-semibold 
                flex items-center justify-center gap-2"
              >
                SUBSCRIBE
                <FaBell size={14} />
              </motion.button>
            </div>

            {/* 💻 DESKTOP (pill style) */}
            <div className="hidden sm:flex items-center bg-gray-200 rounded-full p-2">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-transparent px-6 py-3 text-gray-700 outline-none"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-500 
                px-8 py-3 rounded-full text-white font-semibold 
                flex items-center gap-2"
              >
                SUBSCRIBE
                <FaBell size={14} />
              </motion.button>
            </div>
          </motion.div>

          {/* TERMS */}
          <motion.div
            variants={item}
            className="flex items-start sm:items-center gap-2 sm:gap-3 
            mt-4 sm:mt-6 
            justify-center lg:justify-end 
            text-xs sm:text-sm text-gray-300 text-center lg:text-left"
          >
            <input type="checkbox" className="mt-1 sm:mt-0 w-4 h-4 sm:w-5 sm:h-5" />
            <p className="max-w-[280px] sm:max-w-none">
              I Agree To The Terms, Privacy Policy.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SubscribeSection;