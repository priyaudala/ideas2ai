import React from 'react'
import { motion } from "framer-motion";
import CaaImg from"../../assets/caa.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Career = () => {
  const [category, setCategory] = useState("All");
  const [jobType, setJobType] = useState("All");
  const [location, setLocation] = useState("All");

  const jobs = [
    {
      title: "Full Stack Developer (MERN Stack)",
      category: "SoftwareEngineer",
      location: "HYDERABAD",
      type: "Full Time",
      link: "/careers/full-stack-developer",
    },
    {
      title: "Azure Cloud Engineer",
      category: "Engineer",
      location: "USA",
      type: "Full Time",
       link: "/careers/azure-cloud-engineer",
    },
    {
      title: "Data Engineer (Multiple Openings)",
      category: "Engineer",
      location: "USA",
      type: "Full Time",
      link: "/careers/data-engineer",
    },
  ];

  const filteredJobs = jobs.filter((job) => {
    return (
      (category === "All" || job.category === category) &&
      (jobType === "All" || job.type === jobType) &&
      (location === "All" || job.location === location)
    );
  });

  return (
    <div>
     {/* ================= HERO ================= */}
      <section className="pt-24 md:pt-28">
        <div className="relative w-full h-[300px] md:h-[350px] flex items-center justify-center text-center text-white overflow-hidden">

          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/bgimg.jpeg')" }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,#ffffff,transparent_60%)]" />

          <div className="relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-3">
             Carrers
            </h1>
            <p className="text-gray-300">
              Home <span className="mx-2">›</span> Carrers
            </p>
          </div>

        </div>
      </section> 
      {/* ================= CAREERS CONTENT ================= */}
<section className="bg-gradient-to-b from-white via-purple-50/30 to-white py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Top Content */}
    <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">

      {/* Left */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-purple-600 font-semibold tracking-[4px] uppercase mb-4">
          # Careers
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-[#081b4b] leading-tight">
          Why Choose Eagle Eye Tech:
          <br />
          Career That Defines
          <br />
          Tomorrow
        </h2>

        <p className="mt-8 text-lg text-gray-600 leading-8 max-w-2xl">
          Embark on a journey with Eagle Eye Tech, where innovative minds
          thrive and careers are developed and transformed.
        </p>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img
  src={CaaImg}
  alt="Career"
  className="w-full rounded-[40px] shadow-2xl object-cover h-[350px] w-full"
 />
      </motion.div>
    </div>

    {/* Open Positions */}
    <div className="mt-24">
      <h2 className="text-purple-600 font-semibold tracking-[4px] mb-4">
        Open Positions
      </h2>

      <p className="text-lg text-gray-600 leading-8">
        Dive into a world of opportunities at Eagle Eye Tech. Whether you're
        just starting out, freshly graduated, or a seasoned professional,
        find a role that aligns with your aspirations.
      </p>

      <p className="mt-4 text-lg text-gray-600">
        Don't see a position that suits you?
        <span className="text-purple-600 font-semibold">
          {" "}Reach out to us at hr@eagleietech.com
        </span>
      </p>
    </div>

{/* Filters */}
<div className="flex flex-wrap justify-between items-center gap-5 mt-12">

  <div className="flex flex-wrap gap-4">

    {/* Category */}
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="h-14 px-6 rounded-2xl border border-purple-200 bg-white text-[#081b4b] font-medium shadow-sm min-w-[220px]"
    >
      <option value="All">All Job Category</option>
      <option value="All">All</option>
      <option value="SoftwareEngineer">SoftwareEngineer</option>
      <option value="Engineer">Engineer</option>
    </select>

    {/* Job Type */}
    <select
      value={jobType}
      onChange={(e) => setJobType(e.target.value)}
      className="h-14 px-6 rounded-2xl border border-purple-200 bg-white text-[#081b4b] font-medium shadow-sm min-w-[180px]"
    >
      <option value="All">All Job Type</option>
      <option value="All">All</option>
      <option value="Full Time">Full Time</option>
    </select>

    {/* Location */}
    <select
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      className="h-14 px-6 rounded-2xl border border-purple-200 bg-white text-[#081b4b] font-medium shadow-sm min-w-[220px]"
    >
      <option value="All">All Job Location</option>
      <option value="All">All</option>
      <option value="HYDERABAD">HYDERABAD</option>
      <option value="USA">USA</option>
    </select>

  </div>

  <div className="flex items-center gap-3">
    <span className="text-gray-500 font-medium">
      Show:
    </span>

    <select className="h-14 px-6 rounded-2xl border border-purple-200 bg-white text-[#081b4b] font-medium shadow-sm">
      <option>50 per page</option>
      <option>25 per page</option>
      <option>10 per page</option>
    </select>
  </div>

</div>

   {/* Job Cards */}
<div className="mt-12 space-y-8">

  {filteredJobs.map((job, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden bg-white border border-purple-100 rounded-[35px] p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
    >

      {/* Glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-purple-100 rounded-full blur-3xl opacity-30 group-hover:scale-150 transition duration-700"></div>

      <div className="relative z-10 flex flex-col lg:flex-row justify-between lg:items-center gap-8">

        <div>
          <h3 className="text-3xl font-bold text-[#081b4b]">
            {job.title}
          </h3>

          <div className="flex flex-wrap gap-3 mt-5">

            <span className="px-4 py-2 rounded-full bg-purple-600 text-white text-sm font-medium">
              {job.category}
            </span>

            <span className="px-4 py-2 rounded-full bg-purple-50 text-purple-600 text-sm font-medium">
              {job.location}
            </span>

            <span className="px-4 py-2 rounded-full bg-pink-50 text-pink-600 text-sm font-medium">
              {job.type}
            </span>

          </div>
        </div>

        <Link
  to={job.link}
  className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center"
>
  More Details →
</Link>

      </div>

     </motion.div>
    ))}
  </div>

  </div>
</section>

</div>
);
};

export default Career;