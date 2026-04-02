import React, { useState, useEffect } from "react";
import {
  FiSearch,
  FiShoppingCart,
  FiMenu,
  FiX,
  FiPlus,
  FiMinus,
} from "react-icons/fi";
import logo from "../../assets/logo-white.png";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    services: false,
    products: false,
    blog: false,
  });

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileOpen && !event.target.closest("nav")) {
        setMobileOpen(false);
        resetMobileDropdowns();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const toggleMobileDropdown = (dropdown) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  const resetMobileDropdowns = () => {
    setMobileDropdowns({
      services: false,
      products: false,
      blog: false,
    });
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
    resetMobileDropdowns();
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gradient-to-r from-[#0b0f3a] via-[#1a0f4c] to-[#5b2d8c] shadow-lg"
            : "bg-gradient-to-r from-[#0b0f3a] via-[#1a0f4c] to-[#5b2d8c]"
        }`}
      >
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
              {/* Logo */}
              <div className="flex-shrink-0">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto"
                />
              </div>

              {/* Desktop Menu */}
              <div className="hidden xl:flex items-center space-x-4 lg:space-x-6 xl:space-x-8 text-white font-medium">
                <a
                  href="#"
                  className="hover:text-purple-300 transition duration-300 text-sm lg:text-base whitespace-nowrap"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="hover:text-purple-300 transition duration-300 text-sm lg:text-base whitespace-nowrap"
                >
                  About Us
                </a>

                {/* Services Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown("services")}
                    className="hover:text-purple-300 transition duration-300 text-sm lg:text-base flex items-center gap-1 whitespace-nowrap"
                  >
                    Services <span>▾</span>
                  </button>

                  {openDropdown === "services" && (
                    <div className="absolute top-8 left-0 bg-white text-black rounded-lg shadow-lg w-44 lg:w-48 p-3 space-y-2 z-50 animate-slideRight">
                      <a
                        href="#"
                        className="block hover:text-purple-600 transition py-1 text-sm"
                      >
                        Web Development
                      </a>
                      <a
                        href="#"
                        className="block hover:text-purple-600 transition py-1 text-sm"
                      >
                        AI Solutions
                      </a>
                    </div>
                  )}
                </div>

                {/* Products Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown("products")}
                    className="hover:text-purple-300 transition duration-300 text-sm lg:text-base flex items-center gap-1 whitespace-nowrap"
                  >
                    Products <span>▾</span>
                  </button>

                  {openDropdown === "products" && (
                    <div className="absolute top-8 left-0 bg-white text-black rounded-lg shadow-lg w-44 lg:w-48 p-3 space-y-2 z-50 animate-slideRight">
                      <a
                        href="#"
                        className="block hover:text-purple-600 transition py-1 text-sm"
                      >
                        Product 1
                      </a>
                      <a
                        href="#"
                        className="block hover:text-purple-600 transition py-1 text-sm"
                      >
                        Product 2
                      </a>
                    </div>
                  )}
                </div>

                {/* Blog Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown("blog")}
                    className="hover:text-purple-300 transition duration-300 text-sm lg:text-base flex items-center gap-1 whitespace-nowrap"
                  >
                    Blog <span>▾</span>
                  </button>

                  {openDropdown === "blog" && (
                    <div className="absolute top-8 left-0 bg-white text-black rounded-lg shadow-lg w-44 lg:w-48 p-3 space-y-2 z-50 animate-slideRight">
                      <a
                        href="#"
                        className="block hover:text-purple-600 transition py-1 text-sm"
                      >
                        Blog List
                      </a>
                      <a
                        href="#"
                        className="block hover:text-purple-600 transition py-1 text-sm"
                      >
                        Blog Details
                      </a>
                    </div>
                  )}
                </div>

                <a
                  href="#"
                  className="hover:text-purple-300 transition duration-300 text-sm lg:text-base whitespace-nowrap"
                >
                  Contact
                </a>
              </div>

              {/* Right Side */}
              <div className="hidden xl:flex items-center space-x-3 lg:space-x-4 xl:space-x-6">
                <FiSearch className="text-white text-lg lg:text-xl cursor-pointer hover:text-purple-300 transition" />

                <div className="relative">
                  <FiShoppingCart className="text-white text-lg lg:text-xl cursor-pointer hover:text-purple-300 transition" />
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                    0
                  </span>
                </div>

                <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 lg:px-5 xl:px-6 py-1.5 lg:py-2 rounded-full text-white font-semibold hover:scale-105 transition duration-300 shadow-lg text-xs lg:text-sm xl:text-base whitespace-nowrap">
                  Get Started →
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="xl:hidden">
                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="text-white p-2 hover:bg-white/10 rounded-lg transition duration-300 flex items-center justify-center"
                  aria-label="Toggle menu"
                >
                  {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 xl:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeMobileMenu}
          ></div>

          <div className="absolute top-14 sm:top-16 md:top-20 left-0 right-0 bg-gradient-to-r from-[#0b0f3a] via-[#1a0f4c] to-[#5b2d8c] shadow-xl max-h-[calc(100vh-3.5rem)] sm:max-h-[calc(100vh-4rem)] md:max-h-[calc(100vh-5rem)] overflow-y-auto animate-slideLeft">
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
              <div className="max-w-7xl mx-auto py-4 sm:py-6 space-y-2 sm:space-y-3">
                <a
                  href="#"
                  className="block py-2 sm:py-3 text-white text-base sm:text-lg font-medium hover:text-purple-300 transition border-b border-white/10"
                  onClick={closeMobileMenu}
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block py-2 sm:py-3 text-white text-base sm:text-lg font-medium hover:text-purple-300 transition border-b border-white/10"
                  onClick={closeMobileMenu}
                >
                  About Us
                </a>

                {/* Mobile Services */}
                <div className="border-b border-white/10">
                  <button
                    className="flex justify-between items-center w-full py-2 sm:py-3 text-white text-base sm:text-lg font-medium hover:text-purple-300 transition"
                    onClick={() => toggleMobileDropdown("services")}
                  >
                    <span>Services</span>
                    <span className="text-xl sm:text-2xl font-bold">
                      {mobileDropdowns.services ? (
                        <FiMinus size={18} />
                      ) : (
                        <FiPlus size={18} />
                      )}
                    </span>
                  </button>

                  {mobileDropdowns.services && (
                    <div className="pl-4 pb-2 sm:pb-3 space-y-1 sm:space-y-2 animate-slideRight">
                      <a
                        href="#"
                        className="block py-1.5 sm:py-2 text-gray-300 hover:text-purple-300 transition pl-2 text-sm sm:text-base"
                        onClick={closeMobileMenu}
                      >
                        Web Development
                      </a>
                      <a
                        href="#"
                        className="block py-1.5 sm:py-2 text-gray-300 hover:text-purple-300 transition pl-2 text-sm sm:text-base"
                        onClick={closeMobileMenu}
                      >
                        AI Solutions
                      </a>
                    </div>
                  )}
                </div>

                {/* Mobile Products */}
                <div className="border-b border-white/10">
                  <button
                    className="flex justify-between items-center w-full py-2 sm:py-3 text-white text-base sm:text-lg font-medium hover:text-purple-300 transition"
                    onClick={() => toggleMobileDropdown("products")}
                  >
                    <span>Products</span>
                    <span className="text-xl sm:text-2xl font-bold">
                      {mobileDropdowns.products ? (
                        <FiMinus size={18} />
                      ) : (
                        <FiPlus size={18} />
                      )}
                    </span>
                  </button>

                  {mobileDropdowns.products && (
                    <div className="pl-4 pb-2 sm:pb-3 space-y-1 sm:space-y-2 animate-slideRight">
                      <a
                        href="#"
                        className="block py-1.5 sm:py-2 text-gray-300 hover:text-purple-300 transition pl-2 text-sm sm:text-base"
                        onClick={closeMobileMenu}
                      >
                        Product 1
                      </a>
                      <a
                        href="#"
                        className="block py-1.5 sm:py-2 text-gray-300 hover:text-purple-300 transition pl-2 text-sm sm:text-base"
                        onClick={closeMobileMenu}
                      >
                        Product 2
                      </a>
                    </div>
                  )}
                </div>

                {/* Mobile Blog */}
                <div className="border-b border-white/10">
                  <button
                    className="flex justify-between items-center w-full py-2 sm:py-3 text-white text-base sm:text-lg font-medium hover:text-purple-300 transition"
                    onClick={() => toggleMobileDropdown("blog")}
                  >
                    <span>Blog</span>
                    <span className="text-xl sm:text-2xl font-bold">
                      {mobileDropdowns.blog ? (
                        <FiMinus size={18} />
                      ) : (
                        <FiPlus size={18} />
                      )}
                    </span>
                  </button>

                  {mobileDropdowns.blog && (
                    <div className="pl-4 pb-2 sm:pb-3 space-y-1 sm:space-y-2 animate-slideRight">
                      <a
                        href="#"
                        className="block py-1.5 sm:py-2 text-gray-300 hover:text-purple-300 transition pl-2 text-sm sm:text-base"
                        onClick={closeMobileMenu}
                      >
                        Blog List
                      </a>
                      <a
                        href="#"
                        className="block py-1.5 sm:py-2 text-gray-300 hover:text-purple-300 transition pl-2 text-sm sm:text-base"
                        onClick={closeMobileMenu}
                      >
                        Blog Details
                      </a>
                    </div>
                  )}
                </div>

                <a
                  href="#"
                  className="block py-2 sm:py-3 text-white text-base sm:text-lg font-medium hover:text-purple-300 transition border-b border-white/10"
                  onClick={closeMobileMenu}
                >
                  Contact
                </a>

                {/* Mobile Action Buttons */}
                <div className="flex items-center gap-4 sm:gap-6 pt-3 sm:pt-4">
                  <FiSearch className="text-white text-xl sm:text-2xl cursor-pointer hover:text-purple-300 transition" />
                  <div className="relative">
                    <FiShoppingCart className="text-white text-xl sm:text-2xl cursor-pointer hover:text-purple-300 transition" />
                    <span className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full">
                      0
                    </span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-2.5 sm:py-3 rounded-full text-white font-semibold mt-4 sm:mt-6 hover:scale-105 transition duration-300 text-sm sm:text-base md:text-lg">
                  Get Started →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
