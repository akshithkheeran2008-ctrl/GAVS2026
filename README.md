# CreditSaathi AI

## Current status

Stage 0 — a Next.js design-system and sitemap milestone. The repo began without an existing implementation. This is not yet a lender, payment, AI, document-processing, or account system.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`, then visit `/design`.

## What exists

- Warm, Indian-rooted colour, typography, spacing, and component tokens.
- A responsive `/design` reference page with basic UI states.
- A public/private sitemap.
- Initial audit and integration dependency report.

## Next build milestone (requires approval)

Build the public navigation, hero, low-power animated fallback, and trust strip. The visual brief specifies a 3D hero; the recommended implementation is an accessible CSS/SVG fallback first, then lazy-load 3D only on capable devices.

## Production constraints

No production data or financial results are implemented. A genuine product requires authenticated backend APIs, private document storage, a verified government-scheme source pipeline, Gemini credentials, a Razorpay test account, and a transactional email provider. Configure all credentials as server-side environment variables; never add secrets to this repository.
