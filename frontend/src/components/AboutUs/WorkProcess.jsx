import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import icon11 from "../../assets/icon11.png";
import processArrow1 from "../../assets/process-arrow-img1.png";
import processArrow2 from "../../assets/process-arrow-img2.png";

gsap.registerPlugin(ScrollTrigger);

const WorkProcess = () => {
  const cardsRef = useRef([]);

  const processData = [
    {
      title: "Design Optimization",
      description:
        "Conduct thorough market research to understand audience behaviors and create effective design strategies.",
    },
    {
      title: "Development Implementation",
      description:
        "Transform ideas into scalable solutions through efficient development and modern technology implementation.",
    },
    {
      title: "Performance Analysis",
      description:
        "Analyze outcomes and continuously optimize performance for better business growth.",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-[#f8f4f6] overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ffffff,transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-6">
        
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[#d92d44] font-bold uppercase tracking-[2px] text-base md:text-lg mb-5">
            ● WORK PROCESS
          </p>

          <h2 className="text-[#04154a] text-[36px] md:text-[44px] lg:text-[50px] font-bold leading-[1.15]">
            Building Success, One Step
            <br />
            at a Time
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 relative">
          
          {processData.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative text-center group"
            >
              {/* Icon Circle */}
              <div
                className="
                  w-[90px]
                  h-[90px]
                  md:w-[100px]
                  md:h-[100px]
                  mx-auto
                  rounded-full
                  border
                  border-gray-300
                  bg-white
                  flex
                  items-center
                  justify-center
                  mb-6
                  transition-all
                  duration-300
                  group-hover:-translate-y-2
                "
              >
                <img
                  src={icon11}
                  alt="Process"
                  className="w-10 h-10 md:w-12 md:h-12"
                />
              </div>

              {/* Arrow 1 */}
              {index === 0 && (
                <img
                  src={processArrow1}
                  alt="Arrow"
                  className="
                    hidden lg:block
                    absolute
                    top-0
                    -right-24
                    xl:-right-28
                    w-[150px]
                    xl:w-[180px]
                    pointer-events-none
                  "
                />
              )}

              {/* Arrow 2 */}
              {index === 1 && (
                <img
                  src={processArrow2}
                  alt="Arrow"
                  className="
                    hidden lg:block
                    absolute
                    top-0
                    -right-24
                    xl:-right-28
                    w-[150px]
                    xl:w-[180px]
                    pointer-events-none
                  "
                />
              )}

              {/* Title */}
              <h3 className="text-[#04154a] text-[20px] md:text-[22px] font-medium mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-[15px] md:text-[16px] leading-8 max-w-[320px] mx-auto">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WorkProcess;