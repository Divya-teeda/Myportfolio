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
  const [mounted, setMounted] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const timer = setTimeout(() => {
      setShowIntro(false);
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
      
      {/* Intro Animation */}
      {mounted && showIntro && (
        <IntroAnimation isLoading={showIntro} onComplete={() => {
          setShowIntro(false);
          setContentVisible(true);
        }} />
      )}
      
      {/* Main Content */}
      <div 
        className="transition-opacity duration-700 ease-in-out"
        style={{ 
          visibility: contentVisible ? 'visible' : 'hidden',
          opacity: contentVisible ? 1 : 0,
        }}
      >
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
