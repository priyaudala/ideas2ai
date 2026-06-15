import React from "react";

const BlogSidebar = () => {
  return (
    <div>
      <section className="pt-24 md:pt-28">
        <div className="relative w-full h-[300px] md:h-[350px] flex items-center justify-center text-center text-white overflow-hidden">
          {/* ✅ Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/bgimg.jpeg')" }}
          />

          {/* ✅ Dark Overlay (important for text visibility) */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Optional Glow */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,#ffffff,transparent_60%)]" />

          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-3">Blog Standard</h1>
            <p className="text-gray-300 text-sm md:text-base">
              Home <span className="mx-2">›</span> Blog Standard
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogSidebar;
