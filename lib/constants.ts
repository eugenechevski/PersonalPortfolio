export interface Project {
  id: string;
  title: string;
  tag: string;
  description: string;
  tech: string[];
  color: string;
  year: string;
}

export const PROJECTS: Project[] = [
  {
    id: "dr-garage",
    title: "DR Garage",
    tag: "DATA & AI PLATFORM",
    description:
      "The strategic centerpiece of duPont REGISTRY Group's digital transformation — a full-stack data and AI analytics platform powering luxury automotive marketplace intelligence.",
    tech: ["React", "Python", "AWS", "ML"],
    color: "#E8C547",
    year: "2025–NOW",
  },
  {
    id: "glance-ai",
    title: "GlanceAI",
    tag: "AI WEARABLE",
    description:
      "Personal AI assistant streaming Ray-Ban Meta smart glasses camera feed through Claude's Vision API, delivering contextual answers to Apple Watch in under 3 seconds.",
    tech: ["Swift", "Claude API", "watchOS", "Meta SDK"],
    color: "#47E8A0",
    year: "2026",
  },
  {
    id: "voice-ai",
    title: "Voice AI Suite",
    tag: "AI VOICE PLATFORM",
    description:
      "Three-product AI voice calling platform for service businesses — receptionist, follow-up caller, and outreach bot. Built inbound-first to stay TCPA-compliant.",
    tech: ["Retell AI", "GoHighLevel", "n8n", "Node.js"],
    color: "#47A0E8",
    year: "2026",
  },
  {
    id: "beplayfuel",
    title: "BePlayFuel",
    tag: "GAMING PLATFORM",
    description:
      "Competitive gaming platform with mobile-first features and real-time matchmaking. React Native frontend with scalable backend services.",
    tech: ["React Native", "Node.js", "Firebase"],
    color: "#E847A0",
    year: "2024–NOW",
  },
];

export const NAV_ITEMS = ["work", "about", "contact"] as const;

export const STATS = [
  { value: "4+", label: "Years Building" },
  { value: "36", label: "Repositories" },
  { value: "6", label: "Languages" },
  { value: "∞", label: "Curiosity" },
] as const;

export const CORE_STACK = [
  "TypeScript",
  "Python",
  "React / Next.js",
  "Node.js",
  "Swift",
  "Django",
  "AWS",
  "Claude API",
] as const;

export const ALSO_FLUENT = [
  "Java / Kotlin",
  "C / C++",
  "C#",
  "Spring Boot",
  "Flutter",
  "GCP",
  "Azure",
  "Docker",
  ".NET",
] as const;
