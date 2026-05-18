"use client";

import { STATS } from "@/lib/constants";
import { Reveal } from "./Reveal";

function Stat({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <div>
        <div
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 300,
            color: "#E8C547",
            lineHeight: 1,
            marginBottom: 8,
          }}
        >
          {value}
        </div>
        <div
          style={{
            fontSize: 12,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          {label}
        </div>
      </div>
    </Reveal>
  );
}

export function StatsStrip() {
  return (
    <section
      className="mx-auto grid"
      style={{
        padding: "clamp(48px, 8vw, 100px) clamp(24px, 5vw, 80px)",
        maxWidth: 1200,
        gridTemplateColumns: "repeat(auto-fit, minmax(min(140px, 100%), 1fr))",
        gap: "clamp(32px, 4vw, 64px)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {STATS.map((stat, i) => (
        <Stat
          key={stat.label}
          value={stat.value}
          label={stat.label}
          delay={i * 0.1}
        />
      ))}
    </section>
  );
}
