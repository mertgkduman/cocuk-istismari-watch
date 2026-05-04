# Çocuk İstismarı Takip

Static, GitHub Pages friendly child-abuse case tracker for Türkiye. It maps public, source-backed records involving child sexual abuse, physical abuse, neglect, and institutional abuse while keeping aggregate official statistics as context only.

## Files

- `index.html` - app shell, modals, and static CDN dependencies.
- `styles.css` - desktop layout, mobile filter drawer, and mobile record bottom sheet.
- `app.js` - Leaflet map, filters, bilingual UI, local/Supabase data loading, and submission fallback.
- `data/incidents.json` - reviewed public starter records with stable source URLs.
- `data/source-registry.json` - regular update source checklist and archive of used source URLs.
- `data/seed-cases.json` - compatibility fallback copy of the incident seed records.
- `data/import-template.csv` - CSV field template for manual imports.
- `supabase/schema.sql` - Supabase-ready tables, enums, indexes, and public RLS policies.

## Local Run

```powershell
cd c:\Users\User\Documents\projects-git\cocuk-istismari-watch
python -m http.server 8090 --bind 127.0.0.1
```

Open `http://127.0.0.1:8090/`.

## Data Rules

Every public record must include at least one stable `http(s)` source URL. Do not publish unsupported allegations as fact; use attributed language for investigations, indictments, and ongoing trials. Do not add private child identities, exact addresses, schools, or family details beyond what a stable public source already states and what the record needs.

## Defaults

Default-visible layers are recent sourced records, active legal-process records, and institution-related records. Convictions, acquittals / closed cases, and unknown-status records remain available in filters.

## Supabase

Leave `SUPABASE_URL` and `SUPABASE_ANON_KEY` blank in `app.js` to run entirely from static JSON. When configured, verified records are read from Supabase and public reports are inserted into `case_submissions` for editor review.
