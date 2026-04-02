import React from "react";
import aiHand from "../../assets/ai-hand.jpg"; // use your image

const WhyChoose = () => {
  return (
    <section className="py-12 md:py-20 w-full">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">

        {/* MAIN CONTAINER - SAME AS SERVICES */}
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden 
          bg-gradient-to-r from-[#0b0f3a] via-[#1a0f4c] to-[#5b2d8c] 
          shadow-2xl w-full">

          <div className="grid lg:grid-cols-2">

            {/* LEFT IMAGE */}
            <div className="relative h-[350px] md:h-[500px]">
              <img
                src={aiHand}
                alt="AI"
                className="w-full h-full object-cover"
              />

              {/* FLOATING BOX */}
              <div className="absolute bottom-6 left-6 bg-white rounded-xl px-6 py-4 shadow-lg">
                <h3 className="text-3xl font-bold text-black">98%</h3>
                <p className="text-gray-600 text-sm">Successful Projects</p>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="p-6 sm:p-8 md:p-10 lg:p-12 text-white">

              {/* SMALL TITLE */}
              <p className="text-red-500 font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                WHY CHOOSE US
              </p>

              {/* HEADING */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Transform your online presence with AI Technology
              </h2>

              {/* DESCRIPTION */}
              <p className="text-white/70 text-sm sm:text-base mb-10 max-w-xl">
                To be a leading AI agency recognized for creating intelligent
                solutions that drive meaningful change across industries,
                fostering smarter decision making and enabling businesses to
                achieve their full potential.
              </p>

              {/* BOTTOM SECTION */}
              <div className="grid md:grid-cols-2 border-t border-white/10 pt-8">

                {/* LEFT SIDE */}
                <div className="flex flex-col justify-center border-r border-white/10 pr-6">
                  <h3 className="text-5xl sm:text-6xl font-bold 
                    bg-gradient-to-r from-purple-500 to-pink-500 
                    bg-clip-text text-transparent">
                    25+
                  </h3>
                  <p className="mt-3 text-white/80 text-lg">
                    Years Of Experience
                  </p>
                </div>

                {/* RIGHT SIDE */}
                <div className="pl-6 space-y-8 mt-8 md:mt-0">

                  {/* ITEM 1 */}
                  <div className="flex gap-4 group">
                    <div className="text-purple-400 text-3xl group-hover:scale-110 transition">
                      ⚙️
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">
                        Technology Integration
                      </h4>
                      <p className="text-white/60 text-sm">
                        We bring a team of experienced AI specialists, data scientists
                      </p>
                    </div>
                  </div>

                  {/* ITEM 2 */}
                  <div className="flex gap-4 group">
                    <div className="text-pink-400 text-3xl group-hover:scale-110 transition">
                      🧠
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">
                        Certified Experts
                      </h4>
                      <p className="text-white/60 text-sm">
                        We bring a team of experienced AI specialists, data scientists
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* FOOTER TEXT */}
              <p className="mt-10 text-white/70 text-sm">
                Anyone Can Make You Promise We Can Give You Proof
              </p>

            </div>
          </div>

          {/* SAME GLASS EFFECT */}
          <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;