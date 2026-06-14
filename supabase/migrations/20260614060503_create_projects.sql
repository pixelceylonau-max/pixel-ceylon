/*
  # Create projects table

  ## Purpose
  Stores portfolio/case study projects for the Pixel Ceylon website.

  ## New Tables
  - `projects`
    - `id` (uuid, primary key)
    - `slug` (text, unique) - URL-friendly identifier
    - `name` (text) - Project name
    - `client_type` (text) - Industry/category info
    - `tags` (text[]) - Array of tags (Web Design, Development, etc.)
    - `summary` (text) - Short summary for cards
    - `description` (text) - Full project description
    - `features` (jsonb) - Array of key features/highlights
    - `image_url` (text) - Main project image
    - `gallery` (jsonb) - Array of additional images
    - `external_url` (text) - Link to live project
    - `display_order` (int) - Sorting order
    - `created_at` (timestamptz)
*/

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  client_type text NOT NULL DEFAULT '',
  tags text[] DEFAULT '{}',
  summary text NOT NULL DEFAULT '',
  description text NOT NULL DEFAULT '',
  features jsonb DEFAULT '[]',
  image_url text DEFAULT '',
  gallery jsonb DEFAULT '[]',
  external_url text DEFAULT '',
  display_order int DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view projects"
  ON projects
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert projects"
  ON projects
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update projects"
  ON projects
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete projects"
  ON projects
  FOR DELETE
  TO authenticated
  USING (true);

-- Seed initial projects
INSERT INTO projects (slug, name, client_type, tags, summary, description, features, image_url, external_url, display_order) VALUES
(
  'meshaun-journeys',
  'Meshaun Journeys',
  'Tourism & Hospitality · Sri Lanka',
  ARRAY['Web Design', 'UI/UX', 'Development'],
  'A complete digital transformation for a premium Sri Lankan tour operator.',
  'Meshaun Journeys needed a modern, conversion-focused website that would showcase their premium travel experiences and drive bookings. We delivered a complete digital transformation — from brand-aligned visual design to a custom booking inquiry system. The result is a stunning, fast-loading website that captures the essence of Sri Lankan adventures while making it effortless for travelers to plan their journey.',
  '["Custom booking inquiry system", "Mobile-first responsive design", "Optimized image galleries", "SEO-friendly structure", "Fast load times (<2s)"]'::jsonb,
  'https://images.unsplash.com/photo-1682687220742-aa13a2b7ee9b?w=1200&h=800&fit=crop',
  'https://meshaunjourneys.com',
  1
),
(
  'gosberton-house',
  'Gosberton House',
  'Care & Healthcare · United Kingdom',
  ARRAY['Web Design', 'Branding', 'SEO'],
  'A compassionate web presence for a UK residential care provider.',
  'Gosberton House, a residential care home in the UK, needed a website that would convey trust, warmth, and professionalism to families seeking care for their loved ones. We created a gentle, accessible design paired with clear information architecture. The site features service details, photo galleries of facilities, contact forms, and locally-optimized SEO to help families find them easily.',
  '["Accessible design (WCAG 2.1)", "Virtual tour gallery", "Service information pages", "Contact form integration", "Local SEO optimization"]'::jsonb,
  'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=800&fit=crop',
  'https://gosbertonhouse.co.uk',
  2
),
(
  'red-state-invest',
  'Red State Invest',
  'Investment & Finance · Sri Lanka',
  ARRAY['Development', 'Content', 'Branding'],
  'A sleek investment platform with a bold, premium identity.',
  'Red State Invest required a digital presence that would communicate authority and trust in the investment sector. We developed a complete brand identity along with a high-performance website featuring real-time portfolio displays, educational content sections, and secure client inquiry forms. The modern, dark-themed design sets them apart in their market.',
  '["Premium dark-themed UI", "Investment portfolio displays", "Educational blog section", "Client inquiry forms", "Performance-optimized"]'::jsonb,
  'https://images.unsplash.com/photo-1611974789855-9c6a0f8c67a9?w=1200&h=800&fit=crop',
  'https://redstateinvest.com',
  3
);
