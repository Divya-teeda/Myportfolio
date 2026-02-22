"use client";

import { motion } from "framer-motion";

interface DivyaLogoProps {
  size?: number;
  animated?: boolean;
}

export const DivyaLogo: React.FC<DivyaLogoProps> = ({ size = 100, animated = true }) => {
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    }),
  };

  const flowerVariants = {
    hidden: { scale: 0, rotate: 0 },
    visible: {
      scale: 1,
      rotate: 360,
      transition: {
        duration: 1.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.div
      className="relative flex items-center justify-center"
      initial={animated ? "hidden" : "visible"}
      animate="visible"
    >
      {/* Background Flower */}
      <motion.svg
        width={size * 1.5}
        height={size * 1.5}
        viewBox="0 0 100 100"
        className="absolute"
        variants={flowerVariants}
      >
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <motion.ellipse
            key={i}
            cx="50"
            cy="25"
            rx="12"
            ry="20"
            fill={i % 2 === 0 ? "#fce7f3" : "#fbcfe8"}
            transform={`rotate(${angle} 50 50)`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.05, duration: 0.3 }}
          />
        ))}
        <circle cx="50" cy="50" r="10" fill="#f472b6" />
      </motion.svg>

      {/* Logo Text */}
      <motion.div
        className="relative z-10 flex items-center justify-center rounded-full bg-white shadow-lg"
        style={{
          width: size,
          height: size,
          background: "linear-gradient(135deg, #fff 0%, #fdf2f8 100%)",
          boxShadow: "0 10px 40px rgba(236, 72, 153, 0.3)",
        }}
      >
        <div className="flex font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
          {["D", "P", "T"].map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              className="text-2xl"
              style={{
                background: "linear-gradient(135deg, #ec4899, #be185d)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: size * 0.35,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Decorative petals */}
      {[0, 120, 240].map((angle, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            transform: `rotate(${angle}deg) translateY(-${size * 0.7}px)`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 + i * 0.1, duration: 0.3 }}
        >
          <svg width="20" height="30" viewBox="0 0 20 30">
            <ellipse cx="10" cy="15" rx="8" ry="14" fill="#fce7f3" opacity="0.9" />
          </svg>
        </motion.div>
      ))}
    </motion.div>
  );
};

export const DivyaLogoMinimal: React.FC<{ size?: number }> = ({ size = 40 }) => {
  return (
    <div
      className="flex items-center justify-center rounded-full"
      style={{
        width: size,
        height: size,
        background: "linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)",
        boxShadow: "0 4px 15px rgba(236, 72, 153, 0.3)",
      }}
    >
      <span
        className="font-bold"
        style={{
          fontFamily: "'Playfair Display', serif",
          background: "linear-gradient(135deg, #ec4899, #be185d)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: size * 0.4,
        }}
      >
        DPT
      </span>
    </div>
  );
};

export default DivyaLogo;