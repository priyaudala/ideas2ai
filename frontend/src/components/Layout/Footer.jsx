import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#070B2D] px-6 pb-12">

      <div className="max-w-7xl mx-auto bg-[#0A1445] rounded-[60px] px-16 py-20 text-white">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-16">

          {/* Logo */}
          <div>

            <h1 className="text-4xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-purple-500">ai</span>
              Orbia
            </h1>

            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              Our operations are centered on data protection and security,
              guaranteeing adherence to international regulations such as GDPR
              and HIPAA.
            </p>

            <div className="flex gap-4">

              {[FaFacebookF,FaTwitter,FaLinkedinIn,FaPinterestP].map((Icon,i)=>(
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-purple-600 transition"
                >
                  <Icon size={14}/>
                </div>
              ))}

            </div>

          </div>


          {/* Quick Links */}

          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>

            <ul className="space-y-3 text-gray-300">

              {[
                "Home",
                "About Us",
                "Services",
                "Projects",
                "Latest Blog",
                "Contact",
              ].map((item,i)=>(
                <li key={i} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              ))}

            </ul>
          </div>


          {/* Services */}

          <div>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>

            <ul className="space-y-3 text-gray-300">

              {[
                "AI-Powered Solutions",
                "Custom Technology",
                "Customer Feedback",
                "Machine Learning",
                "Language Processing",
                "Computer Vision",
              ].map((item,i)=>(
                <li key={i} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              ))}

            </ul>
          </div>


          {/* Contact */}

          <div>
            <h3 className="text-xl font-semibold mb-6">Recent Post</h3>

            <ul className="space-y-6 text-gray-300">

              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-purple-500"/>
                <span>9550 Bolsa Ave #126, USA</span>
              </li>

              <li className="flex items-center gap-4">
                <FaEnvelope className="text-purple-500"/>
                <span>info@touron.com</span>
              </li>

              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-purple-500"/>
                <span>(+256) 214 203 215</span>
              </li>

            </ul>
          </div>

        </div>


        {/* Bottom */}

        <div className="border-t border-gray-700 mt-16 pt-8 flex justify-between flex-wrap text-sm text-gray-400">

          <p>
            © All Copyright 2025 by <span className="text-purple-500">Orbia</span>. All Rights Reserved.
          </p>

          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer">
              Terms & Conditions
            </span>

            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;