import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Home/Navbar.jsx";
import Footer from "./components/Layout/Footer";
import SubscribeSection from "./components/Home/SubscribeSection.jsx";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs.jsx";
import BlogGridPage from "./pages/Blog/BlogGridPage";
import BlogDetailsPage from "./pages/Blog/BlogDetailsPage";
import BlogSidebarPage from "./pages/Blog/BlogSidebarPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full overflow-x-hidden">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/grid" element={<BlogGridPage />} />
          <Route path="/blog/details" element={<BlogDetailsPage />} />
          <Route path="/blog/sidebar" element={<BlogSidebarPage />} />
        </Routes>
        <SubscribeSection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
