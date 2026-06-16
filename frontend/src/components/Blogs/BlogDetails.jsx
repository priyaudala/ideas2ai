import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { blogs } from "../../data/blogs";

import {
  User,
  MessageCircle,
  Search,
  ArrowRight,
  CalendarDays,
  Tag,
  Reply,
} from "lucide-react";

import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa6";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pageRef = useRef(null);

  const blog = blogs.find((item) => item.id === Number(id));
  if (!blog) {
    return (
      <div className="flex items-center justify-center h-screen text-xl text-slate-600">
        Blog not found
      </div>
    );
  }

  const recentPosts = blogs.filter((item) => item.id !== blog.id);

  useEffect(() => {
    if (!pageRef.current) return;

    gsap.fromTo(
      ".detail-animation",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      },
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  const categories = [...new Set(blogs.map((blog) => blog.category))];

  const popularTags = [...new Set(blogs.flatMap((blog) => blog.tags))];
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <div className="bg-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="pt-20 md:pt-24 lg:pt-28">
        <div className="relative w-full h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px] flex items-center justify-center overflow-hidden">
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/bgimg.jpeg')",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Glow */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,#ffffff,transparent_60%)]" />

          {/* Content */}
          <div className="relative z-10 text-center px-4">
            <h1
              className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              text-white
              mb-4
            "
            >
              Blog Details
            </h1>

            <p
              className="
              text-sm
              sm:text-base
              text-gray-300
            "
            >
              Home
              <span className="mx-2">›</span>
              Blog Details
            </p>
          </div>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section
        ref={pageRef}
        className="
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        py-10
        sm:py-12
        md:py-16
      "
      >
        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-12
          gap-8
          lg:gap-10
        "
        >
          {/* LEFT CONTENT */}
          <div className="lg:col-span-8 min-w-0">
            {/* FEATURE IMAGE */}
            <motion.div
              className="
              detail-animation
              overflow-hidden
              rounded-[24px]
              md:rounded-[32px]
              mb-8
            "
              whileHover={{ scale: 1.01 }}
            >
              <motion.img
                src={blog.image}
                alt={blog.title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="
                w-full
                h-[220px]
                sm:h-[300px]
                md:h-[400px]
                lg:h-[500px]
                object-cover
              "
              />
            </motion.div>

            {/* META */}
            <div
              className="
              detail-animation
              flex
              flex-wrap
              gap-4
              md:gap-6
              text-sm
              md:text-base
              text-slate-500
              mb-6
            "
            >
              <div className="flex items-center gap-2">
                <User size={18} className="text-violet-500" />

                <span>By {blog.author}</span>
              </div>

              <div className="flex items-center gap-2">
                <Tag size={18} className="text-violet-500" />

                <span>{blog.category}</span>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle size={18} className="text-violet-500" />

                <span>Comments ({blog.comments})</span>
              </div>
            </div>

            {/* TITLE */}
            <h1
              className="
              detail-animation
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              font-bold
              text-slate-900
              leading-tight
              mb-6
              md:mb-8
            "
            >
              {blog.title}
            </h1>

            {/* CONTENT */}
            <div
              className="
              detail-animation
              space-y-6
              md:space-y-8
              text-[15px]
              sm:text-[16px]
              md:text-[18px]
              leading-8
              md:leading-10
              text-slate-600
            "
            >
              {blog.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* QUOTE BOX */}
            <div
              className="
              detail-animation
              my-10
              md:my-12
              bg-slate-100
              rounded-[24px]
              p-6
              sm:p-8
              md:p-10
            "
            >
              <p
                className="
                text-slate-600
                text-[15px]
                sm:text-base
                md:text-lg
                leading-8
                md:leading-10
                mb-8
              "
              >
                {blog.quote}
              </p>

              <div
                className="
                flex
                flex-wrap
                items-center
                gap-4
              "
              >
                <span
                  className="
                  w-12
                  sm:w-16
                  h-[2px]
                  bg-violet-500
                "
                />

                <span
                  className="
                  text-xl
                  sm:text-2xl
                  md:text-3xl
                  font-semibold
                  text-violet-600
                "
                >
                  Martin & Michiel
                </span>
              </div>
            </div>
            {/* Gallery Images */}
            <div className="detail-animation grid md:grid-cols-2 gap-8 mb-10">
              {blog.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  className="overflow-hidden rounded-[32px]"
                >
                  <motion.img
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.5 }}
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-[260px] object-cover"
                  />
                </motion.div>
              ))}
            </div>

            <div className="detail-animation">
              <p className="text-[18px] leading-10 text-slate-600 mb-12">
                {blog.additionalContent}
              </p>
            </div>

            {/* Tags + Share */}
            <div className="detail-animation border-y border-slate-200 py-8 mb-16">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                {/* Tags */}
                <div className="flex flex-wrap items-center gap-4">
                  <h3 className="text-2xl font-bold text-slate-900">Tag:</h3>

                  {blog.tags.map((tag, index) => (
                    <button
                      key={index}
                      className="px-6 py-3 rounded-full border border-slate-300 text-slate-500 hover:bg-violet-500 hover:text-white hover:border-violet-500 transition-all"
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                {/* Share */}
                <div className="flex flex-wrap items-center gap-4">
                  <h3 className="text-2xl font-bold text-slate-900 mr-2">
                    Share:
                  </h3>

                  {[FaFacebookF, FaXTwitter, FaLinkedinIn, FaPinterestP].map(
                    (Icon, index) => (
                      <button
                        key={index}
                        className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 hover:bg-violet-500 hover:text-white hover:border-violet-500 transition-all"
                      >
                        <Icon size={16} />
                      </button>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Popular Comments */}
            <div className="detail-animation">
              <h2 className="text-4xl font-bold text-slate-900 mb-12">
                Popular Comments
              </h2>

              <div className="space-y-10">
                {blog.commentsList.map((comment, index) => (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-[24px] p-8"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between gap-6">
                      <div className="flex gap-8">
                        <img
                          src={comment.image}
                          alt={comment.name}
                          className="w-28 h-28 rounded-full object-cover"
                        />

                        <div>
                          <h3 className="text-3xl font-bold text-slate-900 mb-2">
                            {comment.name}
                          </h3>

                          <p className="font-semibold text-slate-500 mb-6">
                            {comment.date}
                          </p>

                          <p className="text-slate-600 leading-10 text-lg">
                            {comment.text}
                          </p>
                        </div>
                      </div>

                      <button className="flex items-start gap-2 text-violet-500 font-semibold hover:text-violet-600 transition-colors">
                        <Reply size={18} />
                        Reply
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Leave A Reply */}
            <div className="detail-animation mt-20">
              <h2 className="text-4xl font-bold text-slate-900 mb-10">
                Leave A Reply
              </h2>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Comment submitted successfully!");
                }}
                className="space-y-6"
              >
                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full px-7 py-5 rounded-2xl border border-slate-200 bg-slate-50 focus:outline-none focus:border-violet-500 transition-all"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className="w-full px-7 py-5 rounded-2xl border border-slate-200 bg-slate-50 focus:outline-none focus:border-violet-500 transition-all"
                  />
                </div>

                {/* Message */}
                <textarea
                  rows={8}
                  placeholder="Write Your Comment..."
                  required
                  className="w-full px-7 py-5 rounded-2xl border border-slate-200 bg-slate-50 resize-none focus:outline-none focus:border-violet-500 transition-all"
                />

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="px-10 py-5 rounded-full bg-violet-500 text-white font-semibold hover:bg-violet-600 transition-all"
                >
                  Submit Comment
                </motion.button>
              </form>
            </div>
          </div>
          {/* ================= RIGHT SIDEBAR ================= */}
          <aside className="lg:col-span-4 space-y-6 sm:space-y-8 lg:space-y-10">
            {/* Search */}
            <div className="detail-animation bg-slate-100 rounded-[24px] sm:rounded-[32px] p-6 sm:p-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter Keyword"
                  className="
                    w-full
                    bg-white
                    rounded-full
                    py-4 sm:py-5 lg:py-6
                    pl-6 sm:pl-8
                    pr-20 sm:pr-24
                    text-sm sm:text-base
                    focus:outline-none
                  "
                />

                <button
                  className="
                    absolute
                    right-2
                    top-2
                    w-12 h-12
                    sm:w-14 sm:h-14
                    lg:w-16 lg:h-16
                    rounded-full
                    bg-teal-900
                    text-white
                    flex items-center justify-center
                  "
                >
                  <Search size={20} className="sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="detail-animation bg-slate-100 rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 lg:p-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-8 sm:mb-10">
                Category
              </h3>

              <div className="space-y-4 sm:space-y-5">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(category)}
                    className={`
        w-full
        rounded-full
        px-6 sm:px-8
        py-4 sm:py-5 lg:py-6
        flex items-center justify-between
        text-sm sm:text-base
        transition-all duration-300

        ${
          selectedCategory === category
            ? "bg-gradient-to-r from-[#FF6633] to-[#6D2CF9] text-white shadow-lg scale-[1.02]"
            : "bg-white text-slate-500 hover:bg-gradient-to-r hover:from-[#FF6633] hover:to-[#6D2CF9] hover:text-white"
        }
      `}
                  >
                    <span>{category}</span>

                    <ArrowRight
                      size={18}
                      className={`transition-transform duration-300 ${
                        selectedCategory === category ? "translate-x-1" : ""
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
            {/* RECENT POSTS */}
            <div className="bg-[#F5F7FA] p-8 rounded-[30px]">
              <h3 className="text-2xl font-bold mb-6 text-[#081B4B]">
                Recent Posts
              </h3>

              <div className="space-y-6">
                {blogs.slice(0, 3).map((post) => (
                  <div
                    key={post.id}
                    onClick={() => navigate(`/blog/details/${post.id}`)}
                    className="flex gap-4 cursor-pointer group"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-24 h-24 rounded-2xl object-cover"
                    />

                    <div>
                      <p className="text-sm text-gray-500 mb-2">
                        June 15, 2025
                      </p>

                      <h4 className="font-semibold text-[#081B4B] leading-6 group-hover:text-violet-600 transition">
                        {post.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Popular Tags */}
            <div className="detail-animation bg-slate-100 rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 lg:p-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-8 sm:mb-10">
                Popular Tags
              </h3>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                {popularTags.map((tag, index) => (
                  <button
                    key={index}
                    className="
                      px-5 sm:px-6
                      py-3 sm:py-4
                      rounded-2xl
                      bg-white
                      text-slate-500
                      text-sm sm:text-base
                      hover:bg-violet-500
                      hover:text-white
                      transition-all
                    "
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
