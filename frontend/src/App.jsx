import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Home/Navbar.jsx";
import Footer from "./components/Layout/Footer";
import SubscribeSection from "./components/Home/SubscribeSection.jsx";

import Home from "./pages/Home";
import OurservicesPage from "./pages/Service/OurServicesPage.jsx";
import Pricing from "./pages/Pricing.jsx";
import ServiceDetailsPage from "./pages/Service/ServiceDetailsPage.jsx";
import DevelopmentServicesPage from "./pages/Service/DevelopmentServicespage.jsx";
import ApplicationSupportPage from "./pages/Service/ApplicationSupportPage.jsx";
import UiUxPage from "./pages/Service/UiUxPage.jsx";
import DigitalMarketingPage from "./pages/Service/DigitalMarketingPage.jsx";
import SoftwareTestingPage from "./pages/Service/SoftwareTestingPage.jsx";
import DataSciencePage from "./pages/Service/DataSciencePage.jsx";
import StaffingPage from "./pages/Service/StaffingPage.jsx";
import Product1Page from "./pages/Product/Product1Page.jsx";
import Product2Page from "./pages/Product/Product2Page.jsx";
import Product3Page from "./pages/Product/Product3Page.jsx";
import Careers from "./pages/Careers.jsx";
import FullStackDetails from "./components/careers/FullStackDetails.jsx";
import DataEngineerDetails from "./components/careers/DataEngineerDetails.jsx";
import AzureCloudDetails from "./components/careers/AzureCloudDetails.jsx";
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
          <Route
            path="/services/development-services"
            element={<DevelopmentServicesPage />}
          />
          <Route
            path="/services/application-support"
            element={<ApplicationSupportPage />}
          />
          <Route path="/services/ui-ux" element={<UiUxPage />} />
          <Route
            path="/services/digital-marketing"
            element={<DigitalMarketingPage />}
          />
          <Route
            path="/services/software-testing"
            element={<SoftwareTestingPage />}
          />
          <Route path="/services/data-science" element={<DataSciencePage />} />
          <Route path="/services/staffing" element={<StaffingPage />} />
          <Route path="/products/product1" element={<Product1Page />} />
          <Route path="/products/product2" element={<Product2Page />} />
          <Route path="/products/product3" element={<Product3Page />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/grid" element={<BlogGridPage />} />
          <Route path="/blog/details/:id" element={<BlogDetailsPage />} />
          <Route path="/blog/sidebar" element={<BlogSidebarPage />} />
          <Route path="/careers" element={<Careers />} />
          <Route
        path="/careers/full-stack-developer"
        element={<FullStackDetails />}
      />

      <Route
        path="/careers/azure-cloud-engineer"
        element={<AzureCloudDetails />}
      />

      <Route
        path="/careers/data-engineer"
        element={<DataEngineerDetails />}
      />
        </Routes>
        <SubscribeSection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
