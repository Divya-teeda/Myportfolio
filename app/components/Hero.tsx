"use client";

import { motion } from "framer-motion";
import { CherryBlossom, Flower1, Flower2 } from "./FlowerDecoration";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen w-full flex items-center justify-center px-6 py-20 relative"
      style={{ background: "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #fbcfe8 100%)" }}
    >
      {/* Decorative flowers */}
      <div className="absolute top-20 left-10 opacity-30 pointer-events-none">
        <CherryBlossom size={80} delay={0.2} />
      </div>
      <div className="absolute top-40 right-20 opacity-30 pointer-events-none">
        <Flower1 size={60} color="#f9a8d4" delay={0.4} />
      </div>
      <div className="absolute bottom-40 left-20 opacity-30 pointer-events-none">
        <Flower2 size={70} color="#f472b6" delay={0.6} />
      </div>

      {/* Main Content - Centered */}
      <div className="flex flex-col items-center text-center z-10 w-full">
        {/* Logo Circle */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="mb-10"
        >
          <div
            className="w-40 h-40 md:w-52 md:h-52 rounded-full flex items-center justify-center overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #fff 0%, #fdf2f8 100%)",
              boxShadow: "0 25px 50px -12px rgba(236, 72, 153, 0.35)",
            }}
          >
            <img 
              src="hero.jpg" 
              alt="Divya Pavani Teeda Logo" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span
            style={{
              background: "linear-gradient(135deg, #be185d, #ec4899, #f472b6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Divya Pavani Teeda
          </span>
        </motion.h1>

        {/* Title Badge */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <span
            className="px-6 py-3 rounded-full text-base md:text-lg font-medium inline-block"
            style={{
              background: "linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(244, 114, 182, 0.2))",
              border: "2px solid rgba(236, 72, 153, 0.3)",
              color: "#be185d",
            }}
          >
            ☕ Java Developer
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Building scalable, secure, and high-performance Spring Boot microservices
          for enterprise platforms with 🌸 passion
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.a
            href="#contact"
            className="px-8 py-4 rounded-full font-semibold text-white text-center inline-block transition-transform"
            style={{
              background: "linear-gradient(135deg, #ec4899 0%, #f472b6 50%, #f9a8d4 100%)",
              boxShadow: "0 10px 30px rgba(236, 72, 153, 0.4)",
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15 }}
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="#projects"
            className="px-8 py-4 rounded-full font-semibold text-center inline-block transition-transform"
            style={{
              background: "rgba(255, 255, 255, 0.9)",
              border: "2px solid rgba(236, 72, 153, 0.5)",
              color: "#be185d",
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15 }}
          >
            View Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;