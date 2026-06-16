import React from "react";

import icon10 from "../../assets/icon10.png";
import icon11 from "../../assets/icon11.png";
import icon12 from "../../assets/icon12.png";
import icon13 from "../../assets/icon13.png";

import serviceShape from "../../assets/service-shape.png";

import featureImg1 from "../../assets/feature-img1.jpg";
import featureImg2 from "../../assets/feature-img2.jpg";
import pircingLogo from "../../assets/pircing-logo.png";
import client1 from "../../assets/client1.jpg";
import client2 from "../../assets/client2.jpg";
import client3 from "../../assets/client3.jpg";
import { Link, useNavigate  } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from "lucide-react";


const services = [
  {
    id: "01",
    title: "AI-Powered Solution",
    icon: icon10,
  },
  {
    id: "02",
    title: "Custom Technology",
    icon: icon11,
  },
  {
    id: "03",
    title: "Machine Learning",
    icon: icon12,
  },
  {
    id: "04",
    title: "Predicative Analytics",
    icon: icon13,
  },
  {
    id: "05",
    title: "Automation Process",
    icon: icon11,
  },
  {
    id: "06",
    title: "Education & Science",
    icon: icon12,
  },
];

const OurServices = () => {
  const navigate = useNavigate();

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
              Our Services
            </h1>

            <p className="text-gray-300 text-sm md:text-base">
              Home <span className="mx-2">›</span> Our Services
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-red-500 font-semibold uppercase tracking-wider mb-4">
              ● OUR BEST SERVICES
            </p>

            <h2 className="text-[#06164a] text-4xl md:text-5xl font-bold leading-tight">
              Best Innovative Solution for
              <br />
              Businesses
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-[30px] p-8 min-h-[380px] relative overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Shape */}
                <div className="absolute top-0 right-0 opacity-15 pointer-events-none">
                  <img
                    src={serviceShape}
                    alt="shape"
                    className="w-44"
                  />
                </div>

                {/* Number */}
                <h3 className="text-[#06164a] text-2xl font-bold mb-10 relative z-10">
                  {service.id}
                </h3>

                {/* Icon */}
                <div className="w-14 h-14 mb-8 relative z-10">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Title */}
                <h4 className="text-[#06164a] text-[24px] md:text-[28px] font-bold leading-tight mb-6 relative z-10">
                  {service.title}
                </h4>

                {/* Description */}
                <p className="text-gray-500 text-base leading-8 mb-8 relative z-10">
                  Specialize in delivering AI-powered solution revolutionize
                  the way businesses operate. By leveraging the latest.
                </p>

                {/* Read More */}

                <Link
                  to="/services/servicedetails"
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-[#06164a] font-bold text-lg flex items-center gap-2 hover:text-red-500 transition relative z-10"
                >
                  Read More
                  <span>↗</span>
                </Link>
              </div>
            ))}
          </div>
        </div>

      </section>
      {/* Feature Section */}
      <section className="py-20 lg:py-24 bg-[#f8f8f8] overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-6">

          <div className="grid lg:grid-cols-[320px_1fr] xl:grid-cols-[340px_1fr] gap-4 lg:gap-6">

            {/* IMAGE 1 */}
            <div className="flex justify-center lg:justify-start">
              <img
                src={featureImg1}
                alt="Feature"
                className="
            w-full
            max-w-[320px]
            h-[420px]
            object-cover
            rounded-[30px]
          "
              />
            </div>

            {/* RIGHT SIDE */}
            <div>

              {/* Small Heading */}
              <p className="text-[#e63946] uppercase tracking-[4px] font-semibold text-sm mb-3">
                ● OUR FEATURE
              </p>

              {/* Main Heading */}
              <h2
                className="
            text-[#06164a]
            text-[28px]
            md:text-[32px]
            lg:text-[38px]
            font-bold
            leading-[1.35]
            mb-8
            max-w-[700px]
          "
              >
                The Smarter Choice For AI-Powered
                <br />
                Creativity and Visual Excellence
              </h2>

              {/* IMAGE 2 + CONTENT */}
              <div className="flex flex-col lg:flex-row items-start gap-5 lg:gap-6">

                {/* IMAGE 2 */}
                <div className="relative shrink-0 mx-auto lg:mx-0">

                  <img
                    src={featureImg2}
                    alt="AI Feature"
                    className="
        w-[260px]
        md:w-[280px]
        lg:w-[300px]
        h-[320px]
        md:h-[340px]
        lg:h-[360px]
        object-cover
        rounded-[30px]
      "
                  />
{/* Floating Card */}
<div
  className="
    absolute

    left-1/2
    -translate-x-1/2

    md:left-[-70px]
    md:translate-x-0

    lg:left-[-100px]
    xl:left-[-120px]

    bottom-[-25px]
    md:bottom-[30px]

    bg-white
    rounded-[22px]
    shadow-2xl

    px-4
    py-3

    z-30
    min-w-[240px]
  "
>
  <div className="flex items-center">

    {/* Clients + Badge */}
    <div className="flex items-center">

      <img
        src={client1}
        alt=""
        className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover border-2 border-white z-10"
      />

      <img
        src={client2}
        alt=""
        className="-ml-3 w-9 h-9 md:w-10 md:h-10 rounded-full object-cover border-2 border-white z-20"
      />

      <img
        src={client3}
        alt=""
        className="-ml-3 w-9 h-9 md:w-10 md:h-10 rounded-full object-cover border-2 border-white z-30"
      />

      {/* 10+ Badge */}
      <div
        className="
          -ml-3
          w-9 h-9
          md:w-10 md:h-10
          rounded-full
          bg-[#e63946]
          text-white
          flex
          items-center
          justify-center
          text-xs
          md:text-sm
          font-bold
          border-2
          border-white
          z-40
        "
      >
        10+
      </div>

    </div>

    {/* Rating */}
    <div className="ml-4">
      <div className="flex text-[#ff6b35] text-sm md:text-base leading-none mb-1">
        ★★★★★
      </div>

      <p className="text-gray-500 text-xs md:text-sm font-medium">
        20K+ Users
      </p>
    </div>

  </div>
</div>
</div>

                {/* CONTENT */}
                <div className="flex-1">

                  <div className="mb-8">
                    <h3 className="text-[22px] md:text-[24px] font-bold text-[#06164a] mb-3">
                      Advanced AI Technology
                    </h3>

                    <p className="text-gray-500 text-[15px] md:text-[16px] leading-8">
                      We use the latest AI models to generate high-quality visuals
                      with precision and creativity.
                    </p>
                  </div>

                  <div className="mb-10">
                    <h3 className="text-[22px] md:text-[24px] font-bold text-[#06164a] mb-3">
                      Unlimited Creativity
                    </h3>

                    <p className="text-gray-500 text-[15px] md:text-[16px] leading-8">
                      We use the latest AI models to generate high-quality visuals
                      with precision and creativity.
                    </p>
                  </div>

                  {/* CARDS */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[500px]">

                    <div className="bg-white rounded-[24px] p-5 shadow-sm">
                      <h4 className="text-[#e63946] text-4xl font-bold mb-2">
                        70+
                      </h4>

                      <p className="text-[#06164a] text-base font-bold leading-relaxed">
                        Support for Global
                        <br />
                        Language
                      </p>
                    </div>

                    <div className="bg-white rounded-[24px] p-5 shadow-sm">
                      <h4 className="text-[#e63946] text-4xl font-bold mb-2">
                        3X
                      </h4>

                      <p className="text-[#06164a] text-base font-bold leading-relaxed">
                        Faster Content
                        <br />
                        Production
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-24 bg-[#f8f8f8] relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-16">

            <p className="text-[#e63946] uppercase font-semibold tracking-widest text-base mb-4">
              ● POPULAR PACKAGE
            </p>

            <h2 className="text-[#06164a] text-[30px] md:text-[42px] font-bold leading-[1.15]">
              Flexible Pricing, Powerful
              <br />
              Tangible Results
            </h2>

          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

            {/* Standard */}
            <div className="bg-white border border-[#dfe3e8] rounded-[35px] p-8 relative overflow-hidden">

              <img
                src={pircingLogo}
                alt="Pircing Logo"
                className="w-12 h-12 object-contain mb-5"
              />

              <h3 className="text-[#06164a] text-[24px] font-bold mb-1">
                Standard
              </h3>

              <p className="text-gray-500 text-base mb-5">
                Ideal For Personal Projects
              </p>

              <div className="mb-8">
                <span className="text-[#06164a] text-[56px] font-bold">
                  $29
                </span>

                <span className="text-gray-500 text-xl font-medium">
                  /Per Month
                </span>
              </div>

              <hr className="mb-8 border-gray-200" />

              <ul className="space-y-4 text-gray-600 text-base">
                <li>✓ Access AI tools</li>
                <li>✓ Exclusive features</li>
                <li>✓ Discord access</li>
                <li>✓ 24/7 support</li>
              </ul>

              

<button
  onClick={() => navigate("/pricing")}
  className="
    group
    mt-8
    bg-[#06164a]
    text-white
    px-8
    py-4
    rounded-full
    font-semibold
    flex
    items-center
    gap-3
    transition-all
    duration-300
    hover:bg-blue-600
  "
>
  <span>View All Price</span>

  <div className="relative w-5 h-5 overflow-hidden">
    
    <ArrowRight
      size={20}
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

    <ArrowUpRight
      size={20}
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
            </div>

            {/* Professional */}
            <div className="bg-white border border-[#dfe3e8] rounded-[35px] p-8 relative overflow-hidden">

              <div className="absolute top-8 right-8 bg-gradient-to-r from-purple-600 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                Popular
              </div>

              <img
                src={pircingLogo}
                alt="Pircing Logo"
                className="w-12 h-12 object-contain mb-5"
              />

              <h3 className="text-[#06164a] text-[24px] font-bold mb-1">
                Professional
              </h3>

              <p className="text-gray-500 text-base mb-5">
                Ideal For Personal Projects
              </p>

              <div className="mb-8">
                <span className="text-[#06164a] text-[56px] font-bold">
                  $69
                </span>

                <span className="text-gray-500 text-xl font-medium">
                  /Per Month
                </span>
              </div>

              <hr className="mb-8 border-gray-200" />

              <ul className="space-y-4 text-gray-600 text-base">
                <li>✓ Access AI tools</li>
                <li>✓ Exclusive features</li>
                <li>✓ Discord access</li>
                <li>✓ 24/7 support</li>
              </ul>

              <button
  onClick={() => navigate("/pricing")}
  className="
    group
    mt-8
    bg-[#06164a]
    text-white
    px-8
    py-4
    rounded-full
    font-semibold
    flex
    items-center
    gap-3
    transition-all
    duration-300
    hover:bg-blue-600
  "
>
  <span>View All Price</span>

  <div className="relative w-5 h-5 overflow-hidden">
    
    <ArrowRight
      size={20}
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

    <ArrowUpRight
      size={20}
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

            </div>

            {/* Business */}
            <div className="bg-white border border-[#dfe3e8] rounded-[35px] p-8 relative overflow-hidden">

              <img
                src={pircingLogo}
                alt="Pircing Logo"
                className="w-12 h-12 object-contain mb-5"
              />

              <h3 className="text-[#06164a] text-[24px] font-bold mb-1">
                Business
              </h3>

              <p className="text-gray-500 text-base mb-5">
                Ideal For Personal Projects
              </p>

              <div className="mb-8">
                <span className="text-[#06164a] text-[56px] font-bold">
                  $99
                </span>

                <span className="text-gray-500 text-xl font-medium">
                  /Per Month
                </span>
              </div>

              <hr className="mb-8 border-gray-200" />

              <ul className="space-y-4 text-gray-600 text-base">
                <li>✓ Access AI tools</li>
                <li>✓ Exclusive features</li>
                <li>✓ Discord access</li>
                <li>✓ 24/7 support</li>
              </ul>

              <button
  onClick={() => navigate("/pricing")}
  className="
    group
    mt-8
    bg-[#06164a]
    text-white
    px-8
    py-4
    rounded-full
    font-semibold
    flex
    items-center
    gap-3
    transition-all
    duration-300
    hover:bg-blue-600
  "
>
  <span>View All Price</span>

  <div className="relative w-5 h-5 overflow-hidden">
    
    <ArrowRight
      size={20}
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

    <ArrowUpRight
      size={20}
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

            </div>

          </div>

        </div>

      </section>
    </div>
  );
};


export default OurServices;