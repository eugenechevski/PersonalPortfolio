# Index Portfolio Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans to implement this plan inline. No implementation delegation is needed.

**Goal:** Make the selected Index prototype the actual Next.js portfolio homepage.
**Architecture:** Server-rendered page and small presentation components; native named details disclosures provide exclusive opening without client JavaScript. Shared project data remains in lib/constants.ts. Use local fonts and Tailwind utilities with a small global theme and fold keyframes.
**Tech Stack:** Existing Next.js 14, React 18, TypeScript, Tailwind 4.
**Spec:** docs/superpowers/specs/2026-10-23-index-design.md

## Global Constraints

Approved biography/project facts and contact links; no invented proof; preserve chosen prototype; responsive; reduced motion; no forced intro.

## Review Focus

- Native disclosures must operate by click, Enter, and Space, including after closing all rows.
- Mobile navigation and long project names remain within 390px and narrower layouts.
- Project content remains readable before hydration and with reduced motion.
- Existing shared project constants must supply all descriptions/dates/tech.
- Header links and email/social destinations remain correct.

## Task 1: Selected visual system and homepage

- [x] Copy chosen locally hosted font weights to public/fonts, preserve OFL licenses; use next/font/local in app/layout.tsx.
- [x] Replace app/globals.css with the Index theme, font roles, browser surfaces, fold keyframes, reduced-motion rules.
- [x] Implement components/index/{IndexHeader,IndexHero,ProjectIndex,IndexAbout,IndexContact}.tsx with Tailwind classes, all under 150 lines, and compose them in app/page.tsx.
- [x] Verify production build and lint; run app locally and verify the review-focus interactions in the browser.

## Task 2: Visual verification and durable documentation

- [x] Capture desktop/mobile views and compare against the selected prototype in combined evidence; resolve material drift in one batch.
- [x] Run mechanical detector once, fix mechanical findings.
- [x] Obtain fresh independent finish review and address required findings.
- [x] Record actual design tokens/components in DESIGN.md and .impeccable/design.json; write design-qa.md with verified result.
