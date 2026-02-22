"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Flower2, Sparkle } from "./FlowerDecoration";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Cyepro Smart Sales CRM Platform",
      domain: "Customer Relationship & Sales Management",
      description: [
        "Developed backend services for lead management, customer lifecycle tracking, sales pipeline automation, and reporting dashboards.",
        "Designed reusable REST APIs enabling seamless frontend integration and improving module scalability.",
        "Implemented secure access control mechanisms for different business roles (Admin, Sales Executive, Manager).",
        "Improved database query efficiency to support high-volume CRM operations.",
      ],
      techStack: ["Java 8", "Spring Boot", "MySQL", "REST APIs", "Spring Security"],
    },
    {
      title: "Automobile Dealer Management System (DMS)",
      domain: "Dealer Operations, Inventory & Transaction Management",
      description: [
        "Built backend modules for dealer onboarding, vehicle inventory management, booking workflows, billing, and commission tracking.",
        "Designed transactional workflows ensuring data consistency across inventory and financial operations.",
        "Integrated RabbitMQ for asynchronous booking confirmations and notification processing.",
        "Optimized reporting queries and improved concurrent request handling for dealer-level operations.",
      ],
      techStack: ["Java 8", "Spring Boot", "MySQL", "RabbitMQ", "Docker"],
    },
  ];

  return (
    <section
      id="projects"
      className="w-full flex justify-center py-20 md:py-32 px-6 relative"
      ref={ref}
    >
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-20 pointer-events-none">
        <Flower2 size={90} color="#f9a8d4" delay={0.2} />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 pointer-events-none">
        <Sparkle color="#f472b6" />
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
              Enterprise Projects
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

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="rounded-3xl px-8 py-10 md:px-12 md:py-14"
              style={{
                background: "rgba(255, 255, 255, 0.75)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(255, 255, 255, 0.8)",
                boxShadow: "0 8px 32px rgba(236, 72, 153, 0.08)",
              }}
              initial={{ opacity: 0, y: 100, scale: 0.9, rotateX: 15 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : { opacity: 0, y: 100, scale: 0.9, rotateX: 15 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15, ease: "easeOut" }}
              whileHover={{ scale: 1.01, y: -5 }}
            >
              {/* Header */}
              <div className="mb-6">
                <motion.h3
                  className="text-xl md:text-2xl font-bold mb-2"
                  style={{
                    background: "linear-gradient(135deg, #be185d, #ec4899)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  initial={{ opacity: 0, x: -40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  {project.title}
                </motion.h3>
                <motion.span
                  className="inline-block px-4 py-1 rounded-full text-xs font-medium text-pink-600"
                  style={{
                    background: "linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(244, 114, 182, 0.2))",
                    border: "1px solid rgba(236, 72, 153, 0.3)",
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.4, delay: 0.35 + index * 0.1 }}
                >
                  🏢 {project.domain}
                </motion.span>
              </div>

              {/* Description List */}
              <ul className="space-y-3 mb-6">
                {project.description.map((desc, i) => (
                  <motion.li
                    key={i}
                    className="flex gap-3 text-gray-600 text-sm md:text-base"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.08 + index * 0.1 }}
                  >
                    <span className="text-pink-400 mt-1">✨</span>
                    <span>{desc}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="px-4 py-2 rounded-full text-sm font-medium text-gray-600"
                    style={{
                      background: "linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(244, 114, 182, 0.15))",
                      border: "1px solid rgba(236, 72, 153, 0.2)",
                    }}
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.05 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;