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

  // 🔥 animation variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
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
    <section className="bg-[#f5f7fb] py-[120px] overflow-hidden">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-[70px]"
      >
        <p className="text-red-500 font-semibold tracking-wide text-sm">
          ● LATEST BLOG
        </p>

        <h2 className="text-[48px] font-semibold text-[#0f172a] mt-3">
          AI and Creativity Stories Tips.
        </h2>
      </motion.div>

      {/* Blog Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6"
      >
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            variants={item}
            whileHover={{ y: -10 }}
            className="group cursor-pointer"
          >
            {/* Image Wrapper */}
            <div className="overflow-hidden rounded-[20px] relative">
              
              {/* Image Zoom */}
              <motion.img
                src={blog.image}
                alt=""
                className="w-full h-[260px] object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
              />

              {/* Overlay Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
            </div>

            {/* Meta */}
            <div className="flex items-center gap-3 text-gray-500 text-sm mt-5">
              <span className="flex items-center gap-1">👤 ByAdmin</span>
              <span>|</span>
              <span className="flex items-center gap-1">💬 (03) Comments</span>
            </div>

            {/* Title */}
            <h3 className="text-[22px] font-semibold text-[#0f172a] mt-4 leading-snug transition group-hover:text-purple-600">
              {blog.title}
            </h3>

            {/* Read More */}
            <motion.a
              href="#"
              className="inline-block mt-5 text-[#0f172a] font-medium group-hover:text-purple-600 transition"
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