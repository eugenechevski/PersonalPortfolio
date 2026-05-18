"use client";

import { PROJECTS } from "@/lib/constants";
import { SectionLabel } from "./SectionLabel";
import { ProjectCard } from "./ProjectCard";

export function WorkSection() {
  return (
    <section
      id="work"
      className="mx-auto"
      style={{
        padding: "clamp(80px, 12vw, 160px) clamp(24px, 5vw, 80px)",
        maxWidth: 1200,
      }}
    >
      <SectionLabel number="01">Selected Work</SectionLabel>
      <div
        className="grid gap-6"
        style={{
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
        }}
      >
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
