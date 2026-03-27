# yasmg.studio — Portfolio Landing Page

A polished one-page portfolio website demo for a freelance web design / development brand.

## Stack
- Next.js (App Router)
- React + TypeScript
- Tailwind CSS

## Run locally
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start dev server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000`.

## Build for production
```bash
npm run build
npm run start
```

## Customize content quickly
Most editable text/content is centralized in:
- `data/content.ts` (navigation, services, projects, testimonials)

Layout and section structure live in:
- `app/page.tsx`

Global colors, spacing helpers, and UI utility styles:
- `app/globals.css`
- `tailwind.config.ts`

## Notes
- Smooth scrolling is enabled for in-page navigation.
- Metadata, SEO title/description, and Open Graph basics are in `app/layout.tsx`.
- The page is mobile-first, semantic, and includes accessible labels for key interactive elements.
