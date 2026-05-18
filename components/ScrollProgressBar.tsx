"use client";

import { useState, useEffect } from "react";

export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? window.scrollY / h : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[1000] h-[2px]"
      style={{
        width: `${progress * 100}%`,
        background: "linear-gradient(90deg, #E8C547, #47E8A0)",
        transition: "width 0.1s linear",
      }}
    />
  );
}
