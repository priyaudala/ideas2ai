import React from "react";
import Home from "./pages/Home";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Home/Navbar.jsx";

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
