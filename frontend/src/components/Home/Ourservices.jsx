import React from "react";

import aiImg from "../../assets/ai.png";
import mlImg from "../../assets/ml.png";
import visionImg from "../../assets/vision.png";
import chatImg from "../../assets/chatbot.png";

const services = [
  {
    title: "AI Strategy",
    desc: "Successful AI adoption starts with strategy. We work with you to assess opportunities, design an AI roadmap, and ensure smooth integration results.",
    img: aiImg,
  },
  {
    title: "Machine Learning",
    desc: "Harness predictive models and advanced analytics to make smarter decisions. Assess opportunities and ensure integration results.",
    img: mlImg,
  },
  {
    title: "Computer Vision",
    desc: "Streamline operations and boost productivity with AI-driven automation. Design AI roadmap and ensure seamless integration.",
    img: visionImg,
  },
  {
    title: "NLP & Chatbots",
    desc: "Improve customer interaction with intelligent chatbots and NLP systems. Automate support and enhance engagement.",
    img: chatImg,
  },
];

const Services = () => {
  return (
    <section className="py-12 md:py-20 w-full">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Main Card Container */}
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-r from-[#0b0f3a] via-[#1a0f4c] to-[#5b2d8c] shadow-2xl w-full">
          <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12">
            {/* HEADINGS */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-500 mb-3 md:mb-4">
                Our Best <br className="block sm:hidden" />
                <span className="whitespace-nowrap">Services</span>
              </h2>

              <p className="text-white/70 text-sm sm:text-base mt-3 md:mt-4 max-w-xl mx-auto">
                Advanced Features Tailored to Your Services
              </p>
            </div>

            {/* CARDS GRID with Light Separator Lines */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((item, index) => (
                <div
                  key={index}
                  className={`
                    group relative flex flex-col items-center text-center p-6 sm:p-8 
                    transition-all duration-500 cursor-pointer 
                    min-h-[360px] sm:min-h-[420px] md:min-h-[500px]
                    ${index !== services.length - 1 ? "border-r border-white/10" : ""}
                    ${index === 0 ? "rounded-t-2xl sm:rounded-l-2xl" : ""}
                    ${index === services.length - 1 ? "rounded-b-2xl sm:rounded-r-2xl" : ""}
                    ${index % 2 === 0 && index !== 0 ? "sm:border-t sm:border-white/10 lg:border-t-0" : ""}
                    ${index % 2 === 1 && index !== services.length - 1 ? "sm:border-t sm:border-white/10 lg:border-t-0" : ""}
                    hover:bg-white/5
                  `}
                >
                  {/* Hover Background Effect */}
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center justify-between h-full w-full">
                    {/* DESCRIPTION */}
                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-[240px] sm:max-w-[260px] md:max-w-[280px] group-hover:text-white/80 transition-colors duration-300">
                      {item.desc}
                    </p>

                    {/* IMAGE CENTER - With Animation */}
                    <div className="mb-10 sm:mb-12 md:mb-14 group-hover:scale-110 transition-transform duration-500">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain opacity-90 group-hover:opacity-100 transition-all duration-300"
                      />
                    </div>

                    {/* TITLE */}
                    <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mt-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                      {item.title}
                    </h3>

                    {/* Decorative Line - Appears on Hover */}
                    <div className="w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mt-2 sm:mt-3 group-hover:w-10 sm:group-hover:w-12 transition-all duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Glass Effect Overlay */}
          <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
