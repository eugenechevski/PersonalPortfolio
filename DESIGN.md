---
name: Eugene Chevski — Index
description: A warm paper portfolio whose project index unfolds into engineering detail.
colors:
  paper: "#f0ece3"
  ink: "#b12b1c"
  muted: "#7e4035"
  rule: "#c4a59a"
typography:
  display:
    fontFamily: "Syne, sans-serif"
    fontSize: "clamp(36px, 6.8vw, 96px)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Syne, sans-serif"
    fontSize: "clamp(30px, 5.2vw, 70px)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.035em"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "14px"
    fontWeight: 400
rounded:
  square: "0px"
spacing:
  copy-gap: "20px"
  row-gap: "30px"
components:
  navigation-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    height: "40px"
  text-cta:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "6px 0"
  project-disclosure:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "25px 0"
  skills-disclosure:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  contact-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    height: "40px"
---

# Design System: Eugene Chevski — Index

## Overview

**Creative North Star: The Folding Index**

This name describes the user's selected Index prototype: a continuous editorial surface where large project names unfold into supporting detail. Warm paper, vermilion typography, and fine rules give the portfolio a confident, tactile character without decorative imagery.

The composition balances oversized headings with compact supporting copy. Its expression comes from type, whitespace, and the fold itself.

**Key Characteristics:**
- Continuous paper canvas and a single ink voice.
- Large, tightly tracked Syne headings; readable DM Sans detail.
- Flat ruled rows with native disclosure behavior.

## Colors

The palette pairs warm paper with vermilion ink and quieter warm supporting tones. Frontmatter is normative; CSS names map directly to `--color-paper`, `--color-ink`, `--color-muted`, and `--color-rule`.

### Primary
- **Vermilion Ink:** identity, headings, links, project rules, disclosure marks, and focus outlines.

### Neutral
- **Warm Paper:** the continuous page background and reversed selection text.
- **Warm Muted Copy:** descriptions, biography, and secondary identity text.
- **Soft Rule:** header, biography, footer, and auxiliary disclosure separators.

**The One Ink Rule.** Hierarchy comes from scale and tone within this palette; new sections should retain the existing ink voice.

## Typography

**Display Font:** Syne, sans-serif. Local regular (400) and bold (700).

**Body Font:** DM Sans, sans-serif. Local regular (400), medium (500), and semibold (600), loaded with font swap.

Syne supplies the wide, editorial silhouette; DM Sans keeps descriptions and navigation direct. There is no separate mono face.

### Hierarchy
- **Display:** the frontmatter display role is the hero. Its second line uses regular weight. Below 640px it uses `clamp(36px, 8vw, 55px)`.
- **Headline:** the frontmatter headline role is each project title; below 640px it becomes 31px.
- **Section headings:** bold Syne with 1.06 line height and the same tight tracking. About uses `clamp(32px, 4vw, 55px)` and contact `clamp(36px, 4.3vw, 60px)`; mobile sizes are 38px and 40px respectively.
- **Body:** frontmatter body role, reduced to 15px below 640px. Hero copy is limited to 470px; project descriptions to 560px.
- **Label:** navigation and text actions use the label role. Project tags are 11px with 0.08em tracking; technologies are 12px with 0.015em tracking. Dates use tabular numerals. Mobile metadata is 11px.

## Layout

Center the page within a 1600px maximum width. Header, hero, and work use 5% side insets, changing to 3.5% at 768px. About and contact use 3.5%, changing to 5% below 640px. Preserve these source-specific inset changes.

The header stays horizontal. Work navigation disappears below 640px; the remaining links stay visible. The hero has 45px vertical spacing, increasing to 75px above and 70px below at 768px. Introduction and CTA sit beside each other, then stack below 640px. The small rotated annotation disappears at widths of 1050px and below.

Project rows span the available width. Open content uses equal columns with a 30px gap; below 640px the date stacks above the description with a 15px gap. About and contact also change from equal columns with an 8% gap to one column below 640px. About vertical padding changes from 85px to 50px; contact starts at 75px, changing to 50px.

## Elevation & Depth

The page is shadow-free. Hairline separators, type scale, and generous spacing establish hierarchy. Project content unfolds from its top edge within a 1500px perspective context: 450ms using `cubic-bezier(0.16, 1, 0.3, 1)`, rotating from −22 degrees and 0.6 opacity to flat and fully visible. The plus mark rotates 45 degrees over 300ms when open. Reduced motion removes animation and transitions and restores automatic scrolling.

## Shapes

Use square, unboxed surfaces and thin horizontal rules. Projects use ink rules; quieter structural divisions use the rule tone. No raster assets are used. The plus sign is a text glyph, not an image or icon package.

## Components

### Navigation link

Compact DM Sans links in a horizontal header. Links have a 40px minimum hit height, underline on hover, and a visible ink focus outline. “Let’s talk” is underlined at rest and includes an outward arrow. Navigation has no fabricated selected state.

### Underlined text CTA

“Open the index” uses a continuous bottom border, a downward arrow separated by 36px, and a 44px minimum hit height. It scrolls to the project index. Keep it a text action rather than a filled button.

### Project disclosure

A native `details` row with a large Syne title, small tag, and plus mark. The summary has no browser marker and uses 25px vertical padding (22px on mobile). The first project is open initially; shared disclosure names allow one project open at a time. Opening reveals the date, description, and technology line with the fold motion described above. The tag hides below 640px.

### Auxiliary skills disclosure

“Also fluent in” remains a small native disclosure with its browser marker, a soft top rule, and 16px top padding. Expanded content starts 12px below the summary. It is visually subordinate to project disclosures.

### Contact links

Underlined text links with an 8px underline offset and 40px minimum hit height. The row wraps with 25px horizontal and 12px vertical gaps. Email uses a mail destination; LinkedIn and GitHub use their real profile destinations.

All interactive elements receive a 2px ink `:focus-visible` outline with 6px offset. Preserve native keyboard and browser disclosure behavior and the focus-revealed skip link. The page renders immediately with its first project open; there is no initial loader or interception layer.

## Do's and Don'ts

### Do:
- **Do** preserve the continuous ruled index and its native exclusive disclosure behavior.
- **Do** use actual local font weights and keep the regular second hero line.
- **Do** preserve readable copy widths, mobile stacking, visible keyboard focus, and reduced motion.

### Don't:
- **Don't** replace the chosen index with a tiled project gallery.
- **Don't** add shadows, rounded cards, gradients, or an invented color ramp to this world.
- **Don't** invent forms, filled buttons, loading screens, or raster imagery as existing patterns.
