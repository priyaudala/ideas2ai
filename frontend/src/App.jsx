import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Home/Navbar.jsx";
import Footer from "./components/Layout/Footer";
import SubscribeSection from "./components/Home/SubscribeSection.jsx";

import Home from "./pages/Home";
import OurservicesPage from "./pages/Service/OurServicesPage.jsx";
import Pricing from "./pages/Pricing.jsx";
import ServiceDetailsPage from "./pages/Service/ServiceDetailsPage.jsx";
import Product1Page from "./pages/Product/Product1Page.jsx";
import Product2Page from "./pages/Product/Product2Page.jsx";
import Product3Page from "./pages/Product/Product3Page.jsx";
import Products from "./pages/Products.jsx";
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
          <Route path="/services/ourservices" element={<OurservicesPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route
            path="/services/servicedetails"
            element={<ServiceDetailsPage />}
          />
          <Route path="/products/product1" element={<Product1Page />} />
          <Route path="/products/product2" element={<Product2Page />} />
          <Route path="/products/product3" element={<Product3Page />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/grid" element={<BlogGridPage />} />
          <Route path="/blog/details/:id" element={<BlogDetailsPage />} />
          <Route path="/blog/sidebar" element={<BlogSidebarPage />} />
        </Routes>
        <SubscribeSection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
