import React from "react";
import BlogGrid from "../components/Blogs/BlogGrid";
import BlogDetails from "../components/Blogs/BlogDetails";
import BlogSidebar from "../components/Blogs/BlogSidebar";

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      <BlogGrid />
      <BlogDetails />
      <BlogSidebar />
    </div>
  );
};

export default Blog;
