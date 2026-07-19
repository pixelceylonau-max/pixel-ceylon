import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProjectDetail from './ProjectDetail';
import { generateProjectMetadata, generateProjectSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { StructuredData } from '@/components/seo/StructuredData';
import { getPortfolioProjectBySlug, getPortfolioProjectSlugs, type PortfolioProject } from '@/lib/portfolio-projects';

export const revalidate = 60;
export const dynamicParams = true;

type Project = PortfolioProject;

function getProject(slug: string): Project | null {
  return getPortfolioProjectBySlug(slug) || null;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = getProject(params.slug);
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
      robots: { index: false, follow: false },
    };
  }

  return generateProjectMetadata(project);
}

export async function generateStaticParams() {
  return getPortfolioProjectSlugs().map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Work', url: '/#projects' },
    { name: project.name, url: `/work/${project.slug}` },
  ];

  const structuredData = [
    generateProjectSchema({
      name: project.name,
      slug: project.slug,
      summary: project.summary,
      description: project.description,
      tags: project.tags,
      features: project.features,
      image_url: project.image_url,
      external_url: project.external_url,
    }),
    generateBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <>
      {/* Structured Data for SEO */}
      <StructuredData data={structuredData} id="project-page-structured-data" />

      <ProjectDetail project={project} />
    </>
  );
}
