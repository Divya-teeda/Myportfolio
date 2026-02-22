"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Flower2, Sparkle, CherryBlossom } from "./FlowerDecoration";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "teedadivya197@gmail.com",
      href: "mailto:teedadivya197@gmail.com",
    },
    // {
    //   icon: "📱",
    //   label: "Phone",
    //   value: "+91 9182752465",
    //   href: "tel:+919182752465",
    // },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/divya-pavani-teeda",
      href: "https://linkedin.com/in/divya-pavani-teeda",
    },
  ];

  return (
    <section
      id="contact"
      className="w-full flex justify-center py-20 md:py-32 px-6 relative"
      ref={ref}
    >
      {/* Decorative flowers */}
      <div className="absolute top-10 left-10 opacity-20 pointer-events-none">
        <Flower2 size={80} color="#f9a8d4" delay={0.2} />
      </div>
      <div className="absolute top-20 right-10 opacity-20 pointer-events-none">
        <CherryBlossom size={60} delay={0.4} />
      </div>
      <div className="absolute bottom-10 left-1/4 opacity-20 pointer-events-none">
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
              Get In Touch
            </span>
          </h2>
          <motion.div
            className="w-20 h-1 mx-auto rounded"
            style={{ background: "linear-gradient(90deg, #f472b6, #ec4899)" }}
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <motion.p
            className="text-gray-600 mt-6 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Feel free to reach out for opportunities or just a friendly hello! 🌸
          </motion.p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.href}
              target={info.href.startsWith("http") ? "_blank" : undefined}
              rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="rounded-3xl px-8 py-10 text-center no-underline"
              style={{
                background: "rgba(255, 255, 255, 0.75)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(255, 255, 255, 0.8)",
                boxShadow: "0 8px 32px rgba(236, 72, 153, 0.08)",
              }}
              initial={{ opacity: 0, y: 80, scale: 0.8, rotateY: index % 2 === 0 ? -15 : 15 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateY: 0 } : { opacity: 0, y: 80, scale: 0.8, rotateY: index % 2 === 0 ? -15 : 15 }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.12, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -8 }}
            >
              <motion.span
                className="text-5xl mb-6 block"
                initial={{ opacity: 0, scale: 0, rotate: -45 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -45 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1, type: "spring", bounce: 0.5 }}
              >
                {info.icon}
              </motion.span>
              <p className="text-sm text-gray-500 mb-2">{info.label}</p>
              <p
                className="text-base md:text-lg font-medium"
                style={{
                  background: "linear-gradient(135deg, #be185d, #ec4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {info.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a
            href="mailto:teedadivya197@gmail.com"
            className="inline-block px-10 py-4 rounded-full font-semibold text-white text-lg no-underline"
            style={{
              background: "linear-gradient(135deg, #ec4899 0%, #f472b6 50%, #f9a8d4 100%)",
              boxShadow: "0 10px 30px rgba(236, 72, 153, 0.4)",
            }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            💌 Send Me a Message
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;