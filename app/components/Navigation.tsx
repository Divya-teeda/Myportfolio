"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const tabsRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  // Auto-scroll to active tab
  useEffect(() => {
    const activeTab = tabsRefs.current[activeSection];
    const container = tabsContainerRef.current;
    
    if (activeTab && container) {
      const containerRect = container.getBoundingClientRect();
      const tabRect = activeTab.getBoundingClientRect();
      
      // Check if tab is outside visible area
      const isOutOfView = 
        tabRect.left < containerRect.left || 
        tabRect.right > containerRect.right;
      
      if (isOutOfView) {
        activeTab.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  }, [activeSection]);

  useEffect(() => {
    setActiveSection("hero");
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 w-full flex justify-center overflow-hidden"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="mx-4 mt-4 px-4 py-3 rounded-full max-w-full"
        style={{
          background: isScrolled 
            ? "rgba(255, 255, 255, 0.85)" 
            : "transparent",
          backdropFilter: isScrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(20px)" : "none",
          boxShadow: isScrolled 
            ? "0 8px 32px rgba(236, 72, 153, 0.15)" 
            : "none",
          border: isScrolled ? "1px solid rgba(255, 255, 255, 0.8)" : "none",
        }}
      >
        {/* Scrollable Navigation Tabs */}
        <div 
          ref={tabsContainerRef}
          className="flex items-center gap-1 overflow-x-auto scrollbar-hide max-w-fit"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <motion.a
                key={link.name}
                ref={(el) => { tabsRefs.current[link.href.substring(1)] = el; }}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium no-underline rounded-full transition-colors whitespace-nowrap flex-shrink-0"
                style={{
                  color: isActive ? "#be185d" : "#6b7280",
                }}
                whileHover={{ scale: 1.05 }}
              >
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(244, 114, 182, 0.2))",
                      border: "1px solid rgba(236, 72, 153, 0.25)",
                    }}
                    layoutId="activeTab"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </motion.a>
            );
          })}
          
          {/* Hire Me Button */}
          <motion.a
            href="#contact"
            className="px-5 py-2 text-sm font-semibold text-white no-underline rounded-full whitespace-nowrap flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, #ec4899, #f472b6)",
              boxShadow: "0 4px 15px rgba(236, 72, 153, 0.35)",
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 6px 20px rgba(236, 72, 153, 0.45)" }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;