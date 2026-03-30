import React from "react";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {

  // 🔥 container animation
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // 🔥 fade + slide
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // 🔥 TYPEWRITER EFFECT
  const text = "Welcome to the future of artificial intelligence!";

  return (
    <section className="bg-gradient-to-r from-[#12002f] via-[#16003a] to-[#020a3a] py-28 overflow-hidden">
      
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-20 px-6 items-center"
      >

        {/* LEFT FORM */}
        <motion.div
          variants={item}
          whileHover={{ y: -5 }}
          className="bg-[#f4f4f4] rounded-[28px] p-12 shadow-lg transition"
        >
          <h3 className="text-[34px] font-semibold text-[#0f172a] mb-4">
            Get in touch
          </h3>

          <p className="text-gray-500 mb-10 leading-relaxed">
            Just fill out the form and our global experts will be in touch right
            away with package and price solution to help you!
          </p>

          <form className="space-y-6">
            {/* INPUT ROW */}
            <div className="grid grid-cols-2 gap-6">
              <motion.input
                whileFocus={{ scale: 1.03 }}
                type="text"
                placeholder="Your name"
                className="border border-gray-300 rounded-full px-6 py-4 w-full outline-none focus:border-purple-500 placeholder-gray-500 transition"
              />

              <motion.input
                whileFocus={{ scale: 1.03 }}
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 rounded-full px-6 py-4 w-full outline-none focus:border-purple-500 placeholder-gray-500 transition"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <motion.input
                whileFocus={{ scale: 1.03 }}
                type="text"
                placeholder="Company Name"
                className="border border-gray-300 rounded-full px-6 py-4 w-full outline-none focus:border-purple-500 placeholder-gray-500 transition"
              />

              <motion.input
                whileFocus={{ scale: 1.03 }}
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 rounded-full px-6 py-4 w-full outline-none focus:border-purple-500 placeholder-gray-500 transition"
              />
            </div>

            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Subject"
              className="border border-gray-300 rounded-full px-6 py-4 w-full outline-none focus:border-purple-500 placeholder-gray-500 transition"
            />

            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              rows="4"
              placeholder="Message"
              className="border border-gray-300 rounded-[20px] px-6 py-4 w-full outline-none resize-none focus:border-purple-500 placeholder-gray-500 transition"
            />

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-semibold shadow-md"
            >
              Send Message
              <ArrowRight size={18} />
            </motion.button>
          </form>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div variants={item} className="text-white">
          
          <p className="text-red-400 font-semibold text-sm tracking-wide mb-4">
            ● WE'RE HERE TO ANSWER ALL YOUR QUESTIONS
          </p>

          {/* 🔥 TYPEWRITER TEXT */}
          <h2 className="text-[56px] font-semibold leading-[1.15] mb-6">
            {text.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: i * 0.03,
                }}
              >
                {char}
              </motion.span>
            ))}
          </h2>

          <p className="text-gray-300 max-w-[520px] mb-10 leading-relaxed">
            Artificial Intelligence refers to the development of computer
            systems that possess the ability to perform activities typically
            requiring human intelligence abilities!
          </p>

          {/* BUTTONS */}
          <div className="flex gap-6 mb-14">
            <motion.button
              whileHover={{ scale: 1.08 }}
              className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-4 rounded-full font-semibold"
            >
              Get In Touch
              <ArrowRight size={18} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              className="flex items-center gap-3 border border-white/40 px-8 py-4 rounded-full"
            >
              Learn More
              <ArrowRight size={18} />
            </motion.button>
          </div>

          {/* CONTACT INFO */}
          <motion.div
            whileHover={{ x: 5 }}
            className="border-t border-white/20 pt-8 flex items-center gap-5"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="bg-white/10 p-4 rounded-xl"
            >
              <Phone size={20} />
            </motion.div>

            <div>
              <p className="text-gray-300">Feel Free to get in Touch</p>
              <p className="text-[24px] font-semibold">+990 123 456 789</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ x: 5 }}
            className="border-t border-white/20 pt-8 mt-8 flex items-center gap-5"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
              className="bg-white/10 p-4 rounded-xl"
            >
              <Mail size={20} />
            </motion.div>

            <div>
              <p className="text-gray-300">How can we Help you</p>
              <p className="text-[24px] font-semibold">info@example.com</p>
            </div>
          </motion.div>

        </motion.div>
      </motion.div>
    </section>
  );
}