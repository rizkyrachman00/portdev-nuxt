# Portfolio Development Plan — Nuxt Build

AI guidance doc for building Rizky's portfolio in Nuxt. Use alongside
`design-system-portfolio.md` (visual/design tokens reference). This doc covers stack,
architecture, motion system, and build sequence — read both before
generating any code.

---

## 1. Locked Decisions

| Decision | Choice |
|---|---|
| Rendering mode | **Static (SSG)** via `nuxt generate` |
| Deploy target | Vercel (or Netlify/Cloudflare Pages as alternatives) |
| UI components | **Hand-rolled Tailwind**, no component library (no Nuxt UI, no shadcn) |
| Content | Real project content provided by user (not placeholder) |
| Runtime / package manager | Bun |

---

## 2. Tech Stack

| Concern | Package | Purpose |
|---|---|---|
| Runtime / package manager | `bun` | Install, run, and build scripts (replaces Node + pnpm) |
| Framework | `nuxt` (v4, latest stable) | Core framework, `app/` directory structure |
| Styling | `@nuxtjs/tailwindcss` (Tailwind v4) | Utility-first styling matching design tokens |
| Fonts | `@nuxt/fonts` | Geist and Geist Mono — Geist provides the variable weight axis used by the headline scrub effect |
| Icons | `@nuxt/icon` | Iconify access for arrows/chevrons (Lucide/Phosphor set) |
| Smooth scroll | `lenis` | Inertial scroll feel |
| Scroll/text motion | `gsap` (includes `ScrollTrigger`, `SplitText` — free since GSAP 3.13) | All scroll-driven reveal animations |
| Images | `@nuxt/image` | Nuxt image components; production optimization is deferred to Phase 5 |
| Content (optional, later) | `@nuxt/content` | Only if projects move to markdown-managed content later — not needed for v1 |

Do not add: Spline, Three.js, any 3D/WebGL library, any animation library beyond GSAP + Lenis, any component library. These were explicitly evaluated and rejected for this project — see rationale in section 5.

---

## 3. Project Structure (Nuxt 4 `app/` convention)

```
├── app/
│   ├── assets/
│   │   └── css/
│   │       └── main.css              # Tailwind entry + CSS custom properties (design tokens)
│   ├── components/
│   │   ├── layout/
│   │   │   └── AppHeader.vue
│   │   ├── sections/
│   │   │   ├── HeroSection.vue
│   │   │   ├── StatsStripSection.vue
│   │   │   ├── SelectedWorkSection.vue
│   │   │   ├── AiProcessSection.vue
│   │   │   ├── ExperienceSection.vue
│   │   │   ├── StackSection.vue
│   │   │   └── ContactSection.vue
│   │   ├── ui/
│   │   │   ├── ButtonBase.vue
│   │   │   ├── Container.vue
│   │   │   ├── FadeHeading.vue
│   │   │   ├── FeaturedProjectCard.vue
│   │   │   ├── ProcessStep.vue
│   │   │   ├── ProjectChapter.vue
│   │   │   ├── ProjectIndexRow.vue
│   │   │   ├── SectionEyebrow.vue
│   │   │   ├── StatusBadge.vue
│   │   │   └── TimelineItem.vue
│   │   └── motion/
│   │       ├── TextRevealClip.vue      # clip-path line reveal (default text motion)
│   │       ├── TextWeightScrub.vue     # scroll-scrubbed variable font weight (signature headlines)
│   │       ├── ScrambleNumber.vue      # decode-in effect for numerals
│   │       └── UnderlineDraw.vue       # self-drawing underline for accent phrases
│   ├── composables/
│   │   ├── useLenisGsapSync.ts        # synchronize VueLenis with GSAP's ticker
│   │   ├── useScrollReveal.ts          # shared ScrollTrigger setup helper
│   │   └── useReducedMotion.ts         # prefers-reduced-motion guard
│   ├── data/
│   │   ├── contact.ts                  # contact and social links
│   │   ├── experience.ts               # typed roles/education entries
│   │   ├── process.ts                  # AI-assisted engineering process
│   │   ├── projects.ts                 # typed project entries
│   │   ├── skills.ts                   # typed skill groups
│   │   └── stack.ts                    # typed stack capability categories + AI tools
│   ├── layouts/
│   │   └── default.vue
│   ├── pages/
│   │   ├── index.vue                   # composes all sections, kept short
│   │   └── work.vue                    # curated work index placeholder (case studies pending)
│   ├── plugins/
│   │   └── gsap.client.ts              # client-only GSAP plugin registration
│   ├── types/
│   │   └── index.ts                    # Project, ExperienceItem, SkillGroup interfaces
│   └── app.vue
├── nuxt.config.ts
├── package.json
└── bun.lock
```

**Runtime notes**
- Use `bun install`, `bun run dev`, `bun run generate` — do not mix in `npm`/`pnpm`/`yarn` lockfiles or commands
- Nuxt runs on Bun without extra config as of Nuxt 4; if any dependency has native bindings that misbehave under Bun, fall back to running that single script through Node rather than switching the whole project's package manager
- CI/deploy (Vercel, etc.) should be configured to use Bun as the install/build command explicitly, since some platforms still default to npm detection

**Naming conventions**
- Components: PascalCase, role-prefixed (`HeroSection.vue`, not `Section1.vue`)
- Props: fully typed via `defineProps<{...}>()`, no `any`
- One landing-page block = one component in `sections/`; `pages/index.vue` only composes them
- Content lives in typed `data/*.ts` files, never hardcoded in templates
- Design tokens defined once through Tailwind v4's `@theme` in `main.css`

---

## 4. Design Tokens (summary — full detail in design-system-portfolio.md)

- Background: cream/off-white (`#FBFBFA`), never pure white
- Ink scale: `900` (`#151515`) → `700` (`#686865`) → `400` (`#AAA9A5`) → `200` (`#E7E7E3`)
- Single accent: warm orange (`#F36B16`) — used only for emphasis words, numerals, CTA fills
- Muted accent: `#F36B1648` for large step numerals
- Success dot: `#28C985`
- Typography: **Geist** variable sans for body/headings, **Geist Mono** for labels/indexes/dates, large display headings, small letter-spaced caps labels
- Signature pattern: bold heading line + same-size lighter-gray line beneath (fade hierarchy) — this pattern is also the basis for the weight-morph motion effect (section 5)
- Buttons: fully rounded pills, not sharp corners
- Oversized faded background typography as texture (ghost project names, giant wordmark in footer)

> **Source of truth:** the Pencil design file (`portfolio-web.pen`) contains the exact color, size, and position values. These docs summarize the semantic intent; when values differ, use the Pencil file.

---

## 5. Motion System

### Rejected approaches (with reasoning, so AI doesn't reintroduce them)
- **Spline / Three.js** — no 3D elements in this design; would add unnecessary runtime weight and visually clash with the minimal aesthetic
- **Plain opacity fade-up** — the default in nearly every Framer/Webflow template; not distinctive
- **Bouncy/elastic easing** — reads as playful, clashes with the calm/credible tone
- **Character-stagger skew reveals** — increasingly common in GSAP portfolio templates specifically; avoid as a primary technique, not rare anymore

The approved hero typewriter is an explicit exception. It is justified by the
AI-assisted narrative, preserves the final layout width during typing, and
must not be reused for other sections without user approval.

### Chosen techniques

| Element | Technique | Notes |
|---|---|---|
| Hero headline, portrait, copy, and CTAs | **Sequenced hero entrance** — width-preserving character typing, solid-to-blinking cursor, underline draw, blur-resolved copy, then overlapping CTA reveals | Hero-only exception. The portrait breathes independently throughout. |
| Completed hero headline | **Random isolated word pulses** — one shuffled word scales to `1.01` and returns fully to rest before the next | Start only after the entrance. Pause between words and cycles; pulse the cursor with `AI.` and keep the underline static. |
| 2–3 main section headlines (e.g. "Selected work.", "AI moves fast.") | **Scroll-scrubbed variable font weight** — `font-variation-settings` driven directly by scroll position, not time | Signature move. Directly extends the design's own bold→gray fade pattern into motion — this is why it reads intentional rather than templated. Requires a variable font. |
| Non-hero headings and body paragraphs | **Clip-path line reveal** — masked lines translate into view | Quiet default reveal used outside the hero. Hard-edged reveal, not soft. |
| "with AI" accent phrase | **Self-drawing underline** — SVG stroke with `stroke-dashoffset` animated on scroll-into-view | Small, cheap, distinctive detail |
| Numbers (≈2, 01–04, date ranges) | **Scramble/decode-in** — random characters settle into the real value | Use sparingly, only on numerals/short labels — ties into "AI-assisted" narrative without being a template cliché |
| Ghost background typography | **Slow parallax only**, no reveal animation | It's texture, not content — should feel passively present |
| Contact CTA | **Stack-style settle** | "LET'S TALK" pill drifts in from a small translate/rotate/scale offset and settles at a `-1deg`/`-2deg` resting tilt (`sine.out`). Line arrow nudges outward on hover. No hinge, clip, or looping animation. |
| Nav status dot ("Open to opportunities") | **CSS-only pulse**, no JS | Continuous subtle animation, no scroll trigger needed |

### Timing/easing discipline (this matters more than the technique choice)
- Hand-tuned custom cubic-bezier easing — do not use GSAP default eases
- Stagger sequences kept under ~400ms total — long staggers feel slow/templated
- No bounce, no elastic, no overshoot on text motion
- Direction-aware reveals where practical (reveal direction respects scroll direction on repeat views)
- The approved hero typing and ambient word-pulse timelines are explicit
  exceptions to the general stagger-duration limit. Each individual pulse must
  still return fully to rest before another starts.

### Accessibility requirement
All hero, scroll-scrub, scramble, and clip-path effects **must** be disabled
when `prefers-reduced-motion: reduce` is set. Render the final static state.
Implement the guard through `useReducedMotion` before initializing GSAP.

---

## 6. Build Sequence

**Phase 1 — Scaffold (complete)**
- `bunx nuxi init`, then `bun install` for the full stack listed in section 2
- Configure Tailwind tokens from `design-system-portfolio.md`
- Set up folder structure exactly as in section 3
- Build typed `data/*.ts` files from real project content

**Phase 2 — Static layout (complete)**
- Build every section component with correct structure/spacing/typography, matching the screenshot pixel-for-pixel
- No animation yet — lock visual fidelity first so motion isn't built on top of an incorrect layout

**Phase 3 — Motion infrastructure (complete)**
- `useLenisGsapSync` composable (VueLenis/GSAP ticker synchronization and teardown)
- `useScrollReveal` composable (shared ScrollTrigger boilerplate)
- `useReducedMotion` composable (accessibility guard)
- Build the four reusable motion components in `components/motion/`

**Phase 4 — Wire motion into sections (active)**
- Apply techniques per the table in section 5, section by section
- Tune easing curves, timing, and stagger values by eye
- The approved hero entrance and ambient word pulses are implemented.
- Continue wiring the reusable motion components into non-hero sections only
  after each preceding section receives user approval.

**Phase 5 — Polish & performance (pending)**
- Verify `prefers-reduced-motion` fallback across all effects
- Lighthouse pass; optimize project images via `@nuxt/image`
- Font loading strategy check (variable font weight must be available for the scrub effect)
- Cross-browser check — Safari can be inconsistent with `clip-path` + GSAP combinations, test explicitly

### Current implementation alignment

- Pencil remains authoritative for exact visual values.
- The approved hero motion is documented in section 5 and in
  `design-system-portfolio.md`.
- Pencil specifies hero weight `650`; the current `HeroSection.vue` uses
  `font-medium` (`500`). Correct the implementation later rather than changing
  the documented design target.

---

## 7. Content Status

- [x] Seven project records in `app/data/projects.ts`
- [x] Current role, internship, and education in `app/data/experience.ts`
- [x] Five skill groups in `app/data/skills.ts`
- [x] Contact email and footer metadata in `app/data/contact.ts`
- [x] Stack capability categories and AI tools in `app/data/stack.ts`
- [x] Hero, Lovary, and BlackBoxGym images in `public/images/`
- [x] Email, social, and resume links wired in header, hero, and footer
- [x] Curated `/work` placeholder page wired from the header work menu
- [ ] Replace `#` project links and the `/work` placeholder with final content

> **Approved deviation:** the `/work` placeholder display headings use
> `font-medium` (`500`) instead of the `650` display target. This matches the
> hero treatment the user approved for the placeholder; keep it until the
> placeholder is replaced with final case-study content.
