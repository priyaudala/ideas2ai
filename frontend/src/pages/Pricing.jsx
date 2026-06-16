import React from "react";
import pircingLogo from "../assets/pircing-logo.png";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const Pricing = () => {
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

          <div className="relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-3">
              Pricing Plan
            </h1>

            <p className="text-gray-300">
              Home <span className="mx-2">›</span> Pricing
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-6">

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

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

            {/* Standard */}
            <div className="bg-white rounded-[35px] p-8">
              <img
                src={pircingLogo}
                alt=""
                className="w-12 h-12 mb-5"
              />

              <h3 className="text-2xl font-bold mb-2">Standard</h3>

              <p className="text-gray-500 mb-5">
                Ideal For Personal Projects
              </p>

              <div className="mb-8">
                <span className="text-5xl font-bold">$29</span>
                <span className="text-gray-500"> / Per Month</span>
              </div>

              <ul className="space-y-4 mb-8">
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
            <div className="bg-white rounded-[35px] p-8 relative">
              <div className="absolute top-6 right-6 bg-gradient-to-r from-purple-600 to-orange-500 text-white px-5 py-2 rounded-full">
                Popular
              </div>

              <img
                src={pircingLogo}
                alt=""
                className="w-12 h-12 mb-5"
              />

              <h3 className="text-2xl font-bold mb-2">Professional</h3>

              <p className="text-gray-500 mb-5">
                Ideal For Growing Businesses
              </p>

              <div className="mb-8">
                <span className="text-5xl font-bold">$69</span>
                <span className="text-gray-500"> / Per Month</span>
              </div>

              <ul className="space-y-4 mb-8">
                <li>✓ Access AI tools</li>
                <li>✓ Exclusive features</li>
                <li>✓ Discord access</li>
                <li>✓ Priority support</li>
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
            <div className="bg-white rounded-[35px] p-8">
              <img
                src={pircingLogo}
                alt=""
                className="w-12 h-12 mb-5"
              />

              <h3 className="text-2xl font-bold mb-2">Business</h3>

              <p className="text-gray-500 mb-5">
                Ideal For Enterprises
              </p>

              <div className="mb-8">
                <span className="text-5xl font-bold">$99</span>
                <span className="text-gray-500"> / Per Month</span>
              </div>

              <ul className="space-y-4 mb-8">
                <li>✓ Access AI tools</li>
                <li>✓ Exclusive features</li>
                <li>✓ Discord access</li>
                <li>✓ Dedicated support</li>
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

export default Pricing;