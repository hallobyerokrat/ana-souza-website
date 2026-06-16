# Admin CMS — Ana Souza Website
**Date:** 2026-06-02  
**Status:** Approved

## Overview

A custom `/admin` route embedded directly in the Next.js site. Ana logs in with her email and password, then manages all content through a sidebar-based dashboard. Visitors never see the admin UI.

## Content Sections

| Section | What Ana can do | Storage |
|---------|----------------|---------|
| **Fotos** | Upload photos from PC, delete photos | Cloudinary (free tier, 25GB) |
| **Vídeos** | Add YouTube link + title, delete entries | Supabase DB |
| **Textos & Poemas** | Add title + full text, delete entries | Supabase DB |
| **Biografia** | Edit bio paragraphs (p1, p3, p4, p5) | Supabase DB |
| **Livros** | Edit book description texts (Céu de Brincar, Casos de Família) | Supabase DB |

## Architecture

### Auth
- Supabase Auth (already in project) — email + password
- Single admin user: `anasouzademagalhaes@gmail.com`
- Protected via middleware: redirect to `/admin/login` if not authenticated
- Session persisted via Supabase cookie

### Routes
```
/admin              → redirect to /admin/fotos if logged in, else /admin/login
/admin/login        → email + password form
/admin/fotos        → photo upload + gallery
/admin/videos       → YouTube link manager
/admin/textos       → text/poem accordion editor
/admin/bio          → bio paragraph editor
/admin/livros       → book description editor
```

### Photo Upload Flow
1. Ana drags/clicks to upload in `CldUploadWidget` (next-cloudinary)
2. Widget uploads directly to Cloudinary — no server-side upload handler needed
3. Cloudinary returns public URL
4. URL saved to `supabase.photos` table: `{ id, url, caption?, created_at }`
5. Delete: removes DB row + calls Cloudinary destroy API

### Text Content Flow
- All text content (bio, books, videos, poems) stored in Supabase tables
- On save: `upsert` to Supabase → page re-fetches (revalidatePath)
- Public pages read from Supabase at render time (or via client fetch)

## Supabase Tables

```sql
-- Photos
photos (id uuid, url text, caption text, created_at timestamptz)

-- Videos  
videos (id uuid, youtube_url text, title text, created_at timestamptz)

-- Textos/Poemas
textos (id uuid, title text, body text, sort_order int, created_at timestamptz)

-- Bio paragraphs (key-value, keyed by p1/p3/p4/p5)
bio_content (key text PRIMARY KEY, value text, updated_at timestamptz)

-- Book descriptions (keyed by slug: ceu-de-brincar, casos-de-familia)
book_descriptions (slug text PRIMARY KEY, description text, updated_at timestamptz)
```

## UI Design

- **Sidebar navigation** (160px): 5 sections, active state highlighted in site mauve `#7a5468`
- **Top bar**: site name + logout button
- **Content area**: section-specific forms and lists
- **Language**: Portuguese (Ana's primary language)
- **Upload area**: dashed border, drag-and-drop, click-to-browse
- **Feedback**: toast notifications on save/delete/error

## Security

- Route protection: Next.js middleware checks Supabase session cookie
- Supabase RLS policies: only authenticated admin user can insert/update/delete
- Cloudinary signed uploads (server-side signature endpoint)
- `/admin/*` routes excluded from sitemap and robots.txt

## Out of Scope

- Multiple admin users
- Draft/publish workflow
- Video direct uploads (YouTube links only)
- Book cover image changes
- i18n for admin UI (Portuguese only)
