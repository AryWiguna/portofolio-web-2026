"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ExternalLink, Award, ChevronLeft, ChevronRight } from "lucide-react";
import type { Certificate } from "@/data/certificates";

type CertificateModalProps = {
  certificate: Certificate | null;
  onClose: () => void;
};

export function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (certificate) {
      setCurrentImageIndex(0);
    }
  }, [certificate]);

  /* Close on Escape key */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isImageEnlarged) {
          setIsImageEnlarged(false);
        } else {
          onClose();
        }
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose, isImageEnlarged]);

  /* Lock body scroll when open */
  useEffect(() => {
    if (certificate) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [certificate]);

  return (
    <>
      <AnimatePresence>
        {certificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-8"
            onClick={onClose}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 backdrop-blur-sm"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl shadow-2xl"
              style={{
                backgroundColor: "var(--color-surface-card)",
                border: "1px solid var(--color-border)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 p-2 rounded-xl hover:text-accent transition-colors cursor-pointer"
                style={{
                  color: "var(--color-text-tertiary)",
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                }}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-accent/5 to-accent/15 overflow-hidden rounded-t-2xl group">
                {certificate.image ? (
                  <>
                    <div
                      className="w-full h-full cursor-zoom-in"
                      onClick={() => setIsImageEnlarged(true)}
                    >
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentImageIndex}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={
                              certificate.images
                                ? certificate.images[currentImageIndex]
                                : certificate.image
                            }
                            alt={certificate.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 1024px"
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {certificate.images && certificate.images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex((prev) =>
                              prev === 0 ? certificate.images!.length - 1 : prev - 1
                            );
                          }}
                          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors opacity-0 group-hover:opacity-100 z-10"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex((prev) =>
                              prev === certificate.images!.length - 1 ? 0 : prev + 1
                            );
                          }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors opacity-0 group-hover:opacity-100 z-10"
                        >
                          <ChevronRight size={20} />
                        </button>

                        {/* Pagination Dots */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                          {certificate.images.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImageIndex(idx);
                              }}
                              className={`w-2 h-2 rounded-full transition-all ${
                                currentImageIndex === idx
                                  ? "bg-white w-4"
                                  : "bg-white/50 hover:bg-white/80"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <div
                      className="absolute inset-0 opacity-[0.05]"
                      style={{
                        backgroundImage: `radial-gradient(circle, #2563EB 1px, transparent 1px)`,
                        backgroundSize: "24px 24px",
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Award className="w-24 h-24 text-accent/20" />
                    </div>
                  </>
                )}
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8">
                {/* Title & Date */}
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h2
                    className="text-xl sm:text-2xl font-bold"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {certificate.title}
                  </h2>
                  <span
                    className="text-sm font-medium whitespace-nowrap mt-1"
                    style={{ color: "var(--color-text-tertiary)" }}
                  >
                    {certificate.date}
                  </span>
                </div>

                <p
                  className="text-sm font-semibold mb-5"
                  style={{ color: "var(--color-accent)" }}
                >
                  {certificate.issuer}
                </p>

                {/* Category Badge */}
                <span className="inline-block mb-5 px-3 py-1 text-xs font-semibold rounded-full text-accent bg-accent/8 border border-accent/15">
                  {certificate.category}
                </span>

                {/* Description */}
                <p
                  className="text-sm sm:text-base leading-relaxed mb-6"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {certificate.longDescription || certificate.description}
                </p>

                {/* Skills Stack */}
                <div className="mb-6">
                  <h3
                    className="text-xs font-bold uppercase tracking-wider mb-3"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Skills Acquired
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {certificate.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-medium rounded-full"
                        style={{
                          color: "var(--color-text-secondary)",
                          backgroundColor: "var(--color-surface)",
                          border: "1px solid var(--color-border)",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-full hover:bg-accent-hover transition-all duration-200"
                  >
                    <ExternalLink size={16} />
                    View Credential
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Lightbox */}
      <AnimatePresence>
        {isImageEnlarged && certificate?.image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setIsImageEnlarged(false)}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 backdrop-blur-md"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
            />

            {/* Close Button */}
            <button
              onClick={() => setIsImageEnlarged(false)}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 z-[90] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Enlarged Image */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative z-10 w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl group/lightbox"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={
                      certificate.images
                        ? certificate.images[currentImageIndex]
                        : certificate.image
                    }
                    alt={certificate.title}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </motion.div>
              </AnimatePresence>

              {certificate.images && certificate.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex((prev) =>
                        prev === 0 ? certificate.images!.length - 1 : prev - 1
                      );
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors opacity-0 group-hover/lightbox:opacity-100 z-20"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex((prev) =>
                        prev === certificate.images!.length - 1 ? 0 : prev + 1
                      );
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors opacity-0 group-hover/lightbox:opacity-100 z-20"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
