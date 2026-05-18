"use client";

import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";

function EnvelopeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-10 6L2 7" />
    </svg>
  );
}

export function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto text-center"
      style={{
        padding: "clamp(80px, 12vw, 160px) clamp(24px, 5vw, 80px)",
        maxWidth: 1200,
      }}
    >
      <SectionLabel number="03">Contact</SectionLabel>
      <Reveal>
        <h2
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(32px, 5vw, 60px)",
            fontWeight: 300,
            lineHeight: 1.15,
            marginBottom: 20,
            maxWidth: 700,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Let&apos;s build something{" "}
          <span style={{ fontStyle: "italic", color: "#E8C547" }}>
            together.
          </span>
        </h2>
      </Reveal>
      <Reveal delay={0.15}>
        <p
          style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.4)",
            maxWidth: 480,
            margin: "0 auto 40px",
            lineHeight: 1.65,
          }}
        >
          Open to full-time roles, collaborations, and interesting problems.
          Drop a line — I respond fast.
        </p>
      </Reveal>
      <Reveal delay={0.3}>
        <div className="flex gap-4 justify-center flex-wrap">
          <MagneticButton href="mailto:eugenechevski@proton.me" filled>
            <EnvelopeIcon />
            Email Me
          </MagneticButton>
          <MagneticButton href="https://www.linkedin.com/in/eugenechevski/">
            LinkedIn
          </MagneticButton>
          <MagneticButton href="https://github.com/eugenechevski">
            GitHub
          </MagneticButton>
        </div>
      </Reveal>
    </section>
  );
}
