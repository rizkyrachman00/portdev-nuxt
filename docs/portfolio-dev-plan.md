# Portfolio Development Plan — Nuxt Build

AI guidance doc for building Rizky's portfolio in Nuxt. Use alongside
`design-system.md` (visual/design tokens reference). This doc covers stack,
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
| Fonts | `@nuxt/fonts` | Self-hosted variable font (Inter Variable / General Sans Variable) — required for weight-morph headline effect |
| Icons | `@nuxt/icon` | Iconify access for arrows/chevrons (Lucide/Phosphor set) |
| Smooth scroll | `lenis` | Inertial scroll feel |
| Scroll/text motion | `gsap` (includes `ScrollTrigger`, `SplitText` — free since GSAP 3.13) | All scroll-driven reveal animations |
| Image optimization | `@nuxt/image` | Optimizes project mockup screenshots |
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
│   │   │   ├── AppHeader.vue
│   │   │   └── AppFooter.vue
│   │   ├── sections/
│   │   │   ├── HeroSection.vue
│   │   │   ├── StatsStripSection.vue
│   │   │   ├── SelectedWorkSection.vue
│   │   │   ├── AiProcessSection.vue
│   │   │   ├── ExperienceSection.vue
│   │   │   ├── SkillsStripSection.vue
│   │   │   └── ContactSection.vue
│   │   ├── ui/
│   │   │   ├── ButtonBase.vue          # primary/secondary/accent variants
│   │   │   ├── StatusBadge.vue         # "Open to opportunities" pill
│   │   │   ├── SectionEyebrow.vue      # small caps label
│   │   │   ├── ProjectCard.vue
│   │   │   ├── TimelineItem.vue
│   │   │   └── SkillItem.vue
│   │   └── motion/
│   │       ├── TextRevealClip.vue      # clip-path line reveal (default text motion)
│   │       ├── TextWeightScrub.vue     # scroll-scrubbed variable font weight (signature headlines)
│   │       ├── ScrambleNumber.vue      # decode-in effect for numerals
│   │       └── UnderlineDraw.vue       # self-drawing underline for accent phrases
│   ├── composables/
│   │   ├── useLenis.ts                # smooth scroll init/teardown
│   │   ├── useScrollReveal.ts          # shared ScrollTrigger setup helper
│   │   └── useReducedMotion.ts         # prefers-reduced-motion guard
│   ├── data/
│   │   ├── projects.ts                 # typed project entries
│   │   ├── experience.ts               # typed roles/education entries
│   │   └── skills.ts                   # typed skill groups
│   ├── layouts/
│   │   └── default.vue
│   ├── pages/
│   │   └── index.vue                   # composes all sections, kept short
│   ├── types/
│   │   └── index.ts                    # Project, ExperienceItem, SkillGroup interfaces
│   └── app.vue
├── nuxt.config.ts
├── tailwind.config.ts
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
- Design tokens defined once as CSS custom properties in `main.css`, mapped into `tailwind.config.ts`

---

## 4. Design Tokens (summary — full detail in design-system.md)

- Background: cream/off-white (`#F7F5F1`), never pure white
- Ink scale: `900` (headings) → `700` (sub-text) → `400` (muted/faded headings) → `200` (ghost text/dividers)
- Single accent: warm orange (`#E8622C`) — used only for emphasis words, numerals, CTA fills
- Typography: humanist sans (Inter Variable or General Sans Variable), large display headings, small letter-spaced caps labels
- Signature pattern: bold heading line + same-size lighter-gray line beneath (fade hierarchy) — this pattern is also the basis for the weight-morph motion effect (section 5)
- Buttons: fully rounded pills, not sharp corners
- Oversized faded background typography as texture (ghost project names, giant wordmark in footer)

---

## 5. Motion System

### Rejected approaches (with reasoning, so AI doesn't reintroduce them)
- **Spline / Three.js** — no 3D elements in this design; would add unnecessary runtime weight and visually clash with the minimal aesthetic
- **Typewriter effect** — dated, overused
- **Plain opacity fade-up** — the default in nearly every Framer/Webflow template; not distinctive
- **Bouncy/elastic easing** — reads as playful, clashes with the calm/credible tone
- **Character-stagger skew reveals** — increasingly common in GSAP portfolio templates specifically; avoid as a primary technique, not rare anymore

### Chosen techniques

| Element | Technique | Notes |
|---|---|---|
| 2–3 main section headlines (e.g. "Selected work.", "AI moves fast.") | **Scroll-scrubbed variable font weight** — `font-variation-settings` driven directly by scroll position, not time | Signature move. Directly extends the design's own bold→gray fade pattern into motion — this is why it reads intentional rather than templated. Requires a variable font. |
| Hero lines & body paragraphs | **Clip-path line reveal** — `clip-path: inset()` animates from covering the line to fully revealed, no opacity fade | Quiet default reveal used everywhere else. Hard-edged reveal, not soft. |
| "with AI" accent phrase | **Self-drawing underline** — SVG stroke with `stroke-dashoffset` animated on scroll-into-view | Small, cheap, distinctive detail |
| Numbers (≈2, 01–04, date ranges) | **Scramble/decode-in** — random characters settle into the real value | Use sparingly, only on numerals/short labels — ties into "AI-assisted" narrative without being a template cliché |
| Ghost background typography | **Slow parallax only**, no reveal animation | It's texture, not content — should feel passively present |
| Nav status dot ("Open to opportunities") | **CSS-only pulse**, no JS | Continuous subtle animation, no scroll trigger needed |

### Timing/easing discipline (this matters more than the technique choice)
- Hand-tuned custom cubic-bezier easing — do not use GSAP default eases
- Stagger sequences kept under ~400ms total — long staggers feel slow/templated
- No bounce, no elastic, no overshoot on text motion
- Direction-aware reveals where practical (reveal direction respects scroll direction on repeat views)

### Accessibility requirement
All scroll-scrub, scramble, and clip-path effects **must** be disabled or reduced to simple opacity fades when `prefers-reduced-motion: reduce` is set. Implement via the `useReducedMotion` composable and check it before initializing any GSAP timeline.

---

## 6. Build Sequence

**Phase 1 — Scaffold**
- `bunx nuxi init`, then `bun install` for the full stack listed in section 2
- Configure Tailwind tokens from `design-system.md`
- Set up folder structure exactly as in section 3
- Build typed `data/*.ts` files from real project content

**Phase 2 — Static layout (no motion)**
- Build every section component with correct structure/spacing/typography, matching the screenshot pixel-for-pixel
- No animation yet — lock visual fidelity first so motion isn't built on top of an incorrect layout

**Phase 3 — Motion infrastructure**
- `useLenis` composable (init/teardown smooth scroll)
- `useScrollReveal` composable (shared ScrollTrigger boilerplate)
- `useReducedMotion` composable (accessibility guard)
- Build the four reusable motion components in `components/motion/`

**Phase 4 — Wire motion into sections**
- Apply techniques per the table in section 5, section by section
- Tune easing curves, timing, and stagger values by eye

**Phase 5 — Polish & performance**
- Verify `prefers-reduced-motion` fallback across all effects
- Lighthouse pass; optimize project images via `@nuxt/image`
- Font loading strategy check (variable font weight must be available for the scrub effect)
- Cross-browser check — Safari can be inconsistent with `clip-path` + GSAP combinations, test explicitly

---

## 7. Content Checklist (to fill in `data/*.ts`)

- [ ] Lovary Commerce — description, tech stack, image, link
- [ ] BlackBoxGym Mobile App — description, tech stack, image, link
- [ ] miniEcom API Prototype — description, link
- [ ] miniBookTicket Concurrent — description, link
- [ ] Offline Attendance System — description, link
- [ ] Production VPS Migration — description, link
- [ ] Experience: Junior Programmer (Apr 2025–now), Full-Stack Developer Intern (Sep–Dec 2024)
- [ ] Education: Bachelor of Informatics, Universitas AMIKOM Yogyakarta, GPA 3.84/4.00
- [ ] Skills groups: Laravel/Go, PostgreSQL/Redis, React/TypeScript, Flutter/Expo, Docker/Nginx
- [ ] Contact: email, GitHub, LinkedIn, resume link
