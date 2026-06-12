"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  onSelect: (project: Project) => void;
};

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group flex flex-col rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-accent/5 hover:border-accent/20 transition-all duration-300 cursor-pointer"
      style={{
        backgroundColor: "var(--color-surface-card)",
        border: "1px solid var(--color-border)",
      }}
      onClick={() => onSelect(project)}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gradient-to-br from-accent/5 to-accent/10 overflow-hidden group">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <>
            {/* Decorative grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `radial-gradient(circle, #2563EB 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
              }}
            />
            {/* Project initial as placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl font-black text-accent/10 group-hover:text-accent/20 transition-colors duration-300 select-none">
                {project.title.charAt(0)}
              </span>
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Title & Year */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3
            className="text-base font-bold leading-snug group-hover:text-accent transition-colors duration-200"
            style={{ color: "var(--color-text-primary)" }}
          >
            {project.title}
          </h3>
          <span
            className="text-xs font-medium whitespace-nowrap mt-0.5"
            style={{ color: "var(--color-text-tertiary)" }}
          >
            {project.year}
          </span>
        </div>

        {/* Description */}
        <p
          className="text-sm leading-relaxed mb-4 line-clamp-3"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {project.description}
        </p>

        {/* Spacer to push bottom content down */}
        <div className="mt-auto" />

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[11px] font-medium rounded-full"
              style={{
                color: "var(--color-text-tertiary)",
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div
          className="flex items-center justify-end gap-2 pt-3"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} source code`}
            className="p-2 rounded-lg hover:text-accent hover:bg-accent/5 transition-all duration-200"
            style={{ color: "var(--color-text-tertiary)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={17} />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live demo`}
            className="p-2 rounded-lg hover:text-accent hover:bg-accent/5 transition-all duration-200"
            style={{ color: "var(--color-text-tertiary)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={17} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
