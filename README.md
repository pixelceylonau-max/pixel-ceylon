# Pixel Ceylon

A modern Next.js landing page for Pixel Ceylon — a Sri Lankan digital agency focused on web development, web design, branding, SEO, and digital marketing.

## Features

- Next.js 13 app router with TypeScript
- Tailwind CSS styling and custom UI components
- Supabase-backed contact form for lead capture
- Responsive sections: hero, services, projects, testimonials, stats, CTA
- Netlify-friendly deployment via `@netlify/plugin-nextjs`
- Custom fonts with `next/font/google`

## Tech stack

- `next` 13.5.1
- `react` 18.2
- `typescript`
- `tailwindcss`
- `framer-motion`
- `supabase-js`
- `lucide-react`
- `recharts`
- `react-hook-form`

## Project structure

- `app/` — Next.js app router pages and services detail route
- `components/pixel-ceylon/` — landing page sections and UI components
- `lib/supabase.ts` — Supabase client configuration
- `public/` — static assets (if present)
- `netlify.toml` — Netlify build config

## Environment variables

Create a `.env.local` file with the following values:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## Local developmentgit

Install dependencies and start the local development server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Build and production

Build the app:

```bash
npm run build
```

Start the production server locally:

```bash
npm start
```

## Deployment

This project is configured to deploy on Netlify using the Next.js plugin.

Netlify build command:

```bash
npx next build
```

Publish directory:

```bash
.next
```

## Contact form

The contact form submits submissions to a Supabase table named `contact_submissions`.

Make sure your Supabase project has the table and appropriate RLS policies configured for anonymous inserts.

## Notes

- `next.config.js` disables image optimization with `images.unoptimized = true`
- ESLint is ignored during builds via `eslint.ignoreDuringBuilds = true`
- Fonts are loaded using `next/font/google`

