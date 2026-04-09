import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    services: false,
    products: false,
    blog: false,
  });

  const mobileMenuRef = useRef(null);
  const navRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside - improved precision
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close desktop dropdowns
      if (openDropdown && !event.target.closest(".dropdown-container")) {
        setOpenDropdown(null);
      }
      
      // Close mobile menu when clicking outside nav AND mobile menu
      if (mobileOpen && 
          !navRef.current?.contains(event.target) && 
          !mobileMenuRef.current?.contains(event.target)) {
        closeMobileMenu();
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [mobileOpen, openDropdown]);

  // Keyboard accessibility: ESC closes menus
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        if (mobileOpen) {
          closeMobileMenu();
        } else if (openDropdown) {
          setOpenDropdown(null);
        }
      }
    };
    
    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, [mobileOpen, openDropdown]);

  // Prevent body scroll when mobile menu is open - improved cleanup
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    }
    
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
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

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
    if (mobileOpen) {
      resetMobileDropdowns();
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
    closeMobileMenu();
    setOpenDropdown(null);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gradient-to-r from-[#0b0f3a] via-[#1a0f4c] to-[#5b2d8c] shadow-lg py-1"
            : "bg-gradient-to-r from-[#0b0f3a] via-[#1a0f4c] to-[#5b2d8c] py-2"
        }`}
      >
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="max-w-[1920px] mx-auto">
            <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link to="/">
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto cursor-pointer"
                  />
                </Link>
              </div>

              {/* Desktop Menu - Show on lg screens and above */}
              <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8 text-white font-medium">
                <Link
                  to="/"
                  className="hover:text-purple-300 transition duration-300 text-sm xl:text-base 2xl:text-lg whitespace-nowrap px-1 py-2"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
                
                <Link
                  to="/about"
                  className="hover:text-purple-300 transition duration-300 text-sm xl:text-base 2xl:text-lg whitespace-nowrap px-1 py-2"
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>

                {/* Services Dropdown */}
                <div className="relative dropdown-container">
                  <button
                    onClick={() => toggleDropdown("services")}
                    className="hover:text-purple-300 transition duration-300 text-sm xl:text-base 2xl:text-lg flex items-center gap-1 whitespace-nowrap px-1 py-2"
                    aria-expanded={openDropdown === "services"}
                  >
                    Services <span className="ml-1">▾</span>
                  </button>

                  {openDropdown === "services" && (
                    <div className="absolute top-full left-0 mt-2 bg-white text-black rounded-lg shadow-2xl w-48 xl:w-56 2xl:w-64 p-4 space-y-2 z-50 animate-fadeIn border border-purple-100">
                      <Link
                        to="/services"
                        className="block hover:text-purple-600 hover:bg-purple-50 transition py-2 px-3 text-sm xl:text-base 2xl:text-lg rounded-md"
                        onClick={() => handleNavigation("/services")}
                      >
                        All Services
                      </Link>
                      <Link
                        to="/services/web-development"
                        className="block hover:text-purple-600 hover:bg-purple-50 transition py-2 px-3 text-sm xl:text-base 2xl:text-lg rounded-md"
                        onClick={() => handleNavigation("/services/web-development")}
                      >
                        Web Development
                      </Link>
                      <Link
                        to="/services/ai-solutions"
                        className="block hover:text-purple-600 hover:bg-purple-50 transition py-2 px-3 text-sm xl:text-base 2xl:text-lg rounded-md"
                        onClick={() => handleNavigation("/services/ai-solutions")}
                      >
                        AI Solutions
                      </Link>
                    </div>
                  )}
                </div>

                {/* Products Dropdown */}
                <div className="relative dropdown-container">
                  <button
                    onClick={() => toggleDropdown("products")}
                    className="hover:text-purple-300 transition duration-300 text-sm xl:text-base 2xl:text-lg flex items-center gap-1 whitespace-nowrap px-1 py-2"
                    aria-expanded={openDropdown === "products"}
                  >
                    Products <span className="ml-1">▾</span>
                  </button>

                  {openDropdown === "products" && (
                    <div className="absolute top-full left-0 mt-2 bg-white text-black rounded-lg shadow-2xl w-48 xl:w-56 2xl:w-64 p-4 space-y-2 z-50 animate-fadeIn border border-purple-100">
                      <Link
                        to="/products"
                        className="block hover:text-purple-600 hover:bg-purple-50 transition py-2 px-3 text-sm xl:text-base 2xl:text-lg rounded-md"
                        onClick={() => handleNavigation("/products")}
                      >
                        All Products
                      </Link>
                      <Link
                        to="/products/product-1"
                        className="block hover:text-purple-600 hover:bg-purple-50 transition py-2 px-3 text-sm xl:text-base 2xl:text-lg rounded-md"
                        onClick={() => handleNavigation("/products/product-1")}
                      >
                        Product 1
                      </Link>
                      <Link
                        to="/products/product-2"
                        className="block hover:text-purple-600 hover:bg-purple-50 transition py-2 px-3 text-sm xl:text-base 2xl:text-lg rounded-md"
                        onClick={() => handleNavigation("/products/product-2")}
                      >
                        Product 2
                      </Link>
                    </div>
                  )}
                </div>

                {/* Blog Dropdown */}
                <div className="relative dropdown-container">
                  <button
                    onClick={() => toggleDropdown("blog")}
                    className="hover:text-purple-300 transition duration-300 text-sm xl:text-base 2xl:text-lg flex items-center gap-1 whitespace-nowrap px-1 py-2"
                    aria-expanded={openDropdown === "blog"}
                  >
                    Blog <span className="ml-1">▾</span>
                  </button>

                  {openDropdown === "blog" && (
                    <div className="absolute top-full left-0 mt-2 bg-white text-black rounded-lg shadow-2xl w-48 xl:w-56 2xl:w-64 p-4 space-y-2 z-50 animate-fadeIn border border-purple-100">
                      <Link
                        to="/blog"
                        className="block hover:text-purple-600 hover:bg-purple-50 transition py-2 px-3 text-sm xl:text-base 2xl:text-lg rounded-md"
                        onClick={() => handleNavigation("/blog")}
                      >
                        Blog List
                      </Link>
                      <Link
                        to="/blog/blog-details"
                        className="block hover:text-purple-600 hover:bg-purple-50 transition py-2 px-3 text-sm xl:text-base 2xl:text-lg rounded-md"
                        onClick={() => handleNavigation("/blog/blog-details")}
                      >
                        Blog Details
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  to="/contact"
                  className="hover:text-purple-300 transition duration-300 text-sm xl:text-base 2xl:text-lg whitespace-nowrap px-1 py-2"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </div>

              {/* Right Side - Desktop Actions */}
              <div className="hidden lg:flex items-center space-x-4 xl:space-x-5 2xl:space-x-6">
                <button className="text-white text-lg xl:text-xl 2xl:text-2xl hover:text-purple-300 transition p-1" aria-label="Search">
                  <FiSearch />
                </button>

                <div className="relative">
                  <button className="text-white text-lg xl:text-xl 2xl:text-2xl hover:text-purple-300 transition p-1" aria-label="Cart">
                    <FiShoppingCart />
                  </button>
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                    0
                  </span>
                </div>

                <button 
                  onClick={() => handleNavigation("/get-started")}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 xl:px-5 2xl:px-6 py-1.5 xl:py-2 2xl:py-2.5 rounded-full text-white font-semibold hover:scale-105 transition duration-300 shadow-lg text-sm xl:text-base 2xl:text-lg whitespace-nowrap hover:shadow-purple-500/30"
                >
                  Get Started →
                </button>
              </div>

              {/* Mobile Menu Button - Show on screens below lg */}
              <div className="lg:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="text-white p-2 hover:bg-white/10 rounded-lg transition duration-300 flex items-center justify-center"
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                  aria-expanded={mobileOpen}
                >
                  {mobileOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" ref={mobileMenuRef}>
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeMobileMenu}
          ></div>

          <div className="absolute top-16 sm:top-20 left-0 right-0 bg-gradient-to-r from-[#0b0f3a] via-[#1a0f4c] to-[#5b2d8c] shadow-2xl max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)] overflow-y-auto animate-slideIn">
            <div className="w-full px-5 sm:px-8">
              <div className="max-w-3xl mx-auto py-6 sm:py-8 space-y-1">
                <Link
                  to="/"
                  className="block py-3 sm:py-4 text-white text-lg sm:text-xl font-medium hover:text-purple-300 transition border-b border-white/20 px-4"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
                
                <Link
                  to="/about"
                  className="block py-3 sm:py-4 text-white text-lg sm:text-xl font-medium hover:text-purple-300 transition border-b border-white/20 px-4"
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>

                {/* Mobile Services */}
                <div className="border-b border-white/20">
                  <button
                    className="flex justify-between items-center w-full py-3 sm:py-4 text-white text-lg sm:text-xl font-medium hover:text-purple-300 transition px-4"
                    onClick={() => toggleMobileDropdown("services")}
                    aria-expanded={mobileDropdowns.services}
                  >
                    <span>Services</span>
                    <span className="text-2xl">
                      {mobileDropdowns.services ? (
                        <FiMinus size={20} />
                      ) : (
                        <FiPlus size={20} />
                      )}
                    </span>
                  </button>

                  {mobileDropdowns.services && (
                    <div className="pl-8 pb-3 space-y-2 animate-fadeIn">
                      <Link
                        to="/services"
                        className="block py-2.5 text-gray-200 hover:text-purple-300 hover:bg-white/5 transition pl-4 text-base sm:text-lg rounded-r-lg border-l-2 border-purple-400"
                        onClick={closeMobileMenu}
                      >
                        All Services
                      </Link>
                      <Link
                        to="/services/web-development"
                        className="block py-2.5 text-gray-200 hover:text-purple-300 hover:bg-white/5 transition pl-4 text-base sm:text-lg rounded-r-lg border-l-2 border-purple-400"
                        onClick={closeMobileMenu}
                      >
                        Web Development
                      </Link>
                      <Link
                        to="/services/ai-solutions"
                        className="block py-2.5 text-gray-200 hover:text-purple-300 hover:bg-white/5 transition pl-4 text-base sm:text-lg rounded-r-lg border-l-2 border-purple-400"
                        onClick={closeMobileMenu}
                      >
                        AI Solutions
                      </Link>
                    </div>
                  )}
                </div>

                {/* Mobile Products */}
                <div className="border-b border-white/20">
                  <button
                    className="flex justify-between items-center w-full py-3 sm:py-4 text-white text-lg sm:text-xl font-medium hover:text-purple-300 transition px-4"
                    onClick={() => toggleMobileDropdown("products")}
                    aria-expanded={mobileDropdowns.products}
                  >
                    <span>Products</span>
                    <span className="text-2xl">
                      {mobileDropdowns.products ? (
                        <FiMinus size={20} />
                      ) : (
                        <FiPlus size={20} />
                      )}
                    </span>
                  </button>

                  {mobileDropdowns.products && (
                    <div className="pl-8 pb-3 space-y-2 animate-fadeIn">
                      <Link
                        to="/products"
                        className="block py-2.5 text-gray-200 hover:text-purple-300 hover:bg-white/5 transition pl-4 text-base sm:text-lg rounded-r-lg border-l-2 border-purple-400"
                        onClick={closeMobileMenu}
                      >
                        All Products
                      </Link>
                      <Link
                        to="/products/product-1"
                        className="block py-2.5 text-gray-200 hover:text-purple-300 hover:bg-white/5 transition pl-4 text-base sm:text-lg rounded-r-lg border-l-2 border-purple-400"
                        onClick={closeMobileMenu}
                      >
                        Product 1
                      </Link>
                      <Link
                        to="/products/product-2"
                        className="block py-2.5 text-gray-200 hover:text-purple-300 hover:bg-white/5 transition pl-4 text-base sm:text-lg rounded-r-lg border-l-2 border-purple-400"
                        onClick={closeMobileMenu}
                      >
                        Product 2
                      </Link>
                    </div>
                  )}
                </div>

                {/* Mobile Blog */}
                <div className="border-b border-white/20">
                  <button
                    className="flex justify-between items-center w-full py-3 sm:py-4 text-white text-lg sm:text-xl font-medium hover:text-purple-300 transition px-4"
                    onClick={() => toggleMobileDropdown("blog")}
                    aria-expanded={mobileDropdowns.blog}
                  >
                    <span>Blog</span>
                    <span className="text-2xl">
                      {mobileDropdowns.blog ? (
                        <FiMinus size={20} />
                      ) : (
                        <FiPlus size={20} />
                      )}
                    </span>
                  </button>

                  {mobileDropdowns.blog && (
                    <div className="pl-8 pb-3 space-y-2 animate-fadeIn">
                      <Link
                        to="/blog"
                        className="block py-2.5 text-gray-200 hover:text-purple-300 hover:bg-white/5 transition pl-4 text-base sm:text-lg rounded-r-lg border-l-2 border-purple-400"
                        onClick={closeMobileMenu}
                      >
                        Blog List
                      </Link>
                      <Link
                        to="/blog/blog-details"
                        className="block py-2.5 text-gray-200 hover:text-purple-300 hover:bg-white/5 transition pl-4 text-base sm:text-lg rounded-r-lg border-l-2 border-purple-400"
                        onClick={closeMobileMenu}
                      >
                        Blog Details
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  to="/contact"
                  className="block py-3 sm:py-4 text-white text-lg sm:text-xl font-medium hover:text-purple-300 transition border-b border-white/20 px-4"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>

                {/* Mobile Action Buttons */}
                <div className="flex items-center justify-center gap-8 sm:gap-10 pt-6 sm:pt-8 px-4">
                  <button className="text-white text-2xl sm:text-3xl hover:text-purple-300 transition p-2" aria-label="Search">
                    <FiSearch />
                  </button>
                  <div className="relative">
                    <button className="text-white text-2xl sm:text-3xl hover:text-purple-300 transition p-2" aria-label="Cart">
                      <FiShoppingCart />
                    </button>
                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm w-6 h-6 flex items-center justify-center rounded-full font-bold">
                      0
                    </span>
                  </div>
                </div>

                <button 
                  onClick={() => handleNavigation("/get-started")}
                  className="w-11/12 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 py-3.5 sm:py-4 rounded-full text-white font-bold text-lg sm:text-xl mt-8 hover:scale-105 transition duration-300 shadow-xl hover:shadow-purple-500/40 block"
                >
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