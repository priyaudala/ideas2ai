import React from "react";
import { motion } from "framer-motion";
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

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="bg-[#f5f7fb] py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20 px-4"
      >
        <p className="text-red-500 font-semibold tracking-wide text-[10px] sm:text-xs">
          ● LATEST BLOG
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] 
                       font-semibold text-[#0f172a] mt-3 leading-tight">
          AI and Creativity Stories Tips.
        </h2>
      </motion.div>

      {/* Blog Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-[1200px] mx-auto 
                   grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                   gap-6 sm:gap-8 lg:gap-10 
                   px-4 sm:px-6 lg:px-8"
      >
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            variants={item}
            whileHover={{ y: -8 }}
            className="group cursor-pointer"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-[16px] sm:rounded-[20px] relative">
              <motion.img
                src={blog.image}
                alt=""
                className="w-full 
                           h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] 
                           object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>

            {/* Meta */}
            <div className="flex items-center gap-2 sm:gap-3 
                            text-gray-500 text-[11px] sm:text-sm mt-4">
              <span>👤 ByAdmin</span>
              <span>|</span>
              <span>💬 (03) Comments</span>
            </div>

            {/* Title */}
            <h3 className="text-base sm:text-lg md:text-xl lg:text-[22px] 
                           font-semibold text-[#0f172a] 
                           mt-3 sm:mt-4 leading-snug 
                           transition group-hover:text-purple-600">
              {blog.title}
            </h3>

            {/* Read More */}
            <motion.a
              href="#"
              className="inline-block mt-4 sm:mt-5 
                         text-sm sm:text-base 
                         text-[#0f172a] font-medium 
                         group-hover:text-purple-600 transition"
              whileHover={{ x: 5 }}
            >
              Read More →
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}