"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function registerGSAP() {
  if (registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export const EASE_OUT_EXPO = "expo.out";
export const EASE_DEFAULT = "power3.out";

export function createScrollReveal(
  trigger: string | Element,
  targets: string | Element | Element[],
  options?: {
    y?: number;
    stagger?: number;
    duration?: number;
    start?: string;
  }
) {
  const { y = 50, stagger = 0.12, duration = 1, start = "top 85%" } = options ?? {};

  return gsap.from(targets, {
    y,
    opacity: 0,
    duration,
    stagger,
    ease: EASE_OUT_EXPO,
    scrollTrigger: {
      trigger,
      start,
      toggleActions: "play none none none",
    },
  });
}
