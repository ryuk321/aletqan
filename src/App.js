import React from "react";
import { BrowserRouter, Route, Routes,Redirect } from "react-router-dom";


import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer"

function App() {
  return (
    <><Navbar/>
      <Home/>
     <Routes >
      
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exactpath="/about" element={<About />} />
      <Route exactpath="/services" element={<Services />} />
      {/* <Route path="/contact" element = {<Contact/>}/> */}
   
      
    </Routes>
    <Footer/>
    
    </>
   
  );
}

export default App;
