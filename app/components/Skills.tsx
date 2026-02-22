"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Flower2, Sparkle } from "./FlowerDecoration";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Backend Development",
      icon: "☕",
      skills: ["Java 8", "Spring Boot", "Spring MVC", "Spring Data JPA", "Microservices", "REST APIs"],
    },
    {
      title: "Security & Messaging",
      icon: "🔐",
      skills: ["Spring Security", "JWT", "RabbitMQ", "OAuth2"],
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["MySQL", "PostgreSQL", "Supabase"],
    },
    {
      title: "DevOps & Tools",
      icon: "⚙️",
      skills: ["Docker", "Kubernetes", "Git", "GitHub", "CI/CD"],
    },
    {
      title: "Core Concepts",
      icon: "📚",
      skills: ["OOP", "Distributed Systems", "API Design", "Agile/Scrum"],
    },
  ];

  return (
    <section
      id="skills"
      className="w-full flex justify-center py-20 md:py-32 px-6 relative"
      ref={ref}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-20 pointer-events-none">
        <Flower2 size={80} color="#f9a8d4" delay={0.3} />
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
              Technical Skills
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

        {/* Skills Grid - Centered */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="rounded-3xl px-8 py-10"
              style={{
                background: "rgba(255, 255, 255, 0.75)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(255, 255, 255, 0.8)",
                boxShadow: "0 8px 32px rgba(236, 72, 153, 0.08)",
              }}
              initial={{ opacity: 0, y: 80, scale: 0.8, rotateY: 15 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateY: 0 } : { opacity: 0, y: 80, scale: 0.8, rotateY: 15 }}
              transition={{ duration: 0.7, delay: 0.1 + index * 0.12, ease: "easeOut" }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <motion.div 
                className="flex items-center gap-3 mb-5"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <motion.span 
                  className="text-3xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                >
                  {category.icon}
                </motion.span>
                <h3
                  className="text-lg font-bold"
                  style={{
                    background: "linear-gradient(135deg, #be185d, #ec4899)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {category.title}
                </h3>
              </motion.div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="px-4 py-2 rounded-full text-sm font-medium text-gray-600"
                    style={{
                      background: "linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(244, 114, 182, 0.15))",
                      border: "1px solid rgba(236, 72, 153, 0.2)",
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.05 + index * 0.05 }}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(236, 72, 153, 0.2)" }}
                  >
                    {skill}
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

export default Skills;