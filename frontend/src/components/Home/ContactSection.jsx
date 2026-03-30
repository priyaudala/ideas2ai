import React from "react";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
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

  const text = "Welcome to the future of artificial intelligence!";

  return (
    <section className="bg-gradient-to-r from-[#12002f] via-[#16003a] to-[#020a3a] py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-[1200px] mx-auto 
                   grid grid-cols-1 lg:grid-cols-2 
                   gap-10 sm:gap-14 lg:gap-20 
                   px-4 sm:px-6 lg:px-8 items-center"
      >

        {/* LEFT FORM */}
        <motion.div
          variants={item}
          whileHover={{ y: -4 }}
          className="bg-[#f4f4f4] 
                     rounded-[20px] sm:rounded-[28px] 
                     p-6 sm:p-8 md:p-10 lg:p-12 
                     shadow-lg transition"
        >
          <h3 className="text-xl sm:text-2xl md:text-[28px] lg:text-[34px] 
                         font-semibold text-[#0f172a] mb-3 sm:mb-4">
            Get in touch
          </h3>

          <p className="text-gray-500 mb-6 sm:mb-8 md:mb-10 
                        text-sm sm:text-base leading-relaxed">
            Just fill out the form and our global experts will be in touch right
            away with package and price solution to help you!
          </p>

          <form className="space-y-4 sm:space-y-6">

            {/* INPUT ROW */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Your name"
                className="border border-gray-300 rounded-full px-5 sm:px-6 py-3 sm:py-4 w-full outline-none focus:border-purple-500 placeholder-gray-500 text-sm"
              />

              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 rounded-full px-5 sm:px-6 py-3 sm:py-4 w-full outline-none focus:border-purple-500 placeholder-gray-500 text-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Company Name"
                className="border border-gray-300 rounded-full px-5 sm:px-6 py-3 sm:py-4 w-full outline-none focus:border-purple-500 placeholder-gray-500 text-sm"
              />

              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 rounded-full px-5 sm:px-6 py-3 sm:py-4 w-full outline-none focus:border-purple-500 placeholder-gray-500 text-sm"
              />
            </div>

            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Subject"
              className="border border-gray-300 rounded-full px-5 sm:px-6 py-3 sm:py-4 w-full outline-none focus:border-purple-500 placeholder-gray-500 text-sm"
            />

            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              rows="4"
              placeholder="Message"
              className="border border-gray-300 rounded-[16px] sm:rounded-[20px] px-5 sm:px-6 py-3 sm:py-4 w-full outline-none resize-none focus:border-purple-500 placeholder-gray-500 text-sm"
            />

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto 
                         flex items-center justify-center gap-2 sm:gap-3 
                         bg-gradient-to-r from-purple-600 to-pink-500 
                         text-white px-6 sm:px-8 py-3 sm:py-4 
                         rounded-full font-semibold text-sm sm:text-base"
            >
              Send Message
              <ArrowRight size={16} />
            </motion.button>
          </form>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div variants={item} className="text-white text-center lg:text-left">

          <p className="text-red-400 font-semibold text-[10px] sm:text-sm tracking-wide mb-3 sm:mb-4">
            ● WE'RE HERE TO ANSWER ALL YOUR QUESTIONS
          </p>

          {/* TYPEWRITER */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[56px] 
                         font-semibold leading-tight mb-4 sm:mb-6">
            {text.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.02 }}
              >
                {char}
              </motion.span>
            ))}
          </h2>

          <p className="text-gray-300 max-w-[520px] mx-auto lg:mx-0 
                        mb-6 sm:mb-8 md:mb-10 
                        text-sm sm:text-base leading-relaxed">
            Artificial Intelligence refers to the development of computer
            systems that possess the ability to perform activities typically
            requiring human intelligence abilities!
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-10 sm:mb-14 justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-2 sm:gap-3 
                         bg-gradient-to-r from-purple-600 to-pink-500 
                         px-6 sm:px-8 py-3 sm:py-4 
                         rounded-full font-semibold text-sm sm:text-base"
            >
              Get In Touch
              <ArrowRight size={16} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-2 sm:gap-3 
                         border border-white/40 
                         px-6 sm:px-8 py-3 sm:py-4 
                         rounded-full text-sm sm:text-base"
            >
              Learn More
              <ArrowRight size={16} />
            </motion.button>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-6 sm:space-y-8">

            <motion.div className="border-t border-white/20 pt-6 sm:pt-8 flex items-center gap-4 sm:gap-5">
              <div className="bg-white/10 p-3 sm:p-4 rounded-xl">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-gray-300 text-sm">Feel Free to get in Touch</p>
                <p className="text-lg sm:text-xl md:text-[22px] font-semibold">
                  +990 123 456 789
                </p>
              </div>
            </motion.div>

            <motion.div className="border-t border-white/20 pt-6 sm:pt-8 flex items-center gap-4 sm:gap-5">
              <div className="bg-white/10 p-3 sm:p-4 rounded-xl">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-gray-300 text-sm">How can we Help you</p>
                <p className="text-lg sm:text-xl md:text-[22px] font-semibold">
                  info@example.com
                </p>
              </div>
            </motion.div>

          </div>

        </motion.div>
      </motion.div>
    </section>
  );
}