import React from "react";
import { motion } from "framer-motion";
import robotImg from "../../assets/roboImg.jpg"; // 👈 your robot image

const ContactForm = () => {
  return (
    <section className="bg-white py-20 relative overflow-hidden">

      <div className="max-w-screen-xl mx-auto px-4">

        {/* Main Container */}
        <div className="grid md:grid-cols-2 bg-[#f7f8fa] rounded-3xl shadow-xl overflow-hidden border border-gray-100">

          {/* LEFT SIDE - ROBOT IMAGE */}
          <div className="relative bg-gradient-to-br from-gray-200 to-gray-100 flex items-end justify-center">
            <img
              src={robotImg}
              alt="robot"
              className="w-full max-w-[400px] object-contain"
            />
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="p-6 md:p-12">

            <p className="font-semibold text-sm mb-2">
              SEND A MESSAGE
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1b3f] mb-10">
              Need any help?
            </h2>

            <form className="grid md:grid-cols-2 gap-6">

              {/* Name */}
              <input
                type="text"
                placeholder="Your Name"
                className="p-4 rounded-xl border border-gray-300 bg-white outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Your Email"
                className="p-4 rounded-xl border border-gray-300 bg-white outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
              />

              {/* Website */}
              <input
                type="text"
                placeholder="Website"
                className="md:col-span-2 p-4 rounded-xl border border-gray-300 bg-white outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
              />

              {/* Message */}
              <textarea
                rows="5"
                placeholder="Your Message"
                className="md:col-span-2 p-4 rounded-xl border border-gray-300 bg-white outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 resize-none"
              ></textarea>

              {/* Button */}
              <div className="md:col-span-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-3 rounded-full font-semibold shadow-lg group"
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