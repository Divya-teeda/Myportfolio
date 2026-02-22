"use client";

import { motion } from "framer-motion";

interface FlowerProps {
  size?: number;
  color?: string;
  delay?: number;
}

export const Flower1: React.FC<FlowerProps> = ({ size = 50, color = "#fce7f3", delay = 0 }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 50 50"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
  >
    {[0, 72, 144, 216, 288].map((angle, i) => (
      <ellipse
        key={i}
        cx="25"
        cy="12"
        rx="6"
        ry="10"
        fill={color}
        transform={`rotate(${angle} 25 25)`}
      />
    ))}
    <circle cx="25" cy="25" r="5" fill="#fbbf24" />
  </motion.svg>
);

export const Flower2: React.FC<FlowerProps> = ({ size = 50, color = "#fbcfe8", delay = 0 }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 50 50"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
  >
    {[0, 60, 120, 180, 240, 300].map((angle, i) => (
      <ellipse
        key={i}
        cx="25"
        cy="10"
        rx="7"
        ry="12"
        fill={color}
        transform={`rotate(${angle} 25 25)`}
      />
    ))}
    <circle cx="25" cy="25" r="6" fill="#fcd34d" />
  </motion.svg>
);

export const CherryBlossom: React.FC<FlowerProps> = ({ size = 50, delay = 0 }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 50 50"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
  >
    {[0, 72, 144, 216, 288].map((angle, i) => (
      <path
        key={i}
        d="M25 25 Q30 15 25 5 Q20 15 25 25"
        fill="#fce7f3"
        stroke="#f9a8d4"
        strokeWidth="0.5"
        transform={`rotate(${angle} 25 25)`}
      />
    ))}
    <circle cx="25" cy="25" r="4" fill="#fbbf24" />
  </motion.svg>
);

export const Sparkle: React.FC<{ color?: string }> = ({ color = "#fbbf24" }) => (
  <motion.svg width="20" height="20" viewBox="0 0 20 20">
    <path
      d="M10 0 L11.5 8.5 L20 10 L11.5 11.5 L10 20 L8.5 11.5 L0 10 L8.5 8.5 Z"
      fill={color}
    />
  </motion.svg>
);

export const Petal: React.FC<{ color?: string; rotation?: number }> = ({ 
  color = "#fce7f3", 
  rotation = 0 
}) => (
  <svg
    width="20"
    height="35"
    viewBox="0 0 20 35"
    style={{ transform: `rotate(${rotation}deg)` }}
  >
    <ellipse cx="10" cy="17.5" rx="8" ry="15" fill={color} opacity="0.8" />
  </svg>
);