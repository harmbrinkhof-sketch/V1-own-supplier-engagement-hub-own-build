# CLAUDE.md — Supplier Sustainability Portal 2026

Guidance for Claude Code working in this repository.

## What this is

A **Tier 1** (D1 + A1) static, public landing page that onboards The
Corporate's 500+ Tier 1 suppliers into the 2026 Supplier Engagement Programme.
It explains the programme, describes the Smart Intake model, and routes each
supplier to one of two paths (EcoVadis or the offline sustainability
assessment) via a client-side decision tree.

- **Data model:** D1 — Hardcoded. All content is fixed at build time.
- **Access model:** A1 — Public. No login, no accounts.
- **Stack:** Plain HTML/CSS/JS. No framework, no build step, no Supabase, no
  API keys, no environment variables.
- **The page collects and stores nothing.** The only interaction is a
  UI-only Yes/No/Reset toggle. There are no forms, no uploads, no network
  calls that transmit user data.

The authoritative specification is [`product-spec.md`](product-spec.md).

> **Naming note:** This project shares its name with a separate in-progress
> submission-portal project for The Corporate. Repo and Netlify site names are
> disambiguated (this is the `own-build` landing/onboarding page). Keep the two
> separate — they share no code and no infrastructure.

## Repository layout

```
public/                     # Netlify publish directory (only this is served)
  index.html                # the single page
  styles.css                # brand styling
  script.js                 # decision-tree toggle (no data, no network)
  assets/                   # supplier-facing downloadable files
    The_Corporate_Supplier_Questionnaire_2026.xlsx
    The_Corporate_Supplier_Code_of_Conduct_2026.pdf
    The_Corporate_Global_Environmental_Policy.pdf
docs/                       # CONFIDENTIAL internal source docs — NOT published
  Procurement Sustainability Strategy 2026 - The Corporate.pdf
  Supplier Engagement Programme 2026 - Program Charter - The Corporate.pdf
netlify.toml                # publish = "public" + security headers
product-spec.md             # the spec (source of truth)
PROGRESS.md                 # acceptance-criteria checklist
```

## Rules and guardrails

- **Never publish the confidential source documents.** The Strategy and
  Program Charter PDFs in `docs/` are marked *Confidential · Internal use
  only*. They must stay outside `public/`. The publish directory is `public/`
  precisely so these are never exposed.
- **No reporting-standard codes on the page.** Do not put ESRS/CSRD codes
  (E1, E2, E3, E5, S2, G1) or regulation acronyms on the rendered page.
  Priority themes are shown in plain language only: climate, pollution, water,
  circular economy, people, governance.
- **The questionnaire is served unmodified.** Do not edit
  `The_Corporate_Supplier_Questionnaire_2026.xlsx`.
- **No data collection.** Keep the page free of forms, upload inputs, and any
  network request that sends user data. In-tool submission / CSV upload is
  explicitly out of scope (that's the separate submission-portal project).

## Brand

- Primary black `#000000`; cream `#EAE4D5`, warm gray `#F2F2F2`, taupe
  `#B6B09F`; lime accent `#C4D82E` for the data-forward emphasis (hero stats,
  active-path highlight), matching The Corporate's board-ready document styling.
- Georgia for headings, Arial for body. No web fonts (avoids external calls).
- `[C]` monogram is recreated in CSS — no image file.

## Local preview

```
cd public && python3 -m http.server 8000    # then open http://localhost:8000
```

## Deployment

Netlify, publish directory `public/`, no build command, no environment
variables. Connect the repo to a Netlify site (name disambiguated from the
submission-portal project) and deploy.

## Known placeholders (see product-spec.md §15)

- EcoVadis link points to the generic `ecovadis.com` — swap for The
  Corporate's specific EcoVadis network URL if one exists.
- EHS contact uses `supplier.compliance@the-corporate.com` as a placeholder
  until a live EHS help desk is confirmed.
