import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

import img1 from "../../assets/project-img1.jpg";
import img2 from "../../assets/project-img2.jpg";
import img3 from "../../assets/project-img3.jpg";

const OurProducts = () => {
  const [active, setActive] = useState(null);

  const toggleProject = (id) => {
    setActive((prev) => (prev === id ? null : id));
  };

  const projects = [
    {
      id: 1,
      name: "Deep Vision",
      title: "Autonomous vehicle navigation with advanced AI",
      img: img1,
      desc: "We provide customized solutions tailored to the specific needs and goals of their clients.",
    },
    {
      id: 2,
      name: "AI Verse",
      title: "Natural language processing powered AI system",
      img: img2,
      desc: "We provide customized solutions tailored to the specific needs and goals of their clients.",
    },
    {
      id: 3,
      name: "Predict AI",
      title: "Predictive analytics for enterprise growth",
      img: img3,
      desc: "We provide customized solutions tailored to the specific needs and goals of their clients.",
    },
  ];

  return (
    <section className="w-full bg-[#f7f8fa]">

      {/* ================= PROJECT SECTION ================= */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-24">

        <div className="grid lg:grid-cols-[0.8fr_1.4fr] gap-8">

          {/* LEFT */}
          <div>
            <p className="text-red-500 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              OUR PROJECTS & CASE STUDIES
            </p>
          </div>

          {/* RIGHT */}
          <div>

            <h2 className="text-[#0b1b3f] text-3xl md:text-5xl font-bold leading-tight">
              Real-World Applications of AI Technology That Drive Impact
            </h2>

            <div className="border-t border-gray-200 my-6"></div>

            <div className="space-y-6">

              {projects.map((p) => (
                <div key={p.id} className="border-b border-gray-300 pb-6">

                  <p className="text-red-500 font-medium mb-2">
                    {p.name}
                  </p>

                  <div className="flex items-center justify-between gap-4">

                    <h3 className="text-[#0b1b3f] text-2xl md:text-3xl font-semibold">
                      {p.title}
                    </h3>

                    <button
                      onClick={() => toggleProject(p.id)}
                      className={`w-10 h-10 flex items-center justify-center rounded-full border transition
                      ${active === p.id ? "bg-purple-100 rotate-90" : "hover:bg-purple-50"}`}
                    >
                      <FiArrowRight />
                    </button>

                  </div>

                  <p className="text-gray-500 text-sm mt-2 max-w-md">
                    {p.desc}
                  </p>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      active === p.id
                        ? "max-h-[500px] opacity-100 mt-4"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <img
                      src={p.img}
                      className="w-full rounded-xl shadow-md"
                      alt=""
                    />

                    <button className="mt-4 text-purple-600 font-semibold hover:underline">
                      View Details →
                    </button>
                  </div>

                </div>
              ))}

            </div>

          </div>
        </div>
      </div>

      {/* ================= SCROLLING TEXT (FIXED PERFECT LOOP) ================= */}
      <div className="w-full overflow-hidden py-12">

        <div className="flex w-max animate-marquee items-center">

          {/* FIRST SET */}
          <div className="flex items-center gap-24 pr-24">
           <div className="text-6xl text-yellow-500 font-bold">⭐</div>
            <div className="text-4xl md:text-6xl font-bold text-gray-900 whitespace-nowrap">
              Generate With Ease
            </div>
              <div className="text-6xl text-yellow-500 font-bold">⭐</div>
            <div className="text-4xl md:text-6xl font-bold text-gray-900 whitespace-nowrap">
              Content Generator
            </div>
            <div className="text-6xl text-yellow-500 font-bold">⭐</div>
            <div className="text-4xl md:text-6xl font-bold text-gray-900 whitespace-nowrap">
              AI Technology
            </div>

            <div className="text-6xl text-yellow-500 font-bold">⭐</div>

          </div>

          {/* SECOND SET (DUPLICATE FOR SMOOTH LOOP) */}
          <div className="flex items-center gap-24 pr-24">

            <div className="text-4xl md:text-6xl font-bold text-gray-900 whitespace-nowrap">
              Generate With Ease
            </div>
             <div className="text-6xl text-yellow-500 font-bold">⭐</div>

            <div className="text-4xl md:text-6xl font-bold text-gray-900 whitespace-nowrap">
              Content Generator
            </div>
             <div className="text-6xl text-yellow-500 font-bold">⭐</div>

            <div className="text-4xl md:text-6xl font-bold text-gray-900 whitespace-nowrap">
              AI Technology
            </div>

            <div className="text-6xl text-yellow-500 font-bold">⭐</div>

          </div>

        </div>
      </div>

      {/* ================= ANIMATION ================= */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            animation: marquee 6s linear infinite;
          }
        `}
      </style>

    </section>
  );
};

export default OurProducts;