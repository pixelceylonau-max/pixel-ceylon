import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import ProjectDetail from './ProjectDetail';

type Project = {
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

async function getProject(slug: string): Promise<Project | null> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !data) return null;

  return {
    id: data.id,
    slug: data.slug,
    name: data.name,
    client_type: data.client_type,
    tags: data.tags || [],
    summary: data.summary,
    description: data.description,
    features: data.features || [],
    image_url: data.image_url,
    gallery: data.gallery || [],
    external_url: data.external_url,
    display_order: data.display_order,
  };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = await getProject(params.slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.name} — Pixel Ceylon`,
    description: project.summary,
    openGraph: {
      title: `${project.name} — Pixel Ceylon`,
      description: project.summary,
      images: project.image_url ? [{ url: project.image_url }] : [],
    },
  };
}

export async function generateStaticParams() {
  const { data } = await supabase.from('projects').select('slug');
  return (data || []).map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);
  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
