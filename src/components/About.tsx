"use client";

import { motion } from "framer-motion";

/* ===== Skill Data ===== */
const skillCategories = [
  {
    title: "UI/UX Design",
    skills: ["Figma", "Prototyping", "Wireframing", "User Research"],
  },
  {
    title: "Front-End",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Back-End & Systems",
    skills: ["Node.js", "Networking", "Linux", "MongoDB"],
  },
  {
    title: "AI & Emerging Tech",
    skills: ["Local AI", "LLMs", "Prompt Engineering", "Ollama"],
  },
];

/* ===== Animation Variants ===== */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">
            About Me
          </span>
          <h2
            className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight"
            style={{ color: "var(--color-text-primary)" }}
          >
            A Bit About Myself
          </h2>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto text-center mb-20"
        >
          <p
            className="leading-relaxed text-base sm:text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            I&rsquo;m a 6th-semester IT student at{" "}
            <span style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
              STIKOM Bali
            </span>{" "}
            who loves turning complex problems into clean, intuitive interfaces.
            My focus spans front-end development, UI/UX design, and lately,
            exploring how Local AI can power smarter, privacy-first experiences.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div id="skills">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skillCategories.map((cat) => (
              <motion.div
                key={cat.title}
                variants={itemVariants}
                className="p-6 rounded-2xl hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                style={{
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <h3 className="text-sm font-bold uppercase tracking-wider text-accent mb-4">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium rounded-full"
                      style={{
                        color: "var(--color-text-secondary)",
                        backgroundColor: "var(--color-pill-bg)",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
