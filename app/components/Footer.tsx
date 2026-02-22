"use client";

import { motion } from "framer-motion";
import { DivyaLogoMinimal } from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: "💼", href: "https://linkedin.com/in/divya-pavani-teeda", label: "LinkedIn" },
    { icon: "📧", href: "mailto:teedadivya197@gmail.com", label: "Email" },
    // { icon: "📱", href: "tel:+919182752465", label: "Phone" },
  ];

  return (
    <footer
      className="w-full py-16 relative"
      style={{
        background: "linear-gradient(180deg, #fff5f8 0%, #fdf2f8 100%)",
      }}
    >
      <div className="w-full px-6 relative z-10">
        <div className="flex flex-col items-center text-center py-8">

          {/* Name */}
          <motion.h3
            className="text-2xl font-bold mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span
              style={{
                background: "linear-gradient(135deg, #be185d, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Divya Pavani Teeda
            </span>
          </motion.h3>

          {/* Tagline */}
          <motion.p
            className="text-gray-500 mb-8 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Java Developer | Building scalable microservices with passion 🌸
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex gap-5 mb-10 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-14 h-14 flex items-center justify-center text-2xl rounded-2xl"
                style={{
                  background: "rgba(255, 255, 255, 0.75)",
                  backdropFilter: "blur(24px)",
                  border: "1px solid rgba(255, 255, 255, 0.8)",
                  boxShadow: "0 8px 32px rgba(236, 72, 153, 0.08)",
                }}
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                title={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            className="w-full max-w-md h-px mb-8"
            style={{ background: "linear-gradient(90deg, transparent, rgba(236, 72, 153, 0.4), transparent)" }}
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />

          {/* Copyright */}
          <motion.p
            className="text-sm text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            © {currentYear} Divya Pavani Teeda. Made with 🌸 and passion.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;