import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer"

function App() {
  return (
    <><Navbar/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      {/* <Route path="/contact" element = {<Contact/>}/> */}
    </Routes>
    <Footer/>
    
    </>
   
  );
}

export default App;
