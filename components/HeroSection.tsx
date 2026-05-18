"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";

const HeroBackground = dynamic(() => import("./HeroBackground"), {
  ssr: false,
});

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}

export function HeroSection() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(h > 0 ? window.scrollY / h : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="top"
      className="relative flex items-center overflow-hidden"
      style={{
        minHeight: "100vh",
        padding: "0 clamp(24px, 5vw, 80px)",
      }}
    >
      <HeroBackground />

      <div
        className="relative z-10 w-full mx-auto"
        style={{
          maxWidth: 1200,
          paddingTop: 72,
          transform: `translateY(${scrollProgress * -80}px)`,
          transition: "transform 0.05s linear",
        }}
      >
        <Reveal delay={0.1}>
          <div
            style={{
              fontSize: 12,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
              marginBottom: 28,
              fontWeight: 500,
            }}
          >
            Software Engineer &middot; Miami, FL
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <h1
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(44px, 8vw, 110px)",
              fontWeight: 300,
              lineHeight: 1.05,
              margin: "0 0 32px",
              letterSpacing: "-0.02em",
              maxWidth: 900,
            }}
          >
            I build things
            <br />
            that{" "}
            <span style={{ fontStyle: "italic", color: "#E8C547" }}>
              think.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.4}>
          <p
            style={{
              fontSize: "clamp(15px, 1.8vw, 18px)",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.4)",
              maxWidth: 540,
              marginBottom: 48,
            }}
          >
            Full-stack engineer shipping AI-powered products — from wearable
            vision systems and voice agents to luxury automotive data platforms.
          </p>
        </Reveal>

        <Reveal delay={0.55}>
          <div className="flex gap-4 flex-wrap">
            <MagneticButton href="#work" filled>
              View Work
              <ArrowIcon />
            </MagneticButton>
            <MagneticButton href="#contact">Get in Touch</MagneticButton>
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 flex flex-col items-center gap-2"
        style={{
          transform: "translateX(-50%)",
          opacity: scrollProgress > 0.05 ? 0 : 0.3,
          transition: "opacity 0.5s",
        }}
      >
        <div
          style={{
            width: 1,
            height: 40,
            background:
              "linear-gradient(to bottom, transparent, rgba(255,255,255,0.3))",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
        <span
          style={{
            fontSize: 10,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}
