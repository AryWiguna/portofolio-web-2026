"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

/* ===== Testimonial Data ===== */
const testimonials = [
  {
    quote:
      "Ary has an exceptional eye for design and translates complex requirements into clean, user-friendly interfaces. His work on our campus portal exceeded expectations.",
    name: "Dr. I Made Wirawan",
    role: "Lecturer, STIKOM Bali",
    initials: "IW",
  },
  {
    quote:
      "Working with Ary was a pleasure. He combines strong technical skills with genuine design thinking. Our team's productivity doubled with the tools he built.",
    name: "Kadek Surya Pratama",
    role: "Team Lead, Campus Dev Club",
    initials: "KS",
  },
  {
    quote:
      "Ary delivered a stunning landing page for my small business in record time. He listened to my needs and created something better than I imagined.",
    name: "Ni Putu Ayu Dewi",
    role: "Freelance Client",
    initials: "NA",
  },
  {
    quote:
      "His curiosity for Local AI and practical approach to privacy-first technology sets him apart. Ary is a fast learner who consistently exceeds expectations.",
    name: "Gede Artha Negara",
    role: "AI Research Mentor",
    initials: "GA",
  },
];

/* Double the array for seamless infinite scroll */
const duplicated = [...testimonials, ...testimonials];

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14 px-6"
      >
        <span className="text-xs font-semibold tracking-widest uppercase text-accent">
          Testimonials
        </span>
        <h2
          className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight"
          style={{ color: "var(--color-text-primary)" }}
        >
          What People Say
        </h2>
      </motion.div>

      {/* Auto-scrolling Carousel */}
      <div className="relative">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, var(--color-bg), transparent)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, var(--color-bg), transparent)",
          }}
        />

        {/* Scrolling track */}
        <div className="flex gap-6 animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused]">
          {duplicated.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[340px] sm:w-[400px] p-6 rounded-2xl transition-all duration-300"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              <Quote size={20} className="text-accent/30 mb-3" />
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "var(--color-text-secondary)" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-accent">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--color-text-tertiary)" }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
