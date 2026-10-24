# Eugene Chevski — Personal Portfolio

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The portfolio serves three confirmed audiences, with no priority assigned between them:

- Recruiters and hiring managers evaluating Eugene for full-time engineering roles; success means an interview.
- Potential clients evaluating Eugene for paid projects; success means a project inquiry.
- Engineering peers exploring his work; success means a collaboration.

## Product Purpose

Present Eugene's engineering experience, selected projects, and technical capabilities, and help visitors contact him about roles, projects, and collaborations.

## Positioning

Eugene is a full-stack software engineer focused on shipping AI-powered products, spanning automotive data platforms, wearable vision systems, and voice agents. The current biography describes his work at duPont REGISTRY Group in Miami and completion of a UCF computer science degree while working full-time.

## Operating Context

Visitors browse a single-page portfolio with work, about, and contact sections. They can review project descriptions and technologies, then contact Eugene by email or follow his LinkedIn and GitHub profiles.

The existing implementation uses Next.js App Router, React, and TypeScript. `npm run dev` starts local development; `npm run build` creates a production build. The repository identifies eugenechevski.com as the public site and Vercel as its deployment platform.

## Capabilities and Constraints

- Preserve the existing work, about, and contact content and functions unless a later request changes them.
- The user approved the current biography and project content as facts during initialization.
- Selected projects are DR Garage, GlanceAI, Voice AI Suite, and BePlayFuel; their descriptions, technologies, and dates live in `lib/constants.ts`.
- Current contact destinations are eugenechevski@proton.me, https://www.linkedin.com/in/eugenechevski/, and https://github.com/eugenechevski.
- The README describes a blog, admin panel, resume download, and contact form, but these are absent from the current homepage implementation. Treat them as unconfirmed scope, not existing capabilities.
- No additional confidentiality constraints or product-specific accessibility requirements were supplied.

## Brand Commitments

Use Eugene Chevski's name and approved professional biography. No new visual or voice commitments were established during initialization.

## Evidence on Hand

- `lib/constants.ts`: approved project descriptions, dates, technologies, skill lists, and displayed statistics.
- `components/AboutSection.tsx`: approved professional biography and interests.
- `components/ContactSection.tsx`: opportunity statement and contact links.
- `app/layout.tsx`: public site identity and metadata.
- `public/favicon.svg`: existing identity asset.

Repository descriptions are the available project evidence; do not invent testimonials, customers, results, or additional metrics. Claims about employment, dates, availability, and repository counts can become stale and should be reconfirmed when changed or expanded.

## Product Principles

- Support hiring, client inquiries, and peer collaboration without assuming one audience takes priority.
- Ground professional positioning in approved work and concrete technical capabilities.
- Keep the path from reviewing work to contacting Eugene clear.
- Preserve factual accuracy and distinguish implemented features from proposed ones.

## Open Decisions

- Relative priority of the three audiences, if a future surface needs one.
- Any additional confidentiality limits, accessibility standard, or publishable case-study evidence.
