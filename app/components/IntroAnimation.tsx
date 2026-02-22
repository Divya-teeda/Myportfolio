"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// Inline styles for initial visibility (in case JS doesn't hydrate)
const logoContainerStyle = {
  boxShadow: "0 25px 50px -12px rgba(236, 72, 153, 0.5)",
  border: "4px solid rgba(255, 255, 255, 0.5)",
  animation: "scaleIn 0.8s ease-out forwards",
};

const nameContainerStyle = {
  animation: "fadeInUp 0.6s ease-out 1.5s forwards",
  opacity: 0,
};

const titleStyle = {
  animation: "fadeIn 0.5s ease-out 2s forwards",
  opacity: 0,
};

const dotsContainerStyle = {
  animation: "fadeIn 0.5s ease-out 2.5s forwards",
  opacity: 0,
};

const welcomeStyle = {
  animation: "fadeInUp 0.6s ease-out 3s forwards",
  opacity: 0,
};

interface IntroAnimationProps {
  isLoading: boolean;
  onComplete: () => void;
}

const IntroAnimation = ({ isLoading, onComplete }: IntroAnimationProps) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const timer1 = setTimeout(() => setPhase(1), 1500);
      const timer2 = setTimeout(() => setPhase(2), 3000);
      const timer3 = setTimeout(() => onComplete(), 4000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [isLoading, onComplete]);

  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.5, ease: "easeInOut" as const },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 25%, #fbcfe8 50%, #f9a8d4 75%, #f472b6 100%)",
          }}
          variants={containerVariants}
          exit="exit"
        >
          {/* Floating petals background - reduced for performance */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${15 + i * 15}%`,
                  top: `${10 + (i % 3) * 30}%`,
                }}
                animate={{
                  y: [0, -50],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              >
                <svg width="15" height="15" viewBox="0 0 20 20">
                  <ellipse cx="10" cy="10" rx="8" ry="5" fill="#fff" opacity="0.6" />
                </svg>
              </motion.div>
            ))}
          </div>

          {/* Logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden"
            style={{
              boxShadow: "0 25px 50px -12px rgba(236, 72, 153, 0.5)",
              border: "4px solid rgba(255, 255, 255, 0.5)",
            }}
          >
            <img 
              src="hero.jpg" 
              alt="Divya Pavani Teeda Logo" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Name and Title */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-2"
              style={{
                fontFamily: "'Playfair Display', serif",
                background: "linear-gradient(135deg, #be185d, #ec4899, #fff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Divya Pavani Teeda
            </motion.h1>
            <motion.p
              className="text-lg text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              ✨ Java Developer ✨
            </motion.p>
          </motion.div>

          {/* Loading dots */}
          <motion.div
            className="mt-8 flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full bg-white"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>

          {/* Welcome text */}
          <motion.p
            className="mt-6 text-white/80 text-sm"
            variants={textVariants}
            initial="hidden"
            animate={phase >= 2 ? "visible" : "hidden"}
          >
            🌸 Welcome to my portfolio 🌸
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;