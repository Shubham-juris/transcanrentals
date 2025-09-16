import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import Contact from "../page/Contact";
import About from "../page/About";
import Services from "../page/Services";
import Fleet from "../page/Fleet";
import Pricing from "../page/Pricing";
import { ScrollToTop } from "../ScrollToTop";

const AppRoutes = () => {
  return (
    <main className="min-h-screen py-7 ">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
};

export default AppRoutes;
