# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server (Turbopack)
npm run build    # production build + TypeScript check
vercel --prod    # deploy to production (anasouza.space)
```

No test suite. TypeScript errors surface during `npm run build`.

## Architecture

**Next.js 16 App Router** — all pages in `src/app/`, all reusable UI in `src/components/`.

### i18n

Custom, no next-intl. `src/lib/i18n.tsx` exports a `LanguageProvider` (wraps the whole app in `layout.tsx`) and `useT()` hook. All strings live in two flat dicts (`pt` / `de`) inside that file. Locale stored in `localStorage` under key `asm-locale`. Always use `useT()` — never hardcode copy.

### Supabase

Two clients:
- `src/lib/supabase/client.ts` — browser (`createBrowserClient`), used in client components
- `src/lib/supabase/server.ts` — server (`createServerClient`), used in Server Components / API routes

Admin auth handled by `src/proxy.ts` (middleware pattern) — all `/admin/*` routes require a logged-in Supabase user.

**Key tables:**
- `reviews` — public read + insert (RLS + GRANT to anon). Fields: `id`, `book_id`, `name`, `stars`, `comment`, `created_at`
- `bio_content` — editable bio paragraphs keyed by `key` with `value_pt`/`value_de` columns
- `media` — Cloudinary-hosted images/videos managed through admin panel

### Media / Cloudinary

Images and videos uploaded through the admin panel go to Cloudinary via signed upload (`/api/cloudinary/sign`). Static assets (book covers, author photo, local videos) live in `public/`.

### Books

`src/lib/books.ts` is the single source of truth for book metadata (slug, cover, Amazon links, descriptions in pt/de). Both the shop page (`/loja/[slug]`) and `ShopSection` import from here.

### Main page structure

`src/app/page.tsx` stacks sections vertically:
`HeroSection → EntreFloresSection → CeuDeBrincarSection → CasosDeFamiliaSection → AuthorSection → ContactSection`

`CeuDeBrincarSection` includes `BookReviewAccordion` with hardcoded seed reviews + live Supabase reviews. When DB returns rows, seeds are replaced.

### Artes page (`/artes`)

Self-contained in `src/app/artes/page.tsx` — has its own `TextosSection` (card grid + full-screen modal) and `VideosSection` (local MP4s + YouTube links from Supabase). No shared section components.

### Styling

Tailwind 4 + inline styles. CSS vars for fonts: `--font-playfair`, `--font-inter`, `--font-caveat`. Color palette: `#3d2b35` (dark), `#6b5060` (mid), `#9b7080` (muted), `#7a5468` (accent), `#f5ede8` (warm bg), `#fdf8f5` (light bg). Background texture class `wallpaper-botanical-dense` defined in `globals.css`.

### Deployment

Vercel project `ana-souza-website` → `anasouza.space`. After changing env vars in Vercel dashboard, always redeploy — `NEXT_PUBLIC_*` vars are baked at build time. Mismatched env vars between `.env.local` and Vercel production have caused Supabase failures before.
