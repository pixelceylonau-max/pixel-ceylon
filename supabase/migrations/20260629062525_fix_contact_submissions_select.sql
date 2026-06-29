/*
  # Fix Contact Submissions SELECT Policy

  ## Issue
  The SELECT policy on contact_submissions allows any authenticated user
  to view ALL submissions, which is a privacy concern.

  ## Fix
  Remove the overly permissive SELECT policy. Contact submissions should
  only be viewable by admins (service role), not through the public API.
*/

DROP POLICY IF EXISTS "Authenticated users can view submissions" ON contact_submissions;

-- Note: Contact submissions are now only accessible via service role (admin dashboard)
-- The public cannot read submissions through the API
