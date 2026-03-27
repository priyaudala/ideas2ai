import React from "react";
import { FaBell } from "react-icons/fa";

const SubscribeSection = () => {
  return (
    <section className="bg-[#070B2D] pt-32 pb-36 px-6 text-white relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div>
          <p className="text-red-500 font-semibold tracking-widest mb-5">
            ● GET STARTED
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold leading-tight mb-10">
            Join our AI-driven Creative Community!
          </h2>

          <div className="flex items-center gap-5">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i}`}
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
              ))}
            </div>

            <p className="text-lg text-gray-300">4689 weekly subscribe</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <div className="flex items-center bg-gray-200 rounded-full p-2 max-w-xl ml-auto">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 bg-transparent px-6 py-3 text-gray-700 outline-none"
            />

            <button className="bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-3 rounded-full text-white font-semibold flex items-center gap-2">
              SUBSCRIBE <FaBell size={14} />
            </button>
          </div>

          <div className="flex items-center gap-3 mt-6 justify-end text-sm text-gray-300">
            <input type="radio" className="w-5 h-5 border-white" />

            <p>I Agree To The Terms, Privacy Policy.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
