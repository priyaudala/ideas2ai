import React from "react";

const stats = [
  { number: "58k+", label: "Project Completed" },
  { number: "6k+", label: "Creative Minds" },
  { number: "36k+", label: "Happy Customers" },
  { number: "50K+", label: "Collaborative Team" },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        
        {stats.map((item, index) => (
          <div
            key={index}
            className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] mx-auto rounded-full border border-gray-300 flex flex-col items-center justify-center hover:shadow-lg transition"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
              {item.number}
            </h2>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default StatsSection;