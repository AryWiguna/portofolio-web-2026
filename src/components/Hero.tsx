"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Mail, Download, X } from "lucide-react";

/* ===== Staggered Text Animation ===== */
const headlineWords1 = ["Crafting", "Intuitive"];
const headlineWords2 = ["Digital", "Experiences."];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function Hero() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  /* Close lightbox on Escape key */
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setLightboxOpen(false);
  }, []);

  useEffect(() => {
    if (lightboxOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, handleEscape]);

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
      >
        {/* Animated gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div
            className="w-[600px] h-[600px] rounded-full opacity-[0.07] blur-[100px] animate-pulse"
            style={{ background: "radial-gradient(circle, #2563EB, transparent 70%)" }}
          />
        </div>

        {/* Subtle gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] via-transparent to-transparent pointer-events-none" />

        <div className="mx-auto max-w-3xl text-center relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-block mb-6 px-4 py-1.5 text-xs font-medium tracking-wide uppercase text-accent bg-accent/8 rounded-full border border-accent/15">
              Available for freelance work
            </span>
          </motion.div>

          {/* ===== Profile Photo with Premium Effects ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="flex justify-center mb-8"
          >
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="relative group cursor-pointer focus:outline-none"
              aria-label="View full profile photo"
            >
              {/* Outer pulsing glow ring */}
              <div
                className="absolute -inset-2 rounded-full opacity-40 blur-md animate-pulse"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(37,99,235,0.5), rgba(99,102,241,0.4), rgba(37,99,235,0.5))",
                }}
              />

              {/* Rotating gradient border */}
              <div
                className="absolute -inset-[3px] rounded-full opacity-60"
                style={{
                  background:
                    "conic-gradient(from 0deg, #2563EB, #6366F1, #8B5CF6, #6366F1, #2563EB)",
                  animation: "spin 6s linear infinite",
                }}
              />

              {/* Inner dark ring (gap between border and photo) */}
              <div
                className="absolute -inset-[1px] rounded-full"
                style={{ backgroundColor: "var(--color-background, #0a0a1a)" }}
              />

              {/* Profile Image */}
              <div className="relative w-24 h-24 sm:w-[120px] sm:h-[120px] rounded-full overflow-hidden ring-2 ring-transparent">
                <Image
                  src="/profile_picture.jpg"
                  alt="Ary Wiguna — Front-End Developer & UI/UX Designer"
                  fill
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 96px, 120px"
                />
              </div>

              {/* Hover glow intensifier */}
              <div
                className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle, #2563EB, transparent 70%)",
                }}
              />
            </button>
          </motion.div>

          {/* Headline — Staggered Word Reveal */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]"
            style={{ color: "var(--color-text-primary)" }}
          >
            {/* Line 1 */}
            <span className="block">
              {headlineWords1.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            {/* Line 2 — Accent color */}
            <span className="block text-accent">
              {headlineWords2.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-6 text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Front-End Developer &amp; UI/UX Designer with a passion for building
            smart solutions and exploring Local AI.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3 bg-accent text-white text-sm font-semibold rounded-full hover:bg-accent-hover shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all duration-300"
            >
              View My Work
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded-full hover:border-accent hover:text-accent transition-all duration-300"
              style={{
                color: "var(--color-text-primary)",
                border: "1px solid var(--color-border)",
              }}
            >
              <Mail size={16} />
              Contact Me
            </a>
          </motion.div>

          {/* Resume Download */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="mt-6"
          >
            <a
              href="/CV ARY WIGUNA.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-accent transition-colors duration-200 underline underline-offset-4 decoration-1"
              style={{
                color: "var(--color-text-tertiary)",
                textDecorationColor: "var(--color-border)",
              }}
            >
              <Download size={14} />
              Download Resume
            </a>
          </motion.div>
        </div>
      </section>

      {/* ===== Fullscreen Photo Lightbox ===== */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            key="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center cursor-pointer"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.85)", backdropFilter: "blur(12px)" }}
            onClick={() => setLightboxOpen(false)}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxOpen(false);
              }}
              className="absolute top-6 right-6 p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer z-10"
              aria-label="Close photo"
            >
              <X size={28} />
            </motion.button>

            {/* Fullscreen Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative w-[85vw] h-[85vh] sm:w-[70vw] sm:h-[80vh] max-w-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glow behind image */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, #2563EB, #6366F1, #8B5CF6)",
                }}
              />

              {/* Image container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
                <Image
                  src="/profile_picture.jpg"
                  alt="Ary Wiguna — Full Photo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 85vw, 70vw"
                  priority
                />
              </div>

              {/* Caption below image */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="absolute -bottom-10 left-0 right-0 text-center text-sm text-white/50"
              >
                Click anywhere or press Esc to close
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

