"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:hello@arywiguna.dev",
    icon: Mail,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 px-6">
      <div className="mx-auto max-w-2xl text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">
            Contact
          </span>
          <h2
            className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight"
            style={{ color: "var(--color-text-primary)" }}
          >
            Let&rsquo;s Work Together
          </h2>
          <p
            className="mt-4 leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Have a project in mind or just want to say hello? I&rsquo;m always
            open to discussing new ideas, creative projects, or opportunities to
            collaborate.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-10"
        >
          <a
            href="mailto:hello@arywiguna.dev"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white text-sm font-semibold rounded-full hover:bg-accent-hover shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all duration-300"
          >
            <Mail size={17} />
            Say Hello
            <ArrowUpRight size={15} />
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex items-center justify-center w-11 h-11 rounded-xl hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-200"
              style={{
                color: "var(--color-text-secondary)",
                border: "1px solid var(--color-border)",
              }}
            >
              <social.icon size={19} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
