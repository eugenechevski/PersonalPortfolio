"use client";

import { useEffect, useRef } from "react";
import { initSmoothScroll } from "@/lib/smooth-scroll";
import type Lenis from "lenis";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    lenisRef.current = initSmoothScroll();
    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return <>{children}</>;
}
