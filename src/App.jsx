import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lenis from "lenis";

import Navbar from "./components/Navbar";
import Homepage from "./page/Homepage";
import MediaIcons from "./components/MediaIcons";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SkillsPage from "./page/SkillsPage";
import ProjectsPage from "./page/ProjectsPage";
import ContactPage from "./page/ContactPage";
import NotFound from "./components/NotFound";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <div className="relative overflow-auto">
        {/* Navbar fixed top */}
        <div className="fixed top-0 left-0 w-full z-50">
              <Navbar/>
        </div>
        <ScrollToTop />
        
        {/* Page Content with padding-top so Navbar doesn't overlap */}
        <div className="pt-[80px] ">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <MediaIcons />
        <Footer/>
      </div>
    </div>
  );
}
