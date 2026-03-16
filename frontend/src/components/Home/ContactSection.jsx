import React from "react";
import { Phone, Mail, ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-gradient-to-r from-[#12002f] via-[#16003a] to-[#020a3a] py-28">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-20 px-6 items-center">

        {/* LEFT FORM */}
        <div className="bg-[#f4f4f4] rounded-[28px] p-12">

          <h3 className="text-[34px] font-semibold text-[#0f172a] mb-4">
            Get in touch
          </h3>

          <p className="text-gray-500 mb-10 leading-relaxed">
            Just fill out the form and our global experts will be in touch
            right away with package and price solution to help you!
          </p>

          <form className="space-y-6">

            {/* ROW 1 */}
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your name"
                className="border border-gray-300 rounded-full px-6 py-4 w-full outline-none focus:border-purple-500 placeholder-gray-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 rounded-full px-6 py-4 w-full outline-none focus:border-purple-500 placeholder-gray-500"
              />
            </div>

            {/* ROW 2 */}
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Company Name"
                className="border border-gray-300 rounded-full px-6 py-4 w-full outline-none focus:border-purple-500 placeholder-gray-500"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 rounded-full px-6 py-4 w-full outline-none focus:border-purple-500 placeholder-gray-500"
              />
            </div>

            {/* SUBJECT */}
            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-300 rounded-full px-6 py-4 w-full outline-none focus:border-purple-500 placeholder-gray-500"
            />

            {/* MESSAGE */}
            <textarea
              rows="4"
              placeholder="Message"
              className="border border-gray-300 rounded-[20px] px-6 py-4 w-full outline-none resize-none focus:border-purple-500 placeholder-gray-500"
            />

            {/* BUTTON */}
            <button className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition">
              Send Message
              <ArrowRight size={18} />
            </button>

          </form>
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-white">

          <p className="text-red-400 font-semibold text-sm tracking-wide mb-4">
            ● WE'RE HERE TO ANSWER ALL YOUR QUESTIONS
          </p>

          <h2 className="text-[56px] font-semibold leading-[1.15] mb-6">
            Welcome to the future of
            <br />
            artificial intelligence!
          </h2>

          <p className="text-gray-300 max-w-[520px] mb-10 leading-relaxed">
            Artificial Intelligence refers to the development of computer
            systems that possess the ability to perform activities typically
            requiring human intelligence abilities!
          </p>

          {/* BUTTONS */}
          <div className="flex gap-6 mb-14">

            <button className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-4 rounded-full font-semibold">
              Get In Touch
              <ArrowRight size={18} />
            </button>

            <button className="flex items-center gap-3 border border-white/40 px-8 py-4 rounded-full">
              Learn More
              <ArrowRight size={18} />
            </button>

          </div>

          {/* CONTACT INFO */}

          <div className="border-t border-white/20 pt-8 flex items-center gap-5">

            <div className="bg-white/10 p-4 rounded-xl">
              <Phone size={20} />
            </div>

            <div>
              <p className="text-gray-300">Feel Free to get in Touch</p>
              <p className="text-[24px] font-semibold">+990 123 456 789</p>
            </div>

          </div>

          <div className="border-t border-white/20 pt-8 mt-8 flex items-center gap-5">

            <div className="bg-white/10 p-4 rounded-xl">
              <Mail size={20} />
            </div>

            <div>
              <p className="text-gray-300">How can we Help you</p>
              <p className="text-[24px] font-semibold">info@example.com</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}