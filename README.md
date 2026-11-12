# CreditSaathi AI

> **Your companion from paperwork to payout.**

CreditSaathi AI is a consent-first credit-readiness platform being designed for Indian micro and small businesses. Its goal is to help an entrepreneur turn their own business records into a clear, evidence-led file that they can review and choose to share with an authorised lender or scheme facilitator.

It is not a bank, lender, government authority, or automated loan-approval product. CreditSaathi must never promise credit, infer an official credit score, or submit an application without the business owner’s explicit approval.

## Current status

**Stage 0 — design foundation complete.** This repository began with no existing application source. It now contains a responsive Next.js design-system reference, sitemap, audit report, and deployment-ready project setup.

The product is **not yet** a real account, document-processing, payment, AI, or lender-integration system. No personal data, real financial records, loan decisions, or scheme eligibility results are stored or displayed.

## Product direction

CreditSaathi is intended for:

- Small business owners, including tailors, fabricators, dairy units, and local service providers.
- Women entrepreneurs and self-help-group enterprises.
- Financial facilitators, SHG federations, and district support officers.
- Authorised lender and branch teams reviewing an evidence-ready business file.

The intended experience follows three principles:

1. **Plain language** — explain financial requirements without bank jargon.
2. **Meri Ijaazat / my consent** — make every data use and sharing decision visible and reversible.
3. **Evidence before advice** — show sources, uncertainty, and missing information instead of invented eligibility claims or outcomes.

## Included in this repository

- A warm, Indian-rooted colour, typography, spacing, and component system.
- A responsive `/design` route that documents visual tokens and core interface patterns.
- Public and authenticated-workspace sitemap definitions.
- An initial audit that records the absence of legacy source code and lists production dependencies.
- A standard Next.js App Router build configuration for deployment providers.

## Routes

| Route | Purpose | Status |
| --- | --- | --- |
| `/` | Stage-0 entry screen and link to the design review | Available |
| `/design` | Design tokens, type system, component examples, and sitemap | Available |
| Authenticated workspace | Profiles, consent, documents, analysis, applications, and payments | Planned — backend required |
| Admin workspace | Source review, human case review, payments, and audit trails | Planned — RBAC required |

## Design language

The interface combines a midnight-indigo financial foundation with marigold, teal, coral, and warm-paper surfaces. It uses editorial display type alongside a legible sans-serif body face, and includes Hindi and Kannada type treatment. Components expose state with both text and colour, retain visible focus states, and include reduced-motion support.

Every example in the current UI is clearly framed as a **synthetic preview**. Nothing in the design represents a real business, bank, scheme decision, or customer record.

## Tech stack

- [Next.js](https://nextjs.org/) 15 with the App Router
- React 19 and TypeScript
- CSS custom properties and responsive CSS (no runtime styling dependency)
- npm lockfile for repeatable installs

## Project structure

```text
app/
  design/page.tsx       # Design-system reference route
  globals.css           # Tokens, responsive styles, accessibility fallbacks
  layout.tsx            # Application metadata and global shell
  page.tsx              # Stage-0 entry route
docs/
  audit-report.md       # Initial codebase audit and external dependencies
  sitemap.md            # Public, workspace, and admin navigation plan
```

## Run locally

Prerequisites: Node.js 20 LTS or newer and npm.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000), then visit [http://localhost:3000/design](http://localhost:3000/design).

To verify a production build:

```bash
npm run build
npm run start
```

## Deployment

This is a Next.js application, not a static HTML site.

### Vercel (recommended for the current milestone)

1. Import `akshithkheeran2008-ctrl/GAVS2026` into Vercel.
2. Select the repository root as the project root.
3. Keep the detected **Next.js** framework preset.
4. Use `npm ci` as the install command and `npm run build` as the build command.
5. Leave the output-directory field blank; Vercel detects Next.js output automatically.

### Netlify

Use the Next.js runtime integration with `npm run build`. Do not set a static publish directory for the current app.

### GitHub Pages

GitHub Pages cannot host the current server-capable Next.js configuration as-is. It would require an explicit static export configuration and a Pages deployment workflow. Do not select GitHub Pages unless the project is deliberately converted to a static-only site.

## Environment variables

The current design milestone does not require environment variables. Later production work must keep all provider secrets server-side. Expected names may include:

```bash
DATABASE_URL=
GEMINI_API_KEY=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
RAZORPAY_WEBHOOK_SECRET=
EMAIL_PROVIDER_API_KEY=
STORAGE_BUCKET=
```

Never commit `.env` files, API keys, payment secrets, password credentials, or personal data. `.gitignore` excludes local environment files.

## Roadmap

1. Public navigation, accessible hero, trust strip, and low-power visual fallback.
2. Consent-aware account and business-profile architecture.
3. Private document storage, extraction review, and correction workflow.
4. Source-backed government-scheme research and financial calculations.
5. Explainable AI assistance with human review and a verified Gemini backend integration.
6. Application-file preparation, payment test mode, notifications, and role-protected administration.

## Important limitations

- No backend, authentication, database, private storage, AI integration, or payments are currently implemented.
- Government schemes must be sourced from authoritative records and labelled with verification dates before being presented as current.
- Any synthetic examples must remain visibly labelled and must never imply an actual approval, credit score, or financial result.
- Legal, privacy, accessibility, and security reviews are required before processing personal or financial information.

## Further documentation

- [Initial audit report](docs/audit-report.md)
- [Sitemap](docs/sitemap.md)
