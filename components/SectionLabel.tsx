"use client";

import { Reveal } from "./Reveal";

interface SectionLabelProps {
  children: React.ReactNode;
  number: string;
}

export function SectionLabel({ children, number }: SectionLabelProps) {
  return (
    <Reveal>
      <div
        className="flex items-center gap-4"
        style={{ marginBottom: "clamp(40px, 6vw, 72px)" }}
      >
        <span
          style={{
            fontSize: 12,
            color: "#E8C547",
            letterSpacing: 2,
            fontWeight: 500,
          }}
        >
          {number}
        </span>
        <div
          className="w-10"
          style={{ height: 1, background: "rgba(255,255,255,0.15)" }}
        />
        <span
          style={{
            fontSize: 12,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
            fontWeight: 500,
          }}
        >
          {children}
        </span>
      </div>
    </Reveal>
  );
}
