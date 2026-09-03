# Supplier Sustainability Portal 2026

A single, static public landing page that onboards The Corporate's Tier 1
suppliers into the **2026 Supplier Engagement Programme**. It explains why the
programme exists, how the Smart Intake model works, and routes each supplier to
one of two paths — **EcoVadis** or the **offline sustainability assessment** —
via a simple client-side decision tree.

It collects no data and stores nothing.

## Tech

Plain HTML, CSS, and JavaScript. No framework, no build step, no database, no
API keys. Tier 1 (hardcoded content, public access).

## Structure

- `public/` — the deployable site (this is the Netlify publish directory)
  - `index.html`, `styles.css`, `script.js`
  - `assets/` — the supplier-facing downloads (questionnaire, Code of Conduct,
    Environmental Policy)
- `docs/` — confidential internal source documents, **never published**
- `product-spec.md` — the specification this build follows
- `CLAUDE.md` / `PROGRESS.md` — build guidance and status

## Run locally

```bash
cd public
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

Netlify. Publish directory `public/`, no build command, no environment
variables (see `netlify.toml`). Use a site name disambiguated from the separate
submission-portal project of the same name.
