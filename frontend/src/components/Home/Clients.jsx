import React from "react";

import clutch from "../../assets/clutch.png";
import trustpilot from "../../assets/trustpilot.png";
import google from "../../assets/google.png";
import airbnb from "../../assets/airbnb.png";
import yelp from "../../assets/yelp.png";

const Clients = () => {
  // duplicate array for smooth infinite loop
  const clients = [
    { img: clutch, name: "Clutch" },
    { img: trustpilot, name: "Trustpilot" },
    { img: google, name: "Google" },
    { img: airbnb, name: "Airbnb" },
    { img: yelp, name: "Yelp" },
    { img: clutch, name: "Clutch" },
    { img: trustpilot, name: "Trustpilot" },
    { img: google, name: "Google" },
  ];

  return (
    <section className="py-10 md:py-14 bg-[#f5f6f7] overflow-hidden">
      <div className="w-full px-4 md:px-8 lg:px-12">
        {/* MARQUEE WRAPPER */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-scroll gap-6">
            {clients.map((item, index) => (
              <div
                key={index}
                className="min-w-[180px] sm:min-w-[220px] bg-white rounded-2xl border border-gray-200 
                flex flex-col items-center justify-center 
                py-8 px-6 text-center shadow-sm"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-10 md:h-12 object-contain mb-4"
                />

                <p className="text-sm md:text-base text-gray-500">
                  <span className="text-purple-600 font-semibold">458+</span>{" "}
                  Airbnb 5 star reviews
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ANIMATION CSS */}
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 18s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Clients;
