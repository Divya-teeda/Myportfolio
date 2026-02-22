"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Flower1, CherryBlossom } from "./FlowerDecoration";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: "☕", title: "3+ Years", subtitle: "Experience", color: "#ec4899" },
    { icon: "🚀", title: "50K+", subtitle: "Records Handled", color: "#f472b6" },
    { icon: "✅", title: "99%+", subtitle: "System Uptime", color: "#f9a8d4" },
    { icon: "🏆", title: "Enterprise", subtitle: "Projects", color: "#ec4899" },
  ];

  return (
    <section
      id="about"
      className="w-full flex justify-center py-20 md:py-32 px-6 relative"
      ref={ref}
    >
      {/* Decorative flowers */}
      <div className="absolute top-10 right-10 opacity-20 pointer-events-none">
        <Flower1 size={120} color="#f9a8d4" delay={0.2} />
      </div>
      <div className="absolute bottom-10 left-10 opacity-20 pointer-events-none">
        <CherryBlossom size={80} delay={0.4} />
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
              About Me
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

        {/* Main Content Card - Centered */}
        <motion.div
          className="w-full rounded-3xl mb-16 px-8 py-10 md:px-16 md:py-14"
          style={{
            background: "rgba(255, 255, 255, 0.75)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(255, 255, 255, 0.8)",
            boxShadow: "0 8px 32px rgba(236, 72, 153, 0.08)",
          }}
          initial={{ opacity: 0, y: 100, rotateX: 10 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 100, rotateX: 10 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="text-center max-w-3xl mx-auto">
            <motion.p
              className="text-gray-600 text-base md:text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Java Developer with <span className="text-pink-500 font-semibold">3+ years of experience</span> building 
              scalable, secure, and high-performance Spring Boot microservices for enterprise Automobile CRM 
              and Dealer Management platforms.
            </motion.p>
            <motion.p
              className="text-gray-600 text-base md:text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Strong expertise in <span className="text-pink-500 font-semibold">REST API development</span>, database 
              optimization, JWT-based authentication, and asynchronous messaging using RabbitMQ.
            </motion.p>
            <motion.p
              className="text-gray-600 text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Experienced in handling <span className="text-pink-500 font-semibold">high-volume data processing</span> (50K+ records) 
              and maintaining reliable production systems with 99%+ availability.
            </motion.p>
          </div>
        </motion.div>

        {/* Highlight Cards Grid - Centered */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-3xl px-6 py-8 text-center"
              style={{
                background: "rgba(255, 255, 255, 0.75)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(255, 255, 255, 0.8)",
                boxShadow: "0 8px 32px rgba(236, 72, 153, 0.08)",
              }}
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15, ease: "easeOut" }}
              whileHover={{ scale: 1.08, y: -5 }}
            >
              <motion.span
                className="text-4xl md:text-5xl mb-4 block"
                animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              >
                {item.icon}
              </motion.span>
              <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: item.color }}>
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm md:text-base">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;