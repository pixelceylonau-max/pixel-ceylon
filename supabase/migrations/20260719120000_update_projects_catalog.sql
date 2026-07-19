-- Update projects catalog for requested portfolio changes

-- Remove obsolete projects if present
DELETE FROM projects WHERE slug IN ('eco-fund','msb-outreach','mms-learning','red-state-invest','netivim-digital');

-- Insert new projects
INSERT INTO projects (slug, name, client_type, tags, summary, description, features, image_url, external_url, display_order) VALUES
(
  'vauxhall-court-care-home',
  'Vauxhall Court Care Home',
  'Website Design & Development',
  ARRAY['Healthcare', 'Care Home', 'Website Design', 'Development'],
  'Compassionate, personalised care in a safe and welcoming environment.',
  'At Vauxhall Court Care Home, we provide more than just care—we create a welcoming home built on trust, warmth, and respect. With personalised care plans, dedicated staff, and round-the-clock support, we ensure every resident feels safe, valued, and comfortable.',
  '["UI/UX Design", "Website Design", "Frontend Development", "Responsive Development", "SEO Optimization", "Performance Optimization"]'::jsonb,
  '/images/Vauxhall.webp',
  'https://vauxhallcourtcarehome.com/',
  100
),
(
  'sen-destinations',
  'Sen Destinations',
  'Website Design & Development',
  ARRAY['Travel', 'Tourism', 'Website Design', 'Development'],
  'Sri Lanka, curated with precision.',
  'Sen Destinations is a premier Destination Management Company headquartered in Colombo, Sri Lanka. We design MICE programs, incentive tours, group travel, family holidays, honeymoon escapes, Ramayana trail journeys, and custom itineraries with complete on-ground confidence. From arrivals and hotels to venues, coaches, restaurants, guides, experiences, and 24/7 support, every detail is coordinated by a team that knows the island intimately.',
  '["UI/UX Design", "Website Design", "Frontend Development", "Responsive Development", "SEO Optimization", "Performance Optimization"]'::jsonb,
  '/images/Sen.webp',
  'https://sendestinations.com/',
  101
);

-- Reorder existing projects to preserve the portfolio listing order after removal
UPDATE projects SET display_order = 1 WHERE slug = 'meshaun-journeys';
UPDATE projects SET display_order = 2 WHERE slug = 'gosberton-house';
UPDATE projects SET display_order = 3 WHERE slug = 'abec';
