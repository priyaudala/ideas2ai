import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import robotImg from "../../assets/roboImg.png"; 

const ContactForm = () => {
  const [position, setPosition] = useState({ x: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  const messages = [
    "Hello there!",
    "How can I help you today?",
    "Let's build something amazing 🚀",
  ];

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  // ✨ Typing Effect
  useEffect(() => {
    let currentText = messages[index];
    let i = 0;

    const typing = setInterval(() => {
      setDisplayText(currentText.slice(0, i));
      i++;
      if (i > currentText.length) clearInterval(typing);
    }, 50);

    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % messages.length);
      setDisplayText("");
    }, 3000);

    return () => {
      clearInterval(typing);
      clearTimeout(timeout);
    };
  }, [index]);

  // 🎯 Mouse movement
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;

    setPosition({ x: x * 20 });
    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section className="bg-gray-100 py-20 relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4">

        {/* MAIN CARD */}
        <div className="grid md:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden">

          {/* 🤖 LEFT SIDE */}
          <div
            onMouseMove={handleMouseMove}
            className="relative flex items-end justify-center bg-white overflow-hidden"
          >

            {/* Cursor Glow */}
            <div
              className="absolute w-[200px] h-[200px] bg-purple-200 opacity-30 blur-3xl rounded-full pointer-events-none"
              style={{
                left: `${glow.x}%`,
                top: `${glow.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            />

            {/* Soft Pulse */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute w-[260px] h-[260px] bg-purple-100 opacity-40 blur-3xl rounded-full"
            />

            {/* Wrapper */}
            <div className="relative flex items-end justify-center w-full px-8 sm:px-10">

              {/* 🤖 Robot */}
              <motion.img
                src={robotImg}
                alt="robot"
                className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-[380px] object-contain relative z-10"

                animate={{
                  y: [0, -12, 0],
                  x: position.x,
                }}

                transition={{
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  x: { type: "spring", stiffness: 40 },
                }}
              />

              {/* 💬 SPEECH BUBBLE (RESPONSIVE) */}
              <div
                className="
                  absolute z-20
                  right-2 top-[12%]
                  sm:right-4 sm:top-[18%]
                  md:right-6 md:top-[25%]
                  max-w-[140px] sm:max-w-[180px]
                "
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="px-4 py-2 rounded-xl bg-white shadow-lg text-xs sm:text-sm font-medium text-purple-700 border border-purple-100"
                  >
                    {displayText}
                    <span className="animate-pulse">|</span>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>

          {/* 📩 RIGHT SIDE */}
          <div className="p-6 md:p-12 bg-white">

            <p className="font-semibold text-sm mb-2 text-gray-500">
              SEND A MESSAGE
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1b3f] mb-10">
              Need any help?
            </h2>

            <form className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                placeholder="Your Name"
                className="p-4 rounded-xl border border-gray-300 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="p-4 rounded-xl border border-gray-300 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              />

              <input
                type="text"
                placeholder="Website"
                className="md:col-span-2 p-4 rounded-xl border border-gray-300 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="md:col-span-2 p-4 rounded-xl border border-gray-300 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 resize-none"
              ></textarea>

              <div className="md:col-span-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-3 rounded-full font-semibold shadow-lg"
                >
                  Submit Request
                </motion.button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;