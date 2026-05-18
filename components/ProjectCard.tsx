"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { Project } from "@/lib/constants";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "clamp(28px, 4vw, 48px)",
        border: `1px solid ${hovered ? project.color + "40" : "rgba(255,255,255,0.06)"}`,
        borderRadius: 20,
        background: hovered
          ? "rgba(255,255,255,0.025)"
          : "rgba(255,255,255,0.01)",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
        transform: hovered ? "translateY(-4px)" : "none",
        transition:
          "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s, background 0.4s",
      }}
    >
      {/* accent glow */}
      <div
        style={{
          position: "absolute",
          top: -60,
          right: -60,
          width: 180,
          height: 180,
          borderRadius: "50%",
          background: project.color,
          opacity: hovered ? 0.06 : 0,
          filter: "blur(60px)",
          transition: "opacity 0.6s",
          pointerEvents: "none",
        }}
      />

      <div
        className="flex justify-between items-start flex-wrap gap-2"
        style={{ marginBottom: 20 }}
      >
        <span
          style={{
            fontSize: 11,
            letterSpacing: 3,
            color: project.color,
            fontWeight: 600,
          }}
        >
          {project.tag}
        </span>
        <span
          style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.25)",
            letterSpacing: 1,
          }}
        >
          {project.year}
        </span>
      </div>

      <h3
        style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontSize: "clamp(26px, 3.5vw, 38px)",
          fontWeight: 400,
          color: "#fff",
          margin: "0 0 16px",
          lineHeight: 1.15,
        }}
      >
        {project.title}
      </h3>

      <p
        style={{
          fontSize: 15,
          lineHeight: 1.65,
          color: "rgba(255,255,255,0.45)",
          margin: "0 0 28px",
          maxWidth: 520,
        }}
      >
        {project.description}
      </p>

      <div className="flex gap-2 flex-wrap">
        {project.tech.map((t) => (
          <span
            key={t}
            style={{
              fontSize: 11,
              letterSpacing: 1,
              padding: "5px 14px",
              borderRadius: 100,
              border: "1px solid rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* bottom animated line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "10%",
          width: hovered ? "80%" : "0%",
          height: 1,
          background: `linear-gradient(90deg, transparent, ${project.color}60, transparent)`,
          transition: "width 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
    </motion.div>
  );
}
