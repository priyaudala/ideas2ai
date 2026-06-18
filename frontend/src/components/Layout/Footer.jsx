import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowUp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

const Footer = () => {
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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#070B2D] px-4 sm:px-6 pb-10 sm:pb-12 relative">
      {/* Up Arrow Button - positioned at right side outside the main div */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.1,
          y: -5,
          boxShadow: "0 0 20px rgba(139, 92, 246, 0.6)",
        }}
        whileTap={{ scale: 0.95 }}
        className="
          absolute 
          bottom-24 
          right-4 
          sm:right-8 
          lg:right-12
          bg-purple-600 
          hover:bg-purple-700
          text-white 
          rounded-full 
          w-12 h-12 
          flex items-center justify-center
          shadow-lg
          transition-all
          duration-300
          cursor-pointer
          border-2
          border-purple-400
          z-20
        "
        aria-label="Scroll to top"
      >
        <FaArrowUp size={20} />
      </motion.button>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="
          max-w-7xl mx-auto 
          bg-[#0A1445] 
          rounded-[30px] sm:rounded-[40px] lg:rounded-[60px] 
          px-6 sm:px-10 lg:px-16 
          py-12 sm:py-16 lg:py-20 
          text-white
        "
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-14 lg:gap-16">
          <motion.div
            variants={item}
            className="flex flex-col items-center sm:items-start"
          >
            <img
              src={logo}
              alt="Ideas2AI Logo"
              className="w-40 sm:w-44 md:w-48 object-contain mb-3 -translate-y-1.5"
            />

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed mb-6 sm:mb-8 max-w-sm text-center sm:text-left">
              Our operations are centered on data protection and security,
              guaranteeing adherence to international regulations such as GDPR
              and HIPAA.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start gap-3 sm:gap-4">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP].map(
                (Icon, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-purple-600 transition"
                  >
                    <Icon size={14} />
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={item} className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
              Quick Links
            </h3>

            <ul className="space-y-2 sm:space-y-3 text-gray-300">
              {[
                "Home",
                "About Us",
                "Services",
                "Projects",
                "Latest Blog",
                "Contact",
              ].map((item, i) => (
                <li
                  key={i}
                  className="cursor-pointer relative group w-fit mx-auto sm:mx-0"
                >
                  <span className="group-hover:text-white transition">
                    {item}
                  </span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 group-hover:w-full transition-all duration-300"></span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={item} className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
              Our Services
            </h3>

            <ul className="space-y-2 sm:space-y-3 text-gray-300">
              {[
                "AI-Powered Solutions",
                "Custom Technology",
                "Customer Feedback",
                "Machine Learning",
                "Language Processing",
                "Computer Vision",
              ].map((item, i) => (
                <li
                  key={i}
                  className="cursor-pointer relative group w-fit mx-auto sm:mx-0"
                >
                  <span className="group-hover:text-white transition">
                    {item}
                  </span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 group-hover:w-full transition-all duration-300"></span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={item} className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
              Contact Info
            </h3>

            <ul className="space-y-4 sm:space-y-6 text-gray-300">
              {[
                {
                  icon: FaMapMarkerAlt,
                  text: "9550 Bolsa Ave #126, USA",
                },
                {
                  icon: FaEnvelope,
                  text: "info@touron.com",
                },
                {
                  icon: FaPhoneAlt,
                  text: "(+256) 214 203 215",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={i}
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4"
                  >
                    <Icon className="text-purple-500" />
                    <span>{item.text}</span>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          variants={item}
          className="
            border-t border-gray-700 
            mt-10 sm:mt-14 lg:mt-16 
            pt-6 sm:pt-8 
            flex flex-col md:flex-row 
            items-center justify-between 
            gap-4 text-sm text-gray-400 text-center md:text-left
          "
        >
          <p>
            © All Copyright 2025 by{" "}
            <span className="text-purple-500">Orbia</span>. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-8">
            <span className="hover:text-white cursor-pointer">
              Terms & Conditions
            </span>
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
