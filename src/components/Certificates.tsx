"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certificates, certCategories, type Certificate } from "@/data/certificates";
import { CertificateCard } from "@/components/CertificateCard";
import { CertificateModal } from "@/components/CertificateModal";

export function Certificates() {
  const [active, setActive] = useState<string>("All");
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const filtered =
    active === "All"
      ? certificates
      : certificates.filter((c) => c.category === active);

  return (
    <>
      <section
        id="certificates"
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
              Achievements
            </span>
            <h2
              className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ color: "var(--color-text-primary)" }}
            >
              Selected Certificates
            </h2>
            <p
              className="mt-4 max-w-lg mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              A collection of certifications, bootcamp completions, and courses validating my skills and continuous learning journey.
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
            {certCategories.map((cat) => (
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

          {/* Certificate Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((cert) => (
                <CertificateCard
                  key={cert.id}
                  certificate={cert}
                  onSelect={setSelectedCertificate}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Certificate Detail Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </>
  );
}
