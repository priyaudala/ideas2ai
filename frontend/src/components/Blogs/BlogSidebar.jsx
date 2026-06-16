import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { blogs } from "../../data/blogs";
import { FaUser, FaRegCalendarAlt, FaRegComment } from "react-icons/fa";
import { Search } from "lucide-react";

const BlogSidebar = () => {
  const navigate = useNavigate();
  const categories = [...new Set(blogs.map((blog) => blog.category))];
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "" || blog.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });
  return (
    <div>
      {/* HERO SECTION */}
      <section className="pt-24 md:pt-28">
        <div className="relative w-full h-[300px] md:h-[350px] flex items-center justify-center text-center text-white overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/bgimg.jpeg')" }}
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-3">
              Blog Standard
            </h1>

            <p className="text-gray-300 text-sm md:text-base">
              Home <span className="mx-2">›</span> Blog Standard
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT BLOGS */}
          <div className="lg:col-span-8 space-y-14">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <div key={blog.id}>
                  {/* IMAGE */}
                  <div className="rounded-[30px] overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-[280px] sm:h-[350px] md:h-[500px] object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="pt-8">
                    {/* META INFO */}
                    <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-500 mb-6">
                      <div className="flex items-center gap-2">
                        <FaUser className="text-red-500 text-sm" />
                        <span className="text-sm md:text-base">
                          By{blog.admin}
                        </span>
                      </div>

                      <span className="text-gray-400">|</span>

                      <div className="flex items-center gap-2">
                        <FaRegCalendarAlt className="text-red-500 text-sm" />
                        <span className="text-sm md:text-base">
                          {blog.date || "June 15, 2025"}
                        </span>
                      </div>

                      <span className="text-gray-400">|</span>

                      <div className="flex items-center gap-2">
                        <FaRegComment className="text-red-500 text-sm" />
                        <span className="text-sm md:text-base">
                          ({blog.comments}) Comments
                        </span>
                      </div>
                    </div>

                    {/* TITLE */}
                    <h2
                      onClick={() => navigate(`/blog/details/${blog.id}`)}
                      className="text-[30px] md:text-[42px] leading-tight font-bold text-[#081B4B] mb-6 cursor-pointer hover:text-violet-600 transition"
                    >
                      {blog.title}
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="text-gray-500 text-lg leading-8 mb-8">
                      {blog.description}
                    </p>

                    {/* BUTTON */}
                    <button
                      onClick={() => navigate(`/blog/details/${blog.id}`)}
                      className="inline-flex items-center gap-2 text-violet-600 font-semibold hover:text-violet-800 transition"
                    >
                      Read More →
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-20">
                <h3 className="text-3xl font-bold text-slate-700 mb-4">
                  No Blogs Found
                </h3>
                <p className="text-slate-500">
                  Try another keyword or category.
                </p>
              </div>
            )}
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Search */}
            <div className="detail-animation bg-slate-100 rounded-[24px] sm:rounded-[32px] p-6 sm:p-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter Keyword"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
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

            <div
              onClick={() => setSelectedCategory("")}
              className={`
    px-6 py-4 rounded-full cursor-pointer transition-all duration-300 mb-4
    ${
      selectedCategory === ""
        ? "bg-gradient-to-r from-[#FF6633] to-[#6D2CF9] text-white"
        : "bg-white text-slate-700"
    }
  `}
            >
              All Categories
            </div>
            {/* CATEGORY */}
            <div className="bg-[#F5F7FA] p-8 rounded-[30px]">
              <h3 className="text-2xl font-bold mb-6 text-[#081B4B]">
                Category
              </h3>

              <div className="space-y-4">
                {categories.map((cat, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedCategory(cat)}
                    className={`
      px-6 py-4 rounded-full cursor-pointer transition-all duration-300
      ${
        selectedCategory === cat
          ? "bg-gradient-to-r from-[#FF6633] to-[#6D2CF9] text-white shadow-lg"
          : "bg-white text-slate-700 hover:bg-gradient-to-r hover:from-[#FF6633] hover:to-[#6D2CF9] hover:text-white hover:shadow-md"
      }
    `}
                  >
                    {cat}
                  </div>
                ))}
              </div>
            </div>

            {/* RECENT POSTS */}
            <div className="bg-[#F5F7FA] p-8 rounded-[30px]">
              <h3 className="text-2xl font-bold mb-6 text-[#081B4B]">
                Recent Posts
              </h3>

              <div className="space-y-6">
                {filteredBlogs.slice(0, 3).map((post) => (
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
                      <p className="text-sm text-gray-500 mb-2">{post.date}</p>

                      <h4 className="font-semibold text-[#081B4B] leading-6 group-hover:text-violet-600 transition">
                        {post.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default BlogSidebar;
