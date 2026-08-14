# Rizky Portfolio

Personal portfolio for Muhammad Rizky Rachman, a Full-Stack and Mobile
Engineer specializing in reliable backend-oriented products.

The site is a static Nuxt 4 application built with Tailwind CSS, GSAP,
ScrollTrigger, SplitText, Lenis, and Nuxt image components. Bun is the only
supported package manager and command runner.

## Setup

```bash
bun install
```

## Development

```bash
bun run dev
```

The local site runs at `http://localhost:3000`.

## Verification

```bash
bunx nuxi typecheck
bun run generate
```

`bun run generate` writes the deployable static site to `.output/public`.

## Preview

```bash
bun run preview
```

## Sources Of Truth

1. [`docs/profile.md`](docs/profile.md) — professional content and assets
2. [`docs/design-system-portfolio.md`](docs/design-system-portfolio.md) — visual system and approved motion
3. [`docs/portfolio-dev-plan.md`](docs/portfolio-dev-plan.md) — architecture, stack, and build phases
4. [`AGENTS.md`](AGENTS.md) — project workflow and implementation constraints
5. `../pencil-design/portfolio-web.pen` — exact visual reference; Pencil values take precedence when documents differ
