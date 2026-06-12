"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import Image from "next/image";
import type { Certificate } from "@/data/certificates";

type CertificateCardProps = {
  certificate: Certificate;
  onSelect: (certificate: Certificate) => void;
};

export function CertificateCard({ certificate, onSelect }: CertificateCardProps) {
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
      onClick={() => onSelect(certificate)}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gradient-to-br from-accent/5 to-accent/10 overflow-hidden group">
        {certificate.image ? (
          <Image
            src={certificate.image}
            alt={certificate.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <>
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `radial-gradient(circle, #2563EB 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Award className="w-16 h-16 text-accent/20 group-hover:text-accent/40 transition-colors duration-300" />
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3
            className="text-base font-bold leading-snug group-hover:text-accent transition-colors duration-200"
            style={{ color: "var(--color-text-primary)" }}
          >
            {certificate.title}
          </h3>
          <span
            className="text-xs font-medium whitespace-nowrap mt-0.5"
            style={{ color: "var(--color-text-tertiary)" }}
          >
            {certificate.date}
          </span>
        </div>

        <p
          className="text-sm font-semibold mb-3"
          style={{ color: "var(--color-accent)" }}
        >
          {certificate.issuer}
        </p>

        <p
          className="text-sm leading-relaxed mb-4 line-clamp-2"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {certificate.description}
        </p>

        <div className="mt-auto" />

        <div className="flex flex-wrap gap-1.5 mb-4">
          {certificate.skills.map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-1 text-[11px] font-medium rounded-full"
              style={{
                color: "var(--color-text-tertiary)",
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              {skill}
            </span>
          ))}
        </div>

        <div
          className="flex items-center justify-end gap-2 pt-3"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <a
            href={certificate.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${certificate.title} credential`}
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
