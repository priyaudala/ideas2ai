import React from "react";
import { FaBell } from "react-icons/fa";
import { motion } from "framer-motion";

const SubscribeSection = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
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
    <section className="bg-[#070B2D] pt-32 pb-36 px-6 text-white relative overflow-hidden">
      
      {/* ✅ NEW SUBTLE BACKGROUND (NO EYE STRAIN) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] top-[-100px] left-[20%] animate-slowMove"></div>
        <div className="absolute w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[120px] bottom-[-100px] right-[20%] animate-slowMove2"></div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10"
      >
        
        {/* LEFT SIDE */}
        <motion.div variants={item}>
          <p className="text-red-500 font-semibold tracking-widest mb-5">
            ● GET STARTED
          </p>

          <motion.h2
            variants={item}
            className="text-5xl md:text-6xl font-semibold leading-tight mb-10"
          >
            Join our AI-driven Creative Community!
          </motion.h2>

          {/* AVATARS */}
          <div className="flex items-center gap-5">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.img
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i}`}
                  className="w-12 h-12 rounded-full border-2 border-white"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ y: -5 }}
                />
              ))}
            </div>

            <motion.p
              variants={item}
              className="text-lg text-gray-300"
            >
              4689 weekly subscribe
            </motion.p>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div variants={item}>
          
          {/* INPUT BOX */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center bg-gray-200 rounded-full p-2 max-w-xl ml-auto transition"
          >
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 bg-transparent px-6 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-purple-500 rounded-full"
            />

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-3 rounded-full text-white font-semibold flex items-center gap-2 shadow-lg"
            >
              SUBSCRIBE

              {/* 🔔 Bell Animation */}
              <motion.span
                animate={{ rotate: [0, -15, 15, -10, 10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.8,
                  ease: "easeInOut",
                }}
              >
                <FaBell size={14} />
              </motion.span>
            </motion.button>
          </motion.div>

          {/* TERMS */}
          <motion.div
            variants={item}
            className="flex items-center gap-3 mt-6 justify-end text-sm text-gray-300"
          >
            <input type="radio" className="w-5 h-5 border-white" />
            <p>I Agree To The Terms, Privacy Policy.</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SubscribeSection;