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

| Token | Hex (approx) | Usage |
|---|---|---|
| `--bg` | `#F7F5F1` | Page background, warm off-white/cream (not pure white) |
| `--ink-900` | `#111111` | Primary headings, body-strong text, primary buttons |
| `--ink-700` | `#3A3A3A` | Secondary headings / sub-lines |
| `--ink-400` | `#9A9A96` | Muted headings, faded heading lines, section labels |
| `--ink-200` | `#D8D6D0` | Ghost/background typography, dividers |
| `--accent` | `#E8622C` (warm orange) | Emphasis words, "with AI", numbers (≈2, 01-04), CTA button fill, status dot alt |
| `--success-dot` | `#4CAF50` (green) | "Open to opportunities" status indicator |
| `--white` | `#FFFFFF` | Card backgrounds, button text-on-dark |

Notes for AI: this is a **warm neutral palette**, not cool gray. Background
is cream/off-white, not `#FFFFFF`. Only one accent hue exists in the entire
page — resist adding blues, purples, or multiple accents.

---

## 3. Typography

- **Primary typeface**: Humanist sans-serif, similar to *Inter*, *General
  Sans*, or *Neue Montreal* — geometric but warm, generous x-height.
- **Display/heading font size**: Very large (48–72px+ desktop) for section
  titles like "Selected work." / "LET'S BUILD SOMETHING RELIABLE."
- **Hero name line**: ~40–48px, medium weight.
- **Body copy**: Small, ~14–15px, muted gray (`--ink-700`), generous line
  height, short line length (constrained to ~2 lines, centered under hero).
- **Labels/eyebrows**: All-caps or small-caps, ~11px, letter-spaced, muted
  gray (e.g. "EXPERIENCE", "CAPABILITY", "WORKFLOW", "01 / FEATURED").
- **Number treatment**: Large accent-colored numerals used as list markers
  (≈2, 01, 02, 03, 04) — oversized relative to their label text, orange.

**Weight pairing pattern**: within one heading block, mix a bold/black line
with a lighter gray line directly below it of the *same size* — this fade
effect is a signature move of this design (see "Selected work." example and
"AI moves fast. / Engineering stays accountable.").

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

## 6. Motion / Interaction Cues (inferred, not fully visible in static image)

- Likely subtle fade/slide-up on scroll for section reveals (common with
  this aesthetic) — not confirmed from the screenshot, treat as optional.
- Hover states on links likely underline or shift to accent orange.
- Status pill dot likely pulses/animates subtly to signal "live" availability.

---

## 7. AI Prompting Notes

When generating code from this doc, instruct the AI to:
1. Use a **cream/off-white background**, never pure white or dark mode.
2. Use **exactly one accent color** (orange) — reject any suggestion to add
   secondary accent hues.
3. Reproduce the **fade-hierarchy heading pattern** (bold line + same-size
   lighter gray line beneath) rather than just varying font sizes.
4. Keep **generous vertical whitespace** — err on the side of more space
   between sections than feels natural.
5. Use **pill-shaped buttons**, not sharp-cornered rectangles.
6. Add the **oversized faded background typography** treatment behind
   section headers and in the footer as a signature texture element.
7. Keep all icons minimal/line-style (arrows, dots) — no filled icon sets
   or illustrations.
