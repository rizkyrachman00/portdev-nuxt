# AGENTS.md — Rizky Portfolio

## Project Context

This is a personal portfolio website for **Muhammad Rizky Rachman**, a Full-Stack & Mobile Engineer transitioning into backend engineering. The site is built as a static Nuxt 4 + Tailwind CSS + GSAP single-page application.

## Reference Documents

Read these before every session and before making changes:

1. `docs/profile.md` — professional summary, experience, projects, skills
2. `docs/design-system-portfolio.md` — design tokens, typography, components, layout rules
3. `docs/portfolio-dev-plan.md` — stack, file structure, motion system, build phases
4. `/Users/rizkyrachman/Documents/code-nest-2025/pencil-design/portfolio-web.pen` — read via Pencil MCP for visual fidelity and section structure

**Source of truth hierarchy:** when exact visual values (colors, sizes, positions) in the written docs differ from the Pencil design file, the Pencil file takes precedence.

## Working Rules

- Read this `AGENTS.md` at the start of every session.
- Follow existing docs; do not invent new visual or architectural directions.
- Apply the design system exactly:
  - Background: cream `#FBFBFA`
  - Ink scale: `#151515` → `#686865` → `#AAA9A5` → `#E7E7E3`
  - One accent: warm orange `#F36B16`
  - Fade-heading hierarchy: bold/dark line + same-size lighter-gray line beneath
  - Oversized ghost typography as background texture
  - Fully rounded pill buttons, no sharp corners
- Make changes **step by step**. Do not implement multiple steps in one batch.
- Wait for user review and approval before continuing to the next step.
- Use placeholders for future features with `// TODO` comments.
- Keep components small, typed, and placed in the correct directories per `portfolio-dev-plan.md`.

## Tech Stack

- Framework: Nuxt 4 (SSG via `nuxt generate`)
- Package manager: Bun
- Styling: Tailwind CSS v4, hand-rolled, no component library
- Fonts: `@nuxt/fonts` with Geist and Geist Mono
- Icons: `@nuxt/icon` with Lucide/Phosphor line-style icons only
- Animation: GSAP + ScrollTrigger + SplitText + Lenis
- Images: `@nuxt/image`
- Content: typed `app/data/*.ts` files (no placeholders; real content from `docs/profile.md`)

Rejected for this project: Nuxt UI, shadcn, Framer Motion, Three.js, Spline, any WebGL/3D.

## Git / Commit

- Do **not** commit or push code.
- Do **not** stage files.
- After each executed step or change, provide a commit message in this format:

  ```
  <type>: <description>
  ```

  Examples:
  - `feat: add HeroSection component`
  - `style: configure Tailwind design tokens`
  - `docs: update project content data`
  - `feat: add scroll-scrubbed variable font weight`

- One line, lowercase prefix, descriptive.

## Build Sequence

Follow the phases from `docs/portfolio-dev-plan.md` exactly. Do not skip or mix phases.

1. Phase 1 — Scaffold
2. Phase 2 — Static layout, no motion
3. Phase 3 — Motion infrastructure
4. Phase 4 — Wire motion into sections
5. Phase 5 — Polish & performance

**Phase lock:** the current active phase must be respected. Do not start work from a later phase until the user explicitly approves it.

**Current active phase:** Phase 4 — Wire motion into sections.

## Approved Hero Motion

The hero is an explicit exception to the default clip-reveal treatment used elsewhere:

- Type the headline character by character while preserving its final layout width.
- Show a solid cursor during typing, then blink it after the final character.
- Draw the `with AI.` underline after typing; keep it static afterward.
- Blur-resolve the supporting copy, then reveal the CTA buttons sequentially.
- Keep the portrait on a subtle continuous breathing pulse.
- After the entrance sequence, pulse one randomly ordered headline word at a time with a full return to rest between words and between cycles.
- Pulse the cursor with `AI.` only; never pulse the underline.
- Disable the complete hero motion sequence for `prefers-reduced-motion: reduce`.

Do not reuse the hero typewriter treatment elsewhere unless the user explicitly approves it.

## Code Style

- Components: PascalCase, role-prefixed (e.g. `HeroSection.vue`, `ProjectCard.vue`)
- Props: fully typed via `defineProps<{...}>()`, no `any`
- Content: store in typed `app/data/*.ts` files, never hardcoded in templates
- Design tokens: define once in `app/assets/css/main.css` through Tailwind v4's `@theme`
- Motion: always guard with `prefers-reduced-motion` via `useReducedMotion`

## Content Sync Checklist

When `docs/profile.md` changes, update the matching typed data files:

- [ ] `app/data/projects.ts` — projects and case studies
- [ ] `app/data/experience.ts` — jobs, internships, education
- [ ] `app/data/skills.ts` — skill groups

## What NOT To Do

- Do not commit or push code.
- Do not stage files manually.
- Do not create large bulk changes.
- Do not implement multiple steps at once.
- Do not add extra accent colors, gradients, shadows, or decorative 3D.
- Do not use component libraries such as Nuxt UI or shadcn.
- Do not use Framer Motion, Three.js, Spline, or WebGL.

## When Confused

Ask the user. Do not guess when requirements conflict with docs.
