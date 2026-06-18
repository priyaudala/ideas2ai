// import React from "react";

// const stats = [
//   { number: "58k+", label: "Project Completed" },
//   { number: "6k+", label: "Creative Minds" },
//   { number: "36k+", label: "Happy Customers" },
//   { number: "50K+", label: "Collaborative Team" },
// ];

// const StatsSection = () => {
//   return (
//     <section className="py-20 bg-gray-100">
//       <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        
//         {stats.map((item, index) => (
//           <div
//             key={index}
//             className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] mx-auto rounded-full border border-gray-300 flex flex-col items-center justify-center hover:shadow-lg transition"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
//               {item.number}
//             </h2>
//             <p className="text-gray-600 mt-2 text-sm md:text-base">
//               {item.label}
//             </p>
//           </div>
//         ))}

//       </div>
//     </section>
//   );
// };

// export default StatsSection;

import React from "react";

const stats = [
  { number: "58k+", label: "Project Completed" },
  { number: "6k+", label: "Creative Minds" },
  { number: "36k+", label: "Happy Customers" },
  { number: "50K+", label: "Collaborative Team" },
];

const StatsSection = () => {
  return (
    <section className="py-14 sm:py-16 md:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">

          {stats.map((item, index) => (
            <div
              key={index}
              className="
                w-[130px] h-[130px]
                sm:w-[150px] sm:h-[150px]
                md:w-[180px] md:h-[180px]
                lg:w-[210px] lg:h-[210px]
                xl:w-[230px] xl:h-[230px]
                mx-auto
                rounded-full
                border border-gray-300
                flex flex-col items-center justify-center
                bg-white
                transition-all duration-300
                hover:shadow-xl hover:scale-105
              "
            >
              <h2 className="
                text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
                font-bold text-blue-900 leading-none
              ">
                {item.number}
              </h2>

              <p className="
                text-gray-600 mt-1 sm:mt-2
                text-[10px] sm:text-xs md:text-sm lg:text-base
              ">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default StatsSection;