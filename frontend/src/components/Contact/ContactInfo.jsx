import React from "react";
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";

const ContactInfo = () => {
  return (
    <section className="bg-[#f7f8fa] py-16">
      <div className="max-w-screen-xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>
          <p className="text-red-500 font-semibold mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            GET IN TOUCH
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1b3f] mb-4">
            Contact with Us For <br /> Your Any Help
          </h2>

          <p className="text-gray-500 mb-6">
            We’d love to hear from you! Whether you have questions, need
            more information, or are ready to discuss how we can help you.
          </p>

          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="font-semibold text-[#0b1b3f]">Call Center:</p>
              <p className="text-gray-500">+163 2173 22978</p>
              <p className="text-gray-500">+163 2173 22979</p>
            </div>

            <div>
              <p className="font-semibold text-[#0b1b3f]">Our Location:</p>
              <p className="text-gray-500">
                Apple Upper West Side,<br /> Brooklyn
              </p>
            </div>

            <div>
              <p className="font-semibold text-[#0b1b3f]">Our Social:</p>
              <div className="flex gap-3 mt-2">
                {[FiFacebook, FiTwitter, FiLinkedin, FiInstagram].map(
                  (Icon, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 flex items-center justify-center border rounded-full text-gray-600 hover:bg-purple-500 hover:text-white transition"
                    >
                      <Icon size={16} />
                    </div>
                  )
                )}
              </div>
            </div>

            <div>
              <p className="font-semibold text-[#0b1b3f]">Our Email:</p>
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
