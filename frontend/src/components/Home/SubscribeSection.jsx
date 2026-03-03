import React from "react";
import { FaBell } from "react-icons/fa";

const SubscribeSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#0B0F3F] to-[#091030] px-6 py-28 text-white">

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <p className="text-red-500 font-semibold mb-4 tracking-wide">
              • GET STARTED
            </p>

            <h2 className="text-5xl font-semibold leading-tight mb-8">
              Join our AI-driven Creative Community!
            </h2>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1,2,3,4,5].map((i)=>(
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-white bg-gray-400"
                  />
                ))}
              </div>
              <p className="text-lg">4689 weekly subscribe</p>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="flex items-center bg-gray-200 rounded-full p-2">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-transparent px-4 py-3 text-black outline-none"
              />
              <button className="bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-3 rounded-full text-white font-semibold flex items-center gap-2">
                SUBSCRIBE <FaBell size={14} />
              </button>
            </div>

            <div className="flex items-center gap-3 mt-6 text-sm">
              <input type="checkbox" className="w-5 h-5" />
              <p>I Agree To The Terms, Privacy Policy.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;