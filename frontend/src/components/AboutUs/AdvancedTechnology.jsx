import React from "react";
import technoBg from "../../assets/techno-bg.jpg";
import icon6 from "../../assets/icon6.png";
import icon7 from "../../assets/icon7.png";
import icon8 from "../../assets/icon8.png";
import icon9 from "../../assets/icon9.png";

const AdvancedTechnology = () => {
  const services = [
    {
      icon: icon6,
      title: "Tech Support",
      description:
        "To empower businesses with intelligent, scalable, impactful solutions that drive.",
    },
    {
      icon: icon7,
      title: "Robo Genius",
      description:
        "To empower businesses with intelligent, scalable, impactful solutions that drive.",
    },
    {
      icon: icon8,
      title: "Image Generation",
      description:
        "To empower businesses with intelligent, scalable, impactful solutions that drive.",
    },
    {
      icon: icon9,
      title: "Chatbots",
      description:
        "To empower businesses with intelligent, scalable, impactful solutions that drive.",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <div className="grid lg:grid-cols-[52%_52%] gap-8 lg:gap-10 items-start">

          {/* LEFT IMAGE */}
          <div className="relative">
            <img
              src={technoBg}
              alt="Advanced Technology"
              className="
                w-full
                h-[420px]
                sm:h-[500px]
                md:h-[650px]
                lg:h-[780px]
                object-cover
                rounded-[25px]
                md:rounded-[35px]
              "
            />

            {/* Floating Review Card */}
            <div
              className="
                absolute
                bottom-5
                left-5
                md:bottom-8
                md:left-8
                bg-white
                rounded-[30px]
                p-5
                md:p-7
                shadow-lg
                w-[220px]
                md:w-[260px]
              "
            >
              <h3 className="text-[#04154a] text-[34px] md:text-[48px] font-bold">
                54K
              </h3>

              <p className="text-[#04154a] text-lg md:text-2xl font-medium mt-1">
                Clients Reviews
              </p>

              <div className="flex items-center mt-5">
                <img
                  src="https://i.pravatar.cc/60?img=1"
                  alt=""
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
                <img
                  src="https://i.pravatar.cc/60?img=5"
                  alt=""
                  className="w-12 h-12 rounded-full border-2 border-white -ml-3"
                />
                <img
                  src="https://i.pravatar.cc/60?img=8"
                  alt=""
                  className="w-12 h-12 rounded-full border-2 border-white -ml-3"
                />
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>

            {/* Section Tag */}
            <p className="text-[#d92d44] font-bold uppercase tracking-[2px] text-base md:text-lg mb-4">
              ● ADVANCED TECHNOLOGY
            </p>

            {/* Heading */}
            <h2
  className="
    text-[#04154a]
    text-[32px]
    md:text-[42px]
    lg:text-[50px]
    font-bold
    leading-[1.15]
    mb-8
  "
            >
              The AI Intelligent Choice for
              <br />
              Business Growth
            </h2>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 gap-5">

              {services.map((item, index) => (
                <div
                  key={index}
                  className="
                    bg-white
                    rounded-[24px]
                    p-5
                    md:p-6
                    text-center
                    hover:-translate-y-2
                    transition-all
                    duration-300
                    shadow-sm
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      w-16
                      h-16
                      mx-auto
                      rounded-[18px]
                      bg-[#f5f5f5]
                      flex
                      items-center
                      justify-center
                      mb-5
                    "
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-8 h-8"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-[#04154a] text-[22px] font-semibold mb-4">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-[15px] md:text-[16px] leading-8">
                    {item.description}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AdvancedTechnology;