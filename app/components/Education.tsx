"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CherryBlossom, Flower1 } from "./FlowerDecoration";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = {
    degree: "Bachelor of Science (B.Sc)",
    institution: "Aditya Degree College, Eluru, Andhra Pradesh",
    period: "2019 – 2022",
  };

  return (
    <section
      id="education"
      className="w-full flex justify-center py-20 md:py-32 px-6 relative"
      ref={ref}
    >
      {/* Decorative flowers */}
      <div className="absolute top-10 right-10 opacity-20 pointer-events-none">
        <CherryBlossom size={80} delay={0.2} />
      </div>
      <div className="absolute bottom-10 left-10 opacity-20 pointer-events-none">
        <Flower1 size={60} color="#f9a8d4" delay={0.4} />
      </div>

      {/* Content Container - Centered */}
      <div className="w-full relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.9 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span
              style={{
                background: "linear-gradient(135deg, #be185d, #ec4899, #f472b6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Education
            </span>
          </h2>
          <motion.div
            className="w-20 h-1 mx-auto rounded"
            style={{ background: "linear-gradient(90deg, #f472b6, #ec4899)" }}
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        {/* Education Card - Centered */}
        <motion.div
          className="w-full max-w-xl mx-auto rounded-3xl px-8 py-10 md:px-12 md:py-14 text-center"
          style={{
            background: "rgba(255, 255, 255, 0.75)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(255, 255, 255, 0.8)",
            boxShadow: "0 8px 32px rgba(236, 72, 153, 0.08)",
          }}
          initial={{ opacity: 0, y: 100, scale: 0.8, rotateY: 15 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateY: 0 } : { opacity: 0, y: 100, scale: 0.8, rotateY: 15 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          {/* Graduation Icon */}
          <motion.div
            className="text-6xl mb-6"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -180 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            🎓
          </motion.div>

          {/* Degree */}
          <motion.h3
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{
              background: "linear-gradient(135deg, #be185d, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {education.degree}
          </motion.h3>

          {/* Institution */}
          <motion.p
            className="text-gray-600 text-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            📍 {education.institution}
          </motion.p>

          {/* Period Badge */}
          <motion.span
            className="inline-block px-6 py-3 rounded-full text-sm font-medium text-pink-600"
            style={{
              background: "linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(244, 114, 182, 0.2))",
              border: "1px solid rgba(236, 72, 153, 0.3)",
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: 0.6, type: "spring", bounce: 0.5 }}
          >
            📅 {education.period}
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;