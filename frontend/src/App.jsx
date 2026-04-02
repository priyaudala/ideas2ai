import React from "react";
import Home from "./pages/Home";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Home/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;