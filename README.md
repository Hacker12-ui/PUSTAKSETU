# PUSTAKSETU

PUSTAKSETU is an **offline-first educational platform foundation** connecting students with teacher-contributed lessons. This repository provides a clean starting architecture for class/subject/chapter browsing, teacher submissions, and future AI-assisted study pack generation.

## Current Scope (Foundation Release)

This implementation intentionally focuses on foundational capabilities:

- Responsive landing page (`/`)
- Student dashboard for browsing class → subject → chapter → learning packs (`/dashboard`)
- Teacher submission interface for lectures, notes, and resources (`/teacher/submit`)
- Initial service worker + IndexedDB download queue scaffolding (offline support baseline)
- Prisma schema drafts for core education domain models
- Server-side BharatCode API route placeholder using environment variables

> ⚠️ **Unfinished features are explicitly marked in the UI.** No fake synchronization, moderation pipeline, or fabricated AI responses are implemented.

## Tech Stack

- **Frontend:** Next.js (App Router), React, TypeScript, Tailwind CSS
- **Backend (initial):** Next.js Route Handlers (`src/app/api`)
- **Database:** PostgreSQL + Prisma ORM
- **Offline support:** Service worker (`public/service-worker.js`) + IndexedDB queue helpers (`src/lib/offline/downloadManager.ts`)
- **AI integration (placeholder):** BharatCode API bridge (`src/app/api/bharatcode/route.ts`)

## Project Structure

```text
src/
  app/
    api/bharatcode/route.ts      # Secure server-side API placeholder
    dashboard/page.tsx           # Student learning catalog UI
    teacher/submit/page.tsx      # Teacher submission UI scaffold
    page.tsx                     # Landing page
  components/
    navigation.tsx               # Shared top navigation
    offline/offline-bootstrap.tsx# Service worker registration
  data/catalog.ts                # Starter catalog data
  lib/offline/downloadManager.ts # IndexedDB queue utilities
  types/learning.ts              # Core frontend interfaces
prisma/
  schema.prisma                  # Draft domain schema
public/
  service-worker.js              # Basic cache-first offline shell
```

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```
3. Update placeholders in `.env.local`:
   - `DATABASE_URL`
   - `BHARATCODE_API_URL`
   - `BHARATCODE_API_KEY`
4. Run development server:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:3000`

## Prisma Notes

Schema is intentionally a draft model layer for:

- Users and roles
- Teacher profiles
- Class/subject/chapter hierarchy
- Lessons and learning packs
- Learning progress

To generate a Prisma client locally:

```bash
npx prisma generate
```

To create your first migration after configuring PostgreSQL:

```bash
npx prisma migrate dev --name init
```

## BharatCode API Placeholder

The `POST /api/bharatcode` route:

- validates prompt input
- reads `BHARATCODE_API_URL` and `BHARATCODE_API_KEY` from server environment
- returns `501` when not configured
- proxies request to BharatCode only when credentials are present

No API keys are hardcoded in this repository.

## Accessibility and UX Notes

- Semantic headings and section landmarks are used across pages.
- Forms include labels for all inputs.
- Layout remains readable across mobile and desktop breakpoints.
- Incomplete workflows are clearly marked as “coming soon” or “in progress”.

## Roadmap

- Authentication and role-based access
- Teacher moderation and publish workflow
- Reliable offline background sync + conflict resolution
- Download retries and progress telemetry
- Full BharatCode prompt templates and safety filters
- Service extraction from Next.js route handlers to dedicated backend services

## License

MIT (see `/LICENSE`).
