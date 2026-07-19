export type PortfolioProject = {
  id: string;
  slug: string;
  name: string;
  client_type: string;
  tags: string[];
  summary: string;
  description: string;
  features: string[];
  image_url: string;
  gallery: { url: string; alt: string }[];
  external_url: string;
  display_order: number;
};

export const REMOVED_PROJECT_SLUGS = [
  'eco-fund',
  'msb-outreach',
  'mms-learning',
  'red-state-invest',
  'netivim-digital',
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'meshaun-journeys',
    slug: 'meshaun-journeys',
    name: 'Meshaun Journeys',
    client_type: 'Travel & Tourism',
    tags: ['Travel', 'Tourism', 'UX Design', 'Development'],
    summary: 'Curated journeys shaped by thoughtful storytelling and memorable experiences.',
    description: 'Meshaun Journeys brings together design, storytelling, and digital experiences for a contemporary travel brand. The project highlights the brand’s identity through a polished and engaging online presence curated for modern travellers.',
    features: ['UI/UX Design', 'Website Design', 'Frontend Development', 'Responsive Development', 'SEO Optimization'],
    image_url: '/images/Meshaun.webp',
    gallery: [
      { url: '/images/Meshaun gallery.webp', alt: 'Meshaun journeys cover image' },
      { url: '/images/Meshaun gallery 1.webp', alt: 'Meshaun journeys interface preview' },
    ],
    external_url: '',
    display_order: 1,
  },
  {
    id: 'gosberton-house',
    slug: 'gosberton-house',
    name: 'Gosberton House',
    client_type: 'Property & Lifestyle',
    tags: ['Property', 'Lifestyle', 'Website Design', 'Development'],
    summary: 'A refined digital presence for a premium property experience.',
    description: 'Gosberton House needed a polished online experience that could communicate elegance, clarity, and trust. The result is a modern website that balances visual storytelling with a seamless user journey.',
    features: ['UI/UX Design', 'Website Design', 'Frontend Development', 'Responsive Development', 'SEO Optimization'],
    image_url: '/images/Gosberton.webp',
    gallery: [
      { url: '/images/Gosberton gallery.webp', alt: 'Gosberton House cover image' },
      { url: '/images/Gosberton gallery 1.webp', alt: 'Gosberton House preview' },
    ],
    external_url: '',
    display_order: 2,
  },
  {
    id: 'abec',
    slug: 'abec',
    name: 'ABEC',
    client_type: 'Education · International Consultancy',
    tags: ['Education', 'Consultancy', 'Website Design', 'Development'],
    summary: 'An official, accessible website for a leading education consultancy.',
    description: 'Developed the official website for ABEC, one of Sri Lanka’s leading international education consultancies. The website presents study-abroad services, university partnerships, student success stories, and educational guidance in a professional and accessible format.',
    features: ['Study abroad services', 'University partnerships showcase', 'Student success stories', 'Professional design', 'Accessible content structure'],
    image_url: '/images/ABEC.webp',
    gallery: [
      { url: '/images/ABEC gallery .webp', alt: 'ABEC cover image' },
      { url: '/images/ABEC gallery 1.webp', alt: 'ABEC preview' },
    ],
    external_url: 'https://abec.lk',
    display_order: 3,
  },
  {
    id: 'vauxhall-court-care-home',
    slug: 'vauxhall-court-care-home',
    name: 'Vauxhall Court Care Home',
    client_type: 'Website Design & Development',
    tags: ['Healthcare', 'Care Home', 'Website Design', 'Development'],
    summary: 'Compassionate, personalised care in a safe and welcoming environment.',
    description: 'At Vauxhall Court Care Home, we provide more than just care—we create a welcoming home built on trust, warmth, and respect. With personalised care plans, dedicated staff, and round-the-clock support, we ensure every resident feels safe, valued, and comfortable.',
    features: ['UI/UX Design', 'Website Design', 'Frontend Development', 'Responsive Development', 'SEO Optimization', 'Performance Optimization'],
    image_url: '/images/Vauxhall.webp',
    gallery: [
      { url: '/images/Vauxhall gallery.webp', alt: 'Vauxhall Court Care Home hero image' },
      { url: '/images/Vauxhall gallery 1.webp', alt: 'Vauxhall Court Care Home interface preview' },
    ],
    external_url: 'https://vauxhallcourtcarehome.com/',
    display_order: 4,
  },
  {
    id: 'sen-destinations',
    slug: 'sen-destinations',
    name: 'Sen Destinations',
    client_type: 'Website Design & Development',
    tags: ['Travel', 'Tourism', 'Website Design', 'Development'],
    summary: 'Sri Lanka, curated with precision.',
    description: 'Sen Destinations is a premier Destination Management Company headquartered in Colombo, Sri Lanka. We design MICE programs, incentive tours, group travel, family holidays, honeymoon escapes, Ramayana trail journeys, and custom itineraries with complete on-ground confidence. From arrivals and hotels to venues, coaches, restaurants, guides, experiences, and 24/7 support, every detail is coordinated by a team that knows the island intimately.',
    features: ['UI/UX Design', 'Website Design', 'Frontend Development', 'Responsive Development', 'SEO Optimization', 'Performance Optimization'],
    image_url: '/images/Sen.webp',
    gallery: [
      { url: '/images/sen gallery.webp', alt: 'Sen Destinations hero image' },
      { url: '/images/sen gallery 1.webp', alt: 'Sen Destinations interface preview' },
    ],
    external_url: 'https://sendestinations.com/',
    display_order: 5,
  },
];

export function getPortfolioProjectBySlug(slug: string): PortfolioProject | undefined {
  return PORTFOLIO_PROJECTS.find((project) => project.slug === slug);
}

export function getPortfolioProjectSlugs(): string[] {
  return PORTFOLIO_PROJECTS.map((project) => project.slug);
}

export function getPortfolioProjects(): PortfolioProject[] {
  return [...PORTFOLIO_PROJECTS].sort((a, b) => a.display_order - b.display_order);
}
