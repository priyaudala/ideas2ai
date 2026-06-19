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
import logo from "../../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);

  const toggleSubDropdown = (menu) => {
    setOpenSubDropdown(openSubDropdown === menu ? null : menu);
  };
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
      if (
        mobileOpen &&
        !navRef.current?.contains(event.target) &&
        !mobileMenuRef.current?.contains(event.target)
      ) {
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
              <div className="flex-shrink-0 flex items-center h-full">
                <Link to="/" className="flex items-center h-full">
                  {/* Logo */}
                  <img
                    src={logo}
                    alt="Ideas2AI Logo"
                    className="w-40 sm:w-44 md:w-48 object-contain mt-3 mb-6"
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
                    className="hover:text-purple-300 transition duration-300 text-sm xl:text-base 2xl:text-lg flex items-center gap-1"
                  >
                    Services <span>▾</span>
                  </button>

                  {openDropdown === "services" && (
                    <div className="absolute top-full left-0 mt-2 bg-white text-black rounded-xl shadow-2xl w-64 p-3 z-50">
                      {/* Our Services */}
                      <Link
                        to="/services/ourservices"
                        className="block px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition"
                        onClick={() =>
                          handleNavigation("/services/ourservices")
                        }
                      >
                        Our Services
                      </Link>

                      <Link
                        to="/services/servicedetails"
                        className="block hover:text-purple-600 hover:bg-purple-50 transition py-2 px-3 text-sm xl:text-base 2xl:text-lg rounded-md"
                        onClick={() =>
                          handleNavigation("/services/web-development")
                        }
                      >
                        Service Details
                      </Link>
                      {/* Development Services */}
                      <div className="relative group">
                        <Link
                          to="/services/development-services"
                          className="w-full flex justify-between items-center px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600"
                        >
                          Development Services
                          <span>›</span>
                        </Link>

                        {/* Submenu */}
                        <div className="absolute top-0 left-full ml-2 hidden group-hover:block bg-white shadow-2xl rounded-xl w-64 p-3">
                          <Link
                            to="/services/application-integration"
                            className="block px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600"
                          >
                            Application Integration
                          </Link>

                          <Link
                            to="/services/application-development"
                            className="block px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600"
                          >
                            Application Development
                          </Link>

                          <Link
                            to="/services/data-migration"
                            className="block px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600"
                          >
                            Data Migration
                          </Link>

                          <Link
                            to="/services/devops&cloud"
                            className="block px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600"
                          >
                            DevOps & Cloud
                          </Link>

                          <Link
                            to="/services/snowflake"
                            className="block px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600"
                          >
                            Snowflake
                          </Link>
                        </div>
                      </div>
                      {/* Application Support */}
                      <div className="relative group">
                        <Link
                          to="/services/application-support"
                          className="w-full flex justify-between items-center px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600"
                        >
                          Application Support
                          <span>›</span>
                        </Link>

                        {/* Submenu */}
                        <div className="absolute top-0 left-full ml-2 hidden group-hover:block bg-white shadow-2xl rounded-xl w-64 p-3">
                          <Link
                            to="/services/implementation-services"
                            className="block px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600"
                          >
                            Implementation Services
                          </Link>

                          <Link
                            to="/services/post-implementation-support"
                            className="block px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600"
                          >
                            Post Implementation Support
                          </Link>

                          <Link
                            to="/services/troubleshooting-support"
                            className="block px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600"
                          >
                            Troubleshooting Support
                          </Link>

                          <Link
                            to="/services/tech-support"
                            className="block px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600"
                          >
                            Tech Support
                          </Link>
                        </div>
                      </div>
                      <div className="relative group">
                        <Link
                          to="/services/ui-ux"
                          className="w-full flex justify-between items-center px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600"
                        >
                          UI / UX
                          <span>›</span>
                        </Link>

                        <div className="absolute top-0 left-full ml-2 hidden group-hover:block bg-white shadow-2xl rounded-xl w-72 p-3">
                          <Link
                            to="/services/dynamic-website"
                            className="block px-4 py-3 rounded-lg hover:bg-purple-50"
                          >
                            Dynamic Website
                          </Link>

                          <Link
                            to="/services/mobile-optimized-website"
                            className="block px-4 py-3 rounded-lg hover:bg-purple-50"
                          >
                            Mobile Optimized Website
                          </Link>
                          <Link
                            to="/services/responsive-web-design"
                            className="block px-4 py-3 rounded-lg hover:bg-purple-50"
                          >
                            Responsive Web Design
                          </Link>
                          <Link
                            to="/services/mobile-web-applications"
                            className="block px-4 py-3 rounded-lg hover:bg-purple-50"
                          >
                            Mobile Web Applications
                          </Link>
                          <Link
                            to="/services/web-design"
                            className="block px-4 py-3 rounded-lg hover:bg-purple-50"
                          >
                            Web Design
                          </Link>
                          <Link
                            to="/services/website-development-and-hosting"
                            className="block px-4 py-3 rounded-lg hover:bg-purple-50"
                          >
                            Website Development and Hosting
                          </Link>
                          <Link
                            to="/services/ecommerce-websites"
                            className="block px-4 py-3 rounded-lg hover:bg-purple-50"
                          >
                            E-commerce Website Design and Development
                          </Link>
                        </div>
                      </div>
                      {/* Digital Marketing */}
                      <div className="relative group">
                        <Link
                          to="/services/digital-marketing"
                          className="w-full flex justify-between items-center px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600"
                        >
                          Digital Marketing
                          <span>›</span>
                        </Link>

                        {/* Submenu */}
                        <div className="absolute top-0 left-full ml-2 hidden group-hover:block bg-white shadow-2xl rounded-xl w-64 p-3">
                          <Link
                            to="/services/search-engine-optimization"
                            className="block px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600"
                          >
                            Search Optimization
                          </Link>

                          <Link
                            to="/services/social-media-marketing"
                            className="block px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600"
                          >
                            Social Media Marketing
                          </Link>

                          <Link
                            to="/services/search-engine-marketing"
                            className="block px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600"
                          >
                            Search Engine Marketing
                          </Link>
                          <Link
                            to="/services/online-reputation-management"
                            className="block px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600"
                          >
                            Online Reputation Management
                          </Link>
                          <Link
                            to="/services/strategy"
                            className="block px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600"
                          >
                            Strategy
                          </Link>
                          <Link
                            to="/services/analytics"
                            className="block px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600"
                          >
                            Analytics
                          </Link>
                        </div>
                      </div>
                      {/* Software Testing */}
                      <div className="relative group">
                        <Link
                          to="/services/software-testing"
                          className="w-full flex justify-between items-center px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600"
                        >
                          Software Testing
                          <span>›</span>
                        </Link>

                        {/* Submenu */}
                        <div className="absolute top-0 left-full ml-2 hidden group-hover:block bg-white shadow-2xl rounded-xl w-64 p-3">
                          <Link
                            to="/services/mobile-application-testing"
                            className="block px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600"
                          >
                            Mobile Application Testing
                          </Link>

                          <Link
                            to="/services/manual"
                            className="block px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600"
                          >
                            Manual
                          </Link>

                          <Link
                            to="/services/automation"
                            className="block px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600"
                          >
                            Automation
                          </Link>
                        </div>
                      </div>
                      {/* Data Science */}
                      <div className="relative group">
                        <Link
                          to="/services/deep-learing"
                          className="w-full flex justify-between items-center px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600"
                        >
                          Deep Learning
                          <span>›</span>
                        </Link>

                        {/* Submenu */}
                        <div className="absolute top-0 left-full ml-2 hidden group-hover:block bg-white shadow-2xl rounded-xl w-64 p-3">
                          <Link
                            to="/services/artificial-intelligence"
                            className="block px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600"
                          >
                            Artificial Intelligence
                          </Link>

                          <Link
                            to="/services/machine-learning"
                            className="block px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600"
                          >
                            Machine Learning
                          </Link>

                          <Link
                            to="/services/ai-chatbots"
                            className="block px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600"
                          >
                            AI Chatbots
                          </Link>

                          <Link
                            to="/services/technologies"
                            className="block px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600"
                          >
                            Technologies
                          </Link>
                          <Link
                            to="/services/competencies"
                            className="block px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600"
                          >
                            Competencies
                          </Link>
                        </div>
                      </div>
                      {/* Staffing */}
                      <div className="relative group">
                        <Link
                          to="/services/staffing"
                          className="w-full flex justify-between items-center px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600"
                        >
                          Staffing
                          <span>›</span>
                        </Link>

                        {/* Submenu */}
                        <div className="absolute top-0 left-full ml-2 hidden group-hover:block bg-white shadow-2xl rounded-xl w-64 p-3">
                          <Link
                            to="/services/staff-augmentation"
                            className="block px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600"
                          >
                            Staff Augmentation
                          </Link>

                          <Link
                            to="/services/permanent-staffing-services"
                            className="block px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600"
                          >
                            Permanent Staffing Services
                          </Link>

                          <Link
                            to="/services/contract-staffing-services"
                            className="block px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600"
                          >
                            Contract Staffing Services
                          </Link>

                          <Link
                            to="/services/contract-to-hire"
                            className="block px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600"
                          >
                            Contract to Hire
                          </Link>
                        </div>
                      </div>
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
                        to="/products/product1"
                        className="block hover:text-purple-600 hover:bg-purple-50 transition py-2 px-3 text-sm xl:text-base 2xl:text-lg rounded-md"
                        onClick={() => handleNavigation("/products")}
                      >
                        Product 1
                      </Link>
                      <Link
                        to="/products/product2"
                        className="block hover:text-purple-600 hover:bg-purple-50 transition py-2 px-3 text-sm xl:text-base 2xl:text-lg rounded-md"
                        onClick={() => handleNavigation("/products/product-1")}
                      >
                        Product 2
                      </Link>
                      <Link
                        to="/products/product3"
                        className="block hover:text-purple-600 hover:bg-purple-50 transition py-2 px-3 text-sm xl:text-base 2xl:text-lg rounded-md"
                        onClick={() => handleNavigation("/products/product-2")}
                      >
                        Product 3
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
                        to="/blog/grid"
                        className="block hover:text-purple-600 hover:bg-purple-50 transition py-2 px-3 text-sm xl:text-base 2xl:text-lg rounded-md"
                        onClick={() => handleNavigation("/blog/grid")}
                      >
                        Blog Grid
                      </Link>
                      <Link
                        to="/blog/details/1"
                        className="block hover:text-purple-600 hover:bg-purple-50 transition py-2 px-3 text-sm xl:text-base 2xl:text-lg rounded-md"
                        onClick={() => handleNavigation("/blog/details/1")}
                      >
                        Blog Details
                      </Link>

                      <Link
                        to="/blog/sidebar"
                        className="block hover:text-purple-600 hover:bg-purple-50 transition py-2 px-3 text-sm xl:text-base 2xl:text-lg rounded-md"
                        onClick={() => handleNavigation("/blog/sidebar")}
                      >
                        Blog Sidebar
                      </Link>
                    </div>
                  )}
                </div>
                <Link
                  to="/careers"
                  className="hover:text-purple-300 transition duration-300 text-sm xl:text-base 2xl:text-lg whitespace-nowrap px-1 py-2"
                >
                  Careers
                </Link>
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
                <button
                  className="text-white text-lg xl:text-xl 2xl:text-2xl hover:text-purple-300 transition p-1"
                  aria-label="Search"
                >
                  <FiSearch />
                </button>

                <div className="relative">
                  <button
                    className="text-white text-lg xl:text-xl 2xl:text-2xl hover:text-purple-300 transition p-1"
                    aria-label="Cart"
                  >
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
                {mobileDropdowns.services && (
                  <div className="pl-8 pb-3 animate-fadeIn">
                    {/* Our Services */}
                    <Link
                      to="/services/ourservices"
                      className="block py-3 text-gray-200 hover:text-purple-300"
                      onClick={closeMobileMenu}
                    >
                      Our Services
                    </Link>
                    <Link
                      to="/services/servicedetails"
                      className="block py-2.5 text-gray-200 hover:text-purple-300 hover:bg-white/5 transition pl-4 text-base sm:text-lg rounded-r-lg border-l-2 border-purple-400"
                      onClick={closeMobileMenu}
                    >
                      Service Details
                    </Link>

                    {/* Development Services */}
                    <button
                      onClick={() => toggleSubDropdown("development")}
                      className="flex justify-between items-center w-full py-3 text-gray-200 hover:text-purple-300"
                    >
                      Development Services
                      <span>
                        {openSubDropdown === "development" ? (
                          <FiMinus size={18} />
                        ) : (
                          <FiPlus size={18} />
                        )}
                      </span>
                    </button>

                    {openSubDropdown === "development" && (
                      <div className="pl-5 space-y-2">
                        <Link
                          to="/services/application-integration"
                          className="block py-2 text-gray-300"
                          onClick={closeMobileMenu}
                        >
                          Application Integration
                        </Link>

                        <Link
                          to="/services/application-development"
                          className="block py-2 text-gray-300"
                          onClick={closeMobileMenu}
                        >
                          Application Development
                        </Link>

                        <Link
                          to="/services/data-migration"
                          className="block py-2 text-gray-300"
                          onClick={closeMobileMenu}
                        >
                          Data Migration
                        </Link>

                        <Link
                          to="/services/devops-cloud"
                          className="block py-2 text-gray-300"
                          onClick={closeMobileMenu}
                        >
                          DevOps & Cloud
                        </Link>

                        <Link
                          to="/services/snowflake"
                          className="block py-2 text-gray-300"
                          onClick={closeMobileMenu}
                        >
                          Snowflake
                        </Link>
                      </div>
                    )}
                    {/* Application Support */}
                    <button
                      onClick={() => toggleSubDropdown("applicationSupport")}
                      className="flex justify-between items-center w-full py-3 text-gray-200 hover:text-purple-300"
                    >
                      Application Support
                      <span>
                        {openSubDropdown === "applicationSupport" ? (
                          <FiMinus size={18} />
                        ) : (
                          <FiPlus size={18} />
                        )}
                      </span>
                    </button>

                    {openSubDropdown === "applicationSupport" && (
                      <div className="pl-5 space-y-2">
                        <Link
                          to="/services/implementation-services"
                          className="block py-2 text-gray-300"
                          onClick={closeMobileMenu}
                        >
                          Implementation Services
                        </Link>

                        <Link
                          to="/services/post-implementation-support"
                          className="block py-2 text-gray-300"
                          onClick={closeMobileMenu}
                        >
                          Post Implementation Support
                        </Link>

                        <Link
                          to="/services/troubleshooting-support"
                          className="block py-2 text-gray-300"
                          onClick={closeMobileMenu}
                        >
                          Troubleshooting Support
                        </Link>

                        <Link
                          to="/services/tech-support"
                          className="block py-2 text-gray-300"
                          onClick={closeMobileMenu}
                        >
                          Tech Support
                        </Link>
                        <button
                          onClick={() => toggleSubDropdown("uiux")}
                          className="flex justify-between items-center w-full py-3 text-gray-200 hover:text-purple-300"
                        >
                          UI / UX
                          {openSubDropdown === "uiux" ? (
                            <FiMinus size={18} />
                          ) : (
                            <FiPlus size={18} />
                          )}
                        </button>

                        {openSubDropdown === "uiux" && (
                          <div className="pl-5 space-y-2">
                            <Link
                              to="/services/dynamic-website"
                              className="block py-2 text-gray-300"
                              onClick={closeMobileMenu}
                            >
                              Dynamic Website
                            </Link>
                            <Link
                              to="/services/mobile-optimized-website"
                              className="block py-2 text-gray-300"
                              onClick={closeMobileMenu}
                            >
                              Mobile Optimized Website
                            </Link>
                            <Link
                              to="/services/responsive-web-design"
                              className="block py-2 text-gray-300"
                              onClick={closeMobileMenu}
                            >
                              Responsive Web Design
                            </Link>
                            <Link
                              to="/services/mobile-web-applications"
                              className="block py-2 text-gray-300"
                              onClick={closeMobileMenu}
                            >
                              Mobile Web Applications
                            </Link>
                            <Link
                              to="/services/web-design"
                              className="block py-2 text-gray-300"
                              onClick={closeMobileMenu}
                            >
                              Web Design
                            </Link>
                            <Link
                              to="/services/website-development-and-hosting"
                              className="block py-2 text-gray-300"
                              onClick={closeMobileMenu}
                            >
                              Website Development and Hosting
                            </Link>
                            <Link
                              to="/services/ecommerce-website-design-and-development"
                              className="block py-2 text-gray-300"
                              onClick={closeMobileMenu}
                            >
                              E-commerce Website Design and Development
                            </Link>
                          </div>
                        )}
                        {/* Digital Marketing */}
                        <button
                          onClick={() => toggleSubDropdown("digitalMarketing")}
                          className="flex justify-between items-center w-full py-3 text-gray-200 hover:text-purple-300"
                        >
                          Digital Marketing
                          <span>
                            {openSubDropdown === "digitalMarketing" ? (
                              <FiMinus size={18} />
                            ) : (
                              <FiPlus size={18} />
                            )}
                          </span>
                        </button>

                        {openSubDropdown === "digitalMarketing" && (
                          <div className="pl-5 space-y-2">
                            <Link
                              to="/services/search-engine-optimization"
                              className="block py-2 text-gray-300"
                              onClick={closeMobileMenu}
                            >
                              Search Engine Optimization
                            </Link>

                            <Link
                              to="/services/social-media-marketing"
                              className="block py-2 text-gray-300"
                              onClick={closeMobileMenu}
                            >
                              Social Media Marketing
                            </Link>

                            <Link
                              to="/services/search-engine-marketing"
                              className="block py-2 text-gray-300"
                              onClick={closeMobileMenu}
                            >
                              Search Engine Marketing
                            </Link>

                            <Link
                              to="/services/online-reputation-management"
                              className="block py-2 text-gray-300"
                              onClick={closeMobileMenu}
                            >
                              Online Reputation Management
                            </Link>

                            <Link
                              to="/services/strategy"
                              className="block py-2 text-gray-300"
                              onClick={closeMobileMenu}
                            >
                              Strategy
                            </Link>

                            <Link
                              to="/services/analytics"
                              className="block py-2 text-gray-300"
                              onClick={closeMobileMenu}
                            >
                              Analytics
                            </Link>
                          </div>
                        )}
                        {/* Software Testing */}
                        <button
                          onClick={() => toggleSubDropdown("softwareTesting")}
                          className="flex justify-between items-center w-full py-3 text-gray-200 hover:text-purple-300"
                        >
                          Software Testing
                          <span>
                            {openSubDropdown === "softwareTesting" ? (
                              <FiMinus size={18} />
                            ) : (
                              <FiPlus size={18} />
                            )}
                          </span>
                        </button>

                        {openSubDropdown === "softwareTesting" && (
                          <div className="pl-5 space-y-2">
                            <Link
                              to="/services/mobile-application-testing"
                              className="block py-2 text-gray-300"
                              onClick={closeMobileMenu}
                            >
                              Mobile Application Testing
                            </Link>

                            <Link
                              to="/services/manual-testing"
                              className="block py-2 text-gray-300"
                              onClick={closeMobileMenu}
                            >
                              Manual
                            </Link>

                            <Link
                              to="/services/automation-testing"
                              className="block py-2 text-gray-300"
                              onClick={closeMobileMenu}
                            >
                              Automation
                            </Link>
                          </div>
                        )}
                        {/* Data Science */}
                        <button
                          onClick={() => toggleSubDropdown("dataScience")}
                          className="flex justify-between items-center w-full py-3 text-gray-200 hover:text-purple-300"
                        >
                          Data Science
                          <span>
                            {openSubDropdown === "dataScience" ? (
                              <FiMinus size={18} />
                            ) : (
                              <FiPlus size={18} />
                            )}
                          </span>
                        </button>

                        {openSubDropdown === "dataScience" && (
                          <div className="pl-5 space-y-2">
                            <Link
                              to="/services/deep-learning"
                              className="block py-2 text-gray-300"
                              onClick={closeMobileMenu}
                            >
                              Deep Learning
                            </Link>

                            <Link
                              to="/services/artificial-intelligence"
                              className="block py-2 text-gray-300"
                              onClick={closeMobileMenu}
                            >
                              Artificial Intelligence
                            </Link>

                            <Link
                              to="/services/machine-learning"
                              className="block py-2 text-gray-300"
                              onClick={closeMobileMenu}
                            >
                              Machine Learning
                            </Link>

                            <Link
                              to="/services/ai-chatbots"
                              className="block py-2 text-gray-300"
                              onClick={closeMobileMenu}
                            >
                              AI Chatbots
                            </Link>

                            <Link
                              to="/services/technologies"
                              className="block py-2 text-gray-300"
                              onClick={closeMobileMenu}
                            >
                              Technologies
                            </Link>

                            <Link
                              to="/services/competencies"
                              className="block py-2 text-gray-300"
                              onClick={closeMobileMenu}
                            >
                              Competencies
                            </Link>
                          </div>
                        )}
                        {/* Staffing */}
                        <button
                          onClick={() => toggleSubDropdown("staffing")}
                          className="flex justify-between items-center w-full py-3 text-gray-200 hover:text-purple-300"
                        >
                          Staffing
                          <span>
                            {openSubDropdown === "staffing" ? (
                              <FiMinus size={18} />
                            ) : (
                              <FiPlus size={18} />
                            )}
                          </span>
                        </button>

                        {openSubDropdown === "staffing" && (
                          <div className="pl-5 space-y-2">
                            <Link
                              to="/services/staff-augmentation"
                              className="block py-2 text-gray-300"
                              onClick={closeMobileMenu}
                            >
                              Staff Augmentation
                            </Link>

                            <Link
                              to="/services/permanent-staffing-services"
                              className="block py-2 text-gray-300"
                              onClick={closeMobileMenu}
                            >
                              Permanent Staffing Services
                            </Link>

                            <Link
                              to="/services/contract-staffing-services"
                              className="block py-2 text-gray-300"
                              onClick={closeMobileMenu}
                            >
                              Contract Staffing Services
                            </Link>

                            <Link
                              to="/services/contract-to-hire"
                              className="block py-2 text-gray-300"
                              onClick={closeMobileMenu}
                            >
                              Contract to Hire
                            </Link>
                          </div>
                        )}
                        {/* Staffing */}
                        <button
                          onClick={() => toggleSubDropdown("staffing")}
                          className="flex justify-between items-center w-full py-3 text-gray-200 hover:text-purple-300"
                        >
                          Staffing
                          <span>
                            {openSubDropdown === "staffing" ? (
                              <FiMinus size={18} />
                            ) : (
                              <FiPlus size={18} />
                            )}
                          </span>
                        </button>

                        {openSubDropdown === "staffing" && (
                          <div className="pl-5 space-y-2">
                            <Link
                              to="/services/staff-augmentation"
                              className="block py-2 text-gray-300"
                              onClick={closeMobileMenu}
                            >
                              Staff Augmentation
                            </Link>

                            <Link
                              to="/services/permanent-staffing-services"
                              className="block py-2 text-gray-300"
                              onClick={closeMobileMenu}
                            >
                              Permanent Staffing Services
                            </Link>

                            <Link
                              to="/services/contract-staffing-services"
                              className="block py-2 text-gray-300"
                              onClick={closeMobileMenu}
                            >
                              Contract Staffing Services
                            </Link>

                            <Link
                              to="/services/contract-to-hire"
                              className="block py-2 text-gray-300"
                              onClick={closeMobileMenu}
                            >
                              Contract to Hire
                            </Link>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

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
                        to="/products/product1"
                        className="block py-2.5 text-gray-200 hover:text-purple-300 hover:bg-white/5 transition pl-4 text-base sm:text-lg rounded-r-lg border-l-2 border-purple-400"
                        onClick={closeMobileMenu}
                      >
                        product 1
                      </Link>
                      <Link
                        to="/products/product2"
                        className="block py-2.5 text-gray-200 hover:text-purple-300 hover:bg-white/5 transition pl-4 text-base sm:text-lg rounded-r-lg border-l-2 border-purple-400"
                        onClick={closeMobileMenu}
                      >
                        Product 2
                      </Link>
                      <Link
                        to="/products/product3"
                        className="block py-2.5 text-gray-200 hover:text-purple-300 hover:bg-white/5 transition pl-4 text-base sm:text-lg rounded-r-lg border-l-2 border-purple-400"
                        onClick={closeMobileMenu}
                      >
                        Product 3
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
                        to="/blog/grid"
                        className="block py-2.5 text-gray-200 hover:text-purple-300 hover:bg-white/5 transition pl-4 text-base sm:text-lg rounded-r-lg border-l-2 border-purple-400"
                        onClick={closeMobileMenu}
                      >
                        Blog Grid
                      </Link>

                      <Link
                        to="/blog/details"
                        className="block py-2.5 text-gray-200 hover:text-purple-300 hover:bg-white/5 transition pl-4 text-base sm:text-lg rounded-r-lg border-l-2 border-purple-400"
                        onClick={closeMobileMenu}
                      >
                        Blog Details
                      </Link>

                      <Link
                        to="/blog/sidebar"
                        className="block py-2.5 text-gray-200 hover:text-purple-300 hover:bg-white/5 transition pl-4 text-base sm:text-lg rounded-r-lg border-l-2 border-purple-400"
                        onClick={closeMobileMenu}
                      >
                        Blog Sidebar
                      </Link>
                    </div>
                  )}
                </div>
                <Link
                  to="/careers"
                  className="block py-3 sm:py-4 text-white text-lg sm:text-xl font-medium hover:text-purple-300 transition border-b border-white/20 px-4"
                  onClick={closeMobileMenu}
                >
                  Careers
                </Link>
                <Link
                  to="/contact"
                  className="block py-3 sm:py-4 text-white text-lg sm:text-xl font-medium hover:text-purple-300 transition border-b border-white/20 px-4"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>

                {/* Mobile Action Buttons */}
                <div className="flex items-center justify-center gap-8 sm:gap-10 pt-6 sm:pt-8 px-4">
                  <button
                    className="text-white text-2xl sm:text-3xl hover:text-purple-300 transition p-2"
                    aria-label="Search"
                  >
                    <FiSearch />
                  </button>
                  <div className="relative">
                    <button
                      className="text-white text-2xl sm:text-3xl hover:text-purple-300 transition p-2"
                      aria-label="Cart"
                    >
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
