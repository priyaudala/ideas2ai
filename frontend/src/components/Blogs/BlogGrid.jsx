import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { User, MessageCircle, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { blogs } from "../../data/blogs";

const BlogGrid = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const displayedBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // Skeleton Loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // GSAP Reveal Animation
  useEffect(() => {
    if (!loading) {
      gsap.from(".blog-card", {
        opacity: 0,
        y: 60,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });
    }
  }, [loading]);

  const goToDetails = (id) => {
    navigate(`/blog/details/${id}`);
  };

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
            <h1 className="text-3xl md:text-5xl font-bold mb-3">Blog Grid</h1>
            <p className="text-gray-300 text-sm md:text-base">
              Home <span className="mx-2">›</span> Blog Grid
            </p>
          </div>
        </div>
      </section>
      <section
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Latest Articles
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900">
            Insights & Stories
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-500 leading-relaxed">
            Stay updated with the latest trends, ideas, and stories from our
            experts around the world.
          </p>
        </div>

        {/* Loading Skeleton */}
        {loading ? (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[30px] border border-slate-200 animate-pulse"
              >
                <div className="bg-slate-200 h-72 w-full" />

                <div className="p-7 space-y-4">
                  <div className="h-4 w-1/2 bg-slate-200 rounded" />

                  <div className="h-6 w-full bg-slate-200 rounded" />

                  <div className="h-6 w-3/4 bg-slate-200 rounded" />

                  <div className="h-4 w-full bg-slate-200 rounded" />

                  <div className="h-4 w-2/3 bg-slate-200 rounded" />

                  <div className="h-4 w-28 bg-slate-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {" "}
            {/* Blog Grid */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {displayedBlogs.map((blog) => (
                <motion.article
                  key={blog.id}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="blog-card bg-white rounded-[30px] overflow-hidden border border-slate-200 hover:shadow-2xl flex flex-col"
                >
                  {/* Image */}
                  <div className="overflow-hidden rounded-t-[30px] h-64 md:h-72 xl:h-80">
                    <motion.img
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5 }}
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-1">
                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-5 text-sm text-slate-500 mb-5">
                      <div className="flex items-center gap-2">
                        <User size={16} className="text-orange-500" />

                        <span>{blog.admin}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <MessageCircle size={16} className="text-orange-500" />

                        <span>{blog.comments} Comments</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-slate-900 leading-snug mb-4 transition-colors hover:text-orange-500 line-clamp-2">
                      {blog.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-500 leading-relaxed mb-6 flex-1 line-clamp-3">
                      {blog.description}
                    </p>

                    <button
                      onClick={() => goToDetails(blog.id)}
                      className="group inline-flex items-center gap-2 font-semibold text-slate-900 hover:text-orange-500 transition-colors mt-auto"
                    >
                      Read More
                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
            <div className="text-center text-sm text-slate-500 mt-8">
              Showing{" "}
              <span className="font-semibold text-slate-700">
                {Math.min(indexOfFirstBlog + 1, blogs.length)}
              </span>{" "}
              to{" "}
              <span className="font-semibold text-slate-700">
                {Math.min(indexOfLastBlog, blogs.length)}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-slate-700">
                {blogs.length}
              </span>{" "}
              blogs
            </div>
            {/* Pagination */}
            <div className="flex justify-center mt-14 gap-2 flex-wrap">
              {/* Prev */}
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-full border transition ${
                  currentPage === 1
                    ? "opacity-40 cursor-not-allowed"
                    : "text-slate-700 hover:bg-orange-500 hover:text-white"
                }`}
              >
                Prev
              </button>

              {/* Page Numbers */}
              {Array.from({
                length: Math.ceil(blogs.length / blogsPerPage),
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-4 py-2 rounded-full border transition ${
                    currentPage === index + 1
                      ? "bg-orange-500 text-white"
                      : "text-slate-700 hover:bg-orange-100"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              {/* Next */}
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-full border transition ${
                  currentPage === totalPages
                    ? "opacity-40 cursor-not-allowed"
                    : "text-slate-700 hover:bg-orange-500 hover:text-white"
                }`}
              >
                Next
              </button>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default BlogGrid;
