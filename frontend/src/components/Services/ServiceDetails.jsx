import React from "react";
import seviceSingleImg1 from "../../assets/sevice-single-img1.jpg";
import seviceSingleImg2 from "../../assets/sevice-single-img2.jpg";
import seviceSingleImg3 from "../../assets/sevice-single-img3.jpg";


import {
  Search,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const ServiceDetails = () => {
    const leftContentRef = useRef(null);
  const sidebarRef = useRef(null);
    useEffect(() => {
    window.scrollTo(0, 0);
     gsap.fromTo(
    leftContentRef.current,
    {
      x: -120,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: leftContentRef.current,
        start: "top 80%",
      },
    }
  );

  gsap.fromTo(
    sidebarRef.current,
    {
      x: 120,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sidebarRef.current,
        start: "top 80%",
      },
    }
  );

  }, []);
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
          <div className="grid lg:grid-cols-[1fr_380px] gap-12">
            {/* Left Content */}
             <div ref={leftContentRef}>
              <img
                src={seviceSingleImg1}
                alt="Service"
                className="w-full h-[250px] sm:h-[320px] md:h-[420px] object-cover rounded-[20px] md:rounded-[30px]"
              />

              <h2 className="text-[#06164a] text-2xl md:text-3xl font-bold mt-8 mb-6 leading-tight">
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

              <p className="text-gray-500 text-[18px] leading-8 mt-5">
                Our team of professionals guarantees that every solution is
                scalable, safe, and in line with your objectives, whether
                you're wanting to modernize legacy systems, automate
                workflows, or create intelligent applications by fusing
                state-of-the-art technology.
              </p>

              <p className="text-gray-500 text-[18px] leading-8 mt-4">
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
                <h2 className="text-[#06164a] text-3xl font-bold mt-8 mb-6 leading-tight">
                  Key Features of AI Technology
                </h2>

                <p className="text-gray-500 text-[18px] leading-8 mt-5">
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
  <div className="overflow-hidden rounded-[30px] h-[220px]">
    <img
      src={seviceSingleImg2}
      alt="AI"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Image Card 2 */}
  <div className="overflow-hidden rounded-[30px] h-[220px]">
    <img
      src={seviceSingleImg3}
      alt="AI"
      className="w-full h-full object-cover"
    />
  </div>
</div>
{/* Benefits Section */}
<div className="mt-14">
  <p className="text-gray-500 text-[18px] leading-8">
    Our specialty is developing custom technological solutions that are
    suited to your company's particular requirements. We offer cutting-edge
    solutions that optimize workflows, boost efficiency, and spur expansion,
    ranging from cloud computing and AI-powered tools to custom software
    development and IoT integration.
  </p>

  <h2 className="text-[#06164a] text-3xl font-bold mt-12 mb-6 leading-tight">
  Benefits of AI Technology
</h2>

<p className="text-gray-500 text-[18px] leading-8 mt-5">
    Our specialty is developing custom technological solutions that are
    suited to your company's particular requirements. We offer cutting-edge
    solutions that optimize workflows, boost efficiency, and spur expansion,
    ranging from cloud computing and AI-powered tools to custom software
    development and IoT integration.
  </p>

  {/* Benefit Cards */}
<div className="grid md:grid-cols-3 gap-6 mt-10">
  
  <div className="border border-gray-300 rounded-[20px] p-6">
    <h3 className="text-[#06164a] text-xl font-bold mb-3">
      Improved Accuracy
    </h3>

    <p className="text-gray-500 text-[16px] leading-7">
      These companies provide services for a digital agency.
    </p>
  </div>

  <div className="border border-gray-300 rounded-[20px] p-6">
    <h3 className="text-[#06164a] text-xl font-bold mb-3">
      Efficiency & Automation
    </h3>

    <p className="text-gray-500 text-[16px] leading-7">
      These companies provide services for a digital agency.
    </p>
  </div>

  <div className="border border-gray-300 rounded-[20px] p-6">
    <h3 className="text-[#06164a] text-xl font-bold mb-3">
      24/7 Online Support
    </h3>

    <p className="text-gray-500 text-[16px] leading-7">
      We provide service for Digital Agency Online Support.
    </p>
  </div>

</div>

  {/* AI Technology Content */}
  <h2 className="text-[#06164a] text-3xl font-bold mt-12 mb-6 leading-tight">
    AI Technology
  </h2>

  <p className="text-gray-500 text-[18px] leading-8 mt-4">
    Our specialty is developing custom technological solutions that are
    suited to your company's particular requirements. We offer cutting-edge
    solutions that optimize workflows, boost efficiency, and spur expansion,
    ranging from cloud computing and AI-powered tools to custom software
    development and IoT integration.
  </p>
</div>
              </div>
            </div>
{/* Sidebar */}
 <div ref={sidebarRef} className="w-full">

  {/* Search */}
  <div className="bg-[#f7f7f7] rounded-[20px] md:rounded-[30px] p-5 md:p-8 mb-8 md:mb-10">
    <div className="flex overflow-hidden rounded-full bg-white">
      <input
        type="text"
        placeholder="Enter Keyword"
        className="flex-1 px-4 md:px-6 py-4 md:py-5 outline-none text-gray-600 text-sm md:text-base min-w-0"
      />

      <button className="bg-[#013a3a] w-14 md:w-20 flex items-center justify-center text-white flex-shrink-0">
        <Search size={20} />
      </button>
    </div>
  </div>

  {/* Categories */}
  <div className="bg-[#f7f7f7] rounded-[20px] md:rounded-[30px] p-5 md:p-8">
    <h3 className="text-[#06164a] text-xl md:text-2xl font-bold mb-5 md:mb-6">
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
    className="
      group
      w-full
      flex
      items-center
      justify-between
      px-4 md:px-8
      py-4 md:py-5
      rounded-full
      border
      mb-4 md:mb-5
      bg-white
      text-gray-600
      border-gray-200
      hover:bg-gradient-to-r
      hover:from-purple-600
      hover:to-orange-500
      hover:text-white
      hover:border-transparent
      transition-all
      duration-300
    "
  >
    <span className="text-sm md:text-base font-medium">
      {item}
    </span>

    <div className="relative w-5 h-5 overflow-hidden">

      {/* Current Arrow */}
      <ArrowRight
        size={18}
        className="
          absolute
          top-0
          left-0
          transition-all
          duration-300
          group-hover:translate-x-5
          group-hover:-translate-y-5
        "
      />

      {/* Hover Arrow */}
      <ArrowRight
        size={18}
        className="
          absolute
          top-0
          left-0
          -translate-x-5
          translate-y-5
          transition-all
          duration-300
          group-hover:translate-x-0
          group-hover:translate-y-0
        "
      />

    </div>
  </button>
))}
  </div>

  {/* AI Card */}
  <div
    className="
      relative
      overflow-hidden
      rounded-[20px]
      md:rounded-[30px]
      h-[350px]
      sm:h-[400px]
      lg:h-[500px]
      p-5
      md:p-8
      mt-8
      md:mt-10
      flex
      flex-col
      justify-end
      bg-cover
      bg-center
    "
    style={{
      backgroundImage: "url('/bgimg.jpeg')",
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-[#08001d]/55" />

    {/* Content */}
    <div className="relative z-10">
      <h3 className="text-white text-2xl md:text-[28px] font-bold mb-3 md:mb-4">
        Transform with AI
      </h3>

      <p className="text-white/90 text-sm md:text-[16px] leading-6 md:leading-7 mb-6 md:mb-8">
        Our specialty is developing AI technological solutions that are
        suited to your company's particular requirements. We offer
        cutting-edge solutions that optimize workflows, boost efficiency,
        and accelerate business growth.
      </p>

      <button className="flex items-center gap-2 md:gap-3 bg-gradient-to-r from-[#6D28D9] to-[#EC4899] text-white px-5 md:px-6 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:scale-105 transition-all duration-300">
        Get Started Now
        <ArrowRight size={20} />
      </button>
    </div>
  </div>

</div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;