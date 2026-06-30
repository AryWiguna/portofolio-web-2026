"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, caseBases, categories, type Project } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";

export function Projects() {
  const [active, setActive] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      <section
        id="projects"
        className="py-24 sm:py-32 px-6"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">
              Portfolio
            </span>
            <h2
              className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ color: "var(--color-text-primary)" }}
            >
              Selected Projects
            </h2>
            <p
              className="mt-4 max-w-lg mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              A curated collection of work spanning front-end development, UI/UX
              design, and local AI experimentation.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-250 cursor-pointer ${
                  active === cat
                    ? "bg-accent text-white border-accent shadow-md shadow-accent/20"
                    : "hover:text-accent"
                }`}
                style={
                  active === cat
                    ? { border: "1px solid var(--color-accent)" }
                    : {
                        color: "var(--color-text-secondary)",
                        backgroundColor: "var(--color-filter-inactive-bg)",
                        border: "1px solid var(--color-border)",
                      }
                }
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Project Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={setSelectedProject}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Section Header for Case Base */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 mt-32"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">
              Forensics & Networking
            </span>
            <h2
              className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ color: "var(--color-text-primary)" }}
            >
              Selected Case Base
            </h2>
            <p
              className="mt-4 max-w-lg mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              A deeper look into digital forensics investigations and enterprise network administration cases.
            </p>
          </motion.div>

          {/* Case Base Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {caseBases.map((project) => (
                <ProjectCard
                  key={`casebase-${project.id}`}
                  project={project}
                  onSelect={setSelectedProject}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
