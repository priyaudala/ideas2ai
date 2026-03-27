import React from "react";
import blog1 from "../../assets/blog-img1.jpg";
import blog2 from "../../assets/blog-img2.jpg";
import blog3 from "../../assets/blog-img3.jpg";

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      image: blog3,
      title: "Unlocking the Power of Data for Business Success.",
    },
    {
      id: 2,
      image: blog2,
      title: "The Future of Work Embracin Digital Transformation.",
    },
    {
      id: 3,
      image: blog1,
      title: "How AI is Revolutionizing Business and Industry Today",
    },
  ];

  return (
    <section className="bg-[#f5f7fb] py-[120px]">
      {/* Header */}
      <div className="text-center mb-[70px]">
        <p className="text-red-500 font-semibold tracking-wide text-sm">
          ● LATEST BLOG
        </p>

        <h2 className="text-[48px] font-semibold text-[#0f172a] mt-3">
          AI and Creativity Stories Tips.
        </h2>
      </div>

      {/* Blog Grid */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="group">
            {/* Image */}
            <img
              src={blog.image}
              alt=""
              className="w-full h-[260px] object-cover rounded-[20px]"
            />

            {/* Meta */}
            <div className="flex items-center gap-3 text-gray-500 text-sm mt-5">
              <span className="flex items-center gap-1">👤 ByAdmin</span>

              <span>|</span>

              <span className="flex items-center gap-1">💬 (03) Comments</span>
            </div>

            {/* Title */}
            <h3 className="text-[22px] font-semibold text-[#0f172a] mt-4 leading-snug">
              {blog.title}
            </h3>

            {/* Read More */}
            <a
              href="#"
              className="inline-block mt-5 text-[#0f172a] font-medium hover:text-purple-600 transition"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
