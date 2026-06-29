/*
  # Fix RLS Policies

  ## Changes
  This migration fixes overly permissive RLS policies by:
  1. contact_submissions: Allow anon INSERT (contact forms), remove UPDATE/DELETE for authenticated
  2. projects: Remove write policies for authenticated (admin-only management)
  3. services: Remove write policies for authenticated (admin-only management)
*/

-- Drop overly permissive policies on contact_submissions
DROP POLICY IF EXISTS "Anyone can insert a contact submission" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can delete submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can update submissions" ON contact_submissions;

-- Recreate contact_submissions policies
-- Allow anyone to submit contact forms (required for public contact form)
CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Note: UPDATE and DELETE are intentionally left for service role only
-- Regular users cannot modify or delete submissions through the API

-- Drop overly permissive policies on projects
DROP POLICY IF EXISTS "Authenticated users can delete projects" ON projects;
DROP POLICY IF EXISTS "Authenticated users can insert projects" ON projects;
DROP POLICY IF EXISTS "Authenticated users can update projects" ON projects;

-- Note: projects are managed by admins via service role, not through public API

-- Drop overly permissive policies on services
DROP POLICY IF EXISTS "Authenticated users can delete services" ON services;
DROP POLICY IF EXISTS "Authenticated users can insert services" ON services;
DROP POLICY IF EXISTS "Authenticated users can update services" ON services;

-- Note: services are managed by admins via service role, not through public API
