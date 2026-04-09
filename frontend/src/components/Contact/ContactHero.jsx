import React from "react";

const ContactHero = () => {
  return (
    <section className="pt-24 md:pt-28">
      <div className="relative w-full h-[300px] md:h-[350px] flex items-center justify-center text-center text-white overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f3a] via-[#1a0f4c] to-[#5b2d8c]" />

        {/* Overlay Glow */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,#ffffff,transparent_60%)]" />

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            Contact Us
          </h1>
          <p className="text-gray-300 text-sm md:text-base">
            Home <span className="mx-2">›</span> Contact Us
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
