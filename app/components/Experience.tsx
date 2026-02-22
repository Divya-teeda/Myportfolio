"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Flower1, CherryBlossom } from "./FlowerDecoration";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: "Cyepro Solutions Pvt. Ltd.",
      role: "Java Developer",
      period: "June 2023 – Feb 2026",
      techStack: "Java 8, Spring Boot, Spring Data JPA, MySQL, RabbitMQ, Docker",
      responsibilities: [
        "Designed and developed scalable RESTful microservices supporting enterprise Automobile CRM and Dealer Management systems.",
        "Implemented secure authentication and role-based authorization using Spring Security and JWT.",
        "Optimized complex SQL queries and bulk data operations (50K+ records per upload), improving API performance and response time.",
        "Integrated RabbitMQ for asynchronous inter-service communication, improving system scalability and reliability.",
        "Containerized backend services using Docker and supported deployments on Linux-based production environments.",
        "Diagnosed and resolved production issues through root cause analysis, maintaining 99%+ system availability.",
        "Participated in Agile development lifecycle including sprint planning, code reviews, and production releases.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="w-full flex justify-center py-20 md:py-32 px-6 relative"
      ref={ref}
    >
      {/* Decorative flowers */}
      <div className="absolute top-20 right-10 opacity-20 pointer-events-none">
        <Flower1 size={100} color="#f9a8d4" delay={0.2} />
      </div>
      <div className="absolute bottom-20 left-10 opacity-20 pointer-events-none">
        <CherryBlossom size={70} delay={0.4} />
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
              Professional Experience
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

        {/* Experience Timeline */}
        <div className="relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="rounded-3xl px-8 py-10 md:px-12 md:py-14"
              style={{
                background: "rgba(255, 255, 255, 0.75)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(255, 255, 255, 0.8)",
                boxShadow: "0 8px 32px rgba(236, 72, 153, 0.08)",
              }}
              initial={{ opacity: 0, x: -100, rotateY: 20 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -100, rotateY: 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div>
                  <motion.h3
                    className="text-2xl md:text-3xl font-bold mb-2"
                    style={{
                      background: "linear-gradient(135deg, #be185d, #ec4899)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {exp.company}
                  </motion.h3>
                  <motion.p
                    className="text-lg text-pink-500 font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                  >
                    {exp.role}
                  </motion.p>
                </div>
                <motion.span
                  className="px-5 py-2 rounded-full text-sm font-medium text-pink-600 self-start"
                  style={{
                    background: "linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(244, 114, 182, 0.2))",
                    border: "1px solid rgba(236, 72, 153, 0.3)",
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  📅 {exp.period}
                </motion.span>
              </div>

              {/* Tech Stack */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="text-sm text-gray-500 mb-2">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.split(", ").map((tech, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-medium text-gray-600"
                      style={{
                        background: "linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(244, 114, 182, 0.15))",
                        border: "1px solid rgba(236, 72, 153, 0.2)",
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Responsibilities */}
              <div className="space-y-4">
                <p className="text-sm text-gray-500 font-medium">Key Responsibilities:</p>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, i) => (
                    <motion.li
                      key={i}
                      className="flex gap-3 text-gray-600 text-sm md:text-base"
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                    >
                      <span className="text-pink-400 mt-1">🌸</span>
                      <span>{resp}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;