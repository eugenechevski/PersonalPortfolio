"use client";

import { useState, useEffect } from "react";
import { Logo } from "./Logo";

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("portfolio-visited");
    if (hasVisited) {
      onDone();
      return;
    }

    const t1 = setTimeout(() => setPhase(1), 800);
    const t2 = setTimeout(() => setPhase(2), 1600);
    const t3 = setTimeout(() => {
      sessionStorage.setItem("portfolio-visited", "1");
      onDone();
    }, 2200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6"
      style={{
        background: "#0A0A0C",
        opacity: phase === 2 ? 0 : 1,
        transition: "opacity 0.6s ease",
        pointerEvents: phase === 2 ? "none" : "auto",
      }}
    >
      <div className="relative w-20 h-20">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          className="absolute"
          style={{ animation: "spin 1.2s linear infinite" }}
        >
          <circle
            cx="40"
            cy="40"
            r="36"
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1.5"
          />
          <circle
            cx="40"
            cy="40"
            r="36"
            fill="none"
            stroke="#E8C547"
            strokeWidth="1.5"
            strokeDasharray="60 170"
            strokeLinecap="round"
          />
        </svg>
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "scale(1)" : "scale(0.8)",
            transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          <Logo size={32} />
        </div>
      </div>
      <div
        style={{
          fontSize: 11,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.25)",
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? "translateY(0)" : "translateY(8px)",
          transition: "all 0.5s ease 0.1s",
        }}
      >
        Eugene Chevski
      </div>
    </div>
  );
}
