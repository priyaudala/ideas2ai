import React from 'react'
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const AzureCloudDetails = () => {
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
               Engineer
            </h1>

            <p className="text-gray-300">
              Home <span className="mx-2">›</span> Careers
              <span className="mx-2">›</span>  Engineer
            </p>
          </div>
        </div>
      </section>

      {/* ================= DETAILS ================= */}
      <section className="py-20 bg-gradient-to-b from-white via-purple-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Back Button */}
                  <button
                    onClick={() => navigate("/careers")}
                    className="flex items-center gap-2 text-purple-600 font-semibold mb-8 hover:translate-x-[-4px] transition-all"
                  >
                    <ArrowLeft size={20} />
                    Back to Jobs
                    </button>
          <div className="grid lg:grid-cols-[2fr_1fr] gap-10">

            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white border border-purple-100 rounded-[35px] shadow-lg p-8 lg:p-12"
            >
              <h2 className="text-purple-600 text-3xl font-bold mb-6">
                ENGINEER
              </h2>

              <h3 className="text-xl font-semibold text-[#081b4b] mb-5">
                Job Description:
              </h3>

              <p className="text-gray-600 text-lg leading-9">
                Azure cloud engineer with experience in setting up and managing Infrastructure and Administration.
              </p>

              <p className="text-gray-600 text-lg leading-9 mt-6">
                Experience in Migrating on-premises applications and workloads to azure using cloud technologies and provide support.

                Extensive knowledge on Azure Compute, Storage, Networking, RBAC concepts with hands o...
              </p>

              <button className="mt-8 text-purple-600 font-semibold hover:text-pink-500 transition">
                Read More
              </button>

              <p className="mt-8 text-lg text-gray-600">
                Interested candidates please send your CV to
                <span className="text-purple-600 font-semibold">
                  {" "}hr@eagleietech.com
                </span>
              </p>

              <div className="mt-8 space-y-2 text-lg">
                <p>
                  <strong className="text-[#081b4b]">
                    Job Category:
                  </strong>{" "}
                 Engineer
                </p>

                <p>
                  <strong className="text-[#081b4b]">
                    Job Type:
                  </strong>{" "}
                  Full Time
                </p>

                <p>
                  <strong className="text-[#081b4b]">
                    Job Location:
                  </strong>{" "}
                 USA
                </p>
              </div>

              {/* ================= APPLY FORM ================= */}
              <div className="mt-16">

                <h2 className="text-4xl md:text-5xl font-bold text-purple-600 mb-10">
                  Apply For This Position
                </h2>

                <div className="space-y-6">

                  <div>
                    <label className="block mb-2 font-medium text-[#081b4b]">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      className="w-full h-16 px-5 rounded-2xl border border-purple-200 outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-[#081b4b]">
                      Email *
                    </label>

                    <input
                      type="email"
                      className="w-full h-16 px-5 rounded-2xl border border-purple-200 outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-[#081b4b]">
                      Phone *
                    </label>

                    <input
                      type="text"
                      className="w-full h-16 px-5 rounded-2xl border border-purple-200 outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-[#081b4b]">
                      Cover Letter *
                    </label>

                    <textarea
                      rows="6"
                      className="w-full p-5 rounded-2xl border border-purple-200 outline-none focus:border-purple-500"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-[#081b4b]">
                      Upload CV/Resume *
                    </label>

                    <input
                      type="file"
                      className="w-full p-8 border-2 border-dashed border-purple-200 rounded-2xl"
                    />
                  </div>

                  <button className="w-full h-16 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-lg font-semibold rounded-2xl hover:shadow-xl transition-all">
                    Submit Application
                  </button>

                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDEBAR */}
            <div className="space-y-8">

              {/* Recent Posts */}
              <div className="bg-white border border-purple-100 rounded-[35px] shadow-lg p-8">

                <h3 className="text-2xl font-bold text-[#081b4b] mb-8">
                  Recent Posts
                </h3>

                <div className="space-y-6">

                  <div className="flex gap-4">
                    <img
                      src="/bgimg.jpeg"
                      alt=""
                      className="w-24 h-24 rounded-xl object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-[#081b4b]">
                        Why System Design Matters More Than Coding
                      </h4>
                      <p className="text-gray-500 text-sm mt-2">
                        June 16, 2026
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <img
                      src="/bgimg.jpeg"
                      alt=""
                      className="w-24 h-24 rounded-xl object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-[#081b4b]">
                        Most In-Demand Software Skills
                      </h4>
                      <p className="text-gray-500 text-sm mt-2">
                        June 16, 2026
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <img
                      src="/bgimg.jpeg"
                      alt=""
                      className="w-24 h-24 rounded-xl object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-[#081b4b]">
                        Building Full Stack Apps with AI
                      </h4>
                      <p className="text-gray-500 text-sm mt-2">
                        June 16, 2026
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Categories */}
              <div className="bg-white border border-purple-100 rounded-[35px] shadow-lg p-8">

                <h3 className="text-2xl font-bold text-[#081b4b] mb-8">
                  Categories
                </h3>

                <ul className="space-y-4 text-lg">

  <li className="flex items-center gap-3">
    <span className="text-purple-600 font-bold">✓</span>
    <span className="text-gray-600">Artificial Intelligence</span>
  </li>

  <li className="flex items-center gap-3">
    <span className="text-purple-600 font-bold">✓</span>
    <span className="text-gray-600">Machine Learning</span>
  </li>

  <li className="flex items-center gap-3">
    <span className="text-purple-600 font-bold">✓</span>
    <span className="text-gray-600">Data Science</span>
  </li>

  <li className="flex items-center gap-3">
    <span className="text-purple-600 font-bold">✓</span>
    <span className="text-gray-600">Cyber Security</span>
  </li>

  <li className="flex items-center gap-3">
    <span className="text-purple-600 font-bold">✓</span>
    <span className="text-gray-600">Mobile Apps</span>
  </li>

  <li className="flex items-center gap-3">
    <span className="text-purple-600 font-bold">✓</span>
    <span className="text-gray-600">UI-UX</span>
  </li>

  <li className="flex items-center gap-3">
    <span className="text-purple-600 font-bold">✓</span>
    <span className="text-gray-600">Software Testing</span>
  </li>

  <li className="flex items-center gap-3">
    <span className="text-purple-600 font-bold">✓</span>
    <span className="text-gray-600">Blockchain</span>
  </li>

</ul>

              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default AzureCloudDetails
