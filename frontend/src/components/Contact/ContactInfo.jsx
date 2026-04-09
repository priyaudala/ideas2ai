import React from "react";
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";

const ContactInfo = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div className="max-w-xl">

          {/* TAG */}
          <p className="text-red-500 font-semibold mb-4 flex items-center gap-2 text-sm tracking-wide">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            GET IN TOUCH
          </p>

          {/* HEADING */}
          <h2 className="text-[32px] md:text-[44px] leading-tight font-bold text-[#0b1b3f] mb-5">
            Contact with Us For Your <br /> Any Help
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-500 text-[15px] leading-7 mb-8">
            We’d love to hear from you! Whether you have questions, need more
            information, or are ready to discuss how we can help you.
          </p>

          {/* INFO GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10 text-sm">

            {/* CALL */}
            <div>
              <p className="font-semibold text-[#0b1b3f] mb-1">
                Call Center:
              </p>
              <p className="text-gray-500">+163 2173 22978</p>
              <p className="text-gray-500">+163 2173 22979</p>
            </div>

            {/* LOCATION */}
            <div>
              <p className="font-semibold text-[#0b1b3f] mb-1">
                Our Location:
              </p>
              <p className="text-gray-500 leading-6">
                Apple Upper West Side, Brooklyn
              </p>
            </div>

            {/* SOCIAL */}
            <div>
              <p className="font-semibold text-[#0b1b3f] mb-2">
                Our Social:
              </p>
              <div className="flex gap-3">
                {[FiFacebook, FiTwitter, FiLinkedin, FiInstagram].map(
                  (Icon, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full text-gray-500 hover:bg-purple-600 hover:text-white transition duration-300 cursor-pointer"
                    >
                      <Icon size={16} />
                    </div>
                  )
                )}
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <p className="font-semibold text-[#0b1b3f] mb-1">
                Our Email:
              </p>
              <p className="text-gray-500">evenzahelp@gmail.com</p>
              <p className="text-gray-500">support@info.com</p>
            </div>

          </div>
        </div>

        {/* RIGHT MAP */}
        <div className="rounded-2xl overflow-hidden shadow-md">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=New+York&output=embed"
            className="w-full h-[350px] md:h-[420px] border-0"
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default ContactInfo;
