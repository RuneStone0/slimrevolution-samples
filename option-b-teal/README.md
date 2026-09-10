# Slim Revolution — Sample Website Redesign (Pitch Package)

A ready-to-present sample of what **slimrevolution.net** could look like.
Three example landing pages, built from a full audit + product research +
strategy + copy + wireframe pipeline. Everything is static HTML/CSS (no build
step, no framework) so it renders by double-clicking a file — and every element
maps 1:1 onto native Wix apps, so it can be reproduced in the Wix Editor without
custom code.

## Open it

```
index.html       →  Page 1 · "Revolution" Homepage (top of funnel)
vacutherm.html   →  Page 2 · VacuTherm Treadmill (flagship product)
membership.html  →  Page 3 · Transformation Membership (bottom of funnel)
```

Double-click `index.html`, or serve locally:

```
cd slimrevolution-pitch && python3 -m http.server 8000
# then open http://localhost:8000
```

## The funnel at a glance

| Page | Intent | Primary CTA |
|---|---|---|
| **1 — Homepage** | "I want to change my body, non-invasively, near me" | Book Your $50 Weight Loss Consultation |
| **2 — VacuTherm** | "What is VacuTherm / is this for me?" | Book a VacuTherm Session — $45 (+ Lymph Roller $15) |
| **3 — Membership** | "I'm ready to invest in a tracked plan" | Start Your Membership |

The differentiator every page sells: **measured onboarding → 21-metric body scan
→ monthly re-measurement and progress tracking.** The machines are proof, not the
promise.

## What this fixes vs. the current site (from the audit)

- **Hours of operation** — now a visible block (footer + "Visit us"). Currently missing entirely.
- **"© 2035" placeholder** — replaced with © 2026.
- **5-of-9 dead nav links** — nav now resolves to real pages/sections.
- **Instagram feed dominating the homepage** — capped to ~6 tiles, moved to footer.
- **Too many competing CTAs** — one gold primary CTA per page; everything else is a text link.
- **No About/credentials** — ISSA-certified + CE/TÜV NORD trust bar & trust lines.
- **Weak social proof** — every testimonial/result is fully attributed (name + photo + number).
- **Keyword-stuffed SEO title** — clean per-page title/meta/canonical (see each page head).
- **Member-only services listed publicly with no price** — gated behind a "🔒 Members" label.
- **Blog not in nav** — blog is interlinked from the funnel (not shown here, but noted in build spec).

## Compliance (important)

VacuTherm efficacy figures (2–3× calorie burn, "1000 kcal", 76%/80% cellulite) are
**vendor marketing claims, not peer-reviewed evidence.** Every number on these pages
is phrased "up to / vendor-reported / results vary," every result-bearing page carries
a disclosure block, and pregnancy + heart disease are flagged as contraindications
with a "consult your doctor" line.

## How to rebuild this in Wix (native apps only)

| Element | Wix mechanism |
|---|---|
| Services grid + booking | **Wix Bookings** Service List |
| Membership pricing | **Wix Pricing Plans** (Buy Now → Wix Payments) |
| FAQ | **Wix FAQ** (accordion widget) |
| Map + hours | **Wix Local Business** |
| Lead magnet (p.3) | **Wix Forms** |
| IG feed (capped 6) | **Pro Gallery** / Instagram app |
| Blog (not shown) | **Wix Blog** + nav link |
| Waiver | Adobe eSign (kept; surface inside onboarding) |

Design system: "clean-luxe" — warm ivory `#FAF6EF`, deep espresso `#211C17`, single
gold accent `#C6A15B` (reserved for the one primary CTA per page). Playfair Display
(headings) + Inter (body). The signature body-composition chart is a designer-made
SVG (zero code) — swap in real client data behind a login later if desired.

## Files

```
slimrevolution-pitch/
├── index.html          # C1 Homepage
├── vacutherm.html      # C2 VacuTherm Treadmill
├── membership.html     # C3 Transformation Membership
├── README.md           # this file
└── assets/
    ├── styles.css      # shared design system
    └── app.js          # sticky mobile bar + year (optional, degrades gracefully)
```

## Underlying source docs (produced earlier in this project)

- Audit of the live site → `slimrevolution-audit.md`
- VacuTherm / Lymph Roller product brief → `vacutherm-treadmill-lymph-roller-brief.md`
- Funnel + SEO strategy → `slimrevolution-landing-strategy.md`
- Copy deck + SEO metadata → `slimrevolution-copy-deck.md`
- Wix-ready wireframes → `slimrevolution-wireframes.md`
