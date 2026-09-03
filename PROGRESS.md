# PROGRESS.md — Supplier Sustainability Portal 2026

Tracks the build against the acceptance criteria in `product-spec.md` §13.

**Status:** v1.0 build complete — page built, verified locally, ready to deploy.

## Build steps

- [x] First Session Setup: `docs/` created; reference files relocated
      (questionnaire + supplier-facing PDFs → `public/assets/`; confidential
      Strategy + Charter PDFs → `docs/`, kept out of the publish path)
- [x] Read `product-spec.md` and the source documents
- [x] Built the single-page portal (`public/index.html`, `styles.css`, `script.js`)
- [x] `netlify.toml` — publish `public/` only, security headers set
- [x] Tested locally before deploying
- [ ] Deploy to Netlify (connect repo to a disambiguated site name)

## Acceptance criteria (spec §13)

| # | What to verify | Result | Done |
|---|----------------|--------|------|
| 1 | Hero: four stat callouts | 690,000 tCO₂e · 71% · 2045 · 500+ all render, match source | [x] |
| 2 | Why: no reporting-standard codes | No ESRS/CSRD codes or regulation acronyms anywhere on the page | [x] |
| 3 | How it works: Smart Intake | EcoVadis exemption + single-assessment framing; no in-tool submission/CSV mention | [x] |
| 4 | Decision tree default | Both paths visible at equal weight before any click | [x] |
| 5 | Decision tree — Yes | Path A highlighted, Path B dimmed but present/readable | [x] |
| 6 | Decision tree — No | Path B highlighted, Path A dimmed but present/readable | [x] |
| 7 | Decision tree — Reset | Returns to default equal-weight state | [x] |
| 8 | Path A EcoVadis link | Opens ecovadis.com in a new tab (placeholder URL) | [x] |
| 9 | Path B questionnaire download | Downloads the exact, unmodified `.xlsx` | [x] |
| 10 | Path B return instructions | `supplier.assessment@the-corporate.com` as text + working `mailto:` | [x] |
| 11 | Timeline | Apr 2026 · 30 Sep 2026 · Q4 2026 · Q1 2027, all four milestones | [x] |
| 12 | Resources row | Code of Conduct + Environmental Policy PDFs link; EHS compliance email shown | [x] |
| 13 | Footer | `[C]` CSS monogram renders (no broken image); confidentiality line present | [x] |
| 14 | No data collection | No form fields, no upload inputs, no data-transmitting network calls | [x] |
| 15 | Deploys and is accessible | Pending Netlify deploy; verify live URL on desktop + mobile | [ ] |

## Open questions (spec §15)

- [ ] Final disambiguated repo/Netlify site name (builder) — **blocking for deploy**
- [ ] The Corporate's specific EcoVadis network URL, if any (non-blocking)
- [ ] Real EHS help desk link to replace the compliance-email placeholder (non-blocking)
- [ ] Confirm `supplier.assessment@the-corporate.com` as the return address (non-blocking)
