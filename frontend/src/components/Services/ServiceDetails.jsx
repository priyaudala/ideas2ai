import React from "react";
import seviceSingleImg1 from "../../assets/sevice-single-img1.jpg";
import seviceSingleImg2 from "../../assets/sevice-single-img2.jpg";
import seviceSingleImg3 from "../../assets/sevice-single-img3.jpg";

import {
  Search,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const ServiceDetails = () => {
  return (
    <div>
      {/* Hero Section */}
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
              Service Details
            </h1>

            <p className="text-gray-300 text-sm md:text-base">
              Home <span className="mx-2">›</span> Service Details
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[68%_32%] gap-12">
            {/* Left Content */}
            <div>
              <img
                src={seviceSingleImg1}
                alt="Service"
                className="w-full h-[550px] object-cover rounded-[30px]"
              />

              <h2 className="text-[#06164a] text-4xl font-bold mt-8 mb-6 leading-tight">
                Using Personalized Technology to Encourage Innovation.
              </h2>

              <p className="text-gray-500 text-[18px] leading-8">
                Our specialty is developing custom technological solutions
                that are suited to your company's particular requirements.
                We offer cutting-edge solutions that optimize workflows,
                boost efficiency, and spur expansion, ranging from cloud
                computing and AI-powered tools to custom software
                development and IoT integration.
              </p>

              <p className="text-gray-500 text-[18px] leading-8 mt-6">
                Our team of professionals guarantees that every solution is
                scalable, safe, and in line with your objectives, whether
                you're wanting to modernize legacy systems, automate
                workflows, or create intelligent applications by fusing
                state-of-the-art technology.
              </p>

              <p className="text-gray-500 text-[18px] leading-8 mt-6">
                With a thorough understanding of your company, we provide
                strong tools that not only address your problems but also
                enable you to maintain your competitive edge in the ever
                changing digital market. Make sure that our technology not
                only addresses current issues but also sets up your company
                for long-term success in the rapidly changing digital
                landscape.
              </p>

              {/* Key Features */}
              <div className="mt-14">
                <h2 className="text-[#06164a] text-[44px] font-bold leading-tight mb-6">
                  Key Features of AI Technology
                </h2>

                <p className="text-gray-500 text-[18px] leading-8 max-w-4xl">
                  Our specialty is developing custom technological
                  solutions that are suited to your company's particular
                  requirements. We offer cutting-edge solutions that
                  optimize workflows, boost efficiency, and spur expansion.
                </p>

                {/* Features List */}
                <div className="grid md:grid-cols-2 gap-x-16 gap-y-5 mt-10">
                  <div className="space-y-5">
                    <div className="flex items-center gap-3">
                      <CheckCircle2
                        size={22}
                        className="fill-purple-500 text-white"
                      />
                      <span className="text-[#06164a] text-[18px] font-medium">
                        Consultation and Discovery
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <CheckCircle2
                        size={22}
                        className="fill-purple-500 text-white"
                      />
                      <span className="text-[#06164a] text-[18px] font-medium">
                        Discover our expertise
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <CheckCircle2
                        size={22}
                        className="fill-purple-500 text-white"
                      />
                      <span className="text-[#06164a] text-[18px] font-medium">
                        Troubleshooting
                      </span>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div className="flex items-center gap-3">
                      <CheckCircle2
                        size={22}
                        className="fill-purple-500 text-white"
                      />
                      <span className="text-[#06164a] text-[18px] font-medium">
                        Meet our team
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <CheckCircle2
                        size={22}
                        className="fill-purple-500 text-white"
                      />
                      <span className="text-[#06164a] text-[18px] font-medium">
                        Meet our team and learn
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <CheckCircle2
                        size={22}
                        className="fill-purple-500 text-white"
                      />
                      <span className="text-[#06164a] text-[18px] font-medium">
                        Journey and commitment explained
                      </span>
                    </div>
                  </div>
                </div>

       {/* Bottom Cards Section */}
<div className="grid md:grid-cols-2 gap-8 mt-14">
  {/* Image Card 1 */}
  <div className="overflow-hidden rounded-[30px] h-[260px]">
    <img
      src={seviceSingleImg2}
      alt="AI"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Image Card 2 */}
  <div className="overflow-hidden rounded-[30px] h-[260px]">
    <img
      src={seviceSingleImg3}
      alt="AI"
      className="w-full h-full object-cover"
    />
  </div>
</div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Search */}
              <div className="bg-[#f7f7f7] rounded-[30px] p-8 mb-10">
                <div className="flex overflow-hidden rounded-full bg-white">
                  <input
                    type="text"
                    placeholder="Enter Keyword"
                    className="flex-1 px-6 py-5 outline-none text-gray-600"
                  />

                  <button className="bg-[#013a3a] w-20 flex items-center justify-center text-white">
                    <Search size={22} />
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-[#f7f7f7] rounded-[30px] p-8">
                <h3 className="text-[#06164a] text-3xl font-bold mb-8">
                  Category
                </h3>

                {[
                  "City Guide",
                  "Digital Nomad",
                  "New Places",
                  "Popular Hosts",
                  "Room With A View",
                  "Tips & Tricks",
                ].map((item, index) => (
                  <button
                    key={index}
                    className={`w-full flex items-center justify-between px-8 py-5 rounded-full border mb-5 transition-all ${
                      item === "Digital Nomad"
                        ? "bg-gradient-to-r from-purple-600 to-orange-500 text-white border-transparent"
                        : "bg-white text-gray-600 border-gray-200 hover:border-[#06164a]"
                    }`}
                  >
                    <span className="text-lg">{item}</span>
                    <ArrowRight size={20} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;