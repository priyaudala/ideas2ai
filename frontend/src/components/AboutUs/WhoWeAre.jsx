import React, { useEffect, useRef } from "react";
import whoWeImg from "../../assets/who-we-img1.jpg";
import icon10 from "../../assets/icon10.png";
import icon11 from "../../assets/icon11.png";
import { CheckCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const WhoWeAre = () => {
  const leftRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      leftRef.current,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);
  return (
    <section className="py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">

        <div
  className="
  grid
  lg:grid-cols-[1fr_580px]
  gap-10
  md:gap-12
  lg:gap-16
  items-center
"
>

          {/* LEFT CONTENT */}
     <div ref={leftRef}>

            {/* Small Heading */}
            <p className="text-[#d92d44] font-bold uppercase tracking-[2px] text-lg mb-5">
              ● WHO WE ARE
            </p>

            {/* Main Heading */}
            <h2 className="text-[#04154a] text-[36px] md:text-[44px] lg:text-[50px] font-bold leading-[1.15] mb-6">
              Redefining Creativity
              <br />
              with the Power of AI.
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-[17px] md:text-[18px] leading-8 max-w-[650px] mb-10">
              We are a cutting-edge AI agency passionate about turning
              imagination into reality. Our mission is to empower businesses,
              creators, and innovators through intelligent AI solutions.
            </p>

            {/* Divider */}
            <div className="border-t border-gray-300 pt-10">

             {/* Feature Boxes */}
<div
  className="
  grid
  grid-cols-1
  md:grid-cols-[1fr_auto_1fr]
  items-center
  gap-6
  md:gap-8
  mb-10
"
>

  {/* Box 1 */}
  <div className="flex items-center gap-4">

    <div className="w-16 h-16 rounded-[18px] bg-[#f8e8ec] flex items-center justify-center shrink-0">
      <img
        src={icon10}
        alt="AI Innovation"
        className="w-8 h-8"
      />
    </div>

    <div>
      <h3 className="text-[#04154a] text-[20px] font-bold">
        AI-Powered Innovation
      </h3>
    </div>

  </div>

  {/* Middle Line */}
  <div className="hidden md:block w-px h-20 bg-gray-300"></div>

  {/* Box 2 */}
  <div className="flex items-center gap-4">

    <div className="w-16 h-16 rounded-[18px] bg-[#f8e8ec] flex items-center justify-center shrink-0">
      <img
        src={icon11}
        alt="Limitless Styles"
        className="w-8 h-8"
      />
    </div>

    <div>
      <h3 className="text-[#04154a] text-[20px] font-bold">
        Limitless Styles
      </h3>
    </div>

  </div>

</div>

              {/* Bullet Points */}
              <div className="space-y-5">

                <div className="flex items-center gap-4">
                  <CheckCircle
                    size={22}
                    className="text-purple-600 fill-purple-600 text-white shrink-0"
                  />

                  <span className="text-[#04154a] text-[17px]">
                    Harnessing advanced models for unmatched creativity.
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <CheckCircle
                    size={22}
                    className="text-purple-600 fill-purple-600 text-white shrink-0"
                  />

                  <span className="text-[#04154a] text-[17px]">
                    From ultra-realistic to artistic, fantasy, and futuristic.
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <CheckCircle
                    size={22}
                    className="text-purple-600 fill-purple-600 text-white shrink-0"
                  />

                  <span className="text-[#04154a] text-[17px]">
                    Generate visuals in seconds, for individuals or enterprises.
                  </span>
                </div>

              </div>

              {/* Button */}
              <button
                className="
                  mt-12
                  bg-gradient-to-r
                  from-purple-600
                  to-pink-500
                  text-white
                  px-8
                  py-4
                  rounded-full
                  text-lg
                  font-semibold
                  flex
                  items-center
                  gap-3
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                Get Started Now
                <span>→</span>
              </button>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div
  ref={imageRef}
  className="flex justify-center lg:justify-end"
>
            <img
              src={whoWeImg}
              alt="Who We Are"
              className="
w-full
max-w-[320px]
sm:max-w-[420px]
md:max-w-[500px]
lg:max-w-[580px]
h-[300px]
sm:h-[380px]
md:h-[480px]
lg:h-[580px]
object-cover
rounded-[25px]
sm:rounded-[30px]
lg:rounded-[40px]
shadow-lg
"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;