"use client";

import { useState } from "react";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import { CORE_STACK, ALSO_FLUENT } from "@/lib/constants";

function TechPill({
  label,
  interactive = false,
}: {
  label: string;
  interactive?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      style={{
        fontSize: 13,
        padding: "8px 18px",
        borderRadius: 100,
        border: `1px solid ${
          interactive && hovered
            ? "rgba(232,197,71,0.6)"
            : interactive
              ? "rgba(255,255,255,0.08)"
              : "rgba(255,255,255,0.05)"
        }`,
        color:
          interactive && hovered
            ? "#E8C547"
            : interactive
              ? "rgba(255,255,255,0.5)"
              : "rgba(255,255,255,0.3)",
        transition: "all 0.3s",
        cursor: interactive ? "default" : undefined,
      }}
      onMouseEnter={() => interactive && setHovered(true)}
      onMouseLeave={() => interactive && setHovered(false)}
    >
      {label}
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto"
      style={{
        padding: "clamp(80px, 12vw, 160px) clamp(24px, 5vw, 80px)",
        maxWidth: 1200,
      }}
    >
      <SectionLabel number="02">About</SectionLabel>
      <div
        className="grid"
        style={{
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
          gap: "clamp(40px, 6vw, 80px)",
          alignItems: "start",
        }}
      >
        {/* Left column */}
        <div>
          <Reveal>
            <h2
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 300,
                lineHeight: 1.2,
                marginBottom: 28,
              }}
            >
              Engineer who ships
              <br />
              <span style={{ fontStyle: "italic", color: "#E8C547" }}>
                real products.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.45)",
                marginBottom: 20,
              }}
            >
              I&apos;m a full-stack software engineer at duPont REGISTRY Group
              in Miami, building DR Garage — the company&apos;s data and AI
              analytics platform. I just completed my CS degree at UCF while
              working full-time and shipping side projects.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.45)",
                marginBottom: 28,
              }}
            >
              My focus is AI-powered products: wearable vision systems, voice
              agents, and intelligent data platforms. I care about building
              things that work, not just things that demo well.
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <MagneticButton href="https://www.linkedin.com/in/eugenechevski/">
              LinkedIn
              <ArrowIcon />
            </MagneticButton>
          </Reveal>
        </div>

        {/* Right column */}
        <div>
          <Reveal delay={0.1}>
            <div style={{ marginBottom: 36 }}>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.25)",
                  marginBottom: 16,
                  fontWeight: 500,
                }}
              >
                Core Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {CORE_STACK.map((s) => (
                  <TechPill key={s} label={s} interactive />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div style={{ marginBottom: 36 }}>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.25)",
                  marginBottom: 16,
                  fontWeight: 500,
                }}
              >
                Also Fluent In
              </div>
              <div className="flex flex-wrap gap-2">
                {ALSO_FLUENT.map((s) => (
                  <TechPill key={s} label={s} />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.25)",
                  marginBottom: 16,
                  fontWeight: 500,
                }}
              >
                Beyond Code
              </div>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                Cars &amp; automotive culture &middot; Fitness &amp; biohacking
                &middot; Dota 2 &middot; Finance &amp; investing &middot; Travel
                &middot; Music
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
