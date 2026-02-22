"use client";

import { useState, useEffect } from "react";
import IntroAnimation from "./components/IntroAnimation";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // Only show intro animation on client-side after hydration
    setShowIntro(true);
    
    const timer = setTimeout(() => {
      setContentVisible(true);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen w-full flex flex-col items-center relative">
      {/* Background Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 20%, rgba(252, 231, 243, 0.6) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(251, 207, 232, 0.4) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(249, 168, 212, 0.2) 0%, transparent 70%)
          `
        }}
      />
      
      {/* Intro Animation - only on client, covers content */}
      {showIntro && !contentVisible && (
        <IntroAnimation isLoading={!contentVisible} onComplete={() => setContentVisible(true)} />
      )}
      
      {/* Main Content - always in DOM */}
      <div style={{ visibility: contentVisible ? 'visible' : 'hidden' }}>
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
