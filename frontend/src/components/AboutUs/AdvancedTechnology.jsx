import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import technoBg from "../../assets/techno-bg.jpg";
import icon6 from "../../assets/icon6.png";
import icon7 from "../../assets/icon7.png";
import icon8 from "../../assets/icon8.png";
import icon9 from "../../assets/icon9.png";

gsap.registerPlugin(ScrollTrigger);

const AdvancedTechnology = () => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const cardsRef = useRef([]);
  const floatCardRef = useRef(null);

  useEffect(() => {
    // LEFT IMAGE ANIMATION
    gsap.fromTo(
      imageRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
        },
      }
    );

    // RIGHT CONTENT ANIMATION
    gsap.fromTo(
      contentRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
        },
      }
    );

    // CARDS ANIMATION
    gsap.fromTo(
      cardsRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 85%",
        },
      }
    );

    // FLOATING CARD ENTRY ANIMATION
    gsap.fromTo(
      floatCardRef.current,
      {
        y: 30,
        opacity: 0,
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
      }
    );

    // CONTINUOUS FLOATING EFFECT
    gsap.to(floatCardRef.current, {
      y: -8,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

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
    <section className="py-16 md:py-20 lg:py-24 bg-[#f5f5f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <div className="grid lg:grid-cols-[52%_48%] gap-8 lg:gap-10 items-start">

          {/* LEFT IMAGE */}
          <div ref={imageRef} className="relative">
            <img
              src={technoBg}
              alt="Advanced Technology"
              className="
                w-full
                h-[280px]
                sm:h-[400px]
                md:h-[550px]
                lg:h-[780px]
                object-cover
                rounded-[25px]
                md:rounded-[35px]
              "
            />

            {/* FLOATING CARD */}
            <div
              ref={floatCardRef}
              className="
                absolute
                bottom-2 left-2
                md:bottom-4 md:left-4
                bg-white
                rounded-[16px]
                p-2 md:p-3
                shadow-md
                w-[140px] sm:w-[150px] md:w-[160px]
              "
            >
              <h3 className="text-[#04154a] text-[22px] sm:text-[26px] md:text-[32px] font-bold leading-none">
                54K
              </h3>

              <p className="text-[#04154a] text-[10px] sm:text-xs md:text-sm font-medium mt-1">
                Clients Reviews
              </p>

              <div className="flex items-center mt-2">
                <img
                  src="https://i.pravatar.cc/60?img=1"
                  className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-white"
                />
                <img
                  src="https://i.pravatar.cc/60?img=5"
                  className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-white -ml-2"
                />
                <img
                  src="https://i.pravatar.cc/60?img=8"
                  className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-white -ml-2"
                />
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div ref={contentRef} className="lg:pl-4 xl:pl-8 mt-10 lg:mt-0">

            <p className="text-[#d92d44] font-bold uppercase tracking-[2px] text-base md:text-lg mb-4">
              ● ADVANCED TECHNOLOGY
            </p>

            <h2 className="text-[#04154a] text-[24px] sm:text-[28px] md:text-[34px] lg:text-[42px] font-bold leading-[1.2] mb-8 max-w-full">
              The AI Intelligent Choice for
              <br />
              Business Growth
            </h2>

            {/* CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              {services.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="
                    group
                    bg-white
                    rounded-[20px]
                    p-4 md:p-6
                    text-center
                    hover:-translate-y-2
                    transition-all
                    duration-300
                    shadow-sm
                  "
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 mx-auto rounded-[18px] bg-[#f5f5f5] flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#d92d44]">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-7 h-7 md:w-8 md:h-8 group-hover:brightness-0 group-hover:invert"
                    />
                  </div>

                  <h3 className="text-[#04154a] text-[18px] md:text-[22px] font-semibold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-[13px] md:text-[15px] leading-6 md:leading-7">
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