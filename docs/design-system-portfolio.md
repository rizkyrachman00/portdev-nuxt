# Portfolio Design System — Rizky (Minimal Hero)

Reference doc for replicating this design exactly. Feed this to an AI code
generator (Cursor, v0, Claude, etc.) alongside the screenshot for best results.

---

## 1. Design Philosophy

- **Style**: Minimal, editorial, confident whitespace. Swiss/portfolio-grade,
  not "SaaS landing page."
- **Mood**: Calm, credible, quietly technical. Zero clutter, zero gradients,
  zero shadows-as-decoration.
- **One accent rule**: Orange is used *only* for emphasis (a key phrase, a
  number, a CTA, a status dot). Never used for large fills or backgrounds.
- **Typographic hierarchy via color/weight, not size alone**: headings often
  fade from black → mid-gray → light-gray across lines to create depth
  within a single heading block.
- **Oversized ghost typography**: huge, low-opacity text sits *behind*
  content (project codenames, the wordmark "RIZKY" at the very bottom) as a
  textural/branding layer — never competes with foreground legibility.

---

## 2. Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--bg` | `#FBFBFA` | Page background, warm off-white/cream (not pure white) |
| `--ink-900` | `#151515` | Primary headings, body-strong text, primary buttons |
| `--ink-700` | `#686865` | Secondary headings / sub-lines |
| `--ink-400` | `#AAA9A5` | Muted headings, faded heading lines, section labels |
| `--ink-200` | `#E7E7E3` | Ghost/background typography, borders, dividers |
| `--accent` | `#F36B16` (warm orange) | Emphasis words, "with AI", numbers, CTA button fill |
| `--accent-muted` | `#F36B1648` (muted orange) | Large step numerals, soft accent emphasis |
| `--success-dot` | `#28C985` (green) | "Open to opportunities" status indicator |
| `--surface` | `#FFFFFF` | Card backgrounds, button text-on-dark, badge fills |

Notes for AI: this is a **warm neutral palette**, not cool gray. Background
is cream/off-white, not `#FFFFFF`. Only one accent hue exists in the entire
page — resist adding blues, purples, or multiple accents.

### Fade opacity scale for heading hierarchy

The design uses the same near-black hue (`#151515`) at varying opacities to
create the fade-heading effect. Use these exact hex values:

| Opacity | Hex | Usage |
|---|---|---|
| 100% | `#151515` | Primary heading line |
| 76% | `#151515C2` | Faded role/secondary line |
| 66% | `#15151566` | Range labels, dramatic second lines |
| 54% | `#1515158A` | Distant timeline/education roles |
| 40% | `#15151540` | "ENGINEERING." fade line |
| 25% | `#1515152E` | Lightest heading line ("to production.", "accountable.") |
| 12% | `#15151512` | Ghost background project names |

---

## 3. Typography

- **Primary typeface**: **Geist** (variable sans-serif) for body, headings,
  and statements.
- **Mono typeface**: **Geist Mono** for labels, indexes, dates, range tags,
  and tech-stack eyebrows.
- **Display/heading font size**: Very large for section titles:
  - Hero statement: 60px, weight 650, letter-spacing -2.5
  - Display headings: 92–96px, weight 650, letter-spacing -4 to -4.4
  - Experience stat number: 132px, weight 650, letter-spacing -7
- **Body copy**: 14–18px, `--ink-700`, line-height 1.5, short line length.
- **Labels/eyebrows**: 9–11px, all-caps or small-caps, letter-spacing 0.6–1,
  `--ink-400`, Geist Mono.
- **Number treatment**: Large accent-colored numerals used as list markers
  (≈2, 01–04) — oversized relative to their label text, orange. Muted step
  numerals use `--accent-muted` (`#F36B1648`).

Implementation alignment: Pencil's intended hero weight is `650`. The current
hero uses Tailwind's `font-medium` (`500`); treat that as a pending code
correction, not a change to the design target.

**Weight pairing pattern**: within one heading block, mix a bold/black line
with a lighter gray line directly below it of the *same size* — this fade
effect is a signature move of this design. Use the fade opacity scale above
rather than separate gray hues.

---

## 4. Layout & Grid

- **Max content width**: ~1100–1200px, centered, generous side margins.
- **Vertical rhythm**: Very tall sections with large vertical whitespace
  between blocks (100–160px between major sections) — the design *breathes*.
- **Hero**: Centered text alignment, single column.
- **Below hero**: Shifts to left-aligned, often two-column (headline left /
  supporting paragraph right, or content left / meta-label right).
- **Case study cards**: Full-bleed-ish image/mockup on one side, text block
  on the other, alternating or stacked depending on section. Numbered index
  in the corner (e.g. "01 / FEATURED", "FULL-STACK", "2025").
- **Process/timeline lists**: Left column = numeral, middle = title +
  connecting vertical line/dot (like a timeline stem), right column =
  description. Small connecting dots along a vertical guide line.

---

## 5. Components

### Navigation
- Left: small square logo mark (dark rounded-square with initials/mono) +
  email address in small type.
- Right: pill-shaped status badge with colored dot + text ("● Open to
  opportunities"), plus a hamburger menu icon.
- Transparent background, sits directly on page background, no border/shadow.

### Buttons
- **Primary**: Solid black/ink pill or rounded-rect, white text, small arrow
  or chevron icon, e.g. "View selected work ↓". Fully rounded (pill shape).
- **Secondary**: Text-only with icon, no fill, e.g. "⬇ Download resume".
- **Accent CTA** (footer): Solid orange pill button, white text + arrow icon,
  e.g. "Email me ↗".

### Status/meta strip
- Three-column row of small stat blocks: eyebrow label (muted, caps) above
  a value line (dark). No borders, no icons, just typographic hierarchy.
  E.g. "EXPERIENCE / Nearly 2 years shipping".

### Project/case-study cards
- Large mockup image/screenshot (device frame or browser-style composite),
  rounded corners (~12–16px), placed on a dark or branded-color canvas
  matching the project.
- Adjacent text: eyebrow ("01 / FEATURED · FULL-STACK · 2025"), bold title
  sentence, short description paragraph, small tag row (tech stack, comma
  or dot-separated, muted gray, tiny caps).
- A small "↗" external-link arrow icon appears next to secondary/related
  project links listed above/below the main card (e.g. "miniEcom API
  Prototype ↗").

### Process steps (numbered list)
- Format: `01  Define` — muted orange numeral, bold title, gray description
  to the right, small connecting dot on a vertical line joining steps.

### Timeline (experience/education)
- Same dot + vertical line pattern as process steps.
- Left: date range (small, muted). Middle: role/title (bold) with dot
  marker. Right: institution + description.

### Skills strip
- Simple 5-column row, numbered (01–05), category pairs separated by "/"
  (e.g. "Laravel / Go", "PostgreSQL / Redis", "React / TypeScript").
  No icons, no badges — pure typography.

### Footer
- Giant two-line statement echoing the heading style (dark line + faded
  gray line): "LET'S BUILD / SOMETHING RELIABLE."
- Short paragraph + orange CTA button on the same row.
- Bottom bar: copyright + social links (GitHub, LinkedIn, Resume), all
  small caps, muted.
- Oversized ghost wordmark of the name spanning full width beneath
  everything, heavily faded, cropped by viewport edge.

---

## 6. Image Assets

The required mockups for the selected-work section are present in
`public/images/`. Their original files remain in `assets/`:

| Final path in `public/images/` | Source asset in `assets/` | Usage |
|---|---|---|
| `rizky-inline-portrait.png` | `circular-pp.png` | 64px circular inline portrait next to "Hi, I'm Rizky." |
| `lovary-jewelry-ecommerce.png` | `lovary-web-commerce-app.png` | 780×400 featured web project mockup |
| `blackboxgym-mobile-app.png` | `blackbox-gym-app.png` | 780×400 featured mobile project mockup |

Additional reference assets (`seco-web-app.png`, `vps-migrate-project.png`)
can be used later for secondary project rows as the build expands.

---

## 7. Motion / Interaction

Motion must remain calm, deliberate, and secondary to the typography. The hero
uses a custom entrance sequence; other sections use the reusable motion system
described in `portfolio-dev-plan.md`.

### Approved hero sequence

1. Type the headline character by character at `35ms` per character, with a
   `120ms` pause after each completed row. Reserve each text target's final
   width before typing so the portrait and surrounding words never reflow.
2. Keep a narrow solid cursor visible during typing. After the final character,
   blink it every `550ms`.
3. Draw the `with AI.` underline over `600ms`. It remains static after drawing.
4. Start the supporting copy `80ms` after the underline finishes. Resolve it
   from a `6px` blur over `1.3s` using the editorial ease.
5. Reveal the primary CTA over `550ms`, then start the secondary CTA `180ms`
   later and reveal it over `650ms`.
6. Keep the portrait on an independent `3.2s` sine breathing pulse.
7. After the entrance sequence, split the completed headline into words and
   shuffle their order once. Pulse one word at a time from scale `1` to `1.01`
   over `280ms`, return it fully to rest over `450ms`, then wait `120ms` before
   the next word. Pause `1.8s` after a complete cycle.
8. Pulse the cursor with `AI.` only. Never pulse or move the underline.

The typewriter treatment is a hero-only exception. Do not reuse it elsewhere.

### Shared motion rules

- Use clip-path line reveals as the quiet default for non-hero text.
- Use scroll-scrubbed variable font weight only for selected display headings.
- Use scramble/decode effects sparingly on numerals and short labels.
- Keep ghost typography to slow parallax only.
- Use a CSS-only pulse for the navigation status dot.
- Use the registered `editorial` ease for entrance and reveal motion; avoid
  bounce, elastic, and decorative overshoot.
- Disable the complete hero sequence and all scroll-driven motion when
  `prefers-reduced-motion: reduce` is active. Render the final static state.

---

## 8. AI Prompting Notes

When generating code from this doc, instruct the AI to:
1. Use a **cream/off-white background** (`#FBFBFA`), never pure white or dark mode.
2. Use **exactly one accent color** (orange `#F36B16`) — reject any suggestion to add
   secondary accent hues.
3. Reproduce the **fade-hierarchy heading pattern** (bold line + same-size
   lighter gray line beneath) using the exact opacity scale in section 2.
4. Keep **generous vertical whitespace** — err on the side of more space
   between sections than feels natural.
5. Use **pill-shaped buttons**, not sharp-cornered rectangles.
6. Add the **oversized faded background typography** treatment behind
   section headers and in the footer as a signature texture element.
7. Keep all icons minimal/line-style (arrows, dots) — no filled icon sets
   or illustrations.
8. Treat the **Pencil design file** (`portfolio-web.pen`) as the visual source
   of truth; when exact values in this doc differ from the Pencil file, use
   the Pencil file.
